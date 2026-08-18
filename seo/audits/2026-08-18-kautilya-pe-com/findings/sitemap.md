# Sitemap Audit — kautilya-pe.com
Date: 2026-08-18

## What Works

- All 3 sitemaps declared in robots.txt (`/sitemap.xml`, `/news-sitemap.xml`, `/image-sitemap.xml`) resolve with HTTP 200 and are well-formed XML (verified via structural line/element inspection; no unclosed tags, valid `urlset`/namespace declarations).
- `sitemap.xml` (35 URLs) is well under the 50,000 URL / 50MB limits — no splitting/index needed.
- 100% host consistency: every `<loc>` in all three sitemaps uses `https://www.kautilya-pe.com` — no mixed www/non-www or http/https entries.
- Canonicalization is correctly enforced at the redirect layer: `http://kautilya-pe.com` → 308 → `https://kautilya-pe.com` → 307 → `https://www.kautilya-pe.com`, so even if a crawler discovers a non-canonical URL it lands on the canonical host.
- No duplicate `<loc>` entries in `sitemap.xml`.
- Spot-checked 10 URLs across all content types (home, story, blog, newsletter, careers, team, terms, opengraph-image, icon.svg, an images/ asset) — all returned HTTP 200, no redirects or 404s found in the sample.
- Route coverage is complete: every content route under `/root/kautilya-site/app` (approach, portfolio, stories + 16 slugs, engage, faq, team, careers, terms, privacy, blog + 3 posts, newsletter + 4 posts) is represented in `sitemap.xml`. Non-content technical routes (`/api/*`, `/opensearch.xml`, `/rss.xml`, `/opengraph-image`) are correctly omitted from the URL list, and `/api/` is explicitly disallowed in robots.txt.
- `sitemap.xml` is generated programmatically from `app/sitemap.ts`, driven by the same `STORY_SLUGS`/`BLOG_SLUGS`/`NEWSLETTER_SLUGS` constants used to render the actual pages (`/root/kautilya-site/lib/stories.ts`, `lib/blogs.ts`, `lib/newsletters.ts`) — this makes sitemap/route drift unlikely as new content is added.
- Per-content-type `lastmod` values (blog, newsletter, story pages) are driven by each item's real `datePublished` metadata rather than a single build timestamp, which is good practice for those 21 URLs.

## Findings

### 1. `news:news` sitemap misapplied to evergreen case-study content (High)
`/root/kautilya-site/app/news-sitemap.xml/route.ts` emits a Google News sitemap (`xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"`) containing all 16 `/stories/*` pages — deal case studies and origin-story posts, several published in 2023–2024 (e.g. `edition-zero` and `search-funds` reference `2024-06-01` lastmod/publication_date). Google News sitemaps are reserved for time-sensitive news articles from publishers approved for Google News, and the `news:publication_date` field is expected to reflect a genuine news publication date, generally within the last 2 days for the sitemap to be useful (Google drops articles older than ~2 days from the News index regardless of sitemap presence). Kautilya is not a registered news publisher and these are not news articles.
- **Evidence:** `news-sitemap.xml` — 16 `<url>` entries, each with `<news:publication><news:name>Kautilya Stories</news:name>...` and a `publication_date` such as `2024-06-01`.
- **Impact:** Google Search Console will likely surface "Invalid publication date" or "Not indexed as News" warnings on most/all URLs, since submissions with dates older than 2 days are ignored for News indexing. At best this sitemap is functionally inert; at worst it clutters GSC's Sitemaps report with a permanent stream of errors that make genuine sitemap problems harder to spot.
- **Recommendation:** Remove `news-sitemap.xml` entirely (delete `app/news-sitemap.xml/route.ts` and the robots.txt reference) unless Kautilya intends to publish genuinely time-sensitive news and apply for Google News inclusion. The `/stories/*` URLs are already fully covered by `sitemap.xml`, so no discoverability is lost by removing the news sitemap.

### 2. Uniform `lastmod` across unrelated pages weakens freshness signal (Low)
Four static pages (`/`, `/approach`, `/portfolio`, `/stories`) all carry the identical `lastmod` of `2026-05-27`, hardcoded as a literal string in `app/sitemap.ts` rather than derived from actual content-change dates. `/stories` in particular aggregates content that changes far more often (new stories were published through August 2026 per the blog/newsletter `datePublished` values) yet its `lastmod` predates several of those additions.
- **Evidence:** `app/sitemap.ts` lines 33, 40, 47, 59 — all `lastModified: '2026-05-27'`; matches the comment `# robots.txt — last updated 2026-05-27`, suggesting this is simply the last full-site deploy date rather than a per-page edit date.
- **Impact:** Low — Google has stated `lastmod` is a secondary signal and largely ignores implausible/uniform values, so this is not a ranking risk. It does, however, reduce the sitemap's usefulness for prioritizing recrawl of genuinely updated pages (e.g., `/stories` should reflect the most recent story's publish date).
- **Recommendation:** Derive `lastmod` for aggregator pages (`/`, `/stories`, `/blog`, `/newsletter`) from `Math.max()` of the underlying content's `datePublished` values instead of a hardcoded string, so it moves automatically as new content ships.

### 3. `priority`/`changefreq` tags present but ignored by Google (Info)
`sitemap.xml` sets `<priority>` (values 0.2–1.0) and `<changefreq>` (`monthly`/`weekly`/`yearly`) on every URL. Google has confirmed both fields are ignored by Googlebot; Bing gives them only weak, generally negligible weight.
- **Evidence:** `grep -c` shows priority values used on all 35 URLs (17× `0.7`, 11× `0.8`, etc.) and changefreq on all 35 (29× `monthly`, 4× `weekly`, 2× `yearly`).
- **Impact:** None functionally — these tags are dead weight, not a penalty risk. Flagged for hygiene only.
- **Recommendation:** Optional cleanup: remove `priority`/`changefreq` from `app/sitemap.ts` to reduce payload size and avoid implying false precision; not urgent.

### 4. `image-sitemap.xml` image metadata is hand-maintained and can drift (Low)
`app/image-sitemap.xml/route.ts` hardcodes an `IMAGE_MAP` array (18 page/image groupings) independently of `app/sitemap.ts`'s own `STORY_IMAGES` map and of `app/sitemap.ts`'s inline `images:` field (Next's `MetadataRoute.Sitemap` also embeds `image:image` entries directly into `sitemap.xml` via the `images` array). This means image metadata is defined in three separate places (`app/sitemap.ts` `STORY_IMAGES`, `app/sitemap.ts` inline `images:` on static pages, and `app/image-sitemap.xml/route.ts` `IMAGE_MAP`) with no single source of truth — e.g. `/stories/msp-buy-side-diligence` and several other story slugs appear in `STORY_IMAGES` (used by both `sitemap.xml` and `news-sitemap.xml`) but are absent from `IMAGE_MAP` in the dedicated image sitemap.
- **Evidence:** `STORY_IMAGES` in `app/sitemap.ts`/`news-sitemap.xml/route.ts` includes 16 story slugs; `IMAGE_MAP` in `image-sitemap.xml/route.ts` covers only 13 of those story pages (missing `msp-buy-side-diligence`, `smartprompt`'s peer coverage is present but e.g. no dedicated `/blog/*` or `/newsletter/*` image entries at all).
- **Impact:** Minor — `sitemap.xml` already carries `image:image`-equivalent data via Next's `images` field for most pages, so `image-sitemap.xml` is largely redundant. Drift just means some images are discoverable via one sitemap but not the other; not a validity or indexing failure.
- **Recommendation:** Consolidate to a single image-metadata source (the `STORY_IMAGES`/page-image map already in `app/sitemap.ts`) and either generate `image-sitemap.xml` from it, or drop the separate image sitemap altogether since Google primarily relies on `<img>`/`sitemap.xml` image annotations discovered via normal crawling for Image Search.

## Quality Gates
- Location-page thresholds do not apply — no location/city pages exist on this site (B2B advisory site with story/blog/newsletter/static content only). No warning or hard stop triggered.

## Sitemap Score: 78 / 100

Deductions: -15 for the news-sitemap misapplication (High, likely to generate persistent GSC errors), -4 for freshness-signal weakness from hardcoded uniform lastmod, -3 for image-sitemap/data-source drift. Core mechanics (validity, host consistency, coverage completeness, URL health, scale limits) are all sound.
