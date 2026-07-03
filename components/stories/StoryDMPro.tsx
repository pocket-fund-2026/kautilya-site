"use client";
import { useCallback } from 'react';
import { useReadingProgressAndShareBar } from '@/components/useReadingProgressAndShareBar';
import Link from 'next/link';

export default function StoryDMPro() {
  useReadingProgressAndShareBar();

  const shareTwitter = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('From 1,600 DMs to one deal: how we closed a $25K Twitter/X SaaS acquisition off-market, via @kautilya');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  }, []);

  const shareLinkedIn = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  }, []);

  const shareEmail = useCallback(() => {
    const subject = encodeURIComponent('DM Pro: From 1,600 DMs to One Twitter/X SaaS Acquisition');
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
          <span className="meta-tag sector">X-Native SaaS · Outreach Automation</span>
          <span className="meta-tag geo">US-Operating · India-Based Buyers</span>
          <span className="meta-tag stage">Full Buy-Side Mandate</span>
        </div>
        <h1>$25K Acquisition, $17.5K at Close: Sourcing a Twitter/X SaaS Off-Market</h1>
        <div className="subtitle">
          How Kautilya ran 1,700+ outreach messages, three layers of diligence, and a four-phase APA negotiation
          to close a Twitter/X automation SaaS in 12 weeks — no broker, no marketplace listing.
        </div>
        <div className="hero-line" />
      </div>

      {/* STORY BODY */}
      <article className="story-body" id="storyBody">
        <p>
          The buyers were two first-time acquirers — a professional day trader and a management consultant, both
          India-based — evaluating a 9-month-old, US-operating Twitter/X DM automation SaaS. Revenue had grown from
          $348 to $2,156 a month without a dollar of paid marketing, run entirely by its founder, and it wasn't
          listed on any marketplace or broker platform.
        </p>
        <p>
          On paper, an attractive early-stage SaaS: consistent growth, a lean cost structure, and a motivated seller
          with genuine exit intent. But the buyers had no prior acquisition experience, no deal sourcing
          infrastructure, and no transaction framework. They had a mandate and no engine to run it — someone needed
          to build the pipeline, run the diligence, negotiate the terms, and get it closed.
        </p>
        <div className="pull-quote">
          <p>
            Is this business's revenue durable traction or fragile early-stage signal — and how founder-dependent is
            it underneath?
          </p>
        </div>

        <h2>Sourcing: 1,700+ Messages, No Broker, No Marketplace</h2>
        <p>
          Kautilya converted the buyers' preferences into advance/reject thresholds, revenue minimums, and
          founder-intent signals before scaling outreach. Every message went out buyer-anonymous, preserving
          negotiating leverage from first contact through signature.
        </p>
        <p>
          Email was tested early and dropped fast — under 5% response rates and low-context, valuation-anchored
          replies. The pivot to Reddit, TrustMRR, and Twitter itself hit 40–50% response rates with materially
          stronger intent signals, and the channel mix was fully repointed by week four.
        </p>

        <div className="metrics-strip">
          <div className="metric">
            <div className="metric-value">1,700+</div>
            <div className="metric-label">Outreach Messages</div>
          </div>
          <div className="metric">
            <div className="metric-value">~800</div>
            <div className="metric-label">Replies</div>
          </div>
          <div className="metric">
            <div className="metric-value">21</div>
            <div className="metric-label">Deals Shortlisted</div>
          </div>
          <div className="metric">
            <div className="metric-value">12 wks</div>
            <div className="metric-label">First Outreach to Signed APA</div>
          </div>
        </div>

        <p>
          The funnel ran from 1,700+ outreach messages down to roughly 800 replies, about 55 calls, 21
          mandate-aligned deals shortlisted with investment memos, and a single LOI on DM Pro — the Twitter/X
          automation SaaS that best matched the mandate.
        </p>

        <h2>Diligence: Three Layers, One Founder</h2>
        <p>
          DM Pro scrapes X for leads — followers of target accounts, community members, tweet repliers, keyword and
          bio searches — and sends AI-personalized outreach at scale using each lead's profile, recent tweets, and
          website content as context. At the time of acquisition it ranked first in Google AI Overviews for
          Twitter cold-DM tool queries, entirely organic.
        </p>
        <p>
          Financial diligence pulled direct Stripe access and reconciled it 100% against the seller's P&amp;L.
          Roughly $800 in lifetime-plan purchases was flagged as non-recurring so the buyers underwrote real,
          repeatable cash flow rather than dashboard revenue. Technical diligence was an independent codebase
          review — around 98,000 lines of TypeScript — that assessed the Puppeteer-based automation layer as the
          primary moat, at 5–7 months to rebuild solo given the anti-detection tuning baked into it. Consumer
          diligence meant managing subscriber conversations directly: the issues that surfaced were fixable
          operational problems — cookie management, session stability, onboarding friction — not structural flaws.
        </p>
        <div className="pull-quote">
          <p>
            The founder was the entire operation — no staff, no SOPs, no documentation. Key-person risk can't be
            diligenced away. It can only be priced.
          </p>
        </div>
        <ul className="constraint-list">
          <li>Revenue verified at source (Stripe), 100% reconciled against seller P&amp;L</li>
          <li>~98,000 lines of TypeScript independently reviewed for architecture and dependency risk</li>
          <li>X/Twitter automation sits in TOS-gray territory — platform risk priced into the multiple, not diligenced away</li>
          <li>Founder-dependence addressed through transition structure, not walked away from</li>
        </ul>

        <h2>Structure: Pricing Risk Through Mechanics, Not Valuation</h2>
        <p>
          The APA went through four phases — LOI terms alignment, drafting across three substantive revision
          cycles, commercial terms negotiation (earnout, equity exit, developer transition), and cross-border
          payment resolution for India-based buyers acquiring through a US LLC still in formation.
        </p>

        <div className="metrics-strip">
          <div className="metric">
            <div className="metric-value">$25K</div>
            <div className="metric-label">Total Consideration</div>
          </div>
          <div className="metric">
            <div className="metric-value">$17.5K</div>
            <div className="metric-label">Cash at Close (70%)</div>
          </div>
          <div className="metric">
            <div className="metric-value">20%</div>
            <div className="metric-label">Seller Note</div>
          </div>
          <div className="metric">
            <div className="metric-value">10%</div>
            <div className="metric-label">Equity, 1.25x MRR Exit</div>
          </div>
        </div>

        <ul className="constraint-list">
          <li>$17,500 cash at closing — 70% of total consideration, clears before any asset transfer</li>
          <li>$5,000 seller note — roughly $1,667/month over three payments, 5% weekly interest if overdue</li>
          <li>10% equity retained by the founder, with a 1.25x MRR exit right at 12 months</li>
          <li>Capped 3-month developer transition commitment to de-risk the handover</li>
        </ul>
        <p>
          Seller headline value stayed at $25,000 — the full price the founder wanted. What changed was how the
          risk was carried: platform risk was priced into a 14x MRR multiple, and founder-dependence was addressed
          through the note, the equity stake, and the capped transition window rather than through a valuation
          discount.
        </p>

        <h2>Why This Deal Matters</h2>
        <p>
          Most advisory firms won't give a sub-$50K deal institutional-grade attention — the model doesn't allow
          it. Kautilya ran 1,700+ outreach messages, shortlisted 21 deals, conducted three-layer diligence, and
          negotiated a four-phase APA over 12 weeks for a $25,000 acquisition. That intensity is the point — it's
          how a first-time buyer gets a deal that closes cleanly instead of falling apart at the APA stage.
        </p>
        <p>
          DM Pro was Kautilya's third completed acquisition, and it carried the same core methodology as the
          first two: buyer-anonymous sourcing, source-level diligence, and risk priced through deal structure
          rather than valuation compression. Seller value preserved. Buyer downside protected. The two aren't in
          conflict — they're a structuring decision.
        </p>

        <div className="story-coda">
          <div className="coda-text">
            You're not buying a P&amp;L. You're buying the business underneath it.
          </div>
        </div>
      </article>
    </>
  );
}
