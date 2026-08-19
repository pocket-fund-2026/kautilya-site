# Performance / Core Web Vitals — www.kautilya-pe.com

**Audit date:** 2026-08-18
**Method:** Lab-based analysis only. PageSpeed Insights API returned `"PSI rate limit exceeded (240 QPM / 25,000 QPD)"` on every attempt (no Google API credentials configured for this environment), and CrUX field data was consequently unreachable. All findings below are derived from direct `curl` network timing (single-sample, from this host's network location — not representative of real-user geographic distribution) and `render_page.py` (raw HTML fetch, `mode_used: raw`, `is_spa: false` on all pages) plus manual inspection of served HTML/CSS. **No 75th-percentile field data, no CrUX history, no full Lighthouse trace (script long-task timing, real LCP/INP element, CLS trace) was obtained.** Treat the score below as a lab-signal estimate, not a substitute for PSI/CrUX.

## What Works

- **TTFB is excellent everywhere tested.** curl `time_starttransfer` (full DNS+connect+TLS+server-response) on 5 pages: home 0.070s, /approach 0.065s, /portfolio 0.109s, /blog/what-is-buy-side-ma-advisory 0.084s, /stories/borderless 0.055s. All comfortably under the 2.5s LCP "good" budget and under typical 200-800ms TTFB guidance even including full connection setup.
- **Static assets are cached optimally.** JS/CSS/font chunks under `/_next/static/` return `Cache-Control: public, max-age=31536000, immutable` — correct, maximal client caching for hashed, content-addressed files.
- **Brotli compression confirmed sitewide.** `Content-Encoding: br` verified on homepage and on `/stories/borderless` (both tested explicitly with `Accept-Encoding: br, gzip`), consistent with the other pages' headers.
- **Font-loading strategy is solid.** `next/font` self-hosts two variable fonts (Cormorant, Lora) as woff2, with 4 `<link rel="preload" as="font" crossorigin type="font/woff2">` tags present on every page tested. The compiled stylesheet (`/_next/static/chunks/5d4d7be5a7f06628.css`) contains 106 occurrences of `font-display:swap`, so text is not blocked from painting while fonts load (no FOIT) and there's no third-party Google Fonts round trip.
- **Content is server-rendered, not CSR-dependent.** `render_page.py` returned `mode_used: raw` with `is_spa: false` on all 5 pages — meaning full text content (hero copy, blog body, portfolio cards) is present in the initial HTML response, not requiring JS execution for LCP-relevant content or for crawlers.
- **Blog images use `next/image` correctly.** The blog post hero and inline diagrams have explicit `width`/`height`, responsive `srcSet` across 8 breakpoints, WebP format, and `sizes="(max-width: 768px) 100vw, 800px"` — this is the correct pattern and avoids CLS for that template.
- Security/caching headers (`X-Content-Type-Options`, `Strict-Transport-Security`, `Vary: rsc, next-router-state-tree, ...`) look standard and healthy for a Next.js App Router deploy on Vercel.

## Findings

### 1. Portfolio logo images missing `width`/`height` (CLS risk) — Medium
**Evidence:** On `/portfolio`, the two logo images are raw `<img>` tags with no dimensions and no `next/image` optimization:
```html
<img src="/images/portfolio-logos/inspire3.png" alt="Inspire3 – Due Diligence – Kautilya Portfolio"/>
<img src="/images/portfolio-logos/runify.png" alt="Runify – Sourcing to Close – Kautilya Portfolio"/>
```
Compare to the blog images, which correctly use `next/image` with explicit `width`/`height` and responsive `srcSet`. Without intrinsic dimensions, the browser cannot reserve layout space before the image downloads, risking a layout shift when it loads — directly contributing to CLS.
**Recommendation:** Convert these two `<img>` tags to `next/image` (or at minimum add explicit `width`/`height` attributes matching the source PNGs) so layout space is reserved before load.

### 2. Five third-party badge images loaded from five separate external domains, on every page — Low/Medium
**Evidence:** `easydofollow.dev`, `huzzler.so`, `easylaunch.dev`, `lemonlaunch.dev`, `verifieddr.com` badge `<img>` tags appear identically on home, /approach, /portfolio, /blog/..., and /stories/borderless. Each does have explicit `width`/`height` (so no CLS risk), but each is a distinct external origin requiring its own DNS lookup + TLS handshake, adding to total request count and connection overhead on every single page load, for content with no relevance to a B2B M&A advisory audience.
**Recommendation:** Self-host these badge images (or lazy-load/defer them, e.g. `loading="lazy"`) since they are typically footer trust badges unrelated to primary content; this reduces external connection fan-out. Given they don't appear to serve the target audience (M&A/PE buyers), consider removing them entirely.

### 3. HTML responses use `Cache-Control: public, max-age=0, must-revalidate` — Low
**Evidence:** All 5 pages returned `Cache-Control: public, max-age=0, must-revalidate` with `X-Vercel-Cache: HIT`, `X-Nextjs-Prerender: 1`, and `X-Nextjs-Stale-Time: 300`. This is Next.js's standard ISR output: the edge (Vercel) is caching and revalidating in the background every 300s (confirmed by `Age: 125` / `Age: 39` / `Age: 22` headers showing warm edge cache), so real-world edge performance is already good — the low TTFBs above are a direct result of this. However, `max-age=0` means the *browser* cache is told to revalidate on every navigation (no client-side HTML caching), so repeat visits/back-forward navigation always issue a fresh conditional request rather than serving instantly from the browser's disk cache.
**Recommendation:** This is not a critical problem given the sub-110ms TTFBs measured, but for a largely-static marketing site, consider explicit `s-maxage`/`stale-while-revalidate` tuning (e.g., via `revalidate` config or `Cache-Control` overrides in `next.config`) if perceived back/forward navigation speed becomes a priority. Low impact at current TTFB levels — deprioritize behind #1 and #2.

### 4. No CrUX/PSI field or full lab Lighthouse data obtained — Informational
**Evidence:** `pagespeed_check.py https://www.kautilya-pe.com --json` returned `"PSI rate limit exceeded (240 QPM / 25,000 QPD). Wait and retry."` on two attempts (15s apart), for both mobile and desktop strategies, with `"crux": null`. No Google API credentials are configured in this environment.
**Recommendation:** Re-run `pagespeed_check.py` (or the PSI web UI / CrUX Vis at https://cruxvis.withgoogle.com) once API access is available, to get real 75th-percentile field INP/LCP/CLS and confirm the lab signals above hold under real user conditions (mobile CPU throttling in particular, since curl timing does not measure JS execution or rendering cost).

## Performance Score (lab estimate): 85/100

Justification: TTFB, compression, static-asset caching, font-loading, and server-rendered content are all near-optimal — these are the metrics most directly tied to LCP and are strongly in the "good" range. The score is held back from higher purely by the portfolio-page CLS risk (#1) and third-party badge sprawl (#2), and by the total absence of field/CrUX data and full Lighthouse main-thread/INP diagnostics, which prevents a confident INP assessment (curl timing cannot measure JavaScript execution cost or interaction responsiveness).
