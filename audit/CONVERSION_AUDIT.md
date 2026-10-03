# Conversion Audit

## Executive assessment

The homepage makes the offer and primary action understandable quickly, especially on mobile. The main conversion constraint is not CTA visibility; it is the amount of uncertainty that remains before a serious buyer is ready to start a WhatsApp conversation. Stronger proof, clearer scope, and better expectation-setting should come before adding more buttons or redesigning the interface.

## Decision-maker test

| Question | Current answer | Assessment |
|---|---|---|
| What is being offered? | Salla store design, theme work, integrations, and maintenance | Clear at a high level |
| Is it relevant to me? | Strong if the visitor already owns or plans a Salla store | Clear, but audience details could be sharper |
| Has Hesham done this before? | Sho9 is shown as relevant proof | Partial; evidence is thin |
| What will happen if I contact him? | WhatsApp opens | Partial; no response/process expectation |
| Can I trust the claims? | Named projects and profiles exist | Partial; limited visuals, attribution, and verified outcomes |

## Strengths

- **Confirmed:** The homepage leads with a specific Salla-focused proposition.
- **Confirmed:** The primary WhatsApp action is visually prominent and understandable.
- **Confirmed:** On a 390 × 844 mobile viewport, the CTA appears in the first screen area and the first Sho9 proof begins soon after it.
- **Confirmed:** The working process is explained on the homepage.
- **Confirmed:** There are no forms, account requirements, modal interruptions, or third-party widgets obstructing contact.
- **Confirmed:** The layout showed no horizontal overflow in the tested mobile viewport.
- **Confirmed:** Contact can be initiated without JavaScript-dependent form submission.

## Conversion friction

### Proof gap — P1

Sho9 signals relevant experience but does not yet answer the buyer's likely follow-up questions: what exactly changed, what Hesham owned, what constraints existed, and what evidence supports the result. This is the largest conversion gap.

### Service scope gap — P1

The homepage lists capabilities but does not define service boundaries or deliverables. A visitor cannot easily distinguish store design from theme development, or determine whether their specific need is in scope.

### Contact expectation gap — P2

The visitor is sent to WhatsApp without being told what information to prepare, what the first conversation covers, or how the engagement typically proceeds. This can reduce qualified inquiries even when the CTA is prominent.

### Trust-detail gap — P2

Email and location appear in structured data but not as visible trust information. The About content is short, and there is no dedicated profile page. External profiles exist but are not enough to substitute for first-party credibility.

### Portfolio relevance gap — P2

Three of four projects are outside the primary Salla proposition. They may support general technical credibility, but without grouping they can make the offer feel less focused.

### Measurement gap — P2

No analytics or event instrumentation was found. The site cannot currently distinguish CTA visibility from CTA engagement or qualified lead outcomes.

## Recommended conversion improvements

### 1. Clarify the offer before adding more CTAs — P1

Create distinct pages for store design and theme development. Each should explain:

- who the service is for;
- what is included and excluded;
- required inputs and dependencies;
- the process and review points;
- relevant proof;
- the most appropriate next step.

### 2. Strengthen the proof path — P1

Make Sho9 a true case study with approved screenshots, precise scope, decisions, and verified outcomes. Surface one or two specific proof points on the homepage and link to the full evidence.

### 3. Set WhatsApp expectations — P2

Near the CTA, briefly state what the visitor should send—for example, their store link, current stage, and required change—and what the initial conversation is intended to determine. Do not promise a response time unless it can be consistently met.

### 4. Add qualification without creating friction — P2

Use concise scope statements and optional prompts instead of a long mandatory form. If lead volume later justifies a form, keep WhatsApp available and test the impact.

### 5. Improve trust visibility — P2

Publish a focused About page, show accurate contact/location context if desired, and link verified professional profiles. Keep claims factual and avoid badges or testimonials without a source.

### 6. Organize proof by relevance — P2

Feature Salla work first, then label the remaining projects as broader technical experience. This preserves breadth without weakening the main commercial narrative.

### 7. Measure the funnel — P2

Track at minimum:

- WhatsApp CTA clicks by page and placement;
- service-page visits;
- case-study visits and service-to-case navigation;
- outbound project/live-site clicks;
- qualified inquiry count using a privacy-conscious manual or CRM classification.

Event counts alone do not prove business impact. Define a qualified inquiry and compare changes over a meaningful period.

## Mobile and accessibility considerations

- **Confirmed:** The tested mobile layout did not overflow horizontally.
- **Confirmed:** The main CTA has a usable visual size in the tested viewport.
- **Confirmed:** Images use intrinsic dimensions through Next Image, lowering obvious layout-shift risk.
- **Likely / field verification required:** Motion and sitewide client hydration could affect responsiveness on slower devices; measure INP and real-user performance before changing animation behavior.
- **Recommendation:** Ensure focus styles, keyboard order, contrast, and reduced-motion behavior are included in formal accessibility testing. A visual mobile check alone cannot confirm these.
- **Recommendation:** If project screenshots are added, preserve readable captions and avoid hiding essential evidence in carousels.

## Testing plan

Do not begin with cosmetic A/B tests. Establish the evidence and service structure, then measure:

1. Homepage → service-page engagement.
2. Service page → Sho9 case-study engagement.
3. Case study/service page → WhatsApp clicks.
4. WhatsApp clicks → qualified conversations.
5. Qualified conversations → agreed next step.

Potential later tests should change one meaningful decision element at a time: CTA expectation copy, proof placement, or service qualification copy. Avoid optimizing for click volume if lead quality falls.

## Prioritized actions

1. **P1:** Deepen Sho9 proof.
2. **P1:** Create distinct service pages with clear scope.
3. **P2:** Explain the WhatsApp next step and requested inquiry context.
4. **P2:** Make About and trust information more visible.
5. **P2:** Group portfolio work by relevance.
6. **P2:** Add privacy-conscious conversion measurement and a qualified-lead definition.
7. **P3:** Run focused tests only after baseline measurement exists.

