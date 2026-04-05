"use client";
import { useCallback } from 'react';
import { useReadingProgressAndShareBar } from '@/components/useReadingProgressAndShareBar';
import Link from 'next/link';
import ShimmerImage from '@/components/ShimmerImage';

export default function StoryEditionZero() {
  useReadingProgressAndShareBar();

  const shareTwitter = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Edition Zero: How This Is Bizness Began , via @kautilya');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  }, []);

  const shareLinkedIn = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  }, []);

  const shareEmail = useCallback(() => {
    const subject = encodeURIComponent('Edition Zero: How This Is Bizness Began');
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
        <Link href="/stories" className="back-link">&larr; Stories</Link>
        <div className="meta-row">
          <span className="meta-tag sector">Newsletter &amp; Media</span>
          <span className="meta-tag geo">Global</span>
          <span className="meta-tag stage">Edition Zero &middot; May 2023</span>
        </div>
        <h1>Edition Zero: How This Is Bizness Began</h1>
        <div className="subtitle">
          The origin story of a weekly newsletter built around one conviction: you don&rsquo;t need a lot of money to buy a business. You just need to start looking.
        </div>
        <div className="story-date">May 1, 2023</div>
        <div className="hero-line" />
      </div>

      {/* STORY BODY */}
      <article className="story-body" id="storyBody">
        <p>
          Hey guys, I hope you&rsquo;re having a great day. Welcome to edition zero of my newsletter,
          This Is Bizness &mdash; a weekly newsletter every Sunday sharing my passion for buying and
          selling small businesses.
        </p>
        <p>
          If you&rsquo;re curious about the name: inspired by one of my favourite memes ever. Please
          do yourself a favour and watch the video below.
        </p>

        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: 8, marginBottom: 32 }}>
          <iframe
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
            src="https://www.youtube.com/embed/M7AGB7itYFk?si=wC5tx-ZWC_aqa-26&start=10"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        <p>
          Every week I will break down <strong><span style={{ color: 'var(--gold)' }}>5 unique small businesses</span></strong>.
          I&rsquo;ll give you a quick snapshot of their business model, financials, and discuss their overall
          potential. I&rsquo;ll also add ratings on Growth &amp; Scalability, Risk, Price to Value,
          Innovation &amp; Tech, and explore growth strategies. I hope to add a deep dive with
          interviews with founders for 1/5 businesses every week.
        </p>
        <p>
          This format is in its early stages so expect it to be constantly changing as I experiment
          with it. Feedback, especially bad, is extremely welcome.
        </p>
        <div className="pull-quote">
          <p>
            My main goal: produce content I would enjoy reading.
          </p>
        </div>

        <h2>Who Was This For?</h2>
        <p>
          The newsletter was designed for <strong>individuals interested in business and investing</strong>,
          with a focus on buying and selling small businesses. Not institutional buyers. Not private equity
          associates running screens. Regular people who wanted to understand a world of transactions that
          most never know exists.
        </p>
        <p>
          With easy-to-digest information and insights, the goal was to make the content{' '}
          <strong>accessible to everyone</strong> who wanted to learn about the world of small businesses
          &mdash; regardless of their starting capital or experience level.
        </p>

        <h2>The Origin Story</h2>
        <p>
          Dev Shah, originally from Mumbai, India, and studying in California, had run a successful college
          admissions consulting side hustle for two years and decided to invest the profits. The stock
          market&rsquo;s <span style={{ color: 'var(--gold)' }}>10% annual returns</span> weren&rsquo;t
          the speed or scale of growth he was looking for. Looking for alternative investments, he realised
          there was no real option that matched his appetite &mdash; until he discovered{' '}
          <span style={{ color: 'var(--gold)' }}>Acquire.com</span>.
        </p>
        <p>
          Acquire.com &mdash; the world&rsquo;s largest startup marketplace with over{' '}
          <strong><span style={{ color: 'var(--gold)' }}>$500M</span></strong> in total acquisitions
          closed and <strong><span style={{ color: 'var(--gold)' }}>150,000+</span></strong> registered
          buyers and sellers &mdash; opened up a whole new world. From developers selling pre-revenue
          projects to well-established businesses with owners looking to retire, the range was staggering.
        </p>

        <figure className="story-img">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/stories/edition-zero/wholenewworld.gif" alt="A whole new world — Aladdin GIF representing discovering Acquire.com" style={{ width: '100%', height: 'auto', borderRadius: 8 }} />
          <figcaption style={{ textAlign: 'center', fontSize: 13, color: 'var(--text-muted)', marginTop: 8, fontStyle: 'italic' }}>Acquire and me</figcaption>
        </figure>

        <div className="pull-quote">
          <p>
            The best part?{' '}
            <span style={{ color: 'var(--gold)' }}>You do not need a lot of money.</span>{' '}
            Most people don&rsquo;t realise that you can seriously look at buying businesses with
            as little as a few thousand dollars.
          </p>
        </div>

        <h2>The Conviction</h2>
        <p>
          The businesses featured were primarily sourced from{' '}
          <span style={{ color: 'var(--gold)' }}>Acquire.com</span> and{' '}
          <span style={{ color: 'var(--gold)' }}>Microns.io</span>, with a focus on the{' '}
          <strong>$5&ndash;$10K range</strong>. The thesis was clear: small acquisitions are not just
          accessible &mdash; they are one of the most underexplored paths to building real wealth
          outside of traditional markets.
        </p>
        <p>
          The format was deliberately early-stage and experimental. Feedback was actively encouraged,
          especially critical feedback. The commitment was to keep it real &mdash; sharing mistakes and
          breakthroughs with equal transparency.
        </p>
        <ul className="constraint-list">
          <li>Weekly breakdown of <span style={{ color: 'var(--gold)' }}>5 unique small businesses</span> with financials and potential analysis</li>
          <li>Ratings on Growth &amp; Scalability, Risk, Price to Value, and Innovation &amp; Tech</li>
          <li>Deep dives with founder interviews for select businesses each week</li>
          <li>Businesses primarily sourced from Acquire.com and Microns.io in the <span style={{ color: 'var(--gold)' }}>$5&ndash;$10K range</span></li>
        </ul>

        <h2>Why This Edition Matters</h2>
        <p>
          Edition Zero was never meant to be polished. It was meant to be{' '}
          <strong>honest</strong>. A founder learning in public, documenting the journey of exploring
          small business acquisitions from the ground up &mdash; the good and the bad.
        </p>
        <p>
          That raw, transparent approach became the DNA of everything that came after. The newsletter
          grew into a community. The community grew into deal flow. And the deal flow grew into{' '}
          <span style={{ color: 'var(--gold)' }}>Kautilya</span> &mdash; a firm built on the conviction
          that the best acquisitions happen when you understand markets deeply enough to see what others miss.
        </p>
        <p>
          Every case study on this site, every deal closed, every pipeline built &mdash; it traces back
          to this moment. A first edition. A Sunday newsletter. And the belief that{' '}
          <em>you have to learn to walk before you can run</em>.
        </p>

        <div className="metrics-strip">
          <div className="metric">
            <div className="metric-value" style={{ color: 'var(--gold)' }}>May 2023</div>
            <div className="metric-label">First Edition Published</div>
          </div>
          <div className="metric">
            <div className="metric-value" style={{ color: 'var(--gold)' }}>5</div>
            <div className="metric-label">Businesses Per Edition</div>
          </div>
          <div className="metric">
            <div className="metric-value" style={{ color: 'var(--gold)' }}>$5–$10K</div>
            <div className="metric-label">Target Acquisition Range</div>
          </div>
          <div className="metric">
            <div className="metric-value" style={{ color: 'var(--gold)' }}>150K+</div>
            <div className="metric-label">Acquire.com Buyers &amp; Sellers</div>
          </div>
        </div>

        <div className="story-coda">
          <div className="coda-text">
            Every firm has a first page. This was ours.
          </div>
        </div>
      </article>
    </>
  );
}
