"use client";
import { useCallback } from 'react';
import { useReadingProgressAndShareBar } from '@/components/useReadingProgressAndShareBar';
import Link from 'next/link';

export default function StoryDinoGames() {
  useReadingProgressAndShareBar();

  const shareTwitter = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Acquiring a Self-Funding Mobile Asset in 8 Weeks , via @kautilya');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  }, []);

  const shareLinkedIn = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  }, []);

  const shareEmail = useCallback(() => {
    const subject = encodeURIComponent('Acquiring a Self-Funding Mobile Asset in 8 Weeks');
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
          <span className="meta-tag sector">Consumer Mobile Gaming</span>
          <span className="meta-tag geo">Global · Android + iOS</span>
          <span className="meta-tag stage">Asset Purchase (Carve-out)</span>
        </div>
        <h1>Acquiring a Self-Funding Mobile Asset in 8 Weeks</h1>
        <div className="subtitle">
          How Kautilya sourced, valued, and closed a cash-flow-positive mobile game through off-market channels, then
          deployed operators to run it from day one.
        </div>
        <div className="hero-line" />
      </div>

      {/* STORY BODY */}
      <article className="story-body" id="storyBody">
        <p>
          The client had just exited a founder-led software business to a private equity firm. With over 20 years of
          operating experience across enterprise and SaaS, he was ready for something different: a concentrated portfolio
          of consumer mobile applications centered around health, fitness, and lifestyle, with a core design principle of
          habit formation and long-term retention over short-term engagement spikes.
        </p>
        <p>
          There was one problem. At the time of onboarding, the client had two internally developed mobile apps in
          progress. Both were pre-launch. Neither was monetized. There was no live user data, no distribution leverage,
          and no cash flow. Every early decision was being driven by conviction rather than validated performance.
        </p>
        <p>
          The strategic gap was clear. Without a live, revenue-generating asset in the portfolio, the client was flying
          blind. Acquisitions weren't meant to replace internal product development. They were meant to de-risk and
          accelerate it, compressing learning cycles and grounding decisions in real user behavior rather than untested
          hypotheses.
        </p>

        <h2>Sourcing: Where Kautilya Found the Deal</h2>
        <p>
          Kautilya began by mapping the consumer mobile landscape across health, fitness, lifestyle, and adjacent
          gamified categories. The goal was to build a high-signal view of sub-scale, cash-flowing mobile assets and
          establish repeatable sourcing channels before engaging in asset-level diligence.
        </p>
        <p>
          The team built and operated in-house scraping infrastructure to systematically pull data from the Apple App
          Store and Google Play, tracking ranking stability, review velocity, update cadence, monetization signals, and
          install momentum across target categories. These datasets were cross-validated against third-party app
          directories and analytics platforms.
        </p>
        <p>
          Proprietary, off-market deal flow came through founder-native channels, including Kautilya's owned and
          operated acquisition community on Reddit (the largest of its kind on the platform), along with targeted
          outreach to owner-operators on Reddit and Twitter.
        </p>
        <div className="pull-quote">
          <p>
            Email-led discussions skewed transactional and valuation-forward. Response quality was meaningfully
            stronger within founder-native social channels, where conversations tended to be higher-context and
            operationally grounded.
          </p>
        </div>
        <p>
          By week two, Kautilya had fully pivoted to personalized, buyer-anonymous outreach on Reddit and Twitter,
          leveraging public posting history, product announcements, and prior technical discussions to tailor each
          message to the specific asset and operator. Outreach volume held steady at roughly 50 direct founder
          conversations per week without automation-heavy tooling.
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
            <div className="metric-value">20</div>
            <div className="metric-label">Mandate-Aligned Deals</div>
          </div>
          <div className="metric">
            <div className="metric-value">3 LOIs</div>
            <div className="metric-label">Issued in 1 Week</div>
          </div>
        </div>

        <h2>The Asset: Why This One</h2>
        <p>
          From the seller's broader portfolio of nine mobile titles, Kautilya deliberately selected one asset for its
          demonstrably superior operating profile and capital efficiency relative to the sibling titles.
        </p>
        <p>
          The game was a dinosaur simulation, live for roughly eight years, with approximately 8 million Android
          installs and a sustained base of 200K–300K monthly active users. It had received no major updates for over
          two years. Despite that, it remained cash-flow positive, generating approximately $3,000 in monthly net
          profit on $3,000–$4,000 of ad spend, with net margins running at 40–50%.
        </p>
        <p>
          The durability was structural, not accidental. The game sat in a less crowded simulator/fantasy niche where
          monetization is driven by session volume and ad density rather than the habit-based retention loops typical
          of puzzle or word games. The game's ability to remain profitable under modest retention metrics reflected a
          front-loaded LTV system: value is realized early in the engagement cycle through high-frequency ad exposure
          during short, repeat sessions.
        </p>
        <p>
          The technical foundation was clean. Unity 3D (C#), a single shared codebase across Android and iOS, fully
          documented GitHub repository, and a centralised ad mediation stack. No proprietary dependencies, no
          platform-specific forks, easy onboarding for any Unity developer.
        </p>

        <div className="metrics-strip">
          <div className="metric">
            <div className="metric-value">~8M</div>
            <div className="metric-label">Android Installs</div>
          </div>
          <div className="metric">
            <div className="metric-value">200–300K</div>
            <div className="metric-label">Monthly Active Users</div>
          </div>
          <div className="metric">
            <div className="metric-value">~$3K/mo</div>
            <div className="metric-label">Net Profit</div>
          </div>
          <div className="metric">
            <div className="metric-value">40–50%</div>
            <div className="metric-label">Net Margins</div>
          </div>
        </div>

        <h2>Valuation &amp; Structure: Engineering Risk Through Payment, Not Price</h2>
        <p>
          Kautilya's approach to valuation started not with a number, but with a question: how does this asset
          actually function day to day, and what breaks if the operator changes?
        </p>
        <p>
          The first negotiation call was spent entirely on operational mechanics: who managed ad spend and
          optimization, how often creatives were refreshed, the role of mediation tuning, the level of hands-on
          involvement required to maintain profitability. This established a critical valuation truth early: the
          asset's performance was operator-dependent, which meant higher multiples were difficult to justify and risk
          needed to be absorbed through structure, not paid for upfront.
        </p>
        <div className="pull-quote">
          <p>
            Cash timing became the lever, not total price. Kautilya deliberately separated liquidity needs from
            economic risk allocation.
          </p>
        </div>
        <p>
          The transaction closed at $39,000 in total consideration, representing approximately 1.1× annual revenue
          and 1.2× normalised annual profit. Rather than compressing valuation to offset transition risk, Kautilya
          engineered the risk through structure:
        </p>
        <ul className="constraint-list">
          <li>~56% ($22,000) paid at close</li>
          <li>Remaining 44% ($17,000) deferred over twelve months, tied to transition stability</li>
          <li>First deferred tranche ($9,500) cleared within 90 days</li>
          <li>Final $7,500 paid quarterly over the following nine months</li>
        </ul>
        <p>
          The upfront payment alone carried a 7–8 month payback period at current performance. Full valuation payback
          came in at roughly 13 months, below the industry norm of 18–30 months, achieved without relying on
          projections or roadmap execution.
        </p>

        <div className="metrics-strip">
          <div className="metric">
            <div className="metric-value">$39K</div>
            <div className="metric-label">Total Consideration</div>
          </div>
          <div className="metric">
            <div className="metric-value">1.1×</div>
            <div className="metric-label">Revenue Multiple</div>
          </div>
          <div className="metric">
            <div className="metric-value">56%</div>
            <div className="metric-label">Paid at Close</div>
          </div>
          <div className="metric">
            <div className="metric-value">~13 mo</div>
            <div className="metric-label">Full Payback</div>
          </div>
        </div>

        <h2>Diligence: Console-Level Verification, Not Spreadsheet Trust</h2>
        <p>
          Kautilya refused to accept secondary revenue summaries and instead demanded console-level access across
          every revenue and user acquisition surface.
        </p>
        <p>
          This created immediate friction, but it was deliberate. The team systematically walked each reported number
          back to source, asking sellers to guide live inside Google Ads (filters, campaign names, paused versus
          enabled campaigns) while cross-checking against AdMob revenue and Play Console IAP receipts.
        </p>
        <p>
          The process surfaced several critical findings. Play Console IAP mismatches were identified for two months,
          revealing a data entry discrepancy. More importantly, Kautilya deconstructed the ad mediation stack and
          established that what appeared to be diversified revenue across multiple ad networks was in fact a single
          mediated income stream running through one platform. This collapsed the seller's narrative of revenue
          diversification and reframed growth claims as optimization upside rather than historical proof.
        </p>
        <p>
          Kautilya also identified embedded future loss risk in the form of heavily discounted lifetime IAP purchases
          that would create perpetual service obligations for the buyer. These were shut down pre-close under LOI
          terms, with the seller absorbing the revenue impact.
        </p>
        <p>
          On the structural side, when the seller proposed off-escrow payment splits to accelerate the process,
          Kautilya rejected the approach outright and forced escrow structuring through a US LLC workaround, requiring
          a signed APA, an inspection period, and milestone-based releases.
        </p>

        <h2>Post-Close: From Diligence to Execution in Days, Not Months</h2>
        <p>
          A critical component of the engagement extended beyond transaction close. Kautilya supported the client in
          hiring operators across marketing operations and technical execution, including UI/UX optimization and game
          development, sourced directly through Kautilya's existing network of mobile specialists.
        </p>
        <p>
          Candidates were evaluated through multiple interviews, prioritizing hands-on experience in mobile growth
          and monetization, the ability to operate independently in early-stage environments, and familiarity with
          live consumer products rather than greenfield builds.
        </p>
        <p>
          The selected operators were onboarded immediately post-close and remain actively engaged in running and
          improving the application today. This compressed the post-close ramp period from what typically takes months
          into days, allowing the client to sprint into execution while preserving continuity.
        </p>

        <h2>The Outcome</h2>
        <p>
          A cash-flow-positive mobile gaming asset acquired for $39,000 at 1.1× revenue, with 56% paid at close and
          the remainder structured over twelve months. Upfront payback in under 8 months. Full payback in roughly 13
          months. Operators deployed from day one. No reliance on forward projections, roadmap execution, or
          speculative growth.
        </p>
        <div className="pull-quote">
          <p>
            A self-funding acquisition loop where capital deployed into user acquisition is recovered quickly through
            ad monetization, allowing the business to compound without external funding.
          </p>
        </div>
        <p>
          For the client, this was more than a single deal. It was the first live asset in a portfolio strategy,
          delivering immediate cash flow, real user data, and a compressed learning cycle that de-risked every
          decision that followed.
        </p>

        <div className="story-coda">
          <div className="coda-text">
            When you can't learn from a dashboard, acquire the signal.
          </div>
        </div>
      </article>
    </>
  );
}
