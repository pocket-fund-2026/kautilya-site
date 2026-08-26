# Technical SEO Findings — kautilya-pe.com (2026-08-26)

**Overall Technical Score: 82/100**

Next.js (App Router), statically prerendered, served via Vercel edge cache (`X-Nextjs-Prerender: 1`, `X-Vercel-Cache: HIT`). Most fundamentals are solid; issues found are refinements rather than fundamental brokenness.

## 1. Crawlability — PASS (minor issue)
- `robots.txt` (served correctly only from `www.kautilya-pe.com/robots.txt`, 200, `text/plain`) explicitly allows Googlebot, Bingbot, GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, anthropic-ai, PerplexityBot, CCBot, Applebot, FacebookBot, cohere-ai, YouBot. `Disallow: /api/` only.
- **Medium** — `https://kautilya-pe.com/robots.txt` (bare apex, no `www`) returns **HTTP 307** to `https://www.kautilya-pe.com/robots.txt` instead of serving the file directly. Bots that don't follow redirects before checking robots rules won't see the real rules.
- Sitemap declared in robots.txt; `sitemap.xml` and `image-sitemap.xml` both return 200 with valid `urlset` structure, ~30 URLs, each with `lastmod`/`changefreq`/`priority` and image entries.

## 2. Indexability — PASS
- No `noindex`; `<meta name="robots" content="index, follow"/>` on homepage.
- Canonical tags present and correct (self-referencing, correct host) on homepage and spot-checked blog post.
- Non-existent URL returns a clean 404.

## 3. Critical — Apex/www redirect uses HTTP 307 instead of 301/308
`curl -I https://kautilya-pe.com/` → `HTTP/2 307` → `Location: https://www.kautilya-pe.com/`. Applies to every URL on the apex domain. 307 is a temporary redirect — wrong signal for a permanent canonical-host consolidation; historical backlinks to the bare domain aren't receiving a clean permanent-redirect signal.
- **Fix**: change the apex→www redirect (Vercel domain redirect or `next.config.js`) to 301 or 308.

## 4. Security — PASS, strong
- HTTPS enforced, HSTS `max-age=63072000; includeSubDomains; preload`.
- `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` restricting camera/mic/geolocation/payment/usb.
- **Low** — No `Content-Security-Policy` header. Footer embeds third-party badge scripts from `easydofollow.dev`, `easylaunch.dev`, `lemonlaunch.dev`, `huzzler.so`, `verifieddr.com` — worth a CSP allowlist.
- `X-Xss-Protection: 1; mode=block` is legacy/deprecated — harmless, no value.

## 5. URL Structure — PASS
Clean, human-readable paths throughout, no query-string cruft, no trailing-slash inconsistency. Only issue is the redirect method (#3).

## 6. Mobile-Friendliness — PASS (one flag)
- Correct responsive viewport, doesn't block pinch-zoom.
- **Medium** — Homepage `<h1>` uses a hardcoded inline style `font-size:64px;max-width:800px;margin:0 auto 24px`. Inline styles bypass responsive CSS overrides unless specifically targeted; at 64px this could overflow on narrow viewports. Verify a media query overrides it below ~480-768px — the rest of the page correctly uses CSS classes (`section-title`, `card-title`), so this looks like a one-off edit that skipped the responsive system.

## 7. Core Web Vitals (source-inspection signals) — MODERATE RISK
- **Medium (LCP risk)** — 4 custom web fonts (Fraunces + Lora, woff2) preloaded on the homepage. Could not confirm `font-display: swap` from static HTML — verify the compiled CSS / `next/font` config uses `display: 'swap'`, otherwise expect FOIT/CLS from late font swaps.
- **Low (CLS risk)** — 6 `<img>` tags on homepage all have `alt` attributes, but static inspection can't confirm explicit `width`/`height` or `next/image` sizing everywhere — verify with Lighthouse/PSI.
- **INP** — cannot be measured from static source; no obvious heavy synchronous JS blockers in the head. Recommend PSI/CrUX field data.
- TTFB is fast (~100ms homepage, ~220ms blog post, both cached via Vercel) — genuine LCP positive.

## 8. Structured Data — PASS, strong (see `schema.md` for correctness issues)
Homepage: 3 valid JSON-LD blocks (~6.3KB) — `Organization`, `Person`, `ProfessionalService`, `WebSite`+`SearchAction`, `OfferCatalog`/`Offer`, `ContactPoint`. Blog post: `BlogPosting`/`NewsArticle`, `Blog`, `FAQPage`, `BreadcrumbList`, `Person`, `Organization`. No parse errors. Above-average coverage for a site this size — but see schema findings for duplication/conflict issues.

## 9. JavaScript Rendering — PASS
`is_spa: false` — raw fetch returns full body content; site is server-rendered/prerendered, not a CSR shell.

## 10. IndexNow Protocol — NOT CHECKED / LIKELY MISSING
No IndexNow key file or reference found. Low-Medium priority — would speed re-indexing of the frequently-updated `/newsletter` and `/blog` sections (new posts as recently as 2026-08-21 per sitemap `lastmod`).

---

## Prioritized Recommendations

**Critical**
1. Change apex-domain redirect from 307 to 301/308 — affects every URL on the bare domain, including robots.txt.

**Medium**
2. Audit the homepage `<h1 style="font-size:64px;...">` inline style for real mobile responsiveness.
3. Confirm `font-display: swap`/`optional` on the 4 preloaded custom fonts.
4. Add IndexNow key + ping integration.

**Low**
5. Add a Content-Security-Policy header.
6. Retire the legacy `X-Xss-Protection` header.

## Verified positives
Unusually current/thorough AI-crawler-aware robots.txt; full valid sitemap.xml + image-sitemap.xml; self-referencing canonicals; comprehensive JSON-LD; HSTS with preload; true server-rendered content — all above the norm for a site this size.
