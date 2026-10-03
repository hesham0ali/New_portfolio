# GEO / AI Search Audit

## Scope and evidence standard

This review evaluates whether the site gives search engines and AI answer systems a clear, extractable, and corroboratable picture of Hesham Ali, his specialty, his services, and his work.

- **Confirmed**: supported by the repository, generated output, or a live HTTP check.
- **Likely**: a reasonable risk or opportunity that needs field data or external tools to confirm.
- **Recommendation**: a proposed improvement, not an existing fact.
- **External verification required**: requires Google Search Console, Bing Webmaster Tools, analytics, or third-party profile access.

## Executive assessment

The site has a strong starting entity statement: a named person, a narrow specialty around Salla stores, consistent contact details in structured data, and a real commercial project. The content is server-rendered and easy to extract. The main weakness is not crawler access; it is insufficient depth and corroboration. There is no dedicated About/Profile page, no dedicated service pages, no stable entity graph across schemas, and the strongest commercial case study lacks visual and outcome evidence.

No P0 GEO blocker was found.

## Entity clarity

### What is clear

- **Confirmed:** The homepage identifies `هشام علي` and positions him as a Salla specialist rather than a generic developer.
- **Confirmed:** The visible homepage explains the core offer: store setup, theme work, integrations, and ongoing technical support.
- **Confirmed:** The global `Person` JSON-LD includes the name, role, email, location, LinkedIn, and GitHub (`src/app/layout.tsx:51-69`).
- **Confirmed:** The Sho9 project creates a relevant connection between the person, Salla work, and ongoing maintenance.
- **Confirmed:** Core identity and service copy is present in server-rendered HTML rather than being hidden behind client-only interaction.

### What is ambiguous or thin

- **P1 — Confirmed:** There is no `/about` page. The short homepage About section does not fully answer who Hesham is, which markets he serves, what he is specifically qualified to do, or how his work differs from a general web developer.
- **P1 — Confirmed:** There are no dedicated pages that define the two main commercial entities/services: Salla store design and Salla theme development.
- **P2 — Confirmed:** The global `Person` schema has no stable `@id`, so project-level author references cannot point back to one canonical entity.
- **P2 — Confirmed:** There is no `WebSite` schema connecting the domain to the person, and no `ProfilePage` schema because no dedicated profile page exists.
- **P2 — Confirmed:** Three of four project pages are unrelated or only loosely related to Salla. This makes the topical footprint broader than the stated commercial positioning.
- **External verification required:** LinkedIn, GitHub, and any other public profiles should be checked for consistent spelling, Arabic/English naming, role, location, domain link, and current service description.

## Structured data assessment

| Schema | Current state | Assessment | Recommended use |
|---|---|---|---|
| `Person` | Present sitewide | Relevant and valid in concept, but not modeled as a reusable entity | Add a stable `@id`, canonical URL, image if approved, and consistent `sameAs` references |
| `CreativeWork` | Present on project pages | Appropriate for portfolio work, but author is only a name | Reference the Person `@id`; add only verified dates, images, and URLs |
| `WebSite` | Absent | Useful for connecting domain and owner | Add once the entity graph is designed |
| `ProfilePage` | Absent | Appropriate only for a substantive About page | Add to `/about` after that page exists |
| `BreadcrumbList` | Absent | Useful on project and future service pages | Add together with visible breadcrumbs |
| `Service` | Absent | Potentially useful on real service pages | Use only when each page describes a genuine, defined service |
| `Organization` / `LocalBusiness` | Absent | Not justified by the current evidence | Do not add unless there is a real organization/business entity that fits the type |
| `Review` / `AggregateRating` | Absent | Correctly absent | Do not add without genuine, attributable reviews |

Structured data should support visible content, not compensate for missing content. The priority is to create strong pages first, then describe them accurately in JSON-LD.

## AI crawler accessibility

`src/app/robots.ts:4-12` publishes a wildcard allow rule. The live `robots.txt` also exposes the canonical host and sitemap.

| Crawler or system | Current access | Meaning |
|---|---|---|
| Googlebot | Allowed | Eligible for Google Search crawling; indexing is not guaranteed |
| Bingbot | Allowed | Eligible for Bing Search crawling; indexing is not guaranteed |
| OAI-SearchBot | Allowed through wildcard | Eligible for OpenAI search discovery where applicable; citations are not guaranteed |
| GPTBot | Allowed through wildcard | Training-related access is permitted; this is separate from search visibility |

**Recommendation, P3:** Decide explicitly whether GPTBot training access matches the owner’s preference. Blocking GPTBot would not inherently require blocking OAI-SearchBot. Do not change the policy merely for symbolic “AI SEO”; preserve access for search crawlers if discovery is desired.

## Extractability and answer readiness

### Strengths

- **Confirmed:** Static generation provides complete, readable HTML for all six indexable pages.
- **Confirmed:** Pages use one H1 and meaningful section headings.
- **Confirmed:** The homepage contains concise statements that can answer “Who is Hesham Ali?” and “What does he do?” at a basic level.
- **Confirmed:** Contact via WhatsApp is available without requiring a form or login.
- **Confirmed:** There are no blocking overlays, consent walls, or third-party script dependencies in the core content path.

### Gaps

- **P1 — Confirmed:** The site cannot answer service-specific questions in depth because the services exist only as homepage sections.
- **P1 — Confirmed:** The Sho9 case study does not provide enough concrete evidence for an answer system to confidently summarize the problem, decisions, implementation, and result.
- **P2 — Confirmed:** The About copy is too short to establish a robust biographical/profile entity.
- **P2 — Confirmed:** The claim of more than one million users appears without linked, onsite evidence.
- **P2 — Likely:** Repetition of thin project facts is less useful for retrieval than distinct, factual sections answering specific questions.
- **P3 — Confirmed:** `/llms.txt` returns 404. This is optional and is not a substitute for crawlable pages, a sitemap, or search-engine verification.

## Citability and corroboration

The site currently supplies first-party statements but limited corroborating evidence.

- **Confirmed:** LinkedIn and GitHub are present in `sameAs`, which is a useful start.
- **Confirmed:** The Sho9 live URL is available from its project page.
- **Confirmed:** No testimonials, client quotations, screenshots, documented metrics, or dated artifacts are published.
- **External verification required:** Confirm whether Sho9, Salla partner directories, LinkedIn recommendations, GitHub profiles, interviews, or client-owned pages can legitimately reference Hesham and the work.
- **Recommendation, P1:** Add only evidence that can be approved and traced: client-approved screenshots, a clear role statement, specific delivered tasks, verified dates, and documented outcomes.
- **Recommendation, P2:** Where a claim is not publicly verifiable, qualify it carefully or remove the number rather than amplifying it through schema.

## Search and AI visibility verification

A focused public web search during this audit did not return reliable results for the exact domain or tested URLs. This is **not proof of non-indexing** because public result sampling can be incomplete and personalized.

- **P1 — External verification required:** Inspect every canonical URL in Google Search Console and Bing Webmaster Tools.
- **P1 — External verification required:** Confirm ownership of the `www` canonical property, submit the sitemap, inspect discovered/crawled/indexed status, and review any exclusions.
- **P1 — External verification required:** Check whether the apex and `www` properties are consolidated correctly and whether any old URLs receive impressions.
- **P2 — External verification required:** Track branded queries in Arabic and English, plus service-intent queries around Salla store design and theme development.

## Recommended answer-oriented content structure

Each core page should make its subject explicit without keyword stuffing:

1. A short, direct definition of the person, service, or project.
2. Who it is for and which problem it solves.
3. Concrete scope and deliverables.
4. Process or decision criteria.
5. Evidence: screenshots, links, verified facts, and outcomes.
6. Constraints and boundaries—what is and is not included.
7. A clear next step.

This structure helps human decision-makers first and also produces passages that search and answer systems can quote or summarize accurately.

## Prioritized GEO actions

1. **P1:** Verify all canonical URLs and sitemap status in Google Search Console and Bing Webmaster Tools.
2. **P1:** Publish distinct Salla store design and Salla theme development pages with genuine scope, process, and evidence.
3. **P1:** Expand Sho9 into a documented case study with approved visuals and verifiable outcomes.
4. **P1:** Create a substantive About page and connect it to a stable Person entity.
5. **P2:** Build a coherent `Person` → `WebSite` → `ProfilePage` → `CreativeWork` schema graph using stable `@id` values.
6. **P2:** Verify, qualify, or remove unsupported quantitative project claims.
7. **P2:** Strengthen consistent external profiles and links where the owner controls them.
8. **P3:** Consider `llms.txt` only after core content, indexing, evidence, and crawler policy are settled.
