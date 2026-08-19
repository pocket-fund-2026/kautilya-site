'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useReadingProgressAndShareBar } from '@/components/useReadingProgressAndShareBar';

const IMG_BASE = '/images/blogs/what-is-buy-side-ma-advisory';

export default function BlogWhatIsBuySideMAAdvisory() {
  useReadingProgressAndShareBar();

  const shareTwitter = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('What a buy-side M&A advisor actually does, and why most first-time buyers in India don\'t go it alone, via @microsearchfund');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  }, []);

  const shareLinkedIn = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  }, []);

  const shareEmail = useCallback(() => {
    const subject = encodeURIComponent('What Is Buy-Side M&A Advisory?');
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

        /* Deal-style data tables, reused for the advisor comparison table */
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

        /* Below ~560px the three-column comparison table gets too cramped to
           read (labels collide with values), so it restacks into cards —
           one per row, with each cell's column header shown inline. */
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

        /* Editorial images */
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

        /* FAQ */
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

        /* Sources & method appendix */
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

        /* CTA button inside story-coda */
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
          <span className="meta-tag">Buyer Guides</span>
          <span className="meta-tag">India</span>
          <span className="meta-tag">8 min read</span>
        </div>
        <h1>What Is Buy-Side M&amp;A Advisory?</h1>
        <div className="subtitle">
          A Beginner&apos;s Guide to Buying a Business in India
        </div>
        <p className="blog-author-byline">By <a href="/team">Dev Shah</a>&nbsp;&nbsp;·&nbsp;&nbsp;3 August 2026</p>
        <div className="hero-line" />
      </div>

      {/* ── Body: uses .story-body, .pull-quote, .constraint-list, .story-coda ── */}
      <article className="story-body">
        <div className="blog-hero-image">
          <Image
            src={`${IMG_BASE}/what-is-buy-side-ma-advisory-hero.webp`}
            alt="A buyer and seller review a deal term sheet across the table, covering target company, enterprise value, structure, payment, due diligence timeline, exclusivity, and governing law for an acquisition in India."
            title="What Is Buy-Side M&A Advisory?"
            width={1536}
            height={1024}
            priority
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        <p>
          Buy-side M&amp;A advisory is professional support for the <em>buyer</em> in a business
          acquisition — someone who finds, evaluates, negotiates, and closes a deal on your
          behalf, instead of you doing it alone.
        </p>
        <p>
          If you&apos;ve ever thought about buying an existing business instead of starting one
          from scratch, this guide explains where a buy-side advisor fits into that process, and
          why most first-time buyers in India don&apos;t go through it solo.
        </p>

        <div className="key-takeaways">
          <div className="phase-label">Key Takeaways</div>
          <ul>
            <li>A buy-side advisor works only for the buyer — sourcing, valuing, and vetting deals in your interest.</li>
            <li>It&apos;s not just for large M&amp;A — search funds and individual buyers use it for deals as small as ₹25L&ndash;5Cr.</li>
            <li>The biggest risk without one: overpaying, or missing a liability that surfaces only after you&apos;ve signed.</li>
          </ul>
        </div>

        <h2>What Does a Buy-Side Advisor Actually Do?</h2>
        <p>
          A buy-side advisor represents the buyer&apos;s interests from the first conversation to
          the final signature. Their job breaks down into five stages:
        </p>
        <div className="blog-figure">
          <Image
            src={`${IMG_BASE}/buy-side-advisory-five-stage-process.webp`}
            alt="The buy-side advisory process in five stages: 1. Sourcing — identify and attract high-potential businesses; 2. Screening — evaluate and filter opportunities based on key criteria; 3. Valuation — assess fair value and financial potential; 4. Diligence — deep dive into the business, risks, and opportunities; 5. Close — negotiate terms and close the deal."
            title="The buy-side advisory process, five stages"
            width={1774}
            height={887}
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
        <ul className="constraint-list">
          <li><strong>Sourcing</strong> — identifying businesses that match your budget, industry, and goals, including off-market opportunities that never get publicly listed. Industry estimates suggest a large share of small-business acquisitions in India happen off-market, sourced through direct relationships rather than public listings.</li>
          <li><strong>Screening</strong> — filtering targets by financial health, growth potential, and fit, so you only spend time evaluating serious options instead of chasing every lead.</li>
          <li><strong>Valuation</strong> — assessing what a business is actually worth, using earnings multiples, comparable transactions, and discounted cash flow analysis — not just the seller&apos;s asking price.</li>
          <li><strong>Due diligence</strong> — verifying financials, legal standing, contracts, licenses, and liabilities before you commit capital.</li>
          <li><strong>Negotiation &amp; closing</strong> — structuring deal terms, financing, and paperwork to protect your interests through to signing.</li>
        </ul>

        <h2>Buy-Side vs. Sell-Side Advisory</h2>
        <p>
          In short: <strong>a sell-side advisor works for the seller, a buy-side advisor works
          for you.</strong>
        </p>
        <div className="deal-table-wrap">
          <table className="deal-table">
            <thead>
              <tr><th></th><th>Sell-Side Advisor</th><th>Buy-Side Advisor</th></tr>
            </thead>
            <tbody>
              <tr><td>Represents</td><td data-label="Sell-Side Advisor">The seller</td><td data-label="Buy-Side Advisor">The buyer</td></tr>
              <tr><td>Goal</td><td data-label="Sell-Side Advisor">Maximize sale price</td><td data-label="Buy-Side Advisor">Minimize overpayment risk, maximize deal quality</td></tr>
              <tr><td>Sources deals from</td><td data-label="Sell-Side Advisor">Their own client (the seller)</td><td data-label="Buy-Side Advisor">The broader market, including off-market targets</td></tr>
              <tr><td>Typical fee alignment</td><td data-label="Sell-Side Advisor">% of sale price</td><td data-label="Buy-Side Advisor">Retainer + success fee on close</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          If you&apos;re buying and working with someone who represents the seller — or no one at
          all — you&apos;re at an information disadvantage:
        </p>
        <ul className="constraint-list">
          <li>They know things about the business you don&apos;t.</li>
          <li>Their incentives don&apos;t point in your direction.</li>
          <li>You have no one independently checking the seller&apos;s numbers.</li>
        </ul>

        <h2>Why First-Time Buyers in India Use a Buy-Side Advisor</h2>
        <ul className="constraint-list">
          <li><strong>Access to off-market deals.</strong> Many of the best acquisition targets in India are never publicly listed — they&apos;re sourced through networks and direct outreach.</li>
          <li><strong>Avoiding overpayment.</strong> Without independent valuation, buyers commonly anchor on the seller&apos;s numbers, which are rarely neutral.</li>
          <li><strong>Navigating diligence blind spots.</strong> Family-owned and small-to-mid businesses in India often have informal record-keeping, unclear ownership structures, or contingent liabilities (pending litigation, unpaid statutory dues, informal related-party arrangements) that are easy to miss without experience.</li>
          <li><strong>Regulatory complexity.</strong> Depending on structure, acquisitions can involve company law, tax, and — for NRI or foreign buyers — FEMA compliance.</li>
          <li><strong>Time.</strong> Sourcing and vetting targets alone can take months of unproductive searching; an advisor filters this down to serious, qualified opportunities.</li>
        </ul>

        <h2>Is Buy-Side Advisory Only for Large Acquisitions?</h2>
        <p>
          No — this is a common misconception. Search funds, individual entrepreneurs, and small
          holding companies increasingly use buy-side advisory for deals in the crores range, not
          just large institutional M&amp;A. If you&apos;re evaluating a search-fund style
          acquisition, see our guide on{' '}
          <Link href="/blog/what-is-a-search-fund">what a search fund is</Link>{' '}
          for how that model works alongside buy-side advisory.
        </p>
        <div className="blog-figure">
          <Image
            src={`${IMG_BASE}/buy-side-advisory-deal-size-sweet-spot.webp`}
            alt="Buy-side advisory isn't just for big deals — it's most valuable in the middle. Very small deals under ₹25L are DIY/informal, too small for advisory fees to make sense. The ₹25L-5Cr range (lower to upper mid-market) is where buy-side advisory creates the most value: complex enough to need expertise, small enough to be overlooked. Large-cap M&A above ₹50Cr is where investment banks focus."
            title="Buy-side advisory delivers the most impact in the ₹25L–₹5Cr range"
            width={1774}
            height={887}
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        <h2>What the Buy-Side Process Looks Like, Step by Step</h2>
        <ul className="constraint-list">
          <li><strong>Define your acquisition criteria.</strong> Industry, size (revenue/EBITDA range), geography, and budget — a clear mandate makes sourcing efficient instead of random.</li>
          <li><strong>Sourcing and initial outreach.</strong> A pipeline of matching targets, including off-market approaches to owners who haven&apos;t publicly signaled they&apos;re selling.</li>
          <li><strong>Preliminary screening and management calls.</strong> Targets are filtered by basic financial health and strategic fit before deeper work begins.</li>
          <li><strong>Indicative valuation and offer.</strong> A preliminary valuation range is built and a non-binding letter of intent (LOI) is issued to the seller.</li>
          <li><strong>Due diligence.</strong> Financial, legal, tax, and operational checks — most red flags surface here, and it&apos;s where an advisor&apos;s experience matters most.</li>
          <li><strong>Final negotiation and deal structuring.</strong> Price, terms, and structure (earnouts, seller financing) are adjusted based on diligence findings.</li>
          <li><strong>Closing.</strong> Legal documentation, regulatory filings, and fund transfer to complete the acquisition.</li>
        </ul>

        <h2>Common Mistakes First-Time Buyers Make Without an Advisor</h2>
        <ul className="constraint-list">
          <li><strong>Trusting seller-provided financials at face value</strong> instead of independently verifying them.</li>
          <li><strong>Skipping legal diligence</strong> on contracts, licenses, and pending litigation.</li>
          <li><strong>Underestimating working capital needs</strong> post-acquisition, leading to a cash crunch right after closing.</li>
          <li><strong>Negotiating price without negotiating terms</strong> — structure (earnouts, escrow, non-competes) often matters as much as headline price.</li>
          <li><strong>Not planning the transition</strong> — losing key employees or customer relationships in the handover period.</li>
        </ul>

        <h2>A Quick Example: How This Plays Out</h2>
        <p>Here&apos;s a simplified version of a pattern we see often, to make the risk concrete:</p>
        <p>
          A first-time buyer finds a manufacturing business through a broker, at an asking price
          based on the seller&apos;s self-reported EBITDA. Without independent valuation, the
          buyer has no way to know whether that number holds up.
        </p>
        <p><strong>What a buy-side advisor would catch:</strong></p>
        <ul className="constraint-list">
          <li><strong>Revenue concentration.</strong> If 60%+ of revenue comes from one customer, that&apos;s a material risk the asking price doesn&apos;t reflect — buyer-side diligence surfaces this before the offer, not after.</li>
          <li><strong>Add-back inflation.</strong> Sellers often add back &ldquo;one-time&rdquo; expenses to inflate EBITDA. An advisor tests which add-backs are legitimate versus optimistic.</li>
          <li><strong>Working capital gaps.</strong> The deal may look fully priced on paper but leave the buyer under-capitalized for day-one operations — advisors model this before closing, not during the first cash crunch.</li>
        </ul>
        <p>
          None of this requires the deal to be large or complex — it&apos;s exactly the kind of
          gap that shows up in small and mid-sized acquisitions, which is where most first-time
          buyers in India are actually looking.
        </p>

        <h2>How Kautilya&apos;s Buy-Side Process Works</h2>
        <p>
          Kautilya works exclusively on the buy side — we don&apos;t represent sellers, so
          there&apos;s no conflict of interest in what we recommend. Our process follows{' '}
          <Link href="/approach">our approach</Link>: sourcing qualified targets, running
          valuation and diligence, and supporting negotiation through close. You can see real
          acquisitions we&apos;ve supported in <Link href="/portfolio">our portfolio</Link> and
          read detailed case studies in <Link href="/stories">our stories</Link>.
        </p>

        {/* FAQ */}
        <div className="blog-faq">
          <div className="phase-label" style={{ marginBottom: 20 }}>Frequently Asked Questions</div>

          <div className="blog-faq-item">
            <div className="blog-faq-q">How much does a buy-side advisor cost?</div>
            <p className="blog-faq-a">Fee structures vary by firm and deal size, but most follow a retainer plus success fee model — a fixed monthly or upfront fee during sourcing and diligence, plus a percentage tied to the deal actually closing. This aligns the advisor&apos;s incentive with finding you a genuinely good acquisition, rather than billing hours regardless of outcome. Ask any advisor to walk through their fee structure and what triggers the success fee before engaging them.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">How long does the process take?</div>
            <p className="blog-faq-a">Sourcing to close typically runs three to nine months, depending on target availability, how well-documented the business is, and diligence complexity. Smaller, well-documented businesses with clean financials can close faster; family-owned businesses with informal record-keeping often take longer because diligence has more to untangle.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">Do I need an advisor if I already found a business to buy?</div>
            <p className="blog-faq-a">Yes, if you haven&apos;t done independent valuation and diligence yet. Advisors add the most value at exactly this stage — verifying whether the deal you&apos;ve already found is actually priced fairly and structured safely, not just helping you find deals in the first place.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">What&apos;s the difference between a buy-side advisor and an M&amp;A lawyer?</div>
            <p className="blog-faq-a">An advisor manages the overall deal — sourcing, valuation, negotiation strategy, and coordinating the diligence process — while a lawyer drafts and reviews the legal documentation and handles regulatory filings. Most serious acquisitions use both, with the advisor coordinating the process end-to-end and looping in legal counsel at the right stages.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">Can NRIs or foreign buyers use a buy-side advisor for Indian acquisitions?</div>
            <p className="blog-faq-a">Yes, and it&apos;s often more important in that case. Cross-border acquisitions add FEMA compliance, repatriation rules, and sector-specific foreign investment restrictions on top of the usual diligence — a locally experienced advisor helps navigate all of this alongside your legal counsel.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">What size of business is a buy-side advisor worth it for?</div>
            <p className="blog-faq-a">There&apos;s no fixed cutoff, but as a rough guide: once a deal is large enough that a bad valuation or a missed liability would meaningfully hurt you financially, an advisor&apos;s fee is cheap insurance. In practice, this covers most deals from a few tens of lakhs upward, not just large-cap acquisitions.</p>
          </div>
        </div>

        {/* Sources & Method */}
        <div className="sources-appendix">
          <div className="phase-label" style={{ marginBottom: 20 }}>Sources &amp; Method</div>
          <h3>Reference material</h3>
          <ul>
            <li>Investopedia, Business Valuation methods overview &mdash; general reference for the valuation methodologies mentioned (earnings multiples, comparable transactions, discounted cash flow).</li>
            <li>Reserve Bank of India, FEMA overview &mdash; general reference for cross-border and NRI/foreign-buyer compliance considerations.</li>
          </ul>
          <h3>Labelled inference, not data</h3>
          <p>The share of small-business acquisitions in India happening off-market, and the ₹25L&ndash;5Cr &ldquo;sweet spot&rdquo; range for buy-side advisory value, are Kautilya&apos;s structural reasoning from deal experience, not published statistics. No formal India-wide dataset on off-market deal share is cited or claimed.</p>
          <p>Not investment advice. This is an explainer for people evaluating acquisition paths, not a recommendation to pursue one.</p>
        </div>

        {/* CTA */}
        <div className="story-coda">
          <p className="coda-text">
            Evaluating your first acquisition in India?
            We work exclusively on the buy side — sourcing, valuation, and diligence, start to close.
          </p>
          <Link href="/engage" className="coda-link">Begin the Conversation</Link>
        </div>

      </article>
    </>
  );
}
