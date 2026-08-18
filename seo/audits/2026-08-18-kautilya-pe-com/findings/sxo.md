# SXO Audit — kautilya-pe.com
Date: 2026-08-18
Scope: Home, /approach, /blog/what-is-buy-side-ma-advisory, /blog/what-is-a-search-fund,
/blog/buying-family-owned-business-india, /faq, /portfolio, /stories/[slug], /engage

**SXO Gap Score: 70 / 100** (separate from SEO Health Score)

## Method
- Rendered pages via `render_page.py --mode auto` (all pages served fully pre-rendered,
  no SPA/JS-gating detected) and parsed structure via `parse_html.py`.
- Cross-referenced 6 target queries against live Google SERPs via WebSearch: "what is
  buy-side M&A advisory", "what is a search fund", "buy-side M&A advisory India",
  "buying a family owned business in India", "search fund India", "buy-side due diligence".
- Word counts computed from rendered DOM text (script/style stripped).

## What Works

1. **Schema depth is excellent and unusually complete for a firm this size.** Service +
   HowTo (5-phase, with tools/supply/steps) on /approach, BlogPosting + nested FAQPage on
   both definitional blog posts, standalone FAQPage (26 Q&As) on /faq, CollectionPage +
   ItemList on /portfolio, ContactPage on /engage, BreadcrumbList everywhere. This is
   ahead of most SERP competitors observed (dealroom.net, capstonepartners.com, etc. show
   thinner or no structured data).
2. **/approach page type matches searcher intent almost perfectly.** SERP for
   process-style queries rewards step-by-step methodology pages; /approach delivers a
   concrete 5-phase HowTo (2,188 words) with hard numbers (2,500+ founder conversations,
   14.8% response rate, 99.83% match rate, <15-day diligence) — this is genuinely
   differentiated, verifiable detail that most competitor service pages lack.
3. **/faq is the strongest SXO asset on the site.** 26 Q&As (3,281 words), FAQPage schema,
   directly answers the PAA-style long-tail queries ("how much does M&A advisory cost",
   "what does off-market mean", "do I need to run the business myself") that surround
   every commercial query in this space. Well matched to how Google surfaces this content.
4. **Definitional blog posts are well-built in *format*.** what-is-buy-side-ma-advisory
   (1,701 words) and what-is-a-search-fund (2,390 words) both use the BlogPosting +
   FAQPage + beginner framing pattern that IS the dominant SERP format for these exact
   queries (dealroom.net/blog, carta.com/learn, fredlaw.com/alert all use the same shape).
   Page type is not the problem here (see Findings #3 for the real gap).
5. **/stories/[slug] pages are framed as reusable how-to content, not just case studies**
   (e.g., "How to Source Off-Market Business Deals Without a Broker" for the Borderless
   deal) — this is a smart hybrid that lets deal-journal content also compete for
   informational queries, not just serve as trust collateral.

## Findings

### 1. [HIGH] No standalone "buy-side due diligence" service page — real page-type gap
**Description:** The SERP for "buy-side due diligence" (a core, high-intent Kautilya
service) is dominated exclusively by standalone service/landing pages: PwC, Plante Moran,
Kaufman Rossin, Dealroom, Auxo Capital, Melcap. None of the top results are FAQ entries or
blog posts. Kautilya's due-diligence content — the 8-workstream process, $6,500 standalone
pricing, 99.83% transaction match rate, <15-day turnaround — is genuinely strong material,
but it is scattered across /faq answers and step 4 of the /approach HowTo schema. There is
no single URL for Google to match against this head term.
**Recommendation:** Ship a dedicated `/services/due-diligence` (or `/due-diligence`) page
using the existing content assets (workstream list, pricing, case-study stats already
proven in Portfolio) as a standalone Service-schema page, mirroring the page type that
actually ranks. This is the single highest-leverage fix identified in this audit.

### 2. [MEDIUM] Homepage is thin for the trust bar its target SERP requires
**Description:** Homepage is 357 words. The commercial query it's built for
("buy-side M&A advisory India") returns a SERP dominated by established firms — BDO, EY,
Axis Capital, RBSA, Acquisory, ONEtoONE — that lead with credentialed team pages, decades
of track record, and (for the Big 4) global brand trust. Kautilya's homepage badges
("Featured on EasyDoFollow," "Featured on Huzzler," "Featured on LemonLaunch") are
low-value directory/launch badges that read as startup-launch signals, not M&A-grade
trust markers, to a PE fund or family office evaluator.
**Recommendation:** Expand above-the-fold and body copy with the track-record numbers
already proven elsewhere on the site (7 acquisitions, 2 exits, 10-person team,
30-50 deals/week reviewed) and replace/de-emphasize launch-directory badges with
client-facing trust signals (testimonials, named client types, press if any exists).

### 3. [MEDIUM] Definitional blog posts target queries with an authority ceiling that page-type fixes can't solve
**Description:** "what is a search fund" top 10 is Wikipedia, Stanford GSB, Carta
(learn hub), INSEAD, and two law-firm blogs. "what is buy-side M&A advisory" top 10 is
dealroom.net, grata.com, marshberry.com, capstonepartners.com, caldergr.com, pmcf.com —
all established mid-market M&A advisory brands. Kautilya's posts are correctly *shaped*
(BlogPosting+FAQPage, 1.5-2.4k words) but face a domain-authority gap that content
quality alone won't close for the pure global definitional term.
**Recommendation:** Don't chase the global term as the primary KPI. The India-qualified
variant "search fund India" has a materially weaker SERP (Boston Institute of Analytics
blog, a Medium post, Business Standard editorial, two Searchfunder.com forum posts, a
LinkedIn Pulse article) — genuinely winnable for a firm at Kautilya's authority level.
Strengthen the India-specific sections of what-is-a-search-fund (or spin out a dedicated
"search funds in India" pillar) and prioritize backlink/promotion effort there instead.

### 4. [LOW-MEDIUM] Family-owned-business blog post is narrower than what the SERP rewards
**Description:** "buying a family owned business in India" and adjacent queries return
broad "how to buy a business in India" step-by-step guides (Global Risk Community, Aviaan)
and marketplace/listing content (BusinessDeals.in), plus macro research (McKinsey on
family business GDP share) — not niche "family-owned succession dynamics" content.
Kautilya's angle (informal records, succession, negotiating with family owners) is
differentiated and genuinely useful, but it may be too narrow to match the actual query
pattern searchers use to find this topic.
**Recommendation:** Keep the differentiated angle (it's a real moat) but add a broader
companion section or page targeting "how to buy a business in India" that internally
links down into the family-owned-business niche article, to capture the wider query
volume the SERP evidence shows is actually being searched.

### 5. [LOW] Portfolio page is thin relative to the trust job it needs to do
**Description:** /portfolio is 560 words across 6 case studies (consistent with the FAQ's
disclosed "7 acquisitions, 2 exits" — so it's not a fabrication risk, just a small sample).
For PE funds/family offices in the consideration stage, this is the primary "prove it"
page, and 6 cards is light relative to what an institutional buyer typically wants to see
before trusting a mandate-to-close relationship.
**Recommendation:** This is more a business-maturity issue than a copy fix — flag for
`/seo content` follow-up once more closed deals are available. In the meantime, add
client testimonials/quotes to existing case studies to increase perceived depth without
needing more deal volume.

## User Stories (derived from SERP signals)

- *"As a PE fund associate screening buy-side advisors, I search "buy-side M&A advisory
  India" and expect to land on a firm's own service page with credentials and process
  detail up front."* — generated by SERP dominance of BDO/EY/Axis/RBSA service pages.
  Served by: Home + /approach (page type aligned; trust depth is the gap, see Finding #2).
- *"As a first-time acquisition entrepreneur, I search "what is a search fund" wanting a
  plain-English explainer before I talk to anyone."* — generated by Wikipedia/Carta/INSEAD
  dominance of the definitional SERP. Served by: /blog/what-is-a-search-fund (format
  aligned; authority ceiling is the gap, see Finding #3).
- *"As a searcher checking whether I can afford buy-side diligence before committing, I
  search "buy-side due diligence" wanting a page that tells me scope and price."* —
  generated by PwC/Plante Moran/Kaufman Rossin service-page dominance. Not currently
  served by a dedicated page (Finding #1, highest-severity gap).
- *"As a family business owner who's been approached by a buyer's advisor, I search
  general "buying a business in India" guides to understand what's normal, not
  buyer-side jargon."* — generated by Aviaan/Global Risk Community guide-page dominance.
  Partially served by /blog/buying-family-owned-business-india, but written from the
  buyer's POV only (Finding #4).
- *"As a journalist or diligence-minded prospect, I search for "case studies" or check
  Portfolio directly to verify track record before trusting a mandate."* — generated by
  CollectionPage/case-study-format expectation. Served by /portfolio (Finding #5).

## Persona Scoring (weakest first)

| Persona | Stage | Relevance /25 | Clarity /25 | Trust /25 | Action /25 | Total /100 |
|---|---|---|---|---|---|---|
| Family business owner/seller approached by a buy-side advisor | Awareness | 15 | 20 | 15 | 12 | **62** |
| Searcher evaluating standalone buy-side due diligence | Decision | 14 | 16 | 18 | 15 | **63** |
| PE fund / family office associate screening advisors | Consideration | 18 | 20 | 15 | 20 | **73** |
| Journalist/investor verifying track record via Portfolio | Consideration/Decision | 20 | 20 | 16 | 18 | **74** |
| First-time acquisition entrepreneur / search fund operator | Awareness | 23 | 23 | 17 | 18 | **81** |

**Weakest persona — family business owner/seller (62/100):** the site has zero
seller-facing path. Everything, including the family-owned-business blog post, is written
to help *buyers* navigate sellers, not to build trust with a seller who lands on the site
after being approached. No CTA exists for "thinking about selling — talk to us." Low
priority commercially (Kautilya is buy-side only) but worth a one-line reassurance
block/CTA on that specific post since it clearly attracts seller-side traffic too.

**Second weakest — DD-only searcher (63/100):** direct product of Finding #1 (no
standalone due diligence page). Fixing that page also fixes this persona's score.

## 7-Dimension Gap Score Breakdown

| Dimension | Score | Notes |
|---|---|---|
| Page Type | 13/15 | Strong alignment across Approach/FAQ/Blog/Portfolio/Engage; -2 for missing DD service page |
| Content Depth | 10/15 | FAQ and blog posts are deep (1.5k-3.3k words); Home (357w) and Portfolio (560w) are thin |
| UX Signals | 11/15 | Clear CTAs to /engage throughout; low-value directory badges hurt perceived trust on Home |
| Schema | 14/15 | Best-in-class for this niche — Service, HowTo, BlogPosting, FAQPage, CollectionPage, ItemList, ContactPage, Breadcrumbs |
| Media | 8/15 | 5-10 images per page, no video, no data visualizations of the stats the copy leans on |
| Authority | 6/15 | Founded 2023, 7 acquisitions, single named founder — competing against Big 4 and Wikipedia/Stanford in these SERPs |
| Freshness | 8/10 | Blog posts dated Jul/Aug 2026 — good recency signal |
| **Total** | **70/100** | |

## Limitations
- WebSearch results are a snapshot, not live rank-tracked SERP positions for
  kautilya-pe.com specifically — I could not confirm whether Kautilya currently ranks
  (page N) for any of these queries, only what page types/formats currently occupy the
  top 10.
- AI Overview / featured snippet presence could not be directly observed through
  WebSearch's summarized output; treat SERP-feature claims (PAA, snippets) as inferred
  from content shape, not confirmed via a rendered SERP screenshot.
- No access to Search Console data in this session, so click/impression evidence for
  underperforming pages was not incorporated — findings are structural/SERP-comparative
  only.
- Did not audit /team, /stories index, or every individual /stories/[slug] page —
  sampled one (borderless) as representative of the format.

Next step: `/seo google report` can generate a PDF version of this audit.
