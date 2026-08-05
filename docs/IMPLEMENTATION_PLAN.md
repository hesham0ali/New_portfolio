# Portfolio Implementation Plan

## 1. Project Goals

- Build a fast, credible, professional one-page portfolio in English using Next.js App Router, TypeScript, and Tailwind CSS.
- Position Hesham as: **“Junior Software Engineer focused on Backend, Integrations, Automation, WordPress, and E-commerce Solutions.”**
- Demonstrate real contribution and business-process awareness without implying sole ownership or inventing outcomes.
- Give backend/CRM, WordPress/custom plugins, Salla/e-commerce, and integrations/automation substantial, balanced coverage.
- Generate the page statically from typed local data. No backend, CMS, database, authentication, contact form, or unnecessary client-side state is needed.
- Keep the first release useful without project screenshots through strong typography, structured project cards, and intentional placeholders.

## 2. Target Audiences

1. **Recruiters and hiring managers** evaluating junior backend, integration, automation, WordPress, and e-commerce experience.
2. **Engineering leads** looking for evidence of practical delivery, troubleshooting, testing, deployment support, and maintainable implementation.
3. **Local and international clients** seeking custom WordPress features, Salla store delivery, integrations, or existing-system improvements.

Each audience should understand the positioning, strongest evidence, selected work, and contact path within a short scan.

## 3. Final One-Page Information Architecture

1. **Sticky header:** name/wordmark, Home, About, Expertise, Projects, Experience, Contact, and “Let’s Talk” email CTA.
2. **Hero (`#home`):** supplied eyebrow, backend/WordPress/e-commerce headline, positioning statement, View My Work, Contact Me, and Download CV actions.
3. **Proof strip:** “1M+ Users — Platform scale exposure,” “5,000+ Records — CRM import and pagination testing,” and “API-First — Integrations and workflow automation.” Qualifiers must remain visible.
4. **About (`#about`):** Alexandria location, BIS background, business-process approach, and current growth direction.
5. **Expertise (`#expertise`):** four equal pillars—Backend Systems & APIs; WordPress & Custom Plugin Development; Salla & E-commerce Delivery; Integrations & Workflow Automation.
6. **Selected Work (`#projects`):** full project entries for Albasit CRM, Mithaq, Salla Stores, and HR Expert Club. Each includes category, summary, contribution bullets, and verified technologies.
7. **WordPress & E-commerce spotlight:** a dedicated two-column section for custom WordPress/Multisite work and end-to-end Salla delivery, followed by an email CTA.
8. **Experience (`#experience`):** Moraqmen role, January 2026–Present, responsibilities, and technology environment.
9. **Tools & Technologies:** grouped, scannable stack; technologies remain supporting evidence rather than the main story.
10. **Working Style:** Understand the Process, Build Practical Solutions, Improve Existing Systems, and Test Before Delivery.
11. **Education:** BIS degree, institution, expected graduation in 2027, and its connection to business-process understanding.
12. **Contact (`#contact`) and footer:** email, LinkedIn, GitHub once confirmed, CV download, Alexandria location, and professional copyright line.

## 4. Component Structure

- `src/app/layout.tsx`: global font, metadata, document language, and site-wide shell concerns.
- `src/app/page.tsx`: server-rendered section composition only; it should import structured content rather than contain long copy.
- `src/components/layout/`: `SiteHeader`, `SiteFooter`, and reusable `Container`.
- `src/components/sections/`: `Hero`, `About`, `Expertise`, `Projects`, `CommerceSpotlight`, `Experience`, `TechStack`, `WorkingStyle`, `Education`, and `Contact`.
- `src/components/ui/`: `SectionHeading`, `ActionLink`, `ProofItem`, `ExpertiseCard`, `ProjectCard`, `TagList`, and `ProjectPlaceholder`.

Prefer Server Components. If a collapsible mobile menu is needed, isolate it as the only small Client Component; a native disclosure is preferable if it remains clear and accessible. Avoid a general component system, animation library, carousel, or icon package.

## 5. Content and Data Structure

Create a typed `src/data/portfolio.ts` (and a small `src/types/portfolio.ts` only if useful) with:

- identity, positioning, location, and contact links;
- navigation and CTA labels;
- hero copy and qualified proof items;
- expertise groups with descriptions and capabilities;
- projects with slug, category, title, summary, overview, contribution list, technologies, closing text, optional URL, and optional image;
- experience, stack categories, working principles, education, and footer copy.

Render arrays with stable IDs. Keep every sentence traceable to `docs/portfolio-content.md`; reference PDFs are corroborating material, not permission to add extra claims. Optional fields allow links and images to be added later without changing section components.

## 6. Responsive Behavior

- Use a mobile-first layout supporting at least 320px widths without horizontal overflow.
- Stack hero content, proof items, expertise cards, project details, spotlight columns, and contact actions on small screens; progressively use two or three columns where content remains readable.
- Keep body text at a comfortable line length and scale headings with responsive CSS rather than fixed oversized values.
- Make the header usable on touch screens, preserve visible access to the primary CTA, and apply `scroll-margin` to anchored sections beneath the sticky header.
- Let technology tags wrap naturally. Placeholders must preserve a consistent aspect ratio without reserving excessive mobile height.
- Avoid parallax and essential hover-only interactions; respect `prefers-reduced-motion` for any transitions or smooth scrolling.

## 7. Accessibility Requirements

- Use semantic landmarks (`header`, `nav`, `main`, `section`, `footer`), one descriptive `h1`, and a logical heading hierarchy.
- Include a skip link, visible keyboard focus, keyboard-operable navigation, and descriptive link names.
- Meet WCAG 2.2 AA contrast targets; do not convey categories or states through color alone.
- Keep interactive targets approximately 44×44px and ensure hover, focus, and active states are distinct.
- Use meaningful alt text only for informative images. Mark decorative placeholders appropriately and include visible project names so no information depends on imagery.
- Avoid unnecessary ARIA. Indicate downloads and any links that open a new tab; prefer normal same-tab behavior for external links.
- Test zoom to 200%, keyboard-only flow, reduced motion, screen-reader landmarks/headings, and ESLint accessibility rules.

## 8. SEO and Metadata Requirements

- Use the supplied title: “Hesham Ali | Backend, WordPress & E-commerce Software Engineer.”
- Use the supplied meta and Open Graph descriptions, adjusting only if needed to fit practical length limits without changing meaning.
- Set `lang="en"`; add a canonical URL only after the production domain is confirmed.
- Configure Open Graph and X card metadata. Omit `og:image` until a real branded social card exists; never substitute a fake project screenshot.
- Add static `robots.txt` and `sitemap.xml` once the canonical domain is known.
- Add sanitized JSON-LD for a `Person`, limited to verified identity, job title, location, and confirmed profile URLs. Validate it before release.
- Ensure page copy contains the primary topic terms naturally; do not add keyword stuffing or unsupported service claims.

## 9. Asset Requirements

**Required before launch:**

- One approved public CV PDF and final download filename.
- Confirmed GitHub profile URL.
- Confirmed production domain; the reference `hehsamali.com` may be a typo and the content document deliberately leaves the domain unresolved.
- Permission/decision to expose client or project URLs publicly.

**Optional enhancements:** a professional portrait, a personal wordmark, approved project screenshots, and a branded 1200×630 social card. Until screenshots are provided, use neutral, labeled visual panels based on project category and technologies—never fabricated interfaces or results. Existing Create Next App logos are starter assets and should not ship.

## 10. Implementation Phases

1. **Content confirmation:** resolve the CV, GitHub URL, domain, public project links, and client-name permissions; freeze approved copy.
2. **Foundation:** define typed data, design tokens, typography, global styles, page landmarks, and reusable primitives.
3. **Primary narrative:** implement header, hero, proof, about, expertise, and the four complete project entries.
4. **Depth and conversion:** add the WordPress/e-commerce spotlight, experience, stack, working style, education, contact actions, placeholders, and footer.
5. **Responsive and accessible refinement:** complete breakpoints, mobile navigation, focus states, motion preferences, and semantic review.
6. **SEO and release assets:** replace starter metadata/icons, add verified structured data, CV, canonical-dependent files, and an approved social card if available.
7. **Validation:** run lint and production build, complete browser/device and accessibility checks, audit content claims and links, and address performance regressions.

No implementation begins until this plan and the unresolved content decisions are approved.

## 11. Validation Checklist

### Content and credibility

- [ ] Required positioning appears verbatim and the site remains English-language.
- [ ] Every project, capability, technology, metric, and date is supported by `docs/portfolio-content.md`.
- [ ] “1M+” describes exposure to a platform’s scale, not ownership or an individually achieved user metric.
- [ ] “5,000+” describes import/pagination testing records, not customers acquired or active users.
- [ ] Contribution verbs remain accurate (`contributed`, `supported`, `configured`, or `delivered` as supplied).
- [ ] WordPress/custom plugins and Salla/e-commerce are prominent in expertise, projects, and the dedicated spotlight.
- [ ] No testimonial, client result, performance percentage, or undocumented case study is introduced.

### Function, responsive behavior, and accessibility

- [ ] All anchor links, `mailto:`, LinkedIn, GitHub, project, and CV links work; no contact form exists.
- [ ] Layout is checked at 320px, 375px, 768px, 1024px, and wide desktop sizes with no clipping or overflow.
- [ ] Keyboard order, skip link, focus visibility, headings, landmarks, target sizes, contrast, zoom, and reduced motion pass review.
- [ ] Missing screenshots render as deliberate labeled placeholders with no fake UI.

### Quality, performance, and discovery

- [ ] `npm run lint` and `npm run build` pass under the repository’s installed Next.js version.
- [ ] The page remains statically renderable with minimal client JavaScript and no unnecessary dependencies.
- [ ] Images, if supplied, have dimensions, efficient formats, responsive sizing, and correct alt text; fonts cause no visible layout shift.
- [ ] Title, description, favicon, Open Graph/X metadata, canonical, robots, sitemap, and JSON-LD are correct for the confirmed domain.
- [ ] Structured data validates, social previews are checked, and a Lighthouse review shows no material accessibility, SEO, or performance issues.
