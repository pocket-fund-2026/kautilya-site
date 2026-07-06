"use client";
import { useCallback } from 'react';
import { useReadingProgressAndShareBar } from '@/components/useReadingProgressAndShareBar';
import Link from 'next/link';

export default function StoryMspDueDiligence() {
  useReadingProgressAndShareBar();

  const shareTwitter = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Every agreement, every hour, the whole business rebuilt: how we turned a distrusted 32% margin into a defensible 45% on a $21M MSP, via @kautilya');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  }, []);

  const shareLinkedIn = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  }, []);

  const shareEmail = useCallback(() => {
    const subject = encodeURIComponent('Confidential MSP: Buy-Side DD on a $21M Managed-Services Business');
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
          <span className="meta-tag sector">Managed IT Services (MSP)</span>
          <span className="meta-tag geo">United States · California</span>
          <span className="meta-tag stage">Full-Scope Buy-Side DD</span>
        </div>
        <h1>Confidential MSP: Buy-Side DD on a $21M Managed-Services Business</h1>
        <div className="subtitle">
          How Kautilya rebuilt revenue, cost, and gross profit for all 303 customer agreements and re-costed
          51,063 hours of labor — turning a distrusted 32% blended margin into a defensible, agreement-level
          truth for a buyer under LOI.
        </div>
        <div className="hero-line" />
      </div>

      {/* STORY BODY */}
      <article className="story-body" id="storyBody">
        <p>
          The buyer was looking at a ~15-year-old, California-based managed service provider — recurring IT
          contracts inside one institutional vertical, long-tenured relationships, sticky logos, ~300 active
          agreements. On paper, an attractive recurring-revenue business: roughly $7.35M in the most recent
          year (~$21M across the three-year window), a healthy ~90% net retention, and an owner ready to
          transition.
        </p>
        <p>
          But the blended gross margin was only ~32%, and net profit was thin. A high-cost-of-labor California
          base only sharpened the question the buyer&rsquo;s own investors kept asking: why is profitability
          this thin on $7M of recurring-heavy revenue? The seller&rsquo;s P&amp;L couldn&rsquo;t answer it — it
          could give a single blended margin, but it could not say which customers made money, which lost it,
          or where the real margin lived.
        </p>

        <div className="pull-quote">
          <p>Why is EBITDA so low on $7M of recurring-heavy revenue — and which customers actually carry the business?</p>
        </div>

        <h2>What the Buyer Needed Answered</h2>
        <ul className="constraint-list">
          <li>Why is EBITDA so low on $7M of recurring-heavy revenue?</li>
          <li>What is the revenue per client — and which clients carry the business?</li>
          <li>What is the revenue per contract, and per hour worked?</li>
          <li>What is the true margin by service line — recurring vs. resale vs. project vs. coaching?</li>
          <li>Which customers make money, and which lose it?</li>
        </ul>

        <h2>What Kautilya Delivered</h2>
        <p>
          Kautilya rebuilt the target&rsquo;s economics from primary operational data — not management
          summaries — and handed the buyer a view of the business no P&amp;L could provide: revenue,
          fully-loaded cost, and gross profit for every one of ~300 agreements, every service line, and every
          hour worked. The deliverable set spanned a reconstructed agreement-level workbook, a labor-cost model
          across 51,063 time entries, a three-year revenue rebuild with base/best/worst forecasts, a normalized
          EBITDA bridge with every adjustment independently toggleable, and a full cohort and churn review.
        </p>

        <div className="metrics-strip">
          <div className="metric">
            <div className="metric-value">303</div>
            <div className="metric-label">Agreements Modeled</div>
          </div>
          <div className="metric">
            <div className="metric-value">~$21M</div>
            <div className="metric-label">Revenue Audited (3-Yr)</div>
          </div>
          <div className="metric">
            <div className="metric-value">51,063</div>
            <div className="metric-label">Time Entries Reconstructed</div>
          </div>
          <div className="metric">
            <div className="metric-value">~1 Month</div>
            <div className="metric-label">300 Analyst-Hours, 2 Analysts</div>
          </div>
        </div>

        <h2>Five Businesses Inside One P&amp;L</h2>
        <p>
          What the buyer was actually buying: underneath the single revenue figure sit five distinct lines,
          each with its own margin profile and its own multiple. Buying the blend means overpaying for the weak
          lines and underpaying for the strong one. Rebuilt over three years, the mix looked like this:
        </p>
        <ul className="constraint-list">
          <li><strong>Recurring MSP</strong> — $10.1M revenue (3-yr), 44.5% gross margin</li>
          <li><strong>Resale</strong> — $8.7M revenue (3-yr), 18.3% gross margin</li>
          <li><strong>Contracted Services</strong> — $1.3M revenue (3-yr), 14.5% gross margin</li>
          <li><strong>Coaching</strong> — $0.9M revenue (3-yr), 46.2% gross margin</li>
          <li><strong>Project (one-time)</strong> — $0.15M revenue (3-yr), 83.6% gross margin</li>
        </ul>
        <p>
          ~48% of revenue is the high-margin recurring book; ~47% is low-margin resale and contracted install.
          Day-to-day operations ran in ConnectWise, the PSA system of record for tickets, agreements, time and
          invoices. Custom queries in Metabase pulled that data into structured dumps, and the books sat in
          Intuit/QuickBooks. None of the three agreed at face value — so the first job was to make them agree,
          and the second was to read agreements nested inside one another, with recurring and project work
          keyed differently in the schema.
        </p>

        <h2>Three Systems, Reconciled to One Truth</h2>
        <p>
          Decision-grade economics start with data you can trust. Operational data in ConnectWise was extracted
          through Metabase queries, then validated back against ConnectWise to hold the sanity of every dump —
          and the result was further reconciled to the Intuit books. Nothing in the model rests on a number that
          wasn&rsquo;t checked against its source.
        </p>

        <div className="metrics-strip">
          <div className="metric">
            <div className="metric-value">12,267</div>
            <div className="metric-label">Invoice Lines Rebuilt</div>
          </div>
          <div className="metric">
            <div className="metric-value">51,063</div>
            <div className="metric-label">Time Entries Re-Costed</div>
          </div>
          <div className="metric">
            <div className="metric-value">8,924</div>
            <div className="metric-label">GL Transactions Reconciled</div>
          </div>
        </div>

        <h2>Five Workstreams, Run in Parallel</h2>
        <p>
          Five workstreams ran in parallel and reconciled against one another. The hardest was joining labor to
          revenue — because the system didn&rsquo;t make it easy.
        </p>
        <div className="phase-timeline">
          <div className="phase-block">
            <div className="phase-label">1 · Invoice-Level Revenue Audit &amp; Classification</div>
            <p>
              Rebuilt revenue on the invoice as the unit of record, and sorted every line into five buckets — so
              the buyer sees revenue by what it actually is.
            </p>
          </div>
          <div className="phase-block">
            <div className="phase-label">2 · Labor-Cost Reconstruction</div>
            <p>
              Turned 51,063 time entries into true, fully-loaded cost-to-serve per agreement — separating
              billable engineering from absorbed indirect time.
            </p>
          </div>
          <div className="phase-block">
            <div className="phase-label">3 · Three-System Reconciliation</div>
            <p>
              ConnectWise validated through Metabase and tied to the Intuit books, across accrual and cash — so
              the rebuild stands up to a lender.
            </p>
          </div>
          <div className="phase-block">
            <div className="phase-label">4 · Unit Economics &amp; a Toggleable EBITDA Bridge</div>
            <p>
              Per-agreement margins, revenue-per-hour and per-contract, top-10 concentration, and a bridge the
              buyer can run scenario by scenario.
            </p>
          </div>
          <div className="phase-block">
            <div className="phase-label">5 · Cohort Retention &amp; Churn</div>
            <p>
              ARR by customer by month — where retention holds, where revenue leaks, and which customers to
              build the growth plan around.
            </p>
          </div>
        </div>

        <p>
          Digital agreements nest child agreements tabbed within a parent, with nested billing rolling to a
          sibling. Recurring work is keyed on a record ID and joins directly to time entries. Project work is
          keyed on a separate order number — but its labor hours carried no matching key.
        </p>
        <div className="pull-quote">
          <p>
            Our fix: where no key tied hours to a project order, labor was rolled up by company account and
            attributed back to project revenue. No off-the-shelf join would have caught this.
          </p>
        </div>

        <h2>Finding I · It Isn&rsquo;t One Business. It&rsquo;s Two.</h2>
        <p>
          A single margin figure averages a high-margin service operation with a low-margin resale operation —
          two businesses with different economics and different multiples. By billing structure, agreement-billed
          (recurring) work runs ~47% margin; sales-order/project work runs ~14.5%. The blend (~32%) describes
          neither. The buyer was about to pay a blended price for a blended fiction. The rebuild let them value
          the recurring book on its own economics and price the low-margin resale for exactly what it is —
          passthrough volume, not hidden profit. We didn&rsquo;t estimate it — we modeled every one of the 303
          agreements: revenue from the invoices, labor from the re-costed hours, unit cost from the product
          records, down to a gross profit and margin per contract.
        </p>

        <h2>Finding II · A 45% Recurring Margin, Built Down to Prove It</h2>
        <p>
          A naive allocation flattered the recurring book to 62% — too generous, and not how the cost is
          actually incurred. Kautilya refused that number and built it down to something a lender could
          underwrite: charging the recurring book its fair share of non-billable labor spent winning and
          supporting it (&minus;10 pts), then loading wages for benefits, PTO and payroll taxes the time records
          don&rsquo;t show (&minus;7 pts). The result — a defensible ~45% blended recurring margin — independently
          landed within ~1 point of the seller&rsquo;s own internal analysis (43.8%). A recurring margin built the
          conservative way, validated against the seller&rsquo;s own books, survives a lender&rsquo;s scrutiny and
          doesn&rsquo;t unwind after close.
        </p>

        <h2>Finding III · $3.2M of Labor That Never Touches a Customer</h2>
        <p>
          The investors&rsquo; question — why is profit so thin on $7M of recurring-heavy revenue? — had a
          concrete answer once the labor was fully reconstructed. Across three years, ~$3.2M of labor sits
          outside customer delivery: internal admin, sales and management time (19,140 hours on a single
          internal agreement alone), plus legacy internal tracking. The organization is built and staffed for a
          larger revenue base than it currently carries — a profitable core obscured by overhead, not a broken
          model. This is the bulk of the EBITDA gap and the clearest normalization lever in the deal — it turns
          &ldquo;why is profit low?&rdquo; from an unanswered risk into a quantified, fixable line in the bridge,
          and an integration thesis for a buyer who can grow into the cost base.
        </p>

        <div className="metrics-strip">
          <div className="metric">
            <div className="metric-value">~45%</div>
            <div className="metric-label">Blended Recurring Margin</div>
          </div>
          <div className="metric">
            <div className="metric-value">~18%</div>
            <div className="metric-label">Resale &amp; Project Margin</div>
          </div>
          <div className="metric">
            <div className="metric-value">~$3.2M</div>
            <div className="metric-label">Non-Delivery Labor Identified</div>
          </div>
        </div>

        <h2>The Result</h2>
        <p>
          For the first time, the buyer could see the business the way an operator does: by customer, by
          service line, by hour. That ~32% blend resolved into its parts: a low-margin resale segment (~47% of
          revenue) pulling the average down, a coaching line in decline, and a recurring service book running
          near 45% once labor was fully loaded and overhead was set aside. The buyer stopped underwriting a 32%
          blend — and started underwriting the recurring book that actually drives the value.
        </p>
        <ul className="constraint-list">
          <li>Value the recurring book on its true ~45% margin and price the low-margin resale and declining coaching line for what they are</li>
          <li>Answer the investors&rsquo; question with an evidence-backed story: an organization built for a larger revenue base, not a broken one</li>
          <li>Build a growth plan with a margin plan attached, using the cohort work to pinpoint the ideal customer profile</li>
          <li>Move with conviction — every number traces to a source the buyer and their lender can re-check</li>
        </ul>

        <h2>Deliverables</h2>
        <ul className="constraint-list">
          <li>Reconstructed workbook with a full source trail to ConnectWise, Metabase and Intuit</li>
          <li>Agreement-level P&amp;L across all 303 agreements and five service-line buckets</li>
          <li>Labor cost model — 51,063 time entries loaded and allocated by agreement and role</li>
          <li>Revenue rebuild and forecast — FY2023&ndash;2025 actuals plus base/best/worst scenarios</li>
          <li>Three-system reconciliation across ConnectWise, Metabase and the Intuit ledger</li>
          <li>MRR, cohort and churn review — ARR by customer by month across 36 months</li>
          <li>Normalized EBITDA bridge, one page, every adjustment independently toggleable</li>
          <li>Per-pillar context memos — methodology, assumptions, caveats, and the findings that matter</li>
        </ul>

        <h2>The Team on This Engagement</h2>
        <p>
          Two analysts, ~300 hours, roughly a month, in near-daily working sessions — small enough that every
          record got traced by someone who understood the whole model, not handed off across a large team.
        </p>
        <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', flexWrap: 'wrap', margin: '32px 0 40px' }}>
          <div style={{ textAlign: 'center' }}>
            <img
              src="/images/Dev.jpeg"
              alt="Dev Shah — Founder, Kautilya"
              width={88}
              height={88}
              style={{ width: 88, height: 88, borderRadius: '50%', objectFit: 'cover', marginBottom: 12, border: '1px solid var(--border)' }}
            />
            <div className="team-name" style={{ fontSize: 16, marginBottom: 2 }}>Dev</div>
            <div className="team-role" style={{ marginBottom: 0 }}>Founder</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <img
              src="/images/aum.jpg"
              alt="Aum Thakarkar — Senior Analyst, Kautilya"
              width={88}
              height={88}
              style={{ width: 88, height: 88, borderRadius: '50%', objectFit: 'cover', marginBottom: 12, border: '1px solid var(--border)' }}
            />
            <div className="team-name" style={{ fontSize: 16, marginBottom: 2 }}>Aum</div>
            <div className="team-role" style={{ marginBottom: 0 }}>Senior Analyst</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <img
              src="/images/pushkar.jpeg"
              alt="Pushkar Rathod — Analyst, Kautilya"
              width={88}
              height={88}
              style={{ width: 88, height: 88, borderRadius: '50%', objectFit: 'cover', marginBottom: 12, border: '1px solid var(--border)' }}
            />
            <div className="team-name" style={{ fontSize: 16, marginBottom: 2 }}>Pushkar</div>
            <div className="team-role" style={{ marginBottom: 0 }}>Analyst</div>
          </div>
        </div>
        <p>
          Meet the rest of the team on <Link href="/team">the Kautilya team page</Link>.
        </p>

        <h2>Why This Engagement Matters</h2>
        <p>
          Most advisory firms won&rsquo;t give a sub-$10M deal this much attention — the model doesn&rsquo;t
          allow it. Kautilya put ~300 analyst-hours into this engagement over roughly a month, in near-daily
          working sessions, tracing individual records through the systems until each number was real. That
          intensity is <Link href="/approach">the same five-phase methodology</Link> behind every Kautilya
          mandate — it&rsquo;s how a buyer gets institutional-grade certainty on a deal a larger firm would have
          triaged with a sample and a template.
        </p>
        <p>
          All figures in this case study are anonymized. Target identity, customer names and individual staff
          are withheld — the numbers reflect a live engagement and illustrate method, not investment advice. If
          you&rsquo;re under LOI or staring at a data room on a similar deal,{' '}
          <Link href="/engage">Kautilya can run the same rebuild on yours</Link>.
        </p>

        <div className="story-coda">
          <div className="coda-text">
            You&rsquo;re not buying a P&amp;L. You&rsquo;re buying the business underneath it.
          </div>
        </div>
      </article>
    </>
  );
}
