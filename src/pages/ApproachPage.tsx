import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PhaseExplorer, type Phase } from '../components/PhaseExplorer';

/* ── Phase data ── */
const phases: Phase[] = [
  {
    phaseNumber: '01',
    title: 'Mandate Definition',
    brief:
      'We translate your acquisition thesis into a precise, actionable search mandate — from first principles.',
    points: [
      'Thesis alignment with decision-makers',
      'Target profile: sector, size, geography',
      'Deal parameters and valuation framework',
      'Screening criteria design',
    ],
    accent: '#b8860b',
  },
  {
    phaseNumber: '02',
    title: 'Universe Construction',
    brief:
      'No recycled lists. Every target universe is built ground-up through primary research and proprietary data.',
    points: [
      'Primary research-driven target mapping',
      'Proprietary data across public & private markets',
      'Owner-operator identification via non-obvious channels',
      'Continuous refinement from market feedback',
    ],
    accent: '#c9a227',
  },
  {
    phaseNumber: '03',
    title: 'Targeted Outreach',
    brief:
      'Thesis-driven, confidential by default. Authentic engagement — not spray campaigns.',
    points: [
      'Confidential outreach to owners & operators',
      'Multi-channel: direct, referral, advisor-mediated',
      'Positioning tailored to each target\'s context',
      'Real-time pipeline tracking & transparency',
    ],
    accent: '#d4a847',
  },
  {
    phaseNumber: '04',
    title: 'Diligence & Structuring',
    brief:
      'From conversation to conviction. Diligence, information gathering, and deal structuring.',
    points: [
      'Preliminary business & financial diligence',
      'Data room coordination',
      'Structure analysis & term sheet advisory',
      'Valuation benchmarking and risk framework',
    ],
    accent: '#deb868',
  },
  {
    phaseNumber: '05',
    title: 'Execution & Close',
    brief:
      'From signed LOI to close — coordinating stakeholders, managing timelines, driving precision.',
    points: [
      'End-to-end transaction management',
      'Cross-functional stakeholder coordination',
      'Negotiation & counterparty management',
      'Post-close transition planning',
    ],
    accent: '#e8c882',
  },
];

/* ── Stats data ── */
const stats = [
  { stat: '100+', label: 'Mandates executed' },
  { stat: '40+', label: 'Sectors covered' },
  { stat: '95%', label: 'Close rate on LOIs' },
  { stat: '<90d', label: 'Avg. time to close' },
];

/* ── useInView ── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export default function ApproachPage() {
  const ctaView = useInView(0.1);
  const statsView = useInView(0.2);

  useEffect(() => {
    document.title = 'Kautilya — Our Approach';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page">
      <style dangerouslySetInnerHTML={{ __html: `
        /* ── Approach page ── */
        .approach-hero {
          position: relative;
          padding: 120px 48px 80px;
          max-width: 820px;
          margin: 0 auto;
          text-align: center;
        }

        .approach-hero .gradient-orb {
          position: absolute;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 500px;
          height: 320px;
          background: radial-gradient(ellipse, rgba(201,185,154,0.06) 0%, transparent 70%);
          pointer-events: none;
          filter: blur(60px);
        }

        .approach-hero .section-title {
          font-size: 48px;
          line-height: 1.12;
          margin-bottom: 24px;
        }

        .approach-hero .section-body {
          max-width: 560px;
          margin: 0 auto 40px;
          text-align: center;
        }

        .approach-hero-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .approach-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--text-primary);
          color: var(--canvas);
          font-family: 'Lora', serif;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 14px 28px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: opacity 0.3s;
        }
        .approach-btn-primary:hover { opacity: 0.88; }
        .approach-btn-primary svg { transition: transform 0.3s; }
        .approach-btn-primary:hover svg { transform: translateX(3px); }

        .approach-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: var(--header-footer-accent);
          font-family: 'Lora', serif;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 14px 28px;
          border: 1px solid var(--header-footer-accent-dim);
          cursor: pointer;
          text-decoration: none;
          transition: border-color 0.3s, color 0.3s, background 0.3s;
        }
        .approach-btn-secondary:hover {
          border-color: var(--header-footer-accent);
          background: var(--header-footer-accent);
          color: var(--canvas);
        }

        .approach-page-divider {
          width: 1px;
          height: 150px;
          background: linear-gradient(to bottom, transparent, var(--header-footer-accent-dim), transparent);
          margin: 0 auto;
        }

        /* ── Methodology section ── */
        .approach-methodology {
          padding: 80px 48px 100px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .approach-methodology .section-title {
          font-size: 40px;
          margin-bottom: 48px;
        }

        /* ── Phase Explorer ── */
        .phase-explorer {
          margin-top: 12px;
        }

        .phase-tabs {
          display: flex;
          gap: 0;
          border-bottom: 1px solid var(--border);
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        .phase-tabs::-webkit-scrollbar { display: none; }

        .phase-tab {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;
          padding: 16px 28px 20px;
          background: none;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          transition: opacity 0.3s;
          flex-shrink: 0;
        }
        .phase-tab:hover { opacity: 1; }

        .phase-tab-num {
          font-family: 'Cormorant', serif;
          font-size: 11px;
          letter-spacing: 2px;
          color: var(--text-muted);
          transition: color 0.3s;
        }

        .phase-tab-title {
          font-family: 'Lora', serif;
          font-size: 12px;
          letter-spacing: 1.5px;
          color: var(--text-muted);
          transition: color 0.3s;
        }

        .phase-tab--active .phase-tab-num { color: var(--gold); }
        .phase-tab--active .phase-tab-title { color: var(--text-primary); }

        .phase-tab-underline {
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          height: 2px;
        }

        /* Progress bar */
        .phase-progress-track {
          height: 1px;
          background: var(--border);
          margin-bottom: 0;
        }

        .phase-progress-fill {
          height: 100%;
          width: 100%;
        }

        /* Detail panel */
        .phase-detail {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          padding: 48px 12px 24px;
        }

        .phase-detail-num {
          font-family: 'Lora', serif;
          font-size: 10px;
          letter-spacing: 5px;
          text-transform: uppercase;
          display: block;
          margin-bottom: 12px;
        }

        .phase-detail-title {
          font-family: 'Cormorant', serif;
          font-size: 32px;
          font-weight: 400;
          color: var(--text-primary);
          letter-spacing: 1px;
          margin-bottom: 16px;
          line-height: 1.2;
        }

        .phase-detail-brief {
          font-family: 'Lora', serif;
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.85;
        }

        .phase-detail-points {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding-top: 6px;
        }

        .phase-detail-points li {
          display: flex;
          align-items: center;
          gap: 14px;
          font-family: 'Lora', serif;
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .phase-bullet {
          flex-shrink: 0;
          width: 5px;
          height: 5px;
          border-radius: 50%;
        }

        /* ── Stats ribbon ── */
        .approach-stats {
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 56px 48px;
          background: rgba(255,255,255,0.015);
        }

        .approach-stats-inner {
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          text-align: center;
        }

        .approach-stat-val {
          font-family: 'Cormorant', serif;
          font-size: 38px;
          font-weight: 400;
          color: var(--text-primary);
          letter-spacing: -0.5px;
        }

        .approach-stat-label {
          font-family: 'Lora', serif;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-top: 6px;
        }

        /* ── CTA section ── */
        .approach-cta {
          padding: 100px 48px 120px;
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
        }

        .approach-cta-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(201,162,39,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
        }

        .approach-cta .section-title {
          font-size: 42px;
          color: var(--gold);
          margin-bottom: 16px;
        }

        .approach-cta .section-body {
          max-width: 440px;
          margin: 0 auto 40px;
          text-align: center;
        }

        .approach-cta-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .approach-cta-email {
          font-family: 'Lora', serif;
          font-size: 12px;
          color: var(--text-muted);
          text-decoration: none;
          letter-spacing: 1px;
          transition: color 0.3s;
          padding: 14px 20px;
        }
        .approach-cta-email:hover { color: var(--text-secondary); }
        #methodology {
            scroll-margin-top: 25px; 
            }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .approach-hero { padding: 100px 24px 60px; }
          .approach-hero .section-title { font-size: 36px; }
          .approach-hero-actions { flex-direction: column; }

          .approach-methodology { padding: 60px 24px 80px; }
          .approach-methodology .section-title { font-size: 30px; }

          .phase-tab { padding: 14px 18px 16px; }
          .phase-tab-title { font-size: 11px; }

          .phase-detail {
            grid-template-columns: 1fr;
            gap: 32px;
            padding: 32px 4px 16px;
          }

          .approach-stats { padding: 40px 24px; }
          .approach-stats-inner { grid-template-columns: repeat(2, 1fr); gap: 28px; }
          .approach-stat-val { font-size: 30px; }

          .approach-cta { padding: 80px 24px 100px; }
          .approach-cta .section-title { font-size: 32px; }
          .approach-cta-actions { flex-direction: column; }

          .approach-page-divider { height: 120px; }
        }

        @media (max-width: 480px) {
          .approach-hero { padding: 80px 20px 50px; }
          .approach-hero .section-title { font-size: 28px; }

          .approach-methodology { padding: 50px 20px 60px; }
          .approach-methodology .section-title { font-size: 26px; }

          .phase-tabs { gap: 0; }
          .phase-tab { padding: 12px 14px 14px; }
          .phase-tab-num { font-size: 10px; }
          .phase-tab-title { font-size: 10px; letter-spacing: 1px; }

          .phase-detail { padding: 24px 0 12px; gap: 24px; }
          .phase-detail-title { font-size: 26px; }
          .phase-detail-brief { font-size: 13px; }
          .phase-detail-points li { font-size: 12px; gap: 10px; }

          .approach-stats-inner { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .approach-stat-val { font-size: 26px; }
          .approach-stat-label { font-size: 9px; }

          .approach-cta { padding: 60px 20px 80px; }
          .approach-cta .section-title { font-size: 26px; }

          .approach-page-divider { height: 108px; }
        }
      ` }} />

      {/* ── Hero ── */}
      <div className="approach-hero">
        <div className="gradient-orb" />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-eyebrow" style={{ textAlign: 'center' }}>Our Approach</div>
        </motion.div>

        <motion.h1
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          We don't carry a pipeline.<br />
          <span style={{ color: 'var(--gold)' }}>We build yours.</span>
        </motion.h1>

        <motion.p
          className="section-body"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          Proprietary acquisition pipelines, built on demand — in any sector, against any criteria, from first principles.
        </motion.p>

        <motion.div
          className="approach-hero-actions"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <a href="#methodology" className="approach-btn-primary">
            See how it works
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          <Link to="/engage" className="approach-btn-secondary">
            Start a conversation
          </Link>
        </motion.div>
      </div>

      <div className="approach-page-divider" />

      {/* ── Methodology / Phases ── */}
      <div className="approach-methodology" id="methodology">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-eyebrow">The Methodology</div>
          <h2 className="section-title">
            Five phases.{' '}
            <span style={{ color: 'var(--gold)' }}>One outcome.</span>
          </h2>
        </motion.div>

        <PhaseExplorer phases={phases} />
      </div>

      {/* ── Stats ribbon ── */}
      <div className="approach-stats" ref={statsView.ref}>
        <div
          className="approach-stats-inner"
          style={{
            opacity: statsView.visible ? 1 : 0,
            transform: statsView.visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="approach-stat-val">{s.stat}</div>
              <div className="approach-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="approach-cta" ref={ctaView.ref}>
        <div
          style={{
            opacity: ctaView.visible ? 1 : 0,
            transform: ctaView.visible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <div className="approach-cta-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </div>
          <h2 className="section-title">Ready to start?</h2>
          <p className="section-body">
            Share your thesis. We'll build the pipeline.
          </p>
          <div className="approach-cta-actions">
            <Link to="/engage" className="approach-btn-primary">
              Engage with us
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
            <a href="mailto:engage@kautilya.co" className="approach-cta-email">
              engage@kautilya.co →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
