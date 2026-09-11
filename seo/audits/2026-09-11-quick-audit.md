# Quick Technical SEO Audit — kautilya-pe.com
**Date:** 2026-09-11
**Method:** curl-only spot check (title/meta/canonical/OG, headers, robots.txt, sitemap.xml)

## Findings

- **Canonical/domain mismatch via temporary redirect:** `https://www.kautilya-pe.com/` returns `HTTP/2 307` to `https://www.kautilya.pe/`, but the page's own `<link rel="canonical">` still points at `https://www.kautilya-pe.com` (the old domain). A 307 is *temporary* — if the move to `kautilya.pe` is permanent, this should be a 301 and the canonical tag should target the new live domain, otherwise ranking signals stay split between the two domains.
- Everything else checked (viewport meta, title, meta description, OG tags, HSTS header, robots.txt, sitemap.xml) is present and correctly formed after following the redirect.

## Not checked (out of scope for this quick pass)
Full crawl, Core Web Vitals, schema validation, content quality — see prior full audits in this folder.
