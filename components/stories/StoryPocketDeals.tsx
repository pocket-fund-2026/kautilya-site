"use client";
import { useCallback } from 'react';
import { useReadingProgressAndShareBar } from '@/components/useReadingProgressAndShareBar';
import Link from 'next/link';
import ShimmerImage from '@/components/ShimmerImage';

export default function StoryPocketDeals() {
  useReadingProgressAndShareBar();

  const shareTwitter = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Pocket Deals #1: A $15K Micro-SaaS for Autism Support , via @kautilya');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  }, []);

  const shareLinkedIn = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  }, []);

  const shareEmail = useCallback(() => {
    const subject = encodeURIComponent('Pocket Deals #1: A $15K Micro-SaaS for Autism Support');
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
          <span className="meta-tag sector">Micro-SaaS</span>
          <span className="meta-tag geo">iOS / App Store</span>
          <span className="meta-tag stage">Pocket Deals #1 &middot; May 2024</span>
        </div>
        <h1>Pocket Deals #1: A $15K Micro-SaaS Supporting Children with Autism</h1>
        <div className="subtitle">
          Breaking down a niche iOS app offering visual schedules, gentle alarms, and step-by-step guidance &mdash; listed at a $15,000 asking price.
        </div>
        <div className="hero-line" />
      </div>

      <article className="story-body" id="storyBody">
        <figure className="story-img">
          <ShimmerImage src="/images/stories/micro-saas/bigpurpose.png" alt="Acquisition snapshot for iOS autism support app: $15,000 asking price, 2.5x revenue multiple, ~100% profit margin" width={1200} height={675} />
        </figure>

        <p>
          Pocket Deals is our series breaking down real businesses available for acquisition. This first
          edition examines a micro-SaaS startup offering digital tools designed to support children with
          autism through an iOS app ecosystem.
        </p>

        <h2>The Business</h2>
        <p>
          The company operates as a B2C venture, distributing its application through Apple&rsquo;s App Store.
          The app maintains compatibility with current iOS versions and provides structured support tools
          including visual schedules, gentle alarms, countdown timers, and sequential task guidance &mdash;
          features designed to help children manage daily activities while maintaining composure and focus.
        </p>

        <div className="pull-quote">
          <p>
            A meaningful solution with proven functionality and a dedicated market &mdash; at a price point accessible to first-time acquirers.
          </p>
        </div>

        <h2>The Numbers</h2>
        <p>
          At a $15,000 asking price, the valuation sits at 2.6x profit and 2.5x revenue. Twelve-month
          revenue stands at $6,000 with $6,000 in profit &mdash; effectively 100% margins. Recent monthly
          performance shows $480 in revenue and $475 in profit.
        </p>

        <h2>Investment Advantages</h2>
        <ul className="constraint-list">
          <li>Established methodologies for supporting autistic children</li>
          <li>Intellectual property included with transfer</li>
          <li>Operational website and active social channels</li>
          <li>Growth potential via strategic marketing and feature expansion</li>
        </ul>

        <h2>Investment Considerations</h2>
        <p>
          The business is currently a solo operation with one person managing all responsibilities. The
          target demographic is narrow and requires specialised promotion. Prospective buyers should
          carefully evaluate scaling strategies given the single-person team structure and specialised
          market focus.
        </p>

        <figure className="story-img">
          <ShimmerImage src="/images/stories/micro-saas/15000.png" alt="Pocket Deals #1 deal scorecard: margins, valuation, defensibility, and growth potential" width={1200} height={675} />
        </figure>

        <h2>Our Take</h2>
        <p>
          This is exactly the kind of acquisition we look for: a functioning product, real revenue, a
          defensible niche, and clear upside through marketing investment. The 100% profit margins mean
          every dollar of growth drops straight to the bottom line. The question is not whether the
          product works &mdash; it is whether the next owner can find the audience.
        </p>

        <div className="metrics-strip">
          <div className="metric">
            <div className="metric-value">$15K</div>
            <div className="metric-label">Asking Price</div>
          </div>
          <div className="metric">
            <div className="metric-value">2.5x</div>
            <div className="metric-label">Revenue Multiple</div>
          </div>
          <div className="metric">
            <div className="metric-value">$6K</div>
            <div className="metric-label">Annual Revenue</div>
          </div>
          <div className="metric">
            <div className="metric-value">~100%</div>
            <div className="metric-label">Profit Margin</div>
          </div>
        </div>

        <figure className="story-img">
          <ShimmerImage src="/images/stories/micro-saas/numbers.png" alt="The numbers at a glance: $6,000 annual revenue and profit, $480 monthly revenue, $475 monthly profit" width={1200} height={675} />
        </figure>

        <div className="story-coda">
          <div className="coda-text">
            The best micro-acquisitions solve real problems for real people. This one does both.
          </div>
        </div>
      </article>
    </>
  );
}
