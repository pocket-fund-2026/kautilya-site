# Visual / UX Audit — kautilya-pe.com (Homepage + /approach + /portfolio)

**Date:** 2026-08-18
**Method:** Actual browser screenshots captured via Playwright/Chromium (headless), not HTML-only inference. The bundled `capture_screenshot.py` script timed out (its default `networkidle` wait strategy never resolves on this site, likely due to persistent connections/analytics or the WebGL canvas background), so a custom Playwright script was used directly with `domcontentloaded` + explicit wait, including a scroll-simulation pass to rule out scroll-triggered animation artifacts.

Screenshots saved to `/root/kautilya-site/seo/audits/2026-08-18-kautilya-pe-com/screenshots/`:
- `homepage-desktop-fold.png` — 1440x900 above-the-fold
- `homepage-mobile-fold.png` — 390x844 above-the-fold
- `homepage-desktop.png` (1440x22475 full page), `homepage-mobile.png` (780x19414 full page)
- `homepage-desktop-afterscroll.png` — full page after simulated incremental scroll (control test)
- `approach-desktop.png`, `portfolio-desktop.png` — 1440-wide full page

## What Works

- **Strong, confident hero copy**: "You bring the thesis. We build the universe." is a distinctive, on-brand headline for a buy-side M&A boutique — clear differentiation from generic advisory copy, reinforced immediately by "We don't carry a pipeline. We build yours."
- **Clean typographic hierarchy above the fold**: eyebrow label ("BUY SIDE ADVISORY") → large serif H1 → supporting paragraph → scroll cue ("ENTER"). Good use of whitespace and a restrained dark navy/gold palette that reads as premium/institutional, appropriate for the M&A audience.
- **Desktop nav is clear**: logo left, 5 text links (Approach, Portfolio, Stories, Blog, Team) centered/right, and a visually distinct "ENGAGE" button (bordered, gold text) as the primary CTA — good contrast against the dark header.
- **Mobile hero content reflows correctly**: headline, subhead, and scroll cue all remain legible and appropriately sized at 390px width; no obvious text overflow or horizontal scroll in the captured region.
- Lower sections of the homepage (visible in the final ~3,000px of the full-page capture) show a reasonably organized layout: "Our Approach to Deal Sourcing" heading, an "Explore Kautilya" card grid (Advisory Portfolio / Our Advisory Team / Stories & Market Intelligence / Blog), and a footer with sitemap-style link columns — standard, scannable IA once reached.

## Findings

### 1. Massive dead scroll zone between hero and main content (likely broken/stuck WebGL asset)
**Severity:** Critical
**Description:** The homepage full-page screenshot is 22,475px tall on desktop (19,414px on mobile), but the hero content ends at ~900px and the next visible content section ("Our Approach to Deal Sourcing") doesn't appear until roughly 18,500–19,000px down. That leaves **~17,500px (desktop) of almost entirely blank, near-black canvas** — roughly 19–20 full viewport-heights of empty scrolling — between the hero and the rest of the page. Inspecting this region closely reveals faint scattered star-like dots and the literal text **"LOADING SKY..."** frozen in place, confirming this is a WebGL/canvas star-field/"universe" visual (thematically tied to the "We build the universe" headline) that never finishes loading or rendering. This was verified twice: once on initial load (2.5s settle) and again after simulating a full incremental scroll through the page (to rule out IntersectionObserver/scroll-trigger animation artifacts) — the blank region and the "LOADING SKY..." string persisted identically both times, indicating a genuinely stuck asset rather than a screenshot-capture quirk.
**Recommendation:** Investigate the canvas/WebGL starfield component (likely Three.js or similar) for a loading failure — check for a missing/slow texture or model asset, an unhandled promise rejection, or a dependency on a feature unavailable in some environments. At minimum: (a) add a hard timeout/fallback so "LOADING SKY..." never persists indefinitely and degrades to a static gradient/image background, (b) drastically reduce the vertical space allocated to this section regardless of asset state — no marketing page should require ~19 screens of scrolling to reach core content, (c) test this specifically in real Chrome/Safari (not just the dev's local machine) since headless-Chromium reproduction suggests it may also fail for real users on certain networks/GPUs/browsers.

### 2. Primary CTA ("ENGAGE") is hidden behind a hamburger menu on mobile
**Severity:** High
**Description:** On mobile (390x844), the header only shows the "KAUTILYA" wordmark and a hamburger icon — the "ENGAGE" CTA that is prominently visible in the desktop nav is not visible at all above the fold on mobile until the user opens the menu. Given this is a B2B lead-generation site where "ENGAGE" is presumably the primary conversion action, hiding it by default on mobile (where an increasing share of first-touch traffic originates) suppresses conversion opportunity.
**Recommendation:** Keep a persistent, always-visible CTA button in the mobile header (e.g., a compact "ENGAGE" button next to the hamburger icon) rather than nesting it only inside the expanded menu.

### 3. Extreme page height inflates load/scroll cost and likely harms engagement metrics
**Severity:** Medium
**Description:** Independent of the stuck-loading bug in Finding #1, a 19,000–22,000px homepage is unusually long even by scrollytelling standards. Even if the star-field animation is fixed, this results in a very long, low-density scroll journey before users reach substantive content (approach, portfolio, team, blog), which risks high bounce/early exit, especially for time-pressed B2B/PE decision-makers scanning for credibility signals.
**Recommendation:** Once the canvas issue is resolved, reassess whether the "universe" scroll section needs to be this tall; consider compressing it substantially or adding intermediate content/proof points (logos, stats, testimonials) within that scroll range so users are rewarded for continuing to scroll rather than encountering emptiness.

### 4. No visible secondary/lower CTA reinforcement during the long scroll
**Severity:** Medium
**Description:** Given the ~17,500px gap identified in Finding #1, and even setting that defect aside, there does not appear to be any repeated CTA (e.g., a sticky "ENGAGE" button, or an inline CTA card) reintroduced as the user scrolls through the long page — the only CTA touchpoints observed are the header button and whatever exists in the footer/final sections.
**Recommendation:** Add a sticky/persistent CTA (header-anchored or a floating button) so conversion opportunity isn't solely dependent on a user scrolling all the way back up or reaching the footer.

### 5. Above-the-fold "ENTER" scroll cue may be mistaken for a CTA
**Severity:** Low
**Description:** The hero includes a small "ENTER" label with a vertical line beneath it, styled similarly enough to a link/button that users may expect it to be clickable/navigational, when it appears to be a passive scroll-affordance indicator (and, per Finding #1, currently invites users into a mostly broken/empty scroll experience).
**Recommendation:** Either make "ENTER" a genuine anchor-scroll-to-content control that jumps past the broken canvas section, or restyle it so it reads unambiguously as a passive scroll hint rather than an interactive element.

### 6. Rendering method could not fully rule out FOUC/font-swap layout shift
**Severity:** Low
**Description:** Screenshots were captured after a fixed settle delay (2–2.5s) rather than via Lighthouse/CrUX-style CLS measurement, so flash-of-unstyled-content or webfont-swap layout shift on first paint could not be directly quantified from this pass. The captured serif/italic display font (used for "universe" and headings) is a custom font load that, if not preloaded with `font-display: optional/swap` and matching fallback metrics, is a common source of layout shift on Next.js sites.
**Recommendation:** Run a Lighthouse/PageSpeed Insights pass (or the SEO agent's performance tooling) specifically for CLS and font-loading strategy to confirm/rule this out with real metrics.

## Visual/UX Score: 58/100

**Rationale:** Above-the-fold design quality, typography, and copywriting are genuinely strong (would score 80+ in isolation), and the desktop nav/CTA pattern is solid. However, the Critical finding — a stuck-loading WebGL asset producing ~17,500px of dead, content-free scroll space directly beneath the hero — is a severe, user-facing defect that would cause most visitors to believe the page is broken or has ended, long before they ever reach the "Our Approach," portfolio, or team content that establishes credibility for a B2B advisory firm. Combined with the mobile CTA-visibility gap, this pulls the overall score down substantially despite good foundational design.
