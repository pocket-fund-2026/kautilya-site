# Content Architecture / Topic Clustering — kautilya-pe.com

**Date:** 2026-08-18
**Scope:** `/blog` (3 posts), `/newsletter` (4 posts), `/stories` (16 posts), plus service pages `/approach`, `/portfolio`, `/team`, `/faq`, `/engage`.
**Method:** Keyword inventory (`seo/keywords.md`) mapped against actual page content/metadata and the real internal-link graph, extracted directly from source (`grep 'href="/'` across `components/blogs/*.tsx`, `components/newsletters/*.tsx`, `components/stories/*.tsx`). No live SERP-overlap checks were run (no search index access in this pass) — clustering and cannibalization calls are made from semantic/keyword-target analysis and confirmed against the actual link graph rather than live SERP scraping.

**Content Architecture Score: 54 / 100**

---

## What Works

- **The three verticals have genuinely different content *types* and search intent**, not just different topics — this is the right instinct. `/newsletter` is third-party deal-teardown journalism (Torrent–JB Chemicals, Aurum–Housing.com, Lockheed–Ultra Maritime, JSW Paints–Akzo Nobel), `/blog` is evergreen definitional/how-to content, `/stories` is first-person narrative proof of Kautilya's own closed deals. Differentiating by *content type* rather than by topic is a better structural choice than three overlapping blogs would be.
- **Where cross-linking exists, the pattern is correct.** `/blog/what-is-buy-side-ma-advisory` links out to `/approach`, `/portfolio`, and `/stories` (pillar → methodology + proof), and `/blog/what-is-a-search-fund` ↔ `/stories/search-funds` is an explicit bidirectional pairing. This shows the team already knows the right pattern — it's just applied to 2 of ~7 possible pillar relationships.
- **Newsletter and Stories content is dense and citation-worthy** (per the companion GEO analysis) — the underlying content quality is not the problem; the *architecture connecting it* is.
- **No literal duplicate-title collision found.** The one place two pages describe the same underlying deal (`/portfolio`'s "$21M MSP due diligence case study" and `/stories/msp-buy-side-diligence`) is already linked correctly — `StoryMspDueDiligence.tsx` links to `/portfolio` and vice versa is implied by portfolio being the summary/index.

---

## Findings

### 1. Confirmed cannibalization: "What is a search fund" (blog) vs. "The Rise of Search Funds" (story) — **High**
`/blog/what-is-a-search-fund` and `/stories/search-funds` ("The Rise of Search Funds") both target the same core query cluster (search fund definition, Stanford 1984 origin, model mechanics). Both are informational-intent, both are already linked to each other (`StorySearchFunds.tsx → /blog/what-is-a-search-fund`, and the reverse), which mitigates but does not eliminate the overlap — Google/AI systems can still pick either as the canonical answer for "what is a search fund" / "search fund history," splitting authority.
**Recommendation:** Make the differentiation explicit in on-page framing, not just in the link graph. Keep `/blog/what-is-a-search-fund` as the canonical FAQ-schema definitional page (already has `FAQPage` markup). Rewrite `/stories/search-funds`'s opening so it reads unambiguously as first-person narrative/history ("how I came to build inside this model") rather than a second definitional treatment, and consider adding `rel` framing or a "For the full definition, see..." callout at the top of the story pointing to the blog post as canonical.

### 2. The site's core commercial keyword surface has no dedicated pillar content — **High**
`seo/keywords.md` shows heavy, repeated targeting across the site-wide default, homepage, and `/approach` metadata for three topic clusters that have **zero dedicated long-form content**:
- **Off-market deal sourcing / proprietary deal flow** — appears in the site-wide default keyword list, homepage, and `/approach`, but the only content addressing it is `/stories/borderless` (narrative) and `/stories/deal-sourcing` (personal routine). No canonical "How Off-Market Deal Sourcing Works in India" guide with FAQ schema exists, despite this being arguably the single most-repeated phrase in the entire keyword inventory.
- **Buy-side due diligence checklists** — `/approach`'s own metadata targets "DD checklist India," "financial due diligence checklist India," "commercial due diligence checklist," "operational due diligence India" as distinct long-tail terms, but no post is built around any of them; `/approach` covers process narratively, not as a checklist asset.
- **Seller financing & earnout structuring** — "seller financing India," "earnout India," "earnout structure guide," "seller note" appear repeatedly in keyword lists, but the only content is the narrative `/stories/runify` case study and short FAQ answers. No standalone guide.
**Recommendation:** Build 2 new blog pillars — "Off-Market Deal Sourcing in India: The Complete Guide" and "Buy-Side Due Diligence Checklist (Financial, Commercial, Operational)" — matching the existing blog post format (FAQPage schema, direct-answer opener, question-based H2s). These are the two highest-ROI content gaps on the site because the keyword demand is already proven by how much metadata effort has gone into targeting them with no matching asset.

### 3. `/newsletter` is an internal-linking island — **High**
Every newsletter post's cross-links point only to `/newsletter` (self) and `/team`, with one exception (`NewsletterPharmaValuation.tsx` also links `/engage`). None of the four newsletter posts link to `/blog`, `/stories`, `/approach`, or `/portfolio`, and no blog/stories/approach page links back into `/newsletter`. This means the newsletter vertical — which per the GEO analysis has the strongest, most citation-dense content on the site (sourced stats, deal-score tables) — passes zero internal link equity to the commercial pillar/spoke structure, and vice versa.
**Recommendation:** Add 1-2 contextual links per newsletter post into the relevant blog pillar or `/approach` section (e.g., the JSW Paints–Akzo Nobel "buy vs. build" teardown → `/approach`'s deal-structure section; the pharma valuation teardown → the family-business/SME valuation cluster once built per Finding 2). Add a reciprocal "Recent deal teardowns" module to `/approach` or the blog pillar pages.

### 4. Nine of sixteen Stories posts are internal-link dead ends — **Medium**
Direct grep of the link graph shows `StoryDealSourcing`, `StoryPocketDeals`, `StoryReview`, `StorySourcely`, `StoryPocketFund`, `StoryCollegeStartups`, `StoryDiamonds`, `StoryEditionZero`, and `Story200kDeals` link **only** to `/stories` (the index) and nowhere else — no link to `/engage`, `/portfolio`, `/team`, or any blog pillar. Each spoke should carry at least 3 incoming and 2+ outgoing contextual links per hub-and-spoke best practice; these carry effectively one outbound link and, without a "related posts" module, likely comparably few inbound links too.
**Recommendation:** Add outbound links from each of these 9 posts to (a) the topically nearest blog pillar or gap-pillar once built, and (b) `/engage` or `/portfolio` for conversion. E.g., `/stories/diamonds` and `/stories/pocket-deals` should link into the new "Off-Market Deal Sourcing" pillar (Finding 2) and to `/stories/borderless`/`/stories/deal-sourcing` as spoke-to-spoke peers.

### 5. Legacy "Pocket Fund" personal-journal content dilutes the current B2B advisory entity focus — **Medium**
Five stories (`edition-zero`, `review` "2023 Review + 2024 Goals", `college-startups` "10 Reasons... Start a Business in College", `pocket-fund`, `200k-deals`) read as origin-story/personal-blog content from what appears to be an earlier "Pocket Fund" DTC/student-acquisition-journal phase of the brand, predating the current "Kautilya, B2B buy-side advisory firm" positioning. This is consistent with the GEO analysis's brand-collision concern (Kautilya name entity clarity) — mixing personal-journal content into the same `/stories` collection as forensic $21M MSP due-diligence case studies makes it harder for both readers and AI systems to converge on a single coherent entity description.
**Recommendation:** Not necessarily delete (there's real E-E-A-T/founder-authenticity value), but stop treating these as commercial spokes. Either (a) tag/filter them into a visually distinct "Origin Story" sub-section linked from `/team` rather than surfaced as peers to case-study spokes, or (b) leave them in `/stories` but exclude them from any new pillar/spoke link-matrix work — don't spend limited internal-link budget routing commercial pillars into personal-journal posts.

### 6. `/blog/buying-family-owned-business-india` has no proof/spoke content at all — **Medium**
`BlogFamilyBusinessAcquisition.tsx` links only to `/blog`, `/team`, `/engage` — no link to `/approach`, `/portfolio`, or any `/stories` post, and (confirmed above) no story exists yet about a family-business/succession deal specifically. This is the weakest-linked of the three blog pillars and the one with the least supporting cluster depth, despite family-business succession being a heavily targeted keyword theme (site-wide default + dedicated blog post keywords: "family business succession sale India," "promoter family business sale," "retiring business owner sale India").
**Recommendation:** Treat as its own cluster (see Cluster 3 in the map below) and build 2-3 spoke posts: "How to Value a Family-Owned Business With Informal Records," "Due Diligence Red Flags When Buying a Family Business," "Negotiating With a Retiring Owner." Link the pillar to `/approach` and `/portfolio` at minimum in the interim.

### 7. Over-broad, topically loose linking from "What Is a Search Fund" — **Low**
`BlogWhatIsASearchFund.tsx` links to six different stories (`msp-buy-side-diligence`, `smartprompt`, `dino-games`, `runify`, `inspire3`, `search-funds`), several of which (MSP diligence, mobile-game valuation, seller-financing) have no direct search-fund framing — they're general acquisition case studies, not search-fund-specific proof. This spreads link equity thin and weakens the topical-relevance signal search engines use to associate anchor context with destination pages.
**Recommendation:** Keep only `/stories/search-funds`, `/stories/sourcely` (Kautilya's own first acquisition, closest to a searcher's-first-deal narrative), and `/stories/pocket-fund` as search-fund-cluster spokes from this pillar. Route the other four (`msp-buy-side-diligence`, `smartprompt`, `dino-games`, `runify`) as spokes of the buy-side-advisory and due-diligence pillars instead (Clusters 1 and 5 below), where they're topically native.

### 8. No related-posts/cross-recommendation component exists in the codebase — **Low**
`grep -rl "RelatedPosts\|RelatedStories\|RelatedContent"` across `app/` and `lib/` returns nothing. Every cross-link found above is a manually hardcoded `<a href>` inside a specific post's component file. This means the link matrix will silently rot as new posts are added (no post is auto-linked into a cluster) and makes systematic hub-and-spoke enforcement dependent on someone remembering to hand-edit each new component.
**Recommendation:** Add a lightweight `RelatedContent` component driven by a `cluster` tag on each post's metadata (`lib/blogs.ts` / `lib/newsletters.ts` / `lib/stories.ts` already have a clean metadata-object pattern this could extend). Even a static per-cluster array is preferable to fully manual per-post links.

---

## Proposed Cluster Map

| # | Cluster / Pillar | Status | Pillar Page | Spokes (existing) | Spokes (gap — to build) |
|---|---|---|---|---|---|
| 1 | **Buy-Side Advisory & Process** | Partial | `/blog/what-is-buy-side-ma-advisory` (+ `/approach` as methodology co-pillar) | `/portfolio`, `/stories/inspire3`, `/stories/msp-buy-side-diligence`, `/stories/borderless` | — |
| 2 | **Search Funds & Micro-PE in India** | Partial (cannibalization risk) | `/blog/what-is-a-search-fund` | `/stories/search-funds`, `/stories/sourcely`, `/stories/pocket-fund` | "Search Funds in India: Self-Funded vs. Traditional" |
| 3 | **SME & Family Business Succession India** | Thin (1 post, no spokes) | `/blog/buying-family-owned-business-india` | — | "Valuing a Family Business With Informal Records," "DD Red Flags Buying a Family Business," "Negotiating With a Retiring Owner" |
| 4 | **Off-Market Deal Sourcing India** | Gap — no pillar | *(none — build new)* | `/stories/borderless`, `/stories/deal-sourcing`, `/stories/diamonds`, `/stories/pocket-deals` | "Off-Market Deal Sourcing in India: The Complete Guide" (pillar) |
| 5 | **Buy-Side Due Diligence Checklists** | Gap — no pillar | *(none — build new)* | `/stories/inspire3`, `/stories/msp-buy-side-diligence`, `/stories/smartprompt`, `/stories/dino-games` | "Buy-Side Due Diligence Checklist: Financial, Commercial & Operational" (pillar) |
| 6 | *(watch-list)* Deal Structuring — Seller Financing & Earnouts | Interlink-only, not yet a cluster | *(none)* | `/stories/runify`, `/stories/smartprompt` | Promote to full cluster once 1-2 more posts exist; pillar candidate: "Seller Financing & Earnouts in Indian M&A" |
| — | Origin Story / Founder Journey (not a commercial cluster) | Reclassify | `/team` | `/stories/edition-zero`, `/stories/review`, `/stories/college-startups`, `/stories/pocket-fund`*, `/stories/200k-deals` | Exclude from commercial link matrix (Finding 5) |
| — | Newsletter (Deal Teardowns) | Separate content type, correctly differentiated | `/newsletter` index | 4 posts (Torrent–JB Chemicals, Aurum–Housing.com, Lockheed–Ultra Maritime, JSW Paints–Akzo Nobel) | Add cross-links into Clusters 1/3/5 (Finding 3) |

*`pocket-fund` appears in both Cluster 2 (as ETA/search-fund-adjacent proof) and the Origin Story group — acceptable as a dual-tagged spoke since it's genuinely both.

---

## Internal Link Matrix Recommendation

**Mandatory (pillar ↔ spoke, bidirectional):**
| Pillar | Spoke |
|---|---|
| `/blog/what-is-buy-side-ma-advisory` | `/stories/inspire3`, `/stories/msp-buy-side-diligence`, `/stories/borderless`, `/portfolio` |
| `/blog/what-is-a-search-fund` | `/stories/search-funds` (already bidirectional — keep), `/stories/sourcely` |
| `/blog/buying-family-owned-business-india` | `/approach`, `/portfolio` (interim, until Cluster 3 spokes exist) |
| *New:* Off-Market Deal Sourcing pillar | `/stories/borderless`, `/stories/deal-sourcing`, `/stories/diamonds`, `/stories/pocket-deals` |
| *New:* DD Checklist pillar | `/stories/inspire3`, `/stories/msp-buy-side-diligence`, `/stories/smartprompt`, `/stories/dino-games` |

**Recommended (spoke ↔ spoke, within cluster):**
- `/stories/borderless` ↔ `/stories/deal-sourcing` ↔ `/stories/diamonds` ↔ `/stories/pocket-deals` (all Off-Market Sourcing cluster)
- `/stories/inspire3` ↔ `/stories/msp-buy-side-diligence` ↔ `/stories/smartprompt` (already partly linked — extend to `/stories/dino-games`)
- `/stories/runify` ↔ `/stories/smartprompt` (both deal-structuring/risk-gate narratives)

**Optional (cross-cluster):**
- `/newsletter/*` → nearest relevant blog pillar or `/approach` section (Finding 3)
- Cluster 1 (Buy-Side Advisory) ↔ Cluster 5 (DD Checklists) — adjacent, natural cross-link
- Cluster 4 (Off-Market Sourcing) ↔ Cluster 1 (Buy-Side Advisory) via `/approach`'s sourcing-methodology section

**Do not link (avoid diluting cluster relevance):**
- `/blog/what-is-a-search-fund` → `/stories/msp-buy-side-diligence`, `/stories/dino-games`, `/stories/runify` (currently linked — remove per Finding 7; these belong to Clusters 1/5 instead)
- Any commercial pillar → Origin Story group (`edition-zero`, `review`, `college-startups`, `200k-deals`)

---

## Cannibalization Check Summary

| Pair | Overlap risk | Verdict |
|---|---|---|
| `/blog/what-is-a-search-fund` vs `/stories/search-funds` | High (same core "what is a search fund" intent) | Real risk, partially mitigated by existing bidirectional link — needs on-page differentiation (Finding 1) |
| `/portfolio` (MSP $21M summary) vs `/stories/msp-buy-side-diligence` | Low | Already correctly linked as summary → full case study |
| `/blog/what-is-buy-side-ma-advisory` vs `/approach` | Low | Good model pairing — definitional (informational intent) vs. process (near-transactional intent), correctly cross-linked |
| `/blog/buying-family-owned-business-india` vs any story | None currently | No competing content — but also no supporting content (Finding 6) |
| `/newsletter/*` vs `/blog` or `/stories` | None | Clean differentiation by content type (third-party deal analysis vs. own-deal narrative vs. evergreen guide) |

---

## Validation Checklist

- [x] No two posts share the same primary keyword *except* the search-fund pair flagged in Finding 1
- [ ] Every spoke has ≥3 incoming internal links — **fails** for the 9 dead-end stories in Finding 4
- [ ] Every spoke links to its pillar — **fails** for most Stories posts (most link only to `/portfolio`/`/engage`/`/stories` index, not up to a blog pillar)
- [x] Pillar links to spokes — true for 2 of 3 existing blog pillars
- [ ] No orphan pages — 9 Stories posts are effectively link dead-ends (Finding 4)
- [x] Template/schema selection matches intent classification (per GEO analysis: BlogPosting+FAQPage for blog, NewsArticle for newsletter/stories)
- [ ] SERP overlap data supports groupings — not verified via live SERP in this pass; grouping based on keyword-target and link-graph analysis instead

---

**Files referenced:** `/root/kautilya-site/seo/keywords.md`, `/root/kautilya-site/seo/GEO-ANALYSIS.md`, `/root/kautilya-site/lib/blogs.ts`, `/root/kautilya-site/lib/newsletters.ts`, `/root/kautilya-site/lib/stories.ts`, `/root/kautilya-site/components/blogs/*.tsx`, `/root/kautilya-site/components/newsletters/*.tsx`, `/root/kautilya-site/components/stories/*.tsx`
