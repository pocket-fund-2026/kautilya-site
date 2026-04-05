"use client";
import { useCallback } from 'react';
import { useReadingProgressAndShareBar } from '@/components/useReadingProgressAndShareBar';
import Link from 'next/link';
import ShimmerImage from '@/components/ShimmerImage';

export default function StoryCollegeStartups() {
  useReadingProgressAndShareBar();

  const shareTwitter = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('10 Reasons Why Now Is the Best Time to Start a Business in College , via @kautilya');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  }, []);

  const shareLinkedIn = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  }, []);

  const shareEmail = useCallback(() => {
    const subject = encodeURIComponent('10 Reasons Why Now Is the Best Time to Start a Business in College');
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
          <span className="meta-tag sector">Entrepreneurship</span>
          <span className="meta-tag geo">Global</span>
          <span className="meta-tag stage">College Startups &middot; Feb 2024</span>
        </div>
        <h1>10 Reasons Why Now Is the Best Time to Start a Business in College</h1>
        <div className="subtitle">
          Some macro trends + stats + my opinions.
        </div>
        <div className="story-date">February 18, 2024</div>
        <div className="hero-line" />
      </div>

      <article className="story-body" id="storyBody">

        <figure className="story-img">
          <ShimmerImage src="/images/stories/college-startups/best-time-build.png" alt="10 reasons to start a business in college: reduced risk, historical opportunity, record formation, tech democratisation, and more" width={1200} height={675} />
        </figure>

        <h2 style={{ color: 'var(--gold)' }}>1. Reducing Risk of Starting Up and Failure</h2>
        <p>
          20 years ago you needed investment of some kind for a physical location, inventory, or other
          high costs like legality and registration. Now all you need is a couple of hours a week and a
          Shopify store with very little upfront cost and high potential.
        </p>
        <p>
          Consider the print-on-demand model with a Shopify store &mdash; no inventory or physical store
          needed. Costs are restricted to hosting and order fulfillment. Similarly, creating software
          involves minimal risks; once developed, maintenance expenses are low without requiring extensive
          upfront investments.
        </p>
        <p>
          In the case of failure, you can just start again. A worst case scenario of{' '}
          <strong><span style={{ color: 'var(--gold)' }}>0</span></strong> is much better than{' '}
          <strong><span style={{ color: 'var(--gold)' }}>&ndash;ve</span></strong>.
        </p>

        <h2 style={{ color: 'var(--gold)' }}>2. The Generation Before Us Started the Least Businesses Ever</h2>
        <p>
          All these mofos just became employees as the corporations grew. According to a WSJ analysis of
          Fed data, the share of people under 30 who own a business has fallen by{' '}
          <strong><span style={{ color: 'var(--gold)' }}>65%</span></strong> since the 1980s and is now
          at a quarter-century low &mdash; only about{' '}
          <strong><span style={{ color: 'var(--gold)' }}>2%</span></strong> of millennials being
          self-employed as of 2014, compared to{' '}
          <span style={{ color: 'var(--gold)' }}>7.6%</span> of Generation X and{' '}
          <span style={{ color: 'var(--gold)' }}>8.3%</span> of baby boomers.
        </p>
        <p>
          During COVID, the overall unemployment rate for young workers aged 16&ndash;24 jumped from{' '}
          <strong>8.4% to 24.4%</strong> from spring 2019 to spring 2020. COVID has accelerated our
          generation&rsquo;s acceptance of self-employment and the gig economy. The opportunity is there
          and I think Gen Z is ready to take it.
        </p>

        <div className="pull-quote">
          <p>
            The share of people under 30 who own a business has fallen by{' '}
            <span style={{ color: 'var(--gold)' }}>65%</span> since the 1980s. The opportunity gap is
            widening &mdash; and that is exactly where you step in.
          </p>
        </div>

        <h2 style={{ color: 'var(--gold)' }}>3. Record Number of New Businesses</h2>
        <p>
          A record-breaking <strong><span style={{ color: 'var(--gold)' }}>5,481,437</span></strong>{' '}
          new businesses were started in 2023 &mdash; the highest year on record, a{' '}
          <strong>56.7% increase</strong> from 2019. The U.S. Chamber of Commerce also reported a
          record-breaking <strong>5.5 million</strong> new business applications filed in 2023. It has
          never been easier to start a business and people are recognising the opportunity.
        </p>

        <h2 style={{ color: 'var(--gold)' }}>4. Lowered Barriers to Entry &mdash; Technology, Capital, Globalisation</h2>
        <p>
          No-code tools like <strong>Bubble, Shopify, Wix</strong> have reduced any tech barriers to
          starting up on the internet. Anyone can set up a Shopify site or basic SaaS in a week. You no
          longer need upfront investment to start up &mdash; preorder waitlists and platforms like
          Kickstarter have changed how you can approach starting. You can hire from and sell to anyone,
          anywhere in the world.
        </p>

        <figure className="story-img">
          <ShimmerImage src="/images/stories/college-startups/ten-jobs.png" alt="Solo entrepreneur managing multiple screens illustrating AI-driven productivity for college founders" width={1200} height={675} />
        </figure>

        <h2 style={{ color: 'var(--gold)' }}>5. Productivity &times; AI</h2>
        <p>
          The productivity of one person has increased{' '}
          <strong><span style={{ color: 'var(--gold)' }}>10x</span></strong> with the introduction of
          AI. We are currently using one of the <em>worst</em> versions of AI. Tools like AI agents
          will change how people approach businesses entirely.
        </p>

        <h2 style={{ color: 'var(--gold)' }}>6. Democratisation of Knowledge</h2>
        <p>
          You can learn pretty much anything you need to from YouTube. There are countless hours of
          lectures and teaching material on every subject made by extremely knowledgeable people. You
          no longer require the systems and processes of institutions to give you an education.
          Companies like Khan Academy and Buildspace will provide options for students to gain an
          education at a much lower cost than before.
        </p>

        <h2 style={{ color: 'var(--gold)' }}>7. The Declining Value of a College Degree</h2>
        <p>
          Colleges are extremely out of touch with the general day-to-day of the higher-value workforce.
          It&rsquo;s generally common for you to learn on the job and not use much of what you learned in
          college after 3 years working. There is a lot of value it provides in terms of being a base and
          other social aspects &mdash; but in absolute terms of its value for employers and, more
          importantly, to prepare its degree holders for the workforce, it has been declining in value.
          Especially as the development of technology outpaced how quickly it could update its curriculum.
        </p>

        <h2 style={{ color: 'var(--gold)' }}>8. The Debt Is Just Too Damn High</h2>
        <p>
          I don&rsquo;t know what the US can do on a 10&ndash;20 year time frame. I think they&rsquo;re
          going to try to grow their way out of the debt &mdash; grow the GDP as much as they can to
          reduce the debt:GDP ratio. It will be extremely hard for{' '}
          <strong>wage growth to keep up</strong>. This will only hasten the erosion of the middle class
          in America. The best way to avoid it will be to capitalise on the growth{' '}
          <span style={{ color: 'var(--gold)' }}>with ownership</span>.
        </p>

        <h2 style={{ color: 'var(--gold)' }}>9. Fewer Businesses = More Opportunity</h2>
        <p>
          The number of startups that have shut down has drastically increased. VC funding has dried up
          as the public markets rally.{' '}
          <strong><span style={{ color: 'var(--gold)' }}>60%</span></strong> of businesses that closed
          during COVID never reopened. There is a lot of market share up for grabs in different
          industries.
        </p>

        <h2 style={{ color: 'var(--gold)' }}>10. Silver Tsunami &mdash; Aging Business Owners Looking to Sell</h2>
        <p>
          Between 2000 and 2020, the number of business owners at full retirement age increased by{' '}
          <strong><span style={{ color: 'var(--gold)' }}>87%</span></strong>. Lots of business owners
          are looking to retire and sell, and there are not enough people willing to take over these
          businesses.
        </p>

        <div className="metrics-strip">
          <div className="metric">
            <div className="metric-value" style={{ color: 'var(--gold)' }}>5.48M</div>
            <div className="metric-label">New Businesses in 2023</div>
          </div>
          <div className="metric">
            <div className="metric-value" style={{ color: 'var(--gold)' }}>65%</div>
            <div className="metric-label">Decline in Young Ownership</div>
          </div>
          <div className="metric">
            <div className="metric-value" style={{ color: 'var(--gold)' }}>87%</div>
            <div className="metric-label">Increase in Retiring Owners</div>
          </div>
          <div className="metric">
            <div className="metric-value" style={{ color: 'var(--gold)' }}>60%</div>
            <div className="metric-label">COVID Closures Never Reopened</div>
          </div>
        </div>

        <h2>Actionable Steps</h2>

        <figure className="story-img">
          <ShimmerImage src="/images/stories/college-startups/start-now.png" alt="The Old Path versus The Builder Path: raise VC vs buy or bootstrap, build from zero vs start with $0, need a team vs AI does the work" width={1200} height={675} />
        </figure>

        <h3 style={{ color: 'var(--gold)' }}>1. Start building an audience</h3>
        <p>
          Post things you find interesting. Expect to post into the void and that your first 100 posts
          will be shit. Go from there.
        </p>

        <h3 style={{ color: 'var(--gold)' }}>2. Start a business with as low effort as possible</h3>
        <p>
          Try to start with a small problem for a niche target audience. Try an agency, Shopify store,
          no-code SaaS. Just make your{' '}
          <strong><span style={{ color: 'var(--gold)' }}>first $1 online</span></strong>.
        </p>

        <h3 style={{ color: 'var(--gold)' }}>3. Seek failure</h3>
        <p>
          Instead of avoiding failure, figure out how you can fail quickly and reframe failure from
          negative to a positive learning experience. Presume you currently know nothing and be hungry
          to learn.
        </p>

        <div className="story-coda">
          <div className="coda-text">
            The best time to start was yesterday. The second best time is right now &mdash; while you are still in college.
          </div>
        </div>
      </article>
    </>
  );
}
