# HeshamAli.com Audit

Audit date: 21 September 2026  
Scope: current repository plus the deployed experience at `https://heshamali.com` / `https://www.heshamali.com`  
Constraint observed: audit only. No application code, dependencies, content, or configuration were changed.

## 1. Executive Summary

The current site is a polished, technically structured English software-engineer portfolio, but it is not currently an effective Salla-specialist sales page. It reflects the repository's earlier brief—recruiters, engineering leads, and a broad mix of backend, WordPress, automation, and e-commerce work—rather than the current business goal of converting Arabic-speaking Salla store owners.

What already works well:

- The visual system is consistent and professional: restrained navy/cream/blue colors, clear section boundaries, reusable cards, strong focus styling, and generally readable type.
- The codebase has a sensible Next.js App Router structure, centralized portfolio data, typed MDX project content, metadata routes, project validation scripts, and reusable components.
- The site has a skip link, semantic landmarks, a logical heading hierarchy, reduced-motion handling, generated favicon/social images, canonical metadata, JSON-LD, `robots.ts`, and `sitemap.ts`.
- Project contribution language is generally more careful than a typical portfolio; several projects use words such as “contributed,” “supported,” and “configured” instead of claiming sole ownership.
- The deployed homepage and the Salla detail route rendered without console warnings or errors in the browser audit.

Biggest weaknesses:

- Every WhatsApp CTA pointed to an obsolete destination instead of the required `+20 102 724 7079`. This was the most urgent functional/conversion defect.
- A prospect cannot understand “Hesham Ali — Salla Developer” within five seconds. The title, hero, navigation, proof, and first two major sections position Hesham as a generic junior software engineer.
- The mobile header is broken from 320–430 px because its desktop WhatsApp CTA is not actually hidden. The page becomes 493 px wide and the mobile menu is pushed partially or completely off-screen.
- There is almost no visual proof. All four project records have `cover: null`, `gallery: []`, and no live links. The only project artwork is a generic numbered placeholder.
- The page is excessively long and diffuse for a cold-outreach visitor. At 320 px the document measured 19,365 px tall; the Salla project card began at roughly 8,500 px.
- The site is entirely English (`lang="en"`, no `dir`) even though the primary audience is Arabic-speaking and the intended primary CTA is Arabic.

Biggest conversion opportunities:

- Correct the WhatsApp destination and make the prefilled message ask for the prospect's Salla store URL.
- Make Salla the hero promise, the first proof, the services frame, and the vocabulary of the page.
- Put a truthful Sho9 case study with real screenshots, its URL, the exact end-to-end contribution, and ongoing maintenance immediately after the hero.
- Reduce the homepage to the sections that answer four buyer questions: what Hesham does, what he has done, what he can improve, and how to contact him.
- Make Arabic/RTL the primary experience, or define an intentional bilingual strategy; do not simply translate the existing long English engineering portfolio.

Recommendation: preserve the technical foundation and parts of the visual system, but substantially change the information architecture, positioning, proof, and conversion path. This is not a case for keeping the current homepage structure with minor copy edits. It also does not require rebuilding the project from scratch.

---

## 2. Current Architecture

### Stack

- Framework: Next.js `16.3.0`, App Router, React `19.2.8`, TypeScript in strict mode.
- Styling: Tailwind CSS 4 through `@tailwindcss/postcss`, plus 376 lines of global CSS and design tokens in `src/app/globals.css`.
- Content: local typed data in `src/data/portfolio.ts` and project case studies in `content/projects/*.mdx`.
- MDX: `@next/mdx`, `@mdx-js/loader`, and `@mdx-js/react`.
- Motion: `motion` 13, used for reveal, stagger, card, filter, and navigation animations.
- Image processing: Next Image plus `sharp`; the project validation code inspects asset dimensions and paths.
- Fonts: no downloaded web font. The site uses `Avenir Next`, then Avenir, Segoe UI, Arial, and system fallbacks; monospaced labels use system monospace fallbacks.

### Entry points and routes

- `src/app/layout.tsx`: global metadata, Person JSON-LD, HTML language, global stylesheet, and motion provider.
- `src/app/page.tsx`: homepage composition.
- `src/app/projects/page.tsx`: project archive with client-side filters.
- `src/app/projects/[slug]/page.tsx`: statically generated project detail pages and CreativeWork JSON-LD.
- `src/app/robots.ts` and `src/app/sitemap.ts`: metadata routes.
- `src/app/icon.tsx`, `apple-icon.tsx`, `opengraph-image.tsx`, and `twitter-image.tsx`: generated brand assets.

### Component and data organization

- `src/components/layout/`: container, header, mobile navigation, logo, footer.
- `src/components/sections/`: ten homepage sections.
- `src/components/projects/`: cards, filters, hero, gallery/lightbox, grid, and previous/next navigation.
- `src/components/motion/`: six client-side animation/navigation helpers and shared motion configuration.
- `src/components/branding/`: HA monogram and social card.
- `src/components/ui/`: section heading, project placeholder, and tags.
- `src/data/portfolio.ts`: person, navigation, hero, proof, services, experience, stack, process, education, and contact copy.
- `content/projects/`: four published/featured MDX projects.
- `src/lib/projects/`: project loading, schema validation, safe image-path handling, ordering, category extraction, and navigation.
- `scripts/`: project scaffolding and project/SEO validation.

### Assets

- `public/logo.png`: 1536×1024 RGBA PNG, 2,055,427 bytes. It is CSS-cropped into a 160×40 header slot and a 176×48 footer slot.
- `public/hesham-ali-cv.pdf`: 58,598 bytes.
- `public/projects/*`: only `.gitkeep` files. There are no project covers or gallery images.
- `docs/reference/`: three reference CV PDFs used as source material, not public site assets.

### Dependencies and client JavaScript

The declared dependencies are all explainable by the current implementation. The main avoidable cost is the `motion` layer: many otherwise static homepage sections are wrapped in client components to provide subtle reveal/stagger effects. The live homepage exposed nine Next/runtime script URLs. No third-party analytics, chat widget, advertising pixel, remote font, icon library, or form library was present.

### Build and deployment configuration

- `next.config.ts` only adds MD/MDX page extensions through `@next/mdx`.
- There is no `vercel.json`; deployment relies on Next.js/Vercel defaults.
- `.env.example` contains only `NEXT_PUBLIC_SITE_URL=https://www.heshamali.com`.
- No local `.vercel` configuration is tracked.
- The production domain redirects to/canonicalizes on the `www` origin, and live metadata uses `https://www.heshamali.com/`.
- No CI workflow is included in this repository.

### Validation status

The working tree was clean before this audit. The checkout did not include `node_modules`, so the requested no-install constraint meant local verification could not execute:

- `npm run lint`: stopped because `eslint` was not installed.
- `npm run build`: stopped because `next` was not installed.
- `npm run projects:validate`: stopped because `sharp` was not installed.

These are environment limitations, not evidence that the source fails. No Lighthouse score or Core Web Vitals number is claimed in this report.

---

## 3. Current Page Structure

Homepage sections, in current order:

1. **Sticky header** — HA/Hesham wordmark, six navigation links on desktop, WhatsApp CTA, and a mobile menu.
2. **Hero / `#home`** — broad backend/WordPress/e-commerce headline, two explanatory paragraphs, work/WhatsApp/CV actions, a “Current focus” panel, and three proof metrics.
3. **About / `#about`** — personal background, BIS studies, and business-process approach.
4. **Expertise / `#expertise`** — four equal pillars: backend, WordPress, Salla/e-commerce, and integrations/automation.
5. **Selected Work / `#projects`** — four large project cards, followed by “View All Projects.”
6. **WordPress & E-commerce spotlight** — two equal service panels and another WhatsApp CTA.
7. **Experience / `#experience`** — current role at Moraqmen, responsibilities, and technologies.
8. **Tools & Technologies** — four technology-list cards.
9. **Working Style** — four numbered process cards.
10. **Education** — BIS degree and expected graduation.
11. **Contact / `#contact`** — broad project prompt, WhatsApp, email, LinkedIn, CV, email address, and location.
12. **Footer** — logo, generic software-engineer summary, email, and back-to-top link.

Additional routes:

- `/projects`: repeats the same four projects and adds category filters.
- `/projects/[slug]`: shows a text-led case study, optional cover/gallery infrastructure, related-project navigation, and WhatsApp CTA.

The flow is appropriate for a résumé portfolio but not for Salla customer acquisition. It makes visitors process biography, four service categories, and unrelated work before reaching the relevant Salla evidence.

---

## 4. Critical Issues

### 4.1 Wrong WhatsApp destination across the site

**Problem:** `src/data/portfolio.ts:17-18` defined an obsolete WhatsApp destination. The required number is `+20 102 724 7079` (`wa.me/201027247079`). Every header, hero, spotlight, project-detail, mobile-menu, and contact CTA inherited the wrong destination.

**Why it matters:** The site's primary conversion action can send qualified leads to the wrong number. This is direct revenue loss and a trust problem.

**Where:** `src/data/portfolio.ts`, consumed by `site-header.tsx`, `mobile-navigation.tsx`, `hero.tsx`, `commerce-spotlight.tsx`, `contact.tsx`, and `projects/[slug]/page.tsx`; confirmed on the live homepage and Salla detail page.

**Recommended direction:** Correct the single data source first, verify every rendered `wa.me` URL, and use a prefilled Arabic message that asks the owner to include the store URL.

### 4.2 Positioning contradicts the current business

**Problem:** The H1 says “I build backend systems, custom WordPress platforms, and e-commerce solutions.” The eyebrow says “Hello,” the role says “Junior Software Engineer,” and Salla does not appear in the hero, header, primary CTA, or first proof strip.

**Why it matters:** A Salla merchant arriving from cold outreach cannot identify a relevant specialist in under five seconds. Broad junior-engineer positioning lowers perceived expertise and forces the prospect to search for relevance.

**Where:** `src/data/portfolio.ts:13,35-48`, `src/components/sections/hero.tsx`, `src/lib/seo.ts`, the footer, social card, project archive heading, and contact copy. The old strategy is also explicitly encoded in `docs/IMPLEMENTATION_PLAN.md:5-18`.

**Recommended direction:** Make “Hesham Ali — Salla Developer” the primary identity. Lead with Salla store design and development, use merchant outcomes and services as supporting copy, and demote unrelated backend/WordPress material to secondary proof or a separate archive.

### 4.3 Broken small/mobile header layout

**Problem:** The desktop header CTA has Tailwind classes `hidden lg:inline-flex`, but the later global `.button-primary { display: inline-flex; }` rule overrides `hidden`. Both the CTA and mobile menu render below `lg`.

**Why it matters:** At 320 px the document measured 493 px wide—173 px of horizontal overflow. The menu button began at x=401 and was completely off-screen. At 375 px it remained off-screen; at 430 px only part of it was visible. This affects exactly the WhatsApp-driven mobile traffic the site depends on.

**Where:** `src/components/layout/site-header.tsx:19-31` and `src/app/globals.css:236-263`. Confirmed live at 320×568, 375×667, and 430×932.

**Recommended direction:** Fix the display/cascade conflict, keep only the intended mobile control(s), verify 320/360/375/390/430 widths, and add an automated horizontal-overflow check.

### 4.4 Portfolio does not prove real Salla work

**Problem:** The Salla project has no screenshot, cover, gallery, or live link. `content/projects/salla-ecommerce-stores.mdx:24-26` sets `cover: null`, `links.live: null`, and `gallery: []`. Its homepage card is the third of four and uses the same generic placeholder as unrelated projects.

**Why it matters:** The primary sales claim is not substantiated visually. A merchant cannot inspect Sho9, understand what Hesham personally did, or distinguish real delivery from generic capability copy.

**Where:** `content/projects/salla-ecommerce-stores.mdx`, empty `public/projects/salla-ecommerce-stores/`, `ProjectCard.tsx`, and `ProjectHero.tsx`.

**Recommended direction:** Build proof around the confirmed Sho9 facts only: store name, `https://sho9.com`, end-to-end design/development contribution, ongoing maintenance, and approved screenshots. The repository also names `taf3elat.com`, but the current business brief confirms only Sho9; re-verify the second store and its contribution before retaining that claim.

### 4.5 Relevant proof arrives far too late

**Problem:** About and a four-pillar expertise grid precede projects, and the Salla item is the third large project card. At 320 px the hero alone measured 1,683 px, the Selected Work section began around 5,438 px, and the Salla card began around 8,507 px.

**Why it matters:** Cold prospects have to scroll through several screens of unrelated material before seeing proof that matches the outreach message.

**Where:** `src/app/page.tsx:22-31` and the order of MDX projects (`order: 3` for Salla).

**Recommended direction:** Put a concise proof/case-study section directly after a Salla-specific hero. Introduce services and background only after the work is visible.

---

## 5. High Priority Improvements

### 5.1 CTA language does not match the desired action

**Problem:** Labels such as “Chat on WhatsApp,” “Discuss Your Project,” and “Have a project …?” are generic. The prefilled message is English and asks to discuss “a project”; it does not request a Salla store URL.

**Why it matters:** The visitor must decide what to write and may start an unqualified conversation without the one piece of information Hesham needs.

**Where:** `src/data/portfolio.ts:18-20,258-262`, hero, header, spotlight, case-study CTA, and contact.

**Recommended direction:** Center the primary CTA on `ابعت رابط متجرك` and prefill a short message that requests the current Salla URL and the improvement needed.

### 5.2 Homepage is too long and too broad

**Problem:** Ten content sections cover résumé history, technology inventories, process cards, education, and four disciplines. At 320 px the measured page height was 19,365 px; individual project cards were roughly 1,221–1,302 px tall.

**Why it matters:** The page imposes high cognitive load and weakens the single conversion narrative. A merchant does not need to evaluate JWT, Redis, Supabase, or a degree before sending a store link.

**Where:** `src/app/page.tsx`, all section components, and `src/data/portfolio.ts`.

**Recommended direction:** Keep the homepage focused on Salla proof, relevant services, a short credibility block, process/maintenance if useful, and WhatsApp. Move or compress recruiter-oriented details.

### 5.3 Arabic audience is not served

**Problem:** The live document is English-only with `<html lang="en">` and no `dir`. The intended Arabic CTA and Arabic merchant search terms are absent.

**Why it matters:** Cold outreach from WhatsApp is likely to continue in Arabic. Switching to an English résumé site breaks tone, increases reading effort, and loses Arabic organic relevance.

**Where:** `src/app/layout.tsx:73`, all portfolio copy, metadata, navigation, social cards, and project pages.

**Recommended direction:** Decide on Arabic-first or a deliberate bilingual implementation. For Arabic-first, set correct language/direction, choose Arabic-appropriate typography, and rewrite—not mechanically translate—the conversion copy.

### 5.4 Current proof metrics are poorly matched to buyers

**Problem:** “1M+ Platform scale exposure” and “API-First” are defensible qualifiers but mostly relate to unrelated backend/WordPress experience.

**Why it matters:** In the hero they can look impressive without answering whether Hesham can improve a Salla storefront. They also risk feeling like résumé metrics rather than buyer proof.

**Where:** `src/data/portfolio.ts:44-48` and `hero.tsx:69-83`.

**Recommended direction:** Replace hero proof only with verified Salla-relevant facts. If no metrics exist, use truthful proof labels such as end-to-end delivery and ongoing maintenance rather than manufacturing numbers.

### 5.5 Project archive adds little current value

**Problem:** All four published projects are also featured, so “View All Projects” opens an archive containing the same four cards, now with filters.

**Why it matters:** It adds a click without revealing additional evidence and takes visitors away from the primary conversion page.

**Where:** `getFeaturedProjects()` returns up to four; all four MDX files set `featured: true`; `projects.tsx:26-31` links to `/projects`.

**Recommended direction:** Either make the homepage proof self-sufficient or reserve the archive for genuinely additional work. Do not use it as a substitute for strong case-study presentation.

### 5.6 Contact-section contrast misses AA for small text

**Problem:** Several contact elements use white at 75–80% opacity on `#155eef`. Calculated contrast is approximately 3.73:1 at 75% and 4.03:1 at 80%, below the 4.5:1 requirement for normal text.

**Why it matters:** The small eyebrow and contact details are harder to read, particularly on mobile and in bright conditions.

**Where:** `src/components/sections/contact.tsx:12,18,53`; similar translucent utility text should be rechecked.

**Recommended direction:** Use an opaque/lighter color combination that passes WCAG AA and verify rendered colors, not only token colors.

---

## 6. Medium Priority Improvements

### 6.1 Project cards are too dense for scanning

**Problem:** Each homepage card repeats title, summary, overview, every contribution, all tags, and a detail-page link.

**Why it matters:** The card becomes a miniature case study and makes mobile scanning slow. Repetition also reduces the value of clicking the detail route.

**Where:** `src/components/projects/ProjectCard.tsx:37-67`.

**Recommended direction:** Use cards for visual proof, role, and a concise outcome/contribution; keep supporting detail on the case-study page.

### 6.2 Repetitive generic phrasing weakens the voice

**Problem:** “Practical,” “connected systems,” “business workflows,” “delivery,” and “solutions” recur across hero, section titles, cards, and detail pages. Several headings follow the same polished-but-abstract pattern.

**Why it matters:** The copy can feel template-written or AI-polished because it is smooth but non-specific. Salla merchants need concrete storefront language.

**Where:** `src/data/portfolio.ts`, `projects.tsx`, `commerce-spotlight.tsx`, `experience.tsx`, `tech-stack.tsx`, and project MDX.

**Recommended direction:** Prefer concrete store tasks and verified examples; reduce claims that do not add new information.

### 6.3 Motion is heavier than the experience requires

**Problem:** A static portfolio uses a site-wide Motion provider plus multiple reveal/stagger/card/filter client components. The original implementation plan explicitly advised avoiding an animation library.

**Why it matters:** It increases client JavaScript and hydration work for subtle effects, while the primary performance audience is mobile WhatsApp traffic.

**Where:** `src/components/motion/`, `MotionProvider` in `layout.tsx`, and motion wrappers throughout sections.

**Recommended direction:** Keep motion only where it materially improves comprehension; use CSS for simple hover/focus transitions and preserve reduced-motion behavior.

### 6.4 Mobile overlay is not fully modal for keyboard users

**Problem:** Opening the menu locks body scrolling and moves focus to the first link, but the overlay has no focus trap/inert background. Tab can leave the menu and reach content behind it.

**Why it matters:** Keyboard and assistive-technology users can lose context in a full-screen overlay.

**Where:** `src/components/layout/mobile-navigation.tsx:17-37,62-109`.

**Recommended direction:** Trap focus or use an accessible dialog/disclosure pattern, restore focus, and make background content inert while open.

### 6.5 Link behavior and arrows are inconsistent

**Problem:** Internal project-card links show `↗`, while LinkedIn and mail actions also show `↗` but do not open a new browser tab. New-tab behavior is announced for WhatsApp but not used consistently for other external links.

**Why it matters:** Directional symbols imply behavior that is not reliable.

**Where:** `ProjectCard.tsx:62-66`, `contact.tsx:32-43`, and project navigation.

**Recommended direction:** Use consistent arrow semantics and a consistent policy for external destinations; keep accessible names accurate.

### 6.6 Repository documentation encodes the obsolete strategy

**Problem:** `docs/IMPLEMENTATION_PLAN.md` defines English, recruiters, four equal disciplines, and the broad junior-engineer position. `docs/portfolio-content.md` reinforces that strategy. The README is still mostly Create Next App boilerplate and points to `app/page.tsx` rather than `src/app/page.tsx`.

**Why it matters:** Future work may reintroduce the old positioning even after the page changes.

**Where:** `docs/IMPLEMENTATION_PLAN.md`, `docs/portfolio-content.md`, and `README.md`.

**Recommended direction:** Update source-of-truth documentation alongside implementation so the Salla focus is testable and durable.

---

## 7. Low Priority / Polish

### 7.1 Logo asset is oversized and awkwardly cropped

**Problem:** A 2.05 MB, 1536×1024 PNG is positioned at 288 px wide and clipped inside a very shallow logo box.

**Why it matters:** Next Image mitigates network delivery, but the source is unnecessarily large and the CSS is brittle. The live browser reported a 256-width optimized source for the logo.

**Where:** `public/logo.png` and `src/components/layout/site-logo.tsx:21-34`.

**Recommended direction:** Export a tightly cropped, optimized wordmark—preferably an appropriate vector or smaller transparent asset—and render it without compensating transforms.

### 7.2 Visual system is consistent but overuses the same card recipe

**Problem:** Large rounded panels, numbered modules, grid backgrounds, pill buttons, and identical card treatments repeat across nearly every section.

**Why it matters:** The consistency is good, but the accumulation feels generic and slightly template-like. It also gives résumé/process content the same weight as sales proof.

**Where:** section components and `globals.css`.

**Recommended direction:** Reserve the strongest card treatment for projects/proof and simplify supporting sections.

### 7.3 Manifest is absent

**Problem:** No web app manifest is present or linked.

**Why it matters:** This is not required for a portfolio, so it is low priority; it only matters if installability or richer mobile identity is desired.

**Where:** no `manifest.ts`/manifest file; confirmed absent in live metadata.

**Recommended direction:** Add only if there is a product reason, not as checklist work.

### 7.4 Sitemap could include modification dates

**Problem:** Sitemap entries have frequency and priority but no `lastModified`.

**Why it matters:** Minor discovery/publishing hygiene only.

**Where:** `src/app/sitemap.ts`.

**Recommended direction:** Add accurate dates when the content workflow can maintain them; do not fabricate them.

---

## 8. Mobile Findings

Live viewport checks were performed at 320×568, 375×667, 430×932, 768×1024, and 1440×900. The key results were:

| Viewport category | Finding |
| --- | --- |
| Small mobile, 320 px | Document width was 493 px, creating 173 px horizontal overflow. Header CTA extended past the viewport and the menu button sat at x=401–494, fully inaccessible without horizontal scrolling. Hero height was 1,683 px. |
| Normal mobile, 375 px | Document still measured 493 px wide. The menu remained outside the viewport. Hero measured 1,554 px and the primary in-hero actions were below the first screen. |
| Large mobile, 430 px | Document still measured 493 px wide. Only about 29 px of the menu button was inside the viewport. |
| Tablet, 768 px | No horizontal document overflow was measured, but both the desktop WhatsApp CTA and mobile menu were visible, creating a crowded three-control header. Hero height was 1,173 px. |
| Desktop, 1440 px | No horizontal overflow was measured. Desktop navigation is available. The hero still measured roughly 1,150 px high in a 900 px viewport, so it does not complete within the first screen. |

Additional mobile findings:

- Buttons are generally 44–48 px tall and meet a reasonable touch-target size.
- Project and contact actions stack to full width, which is good for touch use.
- The sticky header keeps a CTA present, but the current mobile cascade bug makes it crowd out navigation and sends users to the wrong number.
- The very long hero delays the meaningful hero CTAs; the first viewport is mostly generic copy.
- The mobile Selected Work section measured 5,747 px at 320 px and 5,206 px at 375 px because each card repeats a full contribution list and tag set.
- Project placeholder internals report wider scroll content but are clipped by `overflow-hidden`; the document-level horizontal overflow comes from the header.
- Cards and images use responsive grids/aspect ratios and do not show evidence of intrinsic-size collapse.
- Section padding of 80 px on the smallest screens is generous for a 19,000 px page and contributes to scroll fatigue.
- No persistent bottom WhatsApp action exists. A sticky header action could be sufficient once fixed, simplified, and made store-specific.

---

## 9. Content & Positioning Findings

- The offer is not understandable as “design and development of Salla stores” within five seconds. It is framed as one item inside a broad engineering résumé.
- “Junior Software Engineer” is honest but commercially weak as the lead identity for a specialist service page. It invites evaluation of seniority instead of relevance.
- The hero contains two long paragraphs before the visitor reaches the in-hero actions on mobile.
- The hero headline, About heading, Expertise heading, Selected Work heading, spotlight heading, Experience heading, stack heading, and process heading are all abstract. Few mention storefronts, product presentation, navigation, mobile shopping, theme customization, or store URLs.
- Salla is one of four equal expertise cards, third in order. Backend is first and dominates the site's vocabulary.
- The contact section again asks about “a system, WordPress platform, or e-commerce project,” reopening the broad scope instead of closing the Salla journey.
- “View My Work” is a reasonable secondary CTA. “Chat on WhatsApp” and “Discuss Your Project” are weaker than the intended `ابعت رابط متجرك` because they do not tell the visitor what to send.
- The footer restates the broad software-engineer position, so even the final impression is generic.
- Claims such as “1M+” and “API-First” have qualifiers, which is good, but they are not strong Salla-client proof.
- `content/projects/salla-ecommerce-stores.mdx` combines multiple stores and capabilities into one generic case study. The current business brief supports a much clearer Sho9-specific statement: designed and developed from start to finish, with ongoing maintenance.
- The repository claims work on `taf3elat.com`; because the current brief does not confirm it, that claim should be independently verified rather than automatically reused.
- Current copy does not mention the intended conversion-relevant service range in a coherent Salla frame: storefront design, setup, homepage design, theme/CSS/JavaScript customization, store structure, navigation, product presentation, mobile experience, and maintenance.

---

## 10. Portfolio / Proof Findings

Strengths:

- Project metadata separates summary, overview, role, contributions, tags, year, and links.
- Contribution verbs are generally scoped carefully.
- Project detail pages have clear role/year/category facts and dedicated contribution lists.
- The code already supports cover images, galleries, captions, focal positions, lightbox viewing, live URLs, and image validation.

Weaknesses:

- All three covers and galleries are empty, so the strongest available infrastructure is unused.
- All live project links are `null`; even Sho9 is not linked.
- The Salla card uses a decorative placeholder rather than storefront evidence.
- The homepage orders WordPress work before Salla. On 320 px, the Salla card starts roughly 8,507 px down the page.
- The Salla detail page repeats the same claims but adds no store URL, screenshots, per-store role, or maintenance status.
- The generic social image is used for every project without a cover, so shared case-study links do not show the work.
- “View All Projects” repeats the same set rather than offering deeper proof.
- Three unrelated projects compete equally for attention. For the new business goal, Sho9 should carry substantially more visual and narrative weight.

For each future public Salla project, the minimum credible proof model should be: store name; public URL; exact contribution; whether the work was full delivery or partial; approved desktop/mobile screenshots; and ongoing-maintenance status where true. Do not imply sole authorship for projects where the contribution was partial.

---

## 11. Conversion Findings

Current landing-to-contact journey:

1. Visitor sees a generic software-engineer hero and a sticky WhatsApp button.
2. Visitor reads broad engineering copy and unrelated proof metrics.
3. Visitor scrolls through About and four expertise areas.
4. Visitor reaches four long project cards; Salla is third.
5. Visitor passes another dual WordPress/Salla sales section.
6. Visitor scrolls through résumé, stack, process, and education.
7. Visitor reaches a broad contact section with four choices.

Friction and distraction:

- The primary CTA leads to the wrong phone number.
- The message is generic, English, and does not request a store URL.
- Header, hero, spotlight, case study, and contact repeat the same destination but use inconsistent labels.
- Multiple conversion alternatives—projects, CV, email, LinkedIn, and archive—compete with WhatsApp.
- The contact section offers four actions of similar visual size, weakening primary-action hierarchy.
- The site provides no reason specific to a Salla owner to start the conversation now.
- There is no measured conversion analytics implementation, so CTA performance is currently not observable from the repository.
- No contact form reduces friction and privacy risk; WhatsApp is an appropriate primary path for this audience once corrected.

Recommended conversion direction: one dominant store-URL WhatsApp action in the header/hero, repeated after proof and at the close; a concise prefilled message; and secondary email/LinkedIn/CV links visually demoted.

---

## 12. UI / Visual Findings

What works:

- Navy, cream, cyan, and blue create a trustworthy professional palette.
- Visual hierarchy is consistent, focus outlines are conspicuous, and content widths are generally controlled.
- Cards have coherent spacing, borders, and radii.
- The design avoids fake interface screenshots and unsupported imagery.
- The site does not imitate Salla branding or imply official partnership.

What weakens the experience:

- The palette and grid motif read as a generic modern developer/SaaS portfolio, not an e-commerce storefront specialist.
- The long H1 and 76 px desktop size create a very tall hero; at 1440×900 the hero exceeded the viewport.
- Numbered cards, orbital placeholders, uniform 24 px radii, grid backgrounds, and abstract copy combine into a template-like/AI-polished feel.
- Generic project placeholders occupy substantial visual space while proving nothing about the actual stores.
- Most sections have equal visual weight. Proof, process, education, and tool lists look similarly important even though they have very different conversion value.
- Repeated large cards make the page visually noisy despite each individual component being clean.
- On mobile the page feels both dense and overly spacious: cards contain too much copy, while sections still use large vertical padding.
- The logo treatment is technically fragile because a large rectangular bitmap is enlarged and clipped into a wordmark strip.
- There is no portrait or human signal. A portrait is not mandatory, but the current page relies almost entirely on abstract UI and text, which limits personal trust.

The current style can be retained as a base, but it should become more proof-led and commerce-specific. Salla compatibility should come from the work and vocabulary, not from copying Salla's brand or claiming affiliation.

---

## 13. Technical Findings

Positive findings:

- Semantic `header`, `nav`, `main`, `section`, `article`, `aside`, and `footer` elements are used.
- Data is centralized; project loading and sorting are separated from presentation.
- Project schemas reject unsafe paths, invalid links, missing alt text, and duplicate slugs/images.
- External links that use `target="_blank"` also use `rel="noopener noreferrer"`.
- Structured-data serialization escapes `<`, reducing script-breakout risk for local content.
- No API keys, private keys, passwords, or obvious secrets were found in tracked source. `.env.example` contains only a public site URL.
- There are no public form handlers, API routes, authentication flows, or databases in this site.
- The live browser showed no console warnings/errors on the homepage or Salla case study.

Issues and risks:

- The global `.button-primary` rule overrides Tailwind's `hidden`, causing the critical mobile header bug. Combining utility display classes with component classes that also set `display` is fragile.
- The site logo uses layout/cropping hacks around an oversized raster asset.
- Project card content duplicates detail-page content; metadata and MDX body also repeat context, increasing editing drift.
- All homepage sections use client-side motion wrappers despite mostly static content.
- `ProjectGallery`, MDX image components, callouts, and fact grids are implemented but no current project uses them. They are useful infrastructure, but currently add maintenance surface without delivering proof.
- The mobile menu lacks focus containment/inert background behavior.
- LinkedIn uses same-tab navigation while its arrow implies an external jump; behavior is not consistently encoded.
- SEO validation hardcodes the old title and description, so changing positioning without changing `scripts/validate-seo.mjs` will intentionally fail.
- There is no automated test suite or viewport regression test. The header overflow would be straightforward to catch with a 320 px assertion.
- The repository has no local dependency installation, so lint/build/source-validation status is unconfirmed in this checkout.
- The README is stale boilerplate and does not document the real content/project workflow.

No obviously broken internal route was observed: homepage, `/projects`, and the Salla detail route are represented by valid App Router routes, and the CV asset exists. The major “broken link” problem is instead omission: the known Sho9 URL is not exposed.

---

## 14. Performance Findings

### Measured

- No Lighthouse or field Core Web Vitals data was available; none is fabricated here.
- `public/logo.png` is 2,055,427 bytes at 1536×1024. The live page used a Next-optimized `w=256&q=75` URL rather than serving the source directly.
- The CV is 58,598 bytes.
- There are no project screenshots or other page photography to load.
- The live homepage referenced nine Next/runtime script URLs and no third-party tracking scripts.
- One header logo loads eagerly; the footer logo is lazy-loaded.
- Live browser console audit returned no warnings or errors.
- At 320 px the rendered document was 19,365 px tall and 493 px wide; the layout width defect is likely to increase paint/scroll work and directly harms usability.

### Inferred from code

- **LCP:** The hero is text-led, so LCP is likely the H1 rather than a heavy hero image. The priority logo and system font stack help avoid a remote-font/image bottleneck. The main risk is hydration/animation work around above-the-fold content, not media payload.
- **CLS:** Risk is relatively low because Next Image dimensions/aspect ratios are supplied and placeholder aspect ratios are stable. System font fallback avoids a late web-font swap. Cross-platform font metrics can still vary.
- **INP:** The site has few complex interactions, but Motion, IntersectionObserver-driven active navigation, repeated reveal components, filters, and a global motion context add unnecessary client work for a simple portfolio. The risk is more pronounced on lower-end mobile devices.
- The source logo should still be optimized for repository/build/deployment efficiency and maintainability even though Next image optimization reduces client transfer.
- If real project screenshots are added, use WebP/AVIF where appropriate, correct intrinsic dimensions, responsive `sizes`, restrained `priority`, and lazy loading below the fold.
- A shorter DOM and fewer repeated contribution/tag lists will reduce style/layout work and improve scanning even when synthetic scores are already acceptable.

The next implementation should run a production build, Lighthouse mobile audit, and real-device checks after dependencies are installed. Record results rather than setting score targets without a baseline.

---

## 15. SEO Findings

What is implemented correctly:

- Canonical homepage URL is present and uses the `www` production origin.
- Page title, meta description, Open Graph, and X/Twitter card metadata render on the live homepage.
- Generated Open Graph/Twitter images declare 1200×630 dimensions.
- Dynamic favicon and Apple icon routes exist and are linked.
- `robots` metadata allows indexing/following.
- `src/app/robots.ts` references the sitemap and host.
- `src/app/sitemap.ts` includes the homepage, archive, and all published projects.
- Person JSON-LD exists globally; project pages add CreativeWork JSON-LD.
- Homepage heading hierarchy is one H1 followed by logical H2/H3 levels.
- Project pages have route-specific title, description, canonical, and social metadata.

What is wrong for the current positioning:

- Live title: “Hesham Ali | Software Engineer — Backend, WordPress & E-commerce.” It does not target “Hesham Ali,” `مطور سلة`, `تصميم متاجر سلة`, or `تطوير متاجر سلة` in a focused way.
- The meta description lists five disciplines and mentions Salla last.
- Open Graph and social-card copy repeat the broad engineering position.
- `og:locale` is `en_US`; the document is `lang="en"`; Arabic/RTL metadata is absent.
- The project archive title is broad and backend-first.
- There are no visual project images for case-study social cards, so every project without a cover falls back to the same generic brand card.
- Image alt coverage cannot demonstrate store work because no project screenshots exist. The logo alt is merely “Hesham Ali”; the enclosing home link already has an accessible label.
- Salla service terms occur in body copy but are diluted by far more backend/WordPress vocabulary.

Indexability appears intentionally open. The SEO infrastructure should largely be kept; its copy, locale, information focus, and case-study assets need to change. Arabic keywords should be used naturally in Arabic content, not repeated mechanically.

---

## 16. Accessibility & RTL Findings

Positive accessibility findings:

- Skip link targets a focusable `main`.
- Focus-visible outlines are strong and use a high-contrast cyan.
- Navigation, lists, sections, articles, headings, and buttons use appropriate native elements.
- Most CTA/button targets are 44–48 px high.
- Reduced-motion preferences are respected in CSS and Motion configuration.
- Decorative project placeholders are `aria-hidden` while titles remain visible in text.
- WhatsApp links that open new tabs say so in their accessible labels.
- The project lightbox supports Escape, arrow keys, focus return, and an internal Tab loop.
- Primary token contrasts are generally strong: blue on cream is about 4.93:1; cyan on navy about 11.02:1; slate-400 on navy about 6.87:1.

Accessibility issues:

- Mobile horizontal overflow and off-screen menu make navigation inaccessible at the most important widths.
- Contact-section translucent white text fails normal-text AA contrast as noted in section 5.
- The mobile navigation overlay does not prevent focus from escaping to background content.
- A whole project card is one very long link; its accessible name contains the full summary, overview, contributions, tags, and CTA, producing a verbose screen-reader stop.
- The logo image has alt text inside a link that already has `aria-label`; this is redundant rather than harmful.
- The “Technologies” `aria-label` is reused for tag lists even when the list may include categories/platforms; acceptable, but not always exact.
- Full keyboard, screen-reader, 200% zoom, and forced-colors testing were not measurable in this audit and remain required.

RTL/Arabic findings:

- There is no Arabic UI, `lang="ar"`, or `dir="rtl"` implementation.
- The current Avenir/Segoe/Arial stack is not an intentional Arabic typography system; fallback rendering will vary by device.
- Many classes are physically directional rather than logical: `border-l`, `pl-*`, `border-r`, `pr-*`, `text-left`, `text-right`, `left-*`, and `right-*`.
- Back/next arrows and the `translateX(4px)` hover motion assume LTR.
- Project navigation, gallery controls, hero focus rail, proof dividers, and MDX list padding all require RTL review.
- Mixed Arabic/English terms such as CSS, JavaScript, Salla, Tabby, and Tamara will need deliberate bidi handling and punctuation testing.
- Phone numbers and store URLs should remain readable LTR inside Arabic text.

Do not add `dir="rtl"` to the existing layout without addressing these directional assumptions and checking every component.

---

## 17. Recommended Final Page Structure

This is an information-architecture recommendation, not a redesign:

1. **Compact header** — personal brand, minimal navigation, and the primary `ابعت رابط متجرك` action.
2. **Salla-specific hero** — “Hesham Ali — Salla Developer,” concise design/development offer, one primary WhatsApp CTA, and a secondary jump to work.
3. **Featured proof: Sho9** — real screenshots, `sho9.com`, exact end-to-end design/development contribution, and ongoing maintenance.
4. **What Hesham can improve in a Salla store** — storefront/homepage design, setup, theme/CSS/JavaScript customization, structure/navigation, product presentation, mobile UX, and maintenance; include only supported capabilities.
5. **Additional Salla work** — only confirmed projects, each with URL, role boundaries, and screenshots. Omit this section until evidence is available rather than filling it with generic placeholders.
6. **Short process / what happens after sending a URL** — a simple, truthful explanation that reduces WhatsApp friction.
7. **Focused about/credibility block** — short personal background and the most relevant delivery experience; keep broader engineering history secondary.
8. **Final WhatsApp CTA** — repeat `ابعت رابط متجرك`, show what to include, and keep email/LinkedIn as quiet alternatives.
9. **Minimal footer** — name, Salla specialization, essential contact/legal links, and no broad résumé restatement.

The separate project archive can remain for broader professional work, but it should not interrupt the Salla-focused homepage journey.

---

## 18. Keep / Change / Remove

### KEEP

- Next.js App Router foundation and static-first architecture.
- Centralized portfolio/contact data pattern.
- Typed MDX project model and safe asset/link validation.
- Canonical, Open Graph, Twitter/X, favicon, sitemap, robots, and JSON-LD infrastructure.
- Skip link, visible focus states, semantic landmarks, and reduced-motion support.
- Navy/cream base and restrained visual tone, subject to brand refinement and contrast fixes.
- Reusable container, section-heading, card, tag, and gallery concepts.
- Honest contribution wording and the distinction between delivered versus contributed work.
- Direct WhatsApp conversion model with no unnecessary form.

### CHANGE

- Wrong WhatsApp number, label, and prefilled message.
- Header responsive behavior and mobile navigation accessibility.
- Hero identity, headline, supporting copy, proof, and CTA hierarchy.
- English-only language strategy and all directional layout assumptions.
- Homepage section order and overall length.
- Salla project from generic group entry into concrete store-level proof.
- Project cards from text-heavy placeholders to screenshot-led summaries.
- Contact section from broad multi-service prompt to store-URL action.
- Metadata, social cards, structured-data job title, footer, and project archive copy.
- Contact-section color contrast.
- Logo asset and rendering method.
- Repository documentation and SEO validation constants so they enforce the new strategy.

### REMOVE

- Backend/API material from the primary homepage journey unless it directly supports a Salla service.
- Equal weighting of WordPress and Salla in the sales spotlight.
- Hero proof metrics that do not help a Salla buyer decide.
- Technology-stack section from the Salla sales homepage; it may live in the broader project archive/about context.
- Education as a full homepage section; a short credibility note is enough if retained.
- “View All Projects” when it only repeats the same four cards.
- Generic placeholder artwork once approved real screenshots are available.
- Redundant reveal/stagger motion that does not improve comprehension.
- Repetitive phrases and duplicate summary/overview/contribution copy.

---

## 19. Implementation Plan

### Phase 1 — Critical fixes

1. Correct the WhatsApp number in the central data source and verify every rendered CTA.
2. Fix the `.button-primary`/`hidden` cascade bug and retest header widths from 320 px upward.
3. Confirm the business facts that will be public: Sho9 ownership/contribution language, ongoing maintenance, permitted screenshots, and whether `taf3elat.com` remains valid.
4. Update the source-of-truth content/implementation documentation before broad copy work.
5. Install dependencies in the implementation task, then establish a passing baseline for lint, project validation, SEO validation, and production build.

### Phase 2 — Conversion & content

1. Reframe hero, metadata, navigation, footer, social card, and structured data around Salla development.
2. Implement the Arabic-first or bilingual content decision with correct `lang`/`dir` behavior.
3. Make `ابعت رابط متجرك` the primary CTA and create a store-URL prefilled message.
4. Move Sho9 proof directly below the hero and present exact contribution/maintenance status.
5. Reorder and shorten the homepage around the recommended structure.
6. Demote email, LinkedIn, CV, education, generic stack, and unrelated projects.

### Phase 3 — UI polish

1. Add approved responsive Sho9 screenshots with accurate alt/captions.
2. Simplify project cards and reduce repeated card/grid motifs.
3. Optimize/replace the logo asset and verify image crops.
4. Refine typography for Arabic and mixed Arabic/English content.
5. Standardize link arrows, external-link behavior, button hierarchy, and focus/hover states.
6. Reduce section padding and copy density on mobile.

### Phase 4 — Performance / SEO / accessibility

1. Remove unnecessary client motion and measure resulting JavaScript/hydration changes.
2. Fix low-contrast contact text and complete keyboard/focus-trap work.
3. Replace physical directions with RTL-safe logical styles and test arrows/icons.
4. Update title, description, Open Graph/Twitter images, locale, JSON-LD, sitemap data, and SEO validation script.
5. Add conversion measurement only after choosing a privacy-appropriate analytics approach.
6. Run production build, lint, validation scripts, link checks, Lighthouse mobile, 200% zoom, reduced-motion, keyboard, screen-reader, and real iOS/Android checks.
7. Add a small regression test for horizontal overflow and CTA destination at core breakpoints.

---

## 20. Files Likely To Change

Exact existing files likely to change in a future implementation task:

- `src/data/portfolio.ts` — phone number, CTA, positioning, services, proof, and contact copy.
- `src/types/portfolio.ts` — likely Salla project/service data shape and optional bilingual fields.
- `src/app/layout.tsx` — language/direction strategy, metadata locale, and Person JSON-LD job title.
- `src/app/page.tsx` — revised section order and removal/demotion of unrelated sections.
- `src/app/globals.css` — header cascade fix, RTL-safe styles, contrast, spacing, typography, and motion reduction.
- `src/lib/seo.ts` — Salla-focused title, description, and social alt.
- `src/app/sitemap.ts` — only if project routes or modification-date handling changes.
- `src/components/branding/social-card.tsx` — Salla-focused sharing identity.
- `src/app/opengraph-image.tsx` and `src/app/twitter-image.tsx` — updated alt/copy if the shared card changes.
- `src/components/layout/site-header.tsx` — navigation and CTA hierarchy.
- `src/components/layout/mobile-navigation.tsx` — focus containment, RTL, labels, and simplified actions.
- `src/components/layout/site-logo.tsx` — optimized wordmark implementation.
- `src/components/layout/site-footer.tsx` — focused footer copy/actions.
- `src/components/sections/hero.tsx` — new Salla-first hero and proof.
- `src/components/sections/projects.tsx` — proof-first ordering and section copy.
- `src/components/sections/expertise.tsx` — Salla-specific service presentation if retained.
- `src/components/sections/about.tsx` — shorter credibility copy.
- `src/components/sections/commerce-spotlight.tsx` — likely replacement or removal of equal WordPress/Salla framing.
- `src/components/sections/contact.tsx` — store-URL CTA and contrast fixes.
- `src/components/sections/experience.tsx`, `tech-stack.tsx`, `working-style.tsx`, and `education.tsx` — compress, move, or remove from the primary homepage.
- `src/components/projects/ProjectCard.tsx` — shorter, screenshot-led card and accessible link name.
- `src/components/projects/ProjectHero.tsx` — store URL, precise role, and RTL/link changes.
- `src/components/projects/ProjectGallery.tsx` — RTL controls and any proof-specific captions/layout.
- `src/components/projects/ProjectNavigation.tsx` — RTL-safe direction and labels.
- `src/app/projects/page.tsx` — archive positioning/copy if retained.
- `src/app/projects/[slug]/page.tsx` — Salla case-study structure and CTA.
- `content/projects/salla-ecommerce-stores.mdx` — split/rewrite around verified store-level facts; potentially replace with a Sho9-specific slug.
- Other `content/projects/*.mdx` files — only if contribution claims, visibility, or homepage/archive role changes.
- `public/projects/salla-ecommerce-stores/` or a new `public/projects/sho9/` — approved cover and gallery assets.
- `public/logo.png` — replace with a smaller/tighter asset if the wordmark remains.
- `scripts/validate-seo.mjs` — update hardcoded expected metadata and locale rules.
- `docs/IMPLEMENTATION_PLAN.md`, `docs/portfolio-content.md`, and `README.md` — make the Salla business strategy the maintained source of truth.
- `package.json` and `package-lock.json` — only if motion or another dependency is intentionally removed; no new dependency is currently necessary for the recommended changes.

Files that can likely remain conceptually intact include `next.config.ts`, `postcss.config.mjs`, `tsconfig.json`, the project schema/loader, favicon routes, and the container/tag primitives unless later implementation details require adjustment.
