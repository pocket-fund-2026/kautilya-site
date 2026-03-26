"use client";
import { useCallback } from 'react';
import { useReadingProgressAndShareBar } from '@/components/useReadingProgressAndShareBar';
import Link from 'next/link';

export default function StoryRunify() {
  useReadingProgressAndShareBar();

  const shareTwitter = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('$110K Acquisition, $30K Down: Structuring Around Uncertainty , via @kautilya');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  }, []);

  const shareLinkedIn = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  }, []);

  const shareEmail = useCallback(() => {
    const subject = encodeURIComponent('$110K Acquisition, $30K Down: Structuring Around Uncertainty');
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
      {/* READING PROGRESS */}
      <div className="reading-progress" id="readingProgress" />

      {/* SHARE BAR */}
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

      {/* STORY HERO */}
      <div className="story-hero" id="storyStart">
        <Link href="/portfolio" className="back-link">← Portfolio</Link>
        <div className="meta-row">
          <span className="meta-tag sector">Consumer Mobile · Health &amp; Fitness</span>
          <span className="meta-tag geo">Global · iOS</span>
          <span className="meta-tag stage">Single-Asset Acquisition</span>
        </div>
        <h1>$110K Acquisition, $30K Down: Structuring Around Uncertainty</h1>
        <div className="subtitle">
          How Kautilya sourced, diligenced, and closed a 3-month-old fitness app in 45 days using earn-out mechanics
          to price what hadn't been proven yet.
        </div>
        <div className="hero-line" />
      </div>

      {/* STORY BODY */}
      <article className="story-body" id="storyBody">
        <p>
          The client was the same operator from Kautilya's earlier mobile gaming acquisition. A 20-year software
          veteran who had recently exited a founder-led business to private equity and was now building a concentrated
          portfolio of consumer mobile applications across health, fitness, and lifestyle. The thesis was centred on
          habit formation and long-term retention, not engagement spikes or arbitrage-driven growth.
        </p>
        <p>
          By this point in the engagement, Kautilya had already established the sourcing infrastructure, closed one
          transaction, and was running a steady cadence of deal delivery. The question wasn't whether to acquire again.
          It was whether to acquire something this young.
        </p>
        <p>
          The target was a gamified running app. Native iOS. Subscription-based. Built around progression, competition,
          and consistency rather than passive activity tracking. It had a dual-layer ranking system inspired by gaming,
          with global XP-based progression and distance-specific performance rankings. The technical architecture was
          clean: native Swift and SwiftUI on MVVM, modular backend, multi-source run data ingestion via native GPS,
          HealthKit, and Garmin integrations.
        </p>
        <p>
          The problem: it was three months old. Roughly $2,000 in MRR. Hundreds of daily active users driven primarily
          through organic social. Early retention was volatile but directionally competitive for the stage and category.
          The UX was polished. Privacy-first design was embedded at the product level. Infrastructure was assessed as
          scalable.
        </p>
        <div className="pull-quote">
          <p>
            How do you price something where the most important signal, whether users actually stick around, hasn't
            had time to emerge?
          </p>
        </div>

        <h2>Sourcing: Signal Over Noise</h2>
        <p>
          The sourcing approach mirrored what Kautilya had refined across the broader engagement. Email outreach was
          tested early and deprioritised quickly, generating sub-5% response rates and low-context,
          valuation-anchored conversations. The pivot to founder-dense platforms on Twitter and Reddit produced
          dramatically better results.
        </p>

        <div className="metrics-strip">
          <div className="metric">
            <div className="metric-value">500</div>
            <div className="metric-label">Outbound Messages</div>
          </div>
          <div className="metric">
            <div className="metric-value">130</div>
            <div className="metric-label">Conversations</div>
          </div>
          <div className="metric">
            <div className="metric-value">35–40%</div>
            <div className="metric-label">Response Rate (Wk 3–4)</div>
          </div>
          <div className="metric">
            <div className="metric-value">45 days</div>
            <div className="metric-label">Sourcing to Close</div>
          </div>
        </div>

        <p>
          The target was identified through Twitter sourcing, screened against the client's mandate, and moved to an
          introductory call between buyer and seller. The total funnel across the engagement period: roughly 500
          outbound messages, approximately 130 conversations, 20 mandate-aligned deals presented, 3 LOIs submitted,
          and 2 transactions closed.
        </p>

        <h2>Diligence: Separating Real Cash From Dashboard Revenue</h2>
        <p>
          This is where the engagement got interesting.
        </p>
        <p>
          An initial revenue signal of approximately $3,000 "MRR" was referenced early in diligence, implicitly
          assumed to be USD-denominated, realised, and monthly recurring. Kautilya dug in and found something
          different.
        </p>
        <ul className="constraint-list">
          <li>Revenue was AUD-denominated, not USD, an immediate ~30% haircut</li>
          <li>A material portion was trial-heavy, with users counted before cash had been collected</li>
          <li>Annual price anchoring distorted MRR optics</li>
          <li>Conversion depended on trial completion, paywall experimentation, and App Store billing timing</li>
        </ul>
        <p>
          Verified operating data told a more sober story: $1,663 USD over the last 28 days (with trials still
          pending), $2,218 USD since launch, and $512 USD in the most recent 7-day window. A meaningful share of
          what had been reported as revenue hadn't yet been collected.
        </p>
        <div className="pull-quote">
          <p>
            Kautilya underwrote the base valuation on approximately $2,000 USD MRR, reflecting only collected or
            reliably recurring cash flows. Everything else was moved into the earn-out and milestone structure.
          </p>
        </div>
        <p>
          Technical diligence ran in parallel, focused not on feature completeness but on data ingestion reliability,
          architecture decisions, and scalability constraints. The goal was to identify risks that couldn't be
          diversified away rather than to produce a comprehensive feature audit.
        </p>

        <h2>Structure: Pricing the Unknown Without Overpaying for It</h2>
        <p>
          The buyer's position was clear. He was willing to back strong products early, but unwilling to pay fully
          upfront for unproven durability. Structure became the primary risk management lever.
        </p>
        <p>
          Total consideration: $110,000. But the way that number was distributed told the real story.
        </p>

        <div className="metrics-strip">
          <div className="metric">
            <div className="metric-value">$110K</div>
            <div className="metric-label">Total Consideration</div>
          </div>
          <div className="metric">
            <div className="metric-value">$20K</div>
            <div className="metric-label">Upfront at Close</div>
          </div>
          <div className="metric">
            <div className="metric-value">24 mo</div>
            <div className="metric-label">Earn-Out Period</div>
          </div>
          <div className="metric">
            <div className="metric-value">$30K</div>
            <div className="metric-label">Guaranteed Capital at Risk</div>
          </div>
        </div>

        <ul className="constraint-list">
          <li>$20,000 paid upfront at closing (~25% of implied valuation)</li>
          <li>$57,000 in variable consideration as a profit-indexed earn-out over 24 months</li>
          <li>Balance delivered through salary, milestone bonuses, and retained minority equity</li>
          <li>Founder retained involvement, aligned through structures rewarding real performance</li>
        </ul>
        <p>
          The negotiation was precise. The seller initially expected 30% upfront on an implied $77,000 valuation,
          roughly $23,100 at close. Kautilya's opening position was approximately $16,000 upfront (20%), with the
          remainder delivered through the earn-out and equity structure. The debate wasn't about valuation fairness.
          It was about liquidity timing and certainty, treated as a capital deployment decision rather than a price
          revision.
        </p>
        <p>
          The resolution landed at $20,000 upfront, a controlled midpoint concession achieved without reopening the
          earn-out cap, milestone economics, the 70/30 equity split, or any governance and control provisions.
          Post-agreement, the majority of consideration remained performance-linked, time-based, and
          escrow-protected.
        </p>

        <h2>Why This Deal Matters</h2>
        <p>
          Most buyers would have either walked away from a 3-month-old asset or overpaid for the narrative. The
          revenue looked promising on a dashboard. The product was polished. The founder was credible. All the
          ingredients for a deal that closes on excitement and unravels on reality.
        </p>
        <p>
          Kautilya did something different. We separated what had been collected from what had been counted. We
          underwrote on verified cash, not trial metrics. We moved every unproven variable into contingent structure
          rather than baking it into the price. And we closed in 45 days with only $30,000 of total guaranteed
          capital at risk.
        </p>
        <p>
          For the client, this was the second acquisition in a portfolio strategy designed to generate live data,
          compress learning cycles, and fund experimentation with real cash flow rather than assumptions. Each deal
          made the next one smarter.
        </p>

        <div className="story-coda">
          <div className="coda-text">
            When you can't verify the future, structure for it.
          </div>
        </div>
      </article>
    </>
  );
}
