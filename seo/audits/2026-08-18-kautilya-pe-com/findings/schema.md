# Schema.org Structured Data Audit — kautilya-pe.com
Date: 2026-08-18

## Method
Fetched raw HTML (curl) and via `claude-seo run render_page.py --mode never --json`
for: `/`, `/approach`, `/portfolio`, `/faq`, `/team`, `/blog/what-is-buy-side-ma-advisory`,
`/blog/what-is-a-search-fund`, `/stories/200k-deals`, `/newsletter/aurum-housing-com-acquisition`.
All JSON-LD confirmed server-rendered (present in raw curl output, not client-injected).
Cross-referenced generation source in `app/**/page.tsx` (inline JS objects serialized via
`JSON.stringify` into `<script type="application/ld+json">`, no shared `lib/schema.ts` helper —
each page hand-rolls its own blocks, which explains some inconsistency between pages).

## What Works
- **Fully SSR'd, valid JSON** — every block on every page sampled parsed as valid JSON with
  `@context: "https://schema.org"` (never `http://`). No malformed/truncated blocks found.
- **Organization schema (homepage)** is unusually complete: `foundingDate`, `foundingLocation`,
  `numberOfEmployees`, `naics`, 6-country `areaServed`, 26-term `knowsAbout`, `founder` (Person
  with `jobTitle`, `nationality`, `hasOccupation`, `sameAs`), two `ContactPoint`s, `sameAs` to
  X/Instagram/LinkedIn/YouTube, `hasOfferCatalog` with priced `Offer`/`Service` nesting.
- **BreadcrumbList present on every deep page sampled** (approach, portfolio, faq, team, blog
  posts, newsletter posts, stories) with correct `position`/`name`/`item` (absolute URLs).
- **Person schema for all 8 team members** on `/team`, each with `jobTitle`, `worksFor`,
  `knowsAbout`, `hasOccupation`; 7 of 8 also carry `sameAs` (LinkedIn).
- **BlogPosting used correctly for /blog posts** with `author`, `datePublished`/`dateModified`,
  `publisher` (with `logo`), `mainEntityOfPage`, `image` — all required + recommended Article
  properties present.
- **Absolute URLs and ISO 8601 dates throughout** — no relative URLs or malformed dates found.
- **WebSite schema includes valid `SearchAction`** with correctly formatted `urlTemplate` and
  `query-input`.

## Findings

### 1. Deprecated `HowTo` schema still in production — CRITICAL
Google removed HowTo rich results in September 2023. This markup earns nothing in Google Search
and pollutes Search Console's Enhancements report with "unsupported type" info, wasting crawl/render
budget on structured data Google no longer consumes.
- **Evidence**: Confirmed live on `/approach` (`app/approach/page.tsx:132-189`, `howToSchema`,
  2,621 bytes, types `HowTo`/`HowToStep`/`HowToSupply`/`HowToTool`/`MonetaryAmount`) and
  conditionally on `/stories/[slug]` pages that have `STORY_HOWTO` data (`app/stories/[slug]/page.tsx:154-164`,
  `howToLd`). `seo/GEO-ANALYSIS.md:156` still lists HowTo as a *positive* AI Overview signal — that
  note is now stale and should be corrected alongside this fix.
- **Recommendation**: Remove the `howToSchema` block from `/approach` and the `howToLd` block from
  stories pages entirely. The step-by-step content can stay as visible HTML (still readable/citable
  by AI crawlers) — only the JSON-LD wrapper needs to go. Do not replace with anything; there is no
  supported schema equivalent for "process steps" content.

### 2. `FAQPage` markup has no Google SERP benefit as of today — INFO
Google retired FAQ rich results for all sites on 2026-05-07 (per current guidance, superseding the
Aug 2023 gov/health-only restriction). As of this audit date (2026-08-18), FAQPage markup site-wide
produces no SERP feature. It is not harmful, but it's dead weight unless kept deliberately for
unconfirmed AI/GEO extraction benefit.
- **Evidence**: `FAQPage` present on `/faq` (26 questions, `app/faq/page.tsx:292`), and conditionally
  on blog posts (`app/blog/[slug]/page.tsx:146-153`), newsletter posts (`app/newsletter/[slug]/page.tsx:133-141`,
  plus a second nested FAQPage inside an `Organization`/`ContactPoint`-style block at line 192 — worth
  double-checking that nesting is intentional), and stories pages (`app/stories/[slug]/page.tsx:144-152`).
- **Recommendation**: No urgent action required. If the team wants to reduce maintenance surface,
  FAQPage can be safely removed with zero Google Search impact. If keeping it for AI-crawler/LLM
  extraction purposes, that's a reasonable bet but should be labeled internally as "GEO-only,
  unconfirmed benefit," not "rich-result schema."

### 3. FAQ question-count mismatch between `llms.txt` and live `FAQPage` schema — LOW
`public/llms.txt:169` states the FAQ page has "23 answered questions," but the live `FAQPage`
JSON-LD `mainEntity` array on `/faq` contains 26 `Question` items (verified by parsing the raw
HTML). This is exactly the kind of self-contradiction an LLM cross-referencing the page against
`llms.txt` would flag as a trust signal. Already noted in `seo/GEO-ANALYSIS.md:63` but still unfixed.
- **Recommendation**: Update `llms.txt` line 169 to "26 answered questions" (cheaper fix than
  removing 3 questions from the page).

### 4. Two separate top-level entities for the same business, no `@id` linkage — MEDIUM
The homepage emits both an `Organization` (block 1) and a `ProfessionalService` (block 3) for
"Kautilya," each independently declaring `name`, `url`, `description`, `areaServed`, and
`hasOfferCatalog` with near-duplicate (but not identical — prices differ) offer data. Neither
uses `@id` to declare they're the same entity, and the `WebSite`'s `publisher` (block 2) is a
*third* inline `Organization` object. Google's Knowledge Graph disambiguation works better when
one canonical entity is declared once and referenced by `@id` elsewhere, rather than three
loosely-overlapping declarations with drifting details (e.g., Organization's `hasOfferCatalog`
includes actual `price`/`priceCurrency`; ProfessionalService's offer catalog for the same three
services omits pricing).
- **Evidence**: `app/page.tsx:55-180` (`organizationSchema`), `app/page.tsx:182-210`
  (`webSiteSchema.publisher`), `app/page.tsx:212-252` (`professionalServiceSchema`).
- **Recommendation**: Give the canonical `Organization` a stable `@id` (e.g.
  `https://www.kautilya-pe.com/#organization`) and reference it via `@id` from `WebSite.publisher`
  and as `ProfessionalService`'s parent/same-as, e.g.:
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.kautilya-pe.com/#organization",
  "name": "Kautilya"
}
```
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "publisher": { "@id": "https://www.kautilya-pe.com/#organization" }
}
```
Also reconcile the two `hasOfferCatalog` blocks so both list the same prices (or drop pricing
from one) — the current $2,500/mo vs. unpriced version of "Full-Service Retainer" is a factual
inconsistency between blocks on the same page.

### 5. `NewsArticle` used for evergreen content (stories/case studies) — LOW
`app/stories/[slug]/page.tsx:69` and `app/newsletter/[slug]/page.tsx:144` both use `@type:
"NewsArticle"`. `NewsArticle` is intended for time-sensitive journalism eligible for Google
News/Top Stories; Kautilya's Stories are evergreen case studies with no publication date in some
cases (`meta.datePublished` is optional/conditional — see `app/stories/[slug]/page.tsx:125-128`),
which is a mismatch with `NewsArticle`'s expectation of a genuine news timestamp. Newsletter posts
analyzing recent deals are a closer fit for NewsArticle; Stories are not.
- **Recommendation**: Change Stories pages from `NewsArticle` to plain `Article` (or `BlogPosting`
  to match the Blog section's convention). Keep `NewsArticle` on Newsletter posts since those do
  track live deal news. This is low severity — Article/NewsArticle/BlogPosting share the same
  Google rich-result eligibility (Article-family), so this is a semantic-correctness fix, not a
  functional break.

### 6. Malformed empty-string property — LOW
`app/approach/page.tsx:82`: `servicePhone: ''` inside `ServiceChannel`. An empty string is not a
valid phone number and google/schema validators may treat it as a placeholder/malformed value.
- **Recommendation**: Remove the `servicePhone` key entirely rather than emitting an empty string,
  or populate it with a real number if the firm publishes one.

### 7. No `AggregateRating`/`Review` for the "Kautilya Deal Score" — INFO (already flagged in GEO-ANALYSIS.md)
Newsletter posts describe a prose "Deal Score" (Price Discipline 4.5/5, Structure & Risk 4.5/5,
etc.) that isn't machine-extractable anywhere in the JSON-LD. Not a rich-result opportunity (deal
scores aren't product/business reviews Google will surface), but worth noting as a GEO/AI
extractability gap consistent with `seo/GEO-ANALYSIS.md:181`. No action required for this schema
audit; tracked for completeness only.

## Missing Schema Opportunities Checked (none found needed beyond above)
- **FAQPage on /faq**: present (see Finding 2 — already implemented, just no longer valuable for Google).
- **Article/BlogPosting on blog posts**: present and correctly formed (BlogPosting, all required
  fields present).
- **Article on newsletter/stories**: present but using NewsArticle (Finding 5).
- **BreadcrumbList on deep pages**: present everywhere checked — no gap.
- **LocalBusiness/geo-coordinates**: not present, and correctly so — Kautilya is a remote-first
  advisory firm, not a walk-in business; `ProfessionalService` without `GeoCoordinates`/
  `openingHoursSpecification` is appropriate here, not a gap.

## Schema Score: 78/100

**Scoring rationale**: Breadth and technical correctness of implementation is well above typical
B2B-site baseline (SSR'd, valid JSON, no placeholder text, absolute URLs, ISO dates, comprehensive
Organization/Person/BlogPosting properties, BreadcrumbList everywhere). Points deducted for: one
actively deprecated schema type in production (HowTo, -12), duplicate/unlinked entity declarations
for the same business (-6), a factual data-drift issue between duplicate offer catalogs plus the
llms.txt/FAQ count mismatch (-3), and minor type-fit/malformed-value issues (NewsArticle misuse,
empty servicePhone string) (-1). No critical validation errors (malformed JSON, wrong required
types) were found in any block.
