# Content Quality & E-E-A-T Findings — kautilya-pe.com (2026-08-26)

**Overall Content Quality Score: 52/100**

Scope verified directly: Home, /approach, /blog (index), /careers, /engage, /faq, /newsletter, /portfolio, /stories, /team.

The site has genuine expertise signals and one excellent asset (the FAQ page), but is undermined by severe thin content on high-intent pages, an aggressive keyword-stuffed `<meta name="keywords">` tag, a Team page whose visible copy contains zero named humans, and no visible phone number or street address anywhere on the site.

## E-E-A-T Breakdown

| Factor | Score | Notes |
|---|---|---|
| Experience (20%) | 45/100 | Founder bio claims first-hand acquisitions/exits; `/stories` references specific deals ($4K AI tool, $15K micro-SaaS, $150K, $200K in 6 months) — good signals in theory, but proof-of-work lives in a thin 286-word index page and a 405-word `/portfolio`. No links through to substantive individual case studies with dates/outcomes/client attribution. |
| Expertise (25%) | 55/100 | `/approach` (1,289 words) and `/faq` (3,136 words, FAQPage schema) show real domain fluency. But `/team` — the page whose job is establishing practitioner expertise — has only 223 words, generic one-line role blurbs, **no names, headshots, LinkedIn links, or credentials in visible text**. Names exist only in JSON-LD `Person` schema and a stuffed `<meta name="keywords">` tag. |
| Authoritativeness (25%) | 40/100 | One founder LinkedIn, one company LinkedIn. No press mentions, third-party citations, client logos, or testimonials anywhere in the crawled pages. Entirely self-referential on authority. |
| Trustworthiness (30%) | 50/100 | HTTPS, HSTS preload, clean privacy/terms footer. Contact limited to email + Google Calendar booking link — **no phone number anywhere**; address exists only at city-level in schema, never as a street address in visible content. |

**Weighted E-E-A-T score: ~47/100**

## Word Count vs. Page-Type Expectations

| Page | Word count | Status |
|---|---|---|
| Home | 168 | **Severe — 66% below a 500-word homepage floor.** Just a hero line, one paragraph on methodology, three link-out cards. |
| /team | 223 | **Severe.** The page tasked with proving expertise has the least substance on the site. |
| /engage | 148 | Acceptable — transactional form page. |
| /careers | 301 | Low but acceptable for a jobs page. |
| /newsletter | 245 | Thin, but acceptable for an opt-in page. |
| /stories (index) | 286 | Acceptable as a hub if linked case studies are deep (not verified in this run). |
| /portfolio | 405 | **Moderate.** Core trust asset ($1.5M+ claimed deal value), thinner than a single blog post. |
| /blog (index) | 537 | Fine as a listing page. |
| /approach | 1,289 | **Good** — clears an 800-word service-page floor with genuine process detail. |
| /faq | 3,136 | **Excellent** — deepest, most substantive page on the site. |

**Pattern:** the pages that should carry the most persuasive, trust-building weight (Home, Team, Portfolio) are the thinnest, while a secondary utility page (FAQ) carries nearly all the topical depth.

## Title Tags & Meta Descriptions

| Page | Title (chars) | Description (chars) | Issue |
|---|---|---|---|
| Home | 50 | 166 | Fine. |
| Approach | 53 | 172 | Fine. |
| Blog | 66 | 147 | **Brand mismatch:** title reads "Blog — Business Acquisition Insights & Tips \| Buy a Business India" — never mentions "Kautilya." Looks templated from a different property. |
| Careers | 34 | 101 | Fine. |
| Engage | 50 | 140 | Fine. |
| FAQ | 57 | 184 | Description exceeds ~155-160 char safe zone — will truncate. |
| Newsletter | 50 | 193 | Description significantly over length — will truncate. |
| Portfolio | 50 | 167 | Minor truncation risk. |
| Stories | 55 | 152 | Fine. |
| Team | 42 | 173 | Slightly over. |

No duplicate titles found across the 10 pages checked.

## Heading Structure
Single H1 per page confirmed throughout; logical H2/H3 nesting; no skipped levels. Home's H1 ("You bring the thesis. We build the universe.") is on-brand but contains no target keyword.

## Keyword Targeting — most concrete finding
- Natural keyword use in body copy (Approach, FAQ) is reasonable.
- **`<meta name="keywords">` on `/team` contains ~48 comma-separated phrases**, including four repetitions of the founder's name with different modifiers (`Dev Shah Kautilya`, `Dev Shah micro PE`, `Dev Shah acquisition entrepreneur India`, `Dev Shah Mumbai`, `Dev Shah founder Kautilya`) plus repeated permutations of "India"/"M&A"/"advisory"/"team."
- Home's keywords meta stacks ~60 phrase permutations of "acquisition ... India."
- The tag carries no ranking weight, but the pattern is diagnostic of a production process optimized for keyword permutation over readable content — correlates with the thin-content findings above.

## AI Citation Readiness Score: 58/100
Strengths: `/faq` has full `FAQPage` schema + `SpeakableSpecification`; rich `Organization`/`ProfessionalService`/`Person`/`Offer` JSON-LD on Home; specific quotable stats ("99.83% transaction match rate," "2,500+ founder conversations," "$6,500 standalone DD," "$1.5M+ in deal value," "diligence delivered in under 15 days").
Weaknesses: those stats live almost entirely on `/approach` and `/faq`, not Home or `/portfolio` (the pages most likely crawled first). No visible author bylines/dated review signals — names are schema-only.

## AI-Generated Content Quality Flags (Sept 2025 QRG)
No hard evidence of AI-boilerplate in Approach/FAQ (specific, non-generic). The Blog title/meta brand mismatch and the templated keyword-meta pattern are the closest red flags — worth a spot-check of individual blog posts (out of scope this run) for repetitive structure.

## Priority Recommendations

**Critical**
1. Expand Home from ~170 to 500+ words with concrete, keyword-natural sentences and proof points pulled from `/approach`.
2. Rebuild `/team` with real, visible author bios: full names, headshots, credentials, LinkedIn links, 2-3 sentences of track record per person, rendered as readable text (not just JSON-LD).
3. Remove or prune the keyword-stuffed `<meta name="keywords">` tags on Home and `/team`.

**High**
4. Deepen `/portfolio` — turn case studies into individual pages with mandate details, timeline, outcome.
5. Fix Blog title tag/meta description brand mismatch.
6. Add a visible phone number and full street/registered-office address.

**Medium**
7. Trim FAQ and Newsletter meta descriptions to ≤155-160 characters.
8. Rewrite the Home H1 to include a primary keyword phrase alongside the brand tagline.
9. Add named-author bylines with credentials to `/approach` and `/faq`.

**Note:** during this audit, unrelated cached files from a different domain (buyabusiness-india.com) were found already present in the shared scratchpad from an earlier session. None of that content was used in this report — all findings above are sourced only from kautilya-pe.com pages fetched directly during this run.
