# HeshamAli.com

Arabic-first portfolio and service website for Hesham Ali, a Salla developer focused on designing and developing Salla stores.

## Product direction

- Primary audience: Salla merchants.
- Primary offer: Salla store design and development from start to finish.
- Primary action: send the store URL through WhatsApp.
- Language and direction: Arabic / RTL.
- Canonical site: `https://www.heshamali.com`.

The homepage is intentionally focused on the Salla offer. Broader technical projects remain available under `/projects` as secondary professional evidence.

## Stack

- Next.js 16 App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Local typed data and MDX project entries
- Vercel deployment

## Local development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run lint
npm run projects:validate
npm run build
npm run seo:validate
```

## Content locations

- Homepage and contact data: `src/data/portfolio.ts`
- Homepage composition: `src/app/page.tsx`
- Project entries: `content/projects/*.mdx`
- Project assets: `public/projects/<slug>/`
- Project authoring guide: `docs/PROJECTS_GUIDE.md`

The Sho9 case study uses approved live-store visuals from `public/projects/sho9/`, referenced by `content/projects/sho9.mdx`.

Do not publish unverified store ownership, results, metrics, or testimonials. Do not imply an official partnership with Salla.
