"use client";
import { useCallback } from 'react';
import { useReadingProgressAndShareBar } from '@/components/useReadingProgressAndShareBar';
import Link from 'next/link';

export default function StoryDinoGames() {
  useReadingProgressAndShareBar();

  const shareTwitter = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('How to value and de-risk a mobile game acquisition , via @kautilya');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  }, []);

  const shareLinkedIn = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  }, []);

  const shareEmail = useCallback(() => {
    const subject = encodeURIComponent('How to Value and De-Risk a Mobile Game Acquisition');
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
          <span className="meta-tag sector">Consumer Mobile Gaming</span>
          <span className="meta-tag geo">Global · Android + iOS</span>
          <span className="meta-tag stage">Asset Purchase (Carve-out)</span>
        </div>
        <h1>How to Value and De-Risk a Mobile Game Acquisition</h1>
        <div className="subtitle">
          How Kautilya bought a real game at ~1.1x with the downside engineered through structure, not the price.
        </div>
        <div className="hero-line" />
      </div>

      {/* STORY BODY */}
      <article className="story-body" id="storyBody">
        <div className="last-updated">Last updated: August 14, 2026</div>

        <div className="short-answer">
          <div className="short-answer-label">The Short Answer</div>
          <p>
            A cash-flowing mobile game is worth what its revenue survives verification, not its install count.
            Verify revenue at the console level, treat mediated ad revenue as a single dependent stream, and price
            platform and transition risk through structure rather than by cutting the headline number. Below is how
            that works, and how Kautilya bought a real game at ~1.1x with the downside engineered through
            structure.
          </p>
        </div>

        <p>
          Search for how to value a mobile game and you&rsquo;ll mostly find calculators estimating what it costs
          to build one, or advice for developers picking a game idea. Almost nobody writes the buyer&rsquo;s
          playbook: how to value a small, cash-flowing game you want to acquire, and how to protect yourself doing
          it.
        </p>
        <p>
          That&rsquo;s the gap this engagement fills. Kautilya sourced, valued and structured the acquisition of
          Dino Games, a cash-flow-positive dinosaur-simulation title with about 8M Android installs, carved out
          from a nine-title studio portfolio. It closed at $39K, roughly 1.1x revenue, in a deal where the
          buyer&rsquo;s downside was engineered through structure rather than a low price, and where the real work
          was refusing to take the seller&rsquo;s numbers at face value.
        </p>

        <h2>What actually drives a mobile game&rsquo;s acquisition value</h2>
        <p>
          Value is verified, durable cash flow, not installs and not dashboard revenue. Installs are a vanity
          metric without retained monetisation behind them; what matters is whether the game reliably converts
          usage into cash, how dependent that cash is on a third-party platform, and how much survives once the
          seller is gone.
        </p>
        <div className="proof-block">
          <div className="proof-label">What Was Being Bought</div>
          <p>
            Kautilya underwrote Dino Games on cash-flow-positive operations, roughly $3,000 a month of net profit
            on $3,000 to $4,000 of ad spend, at a 1.1x revenue multiple, not on its 8M install count. It sustained
            40&ndash;50% net margins despite modest retention (sub-10% 30-day, ~4% 7-day) and no major updates for
            over two years, because its value is realised early in each user&rsquo;s life through short, ad-dense
            sessions, a front-loaded LTV model. Recognising that is what justified the price.
          </p>
        </div>

        <h2>Step 1, Verify revenue at the console, not the dashboard</h2>
        <p>
          Seller summaries smooth over currency, timing and platform gaps. Insist on console-level access to every
          revenue and user-acquisition surface, and walk each number back to its source before treating any of it
          as bankable. Historical opacity isn&rsquo;t a footnote, it changes what the revenue is worth.
        </p>
        <p>The seller wanted to work from summaries. The team refused.</p>
        <div className="proof-block">
          <div className="proof-label">Forcing Console-Level Proof</div>
          <p>
            Kautilya demanded console-level access across Google Ads, AdMob and Play Console, which forced the
            seller to acknowledge historical reporting gaps and abandon the story of one clean revenue source.
            Cross-checking spend against revenue against in-app-purchase receipts surfaced concrete discrepancies,
            including a ~$182 Play Console mismatch the seller wrote off as a data-entry error. Once historical
            opacity was on the table, the revenue became probabilistic rather than bankable, and the risk premium
            rose accordingly.
          </p>
        </div>

        <h2>Step 2, Treat mediated ad revenue as one dependent stream</h2>
        <p>
          Ad revenue appearing across several dashboards can look like diversification when it&rsquo;s really a
          single mediated stack. If one network mediates the others, that&rsquo;s one source of truth and one point
          of failure, and it deserves a risk premium, not a blended average that implies resilience the business
          doesn&rsquo;t have.
        </p>
        <div className="proof-block">
          <div className="proof-label">The Mediation Collapse</div>
          <p>
            The seller&rsquo;s revenue appeared on both AppLovin and Google, until they confirmed AdMob was running
            inside AppLovin mediation. That made post-cutoff revenue a single mediated stream, not independent
            sources. The team disallowed blended averages, fixed AppLovin as the sole post-cutoff source of truth,
            and the seller&rsquo;s diversification narrative, and the premium it implied, collapsed. Growth claims
            were reframed as optimization upside, not proven history.
          </p>
        </div>

        <h2>Step 3, Price platform and transition risk through structure</h2>
        <p>
          Rather than compressing valuation to offset transition risk, engineer the risk out through payment timing
          and controls. Defer part of the consideration and tie it to stability rather than speculative
          performance; use escrow and an inspection period to keep leverage until the asset is verifiably
          transferred; and remove embedded liabilities before close so you never inherit them.
        </p>
        <div className="proof-block">
          <div className="proof-label">Risk Priced Through Structure</div>
          <p>
            The deal closed at $39K, about 1.1x revenue and 1.2x normalized profit, with ~56% paid at close (~$22K)
            and 44% deferred over twelve months against transition stability. Kautilya held the line on escrow
            despite seller pressure for off-escrow splits over jurisdictional limitations, structuring it through a
            US LLC workaround with a signed APA, an inspection period and milestone releases. Technical diligence
            was sequenced as a hard gate, buyer-selected reviewer first, no asset release until scope was met,
            turning diligence timing into leverage. And a 70%-off lifetime IAP promotion was shut off before close,
            so the buyer never inherited that perpetual, loss-making obligation.
          </p>
        </div>
        <p>
          The effect was decisive: the headline price was preserved, no bruising renegotiation, while the
          buyer&rsquo;s real exposure at close was materially reduced. Upfront capital of ~$22K against ~$3K a
          month of net profit implied a payback measured in months. That is what disciplined structuring buys a
          buyer, and it&rsquo;s the discipline{' '}
          <Link href="/engage">Kautilya brings to acquisitions</Link> where the revenue sits on someone
          else&rsquo;s platform.
        </p>
        <p>
          The same underwrite-conservative, structure-the-rest approach is what makes a young business financeable
          in the first place, see how it plays out on{' '}
          <Link href="/stories/runify">a $110K acquisition closed with $20K down</Link>.
        </p>

        <div className="story-faq">
          <h2 className="story-faq-title">Frequently asked</h2>
          <div className="story-faq-item">
            <h3 className="story-faq-q">How do you value a mobile game acquisition?</h3>
            <p className="story-faq-a">
              On verified, durable cash flow, not installs or dashboard revenue. Confirm revenue at the console
              level, understand what it depends on (platform, ad mediation, geography), and recognise the
              monetisation model, an ad-led, front-loaded-LTV game can be sound even with weak retention.
              Cash-flowing games sourced off-market often trade near 1x revenue.
            </p>
          </div>
          <div className="story-faq-item">
            <h3 className="story-faq-q">How do you verify a mobile game&rsquo;s revenue before buying?</h3>
            <p className="story-faq-a">
              Work from console and platform payout data, Google Ads, AdMob, Play Console, not the seller&rsquo;s
              dashboard. Reconcile ad spend, ad revenue and in-app-purchase receipts against each other, and if ad
              revenue is mediated through one network, treat it as a single dependent stream rather than
              diversified income.
            </p>
          </div>
          <div className="story-faq-item">
            <h3 className="story-faq-q">What multiple do cash-flowing mobile games sell for?</h3>
            <p className="story-faq-a">
              It varies with revenue durability and platform risk, but cash-flowing games sourced off-market can
              change hands close to 1x revenue, as this one did at about 1.1x. Platform and operator dependency are
              the biggest discount factors, which is why they belong in the structure as well as the price.
            </p>
          </div>
          <div className="story-faq-item">
            <h3 className="story-faq-q">How do you protect yourself buying a mobile app?</h3>
            <p className="story-faq-a">
              Price the risk through structure: defer part of the payment against transition stability, insist on
              escrow with an inspection period and milestone releases, sequence technical diligence as a hard gate
              before any asset release, and remove embedded liabilities like discounted lifetime purchases before
              close.
            </p>
          </div>
        </div>

        <div className="story-coda">
          <div className="coda-text">
            When you can&rsquo;t learn from a dashboard, acquire the signal.
          </div>
        </div>
      </article>
    </>
  );
}
