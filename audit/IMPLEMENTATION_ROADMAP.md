# Implementation Roadmap

## How to use this roadmap

This plan follows the required implementation order. It does not imply that every task should start immediately: each phase should meet its exit criteria before the next phase is expanded. Priorities use P0–P3, and effort is relative: S, M, or L.

No P0 issue was confirmed. Phase 1 therefore begins with indexability verification and small technical corrections rather than emergency remediation.

## Phase 1 — Critical technical/indexability fixes

| Task | Priority | Impact | Effort | Dependency | Exact affected files/pages | Recommended action |
|---|---|---|---|---|---|---|
| Verify canonical indexing | P1 | Confirms whether the current six-page site can appear in Google and Bing and reveals exclusions that repository inspection cannot see | S | Access to Google Search Console and Bing Webmaster Tools; DNS or site verification if not already configured | `https://www.heshamali.com/`, `/projects`, all four `/projects/[slug]` URLs, `/sitemap.xml`, domain properties | Verify the `www` canonical property, submit the sitemap, inspect every canonical URL, record discovered/crawled/indexed status, and resolve only evidence-backed exclusions |
| Correct not-found metadata behavior | P2 | Removes contradictory canonical/index signals from 404 responses | S | None | `src/app/layout.tsx`; a new `src/app/not-found.tsx` if needed; all unknown URLs | Give the not-found experience explicit, minimal metadata so it does not inherit the homepage canonical/title; verify the final response remains a true 404 with `noindex` |
| Simplify apex redirect chain | P3 | Reduces one unnecessary HTTP redirect and makes host normalization cleaner | S | Access to domain/Vercel redirect configuration | `http://heshamali.com/*`, `https://heshamali.com/*`, `next.config.ts` or hosting settings | Route HTTP apex directly to HTTPS `www` in one hop while preserving the existing canonical host |
| Re-run production validation | P1 | Prevents regressions in static generation, metadata, sitemap, and project data | S | Completion of any Phase 1 code/config changes | `package.json` validation scripts; generated routes; live `robots.txt` and `sitemap.xml` | Run lint, project validation, production build, SEO validation, and live HTTP checks; document results before release |

### Phase 1 exit criteria

- Canonical property ownership and indexing state are documented in Google and Bing tools.
- Sitemap submission status is known.
- Unknown URLs return a clean 404 without homepage canonical ambiguity.
- Redirect behavior and validation checks pass after any change.

## Phase 2 — Positioning and site architecture

| Task | Priority | Impact | Effort | Dependency | Exact affected files/pages | Recommended action |
|---|---|---|---|---|---|---|
| Finalize the two-service model | P1 | Gives the site a clear commercial hierarchy and prevents overlapping pages | M | Owner confirmation of real service scope and terminology | `/`; planned `/services/salla-store-design`; planned `/services/salla-theme-development`; `src/data/portfolio.ts` | Define audience, inclusions, exclusions, inputs, and handoff for each service before writing pages |
| Add a substantive About destination | P1 | Strengthens trust, branded intent, and person-entity clarity | M | Approved biography, location/market wording, profile links, and any credentials | Planned `/about`; homepage About section; `src/data/portfolio.ts` | Create a focused professional profile that supports the offer and links to selected evidence without duplicating service copy |
| Clarify portfolio hierarchy | P2 | Preserves technical breadth without diluting the Salla proposition | S | Positioning decisions above | `/projects`; `src/app/projects/page.tsx`; `src/components/projects/ProjectFilters.tsx`; project content files | Present Salla work as primary commercial evidence and label the other items as broader technical experience |
| Resolve language strategy | P2 | Improves document-level language consistency and audience fit | M | Decision on Arabic-first versus fully localized English experience | `src/app/layout.tsx`; `src/app/projects/[slug]/page.tsx`; `content/projects/mithaq-wordpress-multisite.mdx`; `content/projects/hr-expert-club.mdx` | Near term, translate/reframe the two pages for Arabic readers; introduce `/en` and hreflang only if a complete English experience will be maintained |
| Update persistent navigation model | P2 | Makes primary content areas directly discoverable | M | Finalized service and About routes | `src/components/layout/site-header.tsx`; `src/components/motion/ActiveNavigation.tsx`; `/` | Plan links for services, projects, About, and contact while retaining useful homepage section jumps |

### Phase 2 exit criteria

- Each planned route has one distinct audience, intent, and objective.
- Service scopes are approved and non-overlapping.
- Arabic/English handling has one documented rule.
- Navigation reflects the intended hierarchy before new pages launch.

## Phase 3 — Core service pages

| Task | Priority | Impact | Effort | Dependency | Exact affected files/pages | Recommended action |
|---|---|---|---|---|---|---|
| Build the Salla store design page | P1 | Creates a destination for high-intent design/setup evaluation | L | Approved scope, examples, and service process from Phase 2 | Planned `src/app/services/salla-store-design/page.tsx`; related components/data; `/services/salla-store-design`; `/sitemap.xml` generation | Publish original Arabic content covering audience, deliverables, boundaries, process, inputs, proof, FAQs, and contact; add self-canonical metadata and relevant schema only after copy exists |
| Build the Salla theme development page | P1 | Creates a destination for customization and technical implementation intent | L | Approved technical scope and boundaries from Phase 2 | Planned `src/app/services/salla-theme-development/page.tsx`; related components/data; `/services/salla-theme-development`; `/sitemap.xml` generation | Explain configuration versus customization versus custom development, dependencies, performance/maintenance considerations, proof, and next step without duplicating the design page |
| Update sitemap and navigation for new pages | P1 | Ensures immediate internal discovery and consistent canonical exposure | S | Both pages ready for publication | `src/app/sitemap.ts`; `src/components/layout/site-header.tsx`; homepage service section; both service URLs | Add only live, indexable URLs; link them from relevant homepage content and persistent navigation; validate metadata and status codes |

### Phase 3 exit criteria

- Both service pages provide unique, decision-useful content.
- They are linked internally, self-canonical, included in the sitemap, and render fully without client interaction.
- Each page uses only factual scope and proof.

## Phase 4 — Entity / GEO improvements

| Task | Priority | Impact | Effort | Dependency | Exact affected files/pages | Recommended action |
|---|---|---|---|---|---|---|
| Create a stable entity graph | P2 | Makes relationships among person, website, profile, services, and work more explicit | M | About and service pages published; canonical host fixed | `src/app/layout.tsx`; planned `/about`; `src/app/projects/[slug]/page.tsx`; service pages | Give the Person a stable `@id`; add accurate `WebSite` and `ProfilePage` nodes; reference the same Person from CreativeWork; keep schema aligned with visible content |
| Validate external identity consistency | P2 | Improves corroboration of the named person and specialty | S | Access to LinkedIn, GitHub, and any controlled profiles | `src/data/portfolio.ts`; LinkedIn; GitHub; any approved external profiles | Align name, role, domain, and description where accurate; retain only profiles that genuinely identify the same person |
| Add breadcrumbs and structured context | P2 | Clarifies hierarchy for users and machines | M | Final route architecture | Project pages and both service pages; reusable breadcrumb component; related JSON-LD | Add visible breadcrumbs and matching `BreadcrumbList` schema with canonical URLs |
| Decide AI crawler policy | P3 | Makes training/search access an explicit owner decision | S | Owner preference | `src/app/robots.ts`; live `/robots.txt` | Keep Googlebot, Bingbot, and desired AI search crawlers accessible; decide GPTBot training access separately; document the rationale |
| Consider `llms.txt` only as supplementary | P3 | Provides optional machine-readable orientation but no indexing guarantee | S | Core pages, evidence, and crawler policy complete | Planned `public/llms.txt` or framework route; canonical public pages | If added, keep it concise and point only to canonical public pages; do not treat it as a ranking or citation mechanism |

### Phase 4 exit criteria

- One stable Person identity is referenced consistently.
- Structured data matches visible, verified content and passes validation.
- External profiles and crawler policy are intentionally maintained.

## Phase 5 — Case studies and proof

| Task | Priority | Impact | Effort | Dependency | Exact affected files/pages | Recommended action |
|---|---|---|---|---|---|---|
| Gather Sho9 evidence and approvals | P1 | Supplies the strongest missing trust asset for the primary offer | M | Client/owner access to scope records, visuals, dates, and outcomes | `/projects/sho9`; `content/projects/sho9.mdx`; approved image assets | Create an evidence inventory covering context, exact role, scope, constraints, decisions, screenshots, dates, and outcomes; record approval status |
| Rebuild the Sho9 narrative | P1 | Converts a thin project entry into decision-grade commercial proof | L | Approved evidence inventory | `content/projects/sho9.mdx`; `src/components/projects/ProjectHero.tsx`; project page sections; homepage featured-project section | Structure the page around context, need, role, work, decisions, visual evidence, verified outcome, ongoing work, related service, and CTA |
| Verify quantitative claims | P2 | Reduces trust and compliance risk from unsupported numbers | S | Source records or stakeholder confirmation | `content/projects/mithaq-wordpress-multisite.mdx`; generated metadata/schema | Document the source, timeframe, definition, and ownership context for the million-user claim; qualify or remove it if it cannot be supported |
| Deepen the remaining project pages | P2 | Improves technical credibility and makes broader experience more useful | L | Approved evidence or confidentiality boundaries | The two non-Sho9 MDX files; their project URLs; project images if available | Add specific responsibilities, constraints, decisions, and approved evidence; clearly state confidentiality where necessary rather than fabricating detail |
| Improve project-specific social previews | P2 | Makes shared project links more accurate and credible | M | Approved project visuals/branding | `src/app/projects/[slug]/page.tsx`; OG/X image generation; three project URLs | Generate relevant previews per project instead of reusing the homepage card when no cover exists |

### Phase 5 exit criteria

- Sho9 contains approved, specific, visual proof.
- Every material numerical claim has a documented source or has been revised.
- Project schema and social previews never claim more than the visible case study proves.

## Phase 6 — Internal linking

| Task | Priority | Impact | Effort | Dependency | Exact affected files/pages | Recommended action |
|---|---|---|---|---|---|---|
| Connect homepage to core destinations | P2 | Shortens discovery paths for services, projects, and About | S | Phases 2–5 pages live | `src/app/page.tsx`; homepage service, project, and About sections; site header | Add descriptive links to both service pages, `/projects`, `/about`, and the relevant Sho9 proof |
| Connect services and proof bidirectionally | P2 | Reinforces topical relationships and supports buyer evaluation | S | Service pages and Sho9 case study live | Both service pages; `/projects/sho9`; related MDX/components | Link each service to the relevant case-study evidence and link case-study deliverables back to the correct service |
| Add visible breadcrumbs | P2 | Improves orientation and parent-page discovery | M | Breadcrumb design and schema from Phase 4 | All service and project pages; shared layout/component | Render accessible breadcrumbs that match canonical hierarchy and structured data |
| Reassess project navigation | P3 | Avoids sending commercial visitors into unrelated work without context | S | Portfolio grouping finalized | `src/app/projects/[slug]/page.tsx`; project navigation component/data | Keep previous/next only if labels provide useful context; move toward topic-related work when more Salla cases exist |

### Phase 6 exit criteria

- Every indexable page has at least one strong contextual inbound link.
- Services, proof, About, archive, and contact form a coherent journey.
- Anchors explain their destinations without repetitive keyword stuffing.

## Phase 7 — Content expansion

| Task | Priority | Impact | Effort | Dependency | Exact affected files/pages | Recommended action |
|---|---|---|---|---|---|---|
| Establish an original-content standard | P2 | Prevents thin, generic expansion from weakening topical quality | S | Service pages and proof complete | Editorial guidance; future `/guides` or `/insights` content | Require firsthand examples, a defined audience/question, factual review, a related service, and a relevant proof link for every article |
| Publish a Salla configuration-versus-code guide | P3 | Answers a frequent qualification question and supports both services | M | Real examples and technical review | Planned guide URL; both service pages | Explain which changes can be handled in Salla settings and which require theme development, including limitations and decision criteria |
| Publish a pre-launch store checklist | P3 | Helps prospects prepare and supports store-design intent | M | Verified workflow from real projects | Planned guide URL; store design service page | Create a practical checklist covering content, catalog, navigation, mobile review, policies, analytics, and launch ownership |
| Publish maintenance-scope guidance | P3 | Clarifies the ongoing support proposition | M | Approved Sho9 maintenance details | Planned guide URL; Sho9; service pages | Explain what ongoing Salla maintenance can include, what it does not include, and when a one-off project is more appropriate |

### Phase 7 exit criteria

- Core commercial pages remain stronger and more complete than supporting articles.
- Every article is original, useful, and internally connected.
- No mass-generated glossary, location, or near-duplicate pages are published.

## Phase 8 — Performance / conversion optimization

| Task | Priority | Impact | Effort | Dependency | Exact affected files/pages | Recommended action |
|---|---|---|---|---|---|---|
| Establish analytics and conversion definitions | P2 | Enables evidence-based decisions and separates clicks from qualified leads | M | Privacy decision and analytics access | Sitewide layout; WhatsApp links; service pages; case studies; analytics/CRM configuration | Track page/CTA context, define a qualified inquiry, document consent/privacy implications, and avoid collecting unnecessary personal data |
| Clarify the WhatsApp handoff | P2 | Improves lead quality and lowers uncertainty at the final step | S | Approved inquiry process | Homepage CTA; service-page CTAs; case-study CTA; WhatsApp prefill if used | State what information to send and what the first conversation determines; promise response times only when operationally reliable |
| Measure Core Web Vitals in the field | P2 | Confirms whether current animation/hydration affects real users | M | Deployed representative pages and traffic or lab test setup | `/`; `/projects`; `/projects/sho9`; service pages; `src/app/layout.tsx`; motion components | Capture LCP, INP, and CLS on mobile; use lab traces for diagnosis; change code only where evidence identifies a bottleneck |
| Reduce unnecessary client hydration if confirmed | P3 | Can improve responsiveness and reduce JavaScript work | M | Field/lab evidence from the prior task | `src/app/layout.tsx:81`; `src/components/motion/*`; client-marked components | Narrow the sitewide Motion provider or replace nonessential client animation only if profiling shows material benefit; preserve reduced-motion behavior |
| Optimize new case-study media | P2 | Protects LCP and CLS while adding needed visual proof | M | Approved project imagery | `public/`; project content; `src/components/projects/ProjectHero.tsx`; image components | Export correctly sized modern formats, set accurate dimensions and `sizes`, use meaningful alt text, and reserve priority loading for true above-the-fold media |
| Remove unused heavy assets from deployment | P3 | Reduces repository/deployment weight, though not current page transfer | S | Confirm asset is genuinely unused and no future dependency exists | `public/logo.png` | Replace with an optimized used asset or remove it in a controlled change after reference checks |
| Run focused conversion tests | P3 | Improves qualified inquiries after a reliable baseline exists | M | Analytics baseline and sufficient traffic | Homepage, service pages, Sho9, CTA copy/placement | Test one decision element at a time—proof placement, expectation copy, or qualification wording—and judge by qualified conversations, not clicks alone |

### Phase 8 exit criteria

- Performance decisions use field or reproducible lab evidence.
- CTA and qualified-lead measurement exists with privacy safeguards.
- Added media is optimized and accessible.
- Conversion tests optimize lead quality, not vanity engagement.

## Recommended release sequence

1. Verify indexability and clean technical ambiguity.
2. Approve positioning, service boundaries, language, and route hierarchy.
3. Publish both service pages and About.
4. Connect a stable entity graph and breadcrumbs.
5. Publish the evidence-led Sho9 case study and validate other claims.
6. Complete the internal-link journey.
7. Add a small number of firsthand supporting guides.
8. Measure and optimize performance and conversion.

The highest-leverage work is not more page volume. It is a verified indexable foundation, two precise service pages, one credible About page, and a materially stronger Sho9 case study.
