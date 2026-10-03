# Content and Search Intent Audit

## Assessment framework

This audit evaluates whether each indexable page has a distinct audience, query intent, topic, and conversion purpose. It does not recommend mass-producing pages or forcing exact-match keywords into Arabic copy.

## Current page inventory

| URL | Current topic | Likely intent served | Primary audience | Current objective | Clarity |
|---|---|---|---|---|---|
| `/` | Hesham Ali as a Salla-focused developer | Branded discovery; initial service evaluation | Salla store owner or manager | Establish fit and start a WhatsApp conversation | Strong positioning, limited depth |
| `/projects` | Portfolio archive | Proof/research | Prospective client or recruiter | Browse work | Clear archive, but mixed topical signal |
| `/projects/sho9` | Salla store work and maintenance | Commercial proof | Salla decision-maker | Validate experience and contact | Relevant but under-documented |
| `/projects/albasit-crm` | CRM engineering | Technical portfolio proof | Recruiter/technical evaluator | Demonstrate engineering breadth | Clear project summary; weak commercial fit with current positioning |
| `/projects/mithaq-wordpress-multisite` | WordPress multisite | Technical portfolio proof | Recruiter/technical evaluator | Demonstrate scale experience | Clear summary; claim needs evidence |
| `/projects/hr-expert-club` | WordPress/LMS work | Technical portfolio proof | Recruiter/technical evaluator | Demonstrate implementation experience | Clear summary; no outcome evidence |

## Homepage content

### What works

- **Confirmed:** The hero states a narrow specialty and is more credible than generic “full-stack developer” positioning.
- **Confirmed:** It identifies an Arabic-speaking audience and a concrete platform, Salla.
- **Confirmed:** The page provides a service overview, working process, featured project, About summary, and contact CTA.
- **Confirmed:** The first commercial proof and WhatsApp CTA appear early on mobile.
- **Confirmed:** The Arabic is generally natural and avoids obvious keyword stuffing.

### Gaps

- **P1 — Confirmed:** Service descriptions are summaries, not complete answers to high-intent service questions.
- **P2 — Confirmed:** The page does not clearly define deliverables, project boundaries, typical prerequisites, or what happens after a WhatsApp inquiry.
- **P2 — Confirmed:** The About content is too brief to establish experience, market context, working style, or credibility in depth.
- **P2 — Confirmed:** The featured project establishes relevance but not measurable or visual proof.
- **P3 — Recommendation:** Add concise market/location wording only if it reflects actual service coverage. Do not create multiple near-duplicate city/country pages.

## Portfolio archive content

- **Confirmed:** `/projects` is a useful complete-work archive and should remain the single archive URL.
- **P2 — Confirmed:** Its generated HTML title is `أعمال مختارة | هشام علي`, while its social title is more specific. The visible and metadata framing should consistently explain whether the page represents Salla work, broader engineering work, or both.
- **P2 — Confirmed:** Only one of four projects directly supports the homepage’s Salla specialist positioning.
- **Recommendation:** Keep the broader technical work, but group or label it clearly—for example, “متاجر سلة” and “خبرات تقنية سابقة”—so breadth does not obscure the primary offer.
- **Recommendation:** Do not create a second `/work` archive. It would duplicate `/projects` without serving a distinct intent.

## Project page content

### Sho9

- **Confirmed:** This is the most commercially relevant case study.
- **Confirmed:** It states the platform, role, link, and ongoing maintenance relationship.
- **P1:** It does not explain the business need, starting condition, constraints, concrete work completed, major decisions, or verified impact.
- **P1:** It has no screenshots or annotated evidence.
- **P2:** The short body repeats metadata rather than adding unique detail.

### Albasit CRM

- **Confirmed:** It explains the product type and technical contribution.
- **P2:** The `5,000+` record statement lacks linked or contextual evidence.
- **P2:** No screenshots, repository link, live link, outcome, or stakeholder quote are supplied.

### Mithaq WordPress Multisite

- **Confirmed:** It communicates experience with a high-scale WordPress environment.
- **P2:** The claim of more than one million users is material and currently unsupported onsite.
- **P2:** The body repeats the scale statement without explaining the source, timeframe, or exactly what Hesham owned.

### HR Expert Club

- **Confirmed:** It describes WordPress/LMS implementation responsibilities.
- **P2:** It has no visual proof, external link, documented result, or detailed implementation narrative.

## Language and terminology

- **Confirmed:** The main commercial experience is Arabic and uses familiar platform terminology such as Salla and theme development.
- **Confirmed:** Three project pages are written in English while the document root remains `lang="ar" dir="rtl"`; only the main content changes to English/LTR. This weakens document-level language clarity.
- **P2 — Recommendation:** Either translate/reframe these portfolio pages for the primary Arabic audience, or introduce a complete English localization strategy later. Do not add `/en` or hreflang for a handful of isolated pages.
- **Recommendation:** Use Arabic phrases people naturally use—such as `تصميم متجر سلة`, `تطوير ثيم سلة`, and `تخصيص متجر سلة`—only where they precisely describe the content. Preserve useful English technical terms when they are the normal industry language.

## Missing core pages

### 1. `/services/salla-store-design` — P1

**Primary intent:** A store owner evaluating design, setup, and storefront presentation on Salla.

Suggested content scope:

- Who the service is for.
- What “store design” includes and excludes.
- Store structure, navigation, merchandising, and mobile considerations.
- Required client inputs.
- Working process and review stages.
- Relevant Sho9 evidence.
- Frequently asked decision questions.
- Contact next step.

### 2. `/services/salla-theme-development` — P1

**Primary intent:** A store owner or team that needs theme customization, front-end development, or technical implementation beyond standard settings.

Suggested content scope:

- Difference between configuration, customization, and custom theme development.
- Typical technical tasks and constraints.
- Performance, responsive behavior, and maintainability considerations.
- Integration boundaries and dependencies.
- Development and handoff process.
- Relevant proof.
- Contact next step.

These two pages should not repeat each other. The design page answers presentation and customer-experience needs; the development page answers customization and implementation needs.

### 3. `/about` — P1

**Primary intent:** Branded research and trust validation.

It should include a concise professional story, current specialty, relevant experience, working principles, location/markets served if accurate, links to verified profiles, and a clear route to contact. It should not be a long autobiography.

### 4. `/contact` — P3 / optional

A dedicated page is useful only if it adds practical value beyond the current WhatsApp CTA: inquiry expectations, alternate contact method, availability statement, response process, or project-fit questions. It is not needed purely for SEO.

## Future supporting content

Only after the service and proof pages are complete, publish original guidance based on real work. Good candidate topics include:

- What can be changed through Salla settings versus theme code.
- A practical pre-launch checklist for a Salla storefront.
- How to prepare content and assets before a store redesign.
- Common causes of mobile storefront friction and how to review them.
- What ongoing technical maintenance for a Salla store actually covers.

Avoid generic AI-written articles, thin glossary pages, duplicated location pages, or unsupported “best” claims. Each guide should link to the relevant service and case study and include firsthand examples where approved.

## Content priorities

1. **P1:** Build the two distinct service pages.
2. **P1:** Turn Sho9 into a genuine case study rather than a project card expanded into a page.
3. **P1:** Build a substantive About page.
4. **P2:** Clarify the portfolio archive’s relationship to the Salla positioning.
5. **P2:** Verify or qualify numerical claims across non-Salla projects.
6. **P2:** Resolve the document-language inconsistency for English project pages.
7. **P3:** Add supporting guides only after the commercial foundation is complete.

