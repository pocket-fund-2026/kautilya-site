"use client";
import { useCallback } from 'react';
import { useReadingProgressAndShareBar } from '@/components/useReadingProgressAndShareBar';
import Link from 'next/link';
import ShimmerImage from '@/components/ShimmerImage';

export default function StoryDealSourcing() {
  useReadingProgressAndShareBar();

  const shareTwitter = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('My Morning Routine Is Looking at Acquire.com for 30 Min — via @kautilya');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  }, []);

  const shareLinkedIn = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  }, []);

  const shareEmail = useCallback(() => {
    const subject = encodeURIComponent('My Morning Routine Is Looking at Acquire.com for 30 Min');
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
          <span className="meta-tag sector">Deal Sourcing</span>
          <span className="meta-tag geo">Acquire.com</span>
          <span className="meta-tag stage">Deal Sourcing &middot; Jun 2024</span>
        </div>
        <h1>My Morning Routine Is Looking at Acquire.com for 30 Minutes</h1>
        <div className="subtitle">
          After acquiring six micro-startups, five practical strategies for filtering quality deals from thousands of marketplace listings.
        </div>
        <div className="hero-line" />
      </div>

      <article className="story-body" id="storyBody">
        <figure className="story-img">
          <ShimmerImage src="/images/stories/deal-sourcing/morning.png" alt="Laptop showing Acquire.com business marketplace listings during a morning deal sourcing session" width={1200} height={675} />
        </figure>

        <p>
          Spending 30 minutes on Acquire.com every morning has been the single most profitable habit
          in this journey. The marketplace contains thousands of listings, but the quality varies
          significantly. Knowing how to filter is the skill that separates browsers from buyers.
        </p>

        <div className="pull-quote">
          <p>
            90&ndash;95% of the listings on marketplaces like Acquire are either stale, without updated
            stats, dead businesses, or overpriced. Your business is only worth what you can convince
            others to pay.
          </p>
        </div>

        <h2>The Numbers Behind the Process</h2>
        <p>
          Across six successful acquisitions, we reviewed 100&ndash;200 businesses per deal &mdash;
          approximately 1,000 total opportunities. That volume of analysis builds an intuition that
          no shortcut can replicate. You start seeing patterns: what is real, what is inflated, and
          what is quietly undervalued.
        </p>

        <figure className="story-img">
          <ShimmerImage src="/images/stories/deal-sourcing/thousand.png" alt="Desk covered in printed business summaries being filtered and evaluated for acquisition" width={1200} height={675} />
        </figure>

        <h2>Five Tips for Serious Buyers</h2>

        <h2>1. Check Frequently</h2>
        <p>
          The best opportunities disappear within weeks. Check at least three times per week.
          Acquire remains the primary marketplace; Microns.io offers alternatives for smaller deals.
        </p>

        <h2>2. Develop Analytical Skills</h2>
        <p>
          Build evaluation capability the way you would build physical strength &mdash; through
          repetition. Returns depend heavily on buyer capabilities, not market conditions.
        </p>

        <h2>3. Use Marketplace Filters</h2>
        <p>
          Revenue, industry, age, and customer count filters help navigate thousands of listings
          effectively. Do not scroll aimlessly. Be surgical.
        </p>

        <h2>4. Enter Negotiations Early</h2>
        <p>
          Perfect deals do not exist. Multiple negotiations teach deal-making fundamentals that
          reading about them never will. The first conversation is always the hardest.
        </p>

        <h2>5. Track and Revisit</h2>
        <p>
          Measure your searches systematically. Older listings often yield better terms as sellers
          become motivated. A business that was overpriced three months ago might be fairly priced
          today.
        </p>

        <div className="metrics-strip">
          <div className="metric">
            <div className="metric-value">6</div>
            <div className="metric-label">Acquisitions Completed</div>
          </div>
          <div className="metric">
            <div className="metric-value">~1,000</div>
            <div className="metric-label">Businesses Reviewed</div>
          </div>
          <div className="metric">
            <div className="metric-value">30 min</div>
            <div className="metric-label">Daily Sourcing Habit</div>
          </div>
          <div className="metric">
            <div className="metric-value">3x/week</div>
            <div className="metric-label">Minimum Check Frequency</div>
          </div>
        </div>

        <figure className="story-img">
          <ShimmerImage src="/images/stories/deal-sourcing/discipline.png" alt="Filing cabinet with one golden drawer open symbolising systematic deal sourcing discipline" width={1200} height={675} />
        </figure>

        <div className="story-coda">
          <div className="coda-text">
            Deal sourcing is not a task. It is a discipline. Thirty minutes a day compounds into an unfair advantage.
          </div>
        </div>
      </article>
    </>
  );
}
