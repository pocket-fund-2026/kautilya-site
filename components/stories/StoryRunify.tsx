"use client";
import { useCallback } from 'react';
import { useReadingProgressAndShareBar } from '@/components/useReadingProgressAndShareBar';
import Link from 'next/link';

export default function StoryRunify() {
  useReadingProgressAndShareBar();

  const shareTwitter = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('How to buy a business with seller financing when the revenue isn’t proven yet , via @kautilya');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  }, []);

  const shareLinkedIn = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  }, []);

  const shareEmail = useCallback(() => {
    const subject = encodeURIComponent('How to Buy a Business With Seller Financing');
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
        <Link href="/portfolio" className="back-link">← Portfolio</Link>
        <div className="meta-row">
          <span className="meta-tag sector">Consumer Mobile · Health & Fitness</span>
          <span className="meta-tag geo">Global · iOS</span>
          <span className="meta-tag stage">Single-Asset Acquisition</span>
        </div>
        <h1>How to Buy a Business With Seller Financing (When the Revenue Isn&rsquo;t Proven Yet)</h1>
        <div className="subtitle">
          How Kautilya structured a real $110K acquisition with only $20K down on a three-month-old app,
          by letting structure absorb the risk instead of the price.
        </div>
        <div className="hero-line" />
      </div>

      {/* STORY BODY */}
      <article className="story-body" id="storyBody">
        <div className="last-updated">Last updated: August 14, 2026</div>

        <div className="short-answer">
          <div className="short-answer-label">The Short Answer</div>
          <p>
            Let structure absorb the risk instead of the price. Underwrite the base valuation only on collected,
            reliably recurring cash, keep the cash at close small, and move every unproven variable into a
            profit-indexed earn-out. Below is how that works, and how Kautilya structured a real $110K acquisition
            with only $20K down on a three-month-old app.
          </p>
        </div>

        <p>
          Seller financing gets explained everywhere as a concept: the seller lends you part of the price, you pay
          it back over time. What almost no one shows is how a real deal is built, especially the hard case where
          the business is too young for its numbers to be trusted. That is where structure stops being a definition
          and becomes the entire deal.
        </p>
        <p>
          Here is the method, shown through a real engagement. A seasoned operator, recently exited from a software
          company, wanted to move into consumer mobile and asked Kautilya to source and structure the acquisition
          of a three-month-old gamified running app doing around $2K MRR. His constraint was specific: he was
          willing to back a young product, but unwilling to pay full price upfront for durability that hadn&rsquo;t
          been proven. Structure became the way to do both.
        </p>

        <h2>Step 1, Underwrite only on verified, collected cash</h2>
        <p>
          Before any structuring, strip the reported revenue down to what has actually been collected and reliably
          recurs. Young businesses inflate their headline number in predictable ways, currency, trials counted
          before conversion, annual prices anchored to look like monthly recurring revenue. If you underwrite the
          headline, you overpay before you&rsquo;ve begun.
        </p>
        <p>That is precisely the trap this deal set, and where Kautilya started.</p>
        <div className="proof-block">
          <div className="proof-label">The Revenue, Corrected</div>
          <p>
            The seller referenced roughly $3,000 of MRR. Under scrutiny it was AUD-denominated not USD, trial-heavy
            (a material share of users counted in dashboards before any cash was collected), and distorted by
            annual price anchoring. Verified against actual payouts, the real figures were $1,663 USD over the last
            28 days and $2,218 since launch, both with trials pending, and $512 in the last 7 days. The team
            underwrote the base valuation on about $2,000 USD of genuinely collected, recurring cash, and nothing
            speculative.
          </p>
        </div>
        <p>
          The rule generalises: trials, currency and annual anchoring are the three places a young company&rsquo;s
          revenue lies. Verify each before you price anything.
        </p>

        <h2>Step 2, Keep the cash at close small</h2>
        <p>
          The upfront payment should be sized to your real risk tolerance, not the seller&rsquo;s opening ask. The
          most useful move in the whole negotiation is often to reframe what the upfront number even represents,
          not a statement about price, but a decision about how much capital you deploy on day one. Once both sides
          see it that way, you can move the figure without reopening the valuation.
        </p>
        <p>That reframe is exactly how the team closed the gap here.</p>
        <div className="proof-block">
          <div className="proof-label">The Negotiation</div>
          <p>
            The seller expected about 30% upfront on an implied ~$77K valuation, roughly $23K, driven not by a
            price disagreement but by needing liquidity split across multiple equity holders. Kautilya&rsquo;s
            opening structure was ~$16K (about 20%). Rather than argue valuation, the team reframed the discussion
            around liquidity timing and certainty, treating the upfront percentage as a capital-deployment decision.
            That produced a controlled midpoint of $20,000 upfront (25%), reached without reopening the earn-out
            cap, the equity split, or any governance terms.
          </p>
        </div>

        <h2>Step 3, Move everything unproven into an earn-out</h2>
        <p>
          Whatever you cannot verify today goes into contingent, performance-linked consideration rather than the
          price. Trial conversion that hasn&rsquo;t happened, renewals that haven&rsquo;t come due, growth
          that&rsquo;s projected, none of it should be paid for at close. Structure it so the seller is paid in
          full only if the results the price assumed actually materialise.
        </p>
        <p>Here is the full structure the two prior steps produced:</p>

        <div className="data-table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Component</th>
                <th>Detail</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Total consideration</td><td>$110K</td></tr>
              <tr><td>Cash at close</td><td>$20,000 (about 25%)</td></tr>
              <tr><td>Earn-out</td><td>Up to $57,000, a 20% net-profit share over 24 months</td></tr>
              <tr><td>Balance</td><td>Salary, milestone bonuses, and retained minority equity</td></tr>
              <tr><td>Guaranteed capital at risk</td><td>About $30K</td></tr>
            </tbody>
          </table>
        </div>

        <div className="proof-block">
          <div className="proof-label">Where the Risk Went</div>
          <p>
            Kautilya moved trial-conversion and annual-renewal upside, the exact things that couldn&rsquo;t be
            verified, into the earn-out and milestone bonuses, so no upfront cash was paid for outcomes not yet
            realised. The majority of total consideration stayed performance-linked, time-based and
            escrow-protected. The incremental upfront liquidity improved founder alignment without materially
            increasing the buyer&rsquo;s exposure.
          </p>
        </div>

        <h2>Step 4, Keep the founder aligned to real performance</h2>
        <p>
          Structure should reward the exact outcome you&rsquo;re underwriting. Keeping the founder involved, and
          paid mostly on what happens after close, converts unproven durability from your risk into a shared
          incentive, the person who best knows how to make the numbers real now has a direct stake in doing so.
        </p>
        <div className="proof-block">
          <div className="proof-label">On This Deal</div>
          <p>
            The founder retained involvement through a 70/30 equity split and milestone economics. With the
            majority of consideration performance-linked and escrow-protected, both sides were aligned to the same
            thing: the business actually performing after close, not a clean handoff on unproven metrics.
          </p>
        </div>

        <h2>What the structure achieved for the buyer</h2>
        <p>
          This is what the method buys you when it&rsquo;s executed well. The buyer acquired majority control for
          $20K of cash at close, with guaranteed capital at risk of about $30K against a $110K headline price, and
          closed in 45 days. If the app&rsquo;s traction proved durable, the seller earned the full amount and
          everyone won; if it didn&rsquo;t, the buyer never overpaid for performance that never came. That
          asymmetry, capped downside, preserved upside, is the whole point of structuring a deal this way, and
          it&rsquo;s the kind of structuring discipline Kautilya brings to acquisitions where the numbers are still
          young and the risk has to live somewhere other than the price. If you&rsquo;re weighing a deal like
          this, <Link href="/engage">Kautilya can structure it with you</Link>.
        </p>
        <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>
          Educational content, not investment advice. Figures reflect a real, anonymized Kautilya engagement.
        </p>

        <div className="story-faq">
          <h2 className="story-faq-title">Frequently asked</h2>
          <div className="story-faq-item">
            <h3 className="story-faq-q">Can you buy a business with little or no money down?</h3>
            <p className="story-faq-a">
              Yes, by shifting risk into structure. A small cash payment at close plus a seller note or earn-out
              lets you pay for the business over time from its own cash flow, and pay for unproven performance only
              if it materialises. In this deal, $20K of cash at close carried a $110K total acquisition.
            </p>
          </div>
          <div className="story-faq-item">
            <h3 className="story-faq-q">What is an earn-out, and how is it different from a seller note?</h3>
            <p className="story-faq-a">
              A seller note is a fixed loan, you owe a set amount on a schedule no matter what. An earn-out is
              contingent, part of the price is paid only if the business hits agreed performance. When the future
              is uncertain, an earn-out is safer for the buyer because you never pay full price for performance
              that doesn&rsquo;t arrive.
            </p>
          </div>
          <div className="story-faq-item">
            <h3 className="story-faq-q">What are the risks of seller financing for the buyer?</h3>
            <p className="story-faq-a">
              Overpaying for performance you can&rsquo;t yet verify, and being locked into payments if the business
              declines. You mitigate that by underwriting the base only on collected, recurring cash, keeping cash
              at close small, and making the deferred portion contingent on performance rather than fixed, exactly
              the structure used here.
            </p>
          </div>
          <div className="story-faq-item">
            <h3 className="story-faq-q">How do you price a business whose revenue isn&rsquo;t proven yet?</h3>
            <p className="story-faq-a">
              Underwrite the base only on cash that has actually been collected and reliably recurs. Check for the
              three common distortions, currency, trials counted before conversion, and annual prices dressed up as
              monthly, then put every unproven variable into a performance-linked earn-out rather than the upfront
              price.
            </p>
          </div>
        </div>

        <div className="story-coda">
          <div className="coda-text">
            When you can&rsquo;t verify the future, structure for it.
          </div>
        </div>
      </article>
    </>
  );
}
