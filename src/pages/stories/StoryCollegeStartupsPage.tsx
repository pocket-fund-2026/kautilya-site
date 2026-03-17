import { useCallback } from 'react';
import { useReadingProgressAndShareBar } from '../../components/useReadingProgressAndShareBar';
import { Link } from 'react-router-dom';

export default function StoryCollegeStartupsPage() {
  useReadingProgressAndShareBar();

  const shareTwitter = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('10 Reasons Why Now Is the Best Time to Start a Business in College — via @kautilya');
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
        <Link to="/stories" className="back-link">&larr; Stories</Link>
        <div className="meta-row">
          <span className="meta-tag sector">Entrepreneurship</span>
          <span className="meta-tag geo">Global</span>
          <span className="meta-tag stage">College Startups &middot; Feb 2024</span>
        </div>
        <h1>10 Reasons Why Now Is the Best Time to Start a Business in College</h1>
        <div className="subtitle">
          Reduced startup costs, AI-driven productivity, and a generation-wide shift toward entrepreneurship make this the most accessible era to build.
        </div>
        <div className="hero-line" />
      </div>

      <article className="story-body" id="storyBody">
        <p>
          The barrier to entry has dramatically lowered. Where previous generations needed significant capital
          for physical infrastructure, today&rsquo;s aspiring entrepreneurs need a couple of hours a week,
          a Shopify store, and very little upfront cost. Print-on-demand models and no-code tools eliminate
          inventory requirements entirely.
        </p>

        <div className="pull-quote">
          <p>
            The share of people under 30 who own a business has fallen by 65% since the 1980s. The opportunity gap is widening &mdash; and that is exactly where you step in.
          </p>
        </div>

        <h2>1. Reduced Startup Risk</h2>
        <p>
          Starting a business no longer requires significant capital. No-code tools, print-on-demand, and
          cloud infrastructure mean you can test ideas with near-zero upfront cost.
        </p>

        <h2>2. Historical Opportunity</h2>
        <p>
          Young business ownership has declined significantly. Only 2% of millennials were self-employed in
          2014, compared to 7.6% of Generation X and 8.3% of baby boomers. The competitive landscape for
          young founders has never been thinner.
        </p>

        <h2>3. Record Business Formation</h2>
        <p>
          2023 saw unprecedented startup activity: 5.48 million new businesses launched &mdash; a 56.7% increase
          from 2019. The macro environment favours builders.
        </p>

        <h2>4. Technology Democratisation</h2>
        <p>
          No-code platforms like Bubble, Shopify, and Wix eliminate technical barriers. Global markets enable
          selling and hiring worldwide without geographic constraints.
        </p>

        <h2>5. AI-Driven Productivity</h2>
        <p>
          Artificial intelligence has increased individual productivity significantly, allowing solo entrepreneurs
          to accomplish what previously required a team.
        </p>

        <h2>6. Knowledge Accessibility</h2>
        <p>
          YouTube and platforms like Khan Academy provide free education, reducing dependence on traditional
          institutions. The knowledge gap between a degree and self-education is closing rapidly.
        </p>

        <h2>7. Declining Degree Value</h2>
        <p>
          College curricula lag industry development. Practical experience often supersedes academic credentials
          within three years of graduation.
        </p>

        <h2>8. Economic Pressures</h2>
        <p>
          Rising national debt may constrain wage growth, making entrepreneurial ownership more attractive than
          traditional employment as a path to wealth.
        </p>

        <h2>9. Market Consolidation</h2>
        <p>
          Competitor closures create market vacancies. Sixty percent of COVID-era closures never reopened,
          leaving opportunities for new entrants.
        </p>

        <h2>10. Succession Opportunities</h2>
        <p>
          Between 2000 and 2020, business owners at retirement age increased 87%, creating a wave of acquisition
          possibilities for the next generation.
        </p>

        <div className="pull-quote">
          <p>
            Build an audience through consistent content. Start low-effort ventures targeting niche markets.
            Embrace failure as learning rather than loss.
          </p>
        </div>

        <div className="metrics-strip">
          <div className="metric">
            <div className="metric-value">5.48M</div>
            <div className="metric-label">New Businesses in 2023</div>
          </div>
          <div className="metric">
            <div className="metric-value">65%</div>
            <div className="metric-label">Decline in Young Ownership</div>
          </div>
          <div className="metric">
            <div className="metric-value">87%</div>
            <div className="metric-label">Increase in Retiring Owners</div>
          </div>
          <div className="metric">
            <div className="metric-value">60%</div>
            <div className="metric-label">COVID Closures Never Reopened</div>
          </div>
        </div>

        <div className="story-coda">
          <div className="coda-text">
            The best time to start was yesterday. The second best time is right now &mdash; while you are still in college.
          </div>
        </div>
      </article>
    </>
  );
}
