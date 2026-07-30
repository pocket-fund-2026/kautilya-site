'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useReadingProgressAndShareBar } from '@/components/useReadingProgressAndShareBar';

const IMG_BASE = '/images/newsletter/lockheed-ultra-maritime-acquisition-teardown';

export default function NewsletterLockheedUltraMaritime() {
  useReadingProgressAndShareBar();

  const shareTwitter = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Lockheed Martin paid $3.45B, all cash, ~22x EBITDA for Ultra Maritime. A deal teardown, via @microsearchfund');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  }, []);

  const shareLinkedIn = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  }, []);

  const shareEmail = useCallback(() => {
    const subject = encodeURIComponent("Lockheed Martin's Ultra Maritime Acquisition: A Deal Teardown");
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

        .currency-note {
          font-family: var(--font-lora), 'Lora', serif;
          font-size: 12px;
          font-style: italic;
          color: var(--text-muted);
          margin: 14px 0 0;
          line-height: 1.7;
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

        .blog-hero-image {
          margin: 32px 0 40px;
          border-radius: 3px;
          overflow: hidden;
          border: 1px solid var(--border);
        }
        .blog-hero-image img { width: 100%; height: auto; display: block; }

        .blog-figure {
          margin: 40px 0;
          border-radius: 3px;
          overflow: hidden;
          border: 1px solid var(--border);
          background: rgba(255,255,255,0.015);
        }
        .blog-figure img { width: 100%; height: auto; display: block; }

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
          font-family: var(--font-cormorant), 'Cormorant', serif;
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
          font-family: var(--font-cormorant), 'Cormorant', serif;
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
        .story-coda .coda-link.secondary {
          background: transparent;
          border: 1px solid var(--gold-dim);
          color: var(--gold);
          margin-left: 12px;
        }

        @media (max-width: 640px) {
          .story-coda .coda-link.secondary { margin-left: 0; margin-top: 12px; }
        }

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

      {/* ── Hero ── */}
      <div className="story-hero" id="storyStart">
        <Link href="/newsletter" className="back-link">← Kautilya Newsletter</Link>
        <div className="meta-row">
          <span className="meta-tag">Deal Teardown</span>
          <span className="meta-tag">Defense &amp; Aerospace</span>
          <span className="meta-tag">5 min read</span>
        </div>
        <h1>Lockheed Martin&apos;s Ultra Maritime Acquisition: A Deal Teardown</h1>
        <div className="subtitle">
          What a $3.45B, 22x-EBITDA, All-Cash Deal Actually Tells You
        </div>
        <p className="blog-author-byline">By <a href="/team">Dev Shah</a>&nbsp;&nbsp;·&nbsp;&nbsp;30 July 2026</p>
        <p className="currency-note">
          Currency note: dollar figures carry an approximate rupee equivalent beside them, converted
          at ~₹96.6/$1 (July 2026 spot). Every converted figure is a Kautilya estimate, not an
          independently reported number.
        </p>
        <div className="hero-line" />
      </div>

      {/* ── Body ── */}
      <article className="story-body">
        <div className="blog-hero-image">
          <Image
            src={`${IMG_BASE}/lockheed-ultra-maritime-teardown-hero.webp`}
            alt="Lockheed Martin paid $3.45B for four years of someone else's work. Advent fixed a neglected sonar business, then sold it into a defense boom. $3.45B all cash, ~22x estimated profit, 4-year hold. Kautilya Deal Table: target — sonar business of Advent (neglected division); what Advent did — fixed operations, improved margins and positioning; buyer — Lockheed Martin; deal value — $3.45B all cash; hold period — 4 years."
            title="Lockheed Paid $3.45B for Four Years of Someone Else's Work"
            width={1536}
            height={1024}
            priority
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        <p>
          Lockheed Martin acquired Ultra Maritime from private equity firm Advent International for
          $3.45 billion (~₹33,100 crore) in an all-cash transaction announced July 6, 2026. The
          company specializes in undersea warfare systems, including sonobuoys, sonar systems,
          torpedo-defence countermeasures, radar, and autonomous maritime sensing platforms.
        </p>
        <p>
          It is a clean, fast-moving deal on paper. What makes it worth a teardown is everything
          sitting underneath the headline number: a textbook private-equity value-creation cycle, a
          multiple well above the sector norm, and a critical data gap that makes the return on that
          value creation impossible to verify.
        </p>

        <h2>Advent&apos;s Value Creation, Run in Full</h2>
        <p>
          Advent purchased Ultra Maritime in 2022 as part of a larger UK take-private. Over four
          years, the firm invested approximately $170 million (~₹1,630 crore), growing annual
          revenues from $494 million (~₹4,740 crore) in 2023 to an estimated $784 million
          (~₹7,530 crore) in 2026 — roughly 59% growth across three years, or about 16.6% a year.
        </p>
        <div className="blog-figure">
          <Image
            src={`${IMG_BASE}/lockheed-ultra-maritime-value-creation-cycle.webp`}
            alt="The private-equity value-creation cycle, run in full. 1. Buy — acquire an under-invested business: Ultra Maritime, 2022. 2. Invest — fund R&D, products, consolidate teams: -$170M (~-₹1,630 cr). 3. Grow — lift annual sales: $494M to $784M (~₹4,740 cr to ₹7,530 cr). 4. Sell — exit to a strategic buyer at a premium: $3.45B (~₹33,100 cr)."
            title="The Private-Equity Value-Creation Cycle, Run in Full"
            width={1536}
            height={1024}
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
        <p>
          This is the four-stage playbook in its most textbook form: buy an under-invested asset,
          fund the fixes it was starved of, grow the top line, and exit to a strategic buyer willing
          to pay for what the fixing produced.
        </p>
        <div className="blog-figure">
          <Image
            src={`${IMG_BASE}/lockheed-ultra-maritime-revenue-growth.webp`}
            alt="Sales growth is what built the $3.45B price. 2023 actual revenue: $494M (~₹4,740 cr). 2026 estimate: $784M (~₹7,530 cr). Growth of +59% in three years, ~16.6% a year."
            title="Sales Growth Is What Built the $3.45B Price"
            width={1536}
            height={1024}
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        <h2>Why the Price Matters</h2>
        <p>
          The acquisition carries an estimated 22x EBITDA multiple, significantly above the typical
          10–15x range for defense deals.
        </p>
        <div className="blog-figure">
          <Image
            src={`${IMG_BASE}/lockheed-ultra-maritime-ebitda-multiple.webp`}
            alt="Price vs profit: about 22 times, against a 10-15x norm. The premium buys growth and sole-source navy contracts. Ultra Maritime (this deal, estimated): ~22x. Typical defense acquisition: 10-15x typical. Note: multiple = price divided by yearly profit. Ultra's actual profit was never published, so ~22x rests on a press estimate."
            title="Price vs Profit: About 22 Times, Against a 10-15x Norm"
            width={1536}
            height={1024}
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
        <p>
          The article framing this deal calls it &ldquo;a strategically excellent purchase at an
          uncomfortable price&rdquo; — Lockheed pays entirely in cash with no earnout protections, a
          structure that puts the full valuation risk on the buyer at closing rather than tying any
          of it to Ultra Maritime&apos;s future performance. The deal also addresses a real weak
          spot: operating profit in Lockheed&apos;s Rotary and Mission Systems division fell 19% to
          $423M in Q1 2026.
        </p>
        <p>
          Zoomed out, the check size is large in absolute terms but modest against the size of the
          buyer writing it.
        </p>
        <div className="blog-figure">
          <Image
            src={`${IMG_BASE}/lockheed-ultra-maritime-deal-vs-market-cap.webp`}
            alt="Big in absolute terms, small against the buyer's balance sheet. Lockheed Martin market value: ~$126B (~₹12.1 lakh crore). This deal: $3.45B (~₹33,100 cr), just 2.7% of the buyer."
            title="Big in Absolute Terms, Small Against the Buyer's Balance Sheet"
            width={1536}
            height={1024}
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
        <p>
          At $3.45 billion, the deal is just 2.7% of Lockheed Martin&apos;s roughly $126 billion
          market value — a premium multiple, but one the buyer can absorb comfortably.
        </p>

        <h2>The Critical Knowledge Gap</h2>
        <p>
          Advent&apos;s original 2022 purchase price for Ultra Maritime was never disclosed, making
          it impossible to calculate the firm&apos;s actual return on investment. The value-creation
          story above — the $170 million invested, the revenue growth, the exit at 22x — is real and
          well documented on the exit side. What is missing is the entry price, and without it, this
          deal is a strong illustration of the private-equity playbook, not a verifiable case study
          of the returns it produced.
        </p>

        <div className="deal-table-wrap">
          <table className="deal-table">
            <thead>
              <tr><th>Metric</th><th>Figure</th></tr>
            </thead>
            <tbody>
              <tr><td>Deal value</td><td>$3.45B (~₹33,100 cr), all cash</td></tr>
              <tr><td>Estimated EBITDA multiple</td><td>~22x, vs. 10&ndash;15x typical for defense deals</td></tr>
              <tr><td>Advent&apos;s investment</td><td>~$170M (~₹1,630 cr) over four years</td></tr>
              <tr><td>Revenue growth</td><td>$494M (2023) to ~$784M (2026 est.), +59% in three years</td></tr>
              <tr><td>Hold period</td><td>4 years (2022&ndash;2026)</td></tr>
              <tr><td>Deal size vs. buyer market cap</td><td>2.7% of Lockheed Martin&apos;s ~$126B market value</td></tr>
              <tr><td>Advent&apos;s original entry price</td><td>Undisclosed &mdash; ROI cannot be calculated</td></tr>
            </tbody>
          </table>
        </div>

        {/* FAQ */}
        <div className="blog-faq">
          <div className="phase-label" style={{ marginBottom: 20 }}>Frequently Asked Questions</div>

          <div className="blog-faq-item">
            <div className="blog-faq-q">How much did Lockheed Martin pay for Ultra Maritime?</div>
            <p className="blog-faq-a">Lockheed Martin acquired Ultra Maritime from Advent International for $3.45 billion in an all-cash transaction, announced July 6, 2026.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">What does Ultra Maritime do?</div>
            <p className="blog-faq-a">Ultra Maritime specializes in undersea warfare systems, including sonobuoys, sonar systems, torpedo-defence countermeasures, radar, and autonomous maritime sensing platforms.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">How much did Advent International make on the deal?</div>
            <p className="blog-faq-a">Advent&apos;s original 2022 purchase price for Ultra Maritime was never disclosed, so the actual return on investment cannot be calculated. What is known: Advent invested roughly $170 million over four years and grew revenue from $494 million (2023) to an estimated $784 million (2026), about 59% growth in three years.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">Why did Lockheed Martin pay an above-market multiple?</div>
            <p className="blog-faq-a">The deal carries an estimated 22x EBITDA multiple, well above the typical 10-15x range for defense transactions. The premium reflects Ultra Maritime&apos;s growth trajectory and sole-source navy contracts, and addresses a 19% profit decline in Lockheed&apos;s Rotary and Mission Systems division in Q1 2026.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">Why is this deal considered risky for Lockheed Martin?</div>
            <p className="blog-faq-a">Lockheed paid entirely in cash with no earnout protections, meaning the full purchase price was committed upfront with no structure tying payment to Ultra Maritime&apos;s future performance.</p>
          </div>
        </div>

        {/* Sources & Method */}
        <div className="sources-appendix">
          <div className="phase-label" style={{ marginBottom: 20 }}>Sources &amp; Method</div>
          <h3>Deal facts</h3>
          <ul>
            <li>Public reporting on the Lockheed Martin&ndash;Advent International transaction, announced July 6, 2026: deal value, cash structure, Ultra Maritime&apos;s product lines, Advent&apos;s 2022 entry via a UK take-private, and Lockheed&apos;s Rotary and Mission Systems Q1 2026 results.</li>
          </ul>
          <h3>Kautilya&apos;s own calculations, not disclosed figures</h3>
          <p>Every rupee conversion on this page, at ~₹96.6/$1 (July 2026). The 22x EBITDA multiple and the 2.7%-of-market-cap figure are estimates derived from reported deal value against press-estimated profit and Lockheed Martin&apos;s public market capitalization, not disclosed by either party.</p>
          <h3>Open items</h3>
          <ul>
            <li>Advent&apos;s original 2022 acquisition price for Ultra Maritime was not disclosed and is not available from any source reviewed. Return on investment for Advent cannot be calculated without it.</li>
            <li>Ultra Maritime&apos;s actual EBITDA has not been published; the ~22x multiple rests on a press estimate, not a reported financial statement.</li>
          </ul>
          <p>Not investment advice. This is a deal teardown for readers evaluating acquisition structures and buy-side value creation, not a recommendation regarding any security.</p>
        </div>

        {/* CTA */}
        <div className="story-coda">
          <p className="coda-text">
            Every Kautilya Teardown tags buyer, target, structure, and score the same way, so you
            can compare them later. Get the next one the day it publishes.
          </p>
          <Link href="/newsletter" className="coda-link">Read More Teardowns</Link>
          <a
            href="https://kautilya-pe.beehiiv.com"
            target="_blank"
            rel="noopener noreferrer"
            className="coda-link secondary"
          >
            Subscribe on Beehiiv
          </a>
        </div>

      </article>
    </>
  );
}
