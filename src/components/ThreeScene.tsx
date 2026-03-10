import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import bgVideoUrl from '../assets/bg.mp4';
import firstModelUrl from '../assets/first_constellation_loop.glb';
import secondModelUrl from '../assets/second_constellation_loop.glb';
import thirdModelUrl from '../assets/third_constellation_loop.glb';

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
  const size = 512;
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

interface ThreeSceneProps {
  scrollContainerSelector: string;
}

export default function ThreeScene({ scrollContainerSelector }: ThreeSceneProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    let geminiStar: THREE.Sprite;

    const models: ModelEntry[] = [
      { url: firstModelUrl, loaded: null, mixer: null, actions: null, duration: 0, starMaterials: [] },
      { url: secondModelUrl, loaded: null, mixer: null, actions: null, duration: 0, starMaterials: [] },
      { url: thirdModelUrl, loaded: null, mixer: null, actions: null, duration: 0, starMaterials: [] },
    ];

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      canvas.clientWidth / canvas.clientHeight,
      0.01,
      10000,
    );
    camera.position.set(0, 1, 16);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = baseExposure;
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    // Bloom post-processing
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(canvas.clientWidth, canvas.clientHeight),
      baseBloomStrength,
      0.8,
      0.1,
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
    scene.add(geminiStar);

    // Looping video background
    const video = document.createElement('video');
    video.src = bgVideoUrl;
    video.crossOrigin = 'anonymous';
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.play();
    const videoTexture = new THREE.VideoTexture(video);
    videoTexture.colorSpace = THREE.SRGBColorSpace;
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.magFilter = THREE.LinearFilter;
    scene.background = videoTexture;
    scene.backgroundIntensity = 0.75;

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.15));
    const key = new THREE.DirectionalLight(0xffffff, 0.4);
    key.position.set(5, 5, 5);
    scene.add(key);

    // Orbit controls — rotation only
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableDamping = true;
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
            model.position.x += 0.9;
            model.position.y += 2;
            model.scale.multiplyScalar(1.9);
          }

          if (i === 2) {
            model.position.x += 0.4;
            model.scale.multiplyScalar(3);
          }

          // Star-like material
          model.traverse((child) => {
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
          }

          loadedCount++;
          if (loadedCount === models.length) setupScrollAnimation();
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

      const scrollTriggerInstance = gsap.to(proxy, {
        p: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: scrollContainerSelector,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.6,
        },
        onUpdate: () => {
          const progress = proxy.p;
          const nakshatraT = mapRange(progress, 0.0, 0.2);
          const model0T = mapRange(progress, 0.25, 0.45); // Saptarishi
          const model1T = mapRange(progress, 0.5, 0.72); // Chakravyuha
          const model2T = mapRange(progress, 0.72, 1.0); // Dhruva (extended)
          const modelProgress = [model0T, model1T, model2T];
          const finalPhase = THREE.MathUtils.smoothstep(model2T, 0.76, 1);
          const nakshatraGlowIn = THREE.MathUtils.smoothstep(nakshatraT, 0.02, 0.28);
          const nakshatraGlowOut = 1 - THREE.MathUtils.smoothstep(nakshatraT, 0.45, 0.75);
          const nakshatraGlow = Math.max(0, nakshatraGlowIn * nakshatraGlowOut);
          const nakshatraPulse = 0.75 + Math.sin(performance.now() * 0.01) * 0.25;
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

            entry.starMaterials.forEach((mat) => {
              mat.emissiveIntensity = nakshatraStarEmissive;
            });
          });

          // Gemini-style star flash — track center, lock once converged
          const third = models[2]?.loaded;
          if (geminiStar && third) {
            geminiStar.visible = finalPhase > 0.001;
            const box = new THREE.Box3().setFromObject(third);
            const center = box.getCenter(new THREE.Vector3());
            // Once near full convergence, lock the position permanently
            if (model2T >= 0.85) {
              if (!lockedStarPos) {
                lockedStarPos = center.clone();
              }
              geminiStar.position.copy(lockedStarPos);
            } else {
              // Track the live center before convergence
              geminiStar.position.copy(center);
            }
            const s = THREE.MathUtils.lerp(0.35, 5, finalPhase);
            geminiStar.scale.set(s, s, 1);
            geminiStar.material.opacity = THREE.MathUtils.lerp(0.04, 0.55, finalPhase);
          }

          bloomPass.strength = THREE.MathUtils.lerp(baseBloomStrength, 3, finalPhase);
          renderer.toneMappingExposure = THREE.MathUtils.lerp(baseExposure, 1.72, finalPhase);
        },
      });

      // Store for cleanup
      scrollTriggerRef = scrollTriggerInstance;
    }

    // Resize handler
    const onResize = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      composer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // Render loop
    let animFrameId = 0;
    let scrollTriggerRef: gsap.core.Tween | null = null;

    const animate = () => {
      animFrameId = requestAnimationFrame(animate);
      controls.update();
      composer.render();
    };
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', onResize);

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
      }}
    />
  );
}
