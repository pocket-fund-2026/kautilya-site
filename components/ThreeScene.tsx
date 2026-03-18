"use client";
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const bgVideoUrl = '/bg.mp4';
const firstModelUrl = '/models/first_constellation_loop.glb';
const secondModelUrl = '/models/second_constellation_loop.glb';
const thirdModelUrl = '/models/third_constellation_loop.glb';

gsap.registerPlugin(ScrollTrigger);

const baseBloomStrength = 1.4;
const baseExposure = 1.5;
const baseStarEmissive = 2.5;

interface ModelEntry {
  url: string;
  loaded: THREE.Group | null;
  mixer: THREE.AnimationMixer | null;
  actions: THREE.AnimationAction[] | null;
  duration: number;
  starMaterials: THREE.MeshStandardMaterial[];
}

/** Scale model so its largest dimension = desiredSize, then centre at origin */
function fitAndCenter(model: THREE.Object3D, desiredSize = 7) {
  const box = new THREE.Box3().setFromObject(model);
  const size = box.getSize(new THREE.Vector3());
  const maxDim = Math.max(size.x, size.y, size.z);
  if (maxDim > 0) model.scale.setScalar(desiredSize / maxDim);
  const newBox = new THREE.Box3().setFromObject(model);
  const newCenter = newBox.getCenter(new THREE.Vector3());
  model.position.sub(newCenter);
}

/** Create a 4-point navigation star texture */
function createGeminiStarTexture() {
  const size = 256;
  const c = document.createElement('canvas');
  c.width = size;
  c.height = size;
  const ctx = c.getContext('2d')!;
  const mid = size / 2;

  const halo = ctx.createRadialGradient(mid, mid, 0, mid, mid, mid * 0.9);
  halo.addColorStop(0, 'rgba(255,235,170,0.9)');
  halo.addColorStop(0.2, 'rgba(255,210,120,0.65)');
  halo.addColorStop(0.5, 'rgba(255,185,80,0.22)');
  halo.addColorStop(1, 'rgba(255,170,70,0)');
  ctx.fillStyle = halo;
  ctx.fillRect(0, 0, size, size);

  ctx.save();
  ctx.translate(mid, mid);
  ctx.fillStyle = 'rgba(255,224,140,0.98)';
  ctx.beginPath();
  ctx.moveTo(0, -mid * 0.8);
  ctx.lineTo(mid * 0.11, -mid * 0.11);
  ctx.lineTo(mid * 0.8, 0);
  ctx.lineTo(mid * 0.11, mid * 0.11);
  ctx.lineTo(0, mid * 0.8);
  ctx.lineTo(-mid * 0.11, mid * 0.11);
  ctx.lineTo(-mid * 0.8, 0);
  ctx.lineTo(-mid * 0.11, -mid * 0.11);
  ctx.closePath();
  ctx.fill();
  ctx.restore();

  const core = ctx.createRadialGradient(mid, mid, 0, mid, mid, mid * 0.14);
  core.addColorStop(0, 'rgba(255,255,245,1)');
  core.addColorStop(1, 'rgba(255,240,190,0)');
  ctx.fillStyle = core;
  ctx.fillRect(0, 0, size, size);

  const texture = new THREE.CanvasTexture(c);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

function getTrimmedModelAnchor(model: THREE.Object3D) {
  const meshCenters: THREE.Vector3[] = [];
  const meshBox = new THREE.Box3();

  model.traverse((child) => {
    if (!(child as THREE.Mesh).isMesh) return;

    meshBox.setFromObject(child);
    if (meshBox.isEmpty()) return;

    meshCenters.push(meshBox.getCenter(new THREE.Vector3()));
  });

  if (meshCenters.length === 0) {
    return new THREE.Box3().setFromObject(model).getCenter(new THREE.Vector3());
  }

  const sortedByX = [...meshCenters].sort((a, b) => a.x - b.x);
  const trimCount = Math.floor(sortedByX.length * 0.2);
  const trimmed = sortedByX.slice(trimCount, sortedByX.length - trimCount || sortedByX.length);
  const anchorPool = trimmed.length > 0 ? trimmed : sortedByX;

  const anchor = new THREE.Vector3();
  anchorPool.forEach((center) => {
    anchor.add(center);
  });

  return anchor.multiplyScalar(1 / anchorPool.length);
}

interface ThreeSceneProps {
  scrollContainerSelector: string;
}

export default function ThreeScene({ scrollContainerSelector }: ThreeSceneProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    setIsReady(false);

    let disposed = false;
    let modelsReady = false;
    let videoReady = false;

    const markReady = () => {
      if (!disposed && modelsReady && videoReady) {
        setIsReady(true);
      }
    };

    const scene = new THREE.Scene();
    let geminiStar: THREE.Sprite;
    const tempBox = new THREE.Box3();
    const tempCenter = new THREE.Vector3();
    const touchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(touchDevice);
    const isMobileScreen = window.matchMedia('(max-width: 768px)').matches;
    const maxPixelRatio = isMobileScreen ? 1 : 1.5;
    const bloomResolutionScale = isMobileScreen ? 0.32 : 0.5;
    const bloomStrengthMax = isMobileScreen ? 1.8 : 3;

    const models: ModelEntry[] = [
      { url: firstModelUrl, loaded: null, mixer: null, actions: null, duration: 0, starMaterials: [] },
      { url: secondModelUrl, loaded: null, mixer: null, actions: null, duration: 0, starMaterials: [] },
      { url: thirdModelUrl, loaded: null, mixer: null, actions: null, duration: 0, starMaterials: [] },
    ];

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      100,
    );
    camera.position.set(0, 1, 16);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, maxPixelRatio));
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = baseExposure;
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    // Bloom post-processing
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(canvas.clientWidth * bloomResolutionScale, canvas.clientHeight * bloomResolutionScale),
      baseBloomStrength,
      0.6,
      0.15,
    );
    composer.addPass(bloomPass);

    // Gemini star sprite
    const starTexture = createGeminiStarTexture();
    const starMaterial = new THREE.SpriteMaterial({
      map: starTexture,
      color: 0xffd579,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    geminiStar = new THREE.Sprite(starMaterial);
    geminiStar.visible = false;
    geminiStar.scale.set(0.01, 0.01, 1);
    geminiStar.frustumCulled = false;
    scene.add(geminiStar);

    // Looping video background
    const video = document.createElement('video');
    video.src = bgVideoUrl;
    video.crossOrigin = 'anonymous';
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.preload = 'auto';

    const tryPlayVideo = () => {
      void video.play().catch(() => {
        // Ignore autoplay race errors; we'll retry on user interaction/visibility changes.
      });
    };

    let lastFramedCanvasW = 0;
    let lastFramedCanvasH = 0;
    let lastFramedVideoW = 0;
    let lastFramedVideoH = 0;

    const updateVideoBackgroundFraming = (texture: THREE.VideoTexture, force = false) => {
      const canvasWidth = canvas.clientWidth;
      const canvasHeight = canvas.clientHeight;
      if (canvasWidth <= 0 || canvasHeight <= 0) return;

      const vw = video.videoWidth;
      const vh = video.videoHeight;

      // Skip if nothing changed (unless forced)
      if (
        !force &&
        canvasWidth === lastFramedCanvasW &&
        canvasHeight === lastFramedCanvasH &&
        vw === lastFramedVideoW &&
        vh === lastFramedVideoH
      ) return;

      lastFramedCanvasW = canvasWidth;
      lastFramedCanvasH = canvasHeight;
      lastFramedVideoW = vw;
      lastFramedVideoH = vh;

      const canvasAspect = canvasWidth / canvasHeight;
      const videoAspect = vw > 0 && vh > 0 ? vw / vh : 16 / 9;

      texture.center.set(0.5, 0.5);

      // Keep the video in "cover" mode so it fills the viewport during resizes/orientation changes.
      if (canvasAspect > videoAspect) {
        const repeatY = videoAspect / canvasAspect;
        texture.repeat.set(1, repeatY);
        texture.offset.set(0, (1 - repeatY) / 2);
      }
      else {
        const repeatX = canvasAspect / videoAspect;
        texture.repeat.set(repeatX, 1);
        texture.offset.set((1 - repeatX) / 2, 0);
      }

      texture.needsUpdate = true;
    };

    const onVisibilityChange = () => {
      if (!document.hidden) {
        tryPlayVideo();
      }
    };

    const onUserResume = () => {
      tryPlayVideo();
    };

    const onVideoReady = () => {
      videoReady = true;
      markReady();
    };

    const onVideoMetadata = () => {
      updateVideoBackgroundFraming(videoTexture, true);
      // Some mobile browsers may delay loadeddata but still expose metadata.
      if (!videoReady) {
        videoReady = true;
        markReady();
      }
    };

    video.addEventListener('canplay', tryPlayVideo);
    video.addEventListener('loadeddata', onVideoReady);
    document.addEventListener('visibilitychange', onVisibilityChange);
    window.addEventListener('pointerdown', onUserResume, { passive: true });
    window.addEventListener('touchstart', onUserResume, { passive: true });
    tryPlayVideo();
    const videoTexture = new THREE.VideoTexture(video);
    videoTexture.colorSpace = THREE.SRGBColorSpace;
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.magFilter = THREE.LinearFilter;
    videoTexture.wrapS = THREE.ClampToEdgeWrapping;
    videoTexture.wrapT = THREE.ClampToEdgeWrapping;
    updateVideoBackgroundFraming(videoTexture);
    scene.background = videoTexture;
    scene.backgroundIntensity = 0.75;

    video.addEventListener('loadedmetadata', onVideoMetadata);

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.15));
    const key = new THREE.DirectionalLight(0xffffff, 0.4);
    key.position.set(5, 5, 5);
    scene.add(key);

    // Orbit controls — rotation only; disabled on touch devices to preserve vertical scroll
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.enabled = !touchDevice;
    controls.target.set(0, 0, 0);
    controls.update();

    // Load all three models
    const loader = new GLTFLoader();
    let loadedCount = 0;

    models.forEach((entry, i) => {
      loader.load(
        entry.url,
        (gltf) => {
          const model = gltf.scene;
          scene.add(model);
          entry.loaded = model;

          fitAndCenter(model, 18);

          if (i === 1) {
            model.position.x += isMobileScreen ? 0.3 : 0.9;
            model.position.y += isMobileScreen ? 1.2 : 2;
            model.scale.multiplyScalar(isMobileScreen ? 1.3 : 1.9);
          }

          if (i === 2) {
            model.scale.multiplyScalar(isMobileScreen ? 2 : 3);
          }

          // Star-like material + perf: disable frustum culling, freeze static transforms
          model.traverse((child) => {
            child.frustumCulled = false;
            if ((child as THREE.Mesh).isMesh) {
              const mesh = child as THREE.Mesh;
              const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
              mats.forEach((m) => {
                const mat = m as THREE.MeshStandardMaterial;
                mat.color.set(0x000000);
                mat.map = null;
                mat.emissive.set(0xffc850);
                mat.emissiveIntensity = baseStarEmissive;
                mat.needsUpdate = true;
                entry.starMaterials.push(mat);
              });
            }
          });

          model.visible = true;

          // Set up mixer & actions
          if (gltf.animations?.length) {
            const mixer = new THREE.AnimationMixer(model);
            const actions = gltf.animations.map((clip) => {
              const action = mixer.clipAction(clip);
              action.clampWhenFinished = true;
              action.loop = THREE.LoopOnce;
              action.play();
              action.enabled = true;
              action.paused = false;
              action.setEffectiveWeight(1);
              action.setEffectiveTimeScale(0);
              action.time = 0;
              return action;
            });
            entry.mixer = mixer;
            entry.actions = actions;
            entry.duration = Math.max(...gltf.animations.map((c) => c.duration));

            if (i === 2) {
              actions.forEach((action) => {
                const clipDuration = action.getClip().duration;
                action.time = Math.max(clipDuration - 0.0001, 0);
              });
              mixer.update(0);

              const finalAnchor = getTrimmedModelAnchor(model);
              model.position.x -= finalAnchor.x;
              model.position.x += 0.3;

              actions.forEach((action) => {
                action.time = 0;
              });
              mixer.update(0);
            }
          }

          loadedCount++;
          if (loadedCount === models.length) {
            modelsReady = true;
            markReady();
            setupScrollAnimation();
          }
        },
        undefined,
        (err) => console.error('Failed to load:', entry.url, err),
      );
    });

    // Scroll-driven animation
    function setupScrollAnimation() {
      const proxy = { p: 0 };
      let lockedStarPos: THREE.Vector3 | null = null;

      const mapRange = (p: number, start: number, end: number) => {
        if (p <= start) return 0;
        if (p >= end) return 1;
        return (p - start) / (end - start);
      };

      const scrollTl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: scrollContainerSelector,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.5,
        },
        onUpdate: () => {
          const progress = proxy.p;
          const nakshatraT = mapRange(progress, 0.0, 0.3); // Early glow for "Nakshatra" text window
          const model0T = mapRange(progress, 0.35, 0.45); // Saptarishi
          const model1T = mapRange(progress, 0.47, 0.67); // Chakravyuha — matches "Strategy is the difference" text window
          const model2T = mapRange(progress, 0.72, 1.0); // Dhruva
          const modelProgress = [model0T, model1T, model2T];
          const finalPhase = THREE.MathUtils.smoothstep(model2T, 0.76, 1);
          const nakshatraGlowIn = THREE.MathUtils.smoothstep(nakshatraT, 0.02, 0.28);
          const nakshatraGlowOut = 1 - THREE.MathUtils.smoothstep(nakshatraT, 0.45, 0.75);
          const nakshatraGlow = Math.max(0, nakshatraGlowIn * nakshatraGlowOut);
          const nakshatraPulse = 0.9 + Math.sin(performance.now() * 0.01) * 0.25;
          const nakshatraGlowBoost = Math.min(1, nakshatraGlow * nakshatraPulse);
          const nakshatraStarEmissive = THREE.MathUtils.lerp(baseStarEmissive, 5.4, nakshatraGlowBoost);

          models.forEach((entry, i) => {
            if (!entry.mixer || !entry.duration || !entry.actions?.length) return;

            const localT = modelProgress[i] ?? 0;
            const targetTime = localT * entry.duration;

            entry.actions.forEach((action) => {
              const clipDuration = action.getClip().duration;
              action.time = Math.min(targetTime, Math.max(clipDuration - 0.0001, 0));
            });
            entry.mixer.update(0);
          });

          // Batch emissive update only when there's a meaningful change
          const roundedEmissive = Math.round(nakshatraStarEmissive * 100) / 100;
          models.forEach((entry) => {
            const first = entry.starMaterials[0];
            if (first && Math.abs(first.emissiveIntensity - roundedEmissive) > 0.01) {
              entry.starMaterials.forEach((mat) => {
                mat.emissiveIntensity = roundedEmissive;
              });
            }
          });

          // Gemini-style star flash — track center, lock once converged
          const showStar = finalPhase > 0.001;
          const third = models[2]?.loaded;
          if (geminiStar && third) {
            const thirdAnchor = getTrimmedModelAnchor(third);

            geminiStar.visible = showStar;
            if (!showStar) {
              lockedStarPos = null;
            }
            else {
              if (!lockedStarPos && finalPhase >= 0.14) {
                lockedStarPos = thirdAnchor.clone();
              }
              geminiStar.position.copy(lockedStarPos ?? thirdAnchor);
              const s = THREE.MathUtils.lerp(0.35, 5, finalPhase);
              geminiStar.scale.set(s, s, 1);
              geminiStar.material.opacity = THREE.MathUtils.lerp(0.04, 0.55, finalPhase);
            }
          }

          bloomPass.strength = THREE.MathUtils.lerp(baseBloomStrength, bloomStrengthMax, finalPhase);
          renderer.toneMappingExposure = THREE.MathUtils.lerp(baseExposure, 1.72, finalPhase);
        },
      });

      const addStepHold = (label: string, target: number, travel = 1, hold = 0.45) => {
        scrollTl.addLabel(label);
        scrollTl.to(proxy, { p: target, duration: travel });
        scrollTl.to(proxy, { p: target, duration: hold });
      };

      // Step-and-hold structure to force narrative dwell at key moments.
      addStepHold('phase-market', 0.3, 1.0, 0.80);
      addStepHold('phase-saptarishi', 0.35, 1.05, 0.8);   // Target 0.45 matches model0T end
      addStepHold('phase-chakravyuha', 0.67, 5, 2);   // Target 0.65 matches model1T end, slow travel (3.5)
      addStepHold('phase-kautilya', 0.85, 1.1, 0.7);
      scrollTl.addLabel('phase-final');
      scrollTl.to(proxy, { p: 1.0, duration: 1.1 });

      // Store for cleanup
      scrollTriggerRef = scrollTl;
    }

    // Resize handler
    let lastViewportWidth = 0;
    let lastViewportHeight = 0;
    let lastPixelRatio = 0;

    const syncViewportSize = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const dpr = Math.min(window.devicePixelRatio, maxPixelRatio);
      if (w === 0 || h === 0) return;
      if (w === lastViewportWidth && h === lastViewportHeight && dpr === lastPixelRatio) return;

      lastViewportWidth = w;
      lastViewportHeight = h;
      lastPixelRatio = dpr;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      renderer.setPixelRatio(dpr);
      renderer.setSize(w, h, false);

      // Rebuild bloom + composer render targets at new resolution
      bloomPass.resolution.set(w * bloomResolutionScale, h * bloomResolutionScale);
      // Dispose old render targets and recreate at new size
      composer.setSize(w, h);
      // Force the renderer's internal viewport to match
      renderer.setViewport(0, 0, w, h);

      updateVideoBackgroundFraming(videoTexture, true);
    };

    const resizeObserver = new ResizeObserver(() => syncViewportSize());
    resizeObserver.observe(canvas);

    const onResize = () => syncViewportSize();
    window.visualViewport?.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize);
    window.addEventListener('resize', onResize);
    document.addEventListener('fullscreenchange', onResize);

    // Run after first paint so mobile layout settles before first camera/renderer sizing.
    requestAnimationFrame(onResize);

    // Render loop
    let animFrameId = 0;
    let scrollTriggerRef: gsap.core.Animation | null = null;
    let lastFrameTime = 0;
    const frameBudgetMs = isMobileScreen ? 1000 / 30 : 1000 / 60;

    const animate = (time = 0) => {
      animFrameId = requestAnimationFrame(animate);
      syncViewportSize();
      updateVideoBackgroundFraming(videoTexture);
      if (time - lastFrameTime < frameBudgetMs) return;
      lastFrameTime = time;
      controls.update();
      composer.render();
    };
    animate();

    // Cleanup
    return () => {
      disposed = true;
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('orientationchange', onResize);
      window.visualViewport?.removeEventListener('resize', onResize);
      document.removeEventListener('fullscreenchange', onResize);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('pointerdown', onUserResume);
      window.removeEventListener('touchstart', onUserResume);
      video.removeEventListener('canplay', tryPlayVideo);
      video.removeEventListener('loadeddata', onVideoReady);
      video.removeEventListener('loadedmetadata', onVideoMetadata);
      resizeObserver.disconnect();

      // Kill GSAP scroll triggers created by this scene
      if (scrollTriggerRef) {
        const st = (scrollTriggerRef as gsap.core.Tween & { scrollTrigger?: ScrollTrigger }).scrollTrigger;
        if (st) st.kill();
        scrollTriggerRef.kill();
      }

      // Dispose Three.js resources
      video.pause();
      video.src = '';
      videoTexture.dispose();
      starTexture.dispose();
      starMaterial.dispose();
      bloomPass.dispose();
      composer.dispose();
      renderer.dispose();
      controls.dispose();

      // Dispose models
      models.forEach((entry) => {
        if (entry.loaded) {
          entry.loaded.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
              const mesh = child as THREE.Mesh;
              mesh.geometry?.dispose();
              const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
              mats.forEach((m) => m.dispose());
            }
          });
          scene.remove(entry.loaded);
        }
      });
    };
  }, [scrollContainerSelector]);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0,
          touchAction: 'auto',
          pointerEvents: isTouchDevice ? 'none' : 'auto',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'radial-gradient(ellipse at center, rgba(12,16,28,0.85) 0%, rgba(8,10,18,0.95) 100%)',
          pointerEvents: 'none',
          color: 'rgba(249,248,246,0.9)',
          fontSize: '12px',
          letterSpacing: '4px',
          textTransform: 'uppercase' as const,
          textShadow: '0 0 20px rgba(0,0,0,0.8)',
          opacity: isReady ? 0 : 1,
          transition: 'opacity 0.8s ease',
        }}
      >
        Loading Sky...
      </div>
    </>
  );
}
//comment to allow push
