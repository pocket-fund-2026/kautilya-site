"use client";
import { useCallback } from 'react';
import { useReadingProgressAndShareBar } from '@/components/useReadingProgressAndShareBar';
import Link from 'next/link';
import ShimmerImage from '@/components/ShimmerImage';

export default function StorySourcely() {
  useReadingProgressAndShareBar();

  const shareTwitter = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('My First Bizness Acquisition: Sourcely, an AI student tool with $500 MRR for $4k , via @kautilya');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  }, []);

  const shareLinkedIn = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  }, []);

  const shareEmail = useCallback(() => {
    const subject = encodeURIComponent('My First Bizness Acquisition: Sourcely');
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
          <span className="meta-tag sector">AI / EdTech</span>
          <span className="meta-tag geo">Acquire.com</span>
          <span className="meta-tag stage">First Acquisition &middot; Jun 2023</span>
        </div>
        <h1>My First Bizness Acquisition: An AI Student Tool with $500 MRR for $4K</h1>
        <div className="subtitle">
          How we found, bought, and grew Sourcely &mdash; an AI-powered source-finding tool for students &mdash; from $500 MRR to $4.5K MRR in five months.
        </div>
        <div className="story-date">June 9, 2023</div>
        <div className="hero-line" />
      </div>

      <article className="story-body" id="storyBody">

        <figure className="story-img">
          <ShimmerImage src="/images/stories/sourcely/logo_sourcely.png" alt="Sourcely logo — AI-powered source finding tool for students" width={1200} height={675} />
        </figure>

        <p>
          I am excited to announce that we are the new owners of{' '}
          <strong><span style={{ color: 'var(--gold)' }}>Sourcely</span></strong>, an innovative
          AI-powered source finding tool that makes research easier for students. We are committed to
          building on the great foundation laid by the previous owners and taking Sourcely to even
          greater heights (MRR!).
        </p>
        <p>
          Wait&hellip; we? Yes sir &mdash; I bought this business with a partner:{' '}
          <strong>@elmanmansimov</strong>. He&rsquo;s worked with DeepMind and Google before and is
          currently at AWS. He has his{' '}
          <strong><span style={{ color: 'var(--gold)' }}>Ph.D. in AI from NYU</span></strong>, is an
          AI GOAT, and will be the technical genius behind Sourcely going forward.
        </p>

        <h2>How It Started</h2>

        <figure className="story-img">
          <ShimmerImage src="/images/stories/sourcely/twitter.png" alt="Twitter DM thread showing how Dev Shah connected with Elman Mansimov to co-acquire Sourcely" width={1200} height={675} />
        </figure>

        <p>
          Me being the young savvy business genius I am &mdash; I easily convinced him to partner up.
          Fast forward a month later, on 22 May, we closed the deal for Sourcely at{' '}
          <strong><span style={{ color: 'var(--gold)' }}>$4,000</span></strong>{' '}
          (<span style={{ color: 'var(--gold)' }}>8x multiple of MRR</span>). It was a great price
          mainly because college had just ended for the summer and we suspected many users would churn
          over the next few weeks. The old owners also really wanted to sell.
        </p>

        <h2>How Did We Find Sourcely?</h2>
        <p>
          Originally on <strong>Microns.io</strong> &mdash; but at that time they had received an
          offer for{' '}
          <span style={{ color: 'var(--gold)' }}>$7,000</span>, feeling the price was too high, we
          let it go. Then I came across them again on{' '}
          <strong>Acquire.com</strong> at a lower price. We quickly finished the deal after that for{' '}
          <strong><span style={{ color: 'var(--gold)' }}>$4,000</span></strong> with Elman and I both
          buying in.
        </p>

        <div className="pull-quote">
          <p>
            We recognized the potential the site had &mdash; it was at a decent MRR through{' '}
            <span style={{ color: 'var(--gold)' }}>organic traffic</span> with a subpar landing page.
            Optimize a few things, add more features, and we could provide a lot more value.
          </p>
        </div>

        <h2>Why Sourcely? Our Future Goals</h2>
        <p>
          As a student, I have dealt with the source-finding problem many times. I felt I had a good
          idea of the market, its problems, and a network to act as initial channels of distribution.{' '}
          <em>You will see building for students, as a student, be a common theme around here.</em>
        </p>
        <p>
          In the next 12 months, we hope to{' '}
          <strong><span style={{ color: 'var(--gold)' }}>10x Sourcely to $5,000 MRR</span></strong>{' '}
          before evaluating a sale at{' '}
          <strong>4x $60K ARR = <span style={{ color: 'var(--gold)' }}>$240K</span></strong>.
        </p>

        <h2>So How Are We Going to Turn $4K &rarr; $240K?</h2>
        <p>
          First order of business is to <strong>optimize everything</strong> to improve conversion
          rates and traffic. That includes remaking the website with better copy, a better landing
          page, and adding guides and videos on how to use the tool &mdash; since we notice many
          users inputting essays incorrectly into the chatbot. Along with this we will begin
          implementing SEO through a blog and promoting more seriously on socials.
        </p>
        <p>
          After that we are experimenting with the pricing system &mdash; adding a{' '}
          <strong>pay-as-you-use token pricing system</strong> to complement the monthly subscription.
          We are also considering a <strong>plagiarism checker</strong> and{' '}
          <strong>citation formatting generator</strong>.
        </p>

        <h2>The Big Picture</h2>

        <p>
          You guys knows how much I love my big picture view so find below a chart of Sourcelys larger vision and planned features roll out.
          I had so much fun thinking about this and making this chart! It really reminded me of why I wanna do this stuff which is just to build
          and have fun with it 
        </p>
        <figure className="story-img">
          <ShimmerImage src="/images/stories/sourcely/essay.png" alt="Sourcely product map: Citations, Plagiarism checker, Essay builder, and Advanced essay tools planned across four phases" width={1200} height={675} />
        </figure>

        <p>
          The dream would be for Sourcely to become the go-to tool for students to help with essay
          writing. Take a minute to try Sourcely &mdash; you just input your essay and let the AI
          search Google Scholar for relevant sources. Best of all, it&rsquo;s incredibly easy to use.
        </p>
        <p>
          There are obvious synergies with Eleven59 &mdash; similar target markets &mdash; so this
          will essentially be the first Eleven59 tool for students. Let&rsquo;s work together to make
          Sourcely the best tool for students across academic disciplines, from high schoolers to PhD
          candidates.
        </p>

        <div className="metrics-strip">
          <div className="metric">
            <div className="metric-value" style={{ color: 'var(--gold)' }}>$4K</div>
            <div className="metric-label">Acquisition Price</div>
          </div>
          <div className="metric">
            <div className="metric-value" style={{ color: 'var(--gold)' }}>8x</div>
            <div className="metric-label">MRR Multiple Paid</div>
          </div>
          <div className="metric">
            <div className="metric-value" style={{ color: 'var(--gold)' }}>$500</div>
            <div className="metric-label">MRR at Acquisition</div>
          </div>
          <div className="metric">
            <div className="metric-value" style={{ color: 'var(--gold)' }}>$240K</div>
            <div className="metric-label">Target Exit Valuation</div>
          </div>
        </div>

        <div className="story-coda">
          <div className="coda-text">
            The best businesses to buy are the ones already working &mdash; just waiting for the right owner.
          </div>
        </div>
      </article>
    </>
  );
}
