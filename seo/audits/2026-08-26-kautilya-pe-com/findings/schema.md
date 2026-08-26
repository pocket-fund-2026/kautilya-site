# Schema.org Findings — kautilya-pe.com (2026-08-26)

Fetched via raw mode (Next.js SSR/SSG, all markup server-rendered — `X-Nextjs-Prerender: 1`). Checked: homepage, `/team`, `/stories`, and one article (`/stories/msp-buy-side-diligence`) as a representative sample of the 16-post blog.

## 1. Detection Summary

| Page | Schema types present |
|---|---|
| `/` (home) | `Organization`, `WebSite` (+`SearchAction`), `ProfessionalService` — three separate top-level JSON-LD blocks |
| `/team` | `AboutPage` → `Organization` → 5+ `Person` (employees), `BreadcrumbList` |
| `/stories` | `Blog`, `ItemList` (16 articles), `BreadcrumbList`, `ItemList` of `VideoObject`s |
| `/stories/msp-buy-side-diligence` | `NewsArticle`, `BreadcrumbList`, `FAQPage`, `HowTo` |

All blocks are syntactically valid JSON-LD, no parse errors. Above-average implementation for a small firm site — but real correctness and freshness issues below.

## 2. Validation Results

### Critical / should-fix

**a) Deprecated `HowTo` markup on every article** — HowTo rich results were removed by Google in September 2023. Zero SERP benefit, pure dead weight (4 `HowToStep` items × 16 articles).

**b) `FAQPage` on article pages — no longer produces rich results.** Google retired FAQ rich results for all sites as of May 7, 2026 (supersedes the Aug 2023 gov/health-only restriction). Downgraded to **Info priority**: not broken, just non-functional for its original SERP purpose. Visible Q&A text is fine to keep; don't rely on the JSON-LD for rich results.

**c) `NewsArticle` used instead of `Article`/`BlogPosting`.** The `/stories` content is self-described elsewhere in the same graph as a `Blog` ("Kautilya Stories") — deal journals and case studies, not news reporting. `NewsArticle` is reserved for Google-News-eligible journalism and can trigger eligibility expectations (bylines, editorial standards, timeliness) that don't apply. **Recommend switching `NewsArticle` → `BlogPosting` site-wide across all 16 posts.**

### Should-fix (correctness/consistency)

**d) Duplicate, conflicting Organization entities on the homepage with no `@id` linking.** Three independent top-level nodes all describe the same company (`Organization` in block 1, `Organization` nested in `WebSite.publisher` in block 2, separate `ProfessionalService` in block 3) with no `@id` tying them together:
- Block 1's `hasOfferCatalog` lists "Forensic Due Diligence" at $6,500 with structured `Offer`/`priceSpecification`; block 3's `hasOfferCatalog` lists a differently-named "Due Diligence" service with $6,500 only as plain text, no `Offer.price`.
- Block 3 has a `PostalAddress` (Mumbai, Maharashtra, IN); block 1 has no `address`, only `foundingLocation`.
- Block 3 has no `sameAs`, `logo`, or `founder` even though block 1 does.

Google's guidance is one canonical entity per real-world thing. Recommend consolidating into a single `@graph` with `@id` anchors (e.g. `https://www.kautilya-pe.com/#organization`) referenced consistently from `WebSite.publisher`, `Article.publisher`, `Person.worksFor`, etc.

**e) Data bug: mismatched image filename.** On `/team`, the `Person` entry for Dev Shah (Founder) has `"image": "https://www.kautilya-pe.com/images/aditya.jpeg"` — doesn't match his name and isn't any current team member's file. Looks like a copy-paste artifact from an asset rename.

**f) `priceRange: "$$$$"` on `ProfessionalService`.** Restaurant/retail dollar-sign convention doesn't render meaningfully for a B2B advisory firm. Low priority — drop it or replace with free text (e.g. `"$2,500–$6,500+ per engagement"`).

### Passing / good practice already in place
- `BreadcrumbList` correctly implemented on `/team`, `/stories`, and article pages.
- `VideoObject` on `/stories` has all Google-required properties plus `contentUrl` and `duration`.
- `WebSite` + `SearchAction` (Sitelinks Search Box) — target URL template verified working (`/stories?q={search_term_string}`, HTTP 200).
- Article-level `author.worksFor`, `sameAs`, `publisher.logo` (with dimensions) present — good E-E-A-T signals.
- ISO 8601 dates throughout; absolute URLs used consistently (aside from apex/www redirect, a hosting matter not a schema defect).

## 3. Missing Opportunities

1. **`AggregateRating`/`Review`** — only if genuine, third-party-verifiable client testimonials exist. Do not fabricate.
2. **`JobPosting`** — there's already an HR `ContactPoint` (`careers@kautilya-pe.com`) suggesting active hiring. Strong, currently-supported rich-result type if roles are listed.
3. **Merge `Organization`/`ProfessionalService` into a single `@graph`** (see 2d) — the single highest-leverage schema fix on the site.
4. **`Service` entities with stable `@id`** — currently duplicated across two homepage nodes.

## 4. Generated JSON-LD (ready to use)

### Fix (d): Consolidated homepage `@graph` (replaces the 3 separate blocks)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://www.kautilya-pe.com/#organization",
      "name": "Kautilya",
      "alternateName": ["Kautilya PE", "Kautilya Advisory", "Pocket Fund"],
      "legalName": "Kautilya",
      "url": "https://www.kautilya-pe.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.kautilya-pe.com/icon.svg",
        "width": 512,
        "height": 512,
        "caption": "Kautilya — Buy-Side M&A Advisory"
      },
      "image": "https://www.kautilya-pe.com/opengraph-image",
      "description": "Buy-side advisory firm that constructs proprietary acquisition pipelines on demand: in any sector, against any criteria, from first principles.",
      "slogan": "Proprietary deal flow. From mandate to close.",
      "foundingDate": "2023",
      "foundingLocation": { "@type": "Place", "name": "Mumbai, India" },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      },
      "email": "contact@kautilya-pe.com",
      "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 9, "maxValue": 15 },
      "naics": "523130",
      "priceRange": "$2,500–$6,500+ per engagement",
      "currenciesAccepted": "USD, INR, AED, GBP",
      "paymentAccepted": "Bank Transfer, Wire Transfer",
      "areaServed": [
        { "@type": "Country", "name": "India" },
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "United Arab Emirates" },
        { "@type": "Country", "name": "United Kingdom" },
        { "@type": "Country", "name": "Singapore" },
        { "@type": "Country", "name": "Australia" }
      ],
      "sameAs": [
        "https://x.com/microsearchfund",
        "https://www.instagram.com/microsearchfund/",
        "https://www.linkedin.com/company/pocket-fund/",
        "https://www.youtube.com/@devlikesbizness"
      ],
      "founder": { "@id": "https://www.kautilya-pe.com/team#dev-shah" },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "email": "contact@kautilya-pe.com",
          "contactType": "sales",
          "areaServed": ["IN", "US", "GB", "AE"],
          "availableLanguage": "English"
        },
        {
          "@type": "ContactPoint",
          "email": "careers@kautilya-pe.com",
          "contactType": "customer support",
          "areaServed": "IN",
          "availableLanguage": "English"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Kautilya Advisory Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "@id": "https://www.kautilya-pe.com/#service-retainer",
              "name": "Full-Service Retainer",
              "description": "End-to-end acquisition mandate: off-market sourcing, forensic diligence, deal structuring, operator placement, and post-acquisition growth.",
              "offers": {
                "@type": "Offer",
                "price": "2500",
                "priceCurrency": "USD",
                "priceSpecification": {
                  "@type": "UnitPriceSpecification",
                  "referenceQuantity": { "@type": "QuantitativeValue", "value": 1, "unitText": "month" }
                }
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "@id": "https://www.kautilya-pe.com/#service-dd",
              "name": "Forensic Due Diligence",
              "description": "8-workstream forensic DD: financial reconstruction, commercial, traffic, tech, operational, strategic, and exit analysis. Delivered in under 15 days.",
              "offers": { "@type": "Offer", "price": "6500", "priceCurrency": "USD" }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "@id": "https://www.kautilya-pe.com/#service-research",
              "name": "Market Research",
              "description": "6–8 week deep-dive into a target acquisition sector or universe.",
              "offers": { "@type": "Offer", "price": "3500", "priceCurrency": "USD" }
            }
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.kautilya-pe.com/#website",
      "name": "Kautilya",
      "url": "https://www.kautilya-pe.com",
      "description": "Buy-side M&A advisory firm that constructs proprietary acquisition pipelines for PE, VC, and family office buyers.",
      "inLanguage": "en-US",
      "publisher": { "@id": "https://www.kautilya-pe.com/#organization" },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.kautilya-pe.com/stories?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", ".hero-description", ".section-body"]
      }
    }
  ]
}
```

### Fix (c): article schema — `NewsArticle` → `BlogPosting`, `HowTo` removed

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "How to Do Buy-Side Due Diligence on an MSP",
  "description": "How to run buy-side diligence on an MSP, on a real $21M rebuild: separate blended margins, re-cost labour, reconcile PSA and billing into an EBITDA bridge.",
  "articleSection": "Acquisitions & Market Intelligence",
  "inLanguage": "en-US",
  "author": { "@id": "https://www.kautilya-pe.com/team#dev-shah" },
  "publisher": { "@id": "https://www.kautilya-pe.com/#organization" },
  "isPartOf": { "@type": "Blog", "name": "Kautilya Stories", "url": "https://www.kautilya-pe.com/stories" },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.kautilya-pe.com/stories/msp-buy-side-diligence" },
  "datePublished": "2026-08-14",
  "dateModified": "2026-08-14",
  "image": { "@type": "ImageObject", "url": "https://www.kautilya-pe.com/images/Dev.jpeg", "width": 1200, "height": 630 }
}
```
(Drop the `HowTo` block entirely; leave FAQ text visible on-page but treat the `FAQPage` JSON-LD as optional/no-benefit rather than something to invest further in.)
