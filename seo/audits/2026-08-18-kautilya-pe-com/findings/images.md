# Images Findings — kautilya-pe.com

Analyzed all 54 images referenced in `/image-sitemap.xml` (fetched with `curl -sL -o /dev/null -w "%{size_download}"` against the live CDN) plus alt-text coverage across 16 sampled pages.

## What Works
- **100% alt-text coverage on sampled pages**: 0 of ~92 `<img>` tags across 16 pages sampled were missing an `alt` attribute or had an empty `alt=""`. Alt text is descriptive and often includes brand/context (e.g. `"Inspire3 – Due Diligence – Kautilya Portfolio"`, `"Aum Thakarkar"`).
- **`loading="lazy"` is used on below-the-fold avatar images** on `/team`.
- Logo/icon assets are SVG (scalable, small footprint): `/icon.svg` etc.
- Image filenames are generally descriptive/semantic (e.g. `exhausting-market.png`, `100k.png`) rather than generic `IMG_1234.png` — mild positive for image search.

## Findings

### 1. Story/blog images are massively oversized — up to 9.2MB per file, 94MB total across 54 sitemap images
**Severity: Critical**
Direct measurement of all 54 images listed in `image-sitemap.xml`:
- Total payload: **~94 MB across 54 images** (avg ~1.8 MB/image)
- **16 of 54 images (30%) exceed 1 MB**; several exceed 7–9 MB:
  - `/images/stories/borderless/exhausting-market.png` — 9.22 MB
  - `/images/stories/smart-prompt/discount.png` — 8.49 MB
  - `/images/stories/edition-zero/conviction.png` — 8.48 MB
  - `/images/stories/borderless/maket-no-deals.png` — 8.39 MB
  - `/images/stories/smart-prompt/kill.png` — 8.13 MB
  - `/images/stories/borderless/money-annualised.png` — 8.12 MB
  - `/images/stories/edition-zero/zero.png` — 8.08 MB
  - `/images/stories/deal-sourcing/discipline.png` — 7.68 MB
  - `/images/stories/college-startups/ten-jobs.png` — 7.55 MB
  - `/images/stories/smart-prompt/300.png` — 7.02 MB
  - `/images/aditya.jpeg` (team headshot) — 2.36 MB
  - `/images/stories/college-startups/best-time-build.png` — 3.30 MB

These are almost certainly full-resolution chart/screenshot exports saved as uncompressed PNG, served as-is with no downscaling, recompression, or modern format conversion. On mobile/3G-4G connections these single images can take many seconds to load, directly harming LCP for any `/stories/[slug]` page that displays them, and burning crawl budget / bandwidth for image search bots.
**Recommendation**: Re-export all chart/diagram images from source at a sane display resolution (typically ≤1600px wide for a blog body image), compress with a tool like `squoosh`/`sharp`, and convert to WebP or AVIF. Target <150–250 KB per content image. This alone would cut the site's total image payload by ~90%+.

### 2. No modern image format usage — 0% WebP/AVIF, no `next/image` optimization pipeline
**Severity: High**
Every image on the site is served as raw `.png`/`.jpg`/`.jpeg` (or `.svg` for icons) directly from `/images/...` static paths, with **zero requests through `/_next/image`** (checked on homepage — 0 occurrences of `_next/image` in rendered HTML). This confirms the Next.js app is using plain `<img>` tags rather than the built-in `next/image` component, which would otherwise auto-generate responsive `srcset`s, lazy-load by default, infer width/height (preventing CLS), and serve WebP/AVIF to supporting browsers via Vercel's Image Optimization API.
**Recommendation**: Migrate all content/avatar/portfolio-logo `<img>` usages to `next/image`. On Vercel this is a low-effort, high-impact change — it automatically serves right-sized, modern-format images per device without needing to manually re-export every asset (though the oversized source PNGs in Finding #1 should still be fixed at the source, since `next/image` re-encodes but doesn't fix absurd input dimensions/detail level).

### 3. No responsive `srcset` — same full-size image served to mobile and desktop
**Severity: High**
`srcset=` appears **0 times** across homepage, `/portfolio`, and `/stories` HTML (only `/team` shows any `srcset`-adjacent markup, and even there it's inconsistent). A mobile visitor on a 390px-wide viewport downloads the identical multi-megabyte asset as a 1440px desktop visitor. Combined with Finding #1, this is the single largest performance liability on the site.
**Recommendation**: Same fix as #2 — `next/image` (or manual `srcset`/`sizes` generation) solves this by default.

### 4. Missing `width`/`height` on portfolio-logo and badge images — CLS risk
**Severity: Medium**
Portfolio company logos (e.g. `/images/portfolio-logos/inspire3.png`, `runify.png`) render without explicit `width`/`height` attributes, meaning the browser cannot reserve layout space before the image downloads — a direct contributor to Cumulative Layout Shift, one of the three Core Web Vitals. Team avatar images and third-party badges do include `width`/`height`.
**Recommendation**: Add explicit dimensions to every `<img>` (or migrate to `next/image`, which requires and enforces this).

### 5. Third-party hotlinked badge images on homepage/portfolio
**Severity: Low**
Badges from easydofollow.dev, huzzler.so, easylaunch.dev, lemonlaunch.dev, verifieddr.com are loaded directly from external domains rather than self-hosted, adding extra DNS/TLS round-trips on key pages. (Same finding cross-referenced in On-Page audit.)
**Recommendation**: Self-host or remove if these directory badges provide negligible referral/SEO value.

### 6. Image sitemap alt/caption text is well-written but disconnected from actual served performance
**Severity: Info**
`image-sitemap.xml` includes good `<image:title>`/`<image:caption>` metadata (helps Google Images context), but this metadata quality is undermined if the images themselves are too heavy to be crawled/cached efficiently or to rank well in Image Search (Google factors page speed into Image Search ranking).

## Images Score: 38/100

Alt-text hygiene is excellent, but the site is carrying ~94 MB of avoidable image weight with zero modern-format or responsive-image optimization. This is the single most impactful, easiest-to-fix technical issue found in this audit — likely a top contributor to any LCP/page-weight problems on `/stories/*` pages specifically.
