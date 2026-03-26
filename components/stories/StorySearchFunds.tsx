"use client";
import { useCallback } from 'react';
import { useReadingProgressAndShareBar } from '@/components/useReadingProgressAndShareBar';
import Link from 'next/link';
import ShimmerImage from '@/components/ShimmerImage';

export default function StorySearchFunds() {
  useReadingProgressAndShareBar();

  const shareTwitter = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('The Rise of Search Funds , via @kautilya');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  }, []);

  const shareLinkedIn = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  }, []);

  const shareEmail = useCallback(() => {
    const subject = encodeURIComponent('The Rise of Search Funds');
    const body = encodeURIComponent(`Check out this story: ${window.location.href}`);
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
        <Link href="/stories" className="back-link">&larr; Stories</Link>
        <div className="meta-row">
          <span className="meta-tag sector">Search Funds</span>
          <span className="meta-tag geo">Global</span>
          <span className="meta-tag stage">Search Funds &middot; Nov 2025</span>
        </div>
        <h1>The Rise of Search Funds</h1>
        <div className="subtitle">
          How a Stanford MBA experiment from the 1980s evolved into a distinct asset class redefining entrepreneurship through acquisition.
        </div>
        <div className="hero-line" />
      </div>

      <article className="story-body" id="storyBody">
        <figure className="story-img">
          <ShimmerImage src="/images/stories/search-fund/month.png" alt="Lone figure searching through a vast library symbolising the 20-month median search fund journey" width={1200} height={675} />
        </figure>

        <p>
          The search fund model originated in the early 1980s at Stanford GSB as a pathway for capable
          MBA graduates to become CEOs. Jim Southern&rsquo;s 1984 acquisition of Uniform Printing through
          Nova Capital marked the first recognised search fund deal. What started as a niche experiment
          has evolved into a distinct asset class with multiple variations.
        </p>

        <div className="pull-quote">
          <p>
            37% fail to find any deal. 63% of letters of intent fail after signature. The median search
            takes 20 months. This is not a shortcut &mdash; it is a discipline.
          </p>
        </div>

        <h2>The Searcher Profile</h2>
        <p>
          Typical searchers are 31&ndash;32 years old with MBAs and backgrounds in finance or consulting.
          But success correlates more strongly with intangible qualities: perseverance through rejection
          and emotional stress, humility to seek and heed criticism, and flexibility to navigate constant
          trade-offs and uncertainty.
        </p>

        <figure className="story-img">
          <ShimmerImage src="/images/stories/search-fund/partnered.png" alt="Two diverging paths in a forest representing the solo versus partnered search fund decision" width={1200} height={675} />
        </figure>

        <h2>Solo vs. Partnered</h2>
        <p>
          The data presents a paradox. Partnered searches historically achieve 40.5% IRR versus 30.3%
          for solo searches. Yet 81% of new funds in 2022&ndash;2023 were solo operations. Solo searchers
          retain 20&ndash;25% equity versus 25&ndash;30% combined for partners. Five of six searchers
          achieving 10x+ ROI recently were solo operators &mdash; suggesting they are betting on variance
          over average returns.
        </p>

        <h2>The Target</h2>
        <p>
          Ideal criteria remain consistent: profitable history, high recurring revenue, low capital
          expenditure requirements, and operating in growing, fragmented industries. Software and
          tech-enabled services fit perfectly, explaining their popularity.
        </p>
        <p>
          The multiple gap is revealing. Core model: median purchase price $14.4 million at 7.0x EBITDA.
          Self-funded model: targets the micro-cap segment at 3.0x&ndash;5.0x multiples &mdash; too small
          for traditional PE, creating inefficient markets with real opportunity.
        </p>

        <h2>Deal Sourcing</h2>
        <p>
          Proprietary exploration leads sourcing methods at 64% adoption &mdash; finding businesses not
          actively marketed, resulting in less competitive bidding and lower prices. Advanced techniques
          include deep industry research, trade show attendance for credibility, and engaging retired
          CEOs or association presidents for warm introductions.
        </p>

        <h2>Why Deals Fail Post-LOI</h2>
        <ul className="constraint-list">
          <li><strong>Due diligence problems (63%):</strong> Quality-of-Earnings reports reveal discrepancies</li>
          <li><strong>Valuation issues (48%):</strong> Adjusted earnings require price renegotiation</li>
          <li><strong>Seller retraction (38%):</strong> Owners view sales emotionally as selling their life&rsquo;s work</li>
        </ul>

        <h2>When to Walk Away</h2>
        <p>
          Turnaround situations, high customer concentration above 30% from one customer, high churn,
          volatile earnings, and most critically &mdash; sellers lacking transparency or obstructing due
          diligence. These indicate trust deficits and hidden fatal flaws.
        </p>

        <figure className="story-img">
          <ShimmerImage src="/images/stories/search-fund/barbell.png" alt="Barbell shape visualising the bimodal return distribution of search funds with 10x winners and losses" width={1200} height={675} />
        </figure>

        <h2>The Exit Distribution</h2>
        <p>
          The 2024 Stanford data shows a barbell: 11% achieve 10x+ ROI while 31% result in losses.
          Quality of assets separates winners from losers. The core model offers median exited payout
          of $2.25 million with lower personal risk. The self-funded model is high-risk, high-reward:
          searchers forgo salary but retain 60%+ equity if successful.
        </p>

        <div className="metrics-strip">
          <div className="metric">
            <div className="metric-value">1984</div>
            <div className="metric-label">First Search Fund Deal</div>
          </div>
          <div className="metric">
            <div className="metric-value">20 mo</div>
            <div className="metric-label">Median Search Duration</div>
          </div>
          <div className="metric">
            <div className="metric-value">40.5%</div>
            <div className="metric-label">Partnered Search IRR</div>
          </div>
          <div className="metric">
            <div className="metric-value">$14.4M</div>
            <div className="metric-label">Median Core Purchase Price</div>
          </div>
        </div>

        <div className="story-coda">
          <div className="coda-text">
            The search fund model proves that you do not need to build from zero to become a CEO. You need to find the right business and have the discipline to close.
          </div>
        </div>
      </article>
    </>
  );
}
