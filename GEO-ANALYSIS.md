# GEO Analysis — Kautilya PE (kautilya-pe.com)

**Date:** 2026-08-07
**Scope:** Live site audit (https://www.kautilya-pe.com) — homepage, blog post, newsletter post, stories/case-study page, approach, FAQ, team, careers. Verified against local repo at `/root/kautilya-site`.
**Method:** Direct HTTP fetches of raw HTML (curl, no JS execution) to confirm server-rendered content, JSON-LD parsing, robots.txt/llms.txt/sitemap review, external search checks (DuckDuckGo/Bing) for brand-mention presence. No DataForSEO MCP tools were available in this session, so platform scores below are estimated from technical/content signals, not live SERP/ChatGPT scrapes.

---

## GEO Readiness Score: 75 / 100

| Dimension | Weight | Score | Weighted |
|---|---|---|---|
| Citability | 25% | 82 | 20.5 |
| Structural Readability | 20% | 85 | 17.0 |
| Multi-Modal Content | 15% | 55 | 8.25 |
| Authority & Brand Signals | 20% | 58 | 11.6 |
| Technical Accessibility | 20% | 90 | 18.0 |
| **Total** | 100% | | **75.35 ≈ 75** |

The site's engineering fundamentals (SSR, crawler access, structured data, llms.txt) are close to best-in-class for a company this size. The score is held back almost entirely by **off-site authority signals** (no Wikipedia, no Reddit, unverified YouTube activity, brand-name collision with the historical Chanakya/Kautilya and unrelated businesses) and **inconsistent multi-modal content** (some case studies have no visuals, no video/audio embeds despite an active-looking YouTube channel).

---

## 1. AI Crawler Access Status

Fetched `https://www.kautilya-pe.com/robots.txt` directly (live, not from repo) and confirmed it matches `public/robots.txt`:

| Crawler | Platform | Status |
|---|---|---|
| GPTBot | ChatGPT training/browsing | ✅ Allowed |
| ChatGPT-User | ChatGPT live browsing | ✅ Allowed |
| OAI-SearchBot | ChatGPT search | ✅ Allowed |
| ClaudeBot | Claude | ✅ Allowed |
| anthropic-ai | Anthropic | ✅ Allowed |
| Claude-Web | Claude browsing | ✅ Allowed |
| PerplexityBot | Perplexity | ✅ Allowed |
| Googlebot / Google-Extended | Google Search / AI Overviews | ✅ Allowed |
| Bingbot / msnbot | Bing / Copilot | ✅ Allowed |
| CCBot | Common Crawl (many LLM training sets) | ✅ Allowed |
| cohere-ai | Cohere | ✅ Allowed |
| YouBot | You.com | ✅ Allowed |
| Applebot / Applebot-Extended | Apple Intelligence | ✅ Allowed |
| FacebookBot | Meta | ✅ Allowed |

Only `/api/` is disallowed (correct — no citable content lives there). `Sitemap:` directives for `sitemap.xml`, `news-sitemap.xml`, `image-sitemap.xml` are present and all three resolve with HTTP 200.

**Note:** the skill's "optional block (training-only)" list (CCBot, anthropic-ai, cohere-ai) is deliberately left **open** here. That's a defensible choice for a firm trying to maximize AI-citation surface area, but it does mean Kautilya's content is also flowing into general LLM training corpora with no attribution guarantee — worth being a conscious choice, not a default.

No robots.ts route exists in the repo (`app/robots.ts` absent); robots.txt is a static file in `public/`. This is fine functionally but means any crawler-policy change requires a manual edit + redeploy rather than a dynamic rule.

## 2. llms.txt / llms-full.txt Status

Both present and served correctly:
- `https://www.kautilya-pe.com/llms.txt` → HTTP 200, 188 lines
- `https://www.kautilya-pe.com/llms-full.txt` → HTTP 200, 676 lines

**Quality assessment — good, with gaps:**

`llms.txt` follows the emerging llms.txt spec well: single-line summary, "What is Kautilya?" section, services with concrete pricing, a 5-phase methodology, a quantified track record block (7+ acquisitions, $1.5M+ deal value, 99.83% match rate, 30,134 transactions validated), 6 closed-deal summaries each linking to a canonical story URL, an FAQ section, team roster, key-page index, social profile links (`sameAs`-style), and contact info.

Gaps found:
- **Stories/case studies are summarized in llms.txt but not included in llms-full.txt.** `llms-full.txt`'s own header states it contains "the full text of Kautilya's Blog and Newsletter articles" — it explicitly excludes the 16 Stories pages, which is where the richest quantified case-study detail lives (e.g., the Inspire3 $1.8M diligence engagement, the $21M MSP engagement). An AI system that ingests `llms-full.txt` for verbatim quoting gets blog/newsletter content but not the flagship case studies.
- **Minor count mismatch:** `llms.txt` describes the FAQ page as "23 answered questions," but the live FAQ page's `FAQPage` JSON-LD (`mainEntity`) currently lists 26 questions. Small, but it's exactly the kind of inconsistency that erodes trust if an LLM cross-checks the claim against the page.
- `llms-full.txt` covers only 3 blog posts + 2 newsletter posts in full text (5 of the ~7 long-form articles on the live site) — reasonably current but will need to be regenerated as new posts ship; there's no visible automation for this in the repo (worth confirming it's part of the publish pipeline, not a manual step that will silently go stale).
- No RSL 1.0 (`license.xml` / RSL licensing headers) found anywhere on the site — not present in robots.txt, not present in a dedicated `/rsl.xml`, and not referenced in `llms.txt`. RSL adoption is still early/optional industry-wide, so this is a "nice to have," not a gap versus competitors, but flagged since the skill checks for it explicitly.

## 3. Server-Side Rendering / Technical Accessibility Check

Verified by fetching each URL with a plain `curl` (no JS execution) and diffing against what a browser would show:

| Page | Raw HTML size | JSON-LD `<script>` blocks in raw HTML | Title/meta present raw |
|---|---|---|---|
| `/` | 70,143 bytes | 5 (Organization, WebSite, ProfessionalService, 2× Event) | ✅ |
| `/blog/what-is-buy-side-ma-advisory` | 91,623 bytes | 6 (BlogPosting, FAQPage, BreadcrumbList, ...) | ✅ |
| `/newsletter/aurum-housing-com-acquisition` | 87,608 bytes | 4 (NewsArticle, BreadcrumbList, ...) | ✅ |
| `/stories/inspire3` | 49,442 bytes | 4 (NewsArticle, BreadcrumbList, ...) | ✅ |
| `/approach` | 106,339 bytes | 8 (Service, HowTo, WebPage, BreadcrumbList, ...) | ✅ |
| `/faq` | 89,337 bytes | 6 (FAQPage×1 with 26 Q&A, BreadcrumbList, WebPage, ...) | ✅ |
| `/team` | 66,947 bytes | 4 | ✅ |
| `/careers` | 52,191 bytes | 6 | ✅ |

**Result: fully SSR/SSG. No JS-dependency risk.** Response headers confirm `x-nextjs-prerender: 1` on the homepage, meaning pages are statically generated/pre-rendered at build/deploy time and served directly by Vercel's edge — the single strongest technical signal for AI crawlability, since GPTBot/ClaudeBot/PerplexityBot generally do not execute JavaScript. A curl-only fetch (which is functionally what most AI crawlers do) gets the complete article text, headings, and all JSON-LD on every page checked — nothing is injected client-side via `useEffect`/`fetch()`. Repo scan confirms only one content-adjacent client component (`app/stories/[slug]/StoryContent.tsx`), and since Next.js SSRs client components into the initial HTML too, this doesn't create a rendering gap — it's just an interactivity boundary, not a content-delivery one.

Structured data was validated as parseable JSON in the served HTML (not just present as a source-only artifact) for every page sampled — this rules out a common failure mode where JSON-LD is added in `layout.tsx`/`page.tsx` but gets stripped or malformed at build time.

**One technical misuse found:** `news-sitemap.xml` includes Stories pages with `lastmod`/`news:publication_date` values as old as **2024-06-01** (e.g., `/stories/borderless`). Google News Sitemap protocol expects only articles published in roughly the last 2 days — including 2-year-old evergreen case studies in the news sitemap is a misuse that can cause Google to distrust or deprioritize the whole news-sitemap feed. This doesn't affect ClaudeBot/GPTBot/PerplexityBot (they don't consume Google's news-sitemap protocol specifically) but is a real Google News/Discover hygiene issue worth fixing since it's cheap to fix and sits right next to the AI-crawler work already done.

## 4. Passage-Level Citability Analysis

Sampled `/blog/what-is-buy-side-ma-advisory` (H2-delimited sections) against the 134–167 word optimal-passage target:

| Section (H2) | Word count | Fit |
|---|---|---|
| What Does a Buy-Side Advisor Actually Do? | 144 | ✅ in range |
| What the Buy-Side Process Looks Like, Step by Step | 134 | ✅ in range |
| A Quick Example: How This Plays Out | 173 | ~ near range |
| Buy-Side vs. Sell-Side Advisory | 108 | slightly short |
| Why First-Time Buyers in India Use a Buy-Side Advisor | 117 | slightly short |
| Is Buy-Side Advisory Only for Large Acquisitions? | 54 | too short to stand alone |
| Common Mistakes First-Time Buyers Make Without an Advisor | 65 | too short to stand alone |

Roughly half the sections in this article land inside or near the ideal 134–167 word citation window — genuinely strong for a site that (per the repo history) added `llms.txt` deliberately for GEO. The other half are shorter, punchy sections (54–65 words) that read well for humans but are thin as **standalone** citation blocks — an AI system quoting them would likely need to pull the surrounding paragraph too, which increases the chance of a partial or context-stripped citation.

**FAQ page** (`/faq`): sampled 12 of 26 Q&A blocks; answers run 26–53 words each — well under 134. These are excellent for AI Overviews' short-snippet format (Google AIO and voice-assistant results favor 40–60 word direct answers) but too short individually for platforms like Perplexity that tend to synthesize longer, multi-source paragraph citations. This is a genuine two-audience tension: short-and-direct helps snippet-style engines, longer-and-self-contained helps synthesis-style engines. Right now the FAQ leans entirely toward the short end.

**Newsletter deal-teardown content** (`/newsletter/aurum-housing-com-acquisition`) is the standout: dense, source-attributed statistics ("₹458 crore deal value," "24.90% is an engineered ceiling," "0.67x FY25 revenue"), a numbered "Why It Matters" list, a "Sources:" line naming BSE, Business Standard, Entrackr, Screener, and a structured "Kautilya Deal Score" rubric (5 scored dimensions + verdict). This is close to ideal AI-citation material — specific, sourced, and self-contained — and is the strongest citability asset on the site.

**Direct-answer placement:** Confirmed the blog post opens with a direct one-sentence definition in the first ~40 words ("Buy-side M&A advisory is professional support for the buyer in a business acquisition...") followed by a "Key takeaways" summary paragraph before the first H2 — this is exactly the pattern that performs best for AI Overview and ChatGPT-search snippet extraction.

## 5. Structural Readability

- **Question-based headings:** strong. Blog H2s ("What Does a Buy-Side Advisor Actually Do?", "Is Buy-Side Advisory Only for Large Acquisitions?") and all 26 FAQ H3s are phrased as natural-language questions — this is the single highest-leverage structural pattern for AI Overviews / ChatGPT search, which preferentially extract Q→A pairs.
- **Heading hierarchy:** H1 → H2 → H3 confirmed present and logically nested on blog/FAQ/approach pages.
- **Tables:** 3 `<table>` elements found on the sampled newsletter post (deal structure/numbers breakdowns) — good for extractable structured facts. Zero tables found on the sampled stories page — case studies with heavy stats (e.g., Inspire3's "30,134 transactions, 99.83% match rate, $57K gap, $3.1M misclassified liabilities") are currently prose-only, not tabulated, which makes them harder for an LLM to extract as a clean structured fact.
- **Breadcrumbs:** `BreadcrumbList` JSON-LD present on every content-type page sampled (blog, newsletter, stories, approach, FAQ) — good for entity/site-hierarchy understanding.
- **Lists:** numbered/bulleted lists used throughout (methodology phases, "Why It Matters," track record stats) — good extraction targets.

## 6. Multi-Modal Content

This is the weakest dimension.

- **Images:** inconsistent coverage across the Stories collection. `/stories/borderless` has 3 in-content images with strong, descriptive alt text (e.g., `alt="Financial summary showing £70-80K annualised cashflow from the client referral partnerships"`) — genuinely good, since descriptive alt text is itself a citable text signal for AI crawlers that can't parse pixels. But `/stories/inspire3` — the site's flagship forensic-diligence case study (30,134 transactions, 99.83% match rate) — has **zero in-content images**; the only `<img>` tags on that page are footer directory-listing badges (EasyDoFollow, Huzzler, LemonLaunch, Verified DR). A stats-heavy case study with no chart, screenshot, or diagram is a missed multi-modal opportunity and an inconsistency across the Stories section.
- **Video:** none embedded anywhere on the site (checked homepage, blog post, newsletter post, story page — zero `<video>` tags, zero `youtube.com/embed` or `youtube.com/watch` references in the rendered HTML), despite the Organization schema's `sameAs` linking an active-looking YouTube channel (`youtube.com/@devlikesbizness`, "Dev Shah" — micro PE / acquisition content). This is a clear gap: YouTube mentions/embeds have the single strongest documented correlation with AI citation (~0.737) per the brand-mention-correlation data, and the asset (a channel) appears to already exist off-site but isn't leveraged on-site.
- **Audio/podcast:** none found.
- **Charts/data visualizations:** none found for any of the quantified claims (99.83% match rate, 30,134 transactions, ₹458 crore deal value, etc.) — all delivered as prose or the newsletter's plain `<table>`s.

## 7. Authority & Brand Signals

**On-site (strong):**
- `Organization` JSON-LD on the homepage is unusually complete: `foundingDate`, `foundingLocation`, `numberOfEmployees` (9–15), `naics` code, `areaServed` (6 countries), a 20+ term `knowsAbout` list, `founder` (Person schema for Dev Shah with `jobTitle`, `nationality`, `hasOccupation`), two `ContactPoint`s, and a `sameAs` array linking X, Instagram, LinkedIn, and YouTube.
- Blog posts carry visible + schema author attribution ("Author: Dev Shah") plus `datePublished`/`dateModified` in both visible text and JSON-LD — strong E-E-A-T signal.
- Track record is quantified and specific throughout (7+ acquisitions, 2 exits, $1.5M+ deal value, 1,800 analyst hours, 30,134 transactions validated) rather than vague claims — this kind of specificity is exactly what AI systems preferentially cite over marketing copy.

**Off-site (weak — this is the main score drag):**
- **No Wikipedia entity** for Kautilya, Kautilya PE, or Dev Shah — confirmed via search; only historical Chanakya/Arthashastra Wikipedia content surfaces for "Kautilya."
- **No Reddit presence** — targeted search (`site:reddit.com Kautilya OR "Dev Shah" micro private equity`) returned no relevant results; the only Reddit hit for "Dev Shah" was an unrelated *Master of None* character discussion.
- **LinkedIn — confirmed and indexed.** `in.linkedin.com/in/devlikesbizness` ("Micro Private Equity | 7x acquisitions, 2x exits | Helping buy businesses under $10M") is indexed and discoverable, as is an Instagram profile (`instagram.com/devlikesbizness`) with matching positioning. This is a real, consistent off-site identity signal.
- **YouTube — channel exists but activity/scale unverified.** The `@devlikesbizness` channel is linked in schema and discoverable, but automated fetch attempts couldn't confirm subscriber count or upload cadence (consent-wall redirects blocked headless access). Given zero video embeds on-site, this asset is currently underexploited even if it is active.
- **Brand-name collision risk.** "Kautilya" is a heavily overloaded term: the historical Chanakya/Arthashastra entity dominates search and LLM training data, plus at least two unrelated live businesses use the name (a governance-consulting platform "Kautilya.app" and "Kautilya Industries," a garment company). This is a real GEO risk specific to this brand — an LLM asked "who is Kautilya" without strong disambiguating context in its retrieval set may default to the historical figure or a wrong company. The site's own positioning ("named after Chanakya...applies the same systematic approach") is actually a smart move here (it pre-empts the confusion in citable text), but this needs continual reinforcement via off-site entity signals (Wikipedia/Crunchbase/LinkedIn company page consistency) that don't yet exist at sufficient scale.
- **Domain Rating / backlinks:** not independently verified in this session (no DataForSEO access), but the site's own footer displays third-party "Verified DR," EasyDoFollow, Huzzler, EasyLaunch, LemonLaunch directory badges — these read as early-stage backlink-building activity (startup directory submissions) rather than established authority. Per the skill's correlation data, DR is only weakly correlated with AI citation (~0.266) anyway, so this matters less than the Wikipedia/Reddit/YouTube gaps above.

## 8. Freshness Signals

- Blog posts sampled show recent `datePublished` values (2026-07-25, 2026-07-28).
- `rss.xml` present and well-formed (RSS 2.0 + Atom self-link + Dublin Core creator/publisher), `lastBuildDate: Fri, 30 May 2026`.
- Sitemap `lastmod` on most pages is `2026-05-27`, which looks like a global "last deploy" stamp rather than true per-page content freshness (e.g., `/approach` and `/portfolio` carry the same `lastmod` as the homepage) — this under-represents genuinely fresh content and doesn't help AI systems that weight recency per-URL.

---

## Platform-Specific Score Estimates

*(Estimated from technical/content signals; no live ChatGPT/AIO scrape was run this session — DataForSEO MCP tools were not available.)*

| Platform | Est. Score | Rationale |
|---|---|---|
| Google AI Overviews | ~78/100 | Strong FAQPage/HowTo/BreadcrumbList schema, question-based headings, direct-answer openers all favor AIO extraction. Held back by inconsistent passage length and the news-sitemap misuse (may affect broader Google trust signals, not AIO directly). |
| ChatGPT / OAI-SearchBot | ~72/100 | GPTBot/OAI-SearchBot explicitly allowed, llms.txt + llms-full.txt present (helps ChatGPT-style ingestion even though llms.txt isn't an OpenAI-endorsed standard). Capped by weak off-site authority (no Wikipedia) — ChatGPT search leans on broad web corroboration for lesser-known entities. |
| Perplexity | ~76/100 | PerplexityBot allowed; newsletter's sourced, numbered "Deal Score" and "Sources:" citations are exactly Perplexity's preferred format. Capped by short FAQ answers (Perplexity favors longer synthesized passages) and thin off-site corroboration. |
| Bing Copilot | ~77/100 | Bingbot fully allowed, complete SSR content, strong schema. Similar profile to Google AIO since Copilot leans on Bing's index.

Only 11% of domains get cited by both ChatGPT and Google AIO — Kautilya's technical readiness gives it a real shot at that intersection, but the off-site authority gaps (Wikipedia/Reddit especially) are the more likely blocker than anything on-page.

---

## Top 5 Highest-Impact Changes

1. **Embed video and build a real off-site authority footprint, starting with YouTube.** (Effort: Medium) YouTube mention/embed correlation with AI citation is the strongest signal in the framework (~0.737) and the channel already exists (`@devlikesbizness`, linked in schema) but is completely unused on-site. Embed 1–2 relevant videos on the homepage/approach/stories pages, and confirm the channel is actively publishing acquisition-teardown content that mirrors the written deal-score format. This is the single highest-leverage gap given everything else is already strong.

2. **Add descriptive charts/screenshots to every Stories case study, and pull `/stories/inspire3` up to the `/stories/borderless` standard.** (Effort: Low–Medium) The flagship diligence case study (30,134 transactions, 99.83% match rate) currently has zero in-content visuals while a comparable story (`/stories/borderless`) has three well-alt-texted images. Add at minimum one summary-stats visual per story, matching the descriptive-alt-text pattern already proven to work elsewhere on the site.

3. **Restructure short FAQ/blog sections into self-contained 134–167 word passages.** (Effort: Low) Sections currently at 54–65 words (e.g., "Is Buy-Side Advisory Only for Large Acquisitions?", "Common Mistakes First-Time Buyers Make Without an Advisor") should either be expanded with one supporting example/stat each, or explicitly paired with adjacent context so they read as complete answers in isolation. Keep the short FAQ-style answers for snippet-style engines, but add one "expanded answer" variant per key question for synthesis-style engines like Perplexity.

4. **Fix news-sitemap.xml misuse and add per-page `lastmod` accuracy.** (Effort: Low) Remove evergreen Stories content (some dated 2024) from `news-sitemap.xml` — it should only contain articles published in the last ~48 hours per Google News protocol; continuing to include stale content risks Google discounting the whole feed. Separately, replace the blanket `2026-05-27` `lastmod` stamp on `sitemap.xml` with genuine per-page last-modified dates so freshness-sensitive AI crawlers can tell what's actually new.

5. **Pursue a Wikipedia entity and close the llms-full.txt / Stories gap.** (Effort: Medium–High) No Wikipedia page exists for Kautilya or Dev Shah, which matters more than usual here because "Kautilya" collides with the historical Chanakya entity and two unrelated businesses — Wikipedia (even a stub, if notability supports it) is the strongest available disambiguation and authority signal, and it's currently the single biggest authority gap versus what the on-site schema is already set up to support (founder bio, track record, press-worthy stats). In parallel, extend `llms-full.txt` to include full Stories/case-study text (it currently covers only Blog + Newsletter) so AI systems ingesting that file get the flagship deal data too, and reconcile the "23 questions" claim in `llms.txt` with the FAQ page's actual 26.

---

## Schema Recommendations

- **Add `CaseStudy`-appropriate structured data to Stories pages**, or at minimum keep `NewsArticle` but supplement with `Review`/`AggregateRating`-style scored fields to make the "Kautilya Deal Score" (Price Discipline 4.5/5, Structure & Risk 4.5/5, etc., seen in the newsletter) machine-extractable — right now it's prose-only text on the newsletter post and not present at all in the Stories JSON-LD sampled.
- **Add `VideoObject` schema** once video is embedded (per recommendation #1) — this is a quick win that compounds with the video-embedding change itself.
- **Consider `Dataset` or explicit `claim`/`Statistic`-style markup (or at minimum a consistent `<table>` pattern)** for the recurring quantified claims (99.83% match rate, 30,134 transactions, 1,800 analyst hours) so they're extractable as discrete facts rather than only as prose — this mirrors what the newsletter already does with plain HTML tables and should be extended to Stories.
- Reconcile the FAQ page's `FAQPage.mainEntity` count (26) with the `llms.txt` "23 answered questions" description, and consider adding `FAQPage` markup to the homepage or approach page's own FAQ-style content blocks if any exist outside `/faq`.

## Content Reformatting Suggestions

- Keep the blog's proven pattern (one-sentence direct answer → "Key takeaways" paragraph → question-based H2s) and apply it consistently to any future long-form content; it's already close to ideal.
- For Stories, adopt the newsletter's "Sources:" citation-list pattern — currently only the newsletter format cites external sources (BSE, Business Standard, Entrackr, Screener); Stories/case-study claims about client outcomes should similarly state data provenance (e.g., "based on ConnectWise/Metabase/Intuit exports reconciled by Kautilya") inline, which increases both citability and trustworthiness for AI systems doing claim verification.
- Where FAQ answers are kept short (26–53 words) for snippet extraction, add a `[Read more →]` link into the corresponding blog/approach section that expands the same answer to the 134–167 word range — this serves both audiences without lengthening the FAQ page itself.

---

## Files/URLs Referenced

- Live: `https://www.kautilya-pe.com/robots.txt`, `/llms.txt`, `/llms-full.txt`, `/sitemap.xml`, `/news-sitemap.xml`, `/rss.xml`, and page fetches for `/`, `/blog/what-is-buy-side-ma-advisory`, `/newsletter/aurum-housing-com-acquisition`, `/stories/inspire3`, `/stories/borderless`, `/approach`, `/faq`, `/team`, `/careers`
- Local repo (for cross-reference only, no edits made): `/root/kautilya-site/public/robots.txt`, `/root/kautilya-site/public/llms.txt`, `/root/kautilya-site/public/llms-full.txt`, `/root/kautilya-site/app/sitemap.ts`, `/root/kautilya-site/app/stories/[slug]/StoryContent.tsx`
- Report written to: `/root/kautilya-site/GEO-ANALYSIS.md`
