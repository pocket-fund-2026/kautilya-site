'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import { useReadingProgressAndShareBar } from '@/components/useReadingProgressAndShareBar';

export default function NewsletterPharmaValuation() {
  useReadingProgressAndShareBar();

  const shareTwitter = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('KKR turned ₹3,100 Cr into ₹25,689 Cr in 5 years. What the Torrent-JB Chemicals deal tells you about your pharma business\'s true value, via @microsearchfund');
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
      {/* Only styles not covered by globals.css */}
      <style dangerouslySetInnerHTML={{ __html: `
        .blog-author-byline {
          font-family: var(--font-lora), 'Lora', serif;
          font-size: 13px;
          color: var(--text-muted);
          margin-top: 14px;
          margin-bottom: 0;
        }
        .blog-author-byline a {
          color: var(--gold);
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s;
        }
        .blog-author-byline a:hover { border-bottom-color: var(--gold); }

        /* valuation multiple comparison */
        .valuation-gap {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: 3px;
          overflow: hidden;
          margin: 40px 0;
        }
        .vg-cell {
          padding: 32px 20px;
          background: var(--canvas);
          text-align: center;
        }
        .vg-cell.highlight { background: rgba(201,185,154,0.04); }
        .vg-multiple {
          font-family: var(--font-cormorant), 'Cormorant', serif;
          font-size: 42px;
          font-weight: 500;
          line-height: 1;
          color: rgba(201,185,154,0.3);
          margin-bottom: 10px;
        }
        .vg-cell.highlight .vg-multiple { color: var(--gold); }
        .vg-desc {
          font-family: var(--font-lora), 'Lora', serif;
          font-size: 11px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--text-muted);
          line-height: 1.6;
        }
        .vg-cell.highlight .vg-desc { color: var(--text-secondary); }

        /* 3-col grid reusing deal-card */
        .window-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin: 28px 0 8px;
        }
        .window-eyebrow {
          font-size: 10px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--gold);
          display: block;
          margin-bottom: 10px;
        }
        .window-card-desc {
          font-family: var(--font-lora), 'Lora', serif;
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.75;
          margin: 0;
        }

        /* FAQ */
        .blog-faq {
          margin-top: 64px;
          padding-top: 48px;
          border-top: 1px solid var(--border);
        }
        .blog-faq-item {
          border-bottom: 1px solid var(--border);
          padding: 22px 0;
        }
        .blog-faq-q {
          font-family: var(--font-cormorant), 'Cormorant', serif;
          font-size: 20px;
          font-weight: 500;
          color: var(--text-primary);
          line-height: 1.35;
          margin-bottom: 10px;
        }
        .blog-faq-a {
          font-family: var(--font-lora), 'Lora', serif;
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.9;
          margin: 0;
        }

        /* CTA button inside story-coda */
        .story-coda .coda-link {
          display: inline-block;
          margin-top: 24px;
          font-size: 10px;
          letter-spacing: 5px;
          text-transform: uppercase;
          color: var(--canvas);
          background: var(--gold);
          padding: 13px 30px;
          border-radius: 2px;
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .story-coda .coda-link:hover { opacity: 0.88; }

        /* h3 inside story-body (globals only defines h2) */
        .story-body h3 {
          font-family: var(--font-cormorant), 'Cormorant', serif;
          font-size: 22px;
          font-weight: 500;
          color: var(--text-primary);
          letter-spacing: 0.5px;
          margin: 40px 0 14px;
          line-height: 1.3;
        }

        @media (max-width: 768px) {
          .valuation-gap { grid-template-columns: 1fr; }
          .vg-multiple { font-size: 34px; }
          .window-grid { grid-template-columns: 1fr; }
          .story-body h3 { font-size: 19px; }
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

      {/* ── Hero: uses existing .story-hero, .meta-tag, .metrics-strip ── */}
      <div className="story-hero" id="storyStart">
        <Link href="/newsletter" className="back-link">← Kautilya Newsletter</Link>
        <div className="meta-row">
          <span className="meta-tag">Market Intelligence</span>
          <span className="meta-tag">India</span>
          <span className="meta-tag">12 min read</span>
        </div>
        <h1>How to Value a Founder-Owned Pharma Business in India</h1>
        <div className="subtitle">
          What the Torrent-JB Chemicals Deal Actually Tells You
        </div>
        <p className="blog-author-byline">By <a href="/team">Dev Shah</a>&nbsp;&nbsp;·&nbsp;&nbsp;29 June 2025</p>
        <div className="hero-line" />

        <div className="metrics-strip">
          <div className="metric">
            <div className="metric-value">₹3,100 Cr</div>
            <div className="metric-label">KKR entry · 2020</div>
          </div>
          <div className="metric">
            <div className="metric-value">8×</div>
            <div className="metric-label">Return in 5 years</div>
          </div>
          <div className="metric">
            <div className="metric-value">₹25,689 Cr</div>
            <div className="metric-label">Torrent exit · 2025</div>
          </div>
        </div>
      </div>

      {/* ── Body: uses .story-body, .pull-quote, .phase-timeline, .constraint-list, .story-coda ── */}
      <article className="story-body">
        <p>
          If you run a pharma business in India and have not read the Torrent-JB Chemicals deal
          announcement carefully, you should. Not because it is a pharma story. Because it is the
          clearest public data point we have had in years on what your business is actually
          worth — and what it would be worth if you spent five years preparing it properly before a sale.
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

        <h2>What Pharma Business Valuation in India Actually Looks Like</h2>

        <div className="valuation-gap">
          <div className="vg-cell">
            <div className="vg-multiple">6–8×</div>
            <div className="vg-desc">Founder-owned<br />underprepared</div>
          </div>
          <div className="vg-cell">
            <div className="vg-multiple">18–24×</div>
            <div className="vg-desc">PE-backed<br />institutional</div>
          </div>
          <div className="vg-cell highlight">
            <div className="vg-multiple">24.8×</div>
            <div className="vg-desc">JB Chemicals<br />2025</div>
          </div>
        </div>

        <p>
          The current market prices founder-owned pharma businesses in the Rs. 50 to 500 Cr
          revenue range at 6 to 8× EBITDA. PE-backed assets with institutional governance and
          professional management trade at 18 to 24×. That is not a sector difference. Both pools
          sit in the same therapeutic categories, the same geographies, the same regulatory environment.
        </p>
        <p>
          The difference is diligence-readiness. What a buyer finds when they open the data room
          determines where in that range your business prices. A promoter-owned business where the
          P&L carries personal expenses, where customer concentration is undocumented, where the MD
          is the only relationship the company has with its top three distributors: that business
          prices at the bottom of the range, if it closes at all.
        </p>

        <div className="pull-quote">
          <p>
            JB Chemicals under the Mody family: Rs. 2,800 Cr revenue, EBITDA margins of 15–18%.
            Under KKR: 18% revenue CAGR, margins of 27–29%, Rs. 7–7.5 billion in annual free cash
            flow. Same assets. Different preparation. Three times the multiple.
          </p>
        </div>

        <h2>Five Decisions That Created Rs. 22,000 Crore of Exit Value</h2>
        <p>
          KKR did not run a complicated playbook. They made five decisions over five years — each
          replicable at a fraction of the scale by any founder thinking about exit in the next
          five to seven years.
        </p>

        <div className="phase-timeline">
          <div className="phase-block">
            <div className="phase-label">Decision 01</div>
            <p><strong>Separate ownership from management on day one.</strong> KKR appointed
            Nikhil Chopra as CEO within weeks — a 24-year Cipla veteran. The Mody family exited
            operations immediately and cleanly. An acquirer will not pay 20× for a business that
            stops working when the promoter steps back.</p>
          </div>
          <div className="phase-block">
            <div className="phase-label">Decision 02</div>
            <p><strong>Run a consistent bolt-on acquisition strategy.</strong> Five bolt-on
            acquisitions in four years, each receiving the same operating playbook. Sporlac grew
            34% post-acquisition. Razel grew 33%. JB Chemicals moved from 28th to 21st in the
            Indian pharma market. Platforms command platform multiples.</p>
          </div>
          <div className="phase-block">
            <div className="phase-label">Decision 03</div>
            <p><strong>Fund the capability the promoter had been ignoring.</strong> The CDMO arm —
            medicated lozenges with global potential — was 11% of revenue when KKR arrived, starved
            of capital. By FY25 it generated Rs. 446 Cr annually with global leadership in a USD
            4.6 billion segment. Every founder-owned pharma business has a version of this.</p>
          </div>
          <div className="phase-block">
            <div className="phase-label">Decision 04</div>
            <p><strong>Improve the economics without changing the business.</strong> EBITDA margins
            nearly doubled — from 15–18% to a guided 27–29% — through supply chain optimisation
            and product mix discipline, not price increases. The business funded four acquisitions
            and stayed nearly debt-free.</p>
          </div>
          <div className="phase-block">
            <div className="phase-label">Decision 05</div>
            <p><strong>Build governance so any buyer can understand the business quickly.</strong> An
            institutional board, credentialed independent directors, and an audit trail rebuilt to
            diligence standards. When Torrent arrived at the data room, there were no structural
            surprises. In Indian mid-market pharma, that is rarer than it sounds.</p>
          </div>
        </div>

        <h2>Why the Next 24 Months Are an Unusual Window</h2>

        <div className="window-grid">
          <div className="deal-card">
            <span className="window-eyebrow">Schedule M</span>
            <p className="window-card-desc">Revised Schedule M became binding on January 1, 2026. Tier 3
            manufacturers who cannot fund the upgrades are approaching advisors now — not
            distressed, but unable to wait out another market cycle.</p>
          </div>
          <div className="deal-card">
            <span className="window-eyebrow">PE Capital</span>
            <p className="window-card-desc">ChrysCapital&apos;s Rs. 1,300 Cr acquisition of 71% of
            Novartis India in Q1 2026 confirmed institutional buyers are not on the sidelines.
            The Torrent-JB deal sets the ceiling multiple.</p>
          </div>
          <div className="deal-card">
            <span className="window-eyebrow">Succession</span>
            <p className="window-card-desc">Second-generation families across the Rs. 50–300 Cr pharma
            segment are facing a question the first generation never had to answer: does this
            business need to stay in the family?</p>
          </div>
        </div>

        <h2>What a Valuation-Ready Pharma Business Looks Like</h2>
        <p>
          The preparation that separates a 6× exit from an 18× exit is not capital-intensive.
          Most of it is decisions, not investment.
        </p>

        <h3>Governance &amp; Documentation</h3>
        <ul className="constraint-list">
          <li>At least one credentialed independent director before any formal process</li>
          <li>Clean separation of company vs. promoter personal expenses in the P&amp;L</li>
          <li>All key customer and distributor relationships documented and transferable</li>
          <li>Regulatory compliance current and auditable: GMP, Schedule M, GST/ITR/EPF/ESI</li>
          <li>Three years of audited financials with no unexplained adjustments</li>
          <li>EBITDA reconciliation a buyer&apos;s CFO can verify without the promoter</li>
        </ul>

        <h3>Management &amp; Strategy</h3>
        <ul className="constraint-list">
          <li>A second layer that can run the business without the promoter for 90 days</li>
          <li>Customer concentration quantified: top five customers, contract terms, renewal history</li>
          <li>One identified dormant capability with a documented investment thesis</li>
          <li>Clear answer to: why would a strategic buyer pay more than a financial buyer?</li>
        </ul>

        <p>
          None of this requires hiring an investment bank today. It requires 12 to 24 months of
          deliberate preparation. The promoters who do that work now will price at the top of the
          range the Torrent-JB deal has just established. Those who do not will price at the floor —
          or not at all.
        </p>

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
          <div className="phase-label" style={{ marginBottom: 20 }}>Common Questions</div>

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
            <p className="blog-faq-a">Five moves over five years: appointed a professional CEO, ran a consistent bolt-on strategy across five targets, funded a dormant CDMO capability that grew to Rs. 446 Cr, improved EBITDA margins from 15–18% to 27–29%, and rebuilt governance to institutional diligence standards.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">What is the difference between a motivated and a distressed seller in Indian pharma M&A?</div>
            <p className="blog-faq-a">A motivated seller approaches the market by choice, with time and options. A distressed seller approaches because an external pressure — a compliance deadline, a succession crisis — has removed optionality. Motivated sellers price at the top of the range; distressed sellers price at the bottom.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">Do I need an investment bank to sell a pharma business in India?</div>
            <p className="blog-faq-a">For businesses in the Rs. 50–300 Cr range, a boutique M&A advisory firm with Indian mid-market pharma experience will typically be more effective than a large investment bank. The advisor&apos;s most important work happens in the 18–24 months before any sale process — not during it.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="story-coda">
          <p className="coda-text">
            Thinking about an exit in the next two to five years?
            The right time to talk is before you engage a bank.
          </p>
          <Link href="/engage" className="coda-link">Begin the Conversation</Link>
        </div>

      </article>
    </>
  );
}
