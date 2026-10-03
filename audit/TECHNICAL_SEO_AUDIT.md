# Technical SEO Audit

## Audit basis

This audit combines:

- full repository inspection;
- a clean production build on 2026-09-28;
- live HTTP response checks against both apex and `www` origins;
- generated HTML inspection for every indexable route;
- a live desktop/mobile DOM and console inspection.

Status labels used below:

- **Confirmed:** directly observed in code, build output, or live response.
- **Likely risk:** supported by implementation evidence but needs field measurement.
- **Requires external verification:** cannot be concluded from the repository or a single crawl.

## 1. Architecture and rendering

| Area | Finding | Evidence |
|---|---|---|
| Framework | Next.js 16.3 App Router, React 19, TypeScript | `package.json` |
| Styling | Tailwind CSS 4 through PostCSS; Arabic-safe system font stack | `package.json`; `src/app/globals.css` |
| Content | Project MDX imported server-side and validated at build time | `src/lib/projects/get-projects.ts`; `src/lib/projects/project-schema-core.mjs` |
| Rendering | Homepage/archive static; four project pages SSG | `src/app/page.tsx`; `src/app/projects/[slug]/page.tsx:22-27`; production build route table |
| Build | Next webpack production build | `package.json` → `next build --webpack` |
| Hosting | Vercel | live `server: Vercel` response header |
| SEO utilities | Next Metadata API plus local constants/validation script | `src/app/layout.tsx:12-49`; `src/lib/seo.ts`; `scripts/validate-seo.mjs` |
| Analytics | None found | repository-wide search for common analytics integrations |

The rendering model is strong for crawlability: every priority fact and link is in prerendered HTML. No essential service copy depends on client-side JavaScript.

## 2. Crawlability

### Confirmed strengths

- `https://www.heshamali.com/` returns 200.
- `https://heshamali.com/` returns a permanent 308 to `https://www.heshamali.com/`.
- HTTP requests redirect to HTTPS.
- Trailing-slash variants return a 308 to the non-trailing form.
- The legacy grouped Salla route returns a 308 to `/projects/sho9` through `next.config.ts:6-13`.
- Unknown routes return a true 404, not a soft 404.
- `robots.txt` returns 200 and allows `/` for `User-Agent: *`.
- CSS/JS/image resources are not blocked by robots.
- Navigation uses crawlable anchors/Next links. The homepage’s core Sho9 detail page is directly linked.
- No pagination, calendar archives, faceted URL generation, or other crawl trap was found.

### Findings

#### [P3][Confirmed] HTTP apex uses a two-hop redirect

Observed chain:

1. `http://heshamali.com` → `https://heshamali.com/`
2. `https://heshamali.com/` → `https://www.heshamali.com/`

This is not a material indexing blocker, but a direct HTTP-apex → HTTPS-www redirect would remove one hop. This is a Vercel/domain configuration task rather than an application-code task.

#### [P2][Confirmed] The global 404 inherits conflicting root metadata

The generated 404 contains:

- Next’s `noindex` directive;
- the root `index, follow` directive;
- the homepage canonical;
- the homepage title/description before the 404 title.

This occurs because root metadata is global (`src/app/layout.tsx:12-49`) and there is no custom root `src/app/not-found.tsx` with explicit 404 metadata. Search engines generally obey the more restrictive noindex, so this is not a P0/P1 issue, but the head is noisy and semantically incorrect.

**Recommended fix:** add a localized global not-found page and ensure the 404 response has one unambiguous `noindex, follow` instruction and no homepage canonical.

#### [P2][Requires external verification] Index coverage is not yet evidenced

Focused searches for the domain, exact canonical URL, and Sho9 URL returned no results during this audit. The deployment appears recent, so this does not prove a technical defect.

**Required check:** Google Search Console URL Inspection and Pages reports, plus Bing Webmaster Tools. Confirm whether URLs are discovered, crawled, indexed, or excluded and act on the reported reason.

## 3. Indexability and duplicate control

### Confirmed strengths

- Root metadata explicitly allows indexing (`src/app/layout.tsx:45-48`).
- Each indexable route has a self-referencing canonical.
- Canonicals resolve to the live `www` HTTPS origin through `metadataBase` (`src/app/layout.tsx:13`) and `siteUrl` (`src/data/portfolio.ts:3-7`).
- Query parameters inherit the clean canonical path rather than self-canonicalizing parameter variants.
- Trailing slashes and the old Salla route are normalized with permanent redirects.
- `dynamicParams = false` prevents arbitrary project slugs from becoming thin indexable pages (`src/app/projects/[slug]/page.tsx:22`).
- Draft projects are filtered from pages and sitemap by `getAllPublishedProjects()`.

### Thin-content risk

The project pages are unique and indexable, but all four are short. Sho9 is commercially important yet currently repeats the same two supported facts in metadata, overview, contributions, and body (`content/projects/sho9.mdx:15-33`). The other three have more detail but no linked evidence. This is primarily a content/proof issue, not a canonical or rendering issue.

## 4. Metadata audit

| URL | Title | Description | Canonical | OG/X | Assessment |
|---|---|---|---|---|---|
| `/` | `هشام علي | مطور سلة — تصميم وتطوير متاجر سلة` | Specific and commercial | Correct | Complete | Strong |
| `/projects` | `أعمال مختارة | هشام علي` | Mentions Salla and other technical work | Correct | Complete | **P2:** HTML title is more generic than the OG title and omits the main specialization |
| `/projects/sho9` | `شوب ستور — Sho9 | هشام علي` | Accurate but brief | Correct | Complete | Good base; expand after the case study gains real detail |
| `/projects/albasit-crm` | `Albasit CRM | هشام علي` | Relevant to the project | Correct | Complete | Accurate but off the core Salla topic |
| `/projects/mithaq-wordpress-multisite` | Project-specific | Relevant | Correct | Complete | Accurate but off the core topic |
| `/projects/hr-expert-club` | Project-specific | Relevant | Correct | Complete | Accurate but off the core topic |

Project metadata is generated at `src/app/projects/[slug]/page.tsx:29-66`. All projects without a cover use the same generic social image (`:37-47`), which limits proof and share differentiation.

### [P2][Confirmed] Generic archive title

`src/app/projects/page.tsx:13-34` defines a strong OG title but passes only `"أعمال مختارة"` to the title template, producing `أعمال مختارة | هشام علي` in HTML. Use a concise title that includes Salla/work intent without stuffing, for example `أعمال متاجر سلة ومشروعات مختارة`.

### [P2][Confirmed] Reused social image for all image-less projects

The fallback in `src/app/projects/[slug]/page.tsx:37-47` gives Sho9 and the unrelated technical projects the same homepage card. Once approved images exist, create project-specific social proof images or use the real cover.

## 5. HTML semantics and accessibility

### Confirmed strengths

- Every generated indexable page has exactly one H1.
- Landmarks include header, nav, main, article/section, aside, and footer.
- Skip links are present.
- Navigation and CTAs are anchors rather than button-like JavaScript controls.
- Filter controls are correctly implemented as buttons (`src/components/projects/ProjectFilters.tsx:26-55`).
- The mobile menu traps focus and restores it.
- Headings follow a logical H1 → H2 → H3 sequence on the homepage and case-study pages.
- Important copy is real HTML text. The visual placeholders are supplementary, not the only source of facts.

### [P2][Confirmed] Document-level language mismatch on English case studies

The root element is always Arabic RTL (`src/app/layout.tsx:73`). English case studies scope their main content to English LTR (`src/app/projects/[slug]/page.tsx:76,97-103`), which helps assistive technology but does not change the document language in the head/root.

**Recommendation:** either translate/reframe the secondary cases into Arabic (best fit for the stated market) or introduce true locale routing only if a complete English experience is strategically justified. Do not add hreflang for partial translations.

## 6. Sitemap

The live sitemap accurately contains:

- homepage;
- `/projects`;
- four published project pages.

It excludes redirects, 404s, utility routes, social-image routes, and draft content. Generation is tied to the project source (`src/app/sitemap.ts:5-24`), which reduces drift.

### [P3][Recommendation] Add reliable `lastModified` values later

No `lastmod` is present. This is acceptable. Add it only after content records have a trustworthy update date; do not use build time for every URL because that would falsely suggest all pages changed on every deployment.

## 7. Robots and crawler access

`src/app/robots.ts:4-12` emits a wildcard allow rule. Therefore Googlebot, Bingbot, OAI-SearchBot, and GPTBot are all currently allowed. See `GEO_AI_SEARCH_AUDIT.md` for the search-versus-training distinction.

No crawler-specific block or accidental disallow was found.

## 8. Core Web Vitals and performance risk

No Lighthouse or CrUX score is invented here.

### Confirmed from code/build

- Pages are prerendered and served from Vercel cache, reducing TTFB risk.
- No remote font requests exist; the CSS uses system fonts.
- No third-party analytics, chat widget, advertising script, or tag manager loads.
- Current homepage LCP is likely text/paint because there is no real Sho9 cover image.
- Project images use `next/image`, intrinsic metadata, aspect ratios, `sizes`, and alt validation.
- Generated live HTML sizes observed: homepage ~54 KB, projects archive ~39 KB, Sho9 ~41 KB.
- Sitewide code imports a client `MotionProvider` (`src/app/layout.tsx:81`) and multiple Motion components. The homepage references shared raw JS chunks including ~239 KB, ~201 KB, ~137 KB, and ~19 KB files before compression/deduplication.

### Likely risks

| Metric | Risk | Evidence | Severity |
|---|---|---|---|
| INP | More hydration/animation JS than necessary for a static sales site | sitewide Motion provider and animated navigation/cards | P2, likely risk |
| LCP | Two `priority` usages can compete if the same Sho9 cover is added to hero and featured section | `src/components/sections/hero.tsx`; `src/components/sections/projects.tsx` | P2, future likely risk |
| LCP | A large uncompressed storefront screenshot could become the LCP bottleneck | image system supports large covers but no approved asset yet | P2, future likely risk |
| CLS | Low current risk | explicit aspect ratios/dimensions and stable section structure | Strength |
| TTFB | Low current risk | SSG plus Vercel cache hits | Strength |

### Requires runtime testing

- PageSpeed Insights mobile lab tests for homepage and Sho9.
- CrUX field data when traffic is sufficient.
- Real Saudi/GCC mobile-network test for LCP/INP.
- JavaScript coverage/profiling to determine whether removing the root Motion provider materially improves interaction cost.

## 9. Image handling

- Runtime images use `next/image`.
- Project image files are confined to per-project directories, decoded with Sharp, and required to have dimensions and alt text.
- Every current project has `cover: null` and `gallery: []`, so the site has no visual implementation evidence.
- `public/logo.png` is ~2.06 MB but has no runtime references. It is repository/deployment bloat, not a current LCP issue.

## 10. Validation results

- `npm run lint` — passed.
- `npm run projects:validate` — passed; four projects validated.
- `npm run build` — passed; all routes prerendered/SSG as expected.
- `npm run seo:validate` — passed.
- Live browser console — no warnings or errors observed.
- Mobile live check at 390 × 844 — no horizontal overflow; CTA height 48 px and appears above the fold.

## Technical priority list

1. Verify index coverage in webmaster tools — P1, external.
2. Clean global 404 metadata — P2.
3. Correct document-language strategy for English cases — P2.
4. Add real, optimized case-study images before changing image priorities — P1/P2.
5. Measure then reduce Motion/client JS where justified — P2.
6. Improve archive title and project social images — P2.
7. Simplify the HTTP-apex redirect — P3.
