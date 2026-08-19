"use client";
import { useCallback } from 'react';
import { useReadingProgressAndShareBar } from '@/components/useReadingProgressAndShareBar';
import Link from 'next/link';
import Image from 'next/image';

export default function StoryMspDueDiligence() {
  useReadingProgressAndShareBar();

  const shareTwitter = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('How to do buy-side due diligence on an MSP , via @kautilya');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  }, []);

  const shareLinkedIn = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  }, []);

  const shareEmail = useCallback(() => {
    const subject = encodeURIComponent('How to Do Buy-Side Due Diligence on an MSP');
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
        <h1>How to Do Buy-Side Due Diligence on an MSP</h1>
        <div className="subtitle">
          How Kautilya applied it to a real $21M MSP under LOI, turning a distrusted 32% blended margin into a
          defensible 45% recurring margin.
        </div>
        <div className="hero-line" />
      </div>

      {/* STORY BODY */}
      <article className="story-body" id="storyBody">
        <div className="last-updated">Last updated: August 14, 2026</div>

        <div className="short-answer">
          <div className="short-answer-label">The Short Answer</div>
          <p>
            Don&rsquo;t trust the blended margin. Separate revenue into its real service lines, re-cost labour at
            fully-loaded rates, and reconcile the PSA, billing and accounting systems against each other, then
            build an EBITDA bridge where every adjustment traces to a source record. The recurring book, priced on
            its own economics, is what you&rsquo;re actually buying. Below is how that works, and how Kautilya
            applied it to a real $21M MSP under LOI.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', flexWrap: 'wrap', margin: '0 0 16px' }}>
          <div style={{ textAlign: 'center' }}>
            <Image
              src="/images/Dev.jpeg"
              alt="Dev Shah, Founder of Kautilya — buy-side M&A advisory"
              title="Dev Shah — Founder, Kautilya"
              width={88}
              height={88}
              style={{ width: 88, height: 88, borderRadius: '50%', objectFit: 'cover', marginBottom: 12, border: '1px solid var(--border)' }}
            />
            <div className="team-name" style={{ fontSize: 16, marginBottom: 2 }}>Dev</div>
            <div className="team-role" style={{ marginBottom: 0 }}>Founder</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Image
              src="/images/aum.jpg"
              alt="Aum Thakarkar, Senior Analyst at Kautilya — deal sourcing and market intelligence"
              title="Aum Thakarkar — Senior Analyst, Kautilya"
              width={88}
              height={88}
              style={{ width: 88, height: 88, borderRadius: '50%', objectFit: 'cover', marginBottom: 12, border: '1px solid var(--border)' }}
            />
            <div className="team-name" style={{ fontSize: 16, marginBottom: 2 }}>Aum</div>
            <div className="team-role" style={{ marginBottom: 0 }}>Senior Analyst</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Image
              src="/images/pushkar.jpeg"
              alt="Pushkar Rathod, Analyst at Kautilya — buy-side due diligence"
              title="Pushkar Rathod — Analyst, Kautilya"
              width={88}
              height={88}
              style={{ width: 88, height: 88, borderRadius: '50%', objectFit: 'cover', marginBottom: 12, border: '1px solid var(--border)' }}
            />
            <div className="team-name" style={{ fontSize: 16, marginBottom: 2 }}>Pushkar</div>
            <div className="team-role" style={{ marginBottom: 0 }}>Analyst</div>
          </div>
        </div>
        <p style={{ textAlign: 'center', fontSize: 13, color: 'var(--text-muted)', margin: '0 0 40px' }}>
          Two analysts, ~300 hours, roughly a month — the team behind this engagement.{' '}
          <Link href="/team">Meet the rest of Kautilya</Link>.
        </p>

        <p>
          A managed service provider almost never makes money the way its P&amp;L suggests. A single blended gross
          margin averages together service lines that have nothing in common, so the headline number describes
          none of them. Doing diligence properly means taking that blend apart and rebuilding it from source data
          until you can see which customers, which contracts and which hours actually carry the business.
        </p>
        <p>
          That is the general method. What it looks like in practice is best shown through a real engagement. A
          buyer came to Kautilya under LOI on a fifteen-year-old California MSP, about $21M of revenue across three
          years, ~90% net retention, and a nagging problem: the blended margin was only ~32%, net profit was thin,
          and the seller&rsquo;s P&amp;L couldn&rsquo;t say why. It could give one blended number; it couldn&rsquo;t
          say which customers made money or where the margin lived. The buyer&rsquo;s investors kept asking. So the
          method below isn&rsquo;t hypothetical, it&rsquo;s what the team actually did.
        </p>

        <h2>Step 1, Separate the blend into real service lines</h2>
        <p>
          The first move is to stop treating the business as one thing. Split the P&amp;L into its true components
          and model each on its own, because each line carries a different margin and deserves a different
          multiple. Buying on the blend means overpaying for the weak lines and underpaying for the strong one.
        </p>
        <p>On this deal, that split is where the whole picture changed.</p>
        <div className="proof-block">
          <div className="proof-label">Five Businesses in One P&amp;L</div>
          <p>
            Under the single ~32% blend sat five distinct businesses. Rebuilt across three years: recurring MSP
            work at $10.1M and 44.5% margin, resale at $8.7M and 18.3%, contracted services at $1.3M and 14.5%,
            coaching at $0.9M and 46.2%, and one-time project work at $0.15M and 83.6%. To get there, Kautilya
            modelled each of the ~300 agreements individually, revenue from invoices, labour from re-costed hours,
            unit cost from product records, down to a margin per contract. The blend described none of them.
          </p>
        </div>

        <h2>Step 2, Re-cost labour at fully-loaded rates</h2>
        <p>
          The seller&rsquo;s time-tracking export understates the true cost to serve. It shows billable hours at
          headline wages and hides the benefits, PTO and payroll taxes on them, plus the non-billable time spent
          winning and supporting the work. Load all of it back in before you believe any margin, especially on the
          recurring book, where an unloaded number flatters badly.
        </p>
        <p>This is a place where most diligence takes the flattering number. Kautilya didn&rsquo;t.</p>
        <div className="proof-block">
          <div className="proof-label">62% to a Defensible 45%</div>
          <p>
            A naive allocation flattered the recurring book to 62%. The team refused it and built it down, charging
            the recurring book its fair share of non-billable labour (about 10 points) and loading wages for
            benefits, PTO and payroll taxes (about 7 more), landing a defensible ~45%. That independently came
            within a point of the seller&rsquo;s own internal figure of 43.8%. It rested on turning 51,063 time
            entries into fully-loaded cost per agreement and role.
          </p>
        </div>
        <p>
          The discipline generalises: a margin built the conservative way, one that survives a lender and
          doesn&rsquo;t unwind after close, is worth more to a buyer than a generous one that does.
        </p>

        <h2>Step 3, Reconcile the PSA, billing and accounting systems</h2>
        <p>
          An MSP runs on a PSA system, a billing or query layer, and an accounting ledger, and they rarely agree at
          face value. Decision-grade economics start with tying them together so nothing in the model rests on an
          unchecked number, the standard a lender will hold you to.
        </p>
        <div className="proof-block">
          <div className="proof-label">Three Systems, One Truth</div>
          <p>
            Kautilya extracted ConnectWise data (the PSA of record for tickets, agreements, time and invoices)
            through Metabase queries, validated it back against ConnectWise, then tied it to the Intuit books
            across accrual and cash. The rebuild rested on 12,267 invoice detail lines, 51,063 time entries, and
            8,924 GL transactions, each reconciled to source.
          </p>
        </div>
        <p>
          The hard part here is one an off-the-shelf approach misses entirely, and it&rsquo;s worth understanding
          if you&rsquo;re doing this yourself. Joining labour to revenue meant working across two schemas:
          recurring work keyed cleanly on one identifier and joined directly to time entries, but project labour
          carried no matching key. The team built a company-account catch-all to attribute that project cost back.
          No standard join would have caught it, and missing it would have mis-stated the margin on a whole service
          line.
        </p>

        <h2>Step 4, Build an EBITDA bridge a lender will accept</h2>
        <p>
          The output is a normalized EBITDA bridge where every adjustment is independently toggleable and traces to
          a source record, so a buyer and their lender can re-run it scenario by scenario. Done properly, it turns
          a vague worry into a quantified, fixable line, which is exactly what happened here.
        </p>
        <div className="proof-block">
          <div className="proof-label">Where the Profit Went</div>
          <p>
            The investors&rsquo; question, why is profit thin on $7M, had a concrete answer once labour was fully
            reconstructed: about $3.2M of labour across three years sat outside customer delivery, internal admin,
            sales and management time, including 19,140 hours on one internal agreement. That was the bulk of the
            EBITDA gap and the clearest normalization lever in the deal, reframing a thin-looking business as a
            profitable core carrying overhead built for a larger revenue base. On its own ~45% economics, the
            recurring book was worth roughly $4.5M of gross profit over three years.
          </p>
        </div>

        <h2>What the rebuild let the buyer do</h2>
        <p>
          This is the payoff of doing diligence at this depth rather than running a checklist. For the first time
          the buyer could see the business the way an operator does, by customer, by service line, by hour. The
          32% blend resolved into its parts: low-margin resale pulling the average down, a coaching line in
          decline, and a recurring book near 45% once labour was loaded.
        </p>
        <p>
          That changed what they could do. They stopped underwriting a blended fiction and started underwriting the
          recurring book that actually drives the value. They could answer their investors with evidence. And
          because every number traced to a source they and their lender could re-check, they could move with
          conviction, carrying a re-rated view and a plan to grow the margin, not just the revenue, into their
          financing conversations. That level of reconstruction is the kind of attention most firms reserve for
          deals ten times the size, which is precisely why the small-to-mid-market deals where the real economics
          are buried in the software are the ones{' '}
          <Link href="/engage">Kautilya is built for</Link>.
        </p>
        <p>
          The same source-level discipline applies whether the target runs on ConnectWise or on affiliate and
          payment-processor data, see how it plays out on{' '}
          <Link href="/stories/inspire3">a $1.8M digital wellness portfolio</Link>.
        </p>

        <div className="story-faq">
          <h2 className="story-faq-title">Frequently asked</h2>
          <div className="story-faq-item">
            <h3 className="story-faq-q">What is a good gross margin for an MSP?</h3>
            <p className="story-faq-a">
              A fully-loaded recurring managed-services book typically runs in the mid-40s percent once labour
              carries benefits and overhead; resale and project work run far lower. A single blended figure usually
              overstates resale and understates recurring, so separate them by service line before benchmarking,
              which is exactly what surfaced the real picture on this engagement.
            </p>
          </div>
          <div className="story-faq-item">
            <h3 className="story-faq-q">How long does buy-side diligence on an MSP take?</h3>
            <p className="story-faq-a">
              A full source-level rebuild, reconciling the PSA, billing and ledger and re-costing labour to the
              agreement level, is a matter of weeks with a dedicated team. This one ran roughly a month, about 300
              analyst-hours across two analysts.
            </p>
          </div>
          <div className="story-faq-item">
            <h3 className="story-faq-q">What are the biggest red flags in an MSP&rsquo;s numbers?</h3>
            <p className="story-faq-a">
              A single blended margin with no service-line breakdown, labour that doesn&rsquo;t reconcile to
              payroll once fully loaded, and revenue that doesn&rsquo;t tie between the PSA and the accounting
              system. On this deal all three pointed the same way, the numbers hadn&rsquo;t been stress-tested at
              source, and the real story only appeared once they were.
            </p>
          </div>
        </div>

        <div className="story-coda">
          <div className="coda-text">
            You&rsquo;re not buying a P&amp;L. You&rsquo;re buying the business underneath it.
          </div>
        </div>
      </article>
    </>
  );
}
