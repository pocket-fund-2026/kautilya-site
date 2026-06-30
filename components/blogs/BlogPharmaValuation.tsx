'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import { useReadingProgressAndShareBar } from '@/components/useReadingProgressAndShareBar';

export default function BlogPharmaValuation() {
  useReadingProgressAndShareBar();

  const shareTwitter = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('KKR turned Rs. 3,100 Cr into Rs. 25,689 Cr in 5 years. What the Torrent-JB Chemicals deal tells you about your pharma business\'s true value — via @microsearchfund');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  }, []);

  const shareLinkedIn = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  }, []);

  const shareEmail = useCallback(() => {
    const subject = encodeURIComponent('How to Value a Founder-Owned Pharma Business in India');
    const body = encodeURIComponent(`Thought you'd find this useful: ${window.location.href}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  }, []);

  const copyLink = useCallback((btn: HTMLButtonElement) => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      btn.classList.add('copied');
      const tooltip = btn.querySelector('.tooltip');
      if (tooltip) tooltip.textContent = 'Copied!';
      setTimeout(() => {
        btn.classList.remove('copied');
        if (tooltip) tooltip.textContent = 'Copy link';
      }, 2000);
    });
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        /* ── Blog-post specific styles ── */

        .blog-hero {
          padding: 140px 48px 60px;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
        }
        .blog-hero .back-link {
          display: inline-block;
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--text-muted);
          text-decoration: none;
          margin-bottom: 28px;
          transition: color 0.25s;
        }
        .blog-hero .back-link:hover { color: var(--gold); }

        .blog-hero .meta-row {
          display: flex;
          gap: 12px;
          margin-bottom: 24px;
          flex-wrap: wrap;
          align-items: center;
        }
        .blog-category-tag {
          font-size: 9px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--gold);
          border: 1px solid rgba(201,185,154,0.35);
          padding: 4px 12px;
          border-radius: 999px;
        }
        .blog-date-tag {
          font-size: 11px;
          letter-spacing: 1px;
          color: var(--text-muted);
        }
        .blog-readtime-tag {
          font-size: 11px;
          color: var(--text-muted);
        }
        .blog-meta-dot {
          width: 3px; height: 3px;
          border-radius: 50%;
          background: rgba(201,185,154,0.3);
        }

        .blog-hero h1 {
          font-family: var(--font-cormorant), 'Cormorant', serif;
          font-size: 52px;
          font-weight: 500;
          color: var(--text-primary);
          line-height: 1.18;
          letter-spacing: 0.5px;
          max-width: 820px;
          margin-bottom: 16px;
        }
        .blog-hero .subtitle {
          font-family: var(--font-cormorant), 'Cormorant', serif;
          font-size: 24px;
          font-style: italic;
          font-weight: 400;
          color: var(--gold);
          max-width: 680px;
          line-height: 1.4;
          margin-bottom: 20px;
        }
        .blog-hero .byline {
          font-size: 13px;
          color: var(--text-muted);
          margin-bottom: 0;
        }
        .blog-hero .byline a {
          color: var(--gold);
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s;
        }
        .blog-hero .byline a:hover { border-bottom-color: var(--gold); }
        .blog-hero .hero-line {
          width: 50px;
          height: 1px;
          background: var(--gold-dim);
          margin-top: 30px;
        }

        /* ── Hero Stat Visual ── */
        .blog-deal-visual {
          margin: 52px 0 0;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 0;
          background: rgba(201,185,154,0.03);
          border: 1px solid rgba(201,185,154,0.15);
          border-radius: 4px;
          overflow: hidden;
        }
        .deal-stat {
          padding: 36px 40px;
          text-align: center;
        }
        .deal-stat-eyebrow {
          font-size: 9px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 10px;
          display: block;
        }
        .deal-stat-value {
          font-family: var(--font-cormorant), 'Cormorant', serif;
          font-size: 48px;
          font-weight: 500;
          line-height: 1;
          margin-bottom: 6px;
        }
        .deal-stat-value.gold { color: var(--gold); }
        .deal-stat-value.dim { color: rgba(201,185,154,0.4); }
        .deal-stat-label {
          font-size: 11px;
          color: var(--text-muted);
          letter-spacing: 1px;
        }
        .deal-stat-divider {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          padding: 0 24px;
        }
        .deal-stat-divider-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, transparent, rgba(201,185,154,0.35), transparent);
        }
        .deal-stat-arrow {
          font-family: var(--font-cormorant), 'Cormorant', serif;
          font-size: 28px;
          color: var(--gold);
        }
        .deal-stat-years {
          font-size: 9px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        /* ── Valuation Gap Visual ── */
        .valuation-gap-visual {
          margin: 48px 0;
          border: 1px solid rgba(201,185,154,0.12);
          border-radius: 4px;
          overflow: hidden;
          background: rgba(255,255,255,0.012);
        }
        .vg-header {
          padding: 20px 28px;
          border-bottom: 1px solid rgba(201,185,154,0.1);
          font-size: 10px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--text-muted);
        }
        .vg-row {
          display: grid;
          grid-template-columns: 200px 1fr 80px;
          align-items: center;
          gap: 20px;
          padding: 18px 28px;
          border-bottom: 1px solid rgba(201,185,154,0.06);
        }
        .vg-row:last-child { border-bottom: none; }
        .vg-label {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.4;
        }
        .vg-bar-wrap {
          height: 8px;
          background: rgba(201,185,154,0.08);
          border-radius: 4px;
          overflow: hidden;
        }
        .vg-bar {
          height: 100%;
          border-radius: 4px;
          transition: width 1s ease;
        }
        .vg-bar.low { background: rgba(201,185,154,0.25); width: 32%; }
        .vg-bar.mid { background: rgba(201,185,154,0.6); width: 75%; }
        .vg-bar.high { background: var(--gold); width: 100%; }
        .vg-multiple {
          font-family: var(--font-cormorant), 'Cormorant', serif;
          font-size: 20px;
          font-weight: 500;
          text-align: right;
        }
        .vg-multiple.low { color: rgba(201,185,154,0.45); }
        .vg-multiple.mid { color: rgba(201,185,154,0.75); }
        .vg-multiple.high { color: var(--gold); }

        /* ── Five Decisions Cards ── */
        .decision-cards {
          display: flex;
          flex-direction: column;
          gap: 2px;
          margin: 32px 0;
        }
        .decision-card {
          display: grid;
          grid-template-columns: 56px 1fr;
          gap: 0;
          border: 1px solid rgba(201,185,154,0.1);
          border-radius: 3px;
          overflow: hidden;
          transition: border-color 0.3s;
        }
        .decision-card:hover { border-color: rgba(201,185,154,0.28); }
        .decision-num {
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(201,185,154,0.05);
          border-right: 1px solid rgba(201,185,154,0.1);
          font-family: var(--font-cormorant), 'Cormorant', serif;
          font-size: 32px;
          font-weight: 300;
          color: rgba(201,185,154,0.35);
          padding: 20px 0;
        }
        .decision-body {
          padding: 20px 24px;
        }
        .decision-title {
          font-family: var(--font-cormorant), 'Cormorant', serif;
          font-size: 18px;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 6px;
        }
        .decision-desc {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.7;
          margin: 0;
        }

        /* ── Window factors ── */
        .window-factors {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 16px;
          margin: 32px 0;
        }
        .window-card {
          border: 1px solid rgba(201,185,154,0.12);
          border-radius: 3px;
          padding: 24px 20px;
          background: rgba(255,255,255,0.012);
        }
        .window-card-num {
          font-family: var(--font-cormorant), 'Cormorant', serif;
          font-size: 40px;
          font-weight: 300;
          color: rgba(201,185,154,0.2);
          line-height: 1;
          margin-bottom: 10px;
        }
        .window-card-title {
          font-size: 12px;
          font-weight: 500;
          color: var(--gold);
          letter-spacing: 1px;
          margin-bottom: 10px;
          text-transform: uppercase;
          font-size: 10px;
          letter-spacing: 3px;
        }
        .window-card-desc {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.7;
          margin: 0;
        }

        /* ── Article body ── */
        .blog-body {
          max-width: 740px;
          margin: 0 auto;
          padding: 0 48px 120px;
          font-family: var(--font-lora), 'Lora', serif;
        }
        .blog-body p {
          font-size: 16px;
          line-height: 1.95;
          color: var(--text-secondary);
          margin-bottom: 24px;
        }
        .blog-body h2 {
          font-family: var(--font-cormorant), 'Cormorant', serif;
          font-size: 34px;
          font-weight: 500;
          color: var(--text-primary);
          letter-spacing: 0.5px;
          line-height: 1.25;
          margin: 64px 0 24px;
        }
        .blog-body h3 {
          font-family: var(--font-cormorant), 'Cormorant', serif;
          font-size: 22px;
          font-weight: 500;
          color: var(--text-primary);
          line-height: 1.3;
          margin: 36px 0 14px;
        }
        .blog-section-sep {
          width: 48px;
          height: 1px;
          background: rgba(201,185,154,0.25);
          margin: 56px 0;
        }
        .blog-pull-quote {
          border-left: 2px solid var(--gold);
          padding: 24px 28px;
          margin: 36px 0;
          background: rgba(201,185,154,0.03);
          border-radius: 0 3px 3px 0;
        }
        .blog-pull-quote p {
          font-family: var(--font-cormorant), 'Cormorant', serif;
          font-size: 20px;
          font-style: italic;
          color: var(--text-primary);
          line-height: 1.6;
          margin: 0;
        }

        /* ── Valuation-ready checklist ── */
        .readiness-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin: 28px 0 36px;
        }
        .readiness-card {
          border: 1px solid rgba(201,185,154,0.12);
          border-radius: 3px;
          padding: 22px 24px;
          background: rgba(255,255,255,0.012);
        }
        .readiness-card-label {
          font-size: 9px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--gold);
          display: block;
          margin-bottom: 14px;
        }
        .readiness-list {
          list-style: none;
          padding: 0; margin: 0;
        }
        .readiness-list li {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.75;
          padding: 7px 0 7px 18px;
          position: relative;
          border-bottom: 1px solid rgba(201,185,154,0.07);
        }
        .readiness-list li:last-child { border-bottom: none; }
        .readiness-list li::before {
          content: '—';
          position: absolute;
          left: 0;
          color: var(--gold);
          font-size: 12px;
        }

        /* ── FAQ ── */
        .blog-faq { margin-top: 72px; }
        .blog-faq-eyebrow {
          font-size: 10px;
          letter-spacing: 5px;
          text-transform: uppercase;
          color: var(--gold);
          display: block;
          margin-bottom: 20px;
        }
        .blog-faq h2 {
          font-family: var(--font-cormorant), 'Cormorant', serif;
          font-size: 34px;
          font-weight: 500;
          color: var(--text-primary);
          margin: 0 0 36px;
        }
        .blog-faq-item {
          border-top: 1px solid rgba(201,185,154,0.12);
          padding: 26px 0;
        }
        .blog-faq-item:last-child { border-bottom: 1px solid rgba(201,185,154,0.12); }
        .blog-faq-q {
          font-family: var(--font-cormorant), 'Cormorant', serif;
          font-size: 20px;
          font-weight: 500;
          color: var(--text-primary);
          line-height: 1.35;
          margin-bottom: 12px;
        }
        .blog-faq-a {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.9;
          margin: 0;
        }

        /* ── CTA ── */
        .blog-cta {
          margin-top: 72px;
          border: 1px solid rgba(201,185,154,0.2);
          border-radius: 4px;
          padding: 48px 52px;
          background: rgba(201,185,154,0.03);
          text-align: center;
        }
        .blog-cta-eyebrow {
          font-size: 10px;
          letter-spacing: 5px;
          text-transform: uppercase;
          color: var(--gold);
          display: block;
          margin-bottom: 18px;
        }
        .blog-cta-title {
          font-family: var(--font-cormorant), 'Cormorant', serif;
          font-size: 32px;
          font-weight: 500;
          color: var(--text-primary);
          line-height: 1.3;
          margin-bottom: 14px;
        }
        .blog-cta-body {
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.85;
          max-width: 500px;
          margin: 0 auto 32px;
        }
        .blog-cta-btn {
          display: inline-block;
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--canvas);
          background: var(--gold);
          padding: 14px 32px;
          border-radius: 2px;
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .blog-cta-btn:hover { opacity: 0.88; }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .blog-hero { padding: 120px 24px 48px; }
          .blog-hero h1 { font-size: 34px; }
          .blog-hero .subtitle { font-size: 18px; }
          .blog-deal-visual { grid-template-columns: 1fr; }
          .deal-stat-divider { flex-direction: row; padding: 16px 0; }
          .deal-stat-divider-line { width: 40px; height: 1px; }
          .deal-stat-arrow { font-size: 20px; }
          .deal-stat { padding: 24px 20px; }
          .deal-stat-value { font-size: 36px; }
          .valuation-gap-visual .vg-row { grid-template-columns: 140px 1fr 60px; }
          .window-factors { grid-template-columns: 1fr; }
          .readiness-grid { grid-template-columns: 1fr; }
          .blog-body { padding: 0 24px 80px; }
          .blog-body h2 { font-size: 26px; margin-top: 48px; }
          .blog-body h3 { font-size: 19px; }
          .blog-cta { padding: 36px 24px; }
          .blog-cta-title { font-size: 26px; }
          .decision-card { grid-template-columns: 44px 1fr; }
          .decision-num { font-size: 24px; }
        }
        @media (max-width: 480px) {
          .blog-hero h1 { font-size: 28px; }
          .blog-body h2 { font-size: 22px; }
          .valuation-gap-visual .vg-row { grid-template-columns: 1fr; gap: 8px; }
          .vg-bar-wrap { display: none; }
        }
      `}} />

      <div className="reading-progress" id="readingProgress" />

      <div className="share-bar" id="shareBar">
        <button className="share-btn" onClick={shareTwitter} aria-label="Share on Twitter">
          <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
          <span className="tooltip">Twitter / X</span>
        </button>
        <button className="share-btn" onClick={shareLinkedIn} aria-label="Share on LinkedIn">
          <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
          <span className="tooltip">LinkedIn</span>
        </button>
        <button className="share-btn" onClick={(e) => copyLink(e.currentTarget)} aria-label="Copy link">
          <svg viewBox="0 0 24 24"><path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>
          <span className="tooltip">Copy link</span>
        </button>
        <button className="share-btn" onClick={shareEmail} aria-label="Share via email">
          <svg viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>
          <span className="tooltip">Email</span>
        </button>
      </div>

      {/* Hero */}
      <div className="blog-hero" id="storyStart">
        <Link href="/blog" className="back-link">← Blog</Link>
        <div className="meta-row">
          <span className="blog-category-tag">Market Intelligence</span>
          <span className="blog-meta-dot" />
          <span className="blog-date-tag">29 June 2025</span>
          <span className="blog-meta-dot" />
          <span className="blog-readtime-tag">12 min read</span>
        </div>
        <h1>How to Value a Founder-Owned Pharma Business in India</h1>
        <div className="subtitle">What the Torrent-JB Chemicals Deal Actually Tells You</div>
        <p className="byline">
          By <a href="/team">Dev Shah</a> &nbsp;·&nbsp; Kautilya PE
        </p>
        <div className="hero-line" />

        {/* Deal Visual */}
        <div className="blog-deal-visual">
          <div className="deal-stat">
            <span className="deal-stat-eyebrow">KKR Entry · 2020</span>
            <div className="deal-stat-value dim">₹3,100 Cr</div>
            <div className="deal-stat-label">Acquisition price</div>
          </div>
          <div className="deal-stat-divider">
            <div className="deal-stat-divider-line" />
            <div className="deal-stat-arrow">→</div>
            <div className="deal-stat-years">5 years</div>
            <div className="deal-stat-divider-line" />
          </div>
          <div className="deal-stat">
            <span className="deal-stat-eyebrow">Torrent Exit · 2025</span>
            <div className="deal-stat-value gold">₹25,689 Cr</div>
            <div className="deal-stat-label">24.8× EBITDA exit</div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="blog-body">

        <p>
          If you run a pharma business in India and have not read the Torrent-JB Chemicals deal
          announcement carefully, you should. Not because it is a pharma story. Because it is the
          clearest public data point we have had in years on what your business is actually worth —
          and what it would be worth if you spent five years preparing it properly before a sale.
        </p>
        <p>
          Torrent Pharmaceuticals paid 24.8× EBITDA for JB Chemicals in June 2025. KKR had bought
          the same business in 2020 for roughly Rs. 3,100 Cr. Five years. Eight times the entry
          price. No new drugs invented. No new markets entered. No company rebuilt from scratch.
        </p>
        <p>
          Most coverage treated this as a pharma consolidation story. It is actually a business
          preparation story — and the gap it reveals between what founder-owned pharma businesses
          sell for today and what they could sell for with the right preparation is the most
          important number in Indian mid-market M&A right now.
        </p>

        <div className="blog-section-sep" />

        <h2>What Pharma Business Valuation in India Actually Looks Like</h2>

        {/* Valuation Gap Visual */}
        <div className="valuation-gap-visual">
          <div className="vg-header">EV/EBITDA Multiple — Indian Mid-Market Pharma</div>
          <div className="vg-row">
            <div className="vg-label">Founder-owned<br /><span style={{ fontSize: 11, opacity: 0.6 }}>Underprepared, diligence risk</span></div>
            <div className="vg-bar-wrap"><div className="vg-bar low" /></div>
            <div className="vg-multiple low">6–8×</div>
          </div>
          <div className="vg-row">
            <div className="vg-label">PE-backed<br /><span style={{ fontSize: 11, opacity: 0.6 }}>Institutional governance</span></div>
            <div className="vg-bar-wrap"><div className="vg-bar mid" /></div>
            <div className="vg-multiple mid">18–24×</div>
          </div>
          <div className="vg-row">
            <div className="vg-label">JB Chemicals · 2025<br /><span style={{ fontSize: 11, opacity: 0.6 }}>Fully prepared, zero surprises</span></div>
            <div className="vg-bar-wrap"><div className="vg-bar high" /></div>
            <div className="vg-multiple high">24.8×</div>
          </div>
        </div>

        <p>
          The current market prices founder-owned pharma businesses in the Rs. 50 to 500 Cr revenue
          range at 6 to 8× EBITDA. PE-backed assets with institutional governance, professional
          management, and documented operations trade at 18 to 24×. That is not a sector difference.
          Both pools sit in the same therapeutic categories, the same geographies, the same regulatory
          environment.
        </p>
        <p>
          The difference is diligence-readiness. What a buyer finds when they open the data room
          determines where in that range your business prices. A promoter-owned business where the
          P&L carries personal expenses, where customer concentration is undocumented, where the MD
          is the only relationship the company has with its top three distributors: that business
          prices at the bottom of the range, if it closes at all.
        </p>

        <div className="blog-pull-quote">
          <p>
            JB Chemicals under the Mody family: Rs. 2,800 Cr revenue, EBITDA margins of 15–18%.
            Under KKR: 18% revenue CAGR, margins of 27–29%, Rs. 7–7.5 billion in annual free cash
            flow. Same assets. Different preparation. Three times the multiple.
          </p>
        </div>

        <div className="blog-section-sep" />

        <h2>Five Decisions That Created Rs. 22,000 Crore of Exit Value</h2>
        <p>
          KKR did not run a complicated playbook. They made five decisions over five years — each
          replicable at a fraction of the scale by any founder thinking about exit in the next five
          to seven years.
        </p>

        <div className="decision-cards">
          <div className="decision-card">
            <div className="decision-num">1</div>
            <div className="decision-body">
              <div className="decision-title">Separate ownership from management on day one</div>
              <p className="decision-desc">KKR appointed Nikhil Chopra as CEO within weeks — a 24-year Cipla veteran. The Mody family exited operations immediately and cleanly. An acquirer will not pay 20× for a business that stops working when the promoter steps back.</p>
            </div>
          </div>
          <div className="decision-card">
            <div className="decision-num">2</div>
            <div className="decision-body">
              <div className="decision-title">Run a consistent bolt-on acquisition strategy</div>
              <p className="decision-desc">Five bolt-on acquisitions in four years, each receiving the same operating playbook. Sporlac grew 34% post-acquisition. Razel grew 33%. JB Chemicals moved from 28th to 21st in the Indian pharma market. Platforms command platform multiples.</p>
            </div>
          </div>
          <div className="decision-card">
            <div className="decision-num">3</div>
            <div className="decision-body">
              <div className="decision-title">Fund the capability the promoter had been ignoring</div>
              <p className="decision-desc">The CDMO arm — medicated lozenges with global potential — was 11% of revenue when KKR arrived, starved of capital. By FY25 it generated Rs. 446 Cr annually with global leadership in the USD 4.6 billion segment. Every founder-owned pharma business has a version of this.</p>
            </div>
          </div>
          <div className="decision-card">
            <div className="decision-num">4</div>
            <div className="decision-body">
              <div className="decision-title">Improve the economics without changing the business</div>
              <p className="decision-desc">EBITDA margins nearly doubled — from 15–18% to a guided 27–29% — through supply chain optimisation and product mix discipline, not price increases. The business funded four acquisitions and stayed nearly debt-free.</p>
            </div>
          </div>
          <div className="decision-card">
            <div className="decision-num">5</div>
            <div className="decision-body">
              <div className="decision-title">Build governance so any buyer can understand the business quickly</div>
              <p className="decision-desc">An institutional board, credentialed independent directors, and an audit trail rebuilt to diligence standards. When Torrent arrived at the data room, there were no structural surprises. In Indian mid-market pharma, that is rarer than it sounds.</p>
            </div>
          </div>
        </div>

        <div className="blog-section-sep" />

        <h2>Why the Next 24 Months Are an Unusual Window for Indian Pharma Sellers</h2>

        <div className="window-factors">
          <div className="window-card">
            <div className="window-card-num">01</div>
            <div className="window-card-title">Schedule M Pressure Is Live</div>
            <p className="window-card-desc">Revised Schedule M became binding on January 1, 2026. Tier 3 manufacturers who cannot fund the upgrades are approaching advisors now — not distressed, but unable to wait out another market cycle.</p>
          </div>
          <div className="window-card">
            <div className="window-card-num">02</div>
            <div className="window-card-title">PE Capital Is Deployed</div>
            <p className="window-card-desc">ChrysCapital&apos;s Rs. 1,300 Cr acquisition of 71% of Novartis India in Q1 2026 confirmed institutional buyers are not on the sidelines. The Torrent-JB deal sets the ceiling multiple.</p>
          </div>
          <div className="window-card">
            <div className="window-card-num">03</div>
            <div className="window-card-title">Succession Pressure Is Real</div>
            <p className="window-card-desc">Second-generation families across the Rs. 50–300 Cr pharma segment are facing a question the first generation never had to answer: does this business need to stay in the family?</p>
          </div>
        </div>

        <div className="blog-section-sep" />

        <h2>What a Valuation-Ready Pharma Business Looks Like Before a Sale</h2>
        <p>
          The preparation that separates a 6× exit from an 18× exit is not capital-intensive.
          Most of it is decisions, not investment.
        </p>

        <div className="readiness-grid">
          <div className="readiness-card">
            <span className="readiness-card-label">Governance</span>
            <ul className="readiness-list">
              <li>At least one credentialed independent director before any formal process</li>
              <li>Clean separation of company vs. promoter personal expenses in the P&L</li>
              <li>All key customer and distributor relationships documented and transferable</li>
              <li>Regulatory compliance current and auditable: GMP, Schedule M, GST/ITR/EPF/ESI</li>
            </ul>
          </div>
          <div className="readiness-card">
            <span className="readiness-card-label">Management</span>
            <ul className="readiness-list">
              <li>A second layer that can run the business without the promoter for 90 days</li>
              <li>Key person dependency documented and mitigated where possible</li>
              <li>Succession plan for any role where departure would affect revenue</li>
            </ul>
          </div>
          <div className="readiness-card">
            <span className="readiness-card-label">Financial Documentation</span>
            <ul className="readiness-list">
              <li>Three years of audited financials with no unexplained adjustments</li>
              <li>EBITDA reconciliation a buyer&apos;s CFO can verify without the promoter</li>
              <li>Customer concentration quantified: top five customers, contract terms, renewal history</li>
            </ul>
          </div>
          <div className="readiness-card">
            <span className="readiness-card-label">Strategic Narrative</span>
            <ul className="readiness-list">
              <li>One identified dormant capability with a documented investment thesis</li>
              <li>Clear answer to: why would a strategic buyer pay more than a financial buyer?</li>
            </ul>
          </div>
        </div>

        <p>
          None of this requires hiring an investment bank today. It requires 12 to 24 months of
          deliberate preparation. The promoters who do that work now will price at the top of the
          range the Torrent-JB deal has just established. Those who do not will price at the floor —
          or not at all.
        </p>

        <div className="blog-section-sep" />

        <h2>The Risks This Deal Creates</h2>
        <p>
          The Torrent-JB deal will cause some buyers to overpay for pharma assets on the assumption
          that every founder-owned business contains hidden upside of the same type. It does not.
          The CDMO vertical at JB Chemicals was genuinely underinvested — a specific set of
          conditions that does not exist in every mid-market acquisition.
        </p>
        <p>
          For sellers, the risk is timing. The Schedule M compliance window and the current PE
          deployment cycle are creating motivated but non-distressed seller conditions. Those
          conditions will not persist indefinitely. A founder who treats this as a signal to begin
          preparation is thinking correctly. One who waits until distress forces the decision will
          find the window has closed.
        </p>

        {/* FAQ */}
        <div className="blog-faq">
          <span className="blog-faq-eyebrow">Frequently Asked Questions</span>
          <h2>Pharma Business Valuation in India</h2>

          <div className="blog-faq-item">
            <div className="blog-faq-q">What EBITDA multiple do pharma businesses sell for in India?</div>
            <p className="blog-faq-a">Founder-owned businesses in the Rs. 50–500 Cr range typically sell at 6–8× EBITDA. PE-backed assets with institutional governance trade at 18–24×. The Torrent-JB Chemicals deal at 24.8× is the current ceiling for institutionally prepared assets in Indian mid-market pharma.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">How long does it take to prepare a pharma business for sale in India?</div>
            <p className="blog-faq-a">Meaningful preparation typically requires 18–36 months. Priority items: professional management layer, clean P&L, documented customer relationships, resolved governance gaps, and funding any dormant capability. Businesses that begin 24 months before an intended sale will have significantly more options at exit.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">What did KKR do to increase JB Chemicals&apos; value before selling to Torrent?</div>
            <p className="blog-faq-a">Five moves over five years: appointed a professional CEO, ran a consistent bolt-on strategy across five targets, funded a dormant CDMO capability in medicated lozenges that grew to Rs. 446 Cr, improved EBITDA margins from 15–18% to 27–29%, and rebuilt governance to institutional diligence standards. The combined effect was a Rs. 22,000 Cr increase in exit value.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">What is the difference between a motivated and a distressed seller in Indian pharma M&A?</div>
            <p className="blog-faq-a">A motivated seller approaches the market by choice, with time and options. A distressed seller approaches because an external pressure — a compliance deadline, a succession crisis — has removed optionality. Motivated sellers price at the top of the range. Distressed sellers price at the bottom. The Schedule M window is creating motivated sellers; founders who wait risk crossing into distressed territory.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">Do I need an investment bank to sell a pharma business in India?</div>
            <p className="blog-faq-a">For businesses in the Rs. 50–300 Cr range, a boutique M&A advisory firm with Indian mid-market pharma experience will typically be more effective than a large investment bank, which focuses on transactions above Rs. 500 Cr. The advisor&apos;s most important work happens in the 18–24 months before any sale process — not during it.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="blog-cta">
          <span className="blog-cta-eyebrow">Talk to Kautilya</span>
          <div className="blog-cta-title">Thinking about an exit in the next two to five years?</div>
          <p className="blog-cta-body">
            Kautilya sources and advises on off-market, founder-led business acquisitions across India.
            If you are a promoter in pharma or an adjacent sector, the right time to talk is before
            you engage a bank.
          </p>
          <Link href="/engage" className="blog-cta-btn">Begin the Conversation</Link>
        </div>
      </div>
    </>
  );
}
