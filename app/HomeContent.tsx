'use client';

import { useEffect, useRef, useCallback, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { HOME_FAQS } from '@/lib/homeFaqs';

const ThreeScene = dynamic(() => import('@/components/ThreeScene'), { ssr: false });

export default function HomeContent() {
  const scrollProgressRef = useRef(0);
  // Defer mounting the 3D scene (three.js + GSAP ScrollTrigger + GLB loads) until
  // the user has actually scrolled toward it, instead of on initial page load.
  // The scene was blocking the main thread for 6+ seconds immediately on load,
  // which delayed interactivity on the hero itself.
  const [shouldMountScene, setShouldMountScene] = useState(false);

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
      [0.00, 0.20],  // phase 0 – "The market is vast"
      [0.25, 0.45],  // phase 1 – "Most of it is noise"
      [0.50, 0.72],  // phase 2 – "Strategy is the difference"
      [0.76, 1.00],  // phase 3 – KAUTILYA title hold
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

  useEffect(() => {
    // Scroll-position check rather than IntersectionObserver: the sky section
    // sits immediately below a 100vh hero, so an observer can fire on the very
    // first (pre-font-load) layout pass and mount the scene before the user has
    // scrolled at all, defeating the deferral. A concrete scrollY threshold has
    // no such race.
    let mounted = false;
    const maybeMount = () => {
      if (mounted) return;
      if (window.scrollY > window.innerHeight * 0.4) {
        mounted = true;
        setShouldMountScene(true);
        window.removeEventListener('scroll', maybeMount);
      }
    };

    window.addEventListener('scroll', maybeMount, { passive: true });
    maybeMount();

    return () => window.removeEventListener('scroll', maybeMount);
  }, []);

return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
  /* Homepage — Kautilya brand theme: hero · constellation sky · approach · explore cards.
     Colour pairs follow the guidelines (white/pastel on teal; teal/brown on white/pastel). */

  /* ---------- Hero ---------- */
  .intro {
    position: relative; overflow: hidden;
    min-height: 100vh;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    padding: clamp(120px, 16vh, 160px) 40px clamp(110px, 14vh, 150px);
    text-align: center;
  }
  /* graphic anchor: pale star silhouette bleeding off the bottom-right edge (guidelines 2.7) */
  .intro .anchor { position: absolute; right: calc(-1 * min(18vw, 230px)); bottom: calc(-1 * min(18vw, 230px)); width: min(62vw, 720px); aspect-ratio: 1; color: var(--brand-pastel); opacity: 0.13; pointer-events: none; }
  .intro > *:not(.anchor) { position: relative; z-index: 1; }

  .intro .section-eyebrow {
    margin-top: 0;
    font: 400 0.75rem/1.5 var(--font-poppins), 'Poppins', sans-serif;
    letter-spacing: 0.26em; text-transform: uppercase; color: var(--brand-pastel);
    margin-bottom: clamp(20px, 3vw, 32px);
    opacity: 0; animation: fadeUp 0.8s ease 0.3s forwards;
  }

  /* display heading: Gotham Bold line, then a light second line with an italic emphasis (guidelines 2.4 / 2.5) */
  .intro .display {
    font-family: var(--font-fraunces);
    font-size: clamp(2rem, 1.35rem + 3.3vw, 4.5rem);
    font-weight: 400; line-height: 1.1; letter-spacing: 0;
    text-transform: uppercase; text-wrap: balance;
    color: var(--brand-pastel);
    max-width: none; margin: 0; opacity: 1;
  }
  .display .l1 { display: block; font-weight: 700; }
  .display .l2 { display: block; font-weight: 300; }
  .display em { font-style: italic; font-weight: 300; color: var(--brand-white); }

  .intro .rule { width: 56px; height: 2px; background: var(--brand-pastel); opacity: 0.55; margin: clamp(28px, 4vw, 44px) auto; }
  .intro .lede { max-width: 62ch; margin: 0 auto; font-size: clamp(1rem, 0.95rem + 0.25vw, 1.125rem); line-height: 1.7; color: var(--brand-pastel); }
  .intro .strap { margin: 22px auto 0; color: var(--brand-white); font: 600 clamp(1rem, 0.95rem + 0.25vw, 1.125rem)/1.5 var(--font-poppins), 'Poppins', sans-serif; }

  .hero-cta {
    display: inline-block;
    margin-top: clamp(32px, 4vw, 48px);
    padding: 17px 38px;
    border-radius: 999px;
    background: var(--brand-pastel);
    color: var(--brand-brown);              /* brown on pastel: permitted pair */
    font: 600 0.8125rem/1 var(--font-poppins), 'Poppins', sans-serif;
    letter-spacing: 0.16em; text-transform: uppercase; text-decoration: none;
    transition: background 0.25s ease, color 0.25s ease, transform 0.25s ease;
    opacity: 0; animation: fadeUp 0.8s ease 0.75s forwards;
  }
  .hero-cta:hover, .hero-cta:focus-visible { background: var(--brand-brown); color: var(--brand-white); transform: translateY(-2px); }

  .intro .scroll-cue {
    margin-top: 40px; display: flex; flex-direction: column;
    align-items: center; gap: 10px;
    opacity: 0; animation: fadeUp 0.8s ease 0.6s forwards;
  }
  .intro .scroll-cue span { font-size: 10px; letter-spacing: 5px; text-transform: uppercase; color: rgba(198,232,242,0.8); }
  .scroll-line { width: 1px; height: 40px; background: linear-gradient(to bottom, rgba(198,232,242,0.75), transparent); animation: scrollPulse 2s ease-in-out infinite; }

  /* ---------- Constellation sky ---------- */
  .sky-wrapper { position: relative; background: var(--sky); margin-top: 0; }

  .sky-mask-top {
    position: absolute; top: 0; left: 0; width: 100%; height: 35vh;
    background: linear-gradient(to bottom, var(--canvas) 0%, rgba(11,72,93, 0) 100%);
    z-index: 10; pointer-events: none;
  }
  .sky-mask-bottom {
    position: absolute; bottom: 0; left: 0; width: 100%; height: 35vh;
    background: linear-gradient(to bottom, rgba(11,72,93, 0) 0%, var(--canvas) 100%);
    z-index: 10; pointer-events: none;
  }

  .sky-scroll { position: relative; height: 600vh; overscroll-behavior: none; }
  .sky-sticky { position: sticky; top: 0; width: 100%; height: 100vh; overflow: hidden; }
  .sky-sticky canvas { display: block; width: 100%; height: 100%; position: absolute; top: 0; left: 0; z-index: 0; }

  .sky-text-overlay {
    position: absolute; inset: 0; display: flex; flex-direction: column;
    align-items: center; justify-content: flex-end; padding: 0 24px 120px; text-align: center; pointer-events: none;
    z-index: 3;
    opacity: 0; transition: opacity 0.6s ease;
  }
  .sky-text-overlay.visible { opacity: 1; }
  /* caption + devanagari pills: teal glass behind pastel text */
  .sky-text-overlay .eyebrow, .sky-text-overlay .devanagari {
    display: inline-block; border-radius: 999px;
    background: rgba(11,72,93,0.62); border: 1px solid rgba(198,232,242,0.35);
    -webkit-backdrop-filter: blur(4px); backdrop-filter: blur(4px);
    color: var(--brand-pastel); text-shadow: 0 1px 10px rgba(0,0,0,0.6);
  }
  .sky-text-overlay .eyebrow { font: 400 0.75rem/1.5 var(--font-poppins), 'Poppins', sans-serif; letter-spacing: 0.26em; text-transform: uppercase; padding: 7px 18px; margin-bottom: 18px; }
  .sky-text-overlay .devanagari { font-size: 13px; font-weight: 300; margin-top: 26px; letter-spacing: 0.06em; word-spacing: 8px; white-space: nowrap; padding: 6px 14px; }
  .sky-text-overlay .main-text {
    font-family: var(--font-lora); font-weight: 300; font-style: normal;
    font-size: clamp(1.75rem, 1.2rem + 1.5vw, 3rem); line-height: 1.4;
    color: var(--brand-white); max-width: 20em; text-wrap: balance;
    text-shadow: 0 1px 26px rgba(0,0,0,0.85), 0 0 90px rgba(0,0,0,0.7), 0 2px 8px rgba(0,0,0,0.9);
  }
  .sky-text-overlay .sky-title {
    font-family: var(--font-fraunces); font-weight: 700; text-transform: uppercase; text-wrap: balance;
    font-size: clamp(2rem, 1.35rem + 3.3vw, 4.5rem); line-height: 1.08;
    color: var(--brand-pastel);
    text-shadow: 0 5px 30px rgba(0,0,0,0.85), 0 0 90px rgba(0,0,0,0.6), 0 2px 10px rgba(0,0,0,0.9);
  }

  .phase-dots { position: fixed; right: 28px; top: 50%; transform: translateY(-50%); z-index: 150; display: flex; flex-direction: column; gap: 14px; opacity: 0; transition: opacity 0.4s; }
  .phase-dots.show { opacity: 1; }
  .phase-dot { width: 6px; height: 6px; border-radius: 50%; background: rgba(255,255,255,0.22); transition: all 0.3s; }
  .phase-dot.active { background: var(--brand-pastel); box-shadow: 0 0 8px rgba(198,232,242,0.55); }

  /* ---------- Approach (teal page, white/pastel type) ---------- */
  .positioning { text-align: center; padding: clamp(72px, 9vw, 128px) 48px; max-width: 1200px; margin: 0 auto; }
  .positioning .section-eyebrow { font: 500 0.75rem/1.5 var(--font-poppins), 'Poppins', sans-serif; letter-spacing: 0.26em; color: var(--brand-pastel); }
  .positioning .section-title { font-family: var(--font-lora); font-weight: 500; font-size: clamp(1.75rem, 1.2rem + 1.5vw, 2.5rem); line-height: 1.2; letter-spacing: 0; max-width: 700px; margin: 0 auto 16px; color: var(--brand-white); text-wrap: balance; }
  .positioning .section-body { max-width: 800px; margin: 0 auto 40px; text-align: center; font-size: clamp(1rem, 0.95rem + 0.25vw, 1.125rem); line-height: 1.8; color: var(--brand-pastel); }
  .positioning blockquote {
    margin: clamp(40px, 5vw, 64px) auto 0; max-width: 640px; text-align: left;
    padding: 6px 0 6px clamp(20px, 3vw, 36px);
    border-left: 3px solid var(--brand-pastel);
    font-family: var(--font-lora); font-weight: 300; font-style: normal;
    font-size: clamp(1.25rem, 1.05rem + 0.8vw, 1.75rem); line-height: 1.45;
    color: var(--brand-pastel);
  }
  .positioning blockquote footer { margin-top: 18px; font: 500 0.75rem/1.4 var(--font-poppins), 'Poppins', sans-serif; font-style: normal; letter-spacing: 0.2em; text-transform: uppercase; color: var(--brand-pastel); }

  /* ---------- Explore: white cards on a pastel band (the band sits below the cursor-trail canvas, so the trail shows over it) ---------- */
  .explore { position: relative; color: var(--brand-teal); padding-block: clamp(72px, 9vw, 128px); }
  .explore::before { content: ""; position: absolute; inset: 0; background: var(--brand-pastel); z-index: -2; }
  .explore .pathways-section { padding: 0 var(--gutter); max-width: 1200px; margin: 0 auto; }
  .explore .section-eyebrow { font: 500 0.75rem/1.5 var(--font-poppins), 'Poppins', sans-serif; letter-spacing: 0.26em; color: var(--brand-teal); }
  .explore .section-title { font-family: var(--font-lora); font-weight: 500; font-size: clamp(1.75rem, 1.2rem + 1.5vw, 2.5rem); letter-spacing: 0; color: var(--brand-teal); }
  .explore .pathway-grid { grid-template-columns: repeat(4, 1fr); gap: clamp(14px, 1.6vw, 24px); margin-top: clamp(36px, 5vw, 56px); }
  .explore .pathway-card {
    display: flex; flex-direction: column; min-height: 300px; padding: 28px;
    background: var(--brand-white); color: var(--brand-teal);
    border: 0; border-radius: 6px;
    transition: transform 0.3s ease, background 0.3s ease, color 0.3s ease;
  }
  .explore .pathway-card::before { display: none; }
  .explore .pathway-card .card-eyebrow { color: var(--brand-teal); font-weight: 500; font-size: 0.6875rem; letter-spacing: 0.26em; margin-bottom: 18px; transition: color 0.3s ease; }
  .explore .pathway-card .card-title { font: 600 clamp(1.125rem, 1rem + 0.45vw, 1.5rem)/1.3 var(--font-poppins), 'Poppins', sans-serif; letter-spacing: 0; color: var(--brand-teal); margin: 0; transition: color 0.3s ease; }
  .explore .pathway-card .card-desc { margin-top: 14px; font-size: 0.9375rem; line-height: 1.65; color: var(--brand-teal); transition: color 0.3s ease; }
  .explore .pathway-card .card-arrow { margin-top: auto; padding-top: 24px; font-size: 1.5rem; line-height: 1; color: var(--brand-teal); transition: transform 0.3s ease, color 0.3s ease; }
  /* alternating hover: odd cards brown, even cards teal (white-on-brown / white-on-teal are permitted pairs) */
  .explore .pathway-card:hover, .explore .pathway-card:focus-visible { transform: translateY(-6px); background: var(--brand-teal); }
  .explore .pathway-card:nth-child(odd):hover, .explore .pathway-card:nth-child(odd):focus-visible { background: var(--brand-brown); }
  .explore .pathway-card:hover .card-eyebrow { color: var(--brand-pastel); }
  .explore .pathway-card:hover .card-title, .explore .pathway-card:hover .card-desc, .explore .pathway-card:hover .card-arrow { color: var(--brand-white); }
  .explore .pathway-card:hover .card-arrow { transform: translateX(8px); }

  .explore .home-faq { padding: clamp(56px, 7vw, 96px) var(--gutter) 0; max-width: 900px; margin: 0 auto; }
  .explore .home-faq .faq-item { border-top: 1px solid var(--brand-teal); padding: 22px 0; }
  .explore .home-faq .faq-item:last-child { border-bottom: 1px solid var(--brand-teal); }
  .explore .home-faq h3 { font: 600 clamp(1.0625rem, 1rem + 0.35vw, 1.25rem)/1.35 var(--font-poppins), 'Poppins', sans-serif; letter-spacing: 0; color: var(--brand-teal); margin: 0 0 10px; }
  .explore .home-faq p { font-size: 0.9375rem; line-height: 1.7; color: var(--brand-teal); margin: 0; }
  .explore .home-faq .faq-more { margin-top: 24px; font-size: 0.9375rem; }
  .explore .home-faq .faq-more a { color: var(--brand-teal); text-decoration: underline; }

  .process-section { padding: 80px 48px; max-width: 1200px; margin: 0 auto; }
  .process-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 48px; margin-top: 50px; }
  .process-pillar { position: relative; padding-top: 40px; }
  .pillar-line { width: 1px; height: 0; background: linear-gradient(to bottom, var(--gold), transparent); margin-bottom: 20px; transition: height 1s ease; }
  .pillar-line.drawn { height: 32px; }
  .pillar-number { font-family: var(--font-fraunces); font-size: 42px; font-weight: 300; color: var(--border-light); position: absolute; top: 0; right: 0; }
  .pillar-title { font-family: var(--font-fraunces); font-size: 22px; font-weight: 500; color: var(--text-primary); letter-spacing: 3px; text-transform: uppercase; margin-bottom: 14px; }
  .pillar-body { font-size: 14px; color: var(--text-secondary); line-height: 1.8; }

  @media (max-width: 1023px) {
    .explore .pathway-grid { grid-template-columns: repeat(2, 1fr); }
  }

  /* ---------- Mobile ---------- */
  @media (max-width: 768px) {
    .intro { padding: 120px 24px 110px; min-height: 90vh; }
    .intro .scroll-cue { margin-top: 40px; }

    .sky-mask-top, .sky-mask-bottom { height: 20vh; }
    .sky-scroll { height: 380vh; }
    .sky-text-overlay { padding-bottom: 8vh; }
    .sky-text-overlay .eyebrow { font-size: 0.6875rem; letter-spacing: 0.16em; padding: 7px 14px; margin-bottom: 12px; }
    .sky-text-overlay .devanagari { font-size: 11px; margin-top: 16px; }
    .phase-dots { right: 14px; }

    .positioning { padding: 80px 24px; }
    .process-section { padding: 60px 24px; }
    .process-grid { grid-template-columns: 1fr; gap: 32px; }
  }

  @media (max-width: 640px) {
    .explore .pathway-grid { grid-template-columns: 1fr; }
    .explore .pathway-card { min-height: 0; }
  }

  @media (max-width: 480px) {
    .intro { padding: 110px 20px 100px; }
    .intro .scroll-cue span { font-size: 9px; letter-spacing: 4px; }
    .scroll-line { height: 30px; }

    .sky-mask-top, .sky-mask-bottom { height: 15vh; }
    .sky-scroll { height: 320vh; }
    .sky-text-overlay { padding-bottom: 18vh; }
    .sky-text-overlay .eyebrow { letter-spacing: 0.1em; padding: 7px 14px; }

    .positioning { padding: 60px 20px; }
    .process-section { padding: 50px 20px; }
    .pillar-title { font-size: 18px; letter-spacing: 2px; }
    .pillar-body { font-size: 13px; }
    .pillar-number { font-size: 32px; }
  }
      `}} />
      {/* INTRO */}
      <div className="intro">
        <svg className="anchor" fill="currentColor" aria-hidden="true"><use href="#kl-star" /></svg>
        <h1 className="section-eyebrow">Buy-Side M&amp;A Advisory</h1>
        <p className="display">
          <span className="l1">You bring the thesis.</span>
          <span className="l2">We build the <em>universe.</em></span>
        </p>
        <div className="rule" aria-hidden="true" />
        <p className="lede">
          Kautilya is a Mumbai-based buy-side M&amp;A advisory. We find, diligence and close off-market acquisitions from $500K to $10M for private equity funds, search funds, family offices and holding companies, in any sector.
        </p>
        <p className="strap">We don&apos;t carry a pipeline. We build yours.</p>
        <Link href="/engage" className="hero-cta">
          Talk to DealDesk
        </Link>
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
            {shouldMountScene && <ThreeScene scrollContainerSelector="#skyScroll" />}
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
                Strategy is the difference<br />between a deal and a dynasty.
              </div>
              <div className="devanagari">चक्रव्यूह</div>
            </div>
            <div className="sky-text-overlay" id="skyText3">
              <div className="eyebrow">Buy-Side Advisory · Sourced with Rigor</div>
              <h2 className="sky-title">Your thesis.<br />Our intelligence.</h2>
              <div className="devanagari">ध्रुव · कौटिल्य</div>
            </div>
          </div>
        </div>
        <div className="sky-mask-bottom" />
      </div>

      {/* ARTHASHASTRA APPROACH */}
      <div className="positioning reveal">
        <div className="section-eyebrow">The Arthashastra Approach</div>
        <h2 className="section-title">Our Approach to Deal Sourcing</h2>
        <p className="section-body">
          Chanakya's Arthashastra, the ancient treatise on statecraft and economic policy, is not merely a historical text.
          It is a blueprint for strategic acquisition, institutional intelligence, and the patient accumulation of advantage.
          Kautilya embodies these principles in modern buy-side advisory.
        </p>
        <blockquote>
          "The wise acquire wealth as the bee gathers honey, without harming the flower."
          <footer>– Arthashastra, Book II</footer>
        </blockquote>
      </div>

      {/* PATHWAY CARDS — data-fluid-light: everything from here down is a light background for the cursor-trail shader */}
      <section className="explore" data-fluid-light>
      <div className="pathways-section">
        <div className="reveal">
          <div className="section-eyebrow">Explore</div>
          <h2 className="section-title">Explore Kautilya</h2>
        </div>
        <div className="pathway-grid reveal">
          <Link className="pathway-card" href="/portfolio">
            <div className="card-eyebrow">Case Studies</div>
            <h3 className="card-title">Advisory Portfolio</h3>
            <div className="card-desc">Closed acquisition mandates across sectors, from market mapping to deal close.</div>
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
          <Link className="pathway-card" href="/blog">
            <div className="card-eyebrow">Buyer Guides</div>
            <h3 className="card-title">Blog</h3>
            <div className="card-desc">Search funds, family-owned business acquisitions, and buy-side fundamentals explained.</div>
            <span className="card-arrow">→</span>
          </Link>
        </div>
      </div>
      <div className="home-faq reveal">
          <div className="section-eyebrow">FAQ</div>
          <h2 className="section-title">Frequently Asked Questions About Kautilya</h2>
          <div>
            {HOME_FAQS.map((f) => (
              <div className="faq-item" key={f.question}>
                <h3>{f.question}</h3>
                <p>{f.answer}</p>
              </div>
            ))}
          </div>
          <p className="faq-more">More answers on pricing, timelines and deal structures are on the <Link href="/faq">full FAQ page</Link>.</p>
        </div>
      </section>

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
