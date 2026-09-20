# Salla Portfolio Implementation Plan

## Purpose

HeshamAli.com is an Arabic-first service portfolio for Salla merchants. It positions Hesham Ali as a Salla developer and helps a merchant send their store URL through WhatsApp with minimal friction.

## Core product decisions

- **Primary audience:** merchants using or planning to use Salla.
- **Primary offer:** design and development of Salla stores from start to finish.
- **Primary CTA:** `ابعت رابط متجرك`.
- **Primary language:** Arabic with RTL layout.
- **Supporting terminology:** English product and technical terms may remain where natural.
- **Trust rule:** never imply employment, certification, or partnership with Salla without proof.

## Homepage information architecture

1. Compact header with three navigation links and WhatsApp CTA.
2. Salla-focused hero with the offer visible immediately.
3. Featured Sho9 proof.
4. Four focused Salla capability blocks.
5. Short four-step process.
6. Short about/credibility section.
7. Strong final WhatsApp CTA.
8. Minimal footer.

Additional Salla stores appear only when their public URL, contribution, and assets are verified. Broader technical work remains under `/projects` and does not compete with the homepage offer.

## Verified Sho9 facts

- Public name: شوب ستور — Sho9.
- URL: `https://sho9.com`.
- Contribution: design and development from start to finish.
- Status: ongoing maintenance.

No conversion results, revenue metrics, testimonial, launch date, or unsupported feature list may be added.

## Asset policy

- No approved Sho9 screenshot or personal portrait is currently stored in the repository.
- Expected Sho9 cover path: `public/projects/sho9/cover.webp`.
- Do not fabricate storefront screenshots, portraits, results, or testimonials.
- Once approved, project images require accurate alt text and optional factual captions.

## Responsive and accessibility requirements

- Zero horizontal overflow at 320, 360, 375, 390, 430, 768, 1024, and 1440 px.
- Header must show only the mobile menu below the desktop breakpoint and the WhatsApp CTA on desktop.
- Touch targets should be approximately 44 px or larger.
- Preserve the skip link, semantic landmarks, focus-visible styles, and reduced-motion support.
- Mobile navigation must contain focus and restore it when closed.
- Use logical CSS properties and deliberate bidi handling for English terms, URLs, and numbers.

## SEO

- Homepage title: `هشام علي | مطور سلة — تصميم وتطوير متاجر سلة`.
- Arabic description focused on store design, theme customization, interface quality, and mobile experience.
- Root document: `lang="ar" dir="rtl"`.
- Open Graph locale: `ar_SA`.
- Preserve canonical, robots, sitemap, icon, social-image, and structured-data infrastructure.

## Release validation

Run lint, project validation, production build, and SEO validation. Then inspect the built site at all required widths, confirm every WhatsApp URL uses the central data source, and verify the old grouped Salla route redirects to `/projects/sho9`.
