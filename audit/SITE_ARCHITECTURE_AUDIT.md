# Site Architecture Audit

## Current architecture

The site is a small statically generated portfolio with one commercial homepage, one project archive, and three project detail pages.

```text
/
└── /projects
    ├── /projects/sho9
    ├── /projects/mithaq-wordpress-multisite
    └── /projects/hr-expert-club
```

In practice, the header on the homepage navigates to page sections rather than `/projects`, and the project archive is reached through a project-detail path. That makes the logical information architecture clearer in the code than in the primary navigation.

## Architecture strengths

- **Confirmed:** The route set is compact and free of obvious crawl traps, faceted URLs, pagination duplication, or parameterized indexable pages.
- **Confirmed:** Every known content URL has a distinct canonical and appears in the sitemap.
- **Confirmed:** Projects use stable, descriptive slugs.
- **Confirmed:** One archive consolidates all project discovery; there is no duplicate `/work` route.
- **Confirmed:** Static generation makes all route content directly crawlable.
- **Confirmed:** Next/previous project navigation connects all three case-study pages.

## Architecture weaknesses

- **P1 — Confirmed:** The service taxonomy exists only as homepage sections. The two most important commercial intents have no independent, linkable destinations.
- **P1 — Confirmed:** There is no About/Profile page to anchor the person entity and trust content.
- **P2 — Confirmed:** The homepage has no direct contextual or primary-navigation link to `/projects`; the archive is indirectly reachable through the featured Sho9 page.
- **P2 — Confirmed:** The portfolio archive combines one strategically relevant Salla project with two broader engineering projects without a clear hierarchy.
- **P2 — Confirmed:** Project pages have no visible breadcrumb trail.
- **P2 — Confirmed:** The site root is Arabic, while two English project documents only change language/direction inside `<main>`.
- **P3 — Confirmed:** A contact route is absent, though the current WhatsApp CTA prevents this from being a conversion blocker.

## Page-type decisions

| Candidate | Decision | Reason |
|---|---|---|
| Salla store design service | Create, P1 | Distinct commercial intent and enough scope for a useful page |
| Salla theme development service | Create, P1 | Distinct technical/commercial intent; should not be folded into design copy |
| About/Profile | Create, P1 | Needed for trust, branded intent, and entity clarity |
| Contact | Optional, P3 | Create only if it adds inquiry expectations or alternate contact paths |
| Work archive | Do not create | `/projects` already serves this intent |
| Blog/resources hub | Later, P3 | Premature until core service and proof pages are complete |
| City/country service pages | Do not create by default | High duplication risk without genuinely different services or evidence |
| Separate English site | Defer | Only justified when the complete commercial experience can be maintained in English |

## Recommended target hierarchy

```text
/
├── /services
│   ├── /services/salla-store-design
│   └── /services/salla-theme-development
├── /projects
│   ├── /projects/sho9
│   ├── /projects/mithaq-wordpress-multisite
│   └── /projects/hr-expert-club
├── /about
└── /contact                  (optional, only if useful)
```

A `/services` index is optional at this size. If it is created, it must contain useful comparison and selection content rather than two cards and duplicated copy.

## Topic clusters

### Commercial Salla cluster

```text
Homepage
├── Salla store design service
├── Salla theme development service
└── Sho9 case study
```

Each node should link to the other relevant nodes with descriptive, natural anchors. The Sho9 page should identify which service capabilities it proves. Each service page should point to the most relevant section of the case study.

### Entity and trust cluster

```text
Homepage
├── About Hesham Ali
├── Project archive
└── Contact path
```

The About page should connect professional identity, approved external profiles, selected proof, and contact. It should not compete with service pages for service-intent queries.

### Supporting knowledge cluster — later

Future guides should sit under one consistent directory such as `/insights` or `/guides`, not both. They should support a service page and contain original experience. A hub is unnecessary until multiple strong guides exist.

## Navigation recommendations

- **P1:** Add clear routes to the two core service pages when they exist.
- **P1:** Add About to the site-wide navigation once the page is substantive.
- **P2:** Expose `/projects` directly from the homepage and/or primary navigation.
- **P2:** Keep the homepage section links for fast scanning, but do not use them as the only route to deeper information.
- **P2:** Add visible breadcrumbs on project and service pages, backed by `BreadcrumbList` schema.
- **P2:** Ensure the footer or equivalent persistent area exposes identity, project archive, services, and a contact route without becoming a dense link directory.

## URL and canonical principles

- Continue using lowercase, stable, descriptive slugs.
- Keep `/projects` as the single archive; do not introduce `/work` aliases unless they permanently redirect.
- Use one service namespace for both planned service pages.
- Do not put dates in evergreen service URLs.
- Maintain one-hop redirects where possible. The current HTTP apex request takes two hops before reaching HTTPS `www`; this is minor but can be simplified at the hosting/domain layer.
- Do not add locale folders until there is a complete, maintainable localization strategy.

## Language architecture

The current commercial strategy is Arabic-first. That should remain the document-level default unless a full English experience is intentionally launched.

Recommended near-term approach:

1. Keep the commercial site Arabic-first.
2. Translate or reframe the three English project pages into Arabic while preserving necessary technical terms.
3. Do not add hreflang because there are no paired translations today.
4. If an English version becomes a real business requirement, create complete `/en/` equivalents with self-canonicals and reciprocal hreflang, not isolated English pages within an Arabic document shell.

## Architecture priorities

1. **P1:** Establish the two-service architecture.
2. **P1:** Add the About/Profile destination.
3. **P2:** Make `/projects` directly discoverable from the homepage/navigation.
4. **P2:** Organize the archive to distinguish primary Salla proof from broader technical experience.
5. **P2:** Add visible and structured breadcrumbs.
6. **P2:** Resolve mixed document-language handling.
7. **P3:** Add a contact page or resource hub only when each has unique user value.
