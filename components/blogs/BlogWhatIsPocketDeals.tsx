'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import { useReadingProgressAndShareBar } from '@/components/useReadingProgressAndShareBar';

export default function BlogWhatIsPocketDeals() {
  useReadingProgressAndShareBar();

  const shareTwitter = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("What Pocket Deals is, how Kautilya's acquisition newsletter is structured, and what buyers get, via @microsearchfund");
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  }, []);

  const shareLinkedIn = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  }, []);

  const shareEmail = useCallback(() => {
    const subject = encodeURIComponent('What Is Pocket Deals?');
    const body = encodeURIComponent(`Thought you'd find this useful: ${window.location.href}`);
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
      {/* Only styles not covered by globals.css */}
      <style dangerouslySetInnerHTML={{ __html: `
        .blog-author-byline {
          font-family: var(--font-lora), 'Lora', serif;
          font-size: 13px;
          color: var(--text-muted);
          margin-top: 14px;
          margin-bottom: 0;
        }
        .blog-author-byline a {
          color: var(--gold);
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s;
        }
        .blog-author-byline a:hover { border-bottom-color: var(--gold); }

        .key-takeaways {
          margin: 32px 0;
          padding: 22px 26px;
          border: 1px solid var(--border);
          border-left: 3px solid var(--gold);
          border-radius: 3px;
          background: rgba(255,255,255,0.02);
        }
        .key-takeaways .phase-label { margin-bottom: 12px; }
        .key-takeaways ul { margin: 0; padding-left: 18px; }
        .key-takeaways li {
          font-family: var(--font-lora), 'Lora', serif;
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.8;
        }

        .deal-table-wrap {
          margin: 32px 0;
          border: 1px solid var(--border);
          border-radius: 3px;
          overflow-x: auto;
        }
        .deal-table {
          width: 100%;
          border-collapse: collapse;
          font-family: var(--font-lora), 'Lora', serif;
          font-size: 13.5px;
        }
        .deal-table th {
          text-align: left;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--gold);
          padding: 12px 18px;
          border-bottom: 1px solid var(--border);
          background: rgba(255,255,255,0.02);
        }
        .deal-table td {
          padding: 12px 18px;
          border-bottom: 1px solid var(--border);
          color: var(--text-secondary);
          line-height: 1.6;
          vertical-align: top;
        }
        .deal-table tr:last-child td { border-bottom: none; }
        .deal-table td:first-child {
          color: var(--text-primary);
          font-weight: 500;
          white-space: nowrap;
        }
        @media (max-width: 560px) {
          .deal-table-wrap { overflow-x: visible; }
          .deal-table, .deal-table thead, .deal-table tbody, .deal-table tr, .deal-table td {
            display: block;
            width: 100%;
          }
          .deal-table thead { display: none; }
          .deal-table tr {
            padding: 14px 18px;
            border-bottom: 1px solid var(--border);
          }
          .deal-table tr:last-child { border-bottom: none; }
          .deal-table td {
            padding: 4px 0;
            border-bottom: none;
            white-space: normal;
          }
          .deal-table td:first-child {
            padding-top: 0;
            font-size: 11px;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: var(--gold);
          }
          .deal-table td[data-label]:not(:first-child)::before {
            content: attr(data-label);
            display: block;
            font-size: 10px;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            color: var(--text-muted);
            margin-top: 8px;
          }
        }

        .blog-faq {
          margin-top: 64px;
          padding-top: 48px;
          border-top: 1px solid var(--border);
        }
        .blog-faq-item {
          border-bottom: 1px solid var(--border);
          padding: 22px 0;
        }
        .blog-faq-q {
          font-family: var(--font-fraunces), 'Fraunces', serif;
          font-size: 20px;
          font-weight: 500;
          color: var(--text-primary);
          line-height: 1.35;
          margin-bottom: 10px;
        }
        .blog-faq-a {
          font-family: var(--font-lora), 'Lora', serif;
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.9;
          margin: 0;
        }

        .sources-appendix {
          margin-top: 56px;
          padding-top: 32px;
          border-top: 1px solid var(--border);
        }
        .sources-appendix h3 {
          font-family: var(--font-fraunces), 'Fraunces', serif;
          font-size: 15px;
          letter-spacing: 1px;
          color: var(--text-primary);
          margin: 24px 0 8px;
        }
        .sources-appendix p,
        .sources-appendix li {
          font-family: var(--font-lora), 'Lora', serif;
          font-size: 12.5px;
          color: var(--text-muted);
          line-height: 1.8;
        }
        .sources-appendix ul { margin: 0 0 16px; padding-left: 18px; }

        .story-coda .coda-link {
          display: inline-block;
          margin-top: 24px;
          font-size: 10px;
          letter-spacing: 5px;
          text-transform: uppercase;
          color: var(--canvas);
          background: var(--gold);
          padding: 13px 30px;
          border-radius: 2px;
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .story-coda .coda-link:hover { opacity: 0.88; }

      `}} />

      <div className="reading-progress" id="readingProgress" />

      <div className="share-bar" id="shareBar">
        <button className="share-btn" onClick={shareTwitter} aria-label="Share on Twitter">
          <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
          <span className="tooltip">Twitter / X</span>
        </button>
        <button className="share-btn" onClick={shareLinkedIn} aria-label="Share on LinkedIn">
          <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
          <span className="tooltip">LinkedIn</span>
        </button>
        <button className="share-btn" onClick={(e) => copyLink(e.currentTarget)} aria-label="Copy link">
          <svg viewBox="0 0 24 24"><path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>
          <span className="tooltip">Copy link</span>
        </button>
        <button className="share-btn" onClick={shareEmail} aria-label="Share via email">
          <svg viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>
          <span className="tooltip">Email</span>
        </button>
      </div>

      {/* ── Hero: uses existing .story-hero, .meta-tag ── */}
      <div className="story-hero" id="storyStart">
        <Link href="/blog" className="back-link">← Blog</Link>
        <div className="meta-row">
          <span className="meta-tag">Deal Sourcing</span>
          <span className="meta-tag">Off-Market Deals</span>
          <span className="meta-tag">5 min read</span>
        </div>
        <h1>What Is Pocket Deals?</h1>
        <div className="subtitle">
          The Deal Flow Behind Kautilya&apos;s Acquisition Newsletter
        </div>
        <p className="blog-author-byline">By <a href="/team">Dev Shah</a>&nbsp;&nbsp;·&nbsp;&nbsp;25 September 2026</p>
        <div className="hero-line" />
      </div>

      {/* ── Body: uses .story-body, .constraint-list, .story-coda ── */}
      <article className="story-body">
        <p>
          Pocket Deals is a newsletter from Kautilya, a buy-side deal origination firm, that
          surfaces acquisition opportunities valued under $100K. It exists because of a simple
          mismatch: Kautilya sources far more off-market deal flow than it has client mandates to
          place it against.
        </p>
        <p>
          This piece explains what Pocket Deals is, why it was built, how the two-tier model
          works, and what a buyer actually receives when they subscribe.
        </p>

        <div className="key-takeaways">
          <div className="phase-label">Key Takeaways</div>
          <ul>
            <li>Pocket Deals is Kautilya&apos;s newsletter for acquisition opportunities under $100K, drawn from both public marketplaces and off-market inbound.</li>
            <li>On-market deals are free to subscribers, with Kautilya adding verification. Off-market, exclusive deals cost $100 a month.</li>
            <li>There are no fees to buyers or sellers on either tier — the subscription is the only revenue.</li>
            <li>Every listing ships with a full CIM, the same depth of documentation Kautilya builds for its client mandates.</li>
            <li>As of September 2026, sourcing and documentation are live; the newsletter format itself is still being finalized ahead of its first issue.</li>
          </ul>
        </div>

        <h2>Why Pocket Deals Exists</h2>
        <p>
          Kautilya&apos;s core business is buy-side deal origination — finding acquisition targets
          for specific client mandates. In the course of that work, the team&apos;s inbound alone
          surfaces more than five off-market businesses every week. Not all of them fit a client
          mandate at any given moment; a business might be the wrong size, wrong sector, or simply
          arrive when no client is actively searching in that space.
        </p>
        <p>
          Rather than let a verified, documented opportunity go nowhere because the timing
          didn&apos;t line up with an existing mandate, Kautilya built a distribution channel for
          it. That channel is Pocket Deals.
        </p>

        <h2>How Pocket Deals Is Structured</h2>
        <p>
          Pocket Deals runs on a two-tier model, split by where the deal was sourced:
        </p>
        <div className="deal-table-wrap">
          <table className="deal-table">
            <thead>
              <tr><th>Tier</th><th>Source</th><th>Cost</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>On-market</td>
                <td data-label="Source">Public marketplaces and listings, with Kautilya adding verification</td>
                <td data-label="Cost">Free</td>
              </tr>
              <tr>
                <td>Off-market</td>
                <td data-label="Source">Exclusive opportunities from Kautilya&apos;s own inbound deal flow</td>
                <td data-label="Cost">$100/month</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Neither tier charges a transaction fee to either side of a deal. There are no fees to
          buyers or sellers on either tier — the monthly subscription is the only revenue Pocket
          Deals generates. That matters for how the incentives sit: Kautilya isn&apos;t paid more
          for pushing a buyer toward a particular deal, because it isn&apos;t paid on the deal at
          all.
        </p>

        <h2>What Buyers Actually Receive</h2>
        <p>
          The gap between a listing and a workable opportunity is usually documentation. A
          one-line pitch — revenue, asking price, a sentence about the business — isn&apos;t
          enough for a buyer to move on. Pocket Deals is built around the opposite: every
          opportunity ships with a full CIM (Confidential Information Memorandum), the same depth
          of documentation Kautilya would build for a client mandate.
        </p>
        <p>
          That&apos;s the practical difference between Pocket Deals and a typical listings site.
          A marketplace surfaces that a business is for sale; Pocket Deals surfaces a business for
          sale along with the diligence work needed to evaluate it seriously.
        </p>

        <h2>Where Pocket Deals Fits Next to Kautilya&apos;s Advisory Work</h2>
        <p>
          Kautilya works exclusively on the buy side, building mandates for clients searching for
          a specific type of acquisition. Pocket Deals isn&apos;t a replacement for that — it&apos;s
          an outlet for the deal flow those mandates don&apos;t currently absorb. If you want to
          understand the mandate-driven side of Kautilya&apos;s work in more depth, see{' '}
          <Link href="/blog/what-is-buy-side-ma-advisory">our guide to buy-side M&amp;A advisory</Link>.
        </p>
        <p style={{ fontSize: 13, color: 'var(--text-muted)', fontStyle: 'italic' }}>
          Pocket Deals is Kautilya&apos;s own product; this article describes it directly rather
          than as general market commentary. Details — pricing, tiers, and launch timing — may
          change as the newsletter format is finalized.
        </p>

        <h2>Current Status</h2>
        <p>
          As of September 2026, the sourcing infrastructure for Pocket Deals is in place and deal
          documentation is complete for the opportunities in the pipeline. The newsletter format
          itself — cadence, layout, and distribution — was still being refined before the first
          issue launched.
        </p>

        {/* FAQ */}
        <div className="blog-faq">
          <div className="phase-label" style={{ marginBottom: 20 }}>Frequently Asked Questions</div>

          <div className="blog-faq-item">
            <div className="blog-faq-q">What is Pocket Deals?</div>
            <p className="blog-faq-a">Pocket Deals is a newsletter from Kautilya, a buy-side deal origination firm, featuring acquisition opportunities valued under $100K. It surfaces businesses from public marketplaces and off-market sources that don&apos;t fit Kautilya&apos;s current client mandates.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">How much does Pocket Deals cost?</div>
            <p className="blog-faq-a">On-market deals sourced from public listings are free, with Kautilya adding verification value. Off-market deals — exclusive opportunities sourced through inbound — cost $100 a month. There are no fees to buyers or sellers on either tier; the subscription is the only revenue.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">Why did Kautilya start Pocket Deals?</div>
            <p className="blog-faq-a">Kautilya&apos;s team found that more than five off-market businesses reach them through inbound alone every week, but not every one has a matching buyer client at that moment. Rather than let viable opportunities disappear, they built a newsletter to distribute them.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">What do buyers actually receive with a Pocket Deals listing?</div>
            <p className="blog-faq-a">Each opportunity comes with a full CIM (Confidential Information Memorandum) — the same depth of documentation Kautilya would build for a client mandate, not a one-line pitch.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">Is Pocket Deals live yet?</div>
            <p className="blog-faq-a">As of September 2026, the deal-sourcing infrastructure exists and documentation for opportunities is complete, but the newsletter format itself is still being refined ahead of its first issue.</p>
          </div>
        </div>

        {/* Sources & Method */}
        <div className="sources-appendix">
          <div className="phase-label" style={{ marginBottom: 20 }}>Sources &amp; Method</div>
          <h3>First-party description</h3>
          <p>This article describes Kautilya&apos;s own Pocket Deals product, based on internal notes as of September 2026. It is not investment advice, and pricing or structure may change as the newsletter format is finalized. Not a solicitation to buy or sell any specific business.</p>
        </div>

        {/* CTA */}
        <div className="story-coda">
          <p className="coda-text">
            Want early access to Pocket Deals, or curious whether an off-market opportunity fits
            what you&apos;re searching for?
          </p>
          <Link href="/engage" className="coda-link">Begin the Conversation</Link>
        </div>

      </article>
    </>
  );
}
