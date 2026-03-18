'use client';

import { useEffect, useRef, useCallback } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const ThreeScene = dynamic(() => import('@/components/ThreeScene'), { ssr: false });

export default function HomeContent() {
  const scrollProgressRef = useRef(0);

  // Cache DOM lookups so we don't getElementById on every scroll frame
  const domCacheRef = useRef<{
    skyWrapper: HTMLElement | null;
    skyScroll: HTMLElement | null;
    header: HTMLElement | null;
    phaseDots: HTMLElement | null;
    phaseDotEls: NodeListOf<Element> | null;
    textOverlays: (HTMLElement | null)[];
  } | null>(null);

  const getDomCache = useCallback(() => {
    if (!domCacheRef.current) {
      const phaseDots = document.getElementById('phaseDots');
      domCacheRef.current = {
        skyWrapper: document.getElementById('skyWrapper'),
        skyScroll: document.getElementById('skyScroll'),
        header: document.getElementById('mainHeader'),
        phaseDots,
        phaseDotEls: phaseDots?.querySelectorAll('.phase-dot') ?? null,
        textOverlays: [
          document.getElementById('skyText0'),
          document.getElementById('skyText1'),
          document.getElementById('skyText2'),
          document.getElementById('skyText3'),
        ],
      };
    }
    return domCacheRef.current;
  }, []);

  const handleScroll = useCallback(() => {
    const { skyWrapper, skyScroll, header, phaseDots, phaseDotEls, textOverlays } = getDomCache();

    if (!skyWrapper || !skyScroll) return;

    const wrapperRect = skyWrapper.getBoundingClientRect();
    const scrollHeight = skyScroll.scrollHeight - window.innerHeight;
    const scrolled = -wrapperRect.top;
    const progress = Math.max(0, Math.min(1, scrolled / scrollHeight));

    // Store progress for canvas draw loop
    scrollProgressRef.current = progress;

    // Header sky mode
    const inSky = wrapperRect.top <= 0 && wrapperRect.bottom >= window.innerHeight;
    if (header) {
      header.classList.toggle('header--sky', inSky);
    }

    // Phase dots
    if (phaseDots && phaseDotEls) {
      phaseDots.classList.toggle('show', inSky);
      const phaseIndex = Math.min(3, Math.floor(progress * 4));
      phaseDotEls.forEach((dot, i) => {
        dot.classList.toggle('active', i <= phaseIndex);
      });
    }

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
  }, [getDomCache]);

  useEffect(() => {
    // Scroll handler
    const onScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll(); // initial call

    return () => {
      window.removeEventListener('scroll', onScroll);
      domCacheRef.current = null; // invalidate cached DOM refs
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
    font-family: var(--font-cormorant), 'Cormorant', serif;
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
    opacity: 0; animation: fadeUp 0.8s ease 0.6s forwards;
  }

  .intro .scroll-cue span { font-size: 10px; letter-spacing: 5px; text-transform: uppercase; color: rgba(201,185,154,0.75); }
  .scroll-line { width: 1px; height: 40px; background: linear-gradient(to bottom, rgba(201,185,154,0.75), transparent); animation: scrollPulse 2s ease-in-out infinite; }

  /* --- NEW MASK STYLES --- */
  .sky-wrapper { position: relative; background: var(--sky); margin-top: 0; }

  .sky-mask-top {
    position: absolute; top: 0; left: 0; width: 100%; height: 35vh;
    background: linear-gradient(to bottom, var(--canvas) 0%, rgba(59, 54, 64, 0) 100%);
    z-index: 10; pointer-events: none;
  }

  .sky-mask-bottom {
    position: absolute; bottom: 0; left: 0; width: 100%; height: 35vh;
    background: linear-gradient(to bottom, rgba(59, 54, 64, 0) 0%, var(--canvas) 100%);
    z-index: 10; pointer-events: none;
  }
  /* ----------------------- */

  .sky-scroll { position: relative; height: 1100vh; overscroll-behavior: none; }
  .sky-sticky { position: sticky; top: 0; width: 100%; height: 100vh; overflow: hidden; }
  .sky-sticky canvas {
    display: block; width: 100%; height: 100%;
    position: absolute; top: 0; left: 0;
    z-index: 0;
  }

  .sky-text-overlay {
    position: absolute; inset: 0; display: flex; flex-direction: column;
    align-items: center; justify-content: flex-end; padding-bottom: 120px; pointer-events: none;
    z-index: 3;
    opacity: 0; transition: opacity 0.6s ease;
  }
  .sky-text-overlay.visible { opacity: 1; }
  .sky-text-overlay .eyebrow { font-size: 12px; letter-spacing: 6px; text-transform: uppercase; color: rgba(236,221,191,0.95); margin-bottom: 18px; text-shadow: 0 2px 18px rgba(0,0,0,0.9); display: inline-block; padding: 7px 14px; border-radius: 999px; background: rgba(8,12,22,0.58); border: 1px solid rgba(201,185,154,0.28); backdrop-filter: blur(4px); }
  .sky-text-overlay .main-text { font-family: var(--font-cormorant), 'Cormorant', serif; font-size: 48px; font-weight: 400; font-style: italic; color: rgba(249,248,246,0.98); text-align: center; line-height: 1.5; text-shadow: 0 1px 26px rgba(0,0,0,0.9), 0 0 90px rgba(0,0,0,0.75); max-width: 750px; }
  .sky-text-overlay .hero-title { font-family: var(--font-cormorant), 'Cormorant', serif; font-size: 96px; font-weight: 500; letter-spacing: 24px; color: #FFFBF5; text-shadow: 0 5px 30px rgba(0,0,0,0.9), 0 0 110px rgba(125,110,131,0.7), 0 0 180px rgba(11,73,75,0.35); }
  .sky-text-overlay .hero-sub { font-size: 14px; letter-spacing: 7px; text-transform: uppercase; color: rgba(201,185,154,0.88); margin-top: 22px; max-width: 600px; white-space: nowrap; text-shadow: 0 2px 16px rgba(0,0,0,0.85); display: inline-block; padding: 7px 14px; border-radius: 999px; background: rgba(8,12,22,0.5); border: 1px solid rgba(201,185,154,0.24); backdrop-filter: blur(4px); }
  .sky-text-overlay .hero-tagline { font-size: 16px; font-style: italic; color: rgba(249,248,246,0.72); margin-top: 12px; max-width: 600px; white-space: nowrap; text-shadow: 0 2px 14px rgba(0,0,0,0.82); }
  .sky-text-overlay .devanagari { font-size: 13px; color: rgba(225, 201, 154, 0.82); margin-top: 26px; letter-spacing: normal; word-spacing: 8px; white-space: nowrap; display: inline-block; padding: 6px 12px; border-radius: 999px; background: rgba(8,12,22,0.5); border: 1px solid rgba(201,185,154,0.24); text-shadow: 0 1px 10px rgba(0,0,0,0.75); }

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
  .pillar-number { font-family: var(--font-cormorant), 'Cormorant', serif; font-size: 42px; font-weight: 300; color: var(--border-light); position: absolute; top: 0; right: 0; }
  .pillar-title { font-family: var(--font-cormorant), 'Cormorant', serif; font-size: 22px; font-weight: 500; color: var(--text-primary); letter-spacing: 3px; text-transform: uppercase; margin-bottom: 14px; }
  .pillar-body { font-size: 14px; color: var(--text-secondary); line-height: 1.8; }

  .pathways-section { padding: 80px 48px; max-width: 1200px; margin: 0 auto; }

  /* Mobile responsive */
  @media (max-width: 768px) {
    .intro { padding: 100px 24px 60px; min-height: 90vh; }
    .intro h1 { font-size: 38px !important; max-width: 100% !important; }
    .intro p { font-size: 14px !important; max-width: 100% !important; margin: 0 auto 40px !important; }
    .intro .scroll-cue { margin-top: 40px; }

    .sky-mask-top, .sky-mask-bottom { height: 20vh; }

    .sky-scroll { height: 850vh; }
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
    .intro .scroll-cue span { font-size: 9px; letter-spacing: 4px; }
    .scroll-line { height: 30px; }

    .sky-mask-top, .sky-mask-bottom { height: 15vh; }

    .sky-scroll { height: 720vh; }
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
      <div className="sky-wrapper" id="skyWrapper">
        <div className="sky-mask-top" />
        <div className="sky-scroll" id="skyScroll">
          <div className="sky-sticky">
            <ThreeScene scrollContainerSelector="#skyScroll" />
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
        <div className="sky-mask-bottom" />
      </div>

      {/* ARTHASHASTRA APPROACH */}
      <div className="positioning reveal">
        <div className="section-eyebrow">The Arthashastra Approach</div>
        <h2 className="section-title" style={{ fontSize: 48, color: 'var(--gold)' }}>
          Our Approach to Deal Sourcing
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
            fontFamily: "var(--font-cormorant), Cormorant, serif",
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
          <h2 className="section-title">Explore Kautilya</h2>
        </div>
        <div className="pathway-grid reveal">
          <Link className="pathway-card" href="/portfolio">
            <div className="card-eyebrow">Portfolio of Proof</div>
            <h3 className="card-title">Advisory Portfolio</h3>
            <div className="card-desc">Closed acquisition mandates across sectors — from market mapping to deal close.</div>
            <span className="card-arrow">→</span>
          </Link>
          <Link className="pathway-card" href="/team">
            <div className="card-eyebrow">The Counsel</div>
            <h3 className="card-title">Our Advisory Team</h3>
            <div className="card-desc">A small team operating with disproportionate intensity across deal sourcing and market intelligence.</div>
            <span className="card-arrow">→</span>
          </Link>
          <Link className="pathway-card" href="/stories">
            <div className="card-eyebrow">Intelligence</div>
            <h3 className="card-title">Stories & Market Intelligence</h3>
            <div className="card-desc">Deal breakdowns, sourcing case studies, sector analyses, and acquisition frameworks.</div>
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
