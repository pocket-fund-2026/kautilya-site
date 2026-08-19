'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useReadingProgressAndShareBar } from '@/components/useReadingProgressAndShareBar';

const IMG_BASE = '/images/blogs/family-business-acquisition';

export default function BlogFamilyBusinessAcquisition() {
  useReadingProgressAndShareBar();

  const shareTwitter = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('What actually changes when you\'re buying a family-owned business in India instead of a professionally-run one, via @microsearchfund');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  }, []);

  const shareLinkedIn = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  }, []);

  const shareEmail = useCallback(() => {
    const subject = encodeURIComponent('Buying a Family-Owned Business in India');
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
          font-size: 14px;
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

        /* FAQ */
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

        /* CTA button inside story-coda */
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

        /* Editorial images */
        .blog-hero-image {
          margin: 32px 0 40px;
          border-radius: 3px;
          overflow: hidden;
          border: 1px solid var(--border);
        }
        .blog-hero-image img { width: 100%; height: auto; display: block; }

        .blog-figure {
          margin: 40px 0;
          border-radius: 3px;
          overflow: hidden;
          border: 1px solid var(--border);
          background: rgba(255,255,255,0.015);
        }
        .blog-figure img { width: 100%; height: auto; display: block; }
        .blog-figure-caption {
          font-family: var(--font-lora), 'Lora', serif;
          font-size: 12px;
          color: var(--text-muted);
          text-align: center;
          padding: 14px 20px;
          border-top: 1px solid var(--border);
        }
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
          <span className="meta-tag">India</span>
          <span className="meta-tag">7 min read</span>
        </div>
        <h1>Buying a Family-Owned Business in India</h1>
        <div className="subtitle">
          What First-Time Buyers Need to Know
        </div>
        <p className="blog-author-byline">By <a href="/team">Dev Shah</a>&nbsp;&nbsp;·&nbsp;&nbsp;25 July 2026</p>
        <div className="hero-line" />
      </div>

      {/* ── Body: uses .story-body, .pull-quote, .constraint-list, .story-coda ── */}
      <article className="story-body">
        <div className="blog-hero-image">
          <Image
            src={`${IMG_BASE}/family-business-acquisition-hero.webp`}
            alt="Built over decades, handed over with trust — buying a family-owned business in India"
            title="Buying a Family-Owned Business in India"
            width={1536}
            height={1024}
            priority
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        <p>
          Most small businesses for sale in India are family businesses. A promoter built it over
          15 or 25 years, ran it with relatives or long-time loyal staff, and is now selling
          because of retirement, health, or the next generation choosing a different career. This
          is a different transaction from buying a professionally-run, systemized company, and it
          comes with its own specific risks and negotiation dynamics that generic due diligence
          advice doesn&apos;t fully cover.
        </p>
        <p>
          This guide walks through what changes when the seller is a family, not a corporate
          entity.
        </p>

        <h2>Why Buying a Family-Owned Business in India Is Different</h2>
        <p>
          A professionally-run business sale is largely a numbers exercise: verify the financials,
          agree a price, transfer ownership. A family business sale carries an additional layer,
          because the business and the owner&apos;s identity are often the same thing. The
          promoter isn&apos;t just selling an asset, they&apos;re handing over something they
          built, and that shapes everything from the negotiation tone to what&apos;s actually
          documented.
        </p>
        <p>Three structural differences show up consistently.</p>

        <h2>1. Informal Financial Records in Family-Owned Businesses</h2>
        <p>
          Family businesses, especially those run for a decade or more without professional
          management, frequently keep looser financial records than the business&apos;s actual
          revenue would suggest. Common patterns:
        </p>
        <ul className="constraint-list">
          <li><strong>Cash transactions not fully reflected in books</strong>, sometimes to reduce tax exposure, sometimes just from years of informal habit</li>
          <li><strong>Owner expenses mixed with business expenses</strong>: a family car, personal travel, or relatives on payroll doing minimal actual work</li>
          <li><strong>Multiple sets of numbers</strong>: what&apos;s reported for tax, what&apos;s shown to a bank for a loan, and what the owner tells you privately may all differ</li>
        </ul>
        <p>
          None of this necessarily means fraud. It often means the business has been run the way a
          family managed it for 20 years, not the way a buyer needs it documented. Your due
          diligence has to dig past the stated numbers rather than accept them, and you should
          expect to spend more time normalizing financials than you would with a corporatized
          target.
        </p>

        <h2>2. Employee Loyalty in Family Business Acquisitions</h2>
        <p>
          In a family business, key employees are frequently loyal to the promoter personally,
          sometimes because they&apos;re relatives, sometimes because of decades-long personal
          relationships. This creates a retention risk that doesn&apos;t show up in a standard
          organizational chart review.
        </p>
        <p>Questions worth asking before you close:</p>
        <ul className="constraint-list">
          <li>Which employees are related to the seller, and do they intend to stay after the sale?</li>
          <li>Does the business depend on informal knowledge the owner holds in their head, supplier relationships built on personal trust, or customer relationships tied to the owner&apos;s name?</li>
          <li>Will long-serving staff accept a new, unrelated owner, or does the sale trigger an exodus?</li>
        </ul>
        <p>
          A business that looks operationally stable on paper can lose its most experienced people
          within months of a family exit if this isn&apos;t addressed directly with the seller
          before signing.
        </p>

        <h2>3. Negotiating With a Family Business Owner in India</h2>
        <p>
          Negotiating with a founder who built the business is different from negotiating with a
          private equity seller or a corporate divestiture team. Price anchoring, walk-away
          points, and deal pacing all behave differently.
        </p>
        <p>What typically shows up:</p>
        <ul className="constraint-list">
          <li><strong>Attachment to a number that isn&apos;t grounded in financials</strong>: the owner may have a price in mind tied to what the business means to them, not what it earns</li>
          <li><strong>Sensitivity around legacy and continuity</strong>: many family sellers care more than a corporate seller would about whether the business, the brand name, or the staff will be treated well after the sale</li>
          <li><strong>Slower decision timelines</strong>, particularly when multiple family members need to agree, or when the sale carries emotional weight around a life&apos;s work ending</li>
        </ul>

        <div className="blog-figure">
          <Image
            src={`${IMG_BASE}/family-business-negotiation.webp`}
            alt="Second-generation family business owner negotiating a sale across the table from a buyer, discussing valuation, transition plan, and employee retention"
            title="Negotiating with a family business owner in India"
            width={1619}
            height={971}
            sizes="(max-width: 768px) 100vw, 800px"
          />
          <div className="blog-figure-caption">Respect the legacy, communicate openly, align expectations, build the future — the tone that shapes a family business negotiation.</div>
        </div>

        <p>
          This isn&apos;t necessarily a disadvantage for a buyer. Sellers who are motivated by
          continuity and legacy, rather than purely maximizing price, are often more open to
          structures like seller financing, transition consulting periods, or earnouts, precisely
          because those structures keep them involved and demonstrate you&apos;ll run the business
          responsibly.
        </p>

        <h2>Family Business Succession Due Diligence Checklist</h2>
        <p>
          Beyond standard financial, legal, and operational due diligence, add these checks
          specific to family business acquisitions:
        </p>
        <ul className="constraint-list">
          <li><strong>Family employment audit</strong>: list every employee related to the seller, their actual role and output, and whether they&apos;re staying post-sale</li>
          <li><strong>Verbal agreement inventory</strong>: identify supplier terms, customer arrangements, or informal understandings that were never written down and depend on the current owner&apos;s personal relationships</li>
          <li><strong>Owner dependency mapping</strong>: determine specifically which functions only the owner can perform, and build a realistic transition timeline around those, not an assumed one</li>
          <li><strong>Multiple financial record reconciliation</strong>: compare tax filings, bank statements, and any informal figures the seller shares privately, and treat discrepancies as a starting point for negotiation, not a dealbreaker to walk from automatically</li>
          <li><strong>Family agreement confirmation</strong>: verify all owners (siblings, spouse, adult children with a stake) are actually aligned on the sale, not just the person you&apos;ve been negotiating with</li>
        </ul>

        <div className="blog-figure">
          <Image
            src={`${IMG_BASE}/family-business-due-diligence-checklist.webp`}
            alt="Family business due diligence checklist covering financials and tax records, legal and ownership documents, operations and customer base, liabilities, key-person and succession risk, and growth drivers"
            title="Due diligence checklist for buying a family-owned business in India"
            width={1619}
            height={971}
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        <h2>How to Structure an Acquisition of a Family-Owned Business</h2>
        <p>
          Family business acquisitions often benefit from structures that address the emotional
          and operational transition, not just the price:
        </p>
        <ul className="constraint-list">
          <li>A transition consulting period, where the seller stays on for 3 to 6 months post-sale to hand over supplier and customer relationships personally</li>
          <li>Seller financing or an earnout tied to retained customers, which gives the seller confidence the business (and their legacy) will be looked after, while protecting you if customer relationships don&apos;t transfer as smoothly as promised</li>
          <li>Written retention agreements with key family or long-serving employees, ideally signed before closing, not negotiated after</li>
        </ul>

        <div className="blog-figure">
          <Image
            src={`${IMG_BASE}/family-business-acquisition-structure.webp`}
            alt="Four steps to structure a family-owned business acquisition: transition consulting period, seller financing or earnout, written retention agreements, and documenting and transferring relationships"
            title="How to structure an acquisition of a family-owned business"
            width={1619}
            height={971}
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        <p>
          The goal is converting informal, personal trust into documented, transferable business
          relationships before you take ownership.
        </p>

        <h2>Red Flags When Buying a Family-Owned Business</h2>
        <p>
          A few patterns are worth treating as caution signs rather than automatic dealbreakers,
          since they&apos;re common enough in family sales that walking from every one would rule
          out most of the market:
        </p>
        <ul className="constraint-list">
          <li>Reluctance to share full financial records early, when it stems from decades of informal bookkeeping rather than active concealment</li>
          <li>A seller who wants to remain heavily involved post-sale in a way that suggests they haven&apos;t actually decided to exit</li>
          <li>Key relatives or staff who are notably absent from negotiations but clearly influential in daily operations</li>
        </ul>
        <p>
          None of these mean walk away. They mean slow down, ask directly, and structure the deal
          to account for what you find.
        </p>

        {/* FAQ */}
        <div className="blog-faq">
          <div className="phase-label" style={{ marginBottom: 20 }}>Frequently Asked Questions</div>

          <div className="blog-faq-item">
            <div className="blog-faq-q">Is buying a family-owned business riskier than buying a corporate-run one?</div>
            <p className="blog-faq-a">Not inherently riskier, but the risks are different in kind. Financial informality and owner/employee dependency need more attention; outright fraud or complex corporate liabilities are often less of a factor than in larger, professionally-run targets.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">How do I value a family business with informal financial records?</div>
            <p className="blog-faq-a">Start by reconciling all available records, bank statements, tax filings, and GST returns, against what the seller states verbally. A CA experienced in SME valuations can normalize the numbers, but expect the process to take longer and require more documentation requests than a business with clean, audited books.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">Will employees stay after a family business is sold to an unrelated buyer?</div>
            <p className="blog-faq-a">It depends heavily on how the transition is handled. Direct conversations with key staff before closing, retention agreements for critical roles, and a visible transition period with the outgoing owner all improve the odds significantly compared to a sudden, unexplained ownership change.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">Should I be concerned if a family business seller wants to stay on after the sale?</div>
            <p className="blog-faq-a">Not necessarily. A defined transition period, where the seller supports the handover of relationships and knowledge, is often valuable. The concern is a seller who wants to stay indefinitely involved in decisions, which usually signals they haven&apos;t actually committed to the exit.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="story-coda">
          <p className="coda-text">
            Looking to acquire a family-owned business in India?
            We build the pipeline and run the diligence before you engage a seller.
          </p>
          <Link href="/engage" className="coda-link">Begin the Conversation</Link>
        </div>

      </article>
    </>
  );
}
