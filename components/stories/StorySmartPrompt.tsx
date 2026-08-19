"use client";
import { useCallback } from 'react';
import { useReadingProgressAndShareBar } from '@/components/useReadingProgressAndShareBar';
import Link from 'next/link';

export default function StorySmartPrompt() {
  useReadingProgressAndShareBar();

  const shareTwitter = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('When to walk away from an acquisition, and how to decide , via @kautilya');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  }, []);

  const shareLinkedIn = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  }, []);

  const shareEmail = useCallback(() => {
    const subject = encodeURIComponent('When to Walk Away From an Acquisition (and How to Decide)');
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
          <span className="meta-tag sector">GPT & AI Education</span>
          <span className="meta-tag geo">Global / ChatGPT Ecosystem</span>
          <span className="meta-tag stage">Full Mandate</span>
        </div>
        <h1>When to Walk Away From an Acquisition (and How to Decide)</h1>
        <div className="subtitle">
          How Kautilya killed two deals and closed one at a 200x discount, using go/no-go gates defined before
          any target was in sight.
        </div>
        <div className="hero-line" />
      </div>

      <article className="story-body" id="storyBody">
        <div className="last-updated">Last updated: August 14, 2026</div>

        <div className="short-answer">
          <div className="short-answer-label">The Short Answer</div>
          <p>
            Decide before you look. Build hard go/no-go gates covering financial reality, risk, market, price and
            structure, then apply them even after weeks of diligence. A strong business wrapped in a bad structure
            is still a bad acquisition, and walking away, even post-LOI, is the process working. Below is how that
            discipline works, and how it led a first-time acquirer to kill two deals and close the right one at a
            200x discount.
          </p>
        </div>

        <p>
          Deal fever is real and well-documented: once a buyer has a target in their sights, momentum and sunk cost
          make it hard to stop, and surveys have found roughly a third of acquirers admit they didn&rsquo;t walk
          away from deals they had genuine doubts about. The protection isn&rsquo;t willpower in the moment,
          it&rsquo;s a set of decision gates defined before you start looking, applied the same way whether
          you&rsquo;re at first glance or a signed letter of intent.
        </p>
        <p>
          Here is how that plays out in practice. A first-time acquirer with a technical background and $50K came
          to Kautilya with capital and intent but no framework, an open-ended interest in AI and SaaS and a real
          risk of buying on enthusiasm. Kautilya&rsquo;s job was to build the discipline before the deals, then
          hold it. Across the mandate that meant screening about 300 opportunities, three serious negotiations, two
          deals deliberately killed, and one closed at roughly a 200x discount to comparable pricing.
        </p>

        <h2>Why walking away is the skill that protects your capital</h2>
        <p>
          The instinct most buyers need to unlearn is that a killed deal is a failure. It isn&rsquo;t. In a
          disciplined process, the deals you don&rsquo;t do are as much a product of the work as the one you close,
          because each one you correctly avoid preserves capital and negotiating position for the right target.
        </p>
        <div className="proof-block">
          <div className="proof-label">Why It Mattered</div>
          <p>
            Across this mandate, two of the three opportunities that reached serious negotiation did not survive
            scrutiny. Killing them was not lost work, it preserved an estimated $30K to $65K in losses and
            overpayment, and kept the buyer&rsquo;s capital and attention available for the deal that did clear.
          </p>
        </div>

        <h2>The five gates every deal should clear</h2>
        <p>
          The framework has to exist before you see a single target, or excitement and sunk cost will bend the
          decision when they arrive. Every opportunity clears the same five gates in sequence, and any failure is
          an automatic disqualification, no progression on sector enthusiasm alone. Kautilya built these gates
          first, then ran every opportunity through them.
        </p>

        <div className="data-table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Gate</th>
                <th>What it confirms</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1. Financial reality</td><td>The business is economically real, cash-flow quality, revenue concentration, unit economics.</td></tr>
              <tr><td>2. Risk identification</td><td>Structural and operational risks surfaced, regulatory, competitive, dependency.</td></tr>
              <tr><td>3. Market validation</td><td>The market has depth and durability, saturation, growth ceiling, intensity.</td></tr>
              <tr><td>4. Price discipline</td><td>Price reflects risk, risk-adjusted valuation, comparables, a defined walk-away threshold.</td></tr>
              <tr><td>5. Deal structure</td><td>The deal works after close, term-sheet adequacy, risk allocation, transferability.</td></tr>
            </tbody>
          </table>
        </div>

        <p>
          The sequence matters. The early gates are cheap to run and kill weak deals fast; the later gates are
          where sunk cost has already built up, which is exactly why they have to be as binding as the first.
        </p>

        <h2>Killing a deal on structure, not just the numbers</h2>
        <p>
          Some businesses are perfectly healthy and still bad acquisitions, because of how the deal is built. A
          strong operating business wrapped in a structure that leaves the seller with leverage, a conflict, or a
          way to erode value post-close is not worth doing at any price. This is the trap the fifth gate exists to
          catch.
        </p>
        <p>The first serious target was exactly that trap, and the team called it.</p>
        <div className="proof-block">
          <div className="proof-label">Deal One · Killed Pre-LOI</div>
          <p>
            The target had about $3K MRR, a credible niche brand, positive growth and viable fundamentals. It
            passed the first three gates. It failed on structure: the seller required seller financing as the
            primary structure (leaving the buyer with insufficient downside protection), ran a competing product
            concurrently, and rejected every risk-mitigation term offered, non-compete, revenue-share, equity
            alignment. Kautilya advised killing it pre-LOI. The principle it established held for the rest of the
            mandate: a strong business plus an inadequate structure equals a poor acquisition.
          </p>
        </div>

        <h2>Why the LOI is not the finish line</h2>
        <p>
          A signed letter of intent feels like a commitment, and that feeling is precisely the danger. Post-LOI
          diligence exists to catch what screening missed, and it&rsquo;s where deterioration hides behind headline
          metrics. The gates have to keep binding after the LOI, when momentum is strongest and walking away feels
          most costly. It usually isn&rsquo;t.
        </p>
        <div className="proof-block">
          <div className="proof-label">Deal Two · Terminated Post-LOI</div>
          <p>
            The second target passed screening and reached a signed LOI. Then seven days of post-LOI diligence
            surfaced four critical risks: a 7-day churn rate high enough to structurally compromise revenue,
            cash-flow fluctuations with no stabilisation trend (making downside modelling impossible), no
            proprietary technology (replicable with minimal effort), and entirely founder-dependent operations with
            no team, documentation or transferable process. Favourable terms and a 25% upfront couldn&rsquo;t
            offset that concentration of risk. Kautilya recommended termination; the LOI was walked, preserving
            roughly $9K to $15K a completed deal would likely have lost within 6 to 12 months.
          </p>
        </div>
        <p>
          Post-LOI termination is uncommon precisely because of momentum bias, which is what makes it a signal of
          discipline rather than indecision. Walking away here was the framework working exactly as designed.
        </p>

        <h2>What the discipline produced</h2>
        <p>
          The one deal that cleared all five gates was a GPT-native education platform with 2.5M conversations of
          usage history, acquired for $12,000, all-cash, zero contingencies, about $0.0048 per conversation against
          $2 to $3 for comparable assets, a discount of roughly 200x. Because the earlier gates had done their
          work, diligence on the winning deal took only a few hours; the framework had already filtered out
          everything that would have needed defending.
        </p>
        <div className="proof-block">
          <div className="proof-label">The Real Deliverable</div>
          <p>
            The buyer walked away with more than one asset. They had a defined acquisition mandate, a reusable
            five-gate framework, two documented kill analyses, a clean 200x-discount acquisition, and a post-close
            operator already prepared. The reusable framework, not any single deal, was the durable product of the
            engagement, and building that discipline into a first-time buyer is exactly the kind of outcome
            Kautilya is engaged to deliver. If you want that same discipline built for your own mandate,{' '}
            <Link href="/engage">Kautilya can build the gates with you</Link>.
          </p>
        </div>

        <p>
          The same five gates are what surface the numbers a target has to survive in the first place, whether
          that&rsquo;s{' '}
          <Link href="/stories/msp-buy-side-diligence">rebuilding an MSP&rsquo;s margins from source</Link> or{' '}
          <Link href="/stories/inspire3">validating an online business&rsquo;s revenue transaction by transaction</Link>.
        </p>

        <div className="story-faq">
          <h2 className="story-faq-title">Frequently asked</h2>
          <div className="story-faq-item">
            <h3 className="story-faq-q">When should you walk away from an acquisition?</h3>
            <p className="story-faq-a">
              When a target fails a predefined gate, financial reality, risk, market, price or structure, even
              after weeks of diligence. Sunk cost is not a reason to close a bad deal; the gates exist so the
              decision is made on fundamentals, not momentum.
            </p>
          </div>
          <div className="story-faq-item">
            <h3 className="story-faq-q">What are the red flags that should kill a deal?</h3>
            <p className="story-faq-a">
              A structure that leaves the seller with leverage or a competing interest, fundamentals deteriorating
              beneath healthy headline metrics, no defensible moat, and total founder dependency. A single flag may
              be manageable; a concentration of them rarely is. How a seller responds when you raise a problem is
              itself a signal.
            </p>
          </div>
          <div className="story-faq-item">
            <h3 className="story-faq-q">Is it normal to walk away after signing an LOI?</h3>
            <p className="story-faq-a">
              Yes. An LOI is not a binding commitment to close; post-LOI diligence exists to catch problems
              screening missed. Terminating there is uncommon only because momentum makes it feel costly, which is
              why the discipline matters. In this mandate, one of the two kills happened after the LOI.
            </p>
          </div>
          <div className="story-faq-item">
            <h3 className="story-faq-q">What is a five-gate deal evaluation framework?</h3>
            <p className="story-faq-a">
              A fixed sequence of go/no-go checks, financial reality, risk, market, price discipline and deal
              structure, that every opportunity must clear before progressing. Failing any gate is automatic
              disqualification. Defined before sourcing, it converts evaluation from enthusiasm into consistent,
              risk-adjusted analysis.
            </p>
          </div>
        </div>

        <div className="story-coda">
          <div className="coda-text">
            Knowing when to walk away is not a failure of process. It is the process working exactly as designed.
          </div>
        </div>
      </article>
    </>
  );
}
