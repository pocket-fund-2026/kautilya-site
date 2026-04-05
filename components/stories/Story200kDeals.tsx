"use client";
import { useCallback } from 'react';
import { useReadingProgressAndShareBar } from '@/components/useReadingProgressAndShareBar';
import Link from 'next/link';
import ShimmerImage from '@/components/ShimmerImage';

export default function Story200kDeals() {
  useReadingProgressAndShareBar();

  const shareTwitter = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('How We Closed $200K Worth of Deals in 6 Months , via @kautilya');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  }, []);

  const shareLinkedIn = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  }, []);

  const shareEmail = useCallback(() => {
    const subject = encodeURIComponent('How We Closed $200K Worth of Deals in 6 Months');
    const body = encodeURIComponent(`Check out this story: ${window.location.href}`);
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
        <Link href="/stories" className="back-link">&larr; Stories</Link>
        <div className="meta-row">
          <span className="meta-tag sector">Advisory &amp; Deals</span>
          <span className="meta-tag geo">Bombay / Global</span>
          <span className="meta-tag stage">Deal Closing &middot; Feb 2026</span>
        </div>
        <h1>How We Closed $200K Worth of Deals in 6 Months</h1>
        <div className="subtitle">
          And how we will close $1M in the next 6 months.
        </div>
        <div className="story-date">February 16, 2026</div>
        <div className="hero-line" />
      </div>

      <article className="story-body" id="storyBody">
        <p>
          I&rsquo;m sitting at my desk in Bombay, looking at a wire confirmation for a $39,000 mobile
          game acquisition. It&rsquo;s 11 PM. The buyer is in the US. The seller is in Pakistan.
          I&rsquo;m in India helping them close a deal I found on Reddit three weeks ago.
        </p>
        <p>
          Six months ago, this would&rsquo;ve been weird because I was the one <em>buying</em>{' '}
          businesses, not helping other people buy them.
        </p>
        <p>
          Today? We just closed our 5th advisory deal. $200K total across five completely different
          acquisitions. Five different businesses we helped someone else buy instead of buying
          ourselves.
        </p>
        <p>Here&rsquo;s how that happened (and why it actually makes sense).</p>

        <h2>The Scoreboard</h2>
        <p>Let&rsquo;s start with the receipts. Here&rsquo;s what we closed:</p>

        <figure className="story-img">
          <ShimmerImage src="/images/stories/200k/five-deals.png" alt="The Scoreboard: 5 deals closed · 6 months · 3 countries — $200K total deal value, $1M target by June 2026" width={1200} height={675} />
        </figure>

        <h2>The Five Deals</h2>

        <h3 style={{ color: 'var(--gold)' }}>Runify &mdash; $110K</h3>
        <p>
          Mobile running app. Three months old, ~$2K MRR. Buyer: a 20-year software veteran building
          a consumer mobile portfolio. Structure: $30K upfront, rest on an earnout tied to revenue
          stability and retention metrics. Timeline: 45 days from &ldquo;hey I found this
          thing&rdquo; to closed.
        </p>

        <h3 style={{ color: 'var(--gold)' }}>Dino Games &mdash; $39K</h3>
        <p>
          Mobile game making $3K/month profit on $3&ndash;4K in ad spend. 40&ndash;50% margins. Low
          maintenance. Found on Reddit at 11 PM on a Tuesday. Structure: 56% at close, 44% deferred
          over 12 months. Not tied to growth &mdash; tied to <em>not falling apart</em>.
        </p>

        <h3 style={{ color: 'var(--gold)' }}>Note Companion &mdash; $30K</h3>
        <p>
          Obsidian plugin making $1,500 MRR with zero effort from the founder &mdash; no marketing,
          nothing. Found through X&nbsp;/&nbsp;Twitter. Structure: 33% upfront, 67% over 12 months.
        </p>

        <h3 style={{ color: 'var(--gold)' }}>SmartPrompt &mdash; $12K</h3>
        <p>
          GPT-native education platform. 2.5M conversations, 30&ndash;35 GPTs, 100K+ monthly active
          users. Buyer: a first-time acquirer with a technical background who basically said &ldquo;I
          want to buy something with strong AI-related distribution.&rdquo; We turned that into an
          actual acquisition in 12 weeks. Structure: all cash.
        </p>

        <h3 style={{ color: 'var(--gold)' }}>Daily Trades Newsletter &mdash; $8K</h3>
        <p>
          Finance newsletter with 16,000 subscribers. Buyer: operates a finance media roll-up with
          multiple newsletters and Twitter accounts. Structure: all cash.
        </p>

        <p><strong>Grand total: <span style={{ color: 'var(--gold)' }}>$200K</span> in deal value closed.</strong></p>

        <div className="metrics-strip">
          <div className="metric">
            <div className="metric-value" style={{ color: 'var(--gold)' }}>$200K</div>
            <div className="metric-label">Total Deals Closed</div>
          </div>
          <div className="metric">
            <div className="metric-value" style={{ color: 'var(--gold)' }}>5</div>
            <div className="metric-label">Advisory Deals</div>
          </div>
          <div className="metric">
            <div className="metric-value" style={{ color: 'var(--gold)' }}>6 mo</div>
            <div className="metric-label">Time to Close All Five</div>
          </div>
          <div className="metric">
            <div className="metric-value" style={{ color: 'var(--gold)' }}>11</div>
            <div className="metric-label">Team Members</div>
          </div>
        </div>

        <h2>How We Got Here (The Accidental Pivot)</h2>
        <p>
          Quick rewind: a year ago, Pocket Fund was me buying micro SaaS businesses, newsletters,
          and random mobile apps. We bought 7 things. Sold 2 &mdash; including Sourcely for low six
          figures after buying it for $4K. Classic buy-side operator stuff.
        </p>
        <p>
          We got pretty good at sourcing. Built a machine that threw 30&ndash;50 deals at us every
          week. Most were garbage, but the reps added up.
        </p>
        <p>Then people started asking:</p>
        <p>
          <em>&ldquo;Yo, how are you finding these deals?&rdquo;</em>
          <br />
          Then: <em>&ldquo;Can you help me find deals?&rdquo;</em>
          <br />
          Then: <em>&ldquo;I&rsquo;ll pay you to help me close this.&rdquo;</em>
        </p>
        <p>
          And honestly? I thought advisory was lame. Like, why would I help someone else buy a
          business when I could just buy it myself?
        </p>

        <div className="pull-quote">
          <p>
            You learn 5x faster when you&rsquo;re helping other people close deals.
          </p>
        </div>

        <p>
          When you&rsquo;re buying for yourself, you see 1&ndash;2 deals a year max (capital
          constraints). When you&rsquo;re advising, you see 50+ deals every month. Different buyers.
          Different risk tolerances. Different structures. It&rsquo;s like fast-forwarding your deal
          education.
        </p>
        <p>Plus:</p>
        <ul>
          <li><strong>Better economics</strong> &mdash; Get paid to learn instead of risking your own money</li>
          <li><strong>Bigger deals</strong> &mdash; Help clients buy $100K+ businesses you can&rsquo;t afford yourself</li>
          <li><strong>Network effects</strong> &mdash; Every client becomes a case study, reference, and potential referral source</li>
        </ul>
        <p>
          So we didn&rsquo;t stop buying. We just added advisory on top. And it accidentally became
          the main thing. Team went from 1 (me) to 11 people: analysts, marketing, tech. We opened
          an office in Bombay. Now we&rsquo;re helping people close deals we couldn&rsquo;t dream of
          doing six months ago.
        </p>

        <figure className="story-img">
          <ShimmerImage src="/images/stories/200k/architecture.png" alt="The Accidental Pivot: Buyer → Advisor. Timeline from Solo Buyer (Early 2025) through Sourcing Machine, Advisory Launch, First Deal Closed, $200K Closed (Feb 2026), to Target $1M (June 2026)" width={1200} height={675} />
        </figure>

        <h2>What Actually Works: 3 Things We Learned</h2>

        <h3 style={{ color: 'var(--gold)' }}>1. Deal Structure Matters Way More Than Purchase Price</h3>
        <p>
          Nobody talks about this enough. Buyers obsess over valuation (&ldquo;Is 3x revenue too
          much?!&rdquo;). Sellers obsess over headline numbers (&ldquo;I want $100K!&rdquo;).
        </p>
        <p>
          But the deal that closes? It&rsquo;s the one with the smart structure.
        </p>
        <p>
          <strong>Most deals die over risk allocation, not price.</strong> The seller wants
          certainty. The buyer wants protection. All-cash deals put 100% of the risk on the buyer.
          That&rsquo;s why they don&rsquo;t close &mdash; especially on early-stage or volatile
          assets.
        </p>
        <p>
          <strong>The solution:</strong> Creative structures that align incentives.
        </p>
        <p><strong>Runify case study:</strong></p>
        <ul>
          <li>Total consideration: $110K</li>
          <li>Upfront cash: $30K (27%)</li>
          <li>Deferred: $80K (73%) over 12&ndash;18 months</li>
          <li>Tied to: Revenue stability and retention metrics (not growth)</li>
        </ul>
        <p>Why this worked:</p>
        <ol>
          <li><strong>Seller got their number</strong> &mdash; Still $110K headline, which matters for their portfolio</li>
          <li><strong>Buyer protected downside</strong> &mdash; Only risking $30K if the business collapses</li>
          <li><strong>Aligned incentives</strong> &mdash; Seller sticks around to ensure smooth transition (their payout depends on it)</li>
        </ol>

        <figure className="story-img">
          <ShimmerImage src="/images/stories/200k/hidden-channel.png" alt="Structure > Price: deal mechanics for Runify (27% upfront / 73% deferred) and Dino Games (56% at close / 44% deferred). The pattern: the riskier the asset, the more you defer." width={1200} height={675} />
        </figure>

        <div className="pull-quote">
          <p>
            When you&rsquo;re looking at deals, don&rsquo;t just ask &ldquo;What&rsquo;s the
            price?&rdquo; Ask: how much upfront vs. deferred? What metrics trigger earnout payments?
            Who bears transition risk?
          </p>
        </div>

        <h3 style={{ color: 'var(--gold)' }}>2. Off-Market Sourcing Is a Cheat Code</h3>
        <p>
          Marketplaces (Acquire.com, Flippa, Empire Flippers) are fine. But they&rsquo;re also where
          everyone else is looking. Competition = higher prices + worse terms.
        </p>
        <p>
          <strong>The reality:</strong> The best deals never hit public marketplaces. Why? Because if
          you&rsquo;re a founder with a decent business, you don&rsquo;t want to list publicly. You
          don&rsquo;t want 50 tire-kickers asking for your P&amp;L. You don&rsquo;t want competitors
          seeing your numbers. You don&rsquo;t want your team or customers knowing you&rsquo;re
          thinking about selling.
        </p>
        <p>So where do good deals actually happen? <strong>Direct relationships.</strong></p>
        <p><strong>Method 1: Founder-dense communities</strong></p>
        <ul>
          <li>Runify came from a Twitter thread</li>
          <li>Dino Games came from a Reddit post in r/SideProject</li>
        </ul>
        <p>
          Spend 30 min/day lurking in: Twitter (search for &ldquo;thinking about selling&rdquo;
          &ldquo;looking to exit&rdquo; &ldquo;too busy to maintain&rdquo;), Reddit (r/SideProject,
          r/Entrepreneur, niche subreddits for your sector), Indie Hackers forums, and Discord
          communities relevant to your target sector.
        </p>
        <p><strong>Method 2: Direct outreach to targets</strong></p>
        <p>
          Pick a sector. Build a list. Reach out with a real thesis (not &ldquo;hey wanna
          sell?&rdquo;). Most won&rsquo;t respond. 5&ndash;10% will. That&rsquo;s enough.
        </p>
        <p>
          The key insight: off-market doesn&rsquo;t mean &ldquo;secret deals nobody knows
          about.&rdquo; It means <strong>you create the opportunity instead of waiting for someone
          else to list it.</strong>
        </p>

        <h3 style={{ color: 'var(--gold)' }}>3. First-Time Buyers Need Decision Frameworks, Not Just Deals</h3>
        <p>
          Most people come to us with: <em>&ldquo;I want to buy a SaaS business.&rdquo;</em> Cool.
          What size? What revenue model? What customer segment? What&rsquo;s your growth thesis? How
          hands-on will you be? What&rsquo;s your risk tolerance?
        </p>
        <p>
          They don&rsquo;t know. And that&rsquo;s fine &mdash; but without answers to those
          questions, you can&rsquo;t filter 50 deals/week. You&rsquo;ll waste months looking at
          everything and closing nothing.
        </p>
        <p><strong>Here&rsquo;s the framework we built for the SmartPrompt buyer:</strong></p>
        <p><em>Stage 1: Non-negotiables (must-haves)</em></p>
        <ul>
          <li>Price range: $10K&ndash;$25K (based on capital available)</li>
          <li>Minimum revenue: $500/month (proof of monetization)</li>
          <li>Must be: AI-related (his domain expertise)</li>
          <li>Must NOT be: high customer support, regulated industry, or hardware</li>
        </ul>
        <p><em>Stage 2: Scoring criteria (nice-to-haves)</em></p>
        <ul>
          <li>Strong organic traffic (vs. paid-only)</li>
          <li>Tech stack he knows (Python/JS vs. exotic languages)</li>
          <li>Bootstrapped founder (vs. VC-backed with complicated cap table)</li>
          <li>Simple monetization (subscription &gt; ad-based &gt; affiliate)</li>
        </ul>
        <p><em>Stage 3: Red flags (automatic pass)</em></p>
        <ul>
          <li>Single customer = 50%+ revenue (concentration risk)</li>
          <li>Declining revenue (3+ months down)</li>
          <li>Legal / IP issues</li>
          <li>Seller won&rsquo;t share traffic or revenue data<br/></li>
        </ul>
        <p><br/>
          <strong>Result:</strong> we reviewed 50+ deals in 8 weeks. He only looked at 8 that passed the filter. Made
          offers on 3. Closed 1. Without the framework? He would&rsquo;ve spent 8 weeks looking at
          all 50, getting analysis paralysis, and closing zero.
        </p>
        <p>
          <strong>Bonus insight:</strong> Most buyers fail because they never commit to criteria.
          They keep &ldquo;just looking&rdquo; at deals forever. The framework forces you to commit.
          And commitment is what closes deals.
        </p>

        <h2>What Didn&rsquo;t Work (Real Talk)</h2>
        <p>Let&rsquo;s be honest: not everything is smooth.</p>
        <p>
          <strong>Client expectations vs. reality.</strong> Everyone wants a &ldquo;$10K business
          making $5K/month with no work required.&rdquo; Those don&rsquo;t exist. Or if they do, 50
          people are bidding on them. Managing expectations early is the key to not losing clients
          later.
        </p>
        <p>
          <strong>Deal flow quality.</strong> We see 30&ndash;50 deals/week. Sounds impressive.
          Reality? 75%+ are overpriced, declining, or outright fake. The signal-to-noise problem is
          real. We&rsquo;re still figuring out how to filter faster without missing the gems.
        </p>
        <p>
          <strong>Team scaling.</strong> Going from 1 to 11 people in months is messy. Delegation is
          hard. Compensation structures are complicated. Quality control is tricky when you&rsquo;re
          moving fast. Still figuring it out. But that&rsquo;s the fun part.
        </p>

        <h2>What&rsquo;s Next</h2>
        <p>
          Goal: 5x it. <strong><span style={{ color: 'var(--gold)' }}>$1M in closed deals by June 2026.</span></strong>
        </p>
        <p>
          We&rsquo;re moving upmarket. $10K&ndash;$100K deals are cool, but we want to help close
          $100K&ndash;$500K acquisitions. We&rsquo;re also building out more structured advisory
          offerings &mdash; less one-off deals, more recurring clients.
        </p>
        <p>
          And yeah, we&rsquo;re still buying businesses ourselves. Just sold a couple newsletters,
          looking to exit some old assets. The portfolio strategy isn&rsquo;t dead &mdash; it&rsquo;s
          just sharing space with advisory now.
        </p>
        <p>
          The mission hasn&rsquo;t changed: make buying a business the &ldquo;third option&rdquo;
          (not just start a company or get a job). We&rsquo;re just doing it by helping other people
          buy, not only buying ourselves.
        </p>

        <div className="story-coda">
          <div className="coda-text">
            The shift from buying to advising is not a pivot. It is proof that the process works &mdash; and that it transfers.
          </div>
        </div>

        <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', fontSize: 14, marginTop: 32 }}>
          P.S. &mdash; If you&rsquo;re reading this and thinking &ldquo;I want to do this too,&rdquo; just start. You don&rsquo;t need a team of 11 or a fancy process. I started by DMing founders on Twitter and offering to help for free. Six months later, here we are. Reps &gt; theory.
        </p>
      </article>
    </>
  );
}
