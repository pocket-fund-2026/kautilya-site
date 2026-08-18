# On-Page SEO Findings — kautilya-pe.com

Analyzed 16 key pages via direct HTML fetch (curl -sL) of rendered/static HTML: `/`, `/approach`, `/portfolio`, `/faq`, `/engage`, `/team`, `/careers`, `/blog`, 3 blog posts, `/newsletter`, 1 newsletter post, `/stories`, 2 story posts.

## What Works
- **Consistent, keyword-rich title tag pattern**: every page follows `Page Name | Kautilya | Descriptive Keyword Phrase` (e.g. "FAQ | Kautilya | Micro Private Equity & Buy-Side Advisory"). Strong branding + keyword targeting balance.
- **Every page has exactly one `<h1>`** — no multi-H1 or missing-H1 pages found across the 16 sampled.
- **Every page has a unique meta description** — no duplicates detected across the sample.
- **Canonical tags present and correct on every page**, all pointing to the `https://www.kautilya-pe.com` host (no self-canonical errors, no cross-page canonical mistakes).
- **`robots` meta consistently `index, follow`** on all sampled pages — no accidental noindex.
- **OG:title present and distinct from `<title>` on long-form pages** (blog/newsletter posts use a longer, more descriptive OG:title than the SEO title — e.g. blog post title tag is 45 chars but OG:title is the full 93-char subtitle) — good pattern for social sharing vs. SERP display.
- **Heading hierarchy is generally logical** on long-form content pages (blog posts, /approach, /faq) with multiple H2/H3 sections structuring the content well (e.g. `/faq` has 8 H2 + 26 H3, `/blog/what-is-a-search-fund` has 8 H2 + 6 H3).

## Findings

### 1. Multiple meta descriptions exceed the ~155–160 character SERP display limit
**Severity: Medium**
Several descriptions will be truncated in Google search results:
- `/newsletter/torrent-jb-chemicals-pharma-valuation`: 255 characters
- `/newsletter`: 204 characters
- `/blog/what-is-a-search-fund`: 203 characters
- `/faq`: 188 characters
- `/approach`: 172 characters
- `/portfolio`: 174 characters
- `/blog`: 171 characters
- `/team`: 177 characters
- `/stories`: 159 characters

**Recommendation**: Trim to 150–155 characters with the most compelling/keyword-relevant clause first, since Google truncates with an ellipsis after ~155-160 chars on desktop.

### 2. `/portfolio` and `/newsletter` have zero `<h2>` tags
**Severity: Medium**
`/portfolio` (0 h2, 0 h3) and `/newsletter` (0 h2, 0 h3) rely on a single H1 with no subheading structure, despite listing multiple distinct case studies/newsletter issues. This is a missed opportunity for on-page topical structure and for search engines/AI systems to parse the page into distinct sections (e.g. each portfolio deal or newsletter issue should likely be an H2/H3 if not already using semantic non-heading markup for card titles).
**Recommendation**: Verify these list pages use heading tags (not just styled `<div>`/`<p>`) for each case-study/issue title — add H2s per portfolio company / per newsletter issue if not already present in the DOM, both for SEO structure and accessibility.

### 3. Portfolio-logo and OG images used as plain `<img>` tags with no `width`/`height` attributes
**Severity: Medium** (cross-referenced with Images/Performance findings)
E.g. on `/portfolio`: `<img src="/images/portfolio-logos/inspire3.png" alt="..."/>` has no explicit `width`/`height`, creating Cumulative Layout Shift (CLS) risk as the browser can't reserve space before the image loads.
**Recommendation**: Add explicit `width`/`height` (or `aspect-ratio` in CSS) to all `<img>` tags site-wide, and migrate to Next.js `next/image` for automatic dimension inference — see Images findings for the broader unoptimized-image issue.

### 4. Third-party badge images add off-domain `<img>` tags to key pages
**Severity: Low**
Homepage and `/portfolio` embed external badges (easydofollow.dev, huzzler.so, easylaunch.dev, lemonlaunch.dev, verifieddr.com) via direct hotlinked `<img>` tags. These are low-authority "featured on" badge sites common in indie-maker directories — of limited SEO value for a B2B M&A advisory firm and add extra external DNS/connection overhead on key conversion pages.
**Recommendation**: Evaluate whether these badges still serve a purpose; if kept, self-host the badge images to avoid external requests, and confirm the linked directories are still relevant/live.

### 5. Title tags are well-optimized in length but check keyword front-loading
**Severity: Low / Info**
Titles range from 33–61 characters (all within safe display limits). Primary keyword generally appears early on service pages (e.g. "Approach | Kautilya | M&A Methodology & Deal Sourcing") but pattern is `PageName | Brand | Keywords` rather than `Keyword | Brand`, which slightly de-prioritizes the primary keyword's position. Given brand recognition is still being built, consider testing `Primary Keyword | Kautilya` ordering on the highest-intent commercial pages (`/`, `/approach`, `/faq`) once brand authority grows — low priority, current pattern is defensible.

## On-Page SEO Score: 82/100

Strong, consistent technical on-page hygiene (canonicals, meta robots, unique titles/descriptions, single H1). Main deductions: several over-length meta descriptions, missing subheading structure on 2 list-style pages, and CLS-risk images without dimensions.
