"use client";
import { useCallback } from 'react';
import { useReadingProgressAndShareBar } from '@/components/useReadingProgressAndShareBar';
import Link from 'next/link';
import ShimmerImage from '@/components/ShimmerImage';

export default function StoryDealSourcing() {
  useReadingProgressAndShareBar();

  const shareTwitter = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('My Morning Routine Is Looking at Acquire.com for 30 Min , via @kautilya');
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
          Advice on searching for serious buyers &mdash; five tips for finding the needle in the haystack.
        </div>
        <div className="story-date">June 27, 2024</div>
        <div className="hero-line" />
      </div>

      <article className="story-body" id="storyBody">

        <p>
          I don&rsquo;t really have much of a morning routine. I just wake up, start working until I
          get a bit hungry and then have breakfast. I do this pretty much every day.
        </p>
        <p>
          Searching Acquire every day is probably the one habit I stick to daily. It has by far given
          me the most returns out of anything I&rsquo;ve done.
        </p>
        <p>
          Unfortunately Acquire has tens of thousands of businesses and gets 100+ listings every week.
          Despite spending close to 10 hours a week on Acquire I&rsquo;m <strong>never</strong> able
          to go through all the listings. And that&rsquo;s just one marketplace.
        </p>

        <div className="pull-quote">
          <p>
            <span style={{ color: 'var(--gold)' }}>90&ndash;95%</span> of listings on marketplaces
            like Acquire are either stale, without updated stats, dead businesses, have a terrible
            asking price, or just aren&rsquo;t good businesses.
          </p>
        </div>

        <p>
          I find many sellers quite simply a little delusional when it comes to the negatives of their
          business and how much it&rsquo;s worth. At the end of the day, beauty (valuation) is in the
          eye of the beholder. Your business is only worth what you can convince others to pay &mdash;
          not a standard multiple you&rsquo;ve fantasised about.
        </p>

        <h2>The Numbers Behind the Process</h2>
        <p>
          We&rsquo;ve bought <strong><span style={{ color: 'var(--gold)' }}>6 businesses</span></strong>{' '}
          so far. For each deal closed we&rsquo;ve gone through at least 100&ndash;200 businesses.
          Maybe even more. That&rsquo;s almost{' '}
          <strong><span style={{ color: 'var(--gold)' }}>1,000</span></strong> different micro
          startups reviewed.
        </p>

        <figure className="story-img">
          <ShimmerImage src="/images/stories/deal-sourcing/thousand.png" alt="From browse to buy: ~1,000 businesses reviewed, 100–200 evaluated per deal, multiple negotiations, 6 acquisitions closed" width={1200} height={675} />
        </figure>

        <p>
          This has given me a real intuition for acquiring micro startups &mdash; how to value them,
          and how to interact with sellers.
        </p>
        <p>
          Here are my 5 tips for finding the needle (your ideal micro startup) in the haystack
          (thousands of businesses for sale). For serious buyers only.
        </p>

        <h2>Five Tips for Serious Buyers</h2>

        <h3 style={{ color: 'var(--gold)' }}>1. Check marketplaces 3x a week</h3>
        <p>
          Acquire has over 500,000 registered buyers. The best deals are taken within weeks. If you
          check once a month you&rsquo;re likely to miss them entirely. Most listings are stale and
          will give you a bad impression of what&rsquo;s available &mdash; Acquire is the best
          marketplace by far, and Microns.io also has some solid micro startups.
        </p>

        <h3 style={{ color: 'var(--gold)' }}>2. Analysing listings is like a muscle</h3>
        <p>
          You have to work it out very often to maintain your sense. There are different ways to
          analyse listings and find the right business. For PE firms and startups, there are debt
          constraints or multiples to work within. With micro startups, the potential return depends
          a lot on the buyer and their capabilities. The risk is low when buying for under $5,000
          and the potential reward is quite high if you can make it a viable business.
        </p>

        <h3 style={{ color: 'var(--gold)' }}>3. Filters are your best friend</h3>
        <p>
          Marketplaces have filters around revenue, industry, startup age, number of customers, and
          more. Use them to navigate thousands of listings effectively. Use them as much as you can
          to get a real understanding of the different types of businesses available.
        </p>

        <h3 style={{ color: 'var(--gold)' }}>4. You don&rsquo;t need the perfect deal to enter negotiations</h3>
        <p>
          Finding the right business is extremely important but it&rsquo;s just the first step. You
          need to know how to value the business, conduct due diligence, negotiate a good deal, and
          then actually run it. You need to enter negotiations multiple times before learning the
          ropes and crafting the perfect deal.
        </p>

        <h3 style={{ color: 'var(--gold)' }}>5. Track things and go back to old deals</h3>
        <p>
          It&rsquo;s important to track and measure your search &mdash; you get a lot of important
          data this way. There&rsquo;s also a lot of alpha in going back to deals that didn&rsquo;t
          work out but are still on the market. After a couple of months, many sellers are willing
          to give you a more favourable deal in order to close. Go back to old deals you found
          interesting to see if there&rsquo;s a way to make them work.
        </p>

        <figure className="story-img">
          <ShimmerImage src="/images/stories/deal-sourcing/morning.png" alt="5 habits of serious acquirers: check frequently, build analytical skill, use filters, negotiate early, track and revisit" width={1200} height={675} />
        </figure>

        <h2>Here&rsquo;s a Look at Our Acquire CRM</h2>

        <figure className="story-img">
          <ShimmerImage src="/images/stories/deal-sourcing/crm.png" alt="Kautilya's Acquire CRM spreadsheet tracking business name, asking price, type, industry, description, and deal phase" width={1200} height={675} />
        </figure>

        <div className="metrics-strip">
          <div className="metric">
            <div className="metric-value" style={{ color: 'var(--gold)' }}>6</div>
            <div className="metric-label">Acquisitions Completed</div>
          </div>
          <div className="metric">
            <div className="metric-value" style={{ color: 'var(--gold)' }}>~1,000</div>
            <div className="metric-label">Businesses Reviewed</div>
          </div>
          <div className="metric">
            <div className="metric-value" style={{ color: 'var(--gold)' }}>30 min</div>
            <div className="metric-label">Daily Sourcing Habit</div>
          </div>
          <div className="metric">
            <div className="metric-value" style={{ color: 'var(--gold)' }}>3x/week</div>
            <div className="metric-label">Minimum Check Frequency</div>
          </div>
        </div>

        <div className="story-coda">
          <div className="coda-text">
            Deal sourcing is not a task. It is a discipline. Thirty minutes a day compounds into an unfair advantage.
          </div>
        </div>

        <p style={{ fontStyle: 'italic', color: 'var(--text-muted)', fontSize: 14, marginTop: 32 }}>
          Best of luck to those seriously looking at acquiring a business. It takes time to get a good system going, but once it&rsquo;s in place it really becomes easy to find deals with high alpha.
        </p>
      </article>
    </>
  );
}
