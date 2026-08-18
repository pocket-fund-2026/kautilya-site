# SEO Action Plan — kautilya-pe.com

Derived from the full audit dated 2026-08-18. See `FULL-AUDIT-REPORT.md` for full context and `findings/*.md` for evidence per item. Grouped Critical > High > Medium > Low, each with a rough effort/timeframe estimate.

---

## Critical (fix immediately — this week)

1. ~~**Fix the stuck "Loading Sky..." homepage bug.**~~ **FIXED 2026-08-18.** `components/ThreeScene.tsx`'s starfield canvas never finishes loading in the audited session, leaving ~17,500px of dead scroll space between the hero and the rest of the homepage. Investigate the GLTF model loading path for a hung promise/missing asset; add a hard timeout that falls back to a static gradient/image; drastically reduce the vertical space allocated to this section regardless of load state; test in real Chrome/Safari, not just headless Chromium.
   - **Effort:** Medium (1–3 days: root-cause the loading hang, add fallback, retest across browsers)
   - **Source:** `findings/visual.md` Finding #1
   - **Resolution:** Root cause was `isReady` requiring both all 3 GLTF models *and* the (86MB) background video to fire ready events, with no timeout — if either stalled, the "Loading Sky..." overlay stayed opaque forever over an otherwise-empty canvas. Added a 4s hard-timeout fallback in `components/ThreeScene.tsx` that forces the overlay to fade regardless of asset load state. Verified via Playwright: overlay now reaches `opacity: 0` reliably. The underlying image/video weight problem (item #2 below) is still open and is the more durable fix for *why* loads were slow in the first place.

2. **Fix the site's image weight problem.** Migrate all `<img>` usages to Next.js `next/image` (auto WebP/AVIF, responsive `srcset`, enforced dimensions), and re-export/recompress the 16 sitemap images currently over 1MB (ten Stories PNGs are 7–9.2MB) to ≤150–250KB targets. This alone would likely cut total image payload (~94MB across 54 sitemap images) by 90%+.
   - **Effort:** Medium–High (2–4 days: source re-export/compression pass + `next/image` migration across templates)
   - **Source:** `findings/images.md` Findings #1–3, `findings/performance.md` Finding #1

3. **Remove deprecated `HowTo` JSON-LD.** Delete the `howToSchema` block from `app/approach/page.tsx` (lines ~132–189) and the `howToLd` block from `app/stories/[slug]/page.tsx` (lines ~154–164). Google stopped supporting HowTo rich results in September 2023; this is pure Search Console pollution with no offsetting benefit. Leave the visible step-by-step HTML content in place — only remove the JSON-LD wrapper.
   - **Effort:** Low (<1 hour)
   - **Source:** `findings/schema.md` Finding #1

---

## High (fix within 1 week)

4. **NOT FIXED — needs a human decision, see note.** Fix the apex domain redirect to permanent (301/308). In Vercel's Domains settings, set `kautilya-pe.com → www.kautilya-pe.com` to a permanent redirect rather than relying on the default 307 behavior. If Vercel's UI doesn't expose this, add an explicit `vercel.json` redirect or handle it in `next.config.ts`/middleware.
   - **Effort:** Low (<1 hour, platform config change)
   - **Source:** `findings/technical.md` Finding #1
   - **Note (2026-08-18):** This redirect happens at the Vercel platform/domain layer, before any request reaches the Next.js app — it isn't in this repo's code, and the CLI session used to fix the other items doesn't have access to the `kautilya-pe.com` domain under this Vercel scope. Needs someone with dashboard access to the domain's project settings to flip it to permanent.

5. ~~**Remove `news-sitemap.xml`.**~~ **FIXED 2026-08-18.** Deleted `app/news-sitemap.xml/route.ts` and its `robots.txt` reference. The 16 `/stories/*` URLs it lists (several with stale 2024 `publication_date`s) are already fully covered by `sitemap.xml` — no discoverability is lost, and this stops likely persistent "invalid publication date" errors in Search Console.
   - **Effort:** Low (<1 hour)
   - **Source:** `findings/sitemap.md` Finding #1, confirmed independently in `findings/geo.md` Finding #5
   - **Resolution:** Route and `robots.txt` `Sitemap:` line removed; verified `/news-sitemap.xml` now 404s and the site still builds and serves cleanly.

6. ~~**Add explicit `width`/`height` to portfolio-logo `<img>` tags**~~ **FIXED 2026-08-18.** Closes a concrete CLS risk on `/portfolio`.
   - **Effort:** Low (<1 hour if done standalone; folded into #2 if done together)
   - **Source:** `findings/onpage.md` Finding #3, `findings/performance.md` Finding #1, `findings/images.md` Finding #4
   - **Resolution:** Added `width`/`height` attributes (376×376 for Inspire3, 400×400 for Runify — the two deals with a `logo` field) sourced from the actual PNG dimensions, via new `logoWidth`/`logoHeight` fields on the `Deal` type in `app/portfolio/PortfolioContent.tsx`. Migration to `next/image` (item #2, full image-weight pass) is still open.

7. ~~**Fix the mobile CTA visibility gap.**~~ **FIXED 2026-08-18.** Add a persistent, always-visible "ENGAGE" button in the mobile header (next to the hamburger icon) rather than nesting the primary conversion action only inside the expanded menu.
   - **Effort:** Low–Medium (1 day: component + responsive header work)
   - **Source:** `findings/visual.md` Finding #2
   - **Resolution:** Added a compact `.cta-btn-compact` "Engage" link in `components/Header.tsx`, positioned between the logo and hamburger, shown only at the ≤768px breakpoint (`app/globals.css`) so it doesn't duplicate the full-size desktop CTA. Verified visually via Playwright at 390×844.

8. **Ship a standalone "Buy-Side Due Diligence" service page.** The SERP for this core, high-intent Kautilya service is dominated exclusively by standalone service/landing pages (PwC, Plante Moran, Dealroom, Auxo Capital). Kautilya's DD content (8-workstream process, $6,500 pricing, 99.83% match rate, <15-day turnaround) is strong but currently scattered across `/faq` and `/approach` with no dedicated URL to rank. Build using existing proven content assets.
   - **Effort:** Medium (2–3 days: page build using existing content, Service schema, internal linking)
   - **Source:** `findings/sxo.md` Finding #1

9. **Build two missing content pillars: "Off-Market Deal Sourcing in India" and "Buy-Side Due Diligence Checklist."** Both are heavily targeted in the site's own keyword metadata with zero dedicated long-form content today — the highest-ROI content gaps identified, since demand is already proven by how much metadata effort targets them.
   - **Effort:** Medium–High (3–5 days: research + writing + FAQ schema + internal linking per pillar)
   - **Source:** `findings/cluster.md` Finding #2

10. **Fix the confirmed content cannibalization** between `/blog/what-is-a-search-fund` and `/stories/search-funds`. Keep the blog post as the canonical FAQ-schema definitional page; rewrite the story's opening to read unambiguously as first-person narrative/history, with a "For the full definition, see..." callout pointing to the blog post.
    - **Effort:** Low (half a day: copy edit + callout)
    - **Source:** `findings/cluster.md` Finding #1

11. **Pursue genuine off-site authority signals** (YouTube video output tied to existing deal-teardown content, Reddit participation in relevant subreddits, eventual Wikipedia notability once warranted). This is the single highest-leverage GEO gap — on-page/schema work is already near ceiling.
    - **Effort:** High (ongoing, multi-week/month effort — not a one-time fix)
    - **Source:** `findings/geo.md` Finding #1

---

## Medium (fix within 1 month)

12. **Fix `llms.txt` FAQ count** (23 → 26) and **extend `llms-full.txt` to cover Stories full text** (or add a separate `/llms-stories.txt`). Both gaps persisted unchanged across an 11-day re-check window.
    - **Effort:** Low for the count fix (<1 hour); Medium for the Stories extension (1–2 days)
    - **Source:** `findings/schema.md` Finding #3, `findings/geo.md` Findings #3–4

13. **Give the canonical `Organization` a stable `@id`** and reference it from `WebSite.publisher` and `ProfessionalService`; reconcile the two drifting `hasOfferCatalog` price blocks on the homepage so they agree.
    - **Effort:** Low–Medium (few hours)
    - **Source:** `findings/schema.md` Finding #4

14. **Add a CSP header** to `next.config.ts` `headers()`, scoped to already-known third-party origins (Google Tag Manager, the five badge domains, Unsplash).
    - **Effort:** Low–Medium (few hours, needs testing to avoid breaking embeds)
    - **Source:** `findings/technical.md` Finding #2

15. **Add IndexNow protocol support** (key file + submission call on publish for `/blog/[slug]`, `/newsletter/[slug]`, `/stories/[slug]`) to speed up Bing/Yandex discovery of new content.
    - **Effort:** Medium (1 day)
    - **Source:** `findings/technical.md` Finding #3

16. **Trim the 9 meta descriptions exceeding ~155–160 characters** to avoid SERP truncation (worst offender: the Torrent-JB Chemicals newsletter post at 255 characters).
    - **Effort:** Low (few hours across all pages)
    - **Source:** `findings/onpage.md` Finding #1

17. **Add heading structure (H2s) to `/portfolio` and `/newsletter`**, which currently have zero subheadings despite listing multiple distinct case studies/issues.
    - **Effort:** Low–Medium (half a day)
    - **Source:** `findings/onpage.md` Finding #2

18. **Add visuals/tables to stats-heavy Stories pages** (starting with `/stories/inspire3`), matching the pattern the newsletter already uses successfully. At minimum one summary-stats visual per case study.
    - **Effort:** Medium (1–2 days for a first batch)
    - **Source:** `findings/geo.md` Finding #2, `findings/content.md` Finding #6

19. **PARTIALLY ADDRESSED — byline diversification needs a human decision, see note.** Add visible author bio/credentials blocks to blog/newsletter/story posts, and diversify bylines across the 6 other named specialists on `/team` where topically appropriate (e.g., Tech Head or AI Consultant on SaaS/AI-tool acquisition stories).
    - **Effort:** Medium (1–2 days: component + content assignment)
    - **Source:** `findings/content.md` Findings #1–2
    - **Note (2026-08-18):** Every post in `lib/blogs.ts`, `lib/newsletters.ts`, and `lib/stories.ts` is hardcoded `author: 'Dev Shah'`. Reassigning any of these to another team member without knowing who actually wrote/contributed to that specific piece would be publishing false authorship for a financial advisory firm — not something to guess at. Needs Kautilya to confirm real authorship per post before bylines change. Author bio/credentials blocks (the other half of this item) are still open and don't have this constraint.

20. ~~**Add a visible phone number and physical/registered office address**~~ **PARTIALLY FIXED 2026-08-18.** to `/team`, `/engage`, and the site footer — currently only an email address is visible in body copy.
    - **Effort:** Low (few hours, pending business decision on what to publish)
    - **Source:** `findings/content.md` Finding #3
    - **Resolution:** Added a visible `contact@kautilya-pe.com` mailto link and "Mumbai, Maharashtra, India" line to the site footer (`components/Footer.tsx`) — city-level, matching the `PostalAddress` already present in JSON-LD on the homepage/careers pages, so nothing new was fabricated. Also removed an empty-string `servicePhone: ''` from `/approach`'s Service schema (an empty value is worse than omitting the field). **Still open:** no real phone number or street-level address exists anywhere in the codebase to surface — publishing one requires Kautilya to supply an actual number/address, not an invented one.

21. **Repair the internal link graph**: connect `/newsletter` posts to relevant blog pillars/`/approach` sections (currently a total linking island), and give the 9 dead-end Stories posts at least one contextual outbound link into the nearest topic cluster or `/engage`/`/portfolio`.
    - **Effort:** Medium (1–2 days across all affected posts)
    - **Source:** `findings/cluster.md` Findings #3–4

22. **Expand the homepage body copy** with 2–3 more substantive paragraphs surfacing the track-record stats (99.83%/30,134/$1.8M) on-page rather than only in `llms.txt`, and expand the trust bar (track record, team size, client types) to match what competing SERPs for "buy-side M&A advisory India" reward.
    - **Effort:** Low–Medium (half a day)
    - **Source:** `findings/content.md` Finding #4, `findings/sxo.md` Finding #2

23. **Self-host or remove the five third-party directory badges** (EasyDoFollow, Huzzler, EasyLaunch, LemonLaunch, Verified DR) appearing on high-traffic pages — low relevance to the M&A/PE audience, adds external connection overhead.
    - **Effort:** Low (few hours)
    - **Source:** `findings/onpage.md` Finding #4, `findings/images.md` Finding #5, `findings/performance.md` Finding #2

24. **Change Stories pages from `NewsArticle` to `Article`/`BlogPosting`** schema type (keep `NewsArticle` on Newsletter posts, which do track live deal news).
    - **Effort:** Low (<1 hour)
    - **Source:** `findings/schema.md` Finding #5

25. **Consolidate the image-sitemap data source** — `image-sitemap.xml`'s hand-maintained `IMAGE_MAP` has drifted from `sitemap.ts`'s `STORY_IMAGES` (missing at least one story slug). Generate from a single source or drop the separate image sitemap.
    - **Effort:** Low (few hours)
    - **Source:** `findings/sitemap.md` Finding #4

---

## Low (backlog)

26. **Derive `lastmod` for aggregator pages** (`/`, `/stories`, `/blog`, `/newsletter`) from the underlying content's actual `datePublished` values instead of a hardcoded deploy-date string.
    - **Effort:** Low (few hours)
    - **Source:** `findings/sitemap.md` Finding #2

27. **Remove `priority`/`changefreq` tags from `sitemap.xml`** — confirmed ignored by Google, negligible weight from Bing.
    - **Effort:** Low (<1 hour)
    - **Source:** `findings/sitemap.md` Finding #3

28. **Fix the homepage canonical's missing trailing slash** to exactly match the served URL.
    - **Effort:** Low (<1 hour)
    - **Source:** `findings/technical.md` Finding #5

29. **Remove the empty `servicePhone: ''` property** from `/approach`'s schema (or populate with a real number).
    - **Effort:** Low (<1 hour)
    - **Source:** `findings/schema.md` Finding #6

30. **Add expanded (134–167 word) answer variants alongside short FAQ answers** to better serve Perplexity-style synthesis engines without sacrificing the short-answer format that already works for Google AIO/voice.
    - **Effort:** Low–Medium (1 day)
    - **Source:** `findings/geo.md` Finding #6

31. **Restyle or fix the "ENTER" scroll-cue** on the homepage hero so it either genuinely jumps past the (once-fixed) canvas section or reads unambiguously as a passive scroll hint rather than a clickable element.
    - **Effort:** Low (few hours)
    - **Source:** `findings/visual.md` Finding #5

32. **Add a sticky/persistent CTA** during the long homepage scroll once the dead-space bug (#1) is fixed, so conversion isn't dependent on reaching the footer.
    - **Effort:** Low–Medium (half a day)
    - **Source:** `findings/visual.md` Finding #4

33. **Reclassify legacy "Pocket Fund" personal-journal Stories** (edition-zero, review, college-startups, pocket-fund, 200k-deals) as a distinct "Origin Story" sub-section linked from `/team`, separate from commercial case-study spokes, to sharpen entity clarity for both readers and AI systems.
    - **Effort:** Low–Medium (half a day, mostly IA/linking work, no content deletion needed)
    - **Source:** `findings/cluster.md` Finding #5

34. **Add a lightweight `RelatedContent` component** driven by a cluster tag on each post's metadata, so future posts are auto-linked into their cluster instead of relying on hand-edited per-post links.
    - **Effort:** Medium (1–2 days)
    - **Source:** `findings/cluster.md` Finding #8

35. **Verify Lighthouse/PageSpeed Insights CLS and font-loading metrics directly** once Google API access is available, to confirm the lab-based Performance score holds under real field conditions (mobile CPU throttling in particular).
    - **Effort:** Low (re-run once access available)
    - **Source:** `findings/performance.md` Finding #4, `findings/visual.md` Finding #6

---

## Suggested Sequencing (4-phase roadmap)

| Phase | Timeframe | Focus |
|---|---|---|
| **Phase 1: Critical Fixes** | Week 1 | Items #1–3 (homepage bug, image weight, deprecated schema) |
| **Phase 2: High-Impact Improvements** | Weeks 2–3 | Items #4–11 (redirect fix, news-sitemap removal, CLS fixes, mobile CTA, DD service page, pillar content, cannibalization fix, off-site authority kickoff) |
| **Phase 3: Content & Authority** | Month 2 | Items #12–25 (schema entity cleanup, CSP/IndexNow, on-page polish, author/trust signals, internal linking repair, homepage expansion) |
| **Phase 4: Monitoring & Iteration** | Ongoing | Items #26–35 (sitemap hygiene, FAQ expansion, IA polish, re-verify performance against real CrUX/PSI data once available) |
