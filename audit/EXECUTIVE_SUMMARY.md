# Executive Summary

Audit date: 2026-09-28  
Scope: repository, generated production build, and the live deployment at `https://www.heshamali.com`  
Mode: audit only; no production code was changed

## Decision summary

The site has a sound technical base and a clear conversion proposition. It is crawlable, statically rendered, mobile-friendly, canonicalized to the `www` HTTPS origin, and explicit about the core association **هشام علي = مطور سلة = تصميم وتطوير متاجر سلة**. The homepage answers what Hesham does and presents a WhatsApp CTA early. There are no confirmed P0 crawl or indexability defects.

The principal constraint is not a technical SEO failure. It is an **authority and evidence gap**:

- the entire Salla service proposition lives on one homepage rather than on pages that satisfy distinct commercial intents;
- Sho9 is the only verified Salla proof, but its case study has no approved screenshots, problem statement, implementation detail, or documented outcome;
- there is no dedicated About/Profile page that consolidates the person entity, experience, market, proof, and external profiles;
- internal linking cannot yet form a Salla topic cluster because service pages and guides do not exist;
- the live domain did not appear in the focused web-search checks performed during this audit. That is **not proof of non-indexing**, especially because the redesign is recent; Google Search Console and Bing Webmaster Tools must confirm discovery, indexing, and query impressions.

The immediate strategy should therefore be: **verify indexing, publish two justified Salla service pages, deepen Sho9 with real evidence, create an authoritative About page, and connect those assets through contextual internal links and conservative structured data.**

## Architecture summary

- **Framework:** Next.js 16.3 App Router, React 19, TypeScript, Tailwind CSS 4, MDX, Motion, Sharp.
- **Rendering:** homepage and archive are prerendered static pages; four project routes are SSG via `generateStaticParams`; metadata routes generate robots, sitemap, icons, and social images.
- **Content system:** validated MDX files in `content/projects/`; image metadata is checked at build time.
- **Hosting:** Vercel is confirmed by live response headers. Static pages return `x-nextjs-prerender: 1` and were cache hits during testing.
- **SEO implementation:** Next Metadata API, canonical URLs, Open Graph, X cards, `Person` JSON-LD, per-project `CreativeWork` JSON-LD, robots, sitemap, and a local SEO validation script.
- **Localization:** Arabic RTL root document; English project content is scoped with `lang="en"` and `dir="ltr"` on the main region, but there is no locale routing or hreflang.
- **Analytics:** no analytics or conversion-event implementation was found.

## Severity overview

### P0 — Critical

No P0 issues were confirmed.

### P1 — High

1. **Commercial search intent has no dedicated landing pages.** Homepage sections mention design, setup, theme customization, and UX, but there is no indexable page with enough depth to satisfy either “تصميم متجر سلة” or “تخصيص/تطوير ثيم سلة” as a distinct intent.
2. **Sho9 proof is materially incomplete.** The page confirms platform, role, ongoing maintenance, and a live URL, but `cover` is null and `gallery` is empty. It does not explain the original need, concrete implementation decisions, constraints, or verified outcome.
3. **The person entity lacks an authoritative Profile/About page.** `Person` schema exists, but users and retrieval systems have only a short homepage section, two `sameAs` profiles, and no single page that consolidates biography, specialization, market, tools, and linked evidence.
4. **Index/discovery status requires immediate external verification.** Focused searches for the domain and exact URLs returned no results. Confirm in Search Console/Bing before interpreting this as an indexing problem.

### P2 — Medium

- The `/projects` archive mixes one Salla case with three unrelated technical cases, weakening topical focus.
- All case studies lack screenshots; three lack live or repository links; two include strong quantitative claims without evidence linked on the site.
- The current link graph has no service-to-case-study or guide-to-commercial relationships.
- `Person` and `CreativeWork` schema are valid-looking but form disconnected objects without stable `@id` references or a `WebSite`/`ProfilePage` graph.
- English project pages inherit `<html lang="ar" dir="rtl">`; nested English regions mitigate rendering but do not make the document language fully accurate.
- The global 404 inherits homepage canonical and index metadata in addition to Next’s `noindex`, producing contradictory head signals.
- Motion is loaded sitewide. The generated homepage references sizeable shared JavaScript chunks for a mostly static marketing experience; runtime impact requires field testing.
- No WhatsApp click or lead-source measurement exists.

### P3 — Low

- `http://heshamali.com` redirects through two hops before reaching the canonical `www` HTTPS URL.
- Sitemap entries have no `lastmod`; add it only when reliable update dates exist.
- `llms.txt` is absent. This is optional and not a proven ranking factor.
- The unused 2 MB `public/logo.png` is repository bloat, not a current page-performance issue.

## What already works well

- Live URLs return correct 200/308/404 status codes.
- Apex HTTPS redirects to the canonical `www` origin; trailing slashes normalize consistently.
- `robots.txt` allows crawling and exposes the sitemap.
- The sitemap contains only the six current canonical/indexable pages.
- Every generated indexable HTML page has one H1, a self-referencing canonical, a description, Open Graph data, and an X card.
- Important identity, service, Sho9, and contact facts are real server-rendered HTML, not image-only or interaction-gated content.
- The homepage CTA appears at approximately 512 px from the top in a 390 × 844 viewport; the first Sho9 proof card starts at approximately 668 px. No horizontal overflow or console warnings were found.
- Images, when added through the project system, require alt text and validated intrinsic dimensions.
- The implementation avoids fake ratings, reviews, partnerships, and LocalBusiness markup.

## Top 10 Actions

1. **Verify index coverage and discovery in Google Search Console and Bing Webmaster Tools.** Submit the current sitemap, inspect the homepage and Sho9 URL, and record any crawl/indexing reason before changing technical controls.
2. **Create a focused Salla store design landing page.** Cover store structure, homepage/category/product presentation, responsive UX, deliverables, process, Sho9 evidence, and WhatsApp next step. Do not duplicate the homepage verbatim.
3. **Create a distinct Salla theme customization/development page.** Target the technical intent around Theme, CSS, JavaScript, responsive fixes, and implementation boundaries. Link it to Sho9 only where supported.
4. **Turn Sho9 into evidence-led proof.** Add approved screenshots, the verified business need, specific implementation work, constraints, maintenance scope, and outcome only if documented.
5. **Create an authoritative About/Profile page.** Consolidate Hesham’s full name, Salla specialization, service market, working model, supported tools, Sho9 reference, and external profiles.
6. **Build the commercial internal-linking model.** Homepage → service pages/About/Sho9; service pages → Sho9 and contact; Sho9 → relevant service pages; About → service and work; future guides → the relevant service page.
7. **Strengthen the entity/schema graph conservatively.** Add stable `@id` links for Person and WebSite, add `ProfilePage` only after `/about` exists, connect project authors to the Person `@id`, and add BreadcrumbList to project/service pages.
8. **Audit and reframe the three non-Salla cases.** Verify the `5,000+` and `1M+` claims, add evidence where publishable, and visually subordinate these pages to the Salla specialization.
9. **Add privacy-conscious conversion measurement.** Track WhatsApp CTA clicks by placement and landing page; document the analytics tool and add privacy disclosure if data collection warrants it.
10. **Run field performance tests after content/assets are added.** Use PageSpeed Insights/CrUX and real-device testing; then reduce sitewide Motion/hydration or image priority only where measured evidence supports it.

No fixes should be implemented until this audit is approved.
