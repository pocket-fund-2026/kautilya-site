"use client";
import { useCallback } from 'react';
import { useReadingProgressAndShareBar } from '@/components/useReadingProgressAndShareBar';
import Link from 'next/link';

export default function StoryInspire3() {
  useReadingProgressAndShareBar();

  const shareTwitter = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('How to verify revenue when buying an online business , via @kautilya');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  }, []);

  const shareLinkedIn = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  }, []);

  const shareEmail = useCallback(() => {
    const subject = encodeURIComponent('How to Verify Revenue When Buying an Online Business');
    const body = encodeURIComponent(`Check out this case study: ${window.location.href}`);
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
        <Link href="/portfolio" className="back-link">← Portfolio</Link>
        <div className="meta-row">
          <span className="meta-tag sector">Digital Wellness</span>
          <span className="meta-tag geo">United Kingdom</span>
          <span className="meta-tag stage">Buy-Side Due Diligence</span>
        </div>
        <h1>How to Verify Revenue When Buying an Online Business (and Run Its Finances After)</h1>
        <div className="subtitle">
          How Kautilya validated 30,134 transactions on a $1.8M portfolio, then stayed on to run its finances.
        </div>
        <div className="hero-line" />
      </div>

      <article className="story-body" id="storyBody">
        <div className="last-updated">Last updated: August 14, 2026</div>

        <div className="short-answer">
          <div className="short-answer-label">The Short Answer</div>
          <p>
            Diligence the source data, not the seller&rsquo;s dashboard. Screenshots can be faked, so validate every
            transaction against the payment processor&rsquo;s records, deconstruct affiliate &ldquo;payables&rdquo;
            line by line, and reconcile every system. Below is how that works, and how Kautilya validated 30,134
            transactions on a $1.8M portfolio, then stayed on to run its finances.
          </p>
        </div>

        <p>
          Everyone in this space says the same true thing: don&rsquo;t trust the seller&rsquo;s revenue
          screenshots, ask for a live screen-share. That&rsquo;s a good instinct, but it&rsquo;s a sniff test, not
          proof. Real verification means working at the level of the individual transaction and every system of
          record behind it, until the reported number and the collected number are the same number, or you know
          exactly why they aren&rsquo;t.
        </p>
        <p>
          Here is that done at scale. A buyer engaged Kautilya on a $1.8M UK digital wellness portfolio of 19
          websites. The team validated 30,134 transactions in under 15 days and surfaced seven discrepancies the
          seller had never found, and then went a step further than most diligence ever does: once the numbers were
          understood, Kautilya stayed on to run the finance function itself.
        </p>

        <h2>Step 1, Verify every transaction at the payment processor</h2>
        <p>
          The unit of truth is the individual transaction, cross-referenced against the payment processor&rsquo;s
          own records rather than the seller&rsquo;s dashboard. Match every sale, refund and chargeback, and hold
          yourself to a monetary match rate rather than a spot-check. A live screen-share is where you start, not
          where you stop.
        </p>
        <p>That standard is what separated the reported story from the real one here.</p>
        <div className="proof-block">
          <div className="proof-label">The Verification</div>
          <p>
            Kautilya validated 30,134 individual transactions across all 19 sites, every sale, refund and
            chargeback cross-referenced against processor records, to a 99.83% monetary match rate. The version of
            revenue the buyer was first shown differed materially from what the source data actually supported.
          </p>
        </div>

        <h2>Step 2, Deconstruct affiliate economics line by line</h2>
        <p>
          Affiliate and content businesses hide their biggest distortions in the affiliate lines. Internal
          promotional tracking gets recorded as though it were real commission liability, or promotional credits
          get counted as revenue. Either way the P&amp;L misleads, and the only way to catch it is to take the line
          apart entry by entry.
        </p>
        <div className="proof-block">
          <div className="proof-label">The $3.1M Line</div>
          <p>
            What appeared as $3.1M in affiliate payables, the team deconstructed into internal promotional tracking
            rather than actual commission obligations, a distinction that would otherwise have grossly overstated
            the liabilities the buyer was taking on. That single correction reshaped the deal&rsquo;s economics.
          </p>
        </div>
        <p>
          There&rsquo;s a related risk buyers ask about constantly: revenue concentration. A business where one
          affiliate program is most of the revenue is one policy change from a cliff, so the deconstruction
          isn&rsquo;t only about accuracy, it&rsquo;s about finding where the fragility lives.
        </p>

        <h2>Step 3, Reconcile every system, and flag what you can&rsquo;t verify</h2>
        <p>
          Reconcile the processor, the accounting system and the internal records against each other across
          multiple years. Where the three agree, you have truth. Where a clean trail doesn&rsquo;t exist, document
          it as a formal limitation rather than assuming the period is clean, because integrity about what you
          couldn&rsquo;t verify is part of what the buyer is paying for.
        </p>
        <div className="proof-block">
          <div className="proof-label">The Reconciliation</div>
          <p>
            Multi-year reconciliation across PayPal, Xero and internal records surfaced a $57K gap on about $1.1M
            of revenue that the seller had never reconciled internally. A prior partnership had created a two-year
            window with a structurally limited accounting trail; rather than paper over it, the team documented
            that window as a formal diligence limitation, leaving the most recent year as the only clean baseline.
          </p>
        </div>

        <h2>After the deal, running the finances Kautilya had just diligenced</h2>
        <p>
          Verification tells you what a business earns. It doesn&rsquo;t, by itself, keep the business paid,
          collected and compliant month to month, and for a buyer stepping into an unfamiliar portfolio, that gap
          is where value quietly leaks. This is where the engagement went further than a report.
        </p>
        <p>
          Having rebuilt the portfolio&rsquo;s finances from the source, Kautilya placed a financial controller
          from its own team into the business to own day-to-day bookkeeping, making sure affiliate employees were
          paid on time and that incoming payments actually arrived on schedule. Alongside the controller, the
          principals handled the live financial firefighting, overseeing the payment indicators and payment
          consoles, keeping affiliate payouts and the logistical nuances under control, and making sure obligations
          were met and taxes filed on time, while working directly with management on strategic financial
          decisions.
        </p>
        <div className="proof-block">
          <div className="proof-label">Beyond the Report</div>
          <p>
            This is the part almost no diligence firm touches. Because full-scope diligence had already rebuilt the
            portfolio&rsquo;s finances from source records, the same team was positioned to run them: an embedded
            controller on the books and receivables, the principals on live financial operations and tax
            timeliness, and a seat at the table on strategic financial calls. Diligence that understands a business
            this well can also operate it. If you&rsquo;re stepping into an unfamiliar portfolio,{' '}
            <Link href="/engage">Kautilya can verify it and run it</Link>.
          </p>
        </div>
        <p>
          The same transaction-level discipline is what makes a rebuild trustworthy on the other side of the
          table too, see how it plays out on{' '}
          <Link href="/stories/msp-buy-side-diligence">a $21M managed-services rebuild</Link>.
        </p>

        <div className="story-faq">
          <h2 className="story-faq-title">Frequently asked</h2>
          <div className="story-faq-item">
            <h3 className="story-faq-q">How do you verify revenue when buying an online business?</h3>
            <p className="story-faq-a">
              Match every transaction to the payment processor&rsquo;s own records rather than the seller&rsquo;s
              dashboard, then reconcile against the accounting system across multiple years. Discrepancies from
              refunds, chargebacks, trials or currency are common and only surface at transaction level, which is
              how this engagement found seven the seller had missed.
            </p>
          </div>
          <div className="story-faq-item">
            <h3 className="story-faq-q">How can you tell if a seller&rsquo;s revenue screenshots are real?</h3>
            <p className="story-faq-a">
              You can&rsquo;t, which is the point. Screenshots can be edited in minutes, so a live screen-share is a
              starting sniff test, not verification. Real proof comes from tying every transaction back to
              processor and bank records; if a seller resists that access, treat it as a red flag.
            </p>
          </div>
          <div className="story-faq-item">
            <h3 className="story-faq-q">What&rsquo;s the most common way a digital business overstates its numbers?</h3>
            <p className="story-faq-a">
              Affiliate and promotional tracking presented as real commission liability or realised revenue, and
              revenue concentrated in a single affiliate program. Deconstructing the affiliate lines individually
              is often the single biggest valuation correction in the deal, as the $3.1M line on this portfolio
              showed.
            </p>
          </div>
          <div className="story-faq-item">
            <h3 className="story-faq-q">Can a diligence firm also manage the finances after the deal?</h3>
            <p className="story-faq-a">
              Yes. Because full-scope diligence rebuilds a business&rsquo;s finances from source records, the same
              team can run the bookkeeping, affiliate payouts, receivables and tax timing afterward, typically an
              embedded controller plus hands-on oversight, which is especially useful when a buyer is stepping into
              an unfamiliar portfolio.
            </p>
          </div>
        </div>

        <div className="story-coda">
          <div className="coda-text">
            The version you are shown is rarely the version that exists. Diligence is the process of finding the difference.
          </div>
        </div>
      </article>
    </>
  );
}
