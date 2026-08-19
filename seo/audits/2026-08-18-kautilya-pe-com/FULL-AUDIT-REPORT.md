# Full SEO Audit — kautilya-pe.com

**Audit date:** 2026-08-18
**Domain:** https://www.kautilya-pe.com (canonical www host; bare apex 307-redirects to www)
**Auditor:** claude-seo toolkit (v2.2.4) — 9 specialist subagents + inline technical/on-page/image analysis
**Scope:** Full site crawl via sitemap.xml (35 URLs) + robots.txt/llms.txt review + 9 specialist audits (technical, content, schema, sitemap, performance, visual, GEO, SXO, content-cluster) + manual on-page and image analysis. Cross-referenced against the live Next.js source at `/root/kautilya-site`.

---

## Executive Summary

### Overall SEO Health Score: 80 / 100

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 22% | 87 | 19.14 |
| Content Quality | 23% | 82 | 18.86 |
| On-Page SEO | 20% | 82 | 16.40 |
| Schema / Structured Data | 10% | 78 | 7.80 |
| Performance (CWV, lab-only) | 10% | 85 | 8.50 |
| AI Search Readiness (GEO) | 10% | 76 | 7.60 |
| Images | 5% | 38 | 1.90 |
| **Total** | 100% | | **80.2 ≈ 80** |

*(Two supplementary, non-weighted specialist scores were also produced: SXO Gap Score 70/100 and Content Architecture/Cluster Score 54/100 — both feed the action plan but are not part of the headline weighting, per the skill's defined categories.)*

### Business Type Detected

**B2B buy-side M&A / private equity advisory firm.** Kautilya is a buy-side-only advisory (not a broker) headquartered in Mumbai, India, building proprietary acquisition pipelines for PE funds, VC firms, family offices, search-fund operators, and acquisition entrepreneurs. Active across India, UK, UAE, MENA, Europe, and Asia-Pacific. Revenue model: retainer ($2,500–$10,000/month) + success fees, standalone forensic due diligence ($6,500+), and market research engagements. Built on Next.js, hosted on Vercel, statically generated (SSG) — an unusually engineering-sophisticated marketing site for a firm this size.

### Top 5 Critical / High-Severity Issues

1. **[CRITICAL] Homepage has a stuck WebGL loading bug creating ~17,500px of dead scroll space.** A "Loading Sky..." starfield canvas (`components/ThreeScene.tsx`) never finishes rendering in the captured session — the homepage is 22,475px tall on desktop but the hero ends at ~900px and the next real content doesn't appear until ~19,000px down. Most visitors would conclude the page is broken. *(Visual)*
2. **[CRITICAL] ~94MB of unoptimized images sitewide, with individual files up to 9.2MB.** 16 of 54 sitemap-referenced images exceed 1MB; ten Stories-page images are 7–9MB PNGs. Zero use of `next/image`, WebP/AVIF, or responsive `srcset` anywhere on the site. This is the single largest, most fixable performance liability found. *(Images)*
3. **[CRITICAL] Deprecated `HowTo` schema is live in production.** Google removed HowTo rich results in September 2023; this markup on `/approach` and `/stories/[slug]` earns nothing and pollutes Search Console's Enhancements report. *(Schema)*
4. **[HIGH] Apex domain redirects with a temporary 307, not a permanent 301/308.** `http://kautilya-pe.com/` → 308 → `https://kautilya-pe.com/` → **307** → `https://www.kautilya-pe.com/` is a 3-hop chain with a non-permanent final hop, weakening canonical-signal consolidation. *(Technical)*
5. **[HIGH] `news-sitemap.xml` misapplies the Google News protocol to evergreen Stories content**, several dated 2024 — likely to generate persistent "invalid publication date" errors in Search Console for a firm that isn't a registered News publisher. *(Sitemap / confirmed independently by GEO audit)*

Additional high-severity items worth flagging alongside the top 5: no standalone "buy-side due diligence" service page despite that being a head commercial term with a page-type-specific SERP (*SXO*), the primary "ENGAGE" CTA is hidden behind a hamburger menu on mobile (*Visual*), and off-site authority signals (Wikipedia, Reddit, verified YouTube activity) remain the binding constraint on AI-citation odds (*GEO*).

### Top 5 Quick Wins

1. **Set the apex→www redirect to permanent (301/308)** in Vercel domain settings — a few minutes of config, fixes a High-severity technical issue.
2. **Delete the `HowTo` JSON-LD blocks** from `app/approach/page.tsx` and `app/stories/[slug]/page.tsx` — dead code removal, no replacement needed, immediately stops GSC pollution.
3. **Fix the `llms.txt` FAQ count** ("23 answered questions" → "26") — a one-line edit that closes a small but real AI-trust-erosion gap flagged independently by both the content and GEO audits.
4. **Remove `news-sitemap.xml`** (delete the route + robots.txt reference) — the `/stories/*` URLs are already fully covered by `sitemap.xml`, so no discoverability is lost.
5. **Add explicit `width`/`height` to the portfolio-logo `<img>` tags** (or migrate to `next/image`) — closes a concrete CLS risk flagged by both the on-page and performance audits.

---

## 1. Technical SEO — Score: 87/100

**Full findings:** [`findings/technical.md`](findings/technical.md)

Strong baseline: every one of the 35 sitemap URLs returns 200, all sampled pages are SSG (`x-nextjs-prerender: 1`, `is_spa: false` — no CSR/SPA dependency), complete security headers (HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy) are applied globally via `next.config.ts`, and canonical tags/meta robots are clean and unique across every page checked.

**Key findings:**
- **High** — Apex domain 307 (temporary) redirect instead of 301/308 (see Critical Issue #4 above).
- **Medium** — No Content-Security-Policy header defined.
- **Medium** — No IndexNow protocol support (no key file, no submission integration) despite regular content publishing that would benefit from instant Bing/Yandex notification.
- **Medium** — A sitewide WebGL "SplashCursor" fluid-simulation effect runs on every pointer move across the whole site — a latent INP risk on mobile, deferred via `next/dynamic({ssr:false})` so it doesn't block LCP, but worth lab-testing for interaction responsiveness. *(Note: this is a distinct effect from the stuck "Loading Sky" starfield bug in the Visual findings — the SplashCursor cursor-trail effect loads fine; the separate ThreeScene starfield component is what hangs.)*
- **Low** — Homepage canonical omits a trailing slash while the page is served with one (cosmetic inconsistency).
- **Info** — No hreflang tags despite an explicitly international client base; likely fine as-is for a single-language B2B site, revisit only if region-specific landing pages are built.

---

## 2. Content Quality — Score: 82/100

**Full findings:** [`findings/content.md`](findings/content.md)

Weighted E-E-A-T composite: ~76/100, with Experience (88) and Expertise (78) strong, Trustworthiness (72) and Authoritativeness (68) the drag. The site's headline quantified claims (99.83% match rate, 30,134 transactions validated, named $110K/$1.8M/$21M deals) were independently verified to actually appear in rendered HTML, not just marketing copy or `llms.txt` — a meaningful trust signal. Full 8-person named team with LinkedIn links on `/team`. No AI-pattern filler language detected anywhere sampled.

**Key findings:**
- **Medium** — Single-author concentration: all 8 sampled long-form posts are bylined "Dev Shah" only, despite 6 other named specialists on `/team` whose expertise is never attributed to specific content.
- **Medium** — No visible per-post author bio/credentials block — the founder bio only exists on `/team` and in JSON-LD, not inline on articles.
- **Medium** — No visible phone number or physical address in body copy anywhere on the site (only an email address and non-visible geo meta tags) — a real gap for the Trustworthiness E-E-A-T pillar on a high-value B2B advisory site.
- **Low–Medium** — Homepage body copy (~357 words) sits below the 500-word floor for homepages, though this is a deliberate hero-driven design that funnels to `/approach`/`/portfolio`.
- **Low** — Stories case-study stats remain prose-only with no supporting tables/charts (confirmed independently by both content and GEO audits).

---

## 3. On-Page SEO — Score: 82/100

**Full findings:** [`findings/onpage.md`](findings/onpage.md)

Consistent, keyword-rich `PageName | Kautilya | Keywords` title pattern across all 16 pages sampled; every page has exactly one H1, a unique meta description, and a correct self-referencing canonical; `robots` meta is `index, follow` everywhere with no accidental noindex.

**Key findings:**
- **Medium** — 9 of 16 sampled pages have meta descriptions exceeding the ~155–160 character SERP display limit (worst: the Torrent-JB Chemicals newsletter post at 255 characters), risking truncation.
- **Medium** — `/portfolio` and `/newsletter` have zero `<h2>` subheadings despite listing multiple distinct case studies/issues — a missed structural opportunity.
- **Medium** — Portfolio-logo and OG images lack `width`/`height` attributes, creating CLS risk (cross-referenced in Performance and Images findings).
- **Low** — Five third-party "featured on" badge images (EasyDoFollow, Huzzler, EasyLaunch, LemonLaunch, Verified DR) are hotlinked from external domains on high-traffic pages, adding connection overhead for limited SEO value to a B2B M&A audience.

---

## 4. Schema & Structured Data — Score: 78/100

**Full findings:** [`findings/schema.md`](findings/schema.md)

Breadth and technical correctness are well above typical B2B-site baseline: fully SSR'd, valid JSON on every block sampled, comprehensive `Organization`/`Person`/`BlogPosting` properties, `BreadcrumbList` on every deep page, absolute URLs and ISO 8601 dates throughout, correctly formatted `SearchAction`.

**Key findings:**
- **Critical** — Deprecated `HowTo` schema live on `/approach` and conditionally on `/stories/[slug]` (see Critical Issue #3 above).
- **Info** — `FAQPage` markup (26 Q&As) has had zero Google SERP benefit since Google retired FAQ rich results for all sites on 2026-05-07; not harmful, but dead weight unless kept deliberately for GEO/AI-extraction purposes.
- **Low** — FAQ question-count mismatch: `llms.txt` says "23 answered questions," live schema has 26 (see Quick Win #3).
- **Medium** — Two separate top-level entities (`Organization` and `ProfessionalService`) declared for the same business on the homepage with no `@id` linkage, and drifting offer-catalog details (one includes pricing, the other doesn't) between them.
- **Low** — `NewsArticle` type used for evergreen Stories content (should be plain `Article`/`BlogPosting`); Newsletter posts are a better fit for `NewsArticle` since they track live deal news.
- **Low** — Empty-string `servicePhone: ''` on `/approach` is a malformed value that should be removed or populated.

---

## 5. Performance (Core Web Vitals) — Score: 85/100 *(lab-based estimate; no CrUX/PSI field data available)*

**Full findings:** [`findings/performance.md`](findings/performance.md)

No Google API credentials were configured in this environment, so PageSpeed Insights and CrUX field data were unreachable — all findings are lab-based (curl timing, header inspection, `render_page.py`) and should be validated against real PSI/CrUX data when available.

**What's strong:** TTFB is excellent everywhere tested (55–109ms across 5 pages), Brotli compression confirmed sitewide, static assets cached with `immutable, max-age=31536000`, font-loading uses self-hosted `next/font` woff2 with `font-display: swap` (no FOIT, no third-party Google Fonts round trip), and all pages are server-rendered with full content in the initial HTML response.

**Key findings:**
- **Medium** — Portfolio logo images lack `width`/`height` (CLS risk — cross-referenced with On-Page/Images).
- **Low/Medium** — Five third-party badge images from five separate external domains load identically on every page, adding DNS/TLS overhead for content irrelevant to the target audience.
- **Low** — HTML responses use `Cache-Control: public, max-age=0, must-revalidate` (browser always revalidates on navigation); Vercel edge caching (ISR, 300s revalidate window) already compensates well, so this is low-impact.
- **Informational** — No full Lighthouse trace or CrUX field data obtained; the 85/100 score reflects strong lab signals but cannot confirm real-world INP under mobile CPU throttling. *(Note: this audit's lab sample did not happen to hit the multi-megabyte Stories-page images documented in the Images section below — those images would materially worsen real-world LCP on the specific pages that carry them.)*

---

## 6. Images — Score: 38/100

**Full findings:** [`findings/images.md`](findings/images.md)

Alt-text hygiene is excellent (100% coverage, zero missing/empty `alt` across ~92 images sampled on 16 pages), but the site carries a very large, avoidable image-weight liability.

**Key findings:**
- **Critical** — ~94MB total payload across the 54 images referenced in `image-sitemap.xml`; 16 images (30%) exceed 1MB, with ten Stories-page PNGs at 7–9.2MB each (see Critical Issue #2 above).
- **High** — Zero modern image format usage (0% WebP/AVIF) and zero requests through `/_next/image` — the site uses plain `<img>` tags throughout rather than Next.js's built-in image optimization pipeline.
- **High** — No responsive `srcset` on homepage/`/portfolio`/`/stories` — mobile visitors download the same multi-megabyte asset as desktop visitors.
- **Medium** — Portfolio-logo images missing `width`/`height` (CLS risk, cross-referenced above).
- **Low** — Third-party hotlinked badge images (cross-referenced above).

This is the single most impactful, most mechanically simple fix available on the site — migrating to `next/image` and re-exporting the oversized Stories PNGs would likely cut total image payload by 90%+ with no design changes required.

---

## 7. AI Search Readiness (GEO) — Score: 76/100

**Full findings:** [`findings/geo.md`](findings/geo.md) · Baseline: [`/root/kautilya-site/seo/GEO-ANALYSIS.md`](/root/kautilya-site/seo/GEO-ANALYSIS.md) (2026-08-07, re-verified live in this audit)

The site's technical AI-readiness fundamentals are close to best-in-class: `robots.txt` explicitly allows every major AI crawler (GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, anthropic-ai, PerplexityBot, CCBot, Applebot-Extended, cohere-ai, YouBot), `llms.txt` (91 lines) and `llms-full.txt` (676 lines) both resolve and are content-rich, every sampled page renders as raw static HTML with no JS-execution dependency, and the headline statistics quoted in `llms.txt` were verified to appear verbatim in the actual on-page content. A `SpeakableSpecification` schema block (new since the August baseline) adds voice-AI eligibility.

**Key findings:**
- **High** — Off-site authority signals remain the primary score cap: no Wikipedia entity, no Reddit presence, and the linked YouTube channel's activity could not be verified (consent-wall blocks automated checks). Per the GEO framework, YouTube mentions correlate most strongly (~0.737) with AI citation odds of any signal checked — currently zero leveraged activity despite the channel existing.
- **Medium** — The flagship stats-heavy case study (`/stories/inspire3`) has zero in-content visuals or video despite dense quantified claims — a missed extraction target for AI systems that increasingly surface images alongside text answers.
- **Medium** — `llms-full.txt` still excludes Stories/case-study full text despite its header claiming complete Blog+Newsletter coverage.
- **Low** — FAQ answers are snippet-length only (26–53 words), good for Google AI Overview/voice extraction but thin for Perplexity-style multi-source synthesis, which favors longer self-contained passages.

Platform-specific estimates: Google AI Overviews ~79/100, Bing Copilot ~78/100, Perplexity ~76/100, ChatGPT/OAI-SearchBot ~73/100.

---

## Supplementary Analyses (not in weighted score)

### Search Experience Optimization (SXO) — Gap Score: 70/100
**Full findings:** [`findings/sxo.md`](findings/sxo.md)

The site's page types mostly match what Google rewards for each target query (schema depth in particular is ahead of observed SERP competitors), but two structural gaps stand out: **no standalone "buy-side due diligence" service page** despite that SERP being dominated exclusively by service/landing pages (PwC, Plante Moran, Dealroom), and a **thin homepage (357 words)** relative to the trust bar its target SERP requires (BDO, EY, Axis Capital, RBSA lead with credentialed team pages and track record). The weakest persona identified is a family-business owner/seller who lands on site content written entirely from the buyer's perspective with no seller-facing trust path or CTA.

### Content Architecture / Topic Clustering — Score: 54/100
**Full findings:** [`findings/cluster.md`](findings/cluster.md)

The three content verticals (`/blog`, `/newsletter`, `/stories`) are well-differentiated by content *type*, which is the right structural instinct, but execution lags the keyword inventory's ambitions. Confirmed **cannibalization** between `/blog/what-is-a-search-fund` and `/stories/search-funds`. Two heavily-keyword-targeted topics — "off-market deal sourcing" and "buy-side due diligence checklist" — have **zero dedicated pillar content**. `/newsletter` is a complete internal-linking island (zero cross-links to/from blog, stories, or approach), and 9 of 16 Stories posts are internal-link dead ends.

---

## Artifacts

- Full findings by category: `findings/technical.md`, `findings/content.md`, `findings/onpage.md`, `findings/schema.md`, `findings/sitemap.md`, `findings/performance.md`, `findings/images.md`, `findings/geo.md`, `findings/visual.md`, `findings/sxo.md`, `findings/cluster.md`
- Screenshots: `screenshots/` (desktop + mobile, full-page and above-the-fold captures via Playwright/Chromium)
- Structured data envelope: `audit-data.json`
- Prioritized recommendations: `ACTION-PLAN.md`
