'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import { useReadingProgressAndShareBar } from '@/components/useReadingProgressAndShareBar';

export default function BlogAnalystDiariesDirectMailOutreach() {
  useReadingProgressAndShareBar();

  const shareTwitter = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('2,000 letters in: what direct-mail deal origination for buy-side M&A actually looks like, day to day, via @microsearchfund');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  }, []);

  const shareLinkedIn = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  }, []);

  const shareEmail = useCallback(() => {
    const subject = encodeURIComponent("Analyst Diaries: 2,000 Letters In, Here's the Actual Playbook");
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

        /* Stat strip for the numbers-first section */
        .stat-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: 3px;
          margin: 32px 0;
          overflow: hidden;
        }
        .stat-cell {
          background: var(--canvas);
          padding: 22px 18px;
          text-align: center;
        }
        .stat-cell .stat-num {
          font-family: var(--font-fraunces), 'Fraunces', serif;
          font-size: 28px;
          font-weight: 500;
          color: var(--gold);
          line-height: 1.2;
        }
        .stat-cell .stat-label {
          font-family: var(--font-lora), 'Lora', serif;
          font-size: 11px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-top: 6px;
        }
        @media (max-width: 640px) {
          .stat-strip { grid-template-columns: repeat(2, 1fr); }
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
          <span className="meta-tag">Deal Origination</span>
          <span className="meta-tag">India</span>
          <span className="meta-tag">6 min read</span>
        </div>
        <h1>Analyst Diaries: 2,000 Letters In, Here&apos;s the Actual Playbook</h1>
        <div className="subtitle">
          Inside Kautilya&apos;s Direct-Mail Deal Origination Process for a Buy-Side Client
        </div>
        <p className="blog-author-byline">By <a href="/team">Sidharth</a>, Kautilya deal origination team&nbsp;&nbsp;·&nbsp;&nbsp;4 September 2026</p>
        <div className="hero-line" />
      </div>

      {/* ── Body: uses .story-body, .pull-quote, .constraint-list, .story-coda ── */}
      <article className="story-body">
        <p>
          Kautilya runs physical outreach — direct-mail deal origination — for buy-side clients
          searching for acquisition targets in India. This is what that looks like day to day,
          from me, Sidharth, who runs this account.
        </p>
        <p>
          Most write-ups on deal sourcing describe the strategy. This one is the actual operating
          log behind a live campaign: the volume, the verification steps, and where a letter
          campaign for search-fund style acquisitions actually breaks if you let it run on
          autopilot.
        </p>

        <div className="key-takeaways">
          <div className="phase-label">Key Takeaways</div>
          <ul>
            <li>~2,000 direct-mail letters sent to date on one buy-side mandate, each one built from a person-verified lead, not a mail-merge template.</li>
            <li>5–10% of sourced leads get cut on review; RTS (return to sender) on live mail sits under 10%.</li>
            <li>Every batch clears three approval gates — lead list, hook, and mail-house data proof — before it ships.</li>
            <li>The acquisition mandate itself moved mid-campaign as sector criteria were tightened with the client in real time.</li>
          </ul>
        </div>

        <h2>The Numbers First</h2>
        <p>
          Last month: 1,000 letters. This batch: 1,200, started in July, wrapping now in August.
          Total sent to this client to date: ~2,000.
        </p>
        <p>
          The client handed over ~350 semi-enriched leads to start. Everything past that —
          research, verification, decision-maker mapping — was built from scratch as part of this
          buy-side deal origination process.
        </p>

        <div className="stat-strip">
          <div className="stat-cell">
            <div className="stat-num">~2,000</div>
            <div className="stat-label">Letters sent to date</div>
          </div>
          <div className="stat-cell">
            <div className="stat-num">5–10%</div>
            <div className="stat-label">Leads cut on review</div>
          </div>
          <div className="stat-cell">
            <div className="stat-num">&lt;10%</div>
            <div className="stat-label">RTS rate</div>
          </div>
          <div className="stat-cell">
            <div className="stat-num">3</div>
            <div className="stat-label">Approval gates per batch</div>
          </div>
        </div>

        <h2>What &ldquo;2–4 Hours a Day&rdquo; Actually Means</h2>
        <p>
          This account runs 2–4 hours a day, every day, Sundays included. Not glamorous. Here is
          the actual per-lead breakdown behind a cold outreach campaign built for acquisition
          entrepreneurs:
        </p>
        <ul className="constraint-list">
          <li><strong>Confirm mandate fit.</strong> What the business actually does, not the SIC code it&apos;s filed under.</li>
          <li><strong>Estimate scale.</strong> Employee count and revenue signals, to estimate where the business lands on EBITDA.</li>
          <li><strong>Find the real decision-maker.</strong> Founder → managing director → co-founder → CEO, in that order, because half the &ldquo;founders&rdquo; a tool like Apollo lists aren&apos;t even at the company anymore.</li>
          <li><strong>Get a direct email and number</strong> for that person, not a generic company inbox.</li>
          <li><strong>Verify the physical address</strong> the letter will actually be mailed to.</li>
          <li><strong>Write a one-line hook</strong> specific to that business — never reused.</li>
        </ul>
        <p>
          Every batch also clears three separate approval gates before it ships: lead list
          approval, hook approval, and a final data proof from the mail house. Nothing goes out
          until all three clear.
        </p>

        <h2>The Hit Rate: What Gets Cut, and Why</h2>
        <p>
          ~5–10% of sourced leads get cut on review — wrong mandate fit, bad data, or the wrong
          business entirely. Apollo and similar enrichment tools mis-tag small businesses
          constantly; a lead flagged under the right industry can turn out to be something else
          entirely once you check the actual website.
        </p>
        <p>
          RTS (return to sender) on this campaign currently sits under 10%, mostly companies that
          haven&apos;t updated their listed address online. The letter template, the hooks, and
          every print-run negotiation with the mail house are handled directly — the client has
          never had to touch that relationship.
        </p>

        <div className="deal-table-wrap">
          <table className="deal-table">
            <thead>
              <tr><th></th><th>What It Measures</th><th>This Campaign</th></tr>
            </thead>
            <tbody>
              <tr><td>Lead cut rate</td><td data-label="What It Measures">Sourced leads rejected on review (wrong fit, bad data)</td><td data-label="This Campaign">5–10%</td></tr>
              <tr><td>RTS rate</td><td data-label="What It Measures">Mailed letters returned to sender, undeliverable address</td><td data-label="This Campaign">&lt;10%</td></tr>
              <tr><td>Approval gates</td><td data-label="What It Measures">Checkpoints a batch must clear before mailing</td><td data-label="This Campaign">3 (lead list, hook, mail-house proof)</td></tr>
            </tbody>
          </table>
        </div>

        <h2>What the Hooks Actually Look Like</h2>
        <p>
          Not &ldquo;Dear [First Name].&rdquo; Every hook in this direct-mail campaign is built off
          something specific about the business:
        </p>
        <div className="pull-quote">
          <p>
            &ldquo;Structured service model integrating commercial washroom maintenance, sanitary
            care, and hygiene supply into one reliable operational routine. What stood out to us
            is that this business turned a category most people ignore into a dependable,
            contracted-revenue operation.&rdquo;
          </p>
        </div>
        <p>Two more examples from the same batch, to show the range across sectors:</p>
        <ul className="constraint-list">
          <li>&ldquo;Civil and commercial plumbing capability executing complex hydraulic and drainage installations. What stood out to us is that this business built real technical depth in a trade most competitors treat as commodity work.&rdquo;</li>
          <li>&ldquo;Systematic pest management and thermal imaging termite inspection framework for commercial properties. What stood out to us is that this business turned a low-glamour service into a recurring, inspection-driven relationship with every client on its books.&rdquo;</li>
        </ul>
        <p>Each hook takes actual research. No template gets reused across companies.</p>

        <h2>The Mandate Moves Mid-Campaign, Not Just Once</h2>
        <p>
          Two weeks in, the target profile was still being tightened in real time with the
          client: young-founder businesses cut (no obvious succession angle), pure-play
          construction and builders cut (too competitive), solar cut (too cyclical). Metal
          manufacturing and fabrication, and height-compliance, rope-access, and engineering
          services were added — sectors underweighted in the first pass that turned out to have
          more opportunity than expected.
        </p>
        <p>
          One example of the verification chain actually mattering: a business whose listed
          &ldquo;founder&rdquo; had, once verified, stepped back years ago.
        </p>
        <div className="pull-quote">
          <p>The actual buyer/decision-maker was now the son running the business as managing director.</p>
        </div>
        <p>
          That&apos;s a wasted letter and a dead-end introduction if the list isn&apos;t verified
          person by person before it ships.
        </p>

        <h2>What This Post Doesn&apos;t Claim</h2>
        <p>
          The client doesn&apos;t share reply data — he&apos;s on retainer specifically to run this
          outreach and keeps response information to himself, though he&apos;s mentioned getting a
          few replies back. So this post makes no meeting-booked claim. What it shows is the
          volume, the process, and the fact that every one of these 2,000 letters had a person,
          not an algorithm, check the business, check the decision-maker, and write something
          specific enough that it didn&apos;t read like a mail merge.
        </p>
        <div className="pull-quote">
          <p>Outbound at volume looks automated from the outside. It isn&apos;t, if you want it to work.</p>
        </div>

        <h2>Where Direct Mail Fits in Buy-Side Deal Origination</h2>
        <p>
          Kautilya runs buy-side deal origination for acquisition entrepreneurs and search funds.
          Direct mail is one channel inside that broader process — it works because it forces
          person-by-person verification that a purely digital, high-volume cold-email approach
          skips. If you&apos;re earlier in evaluating how buy-side sourcing works end to end, see{' '}
          <Link href="/blog/what-is-buy-side-ma-advisory">what buy-side M&amp;A advisory is</Link>
          {' '}and, for the search-fund-specific version of this model,{' '}
          <Link href="/blog/what-is-a-search-fund">what a search fund is</Link>.
        </p>

        {/* FAQ */}
        <div className="blog-faq">
          <div className="phase-label" style={{ marginBottom: 20 }}>Frequently Asked Questions</div>

          <div className="blog-faq-item">
            <div className="blog-faq-q">What is direct-mail deal origination?</div>
            <p className="blog-faq-a">Direct-mail deal origination is off-market outreach where a buy-side team mails physical letters — not cold emails — to verified decision-makers at businesses that fit an acquisition mandate, to open a conversation about a potential sale. It&apos;s one channel inside a broader buy-side deal sourcing process, usually paired with digital sourcing and direct relationship outreach.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">Is direct mail effective for sourcing acquisition targets?</div>
            <p className="blog-faq-a">It can be, when every lead is individually verified rather than mail-merged. The main advantage over cold email is that it forces person-by-person research — confirming the actual decision-maker, business fit, and address — before a letter ever ships, which cuts down on wasted outreach to the wrong person or a defunct listing.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">What is a good RTS (return to sender) rate for an M&amp;A outreach letter campaign?</div>
            <p className="blog-faq-a">Under 10% is a reasonable benchmark for a well-verified list. Most RTS on a campaign like this comes from businesses that haven&apos;t updated their listed address online, not from bad list-building — which is why address verification is a distinct step before mailing, separate from confirming the business and decision-maker.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">How do you find the real decision-maker at a small or family-owned business for cold outreach?</div>
            <p className="blog-faq-a">Check in order: founder, then managing director, then co-founder, then CEO — because enrichment tools like Apollo frequently list a founder who has since stepped back from day-to-day operations. Verifying against the business&apos;s own website and recent activity, rather than trusting the enrichment tool&apos;s tag, catches cases where an adult child or a hired MD is now the actual decision-maker.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">Why would a buy-side firm change its acquisition mandate mid-campaign?</div>
            <p className="blog-faq-a">Because sector-level opportunity only becomes clear once outreach is underway. Early results and client feedback can reveal that a sector assumed to be attractive (e.g. construction, solar) is too competitive or too cyclical, while an underweighted sector (e.g. metal fabrication, height-compliance and rope-access services) turns out to have more genuine acquisition opportunity than the original mandate assumed.</p>
          </div>
        </div>

        {/* Sources & Method */}
        <div className="sources-appendix">
          <div className="phase-label" style={{ marginBottom: 20 }}>Sources &amp; Method</div>
          <h3>What this is</h3>
          <p>A first-person operating account from the Kautilya analyst running this buy-side direct-mail deal origination campaign. Volumes, cut rates, and RTS figures are this campaign&apos;s own operating data as of August 2026, not an industry-wide benchmark.</p>
          <h3>What&apos;s deliberately not claimed</h3>
          <p>The client does not share reply or meeting-booked data with Kautilya for this engagement, so no conversion or response-rate claim is made here. Not investment advice.</p>
        </div>

        {/* CTA */}
        <div className="story-coda">
          <p className="coda-text">
            Sourcing off-market acquisition targets in India?
            We run verified, person-by-person deal origination for buy-side clients, direct mail included.
          </p>
          <Link href="/engage" className="coda-link">Begin the Conversation</Link>
        </div>

      </article>
    </>
  );
}
