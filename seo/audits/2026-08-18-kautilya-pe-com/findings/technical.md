# Technical SEO Audit — kautilya-pe.com
Date: 2026-08-18
Auditor: claude-seo technical agent
Method: `render_page.py` (raw + rendered) on 6 sampled URLs (`/`, `/approach`, `/faq`, `/blog`, `/stories/borderless`, `/blog/what-is-a-search-fund`), direct `curl -sIL`/`curl -sL` against robots.txt, all 3 sitemaps, and 12 live pages; cross-referenced against `/root/kautilya-site/next.config.ts` and `app/` route structure.

## Technical Score: 87 / 100

Strong baseline: clean SSG rendering, complete security headers sitewide, valid multi-type JSON-LD on every sampled page, a fully valid sitemap set, and llms.txt support. Deductions are for the 307 redirect on the apex domain, no CSP header, no IndexNow support, and a sitewide WebGL cursor effect that's a latent INP/CWV risk.

## What Works

- **Crawlability**: robots.txt (`https://www.kautilya-pe.com/robots.txt`) explicitly allows `User-agent: *`, Googlebot, Bingbot, GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, anthropic-ai, Claude-Web, PerplexityBot, CCBot, Applebot, Applebot-Extended, FacebookBot, cohere-ai, YouBot — only `/api/` disallowed. Declares all 3 sitemaps.
- **Sitemaps**: `/sitemap.xml` (35 URLs, image annotations, lastmod/changefreq/priority), `/news-sitemap.xml` (Google News namespace on `/stories/*`), `/image-sitemap.xml` all return HTTP 200 and are well-formed XML. Every one of the 35 URLs in `sitemap.xml` was individually curled and returned **200** (list: `/`, `/approach`, `/portfolio`, `/stories`, `/engage`, `/faq`, `/team`, `/careers`, `/terms`, `/privacy`, `/blog` + 3 blog posts, `/newsletter` + 4 posts, `/stories` + 16 story slugs). No 404s or soft-404s detected.
- **Indexability**: All 6 sampled pages return `<meta name="robots" content="index, follow"/>` and a correct self-referencing `<link rel="canonical">` matching the served URL (verified via `--output` full-HTML dump, not the truncated `--json` summary). Titles and meta descriptions are unique per page and appropriately length-capped.
- **Rendering**: `render_page.py --mode auto` never triggered Playwright fallback on any of the 6 pages (`is_spa: false`, `mode_used: raw` for all) — confirms server-rendered HTML contains full content with no SPA-shell/CSR dependency. Live curl confirms `x-nextjs-prerender: 1` on every page tested (home, approach, faq, blog, stories/borderless, blog/what-is-a-search-fund, newsletter, careers, privacy, terms, portfolio, team, engage) — the site is statically generated (SSG/ISR), not client-rendered.
- **Security headers**: Verified sitewide (12 pages checked directly, matching `next.config.ts` `headers()` config): `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy`, `X-XSS-Protection`, `X-DNS-Prefetch-Control`, `X-Permitted-Cross-Domain-Policies` all present and identical across every page — this is a `headers()` rule with `source: '/(.*)'` in `next.config.ts`, so coverage is global by construction.
- **HTTPS**: All HTTP entry points 308-redirect to HTTPS (`http://kautilya-pe.com/` → 308 → `https://kautilya-pe.com/`; `http://www.kautilya-pe.com/` → 308 → `https://www.kautilya-pe.com/`, single hop).
- **Structured data**: Valid, rich JSON-LD on every sampled page (Organization/ProfessionalService/Person/Service on home; HowTo + BreadcrumbList on /approach; FAQPage on /faq; BlogPosting/ItemList on /blog; NewsArticle/FAQPage/HowTo on the sampled story; FAQPage/BlogPosting on the sampled blog post). All blocks parsed as `valid: true`, none truncated.
- **Open Graph / Twitter Cards**: Complete and correct (og:title, og:description, og:url, og:image with width/height/alt, twitter:card=summary_large_image, twitter:site/creator).
- **Trailing slash / casing**: `/approach/` → 308 → `/approach` (single clean normalization). `/APPROACH` and `/Stories` both 404 (no case-duplicate content surface).
- **CLS-relevant markup**: All `<img>` tags sampled on the homepage carry explicit `width`/`height` attributes. Fonts are self-hosted `.woff2` and `<link rel="preload" as="font">`'d in `<head>`, reducing FOUT/CLS risk. Viewport meta is `width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover` — mobile-friendly and does not block pinch-zoom (maximum-scale=5, not 1).
- **JS loading pattern**: All `<script src="/_next/static/chunks/...">` tags in `<head>`/body use `async` (one uses `noModule` for legacy fallback), avoiding classic render-blocking script behavior.
- **llms.txt / llms-full.txt**: Both return 200 and are comprehensive (per prior context).

## Findings

### Critical
None found.

### High

**1. Apex domain redirects with 307 (temporary), not 301/308 (permanent)**
- Severity: High
- Evidence: `curl -sIL https://kautilya-pe.com/` → `HTTP/2 307` with `location: https://www.kautilya-pe.com/`, then `HTTP/2 200`. Contrast with `http://kautilya-pe.com/` → `HTTP/1.0 308 Permanent Redirect` to `https://kautilya-pe.com/`, which then hits the 307 to www — so the full chain for a bare-HTTP visitor is **three hops**: `http://kautilya-pe.com/` (308) → `https://kautilya-pe.com/` (307) → `https://www.kautilya-pe.com/` (200). The HTTP→HTTPS→same-host hop is a clean Vercel-issued 308, but the apex-to-www hop is a 307.
- Why it matters: A 307 signals "temporary" to search engines and can slow full canonical-signal consolidation/link-equity passthrough compared to a 301/308. It also means the redirect is not being defined by a Next.js `permanent: true` rule (which would emit 308) — it looks like Vercel's default domain-alias redirect behavior for the apex domain, not an app-level redirect. This is inconsistent with the `http://www.kautilya-pe.com/` path, which correctly gets a hard 308 straight to the canonical HTTPS+www URL.
- Recommendation: In the Vercel project's Domains settings, explicitly set the redirect type for `kautilya-pe.com → www.kautilya-pe.com` to "Permanent (308)" rather than relying on the default. If Vercel's UI doesn't expose this, add a project-level redirect via `vercel.json` `redirects` (with `"permanent": true`) or handle it in `next.config.ts` `redirects()`/middleware so the whole chain (`http://kautilya-pe.com/` → `https://www.kautilya-pe.com/`) collapses to a single 301/308 hop.

### Medium

**2. No Content-Security-Policy (CSP) header**
- Severity: Medium
- Evidence: Full header dump on homepage and 11 other pages shows HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, X-XSS-Protection present — but no `content-security-policy` or `content-security-policy-report-only` header anywhere. `next.config.ts` `headers()` array (lines ~20-40) does not define one.
- Why it matters: Not a ranking factor directly, but CSP absence is a real security gap (XSS/clickjacking defense-in-depth) that increasingly factors into trust/E-E-A-T-adjacent signals and is flagged by security scanners that some enterprise PE/VC prospects run before engaging a vendor.
- Recommendation: Add a CSP header to `next.config.ts` `headers()`, starting permissive (`default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; img-src 'self' data: https:; ...`) given third-party embeds (Google Tag Manager, badge images from easydofollow.dev/huzzler.so/easylaunch.dev/lemonlaunch.dev/verifieddr.com) and Unsplash remote images already whitelisted in `images.remotePatterns`.

**3. No IndexNow protocol support**
- Severity: Medium
- Evidence: `/indexnow.txt` → 404. `grep -ril "indexnow" /root/kautilya-site` (excluding node_modules) returns no matches — no key file, no submission integration in the codebase.
- Why it matters: IndexNow (Bing, Yandex, Naver, and now also consumed by some AI crawlers) allows near-instant crawl notification instead of waiting for the next crawl cycle. For a content-marketing-driven site publishing `/newsletter` and `/stories` posts regularly (per the sitemap's `lastmod` cadence — most recent `2026-08-14`), this speeds up discovery on Bing/Yandex meaningfully.
- Recommendation: Generate an IndexNow key, host it at `/{key}.txt` (a static file served from `public/` works in Next.js), and add a submission call (webhook or API route in `app/api/`) triggered on publish for `/blog/[slug]`, `/newsletter/[slug]`, `/stories/[slug]` content.

**4. Sitewide WebGL "SplashCursor" fluid-simulation effect — latent INP/CPU risk**
- Severity: Medium
- Evidence: `app/layout.tsx` line 205 renders `<SplashCursorWrapper />` unconditionally in the root layout, so it loads on every route. `components/SplashCursorWrapper.tsx` uses `next/dynamic(..., { ssr: false })`, so it does not block SSR/LCP — good. But `components/SplashCursor.tsx` (marked `@ts-nocheck`) implements a continuous WebGL fluid-dye simulation (`SIM_RESOLUTION`, `DYE_RESOLUTION: 1440`, `PRESSURE_ITERATIONS: 20`) that runs on every pointer move across the whole site. Homepage JS chunks sampled via `curl -sI` total roughly 600KB combined (`5208b4d785e83758.js` = 223KB, `5efe6ed405f08703.js` = 118KB, `a6dad97d9634a72d.js` = 112KB, plus smaller chunks), and `three` is a `transpilePackages` entry used across 15+ components including story/newsletter pages.
- Why it matters: While deferred loading protects LCP, a continuous per-pointer-move GPU/canvas simulation is a classic INP (Interaction to Next Paint) risk on mid/low-end mobile devices — every mousemove/touchmove can trigger main-thread work competing with click/tap handlers. Given the target audience (PE/VC/family office deal reviewers, often on mobile during travel), this is worth lab-testing with real Lighthouse/WebPageTest runs rather than only source inspection.
- Recommendation: Run field/lab CWV testing (PageSpeed Insights or WebPageTest with mobile throttling) specifically measuring INP with the cursor effect active vs. disabled to quantify impact. Consider gating SplashCursor to non-touch/pointer-fine devices only (`window.matchMedia('(pointer: fine)')`) so mobile visitors — the majority of PE/VC executives skimming links — skip the effect entirely, and/or reduce `DYE_RESOLUTION`/`PRESSURE_ITERATIONS` to lighten per-frame cost.

### Low

**5. Canonical URL omits trailing slash while root is served with one**
- Severity: Low
- Evidence: Homepage is served at `https://www.kautilya-pe.com/` (trailing slash, confirmed via curl and `render_page.py`), but `<link rel="canonical" href="https://www.kautilya-pe.com"/>` (no trailing slash). All other sampled pages' canonicals correctly match their served path exactly (e.g., `/approach`, `/approach`).
- Why it matters: Technically these normalize to the same resource for Google, but it's an inconsistency worth cleaning up for correctness, especially since every other route's canonical is exact-match.
- Recommendation: Add the trailing slash to the homepage's canonical (or standardize on no-trailing-slash homepage serving) to match observed behavior exactly.

**6. No hreflang tags despite explicitly international clientele**
- Severity: Low / Info
- Evidence: `grep -oE 'hreflang'` returned 0 matches on all 6 sampled pages.
- Why it matters: The firm markets to PE funds/VC/family offices across India, UK, UAE, MENA, Europe, and APAC, but the site is single-market English with no `hreflang` alternates or region-specific pages. This is very likely fine as-is (single-language B2B advisory site, not separate localized content) — flagging as Info rather than a real defect. Per skill guidance, defer to the `seo-hreflang` sub-skill only if/when the site adds region-specific pages or the client wants to test geo-targeted content variants.
- Recommendation: No action needed unless region-specific landing pages are planned; if so, revisit with the `seo-hreflang` sub-skill.

**7. News sitemap (`/news-sitemap.xml`) using long-tail evergreen content, not time-sensitive news**
- Severity: Info
- Evidence: `/news-sitemap.xml` uses the Google News XML namespace and lists `/stories/*` pages (deal case studies), e.g. `/stories/borderless` with `<news:publication_date>2026-08-14</news:publication_date>`. Google News sitemaps are intended for content indexed within Google News (typically requires the site to be a recognized news publisher and content to be time-sensitive/published within the last 48h-2 days for News-specific value).
- Why it matters: This isn't harmful — it's a valid sitemap and won't cause errors — but it's unlikely to provide the intended "Google News" discovery benefit for a B2A advisory firm's deal-story content, which isn't news in the editorial sense. It's more likely serving as a "freshness ping" mechanism to Google via `lastmod`, which is a reasonable secondary use.
- Recommendation: No urgent action; if the intent is purely freshness signaling (not actual Google News Publisher Center inclusion), consider renaming/documenting it as such internally so future maintainers don't assume News Publisher Center enrollment is active.

## Duplicate Content / Canonicalization Summary

- **www vs non-www**: Bare apex 307-redirects to www (see Finding 1); www is confirmed canonical via every page's `<link rel="canonical">` pointing to `www.kautilya-pe.com`. No duplicate-content risk in practice, only the redirect-type issue noted above.
- **http vs https**: Both apex and www HTTP variants 308-redirect to HTTPS. Clean.
- **Trailing slash**: Normalized via 308 (`/approach/` → `/approach`). Clean.
- **Case sensitivity**: Uppercase paths 404 rather than serving duplicate content or redirecting — acceptable (no case-duplicate indexing risk), though a redirect-to-lowercase would be marginally friendlier UX; not an SEO issue since these paths simply aren't linked anywhere.

## Source Cross-Reference

- `/root/kautilya-site/next.config.ts`: `headers()` defines the global security header set (matches live observation exactly), `redirects()` defines 14 explicit 301-equivalent (`permanent: true` → Next.js emits 308) redirects for legacy `/story-*` slugs and one legacy blog slug → `/newsletter/torrent-jb-chemicals-pharma-valuation`. None of these relate to the www/apex redirect, which is Vercel platform-level, not app-level.
- `/root/kautilya-site/app/`: confirms route structure matches sitemap — `blog/[slug]`, `newsletter/[slug]`, `stories/[slug]` dynamic routes plus static `approach`, `careers`, `engage`, `faq`, `portfolio`, `privacy`, `team`, `terms` routes. `app/sitemap.ts`, `app/news-sitemap.xml`, `app/image-sitemap.xml`, `app/rss.xml`, `app/opensearch.xml` all present as dedicated route handlers, consistent with what's served live.
