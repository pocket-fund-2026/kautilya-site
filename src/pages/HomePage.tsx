import { useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import starryBgVideo from '../assets/starry_bg.mp4';

// ---- Constellation definitions (normalised 0–1 coordinate space) ----

// Nakshatra — scattered star field, an organic random cluster
function generateNakshatra() {
  const stars: { x: number; y: number }[] = [];
  const lines: [number, number][] = [];
  // Seed-based pseudo-random for consistency
  const seed = (n: number) => {
    const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
    return x - Math.floor(x);
  };
  // Generate 18 scattered stars in a loose cloud across center (shifted down to compensate parallax)
  const count = 18;
  for (let i = 0; i < count; i++) {
    stars.push({
      x: 0.25 + seed(i * 3 + 1) * 0.50,
      y: 0.30 + seed(i * 3 + 2) * 0.45, // shifted down from 0.15
    });
  }
  // No connecting lines — Nakshatra is meant to be random/scattered
  return { stars, lines };
}
const NAKSHATRA = generateNakshatra();

// Saptarishi / Big Dipper — 7 stars connected, centered on screen
const SAPTARISHI_STARS = [
  { x: 0.38, y: 0.38 }, // Dubhe
  { x: 0.41, y: 0.35 }, // Merak
  { x: 0.46, y: 0.34 }, // Phecda
  { x: 0.50, y: 0.37 }, // Megrez (center)
  { x: 0.55, y: 0.35 }, // Alioth
  { x: 0.60, y: 0.32 }, // Mizar
  { x: 0.65, y: 0.30 }, // Alkaid
];
const SAPTARISHI_LINES: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 0], // bowl
  [3, 4], [4, 5], [5, 6],         // handle
];

// Chakravyuha — spiral / layered formation (concentric rings of points)
function generateChakravyuha(cx: number, cy: number, layers: number, pointsPerLayer: number) {
  const stars: { x: number; y: number }[] = [];
  const lines: [number, number][] = [];
  let idx = 0;
  // Center star
  stars.push({ x: cx, y: cy });
  idx++;
  for (let layer = 1; layer <= layers; layer++) {
    const radius = 0.04 * layer + 0.01 * layer * layer * 0.3;
    const count = pointsPerLayer + layer * 2;
    const offset = layer * 0.4; // spiral offset per layer
    const firstInLayer = idx;
    for (let p = 0; p < count; p++) {
      const angle = ((Math.PI * 2) / count) * p + offset;
      stars.push({
        x: cx + Math.cos(angle) * radius,
        y: cy + Math.sin(angle) * radius * 0.7, // slight ellipse
      });
      // Connect to previous point in this ring
      if (p > 0) lines.push([idx - 1, idx]);
      // Connect to center for inner ring
      if (layer === 1) lines.push([0, idx]);
      idx++;
    }
    // Close the ring
    lines.push([idx - 1, firstInLayer]);
  }
  return { stars, lines };
}

const CHAKRAVYUHA = generateChakravyuha(0.50, 0.45, 3, 5);

// Dhruva — Pole Star with radiating rays
const DHRUVA_CENTER = { x: 0.50, y: 0.38 };
function generateDhruva() {
  const stars: { x: number; y: number }[] = [DHRUVA_CENTER];
  const lines: [number, number][] = [];
  const rays = 8;
  const innerR = 0.04;
  const outerR = 0.12;
  let idx = 1;
  for (let i = 0; i < rays; i++) {
    const angle = ((Math.PI * 2) / rays) * i - Math.PI / 2;
    // inner point
    stars.push({
      x: DHRUVA_CENTER.x + Math.cos(angle) * innerR,
      y: DHRUVA_CENTER.y + Math.sin(angle) * innerR * 0.7,
    });
    lines.push([0, idx]);
    idx++;
    // outer point
    stars.push({
      x: DHRUVA_CENTER.x + Math.cos(angle) * outerR,
      y: DHRUVA_CENTER.y + Math.sin(angle) * outerR * 0.7,
    });
    lines.push([idx - 1, idx]);
    idx++;
  }
  // Connect outer ring
  for (let i = 0; i < rays; i++) {
    const a = 2 + i * 2; // outer indices: 2, 4, 6 ...
    const b = 2 + ((i + 1) % rays) * 2;
    lines.push([a, b]);
  }
  return { stars, lines };
}
const DHRUVA = generateDhruva();

export default function HomePage() {
  const scrollProgressRef = useRef(0);
  const rafRef = useRef<number>(0);
  // Mouse parallax — normalised target (-1..1) and smoothed current
  const mouseTargetRef = useRef({ x: 0, y: 0 });
  const mouseSmoothedRef = useRef({ x: 0, y: 0 });

  const handleScroll = useCallback(() => {
    const skyWrapper = document.getElementById('skyWrapper');
    const skyScroll = document.getElementById('skyScroll');
    const header = document.getElementById('mainHeader');
    const phaseDots = document.getElementById('phaseDots');

    if (!skyWrapper || !skyScroll) return;

    const wrapperRect = skyWrapper.getBoundingClientRect();
    const scrollHeight = skyScroll.scrollHeight - window.innerHeight;
    const scrolled = -wrapperRect.top;
    const progress = Math.max(0, Math.min(1, scrolled / scrollHeight));

    // Store progress for canvas draw loop
    scrollProgressRef.current = progress;

    // Header sky mode
    if (header) {
      const inSky = wrapperRect.top <= 0 && wrapperRect.bottom >= window.innerHeight;
      header.classList.toggle('header--sky', inSky);
    }

    // Phase dots
    if (phaseDots) {
      const inSky = wrapperRect.top <= 0 && wrapperRect.bottom >= window.innerHeight;
      phaseDots.classList.toggle('show', inSky);
      const dots = phaseDots.querySelectorAll('.phase-dot');
      const phaseIndex = Math.min(3, Math.floor(progress * 4));
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i <= phaseIndex);
      });
    }

    // Sky text overlays — show one at a time based on scroll progress
    const textOverlays = [
      document.getElementById('skyText0'),
      document.getElementById('skyText1'),
      document.getElementById('skyText2'),
      document.getElementById('skyText3'),
    ];

    const phases = [
      [0.00, 0.20],  // phase 0 — "The market is vast"
      [0.25, 0.45],  // phase 1 — "Most of it is noise"
      [0.50, 0.72],  // phase 2 — "Strategy is the difference"
      [0.76, 1.00],  // phase 3 — KAUTILYA title hold
    ];

    textOverlays.forEach((el, i) => {
      if (!el) return;
      const [start, end] = phases[i];
      const fadeInStart = start;
      const fadeInEnd = start + 0.03;
      const fadeOutStart = end - 0.03;
      const fadeOutEnd = end;

      let opacity = 0;
      if (progress >= fadeInStart && progress <= fadeInEnd) {
        opacity = (progress - fadeInStart) / (fadeInEnd - fadeInStart);
      } else if (progress > fadeInEnd && progress < fadeOutStart) {
        opacity = 1;
      } else if (progress >= fadeOutStart && progress <= fadeOutEnd) {
        opacity = 1 - (progress - fadeOutStart) / (fadeOutEnd - fadeOutStart);
      }

      el.style.opacity = String(Math.max(0, Math.min(1, opacity)));
    });
  }, []);

  useEffect(() => {
    document.title = 'Kautilya — Buy-Side Advisory';

    // ---- Mouse parallax for camera-pan effect ----
    const onMouseMove = (e: MouseEvent) => {
      mouseTargetRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,   // -1 … 1
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      };
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // ---- Canvas star field with constellation phases ----
    const canvas = document.getElementById('skyCanvas') as HTMLCanvasElement | null;
    let animFrameId = 0;

    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        interface Star {
          x: number; y: number; r: number; alpha: number; speed: number;
          // For constellation morphing
          homeX: number; homeY: number;
        }

        const stars: Star[] = [];
        const STAR_COUNT = 300;
        let W = 0;
        let H = 0;

        const resize = () => {
          W = canvas.offsetWidth;
          H = canvas.offsetHeight;
          canvas.width = W * window.devicePixelRatio;
          canvas.height = H * window.devicePixelRatio;
          ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
          // Re-scatter home positions on resize
          for (const s of stars) {
            s.homeX = Math.random() * W;
            s.homeY = Math.random() * H;
            s.x = s.homeX;
            s.y = s.homeY;
          }
        };

        const init = () => {
          resize();
          stars.length = 0;
          for (let i = 0; i < STAR_COUNT; i++) {
            const x = Math.random() * W;
            const y = Math.random() * H;
            stars.push({
              x, y,
              homeX: x, homeY: y,
              r: Math.random() * 2.0 + 0.8,
              alpha: Math.random() * 0.5 + 0.4,
              speed: Math.random() * 0.003 + 0.001,
            });
          }
        };

        // Map normalised constellation coords to canvas coords, centred
        const mapCoords = (pts: { x: number; y: number }[]) =>
          pts.map(p => ({ x: p.x * W, y: p.y * H }));

        // Smoothly lerp stars toward target positions
        const lerpStars = (
          targets: { x: number; y: number }[],
          count: number,
          factor: number,
        ) => {
          for (let i = 0; i < Math.min(count, targets.length, stars.length); i++) {
            stars[i].x += (targets[i].x - stars[i].x) * factor;
            stars[i].y += (targets[i].y - stars[i].y) * factor;
          }
        };

        // Return stars to scattered positions
        const scatterStars = (factor: number) => {
          for (const s of stars) {
            s.x += (s.homeX - s.x) * factor;
            s.y += (s.homeY - s.y) * factor;
          }
        };

        // Draw connecting lines between constellation stars
        const drawLines = (
          linesDef: [number, number][],
          mapped: { x: number; y: number }[],
          lineAlpha: number,
        ) => {
          if (lineAlpha <= 0) return;
          ctx.strokeStyle = 'rgba(201,185,154,' + lineAlpha.toFixed(3) + ')';
          ctx.lineWidth = 1.2;
          for (const [a, b] of linesDef) {
            if (a >= mapped.length || b >= mapped.length) continue;
            ctx.beginPath();
            ctx.moveTo(mapped[a].x, mapped[a].y);
            ctx.lineTo(mapped[b].x, mapped[b].y);
            ctx.stroke();
          }
        };

        // Bright glow on constellation stars
        const drawConstellationGlow = (
          mapped: { x: number; y: number }[],
          glowAlpha: number,
        ) => {
          if (glowAlpha <= 0) return;
          for (const p of mapped) {
            // bright core
            ctx.globalAlpha = glowAlpha * 0.9;
            ctx.fillStyle = '#FFFBF5';
            ctx.beginPath();
            ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
            ctx.fill();
            // mid glow
            ctx.globalAlpha = glowAlpha * 0.6;
            ctx.fillStyle = '#C9B99A';
            ctx.beginPath();
            ctx.arc(p.x, p.y, 4.5, 0, Math.PI * 2);
            ctx.fill();
            // outer halo
            ctx.globalAlpha = glowAlpha * 0.15;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 12, 0, Math.PI * 2);
            ctx.fill();
          }
        };

        // Phase visibility helper — returns 0..1 for how "active" a phase is
        const phaseAlpha = (progress: number, start: number, end: number) => {
          const fadeIn = 0.03;
          const fadeOut = 0.03;
          if (progress < start || progress > end) return 0;
          if (progress < start + fadeIn) return (progress - start) / fadeIn;
          if (progress > end - fadeOut) return (end - progress) / fadeOut;
          return 1;
        };

        const draw = () => {
          ctx.clearRect(0, 0, W, H);
          const t = Date.now();
          const progress = scrollProgressRef.current;

          // Phase alphas
          const p0 = phaseAlpha(progress, 0.00, 0.20); // Nakshatra — scattered cluster
          const p1 = phaseAlpha(progress, 0.25, 0.45); // Saptarishi — Big Dipper
          const p2 = phaseAlpha(progress, 0.50, 0.72); // Chakravyuha — spiral
          const p3 = phaseAlpha(progress, 0.76, 1.00); // Dhruva — pole star

          const lerpSpeed = 0.04;

          // Phase 0: Nakshatra — scattered star cluster (no lines, pure random)
          if (p0 > 0) {
            const mapped = mapCoords(NAKSHATRA.stars);
            lerpStars(mapped, NAKSHATRA.stars.length, lerpSpeed * p0);
            drawConstellationGlow(mapped, p0);
          }

          // Phase 1: Saptarishi — move first 7 stars into Big Dipper
          if (p1 > 0) {
            const mapped = mapCoords(SAPTARISHI_STARS);
            lerpStars(mapped, SAPTARISHI_STARS.length, lerpSpeed * p1);
            drawLines(SAPTARISHI_LINES, mapped, p1 * 0.5);
            drawConstellationGlow(mapped, p1);
          }

          // Phase 2: Chakravyuha — spiral formation
          if (p2 > 0) {
            const mapped = mapCoords(CHAKRAVYUHA.stars);
            lerpStars(mapped, CHAKRAVYUHA.stars.length, lerpSpeed * p2);
            drawLines(CHAKRAVYUHA.lines, mapped, p2 * 0.35);
            drawConstellationGlow(mapped, p2);
          }

          // Phase 3: Dhruva — all stars converge to the pole star (navigation star)
          if (p3 > 0) {
            // Converge ALL stars to the center
            const centerTarget = mapCoords([DHRUVA_CENTER])[0];
            const convergeFactor = lerpSpeed * p3 * 1.8; // faster convergence
            for (const s of stars) {
              s.x += (centerTarget.x - s.x) * convergeFactor;
              s.y += (centerTarget.y - s.y) * convergeFactor;
            }

            // Draw Dhruva rays (minimal lines radiating from center)
            const mapped = mapCoords(DHRUVA.stars);
            drawLines(DHRUVA.lines, mapped, p3 * 0.3);

            // Gemini-logo style glow on the pole star
            const center = centerTarget;
            const pulse = Math.sin(t * 0.0012) * 0.15 + 0.85; // subtle pulse

            // Multi-layer radial gradient glow (Gemini aesthetic)
            // Outermost halo — soft purple/blue tint
            const grad1 = ctx.createRadialGradient(center.x, center.y, 0, center.x, center.y, 80);
            grad1.addColorStop(0, `rgba(138, 180, 248, ${p3 * 0.18 * pulse})`);
            grad1.addColorStop(0.4, `rgba(138, 180, 248, ${p3 * 0.08 * pulse})`);
            grad1.addColorStop(1, 'rgba(138, 180, 248, 0)');
            ctx.fillStyle = grad1;
            ctx.fillRect(center.x - 80, center.y - 80, 160, 160);

            // Mid glow — warm golden
            const grad2 = ctx.createRadialGradient(center.x, center.y, 0, center.x, center.y, 40);
            grad2.addColorStop(0, `rgba(255, 215, 145, ${p3 * 0.5 * pulse})`);
            grad2.addColorStop(0.5, `rgba(255, 215, 145, ${p3 * 0.2 * pulse})`);
            grad2.addColorStop(1, 'rgba(255, 215, 145, 0)');
            ctx.fillStyle = grad2;
            ctx.fillRect(center.x - 40, center.y - 40, 80, 80);

            // Inner glow — bright white core
            const grad3 = ctx.createRadialGradient(center.x, center.y, 0, center.x, center.y, 16);
            grad3.addColorStop(0, `rgba(255, 251, 245, ${p3 * 0.95 * pulse})`);
            grad3.addColorStop(0.6, `rgba(255, 251, 245, ${p3 * 0.4 * pulse})`);
            grad3.addColorStop(1, 'rgba(255, 251, 245, 0)');
            ctx.fillStyle = grad3;
            ctx.fillRect(center.x - 16, center.y - 16, 32, 32);

            // Bright center dot
            ctx.globalAlpha = p3 * 0.95 * pulse;
            ctx.fillStyle = '#FFFBF5';
            ctx.beginPath();
            ctx.arc(center.x, center.y, 3.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 1;
          }

          // Return to scattered for neutral phases (gaps between phases)
          const anyConstellation = Math.max(p0, p1, p2, p3);
          if (anyConstellation < 0.5) {
            scatterStars(lerpSpeed * (1 - anyConstellation));
          }

          // Draw all stars with glow halo for prominence
          for (const s of stars) {
            const flicker = Math.sin(t * s.speed) * 0.2 + 0.8;
            const a = s.alpha * flicker;
            // Soft outer glow
            ctx.globalAlpha = a * 0.15;
            ctx.fillStyle = '#C9B99A';
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r * 3, 0, Math.PI * 2);
            ctx.fill();
            // Bright core
            ctx.globalAlpha = a;
            ctx.fillStyle = '#F9F8F6';
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fill();
          }

          // ---- Smooth mouse parallax (camera pan) ----
          const PAN_RANGE = 18; // max pixels of shift
          const MOUSE_LERP = 0.045; // smoothing factor (lower = more inertia)
          const sm = mouseSmoothedRef.current;
          const mt = mouseTargetRef.current;
          sm.x += (mt.x - sm.x) * MOUSE_LERP;
          sm.y += (mt.y - sm.y) * MOUSE_LERP;
          const tx = sm.x * PAN_RANGE;
          const ty = sm.y * PAN_RANGE;

          // Apply to video (background layer)
          const videoEl = canvas.parentElement?.querySelector('video') as HTMLVideoElement | null;
          if (videoEl) {
            videoEl.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(1.1)`;
          }
          // Apply to canvas (star layer) — same shift keeps them locked together
          canvas.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(1.1)`;

          animFrameId = requestAnimationFrame(draw);
        };

        init();
        draw();
        window.addEventListener('resize', resize);

        // Clean up on unmount
        const cleanupCanvas = () => {
          cancelAnimationFrame(animFrameId);
          window.removeEventListener('resize', resize);
        };

        // Store cleanup
        const origCleanup = cleanupCanvas;
        // We'll handle cleanup in the effect return
        rafRef.current = animFrameId;

        // Scroll handler
        const onScroll = () => {
          requestAnimationFrame(handleScroll);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        handleScroll(); // initial call

        return () => {
          origCleanup();
          window.removeEventListener('scroll', onScroll);
          window.removeEventListener('mousemove', onMouseMove);
          // Reset header class on unmount
          const header = document.getElementById('mainHeader');
          if (header) header.classList.remove('header--sky');
        };
      }
    }

    // If no canvas, still set up scroll handler
    const onScroll = () => {
      requestAnimationFrame(handleScroll);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouseMove);
      const header = document.getElementById('mainHeader');
      if (header) header.classList.remove('header--sky');
    };
  }, [handleScroll]);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
  /* Homepage-specific styles */
  .intro {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 120px 40px 80px;
    text-align: center;
  }

  .intro .eyebrow {
    font-size: 10px; letter-spacing: 7px; text-transform: uppercase;
    color: var(--gold); font-weight: 400;
    opacity: 0; animation: fadeUp 0.8s ease 0.3s forwards;
  }

  .intro h1 {
    font-family: 'Cormorant', serif;
    font-size: 52px; font-weight: 400; color: var(--text-primary);
    margin-top: 24px; letter-spacing: 2px; line-height: 1.2;
    opacity: 1;
  }

  .intro .tagline {
    font-size: 15px; font-style: italic; color: var(--text-secondary);
    margin-top: 20px;
    opacity: 0; animation: fadeUp 0.8s ease 0.9s forwards;
  }

  .intro .scroll-cue {
    margin-top: 60px; display: flex; flex-direction: column;
    align-items: center; gap: 10px;
    opacity: 0; animation: fadeUp 0.8s ease 1.2s forwards;
  }

  .intro .scroll-cue span { font-size: 9px; letter-spacing: 5px; text-transform: uppercase; color: var(--gold-dim); }
  .scroll-line { width: 1px; height: 40px; background: linear-gradient(to bottom, var(--gold-dim), transparent); animation: scrollPulse 2s ease-in-out infinite; }

  .transition-to-sky,
  .transition-to-canvas {
    height: 180px;
    pointer-events: none;
  }
  
  .transition-to-sky {
    margin-top: -100px;
    margin-bottom: 0;
    background: linear-gradient(to bottom, var(--canvas) 0%, #0A0816 50%, #000000 100%);
    position: relative;
    z-index: 2;
    overflow: hidden;
  }
  
  .transition-to-canvas {
    margin-top: 0;
    margin-bottom: 14px;
    background: linear-gradient(to bottom, #000000 0%, #100C22 50%, var(--canvas) 100%);
  }

  .sky-wrapper { position: relative; background: var(--sky); margin-top: 0; }
  .sky-scroll { position: relative; height: 800vh; }
  .sky-sticky { position: sticky; top: 0; width: 100%; height: 100vh; overflow: hidden; }
  .sky-sticky video {
    position: absolute; top: -5%; left: -5%; width: 110%; height: 110%;
    object-fit: cover; z-index: 0; filter: brightness(0.9); pointer-events: none;
    will-change: transform; transform: scale(1.1);
  }
  #skyCanvas {
    display: block; width: 110%; height: 110%;
    position: absolute; top: -5%; left: -5%;
    z-index: 1; will-change: transform; transform: scale(1.1);
  }

  .sky-text-overlay {
    position: absolute; inset: 0; display: flex; flex-direction: column;
    align-items: center; justify-content: flex-end; padding-bottom: 120px; pointer-events: none;
    z-index: 3;
    opacity: 0; transition: opacity 0.6s ease;
  }
  .sky-text-overlay.visible { opacity: 1; }
  .sky-text-overlay .eyebrow { font-size: 12px; letter-spacing: 6px; text-transform: uppercase; color: rgba(201,185,154,0.65); margin-bottom: 18px; }
  .sky-text-overlay .main-text { font-family: 'Cormorant', serif; font-size: 48px; font-weight: 400; font-style: italic; color: rgba(249,248,246,0.96); text-align: center; line-height: 1.5; text-shadow: 0 0 80px rgba(0,0,0,0.8); max-width: 750px; }
  .sky-text-overlay .hero-title { font-family: 'Cormorant', serif; font-size: 96px; font-weight: 500; letter-spacing: 24px; color: #FFFBF5; text-shadow: 0 0 100px rgba(125,110,131,0.6), 0 0 160px rgba(11,73,75,0.25); }
  .sky-text-overlay .hero-sub { font-size: 14px; letter-spacing: 7px; text-transform: uppercase; color: rgba(201,185,154,0.8); margin-top: 22px; max-width: 600px; white-space: nowrap; }
  .sky-text-overlay .hero-tagline { font-size: 16px; font-style: italic; color: rgba(249,248,246,0.5); margin-top: 12px; max-width: 600px; white-space: nowrap; }
  .sky-text-overlay .devanagari { font-size: 13px; color: rgba(201, 176, 127, 0.35); margin-top: 26px; letter-spacing: normal; word-spacing: 8px; white-space: nowrap; display: inline-block; }

  .phase-dots { position: fixed; right: 28px; top: 50%; transform: translateY(-50%); z-index: 150; display: flex; flex-direction: column; gap: 14px; opacity: 0; transition: opacity 0.4s; }
  .phase-dots.show { opacity: 1; }
  .phase-dot { width: 5px; height: 5px; border-radius: 50%; background: rgba(249,248,246,0.12); transition: all 0.3s; }
  .phase-dot.active { background: var(--gold); box-shadow: 0 0 8px rgba(201,185,154,0.3); }

  .positioning { text-align: center; padding: 120px 48px; max-width: 1200px; margin: 0 auto; }
  .positioning .section-title { font-size: 42px; max-width: 700px; margin: 0 auto 16px; }
  .positioning .section-body { max-width: 600px; margin: 0 auto; text-align: center; }

  .process-section { padding: 80px 48px; max-width: 1200px; margin: 0 auto; }
  .process-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 48px; margin-top: 50px; }
  .process-pillar { position: relative; padding-top: 40px; }
  .pillar-line { width: 1px; height: 0; background: linear-gradient(to bottom, var(--gold), transparent); margin-bottom: 20px; transition: height 1s ease; }
  .pillar-line.drawn { height: 32px; }
  .pillar-number { font-family: 'Cormorant', serif; font-size: 42px; font-weight: 300; color: var(--border-light); position: absolute; top: 0; right: 0; }
  .pillar-title { font-family: 'Cormorant', serif; font-size: 22px; font-weight: 500; color: var(--text-primary); letter-spacing: 3px; text-transform: uppercase; margin-bottom: 14px; }
  .pillar-body { font-size: 14px; color: var(--text-secondary); line-height: 1.8; }

  .pathways-section { padding: 80px 48px; max-width: 1200px; margin: 0 auto; }

  /* Mobile responsive */
  @media (max-width: 768px) {
    .intro { padding: 100px 24px 60px; min-height: 90vh; }
    .intro h1 { font-size: 38px !important; max-width: 100% !important; }
    .intro p { font-size: 14px !important; max-width: 100% !important; margin: 0 auto 40px !important; }
    .intro .scroll-cue { margin-top: 40px; }

    .transition-to-sky { height: 120px; margin-top: -60px; }
    .transition-to-canvas { height: 120px; }

    .sky-scroll { height: 600vh; }
    .sky-text-overlay { padding-bottom: 80px; }
    .sky-text-overlay .eyebrow { font-size: 10px; letter-spacing: 4px; margin-bottom: 12px; }
    .sky-text-overlay .main-text { font-size: 32px; max-width: 90%; padding: 0 20px; }
    .sky-text-overlay .hero-title { font-size: 52px; letter-spacing: 12px; }
    .sky-text-overlay .hero-sub { font-size: 11px; letter-spacing: 4px; white-space: normal; max-width: 90%; }
    .sky-text-overlay .hero-tagline { font-size: 13px; white-space: normal; max-width: 90%; }
    .sky-text-overlay .devanagari { font-size: 11px; margin-top: 16px; }

    .positioning { padding: 80px 24px; }
    .positioning .section-title { font-size: 32px !important; }
    .positioning .section-body { font-size: 14px !important; max-width: 100%; }
    .positioning blockquote { font-size: 20px !important; padding: 24px 0 24px 20px !important; }
    .positioning blockquote footer { font-size: 10px !important; }

    .process-section { padding: 60px 24px; }
    .process-grid { grid-template-columns: 1fr; gap: 32px; }

    .pathways-section { padding: 60px 24px; }
  }

  @media (max-width: 480px) {
    .intro { padding: 80px 20px 50px; }
    .intro .eyebrow { font-size: 9px; letter-spacing: 5px; }
    .intro h1 { font-size: 28px !important; line-height: 1.3; }
    .intro p { font-size: 13px !important; margin: 0 auto 30px !important; }
    .intro .scroll-cue { margin-top: 30px; }
    .intro .scroll-cue span { font-size: 8px; letter-spacing: 4px; }
    .scroll-line { height: 30px; }

    .transition-to-sky { height: 80px; margin-top: -40px; }
    .transition-to-canvas { height: 80px; margin-bottom: 8px; }

    .sky-scroll { height: 500vh; }
    .sky-text-overlay { padding-bottom: 60px; }
    .sky-text-overlay .eyebrow { font-size: 9px; letter-spacing: 3px; }
    .sky-text-overlay .main-text { font-size: 24px; line-height: 1.4; }
    .sky-text-overlay .hero-title { font-size: 36px; letter-spacing: 8px; }
    .sky-text-overlay .hero-sub { font-size: 9px; letter-spacing: 3px; }
    .sky-text-overlay .hero-tagline { font-size: 11px; margin-top: 8px; }
    .sky-text-overlay .devanagari { font-size: 10px; margin-top: 12px; }

    .positioning { padding: 60px 20px; }
    .positioning .section-title { font-size: 26px !important; }
    .positioning blockquote { font-size: 18px !important; padding: 20px 0 20px 16px !important; }

    .process-section { padding: 50px 20px; }
    .pillar-title { font-size: 18px; letter-spacing: 2px; }
    .pillar-body { font-size: 13px; }
    .pillar-number { font-size: 32px; }

    .pathways-section { padding: 50px 20px; }
  }
      `}} />
      {/* INTRO */}
      <div className="intro">
        <div className="section-eyebrow">Buy Side Advisory</div>
        <h1 style={{ fontSize: 52, maxWidth: 700, margin: '0 auto 24px' }}>
          You bring the thesis.<br />
          We build the <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>universe.</span>
        </h1>
        <div className="gold-line" style={{ margin: '30px auto' }} />
        <p style={{ maxWidth: 600, margin: '0 auto 60px', fontSize: 15, color: 'var(--text-secondary)' }}>
          Kautilya is a buy-side advisory that constructs proprietary acquisition pipelines on demand — in any sector, against any criteria, from first principles. We don't carry a pipeline. We build yours.
        </p>
        <div className="scroll-cue">
          <span>Enter</span>
          <div className="scroll-line" />
        </div>
      </div>

      {/* SKY */}
      <div className="transition-to-sky">
      </div>
      <div className="sky-wrapper" id="skyWrapper">
        <div className="sky-scroll" id="skyScroll">
          <div className="sky-sticky">
            <video autoPlay muted loop playsInline>
              <source src={starryBgVideo} type="video/mp4" />
            </video>
            <canvas id="skyCanvas" />
            <div className="sky-text-overlay" id="skyText0">
              <div className="eyebrow">Nakshatra · The Uncharted</div>
              <div className="main-text">The market is vast.</div>
              <div className="devanagari">नक्षत्र</div>
            </div>
            <div className="sky-text-overlay" id="skyText1">
              <div className="eyebrow">Saptarishi · The Seven Sages</div>
              <div className="main-text">Most of it is noise.</div>
              <div className="devanagari">सप्तर्षि</div>
            </div>
            <div className="sky-text-overlay" id="skyText2">
              <div className="eyebrow">Chakravyuha · The Formation</div>
              <div className="main-text">
                Strategy is the difference<br />between a lead and a legacy.
              </div>
              <div className="devanagari">चक्रव्यूह</div>
            </div>
            <div className="sky-text-overlay" id="skyText3">
              <div className="hero-title">KAUTILYA</div>
              <div className="hero-sub">Buy-Side Advisory · Sourced with Rigor</div>
              <div className="hero-tagline">Your thesis. Our intelligence.</div>
              <div className="devanagari">ध्रुव · कौटिल्य</div>
            </div>
          </div>
        </div>
      </div>
      <div className="transition-to-canvas" />

      {/* ARTHASHASTRA APPROACH */}
      <div className="positioning reveal">
        <div className="section-eyebrow">The Arthashastra Approach</div>
        <h2 className="section-title" style={{ fontSize: 48, color: 'var(--gold)' }}>
          Named for the architect of empires
        </h2>
        <p
          className="section-body"
          style={{ maxWidth: 800, margin: '0 auto 40px', fontSize: 15, lineHeight: '1.9', color: 'var(--text-secondary)' }}
        >
          Chanakya's Arthashastra — the ancient treatise on statecraft and economic policy — is not merely a historical text.
          It is a blueprint for strategic acquisition, institutional intelligence, and the patient accumulation of advantage.
          Kautilya embodies these principles in modern buy-side advisory.
        </p>
        <blockquote
          style={{
            margin: '50px auto 0',
            maxWidth: 700,
            padding: '30px 0 30px 28px',
            borderLeft: '2px solid var(--gold)',
            fontFamily: '"Cormorant", serif',
            fontSize: 24,
            fontStyle: 'italic',
            lineHeight: '1.8',
            color: 'var(--gold)',
          }}
        >
          "The wise acquire wealth as the bee gathers honey — without harming the flower."
          <footer style={{ marginTop: 20, fontSize: 12, fontStyle: 'normal', letterSpacing: 2, color: 'var(--text-tertiary)' }}>
            — Arthashastra, Book II
          </footer>
        </blockquote>
      </div>

      <div className="section-divider" />

      {/* PATHWAY CARDS */}
      <div className="pathways-section">
        <div className="reveal">
          <div className="section-eyebrow">Explore</div>
          <h2 className="section-title">Go Deeper</h2>
        </div>
        <div className="pathway-grid reveal">
          <Link className="pathway-card" to="/portfolio">
            <div className="card-eyebrow">Portfolio of Proof</div>
            <div className="card-title">Closed Engagements</div>
            <div className="card-desc">A buyer came to us with a thesis. Here's what happened.</div>
            <span className="card-arrow">→</span>
          </Link>
          <Link className="pathway-card" to="/team">
            <div className="card-eyebrow">The Counsel</div>
            <div className="card-title">Our Team</div>
            <div className="card-desc">The people behind the mandate.</div>
            <span className="card-arrow">→</span>
          </Link>
          <Link className="pathway-card" to="/media">
            <div className="card-eyebrow">Intelligence</div>
            <div className="card-title">Published Thinking</div>
            <div className="card-desc">Market analyses, sourcing frameworks, and sector intelligence.</div>
            <span className="card-arrow">→</span>
          </Link>
        </div>
      </div>

      {/* PHASE DOTS */}
      <div className="phase-dots" id="phaseDots">
        <div className="phase-dot" />
        <div className="phase-dot" />
        <div className="phase-dot" />
        <div className="phase-dot" />
      </div>
    </>
  );
}
