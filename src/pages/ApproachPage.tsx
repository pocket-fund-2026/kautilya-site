import { useEffect, useState } from 'react';

type TabButtonProps = {
  active: boolean;
  number: string;
  title: string;
  onClick: () => void;
  className?: string;
};

function TabButton({ active, number, title, onClick, className = '' }: TabButtonProps) {
  return (
    <button className={`${className} ${active ? 'active' : ''}`.trim()} onClick={onClick}>
      <span className="tab-num">{number}</span>
      <span className="tab-title">{title}</span>
    </button>
  );
}

export default function ApproachPage() {
  const [activeService, setActiveService] = useState(0);
  const [activePhase, setActivePhase] = useState(0);

  useEffect(() => {
    document.title = 'Kautilya - Our Approach';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page approach-page-methodology">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .approach-page-methodology {
              --bg: var(--canvas);
              --bg2: rgba(255,255,255,0.012);
              --bg3: rgba(255,255,255,0.02);
              --gold: #c9a84c;
              --gold-dim: rgba(201,168,76,0.82);
              --gold-faint: rgba(201,162,39,0.08);
              --text: var(--text-primary);
              --text-dim: color-mix(in srgb, var(--text-primary) 82%, #ffffff 18%);
              --text-faint: color-mix(in srgb, var(--text-primary) 64%, #ffffff 36%);
              --border: rgba(201,162,39,0.2);
              --border-dim: var(--border);
              --card-bg: rgba(255,255,255,0.02);
              --card-hover: rgba(201,162,39,0.06);
              --red: #c4614a;
              --green: #6a9e72;
            }

            .approach-page-methodology *,
            .approach-page-methodology *::before,
            .approach-page-methodology *::after {
              box-sizing: border-box;
            }

            .approach-page-methodology {
              color: var(--text);
              font-family: 'Lora', serif;
              font-size: 15px;
              line-height: 1.75;
              overflow-x: hidden;
            }

            .approach-page-methodology .hero {
              padding: 108px 80px 76px;
              max-width: 1300px;
              margin: 0 auto;
              position: relative;
            }

            .approach-page-methodology .eyebrow {
              font-family: 'Lora', serif;
              font-size: 10px;
              letter-spacing: 0.24em;
              color: var(--gold);
              text-transform: uppercase;
              margin-bottom: 28px;
              opacity: 0.84;
            }

            .approach-page-methodology .hero-headline {
              font-family: 'Cormorant', serif;
              font-size: clamp(42px, 5vw, 72px);
              font-weight: 400;
              line-height: 1.1;
              color: var(--text);
              margin-bottom: 16px;
            }

            .approach-page-methodology .hero-headline em {
              font-style: italic;
              color: var(--gold);
            }

            .approach-page-methodology .hero-sub {
              max-width: 620px;
              color: var(--text-dim);
              font-size: 14px;
              line-height: 1.9;
              margin-bottom: 8px;
            }

            .approach-page-methodology .services-section {
              border-top: 1px solid var(--border-dim);
              border-bottom: 1px solid var(--border-dim);
              background: var(--bg2);
              padding: 80px 0 0;
              margin-bottom: 0;
            }

            .approach-page-methodology .services-inner {
              max-width: 1300px;
              margin: 0 auto;
              padding: 0 80px;
            }

            .approach-page-methodology .services-headline {
              font-family: 'Cormorant', serif;
              font-size: clamp(32px, 4vw, 52px);
              font-weight: 400;
              color: var(--text);
              margin-bottom: 14px;
              line-height: 1.1;
            }

            .approach-page-methodology .services-sub {
              color: var(--text-dim);
              font-size: 14px;
              max-width: 560px;
              line-height: 1.8;
              margin-bottom: 48px;
            }

            .approach-page-methodology .services-nav {
              display: flex;
              border-bottom: 1px solid var(--border-dim);
              margin-bottom: 0;
              overflow-x: auto;
              scrollbar-width: none;
            }

            .approach-page-methodology .services-nav::-webkit-scrollbar { display: none; }

            .approach-page-methodology .service-tab {
              display: flex;
              flex-direction: column;
              padding: 16px 28px 14px;
              cursor: pointer;
              border: none;
              background: none;
              text-align: left;
              border-bottom: 2px solid transparent;
              margin-bottom: -1px;
              transition: all 0.2s;
              white-space: nowrap;
            }

            .approach-page-methodology .service-tab:hover .tab-title { color: var(--text); }
            .approach-page-methodology .service-tab.active { border-bottom-color: var(--gold); }
            .approach-page-methodology .service-tab.active .tab-num { color: var(--gold); }
            .approach-page-methodology .service-tab.active .tab-title { color: var(--gold); }

            .approach-page-methodology .service-panel {
              display: none;
              padding: 56px 0 72px;
              animation: fadeIn 0.35s ease;
            }

            .approach-page-methodology .service-panel.active { display: block; }

            .approach-page-methodology .service-body {
              display: block;
              max-width: 760px;
            }

            .approach-page-methodology .service-stat-row {
              display: flex;
              gap: 0;
              border: 1px solid var(--border);
              border-radius: 2px;
              overflow: hidden;
              margin: 36px 0;
            }

            .approach-page-methodology .service-stat {
              flex: 1;
              padding: 18px 22px;
              border-right: 1px solid var(--border);
              min-width: 0;
            }

            .approach-page-methodology .service-stat:last-child { border-right: none; }

            .approach-page-methodology .service-stat-num {
              font-family: 'Cormorant', serif;
              font-size: 26px;
              font-weight: 500;
              color: var(--gold);
              line-height: 1;
              margin-bottom: 4px;
            }

            .approach-page-methodology .service-stat-label {
              font-family: 'Lora', serif;
              font-size: 9px;
              letter-spacing: 0.14em;
              color: var(--text-faint);
              text-transform: uppercase;
              line-height: 1.4;
            }

            .approach-page-methodology .service-tag {
              font-family: 'Lora', serif;
              font-size: 9px;
              letter-spacing: 0.18em;
              color: var(--gold-dim);
              text-transform: uppercase;
              margin-bottom: 16px;
            }

            .approach-page-methodology .service-title {
              font-family: 'Cormorant', serif;
              font-size: 28px;
              font-weight: 400;
              color: var(--text);
              line-height: 1.3;
              margin-bottom: 24px;
            }

            .approach-page-methodology .service-body p {
              font-size: 14px;
              color: var(--text-dim);
              line-height: 1.9;
              margin-bottom: 20px;
            }

            .approach-page-methodology .service-includes {
              margin-top: 36px;
              padding-top: 28px;
              border-top: 1px solid var(--border-dim);
            }

            .approach-page-methodology .si-label {
              font-family: 'Lora', serif;
              font-size: 8.5px;
              letter-spacing: 0.2em;
              color: var(--text-faint);
              text-transform: uppercase;
              margin-bottom: 14px;
            }

            .approach-page-methodology .si-grid {
              display: flex;
              flex-wrap: wrap;
              gap: 8px;
            }

            .approach-page-methodology .si-grid span {
              font-family: 'Lora', serif;
              font-size: 9px;
              letter-spacing: 0.1em;
              color: var(--text-dim);
              background: var(--card-bg);
              border: 1px solid var(--border-dim);
              padding: 5px 10px;
              border-radius: 1px;
              text-transform: uppercase;
            }

            .approach-page-methodology .methodology-nav {
              position: sticky;
              top: 0;
              z-index: 100;
              background: color-mix(in srgb, var(--canvas) 90%, transparent);
              backdrop-filter: blur(12px);
              border-bottom: 1px solid var(--border-dim);
              padding: 0 80px;
            }

            .approach-page-methodology .nav-inner {
              max-width: 1300px;
              margin: 0 auto;
              display: flex;
              align-items: stretch;
              overflow-x: auto;
              scrollbar-width: none;
            }

            .approach-page-methodology .nav-inner::-webkit-scrollbar { display: none; }

            .approach-page-methodology .nav-tab {
              display: flex;
              flex-direction: column;
              padding: 18px 28px 16px;
              cursor: pointer;
              position: relative;
              border: none;
              background: none;
              text-align: left;
              transition: all 0.2s;
              border-bottom: 2px solid transparent;
              margin-bottom: -1px;
              white-space: nowrap;
            }

            .approach-page-methodology .nav-tab:hover .tab-title { color: var(--text); }
            .approach-page-methodology .nav-tab.active { border-bottom-color: var(--gold); }
            .approach-page-methodology .nav-tab.active .tab-num { color: var(--gold); }
            .approach-page-methodology .nav-tab.active .tab-title { color: var(--gold); }

            .approach-page-methodology .tab-num {
              font-family: 'Lora', serif;
              font-size: 9px;
              letter-spacing: 0.2em;
              color: var(--text-faint);
              margin-bottom: 4px;
              transition: color 0.2s;
              text-transform: uppercase;
            }

            .approach-page-methodology .tab-title {
              font-family: 'Cormorant', serif;
              font-size: 17px;
              font-weight: 500;
              color: color-mix(in srgb, var(--text-dim) 90%, #ffffff 10%);
              transition: color 0.2s;
            }

            .approach-page-methodology .phases-container {
              max-width: 1300px;
              margin: 0 auto;
              padding: 0 80px 120px;
            }

            .approach-page-methodology .phase-panel {
              display: none;
              padding-top: 64px;
              animation: fadeIn 0.35s ease;
            }

            .approach-page-methodology .phase-panel.active { display: block; }

            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
            }

            .approach-page-methodology .phase-header {
              margin-bottom: 56px;
              padding-bottom: 40px;
              border-bottom: 1px solid var(--border-dim);
            }

            .approach-page-methodology .phase-eyebrow {
              font-family: 'Lora', serif;
              font-size: 9px;
              letter-spacing: 0.25em;
              color: var(--gold);
              text-transform: uppercase;
              margin-bottom: 16px;
              opacity: 0.7;
            }

            .approach-page-methodology .phase-title {
              font-family: 'Cormorant', serif;
              font-size: clamp(36px, 4vw, 56px);
              font-weight: 400;
              line-height: 1.1;
              color: var(--text);
              margin-bottom: 20px;
            }

            .approach-page-methodology .phase-hook {
              font-family: 'Cormorant', serif;
              font-size: 22px;
              font-style: italic;
              color: var(--text-dim);
              max-width: 760px;
              line-height: 1.5;
            }

            .approach-page-methodology .phase-body {
              display: grid;
              grid-template-columns: 1fr 380px;
              gap: 64px;
              align-items: start;
            }

            .approach-page-methodology .phase-body.wide {
              grid-template-columns: 1fr;
            }

            .approach-page-methodology .narrative p {
              color: var(--text-dim);
              font-size: 13.5px;
              line-height: 1.9;
              margin-bottom: 20px;
            }

            .approach-page-methodology .narrative p:last-child { margin-bottom: 0; }
            .approach-page-methodology .narrative strong { color: var(--text); font-weight: 700; }
            .approach-page-methodology .narrative em { font-style: italic; color: var(--text); }

            .approach-page-methodology .pull-quote {
              border-left: 2px solid var(--gold);
              padding: 20px 0 20px 28px;
              margin: 32px 0;
            }

            .approach-page-methodology .pull-quote p {
              font-family: 'Cormorant', serif;
              font-size: 20px;
              font-style: italic;
              color: var(--text) !important;
              line-height: 1.55;
              margin: 0 !important;
            }

            .approach-page-methodology .cards-column {
              display: grid;
              grid-template-columns: 1fr 1fr;
              grid-auto-rows: auto;
              gap: 12px;
              position: sticky;
              top: 80px;
              align-content: start;
            }

            .approach-page-methodology .cards-column .proof-card.wide { grid-column: span 2; }
            .approach-page-methodology .cards-column .proof-card.tall { grid-row: span 2; }

            .approach-page-methodology .proof-card {
              background: var(--card-bg);
              border: 1px solid var(--border-dim);
              border-radius: 2px;
              padding: 20px 22px;
              transition: all 0.25s;
              position: relative;
              overflow: hidden;
            }

            .approach-page-methodology .proof-card::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 2px;
              height: 100%;
              background: var(--gold);
              opacity: 0;
              transition: opacity 0.25s;
            }

            .approach-page-methodology .proof-card:hover {
              background: var(--card-hover);
              border-color: var(--border);
            }

            .approach-page-methodology .proof-card:hover::before { opacity: 1; }

            .approach-page-methodology .proof-card.highlight {
              background: var(--gold-faint);
              border-color: var(--border);
            }

            .approach-page-methodology .proof-card.highlight::before { opacity: 1; }

            .approach-page-methodology .card-label {
              font-family: 'Lora', serif;
              font-size: 8.5px;
              letter-spacing: 0.2em;
              color: var(--gold-dim);
              text-transform: uppercase;
              margin-bottom: 10px;
            }

            .approach-page-methodology .card-metric {
              font-family: 'Cormorant', serif;
              font-size: 32px;
              font-weight: 500;
              color: var(--gold);
              line-height: 1;
              margin-bottom: 6px;
            }

            .approach-page-methodology .card-metric.small { font-size: 22px; }

            .approach-page-methodology .card-desc {
              font-size: 12.5px;
              color: var(--text-dim);
              line-height: 1.6;
            }

            .approach-page-methodology .card-desc strong { color: var(--text); font-weight: 700; }

            .approach-page-methodology .card-tag {
              display: inline-block;
              margin-top: 10px;
              font-family: 'Lora', serif;
              font-size: 8px;
              letter-spacing: 0.15em;
              color: var(--text-faint);
              text-transform: uppercase;
              border: 1px solid var(--border-dim);
              padding: 3px 8px;
              border-radius: 1px;
            }

            .approach-page-methodology .findings-grid {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 16px;
              margin: 40px 0;
            }

            .approach-page-methodology .finding-card {
              background: var(--card-bg);
              border: 1px solid var(--border-dim);
              padding: 24px;
              border-radius: 2px;
              transition: all 0.25s;
              position: relative;
              overflow: hidden;
            }

            .approach-page-methodology .finding-card::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              height: 1px;
              background: linear-gradient(90deg, var(--gold-dim), transparent);
              opacity: 0;
              transition: opacity 0.25s;
            }

            .approach-page-methodology .finding-card:hover {
              background: var(--card-hover);
              border-color: var(--border);
            }

            .approach-page-methodology .finding-card:hover::after { opacity: 1; }

            .approach-page-methodology .finding-num {
              font-family: 'Cormorant', serif;
              font-size: 38px;
              font-weight: 500;
              color: var(--gold);
              line-height: 1;
              margin-bottom: 8px;
            }

            .approach-page-methodology .finding-title {
              font-family: 'Lora', serif;
              font-size: 9px;
              letter-spacing: 0.15em;
              color: var(--gold-dim);
              text-transform: uppercase;
              margin-bottom: 10px;
            }

            .approach-page-methodology .finding-desc {
              font-size: 12.5px;
              color: var(--text-dim);
              line-height: 1.65;
            }

            .approach-page-methodology .finding-desc strong { color: var(--text); }

            .approach-page-methodology .funnel-viz {
              margin: 32px 0;
              display: flex;
              flex-direction: column;
              gap: 0;
            }

            .approach-page-methodology .funnel-row {
              display: flex;
              align-items: center;
              gap: 16px;
              padding: 14px 0;
              border-bottom: 1px solid var(--border-dim);
            }

            .approach-page-methodology .funnel-row:last-child { border-bottom: none; }

            .approach-page-methodology .funnel-bar-wrap {
              flex: 1;
              height: 2px;
              background: var(--border-dim);
              border-radius: 1px;
              overflow: hidden;
            }

            .approach-page-methodology .funnel-bar {
              height: 100%;
              background: linear-gradient(90deg, var(--gold), var(--gold-dim));
              border-radius: 1px;
            }

            .approach-page-methodology .funnel-num {
              font-family: 'Cormorant', serif;
              font-size: 22px;
              color: var(--gold);
              min-width: 60px;
              text-align: right;
            }

            .approach-page-methodology .funnel-label {
              font-family: 'Lora', serif;
              font-size: 9px;
              letter-spacing: 0.12em;
              color: var(--text-dim);
              text-transform: uppercase;
              min-width: 180px;
            }

            .approach-page-methodology .channel-table {
              width: 100%;
              border-collapse: collapse;
              margin: 24px 0;
            }

            .approach-page-methodology .channel-table th {
              font-family: 'Lora', serif;
              font-size: 8.5px;
              letter-spacing: 0.2em;
              color: var(--text-faint);
              text-transform: uppercase;
              text-align: left;
              padding: 8px 12px;
              border-bottom: 1px solid var(--border-dim);
            }

            .approach-page-methodology .channel-table td {
              font-size: 13px;
              color: var(--text-dim);
              padding: 12px;
              border-bottom: 1px solid var(--border-dim);
              vertical-align: top;
            }

            .approach-page-methodology .channel-table td:first-child { color: var(--text); }
            .approach-page-methodology .channel-table td.gold {
              color: var(--gold);
              font-family: 'Cormorant', serif;
              font-size: 16px;
            }

            .approach-page-methodology .channel-table tr.top-row td { background: rgba(201,162,39,0.04); }

            .approach-page-methodology .scorecard {
              margin-top: 48px;
              padding: 32px;
              background: var(--card-bg);
              border: 1px solid var(--border);
              border-radius: 2px;
            }

            .approach-page-methodology .scorecard-title {
              font-family: 'Lora', serif;
              font-size: 9px;
              letter-spacing: 0.25em;
              color: var(--gold);
              text-transform: uppercase;
              margin-bottom: 24px;
            }

            .approach-page-methodology .scorecard-grid {
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              gap: 24px;
            }

            .approach-page-methodology .sc-num {
              font-family: 'Cormorant', serif;
              font-size: 28px;
              color: var(--text);
              line-height: 1;
              margin-bottom: 4px;
            }

            .approach-page-methodology .sc-num.gold { color: var(--gold); }
            .approach-page-methodology .sc-num.zero { color: var(--green); }

            .approach-page-methodology .sc-label {
              font-family: 'Lora', serif;
              font-size: 8.5px;
              letter-spacing: 0.12em;
              color: var(--text-faint);
              text-transform: uppercase;
              line-height: 1.4;
            }

            .approach-page-methodology .deal-cards-row {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 16px;
              margin: 40px 0;
            }

            .approach-page-methodology .deal-card {
              background: var(--card-bg);
              border: 1px solid var(--border-dim);
              padding: 24px;
              border-radius: 2px;
              transition: all 0.25s;
            }

            .approach-page-methodology .deal-card:hover {
              background: var(--card-hover);
              border-color: var(--border);
            }

            .approach-page-methodology .deal-card-name {
              font-family: 'Lora', serif;
              font-size: 9px;
              letter-spacing: 0.2em;
              color: var(--gold-dim);
              text-transform: uppercase;
              margin-bottom: 14px;
            }

            .approach-page-methodology .deal-card-headline {
              font-family: 'Cormorant', serif;
              font-size: 20px;
              color: var(--text);
              line-height: 1.3;
              margin-bottom: 12px;
            }

            .approach-page-methodology .deal-card-body {
              font-size: 12px;
              color: var(--text-dim);
              line-height: 1.65;
            }

            .approach-page-methodology .deal-card-body strong { color: var(--text); }

            .approach-page-methodology .deal-status {
              display: inline-block;
              margin-top: 14px;
              font-family: 'Lora', serif;
              font-size: 8px;
              letter-spacing: 0.15em;
              text-transform: uppercase;
              padding: 3px 8px;
              border-radius: 1px;
            }

            .approach-page-methodology .status-closed {
              background: rgba(106,158,114,0.1);
              color: var(--green);
              border: 1px solid rgba(106,158,114,0.2);
            }

            .approach-page-methodology .status-killed {
              background: rgba(196,97,74,0.1);
              color: var(--red);
              border: 1px solid rgba(196,97,74,0.2);
            }

            .approach-page-methodology .section-divider {
              border: none;
              border-top: 1px solid var(--border-dim);
              margin: 40px 0;
            }

            .approach-page-methodology .inline-metric {
              display: inline-block;
              background: var(--gold-faint);
              border: 1px solid var(--border);
              padding: 1px 8px;
              border-radius: 1px;
              font-family: 'Cormorant', serif;
              font-size: 16px;
              color: var(--gold);
              vertical-align: middle;
              margin: 0 2px;
            }

            @media (max-width: 1024px) {
              .approach-page-methodology .hero,
              .approach-page-methodology .phases-container {
                padding-left: 40px;
                padding-right: 40px;
              }

              .approach-page-methodology .methodology-nav { padding: 0 40px; }
              .approach-page-methodology .phase-body { grid-template-columns: 1fr; }
              .approach-page-methodology .cards-column { position: static; }
              .approach-page-methodology .scorecard-grid { grid-template-columns: repeat(2, 1fr); }
              .approach-page-methodology .deal-cards-row { grid-template-columns: repeat(2, 1fr); }
              .approach-page-methodology .findings-grid { grid-template-columns: 1fr; }
              .approach-page-methodology .services-inner { padding: 0 40px; }
              .approach-page-methodology .service-stat-row { flex-wrap: wrap; }
              .approach-page-methodology .service-stat { min-width: 45%; }
            }

            @media (max-width: 680px) {
              .approach-page-methodology .hero,
              .approach-page-methodology .phases-container {
                padding-left: 20px;
                padding-right: 20px;
              }

              .approach-page-methodology .methodology-nav { padding: 0 20px; }
              .approach-page-methodology .services-inner { padding: 0 20px; }
              .approach-page-methodology .services-section { padding-top: 56px; }
              .approach-page-methodology .deal-cards-row { grid-template-columns: 1fr; }
              .approach-page-methodology .scorecard-grid { grid-template-columns: repeat(2, 1fr); }
              .approach-page-methodology .service-tab,
              .approach-page-methodology .nav-tab { padding: 14px 16px 12px; }
              .approach-page-methodology .tab-title { font-size: 15px; }
              .approach-page-methodology .funnel-label { min-width: 120px; }
            }
          `,
        }}
      />

      <section className="hero">
        <div className="eyebrow">The Methodology</div>
        <h1 className="hero-headline">
          The right acquisition
          <br />
          does not find you.
          <br />
          <em>You find it.</em>
        </h1>
        <p className="hero-sub">
          Most buyers come to us after the same experience: months of deal flow that went nowhere,
          a term sheet that fell apart in diligence, or capital deployed into something that made
          sense on paper and did not in practice. The problem was never the market. The problem
          was the process.
        </p>
      </section>

      <section className="services-section">
        <div className="services-inner">
          <div className="eyebrow">What We Do</div>
          <h2 className="services-headline">Three ways to work with us.</h2>
          <p className="services-sub">
            Some clients come before they have found a deal. Some come mid-process when something
            does not feel right. Some come after close, needing someone who understands the
            business they just bought to help them run it.
          </p>

          <nav className="services-nav" aria-label="Services tabs">
            <TabButton
              className="service-tab"
              active={activeService === 0}
              number="01"
              title="Fractional M&A"
              onClick={() => setActiveService(0)}
            />
            <TabButton
              className="service-tab"
              active={activeService === 1}
              number="02"
              title="Fractional CFO"
              onClick={() => setActiveService(1)}
            />
            <TabButton
              className="service-tab"
              active={activeService === 2}
              number="03"
              title="Forensic Due Diligence"
              onClick={() => setActiveService(2)}
            />
          </nav>

          <div className={`service-panel ${activeService === 0 ? 'active' : ''}`}>
            <div className="service-body">
              <div className="service-tag">Dealflow. Structuring. Negotiation. Close.</div>
              <h3 className="service-title">
                For buyers who need a full acquisition capability without building one in-house.
              </h3>
              <p>
                You have a thesis, capital, and a calendar that is already full. What you do not
                have is the infrastructure to run a disciplined acquisition process from search to
                close without momentum overriding judgment at every turn.
              </p>
              <p>
                We provide that. End to end. Mandate formation, proprietary sourcing, founder
                outreach, diligence, structuring, negotiation, and closing. You stay focused on
                running your business. We find you the right one to buy next.
              </p>

              <div className="service-stat-row">
                <div className="service-stat">
                  <div className="service-stat-num">5+</div>
                  <div className="service-stat-label">Deals closed</div>
                </div>
                <div className="service-stat">
                  <div className="service-stat-num">2,500+</div>
                  <div className="service-stat-label">Founders contacted</div>
                </div>
                <div className="service-stat">
                  <div className="service-stat-num">2 of 8+</div>
                  <div className="service-stat-label">LOIs killed to protect buyer</div>
                </div>
                <div className="service-stat">
                  <div className="service-stat-num">GBP 0</div>
                  <div className="service-stat-label">Capital lost to bad deals</div>
                </div>
              </div>

              <div className="service-includes">
                <div className="si-label">What is included</div>
                <div className="si-grid">
                  <span>Mandate formation</span>
                  <span>Universe construction</span>
                  <span>Founder outreach</span>
                  <span>Deal screening</span>
                  <span>Financial diligence</span>
                  <span>Deal structuring</span>
                  <span>Negotiation support</span>
                  <span>Closing assistance</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`service-panel ${activeService === 1 ? 'active' : ''}`}>
            <div className="service-body">
              <div className="service-tag">Books. Accounts. Strategy. Growth.</div>
              <h3 className="service-title">
                For operators running a business whose financial infrastructure has not kept up.
              </h3>
              <p>
                After most acquisitions, the buyer inherits a P and L formatted for a sale process,
                not for running a company. The cost structure is unmapped. There is no model that
                tells you what is driving margin, what is exposed, or where to put the next pound
                of capital.
              </p>
              <p>
                We start at the foundation. Clean up the books, rebuild accounts from source data,
                and make sure what you are looking at every month actually reflects what the
                business is doing. Then we build on top of it: forecasting, scenario modelling, and
                a strategy layer that connects your numbers to where you are trying to go.
              </p>

              <div className="service-stat-row">
                <div className="service-stat">
                  <div className="service-stat-num">Inspire3</div>
                  <div className="service-stat-label">
                    First client we now run as fractional CFOs
                  </div>
                </div>
                <div className="service-stat">
                  <div className="service-stat-num">15 days</div>
                  <div className="service-stat-label">From diligence to operating handover</div>
                </div>
                <div className="service-stat">
                  <div className="service-stat-num">Source data</div>
                  <div className="service-stat-label">
                    Every number traced back before we model from it
                  </div>
                </div>
              </div>

              <div className="service-includes">
                <div className="si-label">What is included</div>
                <div className="si-grid">
                  <span>Monthly bookkeeping</span>
                  <span>Accounts reconciliation</span>
                  <span>Cash flow forecasting</span>
                  <span>Management accounts</span>
                  <span>Financial modelling</span>
                  <span>Scenario analysis</span>
                  <span>Budget and variance tracking</span>
                  <span>Strategic finance</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`service-panel ${activeService === 2 ? 'active' : ''}`}>
            <div className="service-body">
              <div className="service-tag">
                For founders who want the real picture of their own business.
              </div>
              <h3 className="service-title">Most diligence is done for buyers. This one is for you.</h3>
              <p>
                We go through your business the same way we would go through a target for one of
                our buyers. Transaction-level verification. Processor reconciliation. Cost structure
                mapping. Every number traced back to source.
              </p>
              <p>
                What you get is not a report that tells you what you already know. It is an
                independently verified picture of your financial position. Every gap, inconsistency,
                and hidden exposure surfaced before it becomes someone else&apos;s negotiating
                leverage.
              </p>

              <div className="service-stat-row">
                <div className="service-stat">
                  <div className="service-stat-num">7+</div>
                  <div className="service-stat-label">Material findings per engagement on average</div>
                </div>
                <div className="service-stat">
                  <div className="service-stat-num">99.83%</div>
                  <div className="service-stat-label">Monetary match rate on transaction audit</div>
                </div>
                <div className="service-stat">
                  <div className="service-stat-num">15 days</div>
                  <div className="service-stat-label">Full scope on a 1.8M portfolio</div>
                </div>
                <div className="service-stat">
                  <div className="service-stat-num">30,134</div>
                  <div className="service-stat-label">Transactions validated on one engagement</div>
                </div>
              </div>

              <div className="service-includes">
                <div className="si-label">What is included</div>
                <div className="si-grid">
                  <span>Transaction-level audit</span>
                  <span>Processor reconciliation</span>
                  <span>P and L reconstruction</span>
                  <span>Cost structure verification</span>
                  <span>Partner economics review</span>
                  <span>Cash flow analysis</span>
                  <span>Risk and findings register</span>
                  <span>Investor-ready summary</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <nav className="methodology-nav" aria-label="Methodology phases">
        <div className="nav-inner">
          <TabButton
            className="nav-tab"
            active={activePhase === 0}
            number="01"
            title="Mandate Definition"
            onClick={() => setActivePhase(0)}
          />
          <TabButton
            className="nav-tab"
            active={activePhase === 1}
            number="02"
            title="Universe Construction"
            onClick={() => setActivePhase(1)}
          />
          <TabButton
            className="nav-tab"
            active={activePhase === 2}
            number="03"
            title="Targeted Outreach"
            onClick={() => setActivePhase(2)}
          />
          <TabButton
            className="nav-tab"
            active={activePhase === 3}
            number="04"
            title="Diligence and Structuring"
            onClick={() => setActivePhase(3)}
          />
          <TabButton
            className="nav-tab"
            active={activePhase === 4}
            number="05"
            title="Execution and Close"
            onClick={() => setActivePhase(4)}
          />
        </div>
      </nav>

      <div className="phases-container">
        <div className={`phase-panel ${activePhase === 0 ? 'active' : ''}`}>
          <div className="phase-header">
            <div className="phase-eyebrow">Phase 01</div>
            <h2 className="phase-title">Mandate Definition</h2>
            <p className="phase-hook">
              Most acquisitions fail before the first conversation is ever made. Not in diligence.
              Not at the negotiation table. They fail the moment a buyer starts searching without
              knowing precisely what they are looking for.
            </p>
          </div>

          <div className="phase-body">
            <div className="narrative">
              <p>
                You have seen it. Months of deal flow that goes nowhere. Opportunities that feel
                right until they do not. <strong>Capital sitting idle while you evaluate things
                that were never going to fit.</strong> That is not a sourcing problem, it is a
                mandate problem.
              </p>
              <p>
                We fix it first. The buyers who move fastest and waste least are the ones who
                started with the <strong>clearest brief</strong>, not a vague sector preference and
                not a rough budget range.
              </p>
              <p>
                <strong>For Borderless</strong>, generating 2 to 3M ARR and heading into a Series A,
                the mandate was not to find a business to acquire. It was to identify 50K to 250K
                in annualised cashflow through structures the market had not seen before.
              </p>

              <div className="pull-quote">
                <p>
                  The mandate we build with you becomes the lens everything else gets evaluated
                  through. It is the reason we can move quickly when the right deal appears, and
                  walk away cleanly when it does not.
                </p>
              </div>

              <p>
                <strong>For SmartPrompt</strong>, we explored four categories before submitting a
                single LOI. That process produced a filter precise enough to disqualify two serious
                candidates mid-engagement.
              </p>
            </div>

            <div className="cards-column">
              <div className="proof-card highlight wide">
                <div className="card-label">Borderless - Reframing the brief</div>
                <div className="card-metric small">Not acquire a firm</div>
                <div className="card-desc">
                  The original ask was to buy an immigration business. We redefined it:
                  <strong> acquire recurring cashflow, not ownership.</strong>
                </div>
                <span className="card-tag">Immigration - UK</span>
              </div>

              <div className="proof-card tall">
                <div className="card-label">Dino Games - Thesis before sourcing</div>
                <div className="card-metric small">20+ yrs experience</div>
                <div className="card-desc">
                  A seasoned PE-exit operator entering consumer mobile for the first time.
                  <strong> Mapped before a single target was contacted.</strong>
                </div>
                <span className="card-tag">Mobile Gaming</span>
              </div>

              <div className="proof-card">
                <div className="card-label">Runify - Risk tolerance</div>
                <div className="card-metric small">3 months old</div>
                <div className="card-desc">
                  The mandate defined exactly how much unproven durability the buyer could absorb.
                  <strong> Structure followed from that.</strong>
                </div>
                <span className="card-tag">Consumer Fitness</span>
              </div>

              <div className="proof-card">
                <div className="card-label">SmartPrompt - Mandate before market</div>
                <div className="card-metric small">4 categories</div>
                <div className="card-desc">
                  Criteria emerged from structured market exposure, not sector enthusiasm.
                  <strong> The brief got sharper with every round.</strong>
                </div>
                <span className="card-tag">AI / GPT - SaaS</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`phase-panel ${activePhase === 1 ? 'active' : ''}`}>
          <div className="phase-header">
            <div className="phase-eyebrow">Phase 02</div>
            <h2 className="phase-title">Universe Construction</h2>
            <p className="phase-hook">
              The best deals are not listed anywhere. The operators who built them are not looking
              to sell, until the right conversation finds them.
            </p>
          </div>

          <div className="phase-body">
            <div className="narrative">
              <p>
                The opportunities on open marketplaces have already been seen by everyone.
                <strong> The information asymmetry is gone before you arrive.</strong>
              </p>
              <p>
                The deals worth doing are the ones nobody else has found yet.
                <strong> Every universe we build starts from zero:</strong> primary research,
                proprietary data, and channels that require effort to access.
              </p>

              <div className="pull-quote">
                <p>
                  For Borderless, we built a target universe that had never existed before, mapping
                  a market that had never been systematically approached for M and A.
                </p>
              </div>

              <p>
                For Dino Games, scraping infrastructure pulled App Store and Google Play data across
                thousands of titles before contacting a single founder. The asset that closed was
                not on any marketplace.
              </p>

              <div className="funnel-viz">
                <div className="funnel-row">
                  <div className="funnel-label">Targets identified</div>
                  <div className="funnel-bar-wrap"><div className="funnel-bar" style={{ width: '100%' }} /></div>
                  <div className="funnel-num">500</div>
                </div>
                <div className="funnel-row">
                  <div className="funnel-label">Conversations initiated</div>
                  <div className="funnel-bar-wrap"><div className="funnel-bar" style={{ width: '26%' }} /></div>
                  <div className="funnel-num">130</div>
                </div>
                <div className="funnel-row">
                  <div className="funnel-label">Mandate-aligned deals</div>
                  <div className="funnel-bar-wrap"><div className="funnel-bar" style={{ width: '8%' }} /></div>
                  <div className="funnel-num">20</div>
                </div>
                <div className="funnel-row">
                  <div className="funnel-label">Serious candidates</div>
                  <div className="funnel-bar-wrap"><div className="funnel-bar" style={{ width: '1.6%' }} /></div>
                  <div className="funnel-num">3</div>
                </div>
                <div className="funnel-row">
                  <div className="funnel-label">Closed</div>
                  <div className="funnel-bar-wrap"><div className="funnel-bar" style={{ width: '0.4%' }} /></div>
                  <div className="funnel-num">1</div>
                </div>
              </div>

              <p>
                The universe we build is not a starting point we hand off. It is a living research
                asset, continuously refined as feedback comes in and as conversations surface new
                operators.
              </p>
            </div>

            <div className="cards-column">
              <div className="proof-card">
                <div className="card-label">Borderless - Universe built</div>
                <div className="card-metric">1,500</div>
                <div className="card-desc">
                  Advisors mapped from GOV.UK, Companies House, ILB, and WhatsApp communities.
                  <strong> Built from scratch.</strong>
                </div>
                <span className="card-tag">Never done before</span>
              </div>

              <div className="proof-card">
                <div className="card-label">Dino Games - Off-market find</div>
                <div className="card-metric small">8M installs</div>
                <div className="card-desc">
                  Found via Reddit. No broker. No listing.
                  <strong> 3K monthly net profit.</strong>
                </div>
                <span className="card-tag">Proprietary sourcing</span>
              </div>

              <div className="proof-card wide highlight">
                <div className="card-label">SmartPrompt - Pricing edge from going off-market</div>
                <div className="card-metric">200x</div>
                <div className="card-desc">
                  Discount versus comparable market transactions, only possible because the asset
                  was sourced before it was widely shopped.
                </div>
                <span className="card-tag">AI / GPT platform</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`phase-panel ${activePhase === 2 ? 'active' : ''}`}>
          <div className="phase-header">
            <div className="phase-eyebrow">Phase 03</div>
            <h2 className="phase-title">Targeted Outreach</h2>
            <p className="phase-hook">
              There is a reason most outreach does not work. It is built for volume, not trust.
              Trust is the only currency that opens doors in markets like these.
            </p>
          </div>

          <div className="phase-body">
            <div className="narrative">
              <p>
                The first thing most sourcing operations do is launch a campaign. Thousands of
                emails, templated messaging, broad targeting. We tested that and moved channels
                quickly once data showed weak conversion.
              </p>

              <p>
                Response rates shifted from below 5 percent to 20-40 percent by moving toward
                social and context-rich outreach.
                <strong> Not a template. A real opening to a real conversation.</strong>
              </p>

              <div className="pull-quote">
                <p>
                  Personalisation was treated as a first-order variable, not an optimisation layer.
                  Each message was a real opening to a real conversation.
                </p>
              </div>

              <p>
                For Borderless, we ran channels in parallel and measured conversion in real time.
              </p>

              <table className="channel-table">
                <thead>
                  <tr>
                    <th>Channel</th>
                    <th>Volume</th>
                    <th>Ranking</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="top-row">
                    <td>Cold calls</td>
                    <td>~200-250</td>
                    <td className="gold">#1</td>
                  </tr>
                  <tr>
                    <td>Direct email</td>
                    <td>~1,500</td>
                    <td className="gold">#2</td>
                  </tr>
                  <tr>
                    <td>LinkedIn</td>
                    <td>included</td>
                    <td className="gold">#3</td>
                  </tr>
                  <tr>
                    <td>Social (FB/WA)</td>
                    <td>~600</td>
                    <td className="gold">#4</td>
                  </tr>
                </tbody>
              </table>

              <p>
                Cold calls ranked first. The data set resource allocation. Result: 43+ serious
                conversations and 8 to 10 aligned operators.
              </p>
            </div>

            <div className="cards-column">
              <div className="proof-card wide highlight">
                <div className="card-label">Dino Games - Channel pivot</div>
                <div className="card-metric">&lt;5% to 40%</div>
                <div className="card-desc">
                  Response rate after shifting from email to Reddit and Twitter.
                  <strong> 3 LOIs issued in the same week.</strong>
                </div>
                <span className="card-tag">Week 1 to Week 3</span>
              </div>

              <div className="proof-card tall">
                <div className="card-label">Borderless - Outreach result</div>
                <div className="card-metric small">43+</div>
                <div className="card-desc">
                  Serious conversations with operators in a market never approached for M and A
                  before. <strong>8 to 10 aligned operators surfaced.</strong>
                </div>
                <span className="card-tag">UK Immigration</span>
              </div>

              <div className="proof-card">
                <div className="card-label">Runify - Social vs email</div>
                <div className="card-metric small">20-30%</div>
                <div className="card-desc">
                  Response rate via Twitter and Reddit versus <strong>below 5% on email.</strong>
                </div>
                <span className="card-tag">Consumer fitness</span>
              </div>

              <div className="proof-card">
                <div className="card-label">Intel gathered beyond the deal</div>
                <div className="card-metric small">1,000-1,500</div>
                <div className="card-desc">
                  Operators mapped for pricing, capacity, and exit appetite through conversations
                  that never converted.
                </div>
                <span className="card-tag">Competitive intel</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`phase-panel ${activePhase === 3 ? 'active' : ''}`}>
          <div className="phase-header">
            <div className="phase-eyebrow">Phase 04</div>
            <h2 className="phase-title">Diligence and Structuring</h2>
            <p className="phase-hook">
              You are about to spend six figures on a business you have never operated. The seller
              is friendly and the numbers look clean. The version you are shown is rarely complete.
            </p>
          </div>

          <div className="phase-body wide">
            <div className="narrative">
              <p>
                Most sellers do not have a full picture of their own financials either. Historical
                accounting choices, drifted data logic, and legacy payment routing do not show up on
                summary sheets. They become your problem at close.
              </p>
              <p>
                This is not worst-case. <strong>This is a normal deal.</strong> The only way to
                find what is actually there is source-level reconstruction.
              </p>
            </div>

            <div className="findings-grid">
              <div className="finding-card">
                <div className="finding-num">60x</div>
                <div className="finding-title">Database vs actual cash - Inspire3</div>
                <div className="finding-desc">
                  A cost figure in the database was 60 times larger than actual cash leaving the
                  business. <strong>Modelling from it made the business look loss-making.</strong>
                </div>
              </div>
              <div className="finding-card">
                <div className="finding-num">57K</div>
                <div className="finding-title">Unreconciled income gap - Inspire3</div>
                <div className="finding-desc">
                  Difference between processor-level receipts and accounting records on a major
                  income line. <strong>Material and previously unspotted.</strong>
                </div>
              </div>
              <div className="finding-card">
                <div className="finding-num">38</div>
                <div className="finding-title">Transactions to wrong account - Inspire3</div>
                <div className="finding-desc">
                  Completed customer payments routing through legacy infrastructure tied to old
                  arrangements. <strong>Caught and shut down before signing.</strong>
                </div>
              </div>
              <div className="finding-card">
                <div className="finding-num">0</div>
                <div className="finding-title">Commission flag silently wrong - Inspire3</div>
                <div className="finding-desc">
                  Entire cost category recorded as zero after logic drift.
                  <strong> Segment cash outflows were understated.</strong>
                </div>
              </div>
            </div>

            <div className="narrative">
              <div className="pull-quote">
                <p>
                  7 material findings. 30,134 transactions validated. 99.83 percent monetary match
                  rate. Surfaced within 15 calendar days, before capital changed hands.
                </p>
              </div>
              <p>
                The diligence work was so operationally grounded that the buyer asked us to keep
                running the business as fractional CFOs.
              </p>
            </div>

            <hr className="section-divider" />

            <div className="narrative">
              <p>
                On other deals, findings looked different but the principle was the same.
                Verification before commitment.
              </p>
              <p>
                <strong>Dino Games:</strong> discrepancies found across payment platforms, plus
                legacy monetisation mechanics requiring shutdown before close.
              </p>
              <p>
                <strong>Runify:</strong> quoted MRR did not match collected cash after currency and
                collection timing adjustments.
              </p>
              <p>
                <strong>SmartPrompt:</strong> two LOIs terminated before closing the right asset.
                Price looked attractive; probability-weighted downside did not.
              </p>
            </div>

            <div className="deal-cards-row">
              <div className="deal-card">
                <div className="deal-card-name">Dino Games</div>
                <div className="deal-card-headline">44% of consideration deferred over 12 months</div>
                <div className="deal-card-body">
                  Not price compression, <strong>risk reallocation</strong>. Seller kept headline.
                  Buyer kept downside protection.
                </div>
                <span className="deal-status status-closed">Closed - 39K</span>
              </div>
              <div className="deal-card">
                <div className="deal-card-name">Runify</div>
                <div className="deal-card-headline">74% of consideration performance-linked</div>
                <div className="deal-card-body">
                  <strong>30K deployed upfront</strong> on a 110K deal after revenue quality
                  adjustments.
                </div>
                <span className="deal-status status-closed">Closed - 110K</span>
              </div>
              <div className="deal-card">
                <div className="deal-card-name">SmartPrompt</div>
                <div className="deal-card-headline">2 LOIs terminated before right close</div>
                <div className="deal-card-body">
                  80%+ churn, zero proprietary tech, and founder dependency.
                  <strong> Momentum bias overruled by discipline.</strong>
                </div>
                <span className="deal-status status-killed">2 LOIs killed</span>
              </div>
            </div>

            <div className="scorecard">
              <div className="scorecard-title">Diligence scorecard - across all engagements</div>
              <div className="scorecard-grid">
                <div className="sc-item">
                  <div className="sc-num gold">30,134</div>
                  <div className="sc-label">Transactions validated individually</div>
                </div>
                <div className="sc-item">
                  <div className="sc-num gold">15+</div>
                  <div className="sc-label">Material findings surfaced</div>
                </div>
                <div className="sc-item">
                  <div className="sc-num gold">15 days</div>
                  <div className="sc-label">Full DD on a 1.8M portfolio</div>
                </div>
                <div className="sc-item">
                  <div className="sc-num zero">GBP 0</div>
                  <div className="sc-label">Capital lost to missed diligence</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`phase-panel ${activePhase === 4 ? 'active' : ''}`}>
          <div className="phase-header">
            <div className="phase-eyebrow">Phase 05</div>
            <h2 className="phase-title">Execution and Close</h2>
            <p className="phase-hook">
              Getting to LOI is not the hard part. Holding discipline from LOI to close while
              pressure builds is where most deals fail quietly.
            </p>
          </div>

          <div className="phase-body wide">
            <div className="narrative">
              <p>
                We have closed across five asset classes. Execution was not paperwork, it was
                discipline: holding structure, refusing unsafe mechanics, and ensuring operational
                readiness on day one.
              </p>
            </div>

            <div className="deal-cards-row">
              <div className="deal-card">
                <div className="deal-card-name">SmartPrompt</div>
                <div className="deal-card-headline">LOI to close in 7 days. Zero post-close lag.</div>
                <div className="deal-card-body">
                  Operator recruited in parallel with diligence.
                  <strong> Transition-ready before APA signature.</strong>
                </div>
                <span className="deal-status status-closed">12K - All cash - 7 days</span>
              </div>

              <div className="deal-card">
                <div className="deal-card-name">Dino Games</div>
                <div className="deal-card-headline">Seller proposed no escrow. Flat rejection.</div>
                <div className="deal-card-body">
                  Signed APA, inspection period, milestone releases, or no deal.
                  <strong> Safety over speed, every time.</strong>
                </div>
                <span className="deal-status status-closed">39K - Structured close</span>
              </div>

              <div className="deal-card">
                <div className="deal-card-name">Runify</div>
                <div className="deal-card-headline">Neither opening number. Both interests met.</div>
                <div className="deal-card-body">
                  Seller wanted 30% upfront. We opened at 20%. Final structure solved liquidity
                  timing with performance linkage.
                </div>
                <span className="deal-status status-closed">110K - 30K upfront</span>
              </div>
            </div>

            <div className="narrative">
              <div className="pull-quote">
                <p>
                  Borderless entered its Series A with a live growth lever worth 70K to 80K
                  annually and a repeatable framework to keep deploying.
                </p>
              </div>

              <p>
                For Borderless: 1,500+ operators mapped and 43+ serious conversations converted to
                a referral partnership worth <span className="inline-metric">70K-80K / yr</span>
                and an enterprise-value impact up to <span className="inline-metric">1.6M</span>.
              </p>

              <p>
                For Inspire3: 15 days, seven findings resolved, and a verified financial model from
                independently validated source data. The engagement became an ongoing operating role
                as fractional CFO.
              </p>
            </div>

            <div className="scorecard">
              <div className="scorecard-title">The full scorecard</div>
              <div className="scorecard-grid">
                <div className="sc-item">
                  <div className="sc-num gold">2,500+</div>
                  <div className="sc-label">Outbound messages sent</div>
                </div>
                <div className="sc-item">
                  <div className="sc-num gold">300+</div>
                  <div className="sc-label">Founder conversations conducted</div>
                </div>
                <div className="sc-item">
                  <div className="sc-num gold">8+</div>
                  <div className="sc-label">LOIs submitted</div>
                </div>
                <div className="sc-item">
                  <div className="sc-num gold">2</div>
                  <div className="sc-label">LOIs terminated to protect buyer</div>
                </div>
                <div className="sc-item">
                  <div className="sc-num gold">5+</div>
                  <div className="sc-label">Deals closed</div>
                </div>
                <div className="sc-item">
                  <div className="sc-num zero">GBP 0</div>
                  <div className="sc-label">Capital lost to bad structures</div>
                </div>
                <div className="sc-item">
                  <div className="sc-num zero">GBP 0</div>
                  <div className="sc-label">Capital lost to missed diligence</div>
                </div>
                <div className="sc-item">
                  <div className="sc-num gold">1</div>
                  <div className="sc-label">Client now operated as fractional CFO</div>
                </div>
              </div>
            </div>

            <div className="pull-quote" style={{ marginTop: '48px' }}>
              <p>
                We do not close deals for the sake of closing deals. We close the right ones, and
                we have walked away from enough wrong ones to know the difference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
