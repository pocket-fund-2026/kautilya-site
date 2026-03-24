"use client";
import { useCallback } from 'react';
import { useReadingProgressAndShareBar } from '@/components/useReadingProgressAndShareBar';
import Link from 'next/link';
import Image from 'next/image';

export default function Story200kDeals() {
  useReadingProgressAndShareBar();

  const shareTwitter = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('How We Closed $200K Worth of Deals in 6 Months — via @kautilya');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  }, []);

  const shareLinkedIn = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  }, []);

  const shareEmail = useCallback(() => {
    const subject = encodeURIComponent('How We Closed $200K Worth of Deals in 6 Months');
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
          <span className="meta-tag sector">Advisory &amp; Deals</span>
          <span className="meta-tag geo">Bombay / Global</span>
          <span className="meta-tag stage">Deal Closing &middot; Feb 2026</span>
        </div>
        <h1>How We Closed $200K Worth of Deals in 6 Months</h1>
        <div className="subtitle">
          Five advisory deals, an eleven-person team, and the shift from buying businesses ourselves to helping others buy theirs.
        </div>
        <div className="hero-line" />
      </div>

      <article className="story-body" id="storyBody">
        <p>
          In six months, we closed five advisory deals totalling $200,000. The team expanded from one
          person to eleven, with operations established in Bombay. What started as personal acquisitions
          evolved into something larger: helping other entrepreneurs navigate the acquisition process.
        </p>

        <div className="pull-quote">
          <p>
            Creative structures that align incentives matter more than headline price. Most deals
            collapse over risk allocation, not valuation.
          </p>
        </div>

        <figure className="story-img">
          <Image src="/images/stories/200k/five-deals.png" alt="Five chess pieces representing the five advisory deals closed by Kautilya totalling $200K" width={1200} height={675} />
        </figure>

        <h2>The Five Deals</h2>

        <h2>Runify &mdash; $110K</h2>
        <p>
          A mobile running app generating approximately $2K monthly revenue. Structured with $30K upfront
          and the remainder as an earnout over 12&ndash;18 months tied to retention metrics. Completed in
          45 days.
        </p>

        <h2>Dino Games &mdash; $39K</h2>
        <p>
          A mobile game producing $3K monthly profit on minimal ad spend with strong margins. Discovered
          through Reddit. Payment split 56% at close, 44% deferred without growth conditions.
        </p>

        <h2>Note Companion &mdash; $30K</h2>
        <p>
          An Obsidian plugin generating $1,500 monthly with zero founder effort. Found via Twitter. Terms:
          one-third upfront, two-thirds over twelve months.
        </p>

        <h2>SmartPrompt &mdash; $12K</h2>
        <p>
          An AI education platform with 2.5 million conversations and substantial monthly active users.
          All-cash transaction completed in twelve weeks for a first-time acquirer.
        </p>

        <h2>Daily Trades Newsletter &mdash; $8K</h2>
        <p>
          A finance publication with 16,000 subscribers. Cash purchase by a media portfolio operator.
        </p>

        <figure className="story-img">
          <Image src="/images/stories/200k/architecture.png" alt="Geometric steel beams symbolising structured deal architecture in micro-acquisitions" width={1200} height={675} />
        </figure>

        <h2>Key Learning: Deal Structure</h2>
        <p>
          Earnout provisions protecting buyers while providing seller confidence proved critical to closing
          transactions. The headline price is rarely where deals die. Risk allocation is. When both sides
          feel protected, deals close.
        </p>

        <figure className="story-img">
          <Image src="/images/stories/200k/hidden-channel.png" alt="Dimly lit desk with laptop showing off-market deal sourcing channels like Reddit and Twitter" width={1200} height={675} />
        </figure>

        <h2>Key Learning: Off-Market Sourcing</h2>
        <p>
          Marketplace platforms attract competition and higher prices. Superior deals emerge through direct
          relationships. Founder communities &mdash; Reddit&rsquo;s r/SideProject, Twitter threads, indie
          forums &mdash; proved to be reliable sourcing channels, requiring approximately 30 minutes of
          daily review.
        </p>

        <h2>Key Learning: Buyer Decision Frameworks</h2>
        <p>
          First-time acquirers succeed using structured filtering systems: defining non-negotiables,
          evaluation criteria, and automatic disqualifiers before reviewing deals. This prevents analysis
          paralysis and accelerates closing.
        </p>

        <h2>What Comes Next</h2>
        <p>
          The objective: $1M in closed deals within six months while expanding upmarket toward
          $100K&ndash;$500K acquisitions and structured recurring advisory relationships. The playbook
          is proven. Now it scales.
        </p>

        <div className="metrics-strip">
          <div className="metric">
            <div className="metric-value">$200K</div>
            <div className="metric-label">Total Deals Closed</div>
          </div>
          <div className="metric">
            <div className="metric-value">5</div>
            <div className="metric-label">Advisory Deals</div>
          </div>
          <div className="metric">
            <div className="metric-value">6 mo</div>
            <div className="metric-label">Time to Close All Five</div>
          </div>
          <div className="metric">
            <div className="metric-value">11</div>
            <div className="metric-label">Team Members</div>
          </div>
        </div>

        <div className="story-coda">
          <div className="coda-text">
            The shift from buying to advising is not a pivot. It is proof that the process works &mdash; and that it transfers.
          </div>
        </div>
      </article>
    </>
  );
}
