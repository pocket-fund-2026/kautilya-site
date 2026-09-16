'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import { useReadingProgressAndShareBar } from '@/components/useReadingProgressAndShareBar';

export default function BlogWhatIsSellSideMAAdvisory() {
  useReadingProgressAndShareBar();

  const shareTwitter = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('What sell-side M&A advisory actually is, how the process works, and how to tell if you need one, via @microsearchfund');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  }, []);

  const shareLinkedIn = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  }, []);

  const shareEmail = useCallback(() => {
    const subject = encodeURIComponent('Sell-Side M&A Advisory: What It Is and How It Works');
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
          <span className="meta-tag">Seller Guides</span>
          <span className="meta-tag">M&amp;A Advisory</span>
          <span className="meta-tag">7 min read</span>
        </div>
        <h1>Sell-Side M&amp;A Advisory: What It Is and How It Works</h1>
        <div className="subtitle">
          A Plain-Language Guide for Business Owners
        </div>
        <p className="blog-author-byline">By <a href="/team">Dev Shah</a>&nbsp;&nbsp;·&nbsp;&nbsp;16 September 2026</p>
        <div className="hero-line" />
      </div>

      {/* ── Body: uses .story-body, .constraint-list, .story-coda ── */}
      <article className="story-body">
        <p>
          Sell-side M&amp;A advisory means hiring someone to represent you when you sell your
          company — finding buyers, running negotiations, and closing the deal.
        </p>
        <p>
          Most content on this topic is published by advisory firms as marketing for their own
          services. That doesn&apos;t make the information wrong, but it does mean most guides
          are written to convince you to hire an advisor rather than to help you decide if you
          actually need one. This guide tries to do the second, including the parts that
          don&apos;t favor hiring a full advisor.
        </p>

        <div className="key-takeaways">
          <div className="phase-label">Key Takeaways</div>
          <ul>
            <li>Sell-side M&amp;A advisory means hiring someone to represent you when you sell your company — finding buyers, running negotiations, and closing the deal.</li>
            <li>A full sell-side process works best for mid-size and larger companies with more than one type of possible buyer.</li>
            <li>Smaller businesses are usually better served by a business broker or a direct sale.</li>
            <li>Advisors are usually paid a retainer plus a success fee, often on a sliding scale that decreases as the deal size grows.</li>
          </ul>
        </div>

        <h2>What Is Sell-Side M&amp;A Advisory?</h2>
        <p>
          Sell-side M&amp;A advisory is a service that helps a business owner sell their company.
          The advisor represents the seller, finds buyers, and manages the sale from start to
          finish.
        </p>
        <p>
          The term &ldquo;sell-side&rdquo; simply means the advisor is working for the seller.
          This is different from &ldquo;buy-side&rdquo; advisory, where the advisor works for a
          company trying to buy someone else. If you&apos;re the one selling your business,
          you&apos;re looking for a sell-side advisor.
        </p>
        <p>
          In practice, a sell-side advisor does three main things: builds a realistic valuation
          for the business, finds and manages a group of qualified buyers without alerting staff
          or competitors too early, and runs a process that keeps negotiating power on the
          seller&apos;s side rather than handing it to whichever buyer shows up first.
        </p>

        <h2>The Sell-Side Process, Step by Step</h2>
        <div className="deal-table-wrap">
          <table className="deal-table">
            <thead>
              <tr><th>Step</th><th>What happens</th><th>Why it matters</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>1. Prepare</td>
                <td data-label="What happens">The advisor reviews the company&apos;s financials and flags problem areas early</td>
                <td data-label="Why it matters">Fixing an issue before a buyer finds it is cheaper than fixing it after</td>
              </tr>
              <tr>
                <td>2. Value the business</td>
                <td data-label="What happens">The advisor builds a realistic valuation range using comparable deals</td>
                <td data-label="Why it matters">Sets fair price expectations before negotiations begin</td>
              </tr>
              <tr>
                <td>3. Prepare materials</td>
                <td data-label="What happens">A short teaser and a detailed information memorandum (CIM) are written</td>
                <td data-label="Why it matters">Lets buyers show interest before the company&apos;s name is made public</td>
              </tr>
              <tr>
                <td>4. Contact buyers</td>
                <td data-label="What happens">The advisor runs a confidential outreach process to a curated list of buyers</td>
                <td data-label="Why it matters">Creates competition among buyers instead of one buyer holding all the leverage</td>
              </tr>
              <tr>
                <td>5. Meet buyers</td>
                <td data-label="What happens">Serious buyers meet the leadership team and ask detailed questions</td>
                <td data-label="Why it matters">Buyers decide whether to make an offer</td>
              </tr>
              <tr>
                <td>6. Sign a letter of intent</td>
                <td data-label="What happens">The chosen buyer signs a non-binding letter setting out price and terms</td>
                <td data-label="Why it matters">Locks in the key terms before due diligence starts</td>
              </tr>
              <tr>
                <td>7. Due diligence</td>
                <td data-label="What happens">The buyer&apos;s team checks the company&apos;s finances, contracts, and operations</td>
                <td data-label="Why it matters">Confirms the information shared earlier was accurate</td>
              </tr>
              <tr>
                <td>8. Close the deal</td>
                <td data-label="What happens">Final papers are signed, money changes hands, ownership transfers</td>
                <td data-label="Why it matters">The sale becomes final; the advisor&apos;s fee is usually paid here</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          The number of steps can vary slightly by advisor, but the overall sequence — prepare,
          value, package, market, meet buyers, negotiate, run due diligence, close — is the same
          across most sell-side deals, regardless of size or industry. What changes with size is
          how long and formal each step is, not whether it happens.
        </p>

        <h2>Do You Actually Need a Full Sell-Side Advisor?</h2>
        <p>
          This is the question most advisor-written guides skip. A full sell-side process is
          built to create competition among several buyers, which is valuable, but it&apos;s also
          expensive and slow. It isn&apos;t the right choice for every seller.
        </p>
        <div className="deal-table-wrap">
          <table className="deal-table">
            <thead>
              <tr><th>Your situation</th><th>Best route</th><th>Why</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Small business, simple pool of buyers</td>
                <td data-label="Best route">A business broker, or a direct sale</td>
                <td data-label="Why">A full advisory process costs more than this size of deal needs</td>
              </tr>
              <tr>
                <td>Mid-size or larger company, several types of buyers possible</td>
                <td data-label="Best route">A full sell-side M&amp;A advisor</td>
                <td data-label="Why">Running a competitive process is what this service is built for, and it usually raises the price enough to cover its cost</td>
              </tr>
              <tr>
                <td>You already have one serious buyer</td>
                <td data-label="Best route">A lawyer and an independent valuation, not a full sale process</td>
                <td data-label="Why">There is no group of buyers to create competition between</td>
              </tr>
              <tr>
                <td>A business that depends heavily on the founder</td>
                <td data-label="Best route">An advisor with experience in your industry, hired well before you plan to exit</td>
                <td data-label="Why">Positioning the business and choosing the right buyer matters more here</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>How Much Does a Sell-Side Advisor Cost?</h2>
        <p>
          Most advisors charge two things: a smaller upfront retainer, which covers their time
          during preparation and marketing, and a success fee paid when the deal closes,
          calculated as a percentage of the sale price.
        </p>
        <p>
          That success fee is often set on a sliding scale, sometimes called the Lehman formula
          (or a variant of it), where the percentage gets smaller as the deal size gets bigger.
          For example, the fee might be a higher percentage on the first portion of the sale price
          and a lower percentage on each amount above that.
        </p>
        <p>
          Most articles online explain this formula but don&apos;t help you judge whether a
          specific fee is fair. Four questions matter more than the exact percentage:
        </p>
        <ul className="constraint-list">
          <li>How many buyers will actually be contacted?</li>
          <li>Does the retainer count against the success fee?</li>
          <li>What happens to the fee if the deal falls through for reasons outside your control?</li>
          <li>Is there a fee owed if the company sells later, after the advisor&apos;s contract ends?</li>
        </ul>

        <h2>Sell-Side Advisor vs Investment Banker vs Business Broker</h2>
        <p>
          These terms are often used loosely, which can lead a seller to the wrong type of
          service. &ldquo;Investment banker&rdquo; and &ldquo;sell-side M&amp;A advisor&rdquo;
          usually mean the same thing — the term &ldquo;investment banker&rdquo; is just more
          common for larger firms and bigger deals. A business broker is a different, generally
          simpler, service suited to smaller sales.
        </p>
        <div className="deal-table-wrap">
          <table className="deal-table">
            <thead>
              <tr><th></th><th>Business Broker</th><th>M&amp;A Advisor / Investment Banker</th></tr>
            </thead>
            <tbody>
              <tr><td>Typical deal size</td><td data-label="Business Broker">Smaller businesses</td><td data-label="M&A Advisor / Investment Banker">Mid-size businesses and larger</td></tr>
              <tr><td>Typical buyers</td><td data-label="Business Broker">Individual buyers, often local</td><td data-label="M&A Advisor / Investment Banker">Larger companies, private equity firms, and institutional buyers</td></tr>
              <tr><td>Process</td><td data-label="Business Broker">Simple, listing-style</td><td data-label="M&A Advisor / Investment Banker">Structured, confidential, competitive</td></tr>
              <tr><td>Fees</td><td data-label="Business Broker">A flat commission, usually lower</td><td data-label="M&A Advisor / Investment Banker">A retainer plus a success fee, often on a sliding scale</td></tr>
            </tbody>
          </table>
        </div>

        <h2>How This Connects to Buyer Type and Valuation</h2>
        <p>
          Different types of buyers behave differently. A larger company buying a competitor, a
          private equity firm, an individual buyer, and a search-fund buyer all pay differently,
          move at different speeds, and care about different things. Part of an advisor&apos;s
          job is matching a business to the buyers most likely to pay well for it, rather than
          running the same process for every seller. If you want to understand that buyer side in
          more depth,{' '}
          <Link href="/blog/what-is-buy-side-ma-advisory">our guide to buy-side M&amp;A advisory</Link>{' '}
          covers the same process from the other side of the table.
        </p>
        <p>
          That said, this only works if the business&apos;s valuation and any weak points — such
          as depending too heavily on the founder or having a small number of large customers —
          are dealt with honestly before the process starts. An advisor can present a business
          well, but can&apos;t turn a weak story into a strong one.
        </p>
        <p style={{ fontSize: 13, color: 'var(--text-muted)', fontStyle: 'italic' }}>
          This article explains how sell-side M&amp;A advisory generally works. It is not advice
          on any specific engagement letter, fee agreement, or deal. Have a lawyer and, ideally,
          an independent financial adviser review any actual agreement before signing it — terms
          vary by advisor and by deal.
        </p>

        <h2>Where to Start</h2>
        <p>
          Before speaking with any advisor, get clear answers to three questions: what the
          business is realistically worth, not what you hope it&apos;s worth; how dependent the
          business is on you personally or on a small number of customers; and how many genuinely
          interested buyers likely exist. These three answers say more about whether a full
          sell-side process is worth the cost than any fee percentage will.
        </p>
        <p>
          Kautilya works exclusively on the buy side, so we don&apos;t run sell-side mandates —
          this guide is here because understanding how the other side of the table operates helps
          any buyer negotiate better. If you&apos;re the one evaluating an acquisition rather than
          a sale, see <Link href="/approach">our approach</Link> or read about{' '}
          <Link href="/blog/what-is-buy-side-ma-advisory">what buy-side advisory involves</Link>.
        </p>

        {/* FAQ */}
        <div className="blog-faq">
          <div className="phase-label" style={{ marginBottom: 20 }}>Frequently Asked Questions</div>

          <div className="blog-faq-item">
            <div className="blog-faq-q">Is a sell-side M&amp;A advisor the same as a sell-side analyst?</div>
            <p className="blog-faq-a">No. A sell-side analyst is a job in equity research, working for a brokerage and covering publicly traded stocks. It has nothing to do with selling a private company. A sell-side M&amp;A advisor is the role described in this article.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">How much do sell-side M&amp;A advisors charge?</div>
            <p className="blog-faq-a">Typically a retainer plus a success fee at closing, with the success fee often set on a sliding scale that decreases as the deal size increases. Exact percentages vary by advisor, deal size, and negotiating leverage.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">What&apos;s the difference between an M&amp;A advisor and a business broker?</div>
            <p className="blog-faq-a">Mainly deal size and process. Business brokers usually handle smaller, simpler sales to individual buyers. M&amp;A advisors run structured, competitive processes aimed at larger companies and institutional buyers, usually for bigger deals.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">What is a CIM?</div>
            <p className="blog-faq-a">A Confidential Information Memorandum — a detailed document describing the business, its finances, and its opportunity, shared with serious buyers after an initial teaser and confidentiality agreement.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">How long does a sell-side M&amp;A process take?</div>
            <p className="blog-faq-a">Usually somewhere between six months and a year, from hiring an advisor to closing the deal, though this depends heavily on the size of the company and how ready it is for sale.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">Do I need a sell-side advisor if I already have a buyer?</div>
            <p className="blog-faq-a">Not necessarily a full sale process. With one buyer already lined up, a lawyer and an independent valuation are usually more useful than a full buyer search, since there&apos;s no group of buyers to create competition among.</p>
          </div>
        </div>

        {/* Sources & Method */}
        <div className="sources-appendix">
          <div className="phase-label" style={{ marginBottom: 20 }}>Sources &amp; Method</div>
          <h3>Labelled inference, not data</h3>
          <p>This piece describes the general structure of sell-side M&amp;A engagements and fee conventions (retainer plus success fee, the Lehman-formula sliding scale) as commonly practiced, not as figures from a specific published dataset. Not investment advice, and not a recommendation on any specific engagement letter or fee agreement — have a lawyer and an independent financial adviser review any actual agreement before signing it.</p>
        </div>

        {/* CTA */}
        <div className="story-coda">
          <p className="coda-text">
            Evaluating an acquisition and want to understand how the seller&apos;s side of the table operates?
            We work exclusively on the buy side — sourcing, valuation, and diligence, start to close.
          </p>
          <Link href="/engage" className="coda-link">Begin the Conversation</Link>
        </div>

      </article>
    </>
  );
}
