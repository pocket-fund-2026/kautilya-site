# Full SEO Audit — kautilya-pe.com

**Audit date:** 2026-08-26
**Domain:** https://www.kautilya-pe.com (canonical www host; bare apex redirects to www)
**Auditor:** claude-seo toolkit — technical, content/E-E-A-T, and schema specialist subagents (source-level analysis)
**Prior audit:** see `../2026-08-18-kautilya-pe-com/` for the previous run (visual/performance/GEO/SXO/cluster coverage not repeated here — this run focuses on technical, content, and schema)

---

## Executive Summary

### Overall Health (this run's scope): ~70/100

| Category | Score | Notes |
|---|---|---|
| Technical SEO | 82/100 | Strong foundation; one real bug |
| Content Quality (E-E-A-T) | 52/100 | Weakest area — thin homepage/team/portfolio |
| Schema / Structured Data | Strong, with correctness bugs | Duplicate/conflicting entities, deprecated types |

### Top Issues

1. **[High] Apex domain redirects with a temporary 307, not a permanent 301/308.** Confirmed again on this run (`http://kautilya-pe.com/` and `https://kautilya-pe.com/robots.txt` both 307 to `www`). This affects every URL on the bare domain, including `robots.txt` itself. Fix: change the Vercel domain redirect (or `next.config.js` redirect) to 301/308.
2. **[High] Homepage is only 168 words** — thin for a page that needs to establish trust and rank for head terms. No primary keyword in the H1.
3. **[High] `/team` page has zero named humans in visible text.** All 5 team members (including founder Dev Shah) exist only inside JSON-LD `Person` schema and a stuffed `<meta name="keywords">` tag — invisible to readers and to most AI-answer extraction. The page whose job is to build trust currently does the opposite.
4. **[High] Three separate, un-linked entity blocks on the homepage** (`Organization`, `WebSite.publisher`, `ProfessionalService`) describe the same company with **contradictory data** — two different prices/descriptions for the same due-diligence service, inconsistent address presence. No `@id` cross-references. Should be consolidated into a single `@graph`.
5. **[Medium] Deprecated `HowTo` schema still live** on all ~16 `/stories/*` article pages (Google removed HowTo rich results Sept 2023) — pure dead weight.
6. **[Medium] `NewsArticle` used instead of `BlogPosting`** for the 16 story/case-study posts — `NewsArticle` is reserved for Google-News-eligible journalism, not owned-media case studies.
7. **[Medium] No visible phone number or street address anywhere on the site** — only a city-level address in schema. Meaningful trust gap for a firm soliciting acquisition mandates.
8. **[Medium] `/portfolio` (the core trust asset, $1.5M+ claimed deal value) is only 405 words** — thinner than a single blog post.
9. **[Low] `/blog` title tag says "Buy a Business India" instead of "Kautilya"** — leftover brand mismatch, looks templated from an unrelated property.
10. **[Info] Keyword-stuffed `<meta name="keywords">` tags** on Home (~60 phrase permutations) and `/team` (~48 phrases, including 4 repeats of the founder's name). No ranking impact but signals a metadata-engineering-over-content-quality production process.

### Quick Wins

1. Flip the apex→www redirect from 307 to 301/308 in Vercel domain settings — minutes of config.
2. Delete the `HowTo` JSON-LD blocks from the story-page template.
3. Fix the `/blog` title tag brand mismatch.
4. Consolidate the homepage's 3 entity blocks into one `@graph` with `@id` references (see schema findings for ready-to-use JSON-LD).

---

## 1. Technical SEO — 82/100

**Full findings:** [`findings/technical.md`](findings/technical.md)

Next.js App Router, SSR/SSG, served via Vercel edge cache. Robots.txt is unusually current and AI-crawler-aware (explicit allow rules for GPTBot, ClaudeBot, PerplexityBot, CCBot, etc.). Full valid `sitemap.xml` + `image-sitemap.xml` (~30 URLs). HSTS with preload. No noindex leaks, no CSR dependency, comprehensive JSON-LD coverage. The one real defect is the apex-domain 307 redirect (Critical Issue #1 above).

## 2. Content Quality (E-E-A-T) — 52/100

**Full findings:** [`findings/content.md`](findings/content.md)

Genuine domain expertise exists in the writing (specific stats: "99.83% transaction match rate," "$6,500 standalone DD," "$1.5M+ deal value") but it's concentrated on `/approach` and `/faq` while the pages that should carry the most persuasive weight — Home, Team, Portfolio — are the thinnest on the site. No visible author bylines anywhere. No phone/street address.

## 3. Schema / Structured Data

**Full findings:** [`findings/schema.md`](findings/schema.md)

Above-average implementation (BreadcrumbList, VideoObject, FAQPage, Person, ProfessionalService all present and mostly valid) undermined by duplicate/conflicting Organization entities, deprecated HowTo markup, and mistyped NewsArticle. One data bug: the founder's `Person.image` points to `aditya.jpeg`, a filename mismatch.

---

## Prioritized Action Plan

**Critical / High (this week)**
1. Fix apex→www redirect: 307 → 301/308.
2. Expand homepage body copy to 500+ words with concrete proof points pulled from `/approach`.
3. Rebuild `/team` with real visible bios: names, photos, credentials, LinkedIn links.
4. Consolidate homepage schema into one `@graph` with `@id` references (fixes the price/address conflict).

**Medium (this month)**
5. Deepen `/portfolio` into individual case-study pages with mandate details, timeline, outcome.
6. Remove `HowTo` schema; switch `NewsArticle` → `BlogPosting` across all 16 story pages.
7. Add a visible phone number and registered-office address.
8. Fix `/blog` title tag brand mismatch.

**Low**
9. Prune the keyword-stuffed `<meta name="keywords">` tags.
10. Trim FAQ/Newsletter meta descriptions to ≤160 chars.
11. Add IndexNow key + ping integration for faster Bing/Yandex indexing.
