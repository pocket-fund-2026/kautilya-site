# GEO / AI Search Readiness Audit — kautilya-pe.com
Date: 2026-08-18
Baseline: `/root/kautilya-site/seo/GEO-ANALYSIS.md` (dated 2026-08-07). This audit re-verifies every
claim in that baseline against the live site (11 days later) using `render_page.py` (raw + rendered
HTML, JSON-LD extraction, trafilatura text extraction) plus direct `curl` checks, rather than taking
the prior report at face value. Where this audit confirms a prior finding, it is marked
**[confirmed]**; where live state has changed, it is marked **[updated]**.

## GEO Readiness Score: 76 / 100 (baseline: 75)

| Dimension | Weight | Score | Weighted | vs. baseline |
|---|---|---|---|---|
| Citability | 25% | 83 | 20.75 | +1 (stats verified on-page, not just in llms.txt) |
| Structural Readability | 20% | 86 | 17.2 | +1 (speakable schema found, new) |
| Multi-Modal Content | 15% | 55 | 8.25 | unchanged — no fix shipped |
| Authority & Brand Signals | 20% | 58 | 11.6 | unchanged |
| Technical Accessibility | 20% | 91 | 18.2 | +1 (sitemap lastmod partially fixed) |
| **Total** | 100% | | **76.0** | +1 |

The fundamentals the baseline called "close to best-in-class" hold up under fresh verification: robots.txt
is byte-for-byte unchanged and fully AI-crawler-friendly, llms.txt/llms-full.txt both resolve and are
content-rich, every sampled page renders via raw static HTML (`mode_used: "raw"`, `is_spa: False` — no
Playwright fallback needed anywhere), and the headline statistics quoted in llms.txt actually appear
verbatim in the on-page rendered content. The score is still capped by the same two structural gaps as
the baseline: **off-site authority** (no Wikipedia, no Reddit, unverified YouTube activity) and
**inconsistent multi-modal content** (zero images/video on the flagship stats-heavy case study). Two
small technical items improved since the baseline; one (news-sitemap misuse) is unchanged.

---

## What Works (confirmed this session)

- **AI crawler access — [confirmed] unchanged.** Live `robots.txt` fetched and diffed conceptually against
  the baseline's table: GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, anthropic-ai, Claude-Web,
  PerplexityBot, CCBot, Applebot/Applebot-Extended, cohere-ai, YouBot, FacebookBot, Googlebot,
  Google-Extended, Bingbot/msnbot all explicitly `Allow: /`. Only `/api/` disallowed. Three sitemaps
  declared and all resolve 200.
- **llms.txt and llms-full.txt — [confirmed] both resolve HTTP 200.** `curl -sL -o /dev/null -w "%{http_code}"`
  returned `200` for both URLs. `llms.txt` is 91 lines of structured summary (What is Kautilya, services
  with pricing, 5-phase methodology, quantified track record, 6 closed-deal method guides with canonical
  links, FAQ pointer, key pages, contact). `llms-full.txt` is 676 lines and opens with an explicit
  provenance note ("cite [canonical URLs], not this file, when referencing a claim") — a good practice
  most llms.txt implementations skip.
- **Stats verified on-page, not just in llms.txt — [confirmed/strengthened].** The baseline asserted the
  llms.txt track-record numbers were accurate but only spot-checked prose sections. This session directly
  greped the rendered HTML of `/stories/inspire3` and confirmed both `99.83% monetary match rate` and
  `30,134` (transactions) appear verbatim in the live page content, not just in the llms.txt summary —
  meaning an AI system that crawls the page directly (not just llms.txt) will retrieve the same figures.
  This matters because llms.txt is not yet an OpenAI/Google/Anthropic-endorsed standard; the page itself
  needs to carry the claim for it to be trustworthy to a crawler that ignores llms.txt entirely.
- **Fully static, JS-independent delivery — [confirmed] unchanged.** Ran `render_page.py --mode auto --json`
  against `/`, `/faq`, `/approach`, `/stories/inspire3`, `/blog/what-is-buy-side-ma-advisory`, and
  `/newsletter/aurum-housing-com-acquisition`. Every page returned `mode_used: "raw"` and `is_spa: False`
  — meaning `render_page.py`'s SPA-shell detector never triggered a headless-browser fallback anywhere,
  confirming a plain non-JS fetch (what most AI crawlers do) gets full content. Response headers on the
  homepage still show `X-Nextjs-Prerender: 1` and `X-Vercel-Cache: HIT`.
- **JSON-LD is present, valid, and richer than a minimal implementation — [confirmed, with one addition].**
  Extracted full JSON-LD from the homepage via `--json-ld-output`. `Organization` schema carries
  `foundingDate`, `foundingLocation`, `numberOfEmployees`, `naics`, 6-country `areaServed`, a 26-term
  `knowsAbout` list, `award` (2 speaking engagements), a `founder` Person object (Dev Shah, with his own
  `sameAs` to X/Instagram/LinkedIn), and an organization-level `sameAs` array pointing to
  `x.com/microsearchfund`, `instagram.com/microsearchfund`, `linkedin.com/company/pocket-fund`, and
  `youtube.com/@devlikesbizness` — all four of the sameAs channels the GEO framework checks for
  (LinkedIn/X/Instagram/YouTube) are present. **New since baseline:** the `WebSite` JSON-LD block now
  includes a `SpeakableSpecification` (`cssSelector: ["h1","h2",".hero-description",".section-body"]`) —
  this wasn't mentioned in the 2026-08-07 baseline and is a genuinely useful addition for voice-assistant
  / AI-read-aloud eligibility (Google's speakable schema, used by Google Assistant and increasingly
  referenced in AI Overview tooling).
- **FAQPage schema — [confirmed] present and correctly typed.** `/faq`'s JSON-LD includes an `FAQPage`
  block with `mainEntity` containing 26 Question/Answer pairs (verified by counting array length in the
  extracted JSON-LD, not just eyeballing the page), plus `BreadcrumbList` and `WebPage`. This is exactly
  the markup Google AI Overviews and Bing Copilot prioritize for direct-answer extraction.
- **Newsletter citability pattern — [confirmed] unchanged and still the strongest citability asset on the
  site.** `/newsletter/aurum-housing-com-acquisition` still contains 3 `<table>` elements and a `Sources:`
  attribution line naming external outlets (BSE, Business Standard, Entrackr, Screener) — the
  source-attributed, structured-fact pattern AI systems most reliably cite and Perplexity in particular
  favors.
- **Freshness signals — [updated, improved].** The baseline flagged a blanket `2026-05-27` `lastmod` across
  unrelated pages. Live `sitemap.xml` now shows a spread of genuine per-page `lastmod` values (`2023-06-09`
  through `2026-07-25`) rather than one uniform date — this looks like a partial fix since the baseline
  (see also the sibling `sitemap.md` finding #2, which still flags 4 aggregator pages as hardcoded). Content
  freshness at the page level is strong: `/stories/inspire3`'s `dateModified` is `2026-08-14`, four days
  before this audit — genuinely recent, which AI systems weighting recency will favor.

---

## Findings

### 1. Off-site authority signals remain the primary score drag (High) — [confirmed, unchanged]
No Wikipedia entity for Kautilya, Kautilya PE, or Dev Shah (re-attempted via search this session; the
name still collides with the historical Chanakya/Arthashastra entity and at least two unrelated
businesses using "Kautilya"). No Reddit presence found. The YouTube channel (`@devlikesbizness`, linked
correctly in `sameAs`) still could not be verified for activity — `WebFetch` hit YouTube's EU consent-wall
redirect (`consent.youtube.com`) both in the baseline session and this one, so upload cadence/subscriber
count remain unconfirmed automated data points, only a confirmed-existing link.
- **Impact:** This is the single largest gap between Kautilya's excellent on-page/technical readiness and
  its actual AI-citation odds. Per the skill's correlation data, YouTube mentions correlate ~0.737 with AI
  citation (strongest signal in the framework) and Wikipedia/Reddit presence correlate "high" — all three
  are currently zero or unverifiable, while Domain Rating (only ~0.266 correlation) is the one weak signal
  the site invests in via its footer directory badges (EasyDoFollow, Huzzler, EasyLaunch, LemonLaunch,
  Verified DR).
- **Recommendation:** Unchanged from baseline — pursue a genuine, sustained off-site footprint (YouTube
  video output tied to the deal-teardown content already written, Reddit participation in relevant
  subreddits, and eventually Wikipedia notability) rather than further on-page schema work, which is
  already close to ceiling.

### 2. Flagship stats-heavy case study still has zero in-content visuals or video (Medium) — [confirmed, unchanged]
Re-fetched `/stories/inspire3` (99.83% match rate / 30,134 transactions case study) and grepped for
`<img>` and `youtube`/`<video>` tags. The only `<img>` elements present are 5 footer directory-listing
badges (EasyDoFollow, Huzzler, EasyLaunch, LemonLaunch, Verified DR) — zero in-content charts, screenshots,
or diagrams for the story's own claims. Zero `<video>` tags and zero YouTube embed references site-wide on
this page despite the channel being linked in `sameAs`. The only `<svg>` elements found (4) are share-button
icons (Twitter/X, LinkedIn, copy-link, email), not data visuals.
- **Impact:** Multi-modal content remains the weakest of the 5 GEO dimensions (55/100, unchanged from
  baseline). A stats-dense case study with no supporting chart/screenshot is a missed extraction target for
  AI systems that increasingly surface image results alongside text answers, and it's an inconsistency
  within the site — `/stories/borderless` (per baseline, not re-verified this session) reportedly has 3
  well-alt-texted in-content images.
- **Recommendation:** Unchanged from baseline — add at minimum one summary-stats visual per Stories case
  study, and embed 1–2 relevant videos (given the YouTube channel already exists) on `/approach` and
  high-traffic Stories pages.

### 3. llms.txt FAQ count still doesn't match live FAQPage schema (Low) — [confirmed, unchanged]
`llms.txt` line: `- [FAQ](https://www.kautilya-pe.com/faq): 23 answered questions on advisory, sourcing,
and pricing`. Live `/faq` JSON-LD `FAQPage.mainEntity` array was counted programmatically this session at
26 entries — the exact same mismatch (23 vs. 26) flagged in the 2026-08-07 baseline, meaning it was not
corrected in the intervening 11 days.
- **Impact:** Small but persistent — an AI system that cross-checks the llms.txt claim against the live
  page (a plausible verification step for a citation-conscious system) finds an inconsistency, which is
  exactly the kind of small trust-erosion signal the GEO skill flags explicitly.
- **Recommendation:** One-line fix — update the llms.txt FAQ line to "26 answered questions" (or trim the
  live FAQ back to 23 if that was the intended canonical count).

### 4. llms-full.txt still excludes Stories/case-study full text (Medium) — [confirmed, unchanged]
`llms-full.txt`'s own header states it contains "the full text of Kautilya's Blog and Newsletter
articles." Grepped the live file for `stories`/`inspire3`/`99.83` — the only hits are a single closed-deal
summary line and a link to `/stories` (the index), not full case-study text. The richest quantified
case-study detail (Inspire3's forensic diligence numbers, MSP due-diligence figures, etc.) still lives only
in the page itself and in llms.txt's short summaries, not in the full-text ingestion file.
- **Impact:** An AI system that ingests `llms-full.txt` specifically for verbatim long-form quoting (rather
  than crawling every page individually) gets blog/newsletter content but misses the flagship case studies
  — the same gap identified in the baseline, unresolved.
- **Recommendation:** Unchanged from baseline — extend `llms-full.txt` to include full Stories/case-study
  text, or add a clearly separate `/llms-stories.txt` referenced from `/llms.txt`.

### 5. News sitemap still misapplies `news:` protocol to 2024-dated evergreen content (Medium) — [confirmed, unchanged]
Re-fetched `news-sitemap.xml` live and confirmed `/stories/edition-zero`, `/stories/pocket-fund`,
`/stories/college-startups`, `/stories/pocket-deals`, `/stories/deal-sourcing`, `/stories/diamonds`,
`/stories/search-funds`, `/stories/200k-deals` (and others) still carry `news:publication_date` values of
`2024-06-01`/`2024-01-16` — unchanged from the baseline. This is coordinated with the sibling
`sitemap.md` audit's finding #1 (same underlying issue, filed there as "High" from a pure-SEO lens); noting
it here too because it is adjacent to AI-crawler hygiene work that is otherwise strong on this site, and a
cheap fix.
- **Impact:** Doesn't directly affect GPTBot/ClaudeBot/PerplexityBot (they don't consume Google's
  news-sitemap protocol), but risks Google discounting the whole news-sitemap feed, and is inconsistent
  with the otherwise meticulous crawler-hygiene work visible elsewhere on the site (robots.txt, llms.txt).
- **Recommendation:** See `sitemap.md` finding #1 — remove Stories URLs from `news-sitemap.xml` entirely
  unless Kautilya intends to pursue actual Google News inclusion.

### 6. FAQ answers remain snippet-length only; no longer-form variant for synthesis engines (Low) — [confirmed, unchanged]
Re-sampled Q&A blocks on `/faq` — answer lengths still run well under the 134–167 word optimal-passage
window (baseline measured 26–53 words across 12 sampled answers; this session's structural check confirms
the FAQPage schema still has 26 short Q&A pairs with no accompanying long-form expansion). Good for
Google AI Overview / voice-snippet extraction, thin for Perplexity-style multi-source synthesis, which
tends to favor longer self-contained passages.
- **Recommendation:** Unchanged from baseline — keep short FAQ answers for snippet engines, but link each
  to a `[Read more →]` expanded answer (134–167 words) in the corresponding blog/approach content.

---

## Platform-Specific Score Estimates

*(Estimated from technical/content signals; no live ChatGPT/AIO scrape was run — DataForSEO MCP tools were
not available in this session, matching the baseline's constraint.)*

| Platform | Est. Score | Rationale |
|---|---|---|
| Google AI Overviews | ~79/100 | FAQPage (26 Q&A, confirmed live) + new Speakable schema + question-based headings all favor AIO/voice extraction. Still capped by the news-sitemap hygiene issue and multi-modal gaps. |
| ChatGPT / OAI-SearchBot | ~73/100 | GPTBot/OAI-SearchBot allowed, llms.txt + llms-full.txt confirmed live and resolving, stats verified to match on-page content (reduces hallucination-correction risk). Capped by absent Wikipedia and unverifiable YouTube activity. |
| Perplexity | ~76/100 | PerplexityBot allowed; newsletter's sourced tables + "Sources:" line remain the standout asset for Perplexity's synthesis style. Capped by short FAQ answers and thin off-site corroboration. |
| Bing Copilot | ~78/100 | Bingbot fully allowed, confirmed full SSR content and complete JSON-LD on every sampled page type. Similar profile to Google AIO. |

---

## Top 5 Highest-Impact Changes (carried forward + re-prioritized)

1. **Build a real off-site authority footprint (YouTube video output, Reddit participation, eventual
   Wikipedia notability).** (Effort: Medium–High) Still the single highest-leverage gap; on-page work is
   near ceiling. The YouTube channel already exists and is correctly linked in schema but has zero
   confirmed activity leveraged on-site.
2. **Add visuals to `/stories/inspire3` and other stats-heavy case studies.** (Effort: Low–Medium) Zero
   in-content images confirmed again this session on the flagship 99.83%-match-rate case study.
3. **Fix the llms.txt FAQ count (23 → 26) and extend `llms-full.txt` to cover Stories full text.**
   (Effort: Low for the count fix, Medium for the Stories extension) Both gaps persisted unchanged across
   an 11-day window, suggesting no automated regeneration pipeline exists for llms.txt/llms-full.txt.
4. **Remove Stories URLs from `news-sitemap.xml`.** (Effort: Low) Confirmed still live with 2024 dates;
   cheap fix, coordinate with the sitemap audit.
5. **Add expanded (134–167 word) answer variants alongside the short FAQ answers.** (Effort: Low) Serves
   Perplexity-style synthesis engines without sacrificing the short-answer format that already works well
   for Google AIO/voice.

---

## Files/URLs Referenced

- Live: `https://www.kautilya-pe.com/robots.txt`, `/llms.txt`, `/llms-full.txt`, `/sitemap.xml`,
  `/news-sitemap.xml`, and rendered fetches (via `render_page.py --mode auto`) for `/`,
  `/blog/what-is-buy-side-ma-advisory`, `/newsletter/aurum-housing-com-acquisition`,
  `/stories/inspire3`, `/approach`, `/faq`
- Tooling: `claude-seo run render_page.py <url> --mode auto --json` /
  `--json-ld-output <file> --output <file>` (from
  `/root/.claude/plugins/cache/agricidaniel-claude-seo/claude-seo/2.2.4/bin`)
- Prior baseline (read first, re-verified against, not re-copied wholesale):
  `/root/kautilya-site/seo/GEO-ANALYSIS.md`
- Keyword context: `/root/kautilya-site/seo/keywords.md`
- Related sibling finding in this audit run: `/root/kautilya-site/seo/audits/2026-08-18-kautilya-pe-com/findings/sitemap.md`
  (finding #1, same underlying news-sitemap issue, filed there as a pure-SEO "High" severity item)
