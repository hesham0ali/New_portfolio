# Internal Linking Audit

## Current link graph

The current graph is small and crawlable, but it does not yet reflect the intended commercial hierarchy.

```text
Homepage
├── #work
├── #service
├── #about
├── Sho9 project
└── WhatsApp / external profiles

Sho9 project
├── Projects archive
├── Previous/next project
└── External live store

Projects archive
└── Four project pages

Each project page
├── Projects archive
├── Previous/next project
└── External link when available
```

## Confirmed strengths

- All indexable project pages are reachable through crawlable links.
- The project archive links to all four projects.
- Previous/next navigation forms a complete sequence through the project set.
- Header section links work from non-home routes by pointing back to homepage fragments.
- Link labels are generally understandable, and there are no obvious broken internal links in the audited routes.
- External links are used selectively rather than overwhelming the primary navigation.

## Gaps and risks

- **P1 — Structural gap:** There are no service pages to receive authority from the homepage, case studies, or future guides.
- **P2 — Confirmed:** The homepage does not link directly to `/projects`; users reach the archive through the featured project page.
- **P2 — Confirmed:** The homepage About section cannot link to a deeper profile because `/about` does not exist.
- **P2 — Confirmed:** Project pages do not link to a relevant service page or explain which capability the project demonstrates.
- **P2 — Confirmed:** There are no visible breadcrumbs, so parent-child context depends on a “back to projects” control.
- **P2 — Confirmed:** Sequential previous/next links connect projects regardless of topic, so a Salla visitor can be sent directly into unrelated technical work without contextual framing.
- **P3 — Likely:** Repeated generic anchors such as “view project” or navigation-only labels communicate less context than descriptive project and service anchors.

## Recommended target graph

```text
Homepage
├── Salla store design
│   └── Sho9 case study
├── Salla theme development
│   └── Sho9 case study
├── Project archive
│   ├── Salla work
│   └── Broader technical experience
├── About Hesham Ali
└── Contact / WhatsApp

Sho9 case study
├── Relevant service page(s)
├── Project archive
├── About
└── Contact / WhatsApp

Future guide
├── One primary relevant service
└── One supporting case study where genuinely useful
```

## Exact placement recommendations

### Homepage

- Link each service summary heading or CTA to its dedicated page.
- Add a clear “all projects” link near the featured Sho9 project.
- Link the About summary to `/about` once that page contains substantive content.
- Keep the main WhatsApp CTA, but pair it with clear expectation text rather than adding multiple competing CTAs.

### Service pages

- Link from the introduction to the other service only when the difference helps the visitor choose.
- Link the evidence section to the relevant Sho9 case-study section using a descriptive anchor.
- Link process-related questions to supporting guides only after those guides exist.
- Provide one primary contact action after enough scope and proof have been presented.

### Sho9 case study

- Link the named deliverables to the service pages they substantiate.
- Include a visible breadcrumb: Home → Projects → Sho9.
- Link to About near authorship/role context only where natural.
- Keep the archive link; consider replacing topic-blind previous/next navigation with “related work” if more Salla cases become available.

### Project archive

- Group or label projects by strategic relevance.
- Use project names and meaningful summaries as linked text, not only generic controls.
- Provide a route back to the relevant service area for visitors who have finished evaluating proof.

### About page

- Link the current Salla specialty to both service pages.
- Link only selected, relevant proof rather than repeating the entire archive.
- Link approved external profiles and the contact path.

## Anchor text guidance

Use concise anchors that explain the destination in the surrounding sentence:

- Good: `خدمة تصميم متاجر سلة`
- Good: `تطوير وتخصيص ثيم سلة`
- Good: `دراسة حالة متجر Sho9 على سلة`
- Good: `كل المشاريع والخبرات التقنية`
- Weak when repeated alone: `اعرف المزيد`, `اضغط هنا`, `عرض`

Do not force the same exact-match phrase into every link. Vary anchors naturally and prioritize comprehension.

## Orphan and depth assessment

- **Confirmed:** No generated indexable content page is fully orphaned.
- **Confirmed:** All project pages are within a few link steps of the homepage.
- **P2:** `/projects` is unnecessarily indirect from the homepage despite being a primary trust destination.
- **Future control:** Any new service, About, or guide page must be linked from at least one persistent or strong contextual location before it is placed in the sitemap.

## Prioritized actions

1. **P1:** Create the core service destinations before expanding the link graph.
2. **P2:** Add a direct homepage/navigation link to `/projects`.
3. **P2:** Link homepage service summaries to their dedicated pages.
4. **P2:** Link Sho9 evidence back to the relevant service page(s).
5. **P2:** Add visible and structured breadcrumbs to project and service pages.
6. **P2:** Add a substantive About destination and connect it contextually.
7. **P3:** Reassess previous/next navigation when enough topically related projects exist.

