"use client";
import { useCallback } from 'react';
import { useReadingProgressAndShareBar } from '@/components/useReadingProgressAndShareBar';
import Link from 'next/link';
import ShimmerImage from '@/components/ShimmerImage';

export default function StoryPocketFund() {
  useReadingProgressAndShareBar();

  const shareTwitter = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('The Pocket Fund: Where success isn\u2019t defined by VC funding , via @kautilya');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  }, []);

  const shareLinkedIn = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  }, []);

  const shareEmail = useCallback(() => {
    const subject = encodeURIComponent('The Pocket Fund: Where Success Isn\u2019t Defined by VC Funding');
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
          <span className="meta-tag sector">Acquisition Entrepreneurship</span>
          <span className="meta-tag geo">Claremont, CA</span>
          <span className="meta-tag stage">The Pocket Fund &middot; Oct 2023</span>
        </div>
        <h1>The Pocket Fund: Where Success Isn&rsquo;t Defined by the VC Funding You Raise</h1>
        <div className="subtitle">
          A student-led <span style={{ color: 'var(--gold)' }}>$5,000</span> search fund built around one idea: you can buy, operate, and sell small online businesses without raising venture capital.
        </div>
        <div className="story-date">October 2, 2023</div>
        <div className="hero-line" />
      </div>

      <article className="story-body" id="storyBody">

        <p>
          Welcome to The Pocket Fund Edition &mdash; and a big shout out to the{' '}
          <strong><span style={{ color: 'var(--gold)' }}>88 new subscribers</span></strong> this week!
          (I had 100 before so this is a big increase lol.)
        </p>
        <p>
          Sorry about the month-long break. Fortunately, when you work for yourself, you can do
          whatever you want to. I was working on a lot and needed to take a break to focus on the
          businesses. I have many exciting things coming and we&rsquo;ll be back to regular programming
          this week onwards. I&rsquo;ve been waiting a while to write this edition &mdash; let&rsquo;s
          get right into it.
        </p>

        <h2>What Is Pocket Fund?</h2>
        <p>
          Pocket Fund is a home for a <strong>new kind of entrepreneur</strong> &mdash; where success
          isn&rsquo;t defined by how much VC funding you raise.
        </p>
        <p>
          Pocket Fund will start with a focus on{' '}
          <span style={{ color: 'var(--gold)' }}>acquisition entrepreneurship</span> with a{' '}
          <strong><span style={{ color: 'var(--gold)' }}>$5,000 search fund</span></strong> for small
          online businesses. The first chapter of Pocket Fund will operate as a club out of{' '}
          <strong>Claremont McKenna College</strong>.
        </p>

        <div className="pull-quote">
          <p>
            Money isn&rsquo;t the motivating factor here.{' '}
            <span style={{ color: 'var(--gold)' }}>Do it for the love of entrepreneurship.</span>
          </p>
        </div>

        <h2>The Simple 3-Step Plan</h2>

        <figure className="story-img">
          <ShimmerImage src="/images/stories/pocket-fund/cycle.png" alt="The Pocket Fund three-step cycle: Find on Acquire.com, Operate for 12–18 months, Sell at 5x valuation, then repeat" width={1200} height={675} />
        </figure>

        <p>
          The model is deliberately simple:
        </p>
        <ul className="constraint-list">
          <li><strong><span style={{ color: 'var(--gold)' }}>1.</span></strong> Find &amp; buy a business on Acquire.com</li>
          <li><strong><span style={{ color: 'var(--gold)' }}>2.</span></strong> Run the business for <strong>12&ndash;18 months</strong></li>
          <li><strong><span style={{ color: 'var(--gold)' }}>3.</span></strong> Sell at a <strong>5x valuation</strong></li>
          <li><strong><span style={{ color: 'var(--gold)' }}>Bonus:</span></strong> Repeat</li>
        </ul>
        <p>
          Pocket Fund has been started to combat what I feel is a lack of recognition given to student
          entrepreneurs who aren&rsquo;t looking to raise millions to found a &lsquo;moonshot&rsquo;
          startup. Entrepreneurs who are just looking to follow their passions, start their own
          businesses, and define success in their own way.
        </p>
        <p>
          Pocket Fund is committed to <strong>open-source practices</strong> &mdash; all activities and
          learnings are shared openly with members and the broader community.
        </p>

        <h2>What Kind of Business Will We Buy?</h2>
        <ul className="constraint-list">
          <li>Online business for <span style={{ color: 'var(--gold)' }}>&lt;$5,000</span></li>
          <li>Solving a niche problem with little direct competition</li>
          <li>Focus on finding untapped potential</li>
          <li>Takes advantage of the existing strengths of members</li>
          <li>Bootstrapped, run with an eye on profitability and sustainable growth &mdash; focus on systems and automation</li>
        </ul>
        <p>
          We believe in growing a <strong>healthy and profitable business</strong> and are not trying to
          raise money for a moonshot start-up.
        </p>

        <h2>Why Us?</h2>
        <p>
          We aren&rsquo;t entirely sure how &mdash; that&rsquo;s kind of the fun of it. If we knew
          exactly what to do, then what&rsquo;s the point? But here&rsquo;s some success I&rsquo;ve
          had in the past:
        </p>
        <ul className="constraint-list">
          <li>Built a side hustle to <strong><span style={{ color: 'var(--gold)' }}>$25,000</span></strong> at age 18</li>
          <li>Acquired <strong>Sourcely.ai</strong> for <span style={{ color: 'var(--gold)' }}>$4,000</span>, grew it to a valuation of{' '}
            <strong><span style={{ color: 'var(--gold)' }}>$100K</span></strong> in 3 months</li>
        </ul>

        <figure className="story-img">
          <ShimmerImage src="/images/stories/pocket-fund/100k.png" alt="Pocket Fund acquisition metrics: $4K cost, $100K valuation, 5x target exit, 12–18 month hold" width={1200} height={675} />
        </figure>

        <h2>Future Plans</h2>
        <p>
          We&rsquo;re only just getting started. We plan to open chapters in colleges across the US
          with a focus on recruiting <strong>genuine leaders</strong>, rather than school prestige.
        </p>
        <p>
          Where we&rsquo;re at right now: raised{' '}
          <strong><span style={{ color: 'var(--gold)' }}>$4,000</span></strong> out of the{' '}
          <span style={{ color: 'var(--gold)' }}>$5,000</span> goal.
        </p>

        <figure className="story-img">
          <ShimmerImage src="/images/stories/pocket-fund/search.png" alt="Success isn't defined by the VC funding you raise — Kautilya PE, Oct 2023" width={1200} height={675} />
        </figure>

        <div className="metrics-strip">
          <div className="metric">
            <div className="metric-value" style={{ color: 'var(--gold)' }}>Oct 2023</div>
            <div className="metric-label">Pocket Fund Launched</div>
          </div>
          <div className="metric">
            <div className="metric-value" style={{ color: 'var(--gold)' }}>$5K</div>
            <div className="metric-label">Search Fund Target</div>
          </div>
          <div className="metric">
            <div className="metric-value" style={{ color: 'var(--gold)' }}>5x</div>
            <div className="metric-label">Target Valuation Multiple</div>
          </div>
          <div className="metric">
            <div className="metric-value" style={{ color: 'var(--gold)' }}>$4K &rarr; $100K</div>
            <div className="metric-label">Sourcely.ai Growth</div>
          </div>
        </div>

        <div className="story-coda">
          <div className="coda-text">
            Success is not defined by the VC funding you raise. It is defined by the businesses you build.
          </div>
        </div>
      </article>
    </>
  );
}
