import { useCallback } from 'react';
import { useReadingProgressAndShareBar } from '../../components/useReadingProgressAndShareBar';
import { Link } from 'react-router-dom';

export default function StoryPocketFundPage() {
  useReadingProgressAndShareBar();

  const shareTwitter = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('The Pocket Fund: Where success isn\u2019t defined by VC funding — via @kautilya');
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
        <Link to="/stories" className="back-link">&larr; Stories</Link>
        <div className="meta-row">
          <span className="meta-tag sector">Acquisition Entrepreneurship</span>
          <span className="meta-tag geo">Claremont, CA</span>
          <span className="meta-tag stage">The Pocket Fund &middot; Oct 2023</span>
        </div>
        <h1>The Pocket Fund: Where Success Isn&rsquo;t Defined by the VC Funding You Raise</h1>
        <div className="subtitle">
          A student-led $5,000 search fund built around one idea: you can buy, operate, and sell small online businesses without raising venture capital.
        </div>
        <div className="hero-line" />
      </div>

      <article className="story-body" id="storyBody">
        <p>
          Welcome to the Pocket Fund edition. What started as a club at Claremont McKenna College became a
          community for entrepreneurs who measure success differently &mdash; not by how much VC funding you
          raise, but by how resourcefully you can build.
        </p>
        <p>
          The premise was simple: a $5,000 search fund targeting small online businesses. Find a business on
          Acquire.com, operate it for 12&ndash;18 months, sell for a 5x valuation, and repeat. No pitch decks.
          No Series A. Just acquisition entrepreneurship at its most accessible.
        </p>
        <div className="pull-quote">
          <p>
            Money isn&rsquo;t the motivating factor here. Do it for the love of entrepreneurship.
          </p>
        </div>

        <h2>What Is Pocket Fund?</h2>
        <p>
          Pocket Fund addresses what we saw as insufficient recognition for student entrepreneurs pursuing
          sustainable, profitable businesses rather than moonshot ventures. The organisation prioritises
          open-source practices, sharing activities and learnings with members and the broader community.
        </p>
        <p>
          The core objective: demonstrate that acquisition entrepreneurship &mdash; buying, running, and selling
          small businesses &mdash; is an accessible path anyone can pursue. Donations function as a vote of
          faith rather than equity stakes. Every contribution is welcomed, regardless of size.
        </p>

        <h2>Business Selection Criteria</h2>
        <ul className="constraint-list">
          <li>Online businesses under $5,000</li>
          <li>Solves niche problems with minimal direct competition</li>
          <li>Focuses on untapped potential and leverages member strengths</li>
          <li>Bootstrapped, profitable operations emphasising systems and automation</li>
        </ul>

        <h2>The Three-Step Model</h2>
        <p>
          The model is deliberately simple. Step one: find and purchase a business on Acquire.com. Step two:
          operate the business for 12&ndash;18 months, applying systems thinking and lean operational
          improvements. Step three: sell for a 5x valuation. Then repeat the cycle.
        </p>
        <p>
          This is not about building something from zero. It is about recognising value that already exists
          and having the discipline to grow it.
        </p>

        <h2>Founder Credentials</h2>
        <p>
          Dev Shah built a side business generating $25,000 at age 18. He then acquired Sourcely.ai for
          $4,000, growing it to a $100,000 valuation within three months. These early wins proved the thesis:
          small acquisitions, executed well, can generate outsized returns.
        </p>

        <h2>Why This Edition Matters</h2>
        <p>
          Pocket Fund was never about the money. It was about proving a model &mdash; that students with limited
          capital and unlimited energy could compete in the acquisition space. The expansion plans include
          establishing chapters across U.S. colleges, prioritising genuine leadership qualities over
          institutional prestige.
        </p>
        <p>
          Every deal we close today traces back to this conviction. You do not need permission or a large
          balance sheet. You need a process, a community, and the willingness to start.
        </p>

        <div className="metrics-strip">
          <div className="metric">
            <div className="metric-value">Oct 2023</div>
            <div className="metric-label">Pocket Fund Launched</div>
          </div>
          <div className="metric">
            <div className="metric-value">$5K</div>
            <div className="metric-label">Search Fund Target</div>
          </div>
          <div className="metric">
            <div className="metric-value">5x</div>
            <div className="metric-label">Target Valuation Multiple</div>
          </div>
          <div className="metric">
            <div className="metric-value">$4K &rarr; $100K</div>
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
