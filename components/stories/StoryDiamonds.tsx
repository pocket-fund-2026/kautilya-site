"use client";
import { useCallback } from 'react';
import { useReadingProgressAndShareBar } from '@/components/useReadingProgressAndShareBar';
import Link from 'next/link';
import ShimmerImage from '@/components/ShimmerImage';

export default function StoryDiamonds() {
  useReadingProgressAndShareBar();

  const shareTwitter = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('How to Find Diamonds in the Rough , via @kautilya');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  }, []);

  const shareLinkedIn = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  }, []);

  const shareEmail = useCallback(() => {
    const subject = encodeURIComponent('How to Find Diamonds in the Rough');
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
          <span className="meta-tag sector">Micro-Acquisitions</span>
          <span className="meta-tag geo">Global</span>
          <span className="meta-tag stage">Hidden Value &middot; Jan 2025</span>
        </div>
        <h1>How to Find Diamonds in the Rough</h1>
        <div className="subtitle">
          The best acquisitions are businesses that previous owners abandoned or failed to monetise &mdash; and that the next owner can transform.
        </div>
        <div className="story-date">January 11, 2025</div>
        <div className="hero-line" />
      </div>

      <article className="story-body" id="storyBody">

        <p>
          There&rsquo;s a secret nobody&rsquo;s talking about. Some of the best businesses out there
          aren&rsquo;t the ones everyone&rsquo;s chasing. They&rsquo;re the ones people{' '}
          <em>gave up on</em>.
        </p>
        <p>
          Businesses where the owner got tired, or didn&rsquo;t know how to grow it &mdash; so
          they&rsquo;re sitting on something valuable without even realising it.
        </p>

        <h2>The Case Study</h2>
        <p>
          Last year, a friend picked up a newsletter for way less than its actual worth. The previous
          owner had solid content but zero monetisation strategy. It was getting{' '}
          <strong>5,000 readers a month</strong> but wasn&rsquo;t making a single dollar.
        </p>
        <p>
          He added sponsorships, built a product, and now it brings in{' '}
          <strong><span style={{ color: 'var(--gold)' }}>$2,500 a month</span></strong> &mdash;
          passively. The purchase price was a fraction of its current annual revenue.
        </p>

        <div className="pull-quote">
          <p>
            Buying a business like this isn&rsquo;t about luck. It&rsquo;s about spotting potential
            in what others ignore.
          </p>
        </div>

        <figure className="story-img">
          <ShimmerImage src="/images/stories/diamonds/uncut.png" alt="What makes a diamond in the rough: stable cash flow, low owner involvement, growth potential" width={1200} height={675} />
        </figure>

        <h2>The Numbers Don&rsquo;t Lie</h2>
        <p>
          There are over <strong><span style={{ color: 'var(--gold)' }}>1 million</span></strong>{' '}
          small businesses for sale globally right now. Most are listed at{' '}
          <strong>2&ndash;3x annual profit</strong> or less. With even basic improvements, you could
          double that value within a year.
        </p>
        <p>These deals aren&rsquo;t hard to find. People just don&rsquo;t know what to look for.</p>

        <h2>What Makes a Good Deal</h2>

        <h3 style={{ color: 'var(--gold)' }}>Stable cash flow</h3>
        <p>Is the business already making consistent money? You want traction, not a turnaround project.</p>

        <h3 style={{ color: 'var(--gold)' }}>Low owner involvement</h3>
        <p>Can you run it without working 24/7? The best acquisitions have operations that don&rsquo;t depend on the founder being present.</p>

        <h3 style={{ color: 'var(--gold)' }}>Growth potential</h3>
        <p>Is there an obvious way to improve it &mdash; better marketing, new offers, a revenue stream that was never activated? The improvement should be clear, not speculative.</p>

        <figure className="story-img">
          <ShimmerImage src="/images/stories/diamonds/zeroto.png" alt="Newsletter case study: 5,000 readers, $0 revenue to $2,500 per month passive income" width={1200} height={675} />
        </figure>

        <h2>The Mindset Shift</h2>
        <p>
          Most buyers search for businesses that are already optimised &mdash; clean financials,
          steady growth, minimal work required. But those businesses are priced accordingly. Often
          at premiums that eliminate the upside entirely.
        </p>
        <p>
          The real opportunity is in businesses that look rough on the surface but have solid
          foundations underneath. An under-monetised newsletter. A SaaS tool with loyal users but
          no marketing. An e-commerce store with great products and terrible SEO. These are the
          diamonds.
        </p>

        <div className="metrics-strip">
          <div className="metric">
            <div className="metric-value" style={{ color: 'var(--gold)' }}>1M+</div>
            <div className="metric-label">Small Businesses Available</div>
          </div>
          <div className="metric">
            <div className="metric-value" style={{ color: 'var(--gold)' }}>2&ndash;3x</div>
            <div className="metric-label">Typical Listing Multiple</div>
          </div>
          <div className="metric">
            <div className="metric-value" style={{ color: 'var(--gold)' }}>$0 &rarr; $2.5K/mo</div>
            <div className="metric-label">Newsletter Case Study</div>
          </div>
          <div className="metric">
            <div className="metric-value" style={{ color: 'var(--gold)' }}>2x</div>
            <div className="metric-label">Potential Valuation Increase</div>
          </div>
        </div>

        <h2>What&rsquo;s Your Biggest Roadblock?</h2>
        <p>If any of these sound familiar, you&rsquo;re not alone:</p>
        <ul className="constraint-list">
          <li>I don&rsquo;t know where to find good deals.</li>
          <li>I&rsquo;m not sure how to value a business.</li>
          <li>I don&rsquo;t have enough cash to get started.</li>
          <li>I&rsquo;m nervous about running a business after I buy it.</li>
          <li>I don&rsquo;t even know where to begin.</li>
        </ul>
        <p>
          If this is something you&rsquo;ve been curious about &mdash; or even if you&rsquo;re just
          confused by how it all works &mdash; reach out. Happy to explain it or point you in the
          right direction.
        </p>

        <div className="story-coda">
          <div className="coda-text">
            The best deals are not the ones everyone is bidding on. They are the ones nobody else bothered to look at twice.
          </div>
        </div>
      </article>
    </>
  );
}
