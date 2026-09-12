'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import { useReadingProgressAndShareBar } from '@/components/useReadingProgressAndShareBar';

export default function BlogHowToFindAcquisitionCapital() {
  useReadingProgressAndShareBar();

  const shareTwitter = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Where acquisition capital actually comes from, and the work you need to finish before your first investor conversation, via @microsearchfund');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  }, []);

  const shareLinkedIn = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  }, []);

  const shareEmail = useCallback(() => {
    const subject = encodeURIComponent('How to Find Acquisition Capital to Buy a Business');
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
          <span className="meta-tag">Buyer Guides</span>
          <span className="meta-tag">Funding</span>
          <span className="meta-tag">10 min read</span>
        </div>
        <h1>How to Find Acquisition Capital to Buy a Business</h1>
        <div className="subtitle">
          Where Funding Actually Comes From, and the Work to Do Before Your First Investor Conversation
        </div>
        <p className="blog-author-byline">By <a href="/team">Dev Shah</a>&nbsp;&nbsp;·&nbsp;&nbsp;12 September 2026</p>
        <div className="hero-line" />
      </div>

      {/* ── Body: uses .story-body, .pull-quote, .constraint-list, .story-coda ── */}
      <article className="story-body">
        <p>
          Most people trying to buy a business get the sequence backwards. They spend three
          months building a deck, approach forty investors, collect polite refusals, and conclude
          that capital for acquisitions doesn&apos;t exist.
        </p>
        <p>
          Capital exists. What didn&apos;t exist was any reason for those investors to believe the
          person asking.
        </p>
        <p>
          This piece covers where acquisition funding actually comes from, what gets underwritten
          before anyone reads your growth plan, and the specific work you need finished before
          your first investor conversation. Read the last part carefully, because almost every
          failed raise traces back to skipping it.
        </p>

        <div className="key-takeaways">
          <div className="phase-label">Key Takeaways</div>
          <ul>
            <li>Funded deals come through two channels almost exclusively: international search-fund-style capital, and domestic relationship capital (family offices, HNI, diaspora money).</li>
            <li>Most markets outside the US have no SBA equivalent — no government-backed lending built to finance buying someone else&apos;s equity — so assume an equity-heavy structure until a banker tells you otherwise.</li>
            <li>Investors underwrite <em>you</em> before they underwrite the business: whether you&apos;ll relocate, whether you understand what you&apos;re signing up for, and whether you&apos;ve done anything hard before.</li>
            <li>Log a minimum of twelve substantive seller conversations, ideally twenty, in one vertical before approaching a single investor. This is the single highest-leverage thing in your control.</li>
          </ul>
        </div>

        <h2>Where the Money Actually Comes From</h2>
        <p>
          Outside a handful of mature markets, there is no domestic institutional infrastructure
          built for individual acquirers. No government guarantee scheme that underwrites the
          purchase of an existing company, no lender comfortable advancing against goodwill or
          cash flow alone, and no established community of investors who write cheques for
          first-time buyers simply because the asset class is familiar to them. Anyone telling you
          otherwise is selling a course.
        </p>
        <p>Cap tables that actually close come together through two channels, and almost nothing else.</p>

        <h3>Channel one: international capital</h3>
        <p>
          The global search fund ecosystem is four decades old and has produced returns that make
          it an established allocation rather than an experiment. Stanford&apos;s Center for
          Entrepreneurial Studies has tracked more than 600 search funds since 1984 across the US
          and Canada, with international funds across Western Europe, Latin America, and Asia
          monitored by IESE in Barcelona; a 2024 analysis of 681 qualifying funds put aggregate
          pre-tax IRR at 35.1% and return on invested capital at 4.5x. Those numbers explain why
          dedicated funders, family offices with international mandates, and fund-of-fund
          structures keep allocating into markets they cannot visit often.
        </p>
        <p>
          Smaller and emerging markets register on that map, thinly, but they register. The
          investors worth your time are the ones already holding positions in searchers operating
          outside their home market, because they already have a template for underwriting an
          operator somewhere they don&apos;t live. They understand currency risk, governance
          distance, and the reality that their board seat gets exercised over video calls at
          inconvenient hours.
        </p>
        <p>Approaching them requires you to be legible against that template. Which means understanding how their existing portfolio works before you write to them.</p>

        <h3>Channel two: local relationship capital</h3>
        <p>
          The second channel is domestic, relationship-led, and considerably less structured:
          family offices, single-family HNI capital, operating owners from adjacent industries,
          and expatriate or diaspora money looking for exposure back home with an operator
          attached.
        </p>
        <p>
          This capital behaves differently from institutional money, and you should expect that.
          It moves on trust rather than on process. It often arrives without a standard term
          sheet. It asks about your background, your track record, and who vouches for you before
          it asks about EBITDA multiples. It frequently wants more control than a standard
          acquisition structure grants, and it sometimes wants to be involved operationally in
          ways that will slow you down.
        </p>
        <p>
          None of that makes it worse capital. It makes it capital that requires a different
          conversation. Family offices everywhere have watched a couple of decades of
          venture-style losses and have grown sharply interested in cash-generating assets with
          visible earnings. A profitable regional manufacturer throwing off a healthy, boring
          EBITDA margin is a proposition they understand better than most growth-stage pitches
          they hear.
        </p>

        <h2>The Missing Piece: Most Markets Have No SBA Equivalent</h2>
        <p>
          Address this early, because it&apos;s one of the largest structural differences buyers
          underestimate, and almost every imported playbook you&apos;ll read quietly assumes it
          away.
        </p>
        <p>
          In the United States, acquisition entrepreneurs operate inside a government-backed
          lending programme built specifically for this transaction. Small Business
          Administration (SBA) lending lets a qualified buyer acquire an established company with
          a modest equity contribution, amortised over ten years, at rates a small business can
          actually service, because a federal guarantee absorbs a large share of lender risk. That
          single policy is why a 32-year-old with savings and no institutional backing can own a
          multi-million-dollar revenue business. It&apos;s not entrepreneurial culture doing that
          work. It&apos;s underwriting policy.
        </p>
        <p>Almost nowhere else has a direct equivalent. Nothing close.</p>
        <p>
          Whatever small-business credit architecture does exist locally (guarantee schemes,
          development-bank facilities, government-backed loan programmes) is usually designed to
          fund operations, equipment, and expansion for a business a promoter already owns. It is
          not designed to finance the purchase of somebody else&apos;s equity. On top of that, many
          banking systems restrict lending directly against the acquisition of shares, which
          removes the most obvious workaround before you reach it.
        </p>
        <p>So the American structure of roughly 10% buyer equity, 90% cheap amortising debt has no counterpart in most markets. What you have access to instead:</p>
        <ul className="constraint-list">
          <li><strong>Asset-backed lending</strong> against land, buildings, and machinery, which works only where the target owns hard assets and the seller permits the charge.</li>
          <li><strong>Promoter-guaranteed facilities</strong>, which means your personal balance sheet, not the target&apos;s cash flows.</li>
          <li><strong>Working capital lines</strong> that fund the business post-close and contribute nothing to the purchase price.</li>
          <li><strong>Non-bank and private credit</strong> at rates that make any thin-margin deal unworkable, typically well into double digits.</li>
          <li><strong>Seller financing</strong>, which is culturally unfamiliar to many owners but negotiable, and often the only real leverage available to you.</li>
        </ul>
        <p>
          Two consequences follow. Assume your structure is equity-heavy until a banker tells you
          otherwise in writing, and treat seller financing as a primary negotiation objective
          rather than a nice-to-have. Buyers who model a 60% debt stack because an American case
          study showed one will discover the gap during diligence, which is the most expensive
          possible place to discover it.
        </p>
        <p>
          The broader point is worth sitting with. The absence of a US-style lending programme is
          precisely why individual acquirers remain rare outside America, why the sellers you
          approach have often never met one, and why the owner reading your letter has no category
          to file you under. It&apos;s also why the equity conversation described in the rest of
          this piece carries so much weight. In the US, capital is largely a policy question.
          Almost everywhere else, it&apos;s a relationship question.
        </p>
        <div className="pull-quote">
          <p>
            One further note before you raise anything across a border. Foreign capital entering
            an acquisition vehicle typically triggers exchange control rules, valuation
            requirements, sector restrictions, and reporting obligations that vary by
            jurisdiction. Structure this with local counsel before you take a single dollar,
            pound, or euro, not after a handshake.
          </p>
        </div>

        <h2>Investors Underwrite You Before They Underwrite the Business</h2>
        <p>This is the part most first-time buyers refuse to accept, so it needs stating bluntly.</p>
        <p>
          Nobody is funding your thesis. Your thesis is a hypothesis about an industry that any
          competent analyst could assemble in a week. What cannot be assembled in a week is
          confidence that you, personally, will still be running a difficult business in year
          four, when the largest customer leaves and two senior people resign in the same month.
        </p>
        <p>
          Buying a business demands personal conviction, not a mind map. Investors are testing
          whether you have it, and the tests are not subtle.
        </p>
        <ul className="constraint-list">
          <li><strong>Will you actually move?</strong> If the target is several hours from where you currently live, the question of whether you&apos;ll relocate isn&apos;t a lifestyle detail: it&apos;s the whole underwriting. Waffling here ends conversations.</li>
          <li><strong>Do you understand what you&apos;re signing up for?</strong> Running an 80-person operation with unionised labour, regulatory complications, and a founder&apos;s relative still on the payroll is not an intellectual exercise. Candidates who describe the operational reality in specific terms outperform candidates who describe the growth opportunity in exciting terms.</li>
          <li><strong>Have you done anything hard before?</strong> Not prestigious. Hard. Investors read for evidence of follow-through under conditions where quitting was available and easy.</li>
          <li><strong>Why this, and why not something easier?</strong> You will be asked, repeatedly, why you aren&apos;t simply taking a job or building a startup. The answer needs to be true. Rehearsed answers are audible.</li>
        </ul>
        <p>Only after those questions resolve does anyone care about your growth plan. Get the order right in your own head and your conversations improve immediately.</p>

        <h2>Do the Ground Work First: Twelve Conversations Before One Investor Email</h2>
        <p>Here is the discipline that separates funded searchers from the rest, and it&apos;s entirely within your control.</p>
        <p>Find dealflow and talk to sellers long before you talk to investors.</p>
        <p>
          Not a target list. Not a screened universe of 400 companies from a database. Actual
          conversations with actual owners who have told you actual things about their
          businesses. A serious searcher should have at minimum a dozen positive seller
          conversations logged before approaching a single investor, and twenty is better.
        </p>

        <h3>Why this changes everything</h3>
        <p>
          Investors are buying certainty, and certainty in this asset class means information that
          predates a process. Anyone can react to a CIM. A CIM means a banker is running an
          auction, the numbers are dressed, and several other bidders are reading the same
          document. Value accrues to the buyer who knew something before the document existed.
        </p>
        <p>
          When you walk in with fourteen logged owner conversations across one vertical, several
          things become true at once. You&apos;ve proved you can get owners on the phone, which is
          the hardest and least teachable part of the job. You have proprietary information about
          pricing expectations, succession timelines, and margin structures in that segment.
          You&apos;ve demonstrated that your thesis survived contact with reality instead of dying
          on the first call. And you&apos;ve shown that the search will actually happen, because it
          already started.
        </p>
        <div className="pull-quote">
          <p>The investor is no longer funding an idea. They&apos;re funding momentum that exists whether or not they participate.</p>
        </div>

        <h3>What a positive conversation means</h3>
        <p>Be honest with yourself about the bar, because inflating this number is self-defeating.</p>
        <p>
          A positive conversation is one where the owner engaged with the substance. They
          described their succession situation, mentioned a number, explained why they built the
          business the way they did, or agreed to meet again. A polite refusal is not positive. A
          voicemail is not a conversation. A broker sending you a teaser is neither.
        </p>
        <p>
          Log each one with the date, the company, the owner&apos;s stated position, the revenue
          and margin range if you got it, and what happens next. That document becomes the
          strongest exhibit in your raise, and it&apos;s the one document no competing searcher can
          copy.
        </p>

        <h3>Soft-pitching the specifics</h3>
        <p>For each conversation, be able to articulate three things without notes.</p>
        <ul className="constraint-list">
          <li><strong>The vertical logic.</strong> Why this segment generates durable earnings: replacement demand, regulatory moats, switching costs, fragmentation that permits consolidation, whatever is genuinely true.</li>
          <li><strong>Your operating edge in that specific vertical.</strong> Not general competence. If you spent five years in industrial sales, say what you would do in the first ninety days with a component manufacturer&apos;s customer concentration problem. Specificity here is the whole game.</li>
          <li><strong>The mutual case.</strong> What the owner gets, what the business gets, and why the transition works. If you can&apos;t make this case to a seller, you can&apos;t make it to an investor either, because they will ask you to.</li>
        </ul>

        <h2>Investigate the Investors Before You Contact Them</h2>
        <p>Treat investor research with the same rigour you&apos;d apply to a target company. Most searchers don&apos;t, and it shows in the first email.</p>
        <p>
          Nearly every investor worth approaching already holds positions in other searchers and
          other operating companies. That portfolio is public information, or close to it, and it
          tells you exactly where you fit or don&apos;t.
        </p>
        <ul className="constraint-list">
          <li><strong>Map the portfolio.</strong> What sectors, what geographies, what deal sizes, what year they entered. A funder holding three industrial services businesses across two continents has a visible pattern.</li>
          <li><strong>Find the synergy gap.</strong> This is the actual objective. Look for the position their portfolio implies but doesn&apos;t yet hold. Geographic exposure they want and lack. A sector thesis they&apos;ve expressed publicly without a corresponding investment. A supply chain relationship where your target market would serve a company they already own. Approaching an investor with &ldquo;your portfolio company sources components from a region I&apos;m building a thesis around&rdquo; is a different conversation from &ldquo;I&apos;m searching for a business to buy.&rdquo;</li>
          <li><strong>Read what they publish.</strong> Funders write. Podcasts, letters, panel appearances, LinkedIn posts. Ten hours of listening tells you their underwriting criteria in their own words, which is better research than any intermediary can give you.</li>
          <li><strong>Find the warm path.</strong> Both channels described above run on relationships: portfolio CEOs, prior searchers, business-school alumni networks, ETA communities, and searchers already operating in your target market. A referral from someone they funded outperforms cold outreach by a margin that makes the effort worth it. Note that other searchers are usually generous here, because a functioning local ecosystem benefits everyone in it.</li>
        </ul>

        <h2>Your Background Sets the Terms. Your Work Moves Them.</h2>
        <p>
          Be clear-eyed about this. Background determines your raise. A top-tier MBA, a stint at a
          recognised fund, a prior exit, ten years of P&amp;L ownership at a mid-market firm: each
          of these compresses the distance between introduction and cheque. Someone with those
          markers raises faster, on better terms, with less proof required. Pretending otherwise
          helps nobody.
        </p>
        <p>But background is the starting position, not the outcome.</p>
        <p>
          The searcher with fourteen live owner relationships in a vertical nobody is covering, a
          mapped pipeline of 200 filtered targets, and a signed LOI in hand raises capital
          regardless of where they studied. The searcher with a perfect CV and no seller
          conversations raises nothing, because there&apos;s nothing to underwrite except
          potential, and potential is cheap.
        </p>
        <p>
          On-ground work moves the needle farther than you think. Further than the credential,
          further than the deck, further than the introduction you spent two months chasing. Every
          conversation with an owner is an asset that compounds, and unlike your background,
          it&apos;s available to you starting Monday.
        </p>
        <div className="pull-quote">
          <p>Go get the dealflow first. The capital conversation gets dramatically easier when you no longer need it to begin.</p>
        </div>

        <h2>Where This Fits With the Rest of the Search</h2>
        <p>
          Raising capital is downstream of sourcing, not a parallel track. If you haven&apos;t
          built the seller-conversation pipeline this piece argues for, see how that outreach
          actually runs day to day in{' '}
          <Link href="/blog/analyst-diaries-direct-mail-deal-origination">our direct-mail deal origination playbook</Link>
          , and for how a buy-side advisor fits alongside your own search,{' '}
          <Link href="/blog/what-is-buy-side-ma-advisory">what buy-side M&amp;A advisory is</Link>
          {' '}— the conversations you log in either process are the exhibit that makes the capital conversation possible in the first place.
        </p>

        {/* FAQ */}
        <div className="blog-faq">
          <div className="phase-label" style={{ marginBottom: 20 }}>Frequently Asked Questions</div>

          <div className="blog-faq-item">
            <div className="blog-faq-q">How much capital do you need to buy a business?</div>
            <p className="blog-faq-a">It depends entirely on deal size and structure, but outside markets with mature acquisition-lending infrastructure, assume you&apos;ll be funding most of the purchase price with equity rather than debt. Model conservatively and confirm lending appetite before committing to a structure.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">Can foreign investors fund a business acquisition?</div>
            <p className="blog-faq-a">Often yes, subject to exchange control regulations, sector caps, valuation and pricing requirements, and reporting obligations that vary by country. This is genuinely complex and jurisdiction-specific. Engage counsel before accepting foreign capital into any acquisition vehicle.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">Do search funds exist outside the US?</div>
            <p className="blog-faq-a">Yes. The model is well established internationally and tracked by institutions like IESE and Stanford. The maturity of the local ecosystem varies a lot by market. International funders who back searchers in other markets are often the most realistic institutional source, alongside local family offices and HNI capital that operate on a relationship basis rather than a standardised structure.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">How many seller conversations should I have before approaching investors?</div>
            <p className="blog-faq-a">At least a dozen substantive ones, ideally twenty, concentrated in a single vertical. Quality matters more than count. A conversation where the owner disclosed their succession timeline and a revenue range is worth ten polite refusals.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">Is there a government-backed lending programme for buying a business?</div>
            <p className="blog-faq-a">In the US, yes: SBA lending. Almost everywhere else, no direct equivalent exists. Local small-business credit and guarantee schemes typically fund operations, equipment, and expansion for a business the promoter already owns, not the purchase of somebody else&apos;s equity. This absence is the main reason acquisition entrepreneurship remains comparatively rare outside the US, and why deals elsewhere tend to be structured equity-heavy.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">Will banks lend against a target&apos;s cash flows?</div>
            <p className="blog-faq-a">Generally no, not in the way US lenders do for small acquisitions. Many banking systems restrict lending against share acquisitions, so expect asset-backed facilities, promoter guarantees, seller financing, and private credit instead of cash-flow-based acquisition finance. Verify your specific situation with a banker early, before your structure depends on the answer.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">Does my background matter more than my dealflow?</div>
            <p className="blog-faq-a">Background determines how quickly a conversation starts and on what terms. Dealflow determines whether it finishes. Neither substitutes for the other, but only one is within your control this week.</p>
          </div>
        </div>

        {/* Sources & Method */}
        <div className="sources-appendix">
          <div className="phase-label" style={{ marginBottom: 20 }}>Sources &amp; Method</div>
          <h3>Reference material</h3>
          <ul>
            <li>Stanford Graduate School of Business, Center for Entrepreneurial Studies, search fund studies &mdash; reference for the 40-year US/Canada search fund track record and the 2024 international funds data point (681 qualifying funds, 35.1% aggregate pre-tax IRR, 4.5x ROIC).</li>
            <li>IESE Business School, Barcelona &mdash; reference for international search fund tracking across Western Europe, Latin America, and Asia.</li>
            <li>US Small Business Administration, 7(a) lending programme overview &mdash; reference for the SBA acquisition-lending structure described.</li>
          </ul>
          <h3>Labelled inference, not data</h3>
          <p>The characterisation of local relationship capital, the absence of an SBA equivalent in most non-US markets, and the recommended minimum of twelve seller conversations are structural reasoning and field experience, not a published dataset. Not investment advice.</p>
        </div>

        {/* CTA */}
        <div className="story-coda">
          <p className="coda-text">
            Building the seller pipeline an investor will actually underwrite?
            We run off-market deal origination for buy-side clients and acquisition entrepreneurs.
          </p>
          <Link href="/engage" className="coda-link">Begin the Conversation</Link>
        </div>

      </article>
    </>
  );
}
