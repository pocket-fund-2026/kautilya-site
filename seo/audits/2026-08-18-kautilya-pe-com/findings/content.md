# Content Quality / E-E-A-T Audit — kautilya-pe.com

**Date:** 2026-08-18
**Method:** Live fetches via `render_page.py --mode auto` (SSR/raw HTML confirmed for every page, JS bailout markers present but content is server-rendered and trafilatura-extractable), boilerplate-stripped text analysis, `content_quality.py` QRG scoring, cross-reference with `/root/kautilya-site/seo/keywords.md` and `/root/kautilya-site/seo/GEO-ANALYSIS.md` (2026-08-07).
**Pages sampled:** `/`, `/approach`, `/portfolio`, `/faq`, `/team`, `/blog` + 3 posts, `/newsletter` + 2 posts, `/stories/inspire3`, `/stories/runify`, `/stories/smartprompt`.

## Content Quality Score: 82 / 100

Strong E-E-A-T fundamentals (named team, verifiable numbers, dated authorship, clean schema) held back by single-author concentration, thin trust/contact signals, and a thin homepage body relative to the depth found sitewide.

---

## E-E-A-T Breakdown

| Factor | Weight | Score | Notes |
|---|---|---|---|
| Experience | 20% | 88 | First-hand deal narratives throughout Stories ("How Kautilya validated 30,134 transactions on a $1.8M portfolio," "How Kautilya structured a real $110K acquisition," "How Kautilya killed two deals and closed one at a 200x discount") — genuine first-hand-operator framing, not generic advisory copy. |
| Expertise | 25% | 78 | Founder credentials present (Dev Shah, "24-year-old micro PE operator. Personally acquired and exited multiple businesses," INSEAD ETA Conference Speaker 2025, SymBiz 2025 Speaker in `Organization.award`). 6 additional named team members with roles + LinkedIn links on `/team`. But every sampled blog/newsletter/story byline is "Dev Shah" only — no visible per-post author bio, credentials, or second byline anywhere in the 8 long-form pieces sampled. |
| Authoritativeness | 25% | 68 | Confirmed via GEO-ANALYSIS and this audit: complete `Organization`/`Person`/`ProfessionalService` JSON-LD, `sameAs` social links, awards field. But off-site authority (no Wikipedia, no Reddit, brand-name collision with historical Chanakya/Arthashastra) remains the binding constraint, consistent with prior GEO analysis — this audit did not find new off-site signals to offset that gap. |
| Trustworthiness | 30% | 72 | Verified numbers are real and specific in rendered HTML (see below) — a strong trust signal. But no phone number or physical street address appears in visible body copy on any sampled page (only `contact@kautilya-pe.com` + a Mumbai `geo.` meta tag); pricing is transparent (retainer/DD/market-research prices in schema and presumably `/engage`), which helps. |

**Weighted E-E-A-T composite: ~76/100.**

---

## Verified Numbers-Heavy Claims (confirmed present in rendered HTML, not just marketing copy)

| Claim | Location | Verified |
|---|---|---|
| "99.83% match rate" / "30,134 transactions" | `/stories/inspire3` | ✅ present 4× in body text |
| "$1.8M" UK digital wellness portfolio | `/stories/inspire3` | ✅ present in H1/subhead |
| "$110K acquisition" (seller-financed) | `/stories/runify` | ✅ |
| "$21M" MSP due diligence engagement | `/portfolio` | ✅ |
| "200x discount" close, "killed two deals" | `/stories/smartprompt` | ✅ |
| Named team: Dev Shah (Founder), Aum Thakarkar (Chief Analyst), Ganesh Jagtap (Tech Head), Manas Kogta (AI Consultant), Pushkar Rathod (Analyst), Aryan Solanki (Marketing Head), Kabir Dhumale (Business Associate), Aditya Negi (Full Stack Developer) | `/team` | ✅ all 8 with role + LinkedIn |
| 5-phase methodology (Mandate Definition → Universe Construction → Targeted Outreach → Diligence & Structuring → Execution & Close) | `/approach` | ✅ |

This confirms and extends the GEO-ANALYSIS.md finding that the site's quantified track record is genuinely embedded in page copy, not just claimed in marketing collateral.

---

## What Works

1. **Specific, falsifiable case-study numbers** replace generic "we deliver results" language throughout Stories, Portfolio, and Newsletter — exactly the kind of citable, verifiable content Sept 2025 QRG and AI-citation systems reward over vague claims.
2. **Full team roster with roles and LinkedIn links** (`/team`) — 8 named people, not just a founder photo, which is unusual and valuable for a firm this size.
3. **Dated, bylined long-form content** — every blog/newsletter/story post carries a visible "Dev Shah · [date]" byline and a real publish date (matches `datePublished`/`dateModified` JSON-LD per GEO-ANALYSIS).
4. **Newsletter deal-teardowns are the strongest content asset on the site** — sourced stats, a scored "Kautilya Deal Score" rubric, tables — this reconfirms GEO-ANALYSIS.md's identical conclusion.
5. **No AI-pattern filler language detected.** `content_quality.py` returned `filler_score: 0` and `ai_pattern_score: 0` on every sampled page — no "in today's fast-paced world," "it's important to note," etc.
6. **Good topical depth on long-form pages**: `/approach` (~2,190 words), `/blog/what-is-a-search-fund` (~2,390 words), `/newsletter/aurum-housing-com-acquisition` (~2,200 words), `/faq` (~3,280 words across ~26 Q&As) all clear their content-type minimums comfortably.

---

## Findings

### 1. Single-author concentration across all long-form content (Medium)
**Evidence:** All 8 sampled blog/newsletter/story posts carry the byline "Dev Shah" with no co-author, guest contributor, or reviewer credit anywhere in the visible text. `/team` lists 6 analysts/specialists (Chief Analyst, Tech Head, AI Consultant, etc.) whose expertise is never attributed to any specific published content.
**Recommendation:** Attribute specific posts to the team member with domain expertise (e.g., have the "Tech Head" or "AI Consultant" byline the SaaS/AI-tool acquisition stories), or add a lightweight "Reviewed by [name], [role]" credit line. This diversifies the expertise signal and reduces reliance on a single named individual for the firm's entire E-E-A-T footprint.

### 2. No visible per-post author bio or credentials block (Medium)
**Evidence:** Blog/newsletter/story posts show "Dev Shah · [date]" only — no linked author bio, headshot, or credentials snippet inline on the article itself (the founder bio only exists on `/team` and in `Person` JSON-LD). A reader (or an AI system without JSON-LD access) landing on a single article has no in-page signal of who "Dev Shah" is or why they're credible.
**Recommendation:** Add a short author byline block (1–2 sentences + photo + link to `/team`) at the top or bottom of every blog/newsletter/story post — mirrors what already exists in schema but currently isn't rendered as visible content.

### 3. No visible phone number or physical address in body copy (Medium)
**Evidence:** Across all 15 pages sampled, the only contact signal in rendered text is `contact@kautilya-pe.com`; `geo.placename`/`geo.position` meta tags exist but aren't visible page content. No street address, no phone number found anywhere in extracted text.
**Recommendation:** For a B2B advisory firm handling high-value cross-border mandates, a visible registered office address (even a co-working/virtual address) and a contact phone number materially strengthen the Trustworthiness pillar, which QRG weights highest. Add to `/team`, `/engage`, and footer.

### 4. Homepage body copy is thin relative to a 500-word floor (Low–Medium)
**Evidence:** Stripped of nav/header/footer boilerplate, the homepage (`/`) yields ~357 words of substantive body copy — below the 500-word topical-coverage floor for homepages, even though this is largely a deliberate hero/tagline-driven design that funnels to `/approach` and `/portfolio`.
**Recommendation:** Not urgent given the deep linking pattern, but consider adding 2–3 more substantive paragraphs (e.g., a condensed track-record summary with the 99.83%/30,134/$1.8M stats surfaced on-page, not just in `llms.txt`) to give both users and crawlers a self-contained homepage answer.

### 5. Repetitive-structure signal flagged sitewide (Low)
**Evidence:** `content_quality.py`'s repetition heuristic flagged every sampled page as "repetitive" (score range 41–82/100, worst on `/faq` at 82). Manual review shows this is driven mostly by repeated nav/CTA boilerplate ("Approach Portfolio Stories Blog Team Engage," "Book a call," category tag chips) rather than duplicated prose — the underlying case-study narratives are distinct. This is a caveat on the tool's raw signal, not a confirmed duplicate-content problem.
**Recommendation:** Low priority; if repeating this check, strip nav/footer chrome before scoring (this audit did so for word counts via a custom stripper, but the automated `content_quality.py` pass was run against full HTML including chrome — treat those specific repetition numbers as directional only).

### 6. Stories case-study stats remain prose-only, no tables/visuals (Low — matches prior GEO finding)
**Evidence:** Confirmed independently: `/stories/inspire3`'s core stats (30,134 transactions, 99.83% match rate) are delivered as prose, no `<table>`, no chart. This matches GEO-ANALYSIS.md's identical finding (§6, §"Top 5 Highest-Impact Changes" #2) — no new information here, just confirmation the gap is unresolved as of this audit date.
**Recommendation:** See GEO-ANALYSIS.md recommendation #2 (add summary-stats visuals/tables to Stories, matching the newsletter's table pattern).

### 7. Keyword targeting is broad but not stuffed (Low, informational)
**Evidence:** Cross-referencing `seo/keywords.md` against rendered body copy: pages carry large `keywords` meta arrays (40–100+ terms per page) but the visible prose reads naturally — e.g., `/approach`'s body text doesn't mechanically repeat "acquisition process India" the way the meta-keyword list might suggest. The keyword arrays function as a metadata/schema layer, not as on-page repetition.
**Recommendation:** No action needed; this is good practice (keyword coverage in metadata, natural language on-page). Worth periodically spot-checking that new pages don't drift into meta-keyword-driven prose.

---

## Confirmation vs. GEO-ANALYSIS.md

This audit's findings are **consistent with, not contradictory to**, GEO-ANALYSIS.md (2026-08-07):
- Confirms the quantified track-record numbers are genuinely present in rendered HTML (GEO-ANALYSIS §7 claimed this; verified independently here across 3 Stories pages).
- Confirms the newsletter is the strongest citability/E-E-A-T asset on the site (GEO-ANALYSIS §4; same conclusion reached independently from a content-quality angle).
- Confirms the Stories-pages-lack-visuals/tables gap (GEO-ANALYSIS §6/§"Top 5" #2) is still open.
- Adds two findings not covered in the GEO analysis (which focused on AI-crawler/citability mechanics rather than E-E-A-T structure): the single-author byline concentration and the missing phone/address trust signals.

---

## Files Referenced

- Rendered HTML saved to `/tmp/claude-0/-root/cfd9eda2-de92-4bfc-88b9-e7b0bb0c9a61/scratchpad/html/*.html` (session-local, not persisted in repo)
- `/root/kautilya-site/seo/keywords.md`
- `/root/kautilya-site/seo/GEO-ANALYSIS.md`
