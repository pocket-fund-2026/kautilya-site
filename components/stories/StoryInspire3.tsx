"use client";
import { useCallback } from 'react';
import { useReadingProgressAndShareBar } from '@/components/useReadingProgressAndShareBar';
import Link from 'next/link';

export default function StoryInspire3() {
  useReadingProgressAndShareBar();

  const shareTwitter = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Inspire3: Full-Scope DD on a $1.8M Digital Wellness Portfolio , via @kautilya');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  }, []);

  const shareLinkedIn = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  }, []);

  const shareEmail = useCallback(() => {
    const subject = encodeURIComponent('Inspire3: Full-Scope DD on a $1.8M Digital Wellness Portfolio');
    const body = encodeURIComponent(`Check out this case study: ${window.location.href}`);
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
      <div className="reading-progress" id="readingProgress" />

      <div className="share-bar" id="shareBar">
        <button className="share-btn" onClick={shareTwitter} aria-label="Share on Twitter">
          <svg viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <span className="tooltip">Twitter / X</span>
        </button>
        <button className="share-btn" onClick={shareLinkedIn} aria-label="Share on LinkedIn">
          <svg viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          <span className="tooltip">LinkedIn</span>
        </button>
        <button className="share-btn" onClick={(e) => copyLink(e.currentTarget)} aria-label="Copy link">
          <svg viewBox="0 0 24 24">
            <path
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="tooltip">Copy link</span>
        </button>
        <button className="share-btn" onClick={shareEmail} aria-label="Share via email">
          <svg viewBox="0 0 24 24">
            <path
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="tooltip">Email</span>
        </button>
      </div>

      <div className="story-hero" id="storyStart">
        <Link href="/portfolio" className="back-link">&larr; Portfolio</Link>
        <div className="meta-row">
          <span className="meta-tag sector">Digital Wellness</span>
          <span className="meta-tag geo">United Kingdom</span>
          <span className="meta-tag stage">Buy-Side Due Diligence</span>
        </div>
        <h1>Inspire3: Full-Scope DD on a $1.8M Digital Wellness Portfolio</h1>
        <div className="subtitle">
          How Kautilya audited 30,134 transactions across 19 websites in under 15 days &mdash; and surfaced seven discrepancies the seller had never identified.
        </div>
        <div className="hero-line" />
      </div>

      <article className="story-body" id="storyBody">
        <p>
          Inspire3 Ltd is a UK-based digital wellness business operating 19 commercial websites across
          self-improvement, hypnosis, subliminal audio, and manifestation verticals. The portfolio generates
          $1.4M in FY2025 revenue with five core products: Limitless Labs, Hypnosis Bootcamp, Rapid Hypnosis,
          Dark Psychology, and Reprogram.ME.
        </p>
        <p>
          The buyer engaged Kautilya to execute comprehensive buy-side due diligence on a $1.8M acquisition.
          The scope: validate every material financial claim, deconstruct the affiliate economics, reconcile
          multi-year financials, and deliver a forward projection model &mdash; all within a 15-day turnaround.
        </p>

        <div className="pull-quote">
          <p>
            The version you are shown is rarely complete. What the summary sheets present and what
            the transaction-level data reveals are often two different stories.
          </p>
        </div>

        <h2>Scope of Work</h2>
        <ul className="constraint-list">
          <li>Transaction-Level Sales Audit</li>
          <li>Affiliate Economics Deconstruction</li>
          <li>Multi-Year Financial Reconciliation</li>
          <li>Financial Modelling &amp; Projections</li>
          <li>Product &amp; Operational DD</li>
        </ul>

        <h2>Execution Timeline</h2>
        <div className="phase-timeline">
          <div className="phase-block">
            <div className="phase-label">Jan 27 &middot; Kickoff &amp; Data Access</div>
            <p>
              Secured access to the seller&rsquo;s transaction databases, payment processors, and accounting
              systems. Defined the audit scope and established a structured data room.
            </p>
          </div>
          <div className="phase-block">
            <div className="phase-label">Jan 29&ndash;31 &middot; Transaction Audit</div>
            <p>
              30,134 individual transactions validated across all 19 websites. Every sale, refund, and
              chargeback cross-referenced against processor records. 99.83% monetary match rate achieved.
            </p>
          </div>
          <div className="phase-block">
            <div className="phase-label">Feb 2 &middot; Affiliate Deconstruction</div>
            <p>
              Deconstructed the affiliate payment structure. What appeared as $3.1M in affiliate payables
              was revealed to be internal promotional tracking &mdash; not actual commission obligations.
            </p>
          </div>
          <div className="phase-block">
            <div className="phase-label">Feb 5&ndash;10 &middot; Financial Reconciliation</div>
            <p>
              Multi-year reconciliation across PayPal, Xero, and internal records. Surfaced a $57K gap
              on approximately $1.1M in revenue that the seller had never reconciled internally.
            </p>
          </div>
          <div className="phase-block">
            <div className="phase-label">Feb 10 &middot; DD Delivered</div>
            <p>
              Full diligence package delivered: transaction validation report, 3-year financial model,
              forward projections across base/best/worst scenarios, and product DD across all five verticals.
            </p>
          </div>
        </div>

        <h2>Diligence Findings</h2>

        <h2>Where Did $3.1M in Affiliate Payables Go?</h2>
        <p>
          What appeared as a $3.1M liability was deconstructed into internal promotional tracking. Without
          this challenge, a buyer relying on the database at face value would have grossly overstated the
          business&rsquo;s commission obligations &mdash; potentially distorting the entire valuation.
        </p>

        <h2>$1,859 in Revenue Was Quietly Leaking to a Former Partner</h2>
        <p>
          Vaulted payment credentials from a dissolved partnership were routing revenue to a former
          partner&rsquo;s accounts. Even at $1,800, this was a systemic leak the seller had not identified
          until Kautilya&rsquo;s audit forced a technical review. Routes were invalidated as a direct result.
        </p>

        <h2>Two Years of Unverifiable Financials</h2>
        <p>
          The Cosmic Media partnership created a two-year window (2022&ndash;2024) where the accounting trail
          is structurally limited. Formally documented as a diligence limitation &mdash; 2025 is the only
          &ldquo;clean&rdquo; baseline year. Any valuation anchored to 2023&ndash;2024 must account for
          this opacity.
        </p>

        <h2>Two Processing Fees or One?</h2>
        <p>
          What looked like two separate vendor costs was actually a single payment processing stack split
          by categorisation. Kautilya&rsquo;s processor-level deconstruction prevented double-counting that
          would have distorted margins by approximately $50K.
        </p>

        <h2>The Database Said $0 Commission. The Data Said Otherwise.</h2>
        <p>
          The seller&rsquo;s own database contained a systematic error in how managed affiliate commissions
          were flagged. Without cross-referencing stated methodology against actual data, this error would
          have propagated through any model built on the dataset.
        </p>

        <h2>The $57K Gap Nobody Had Reconciled</h2>
        <p>
          A $57K discrepancy on approximately $1.1M revenue is a 5%+ gap directly affecting profitability
          calculations. The seller confirmed it had not been internally reconciled &mdash; it required
          Kautilya&rsquo;s independent cross-referencing to surface. Escalated for resolution before DD close.
        </p>

        <div className="metrics-strip">
          <div className="metric">
            <div className="metric-value">30,134</div>
            <div className="metric-label">Transactions Validated</div>
          </div>
          <div className="metric">
            <div className="metric-value">$1.4M</div>
            <div className="metric-label">Revenue Audited</div>
          </div>
          <div className="metric">
            <div className="metric-value">7+</div>
            <div className="metric-label">Discrepancies Surfaced</div>
          </div>
          <div className="metric">
            <div className="metric-value">&lt;15 Days</div>
            <div className="metric-label">Turnaround</div>
          </div>
        </div>

        <h2>Deliverables</h2>
        <ul className="constraint-list">
          <li>Transaction Validation Report</li>
          <li>3-Year Financial Model</li>
          <li>Forward Projections (Base / Best / Worst)</li>
          <li>Interactive HTML Dashboard</li>
          <li>Product DD Report (5 Products)</li>
          <li>Email List Health Check</li>
          <li>Affiliate Economics Analysis</li>
        </ul>

        <h2>Why This Engagement Matters</h2>
        <p>
          Most buy-side diligence on digital assets is cursory. A spreadsheet review, a few questions to
          the seller, and a valuation model built on unverified inputs. The result: buyers close on
          businesses they do not actually understand.
        </p>
        <p>
          Kautilya&rsquo;s approach is different. Source-level reconstruction surfaces what summary sheets
          never show. Every transaction validated. Every affiliate payment deconstructed. Every financial
          discrepancy documented and escalated. The 99.83% monetary match rate is not a marketing number
          &mdash; it is the standard.
        </p>

        <div className="story-coda">
          <div className="coda-text">
            The version you are shown is rarely the version that exists. Diligence is the process of finding the difference.
          </div>
        </div>
      </article>
    </>
  );
}
