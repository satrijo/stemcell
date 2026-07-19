# StemCell.my Design System

## 0. Research Log
- Existing UI audit: current 21-section homepage, shared teal components, and Playwright evidence at 1280px and 375px.
- Sheet audit: the Google Sheet defines SEO/content intent and explicitly withholds success-rate and banking-price pages until evidence exists.
- Reference synthesis: Doxy and Grove supplied the editorial split hero, calm white space, serif emphasis, large photography, and restrained clinical rhythm.
- Clinic-direction research: patient-journey and modern private-clinic references reinforced a clinic-first flow of concern → treatment pathway → safety → consultation, with photography used to humanise care rather than imply unsupported credentials.
- Skipped lanes: live reference cloning and image generation — the project already has usable Unsplash imagery and the redesign is constrained by existing content.

## 1. Atmosphere & Identity
StemCell.my should feel like a premium, patient-first clinic experience: warm, calm, photographic, and persuasive without hype. The homepage is clinic-first with education as its trust layer. The signature is a teal “evidence rail” that guides visitors from a concern to a treatment pathway, a safety check, or a consultation without inventing clinical credentials.

## 2. Color

### Palette
| Role | Token | Light | Usage |
|---|---|---|---|
| Surface / primary | `--surface-primary` | `#FFFFFF` | Page and hero background |
| Surface / secondary | `--surface-secondary` | `#F6FAF9` | Quiet information bands |
| Surface / elevated | `--surface-elevated` | `#FFFFFF` | Cards and menus |
| Text / primary | `--text-primary` | `#0F172A` | Headings and high-priority copy |
| Text / secondary | `--text-secondary` | `#475569` | Body and explanations |
| Text / tertiary | `--text-tertiary` | `#64748B` | Metadata and supporting labels |
| Border / default | `--border-default` | `#D7E4E1` | Navigation, cards, dividers |
| Border / subtle | `--border-subtle` | `#E8F0EE` | Quiet section separation |
| Accent / primary | `--accent-primary` | `#0D9488` | Links, focus, primary actions |
| Accent / hover | `--accent-hover` | `#0F766E` | Hover and active states |
| Accent / pale | `--accent-pale` | `#CCFBF1` | Tags, evidence rails, soft highlights |
| Caution | `--status-warning` | `#B45309` | Uncertainty and verification notes |
| Dark information | `--surface-information` | `#123C3A` | Purposeful evidence panels only |

### Rules
- Teal is semantic: it marks a path, source, action, or verification step. It is not a decorative gradient.
- The default inner-page navbar uses the primary surface and primary text. The homepage may use the `overlay` navbar variant over a darkened full-bleed hero; links must switch to dark text after scroll.
- Dark information panels are limited to evidence and safety literacy, never generic marketing sections.

## 3. Typography

### Scale
| Level | Size | Weight | Line Height | Usage |
|---|---|---:|---:|---|
| Display | `clamp(2.75rem, 6vw, 5.75rem)` | 700 | 0.98 | Hero headline |
| H1 | `clamp(2.25rem, 4vw, 4rem)` | 700 | 1.05 | Major section headline |
| H2 | `clamp(1.75rem, 3vw, 3rem)` | 650 | 1.12 | Section headline |
| H3 | `1.375rem` | 650 | 1.3 | Card and panel title |
| Body large | `1.125rem` | 400 | 1.65 | Hero and section lead |
| Body | `1rem` | 400 | 1.6 | Default copy |
| Body small | `0.875rem` | 400 | 1.5 | Supporting copy |
| Caption | `0.75rem` | 600 | 1.4 | Metadata and labels |

### Font Stack
- Primary: Geist Sans from `next/font/google`.
- Serif accent: Georgia for short italic editorial emphasis only.
- Maximum two families; no new font dependency.

### Rules
- Use `text-wrap: balance` for headings and `text-wrap: pretty` for prose where supported.
- Keep body copy around 65 characters per line.
- Use sentence case for headings. Small caps are reserved for section labels.

## 4. Spacing & Layout

### Base Unit
All spacing derives from 4px.

| Token | Value | Usage |
|---|---:|---|
| `--space-2` | 8px | Icon and label gap |
| `--space-4` | 16px | Compact control padding |
| `--space-6` | 24px | Card padding |
| `--space-8` | 32px | Card group gap |
| `--space-12` | 48px | Section inner rhythm |
| `--space-16` | 64px | Standard section separation |
| `--space-24` | 96px | Major section separation |
| `--space-32` | 128px | Hero breathing room |

### Grid
- Max content width: 1280px.
- Desktop: 12-column grid with 24px gutters.
- Tablet: 8-column grid with 20px gutters.
- Mobile: one-column flow with 16px side padding.
- Breakpoints: 640px, 768px, 1024px, 1280px.
- Prefer asymmetric editorial layouts over repeated equal three-card rows.

## 5. Components

### Primary Navigation
- **Structure**: fixed `nav`, brand link, desktop disclosure buttons, mobile menu button, menu panel.
- **Variants**: default, scrolled, desktop, mobile.
- **States**: default, hover, active, focus-visible, expanded, dismissed.
- **Accessibility**: named nav landmark, `aria-expanded`, `aria-controls`, Escape dismissal, keyboard reachability, 4.5:1 text contrast.
- **Motion**: menu opacity plus transform only; reduced motion removes transitions.

### Evidence Rail
- **Structure**: small label, one evidence or uncertainty statement, contextual link.
- **Variants**: source-led, safety-led, uncertainty-led.
- **States**: default, hover, focus.
- **Accessibility**: readable as normal content; never communicates an unsupported badge.

### Full-bleed Clinic Hero
- **Structure**: full-width real consultation image, dark teal gradient overlay, eyebrow, single clear promise, primary consultation CTA, secondary treatment CTA, and three trust points.
- **Variants**: homepage overlay, campaign landing page.
- **Rules**: imagery establishes care context but does not imply that StemCell.my owns the facility or depicts a named clinician; no guarantees, outcome percentages, or unsupported credentials.
- **Accessibility**: meaningful hero image has descriptive alt text; text contrast is checked against the overlay at desktop and mobile; CTAs remain reachable above the fold.

### Treatment Index
- **Structure**: editorial split layout with a sticky section intro and a compact list of image thumbnails, pathway label, treatment title, qualified description, and directional link.
- **Variants**: homepage index, full treatment directory.
- **States**: default, hover, focus-visible.
- **Accessibility**: each row is one link target; thumbnail alt may be decorative when adjacent text supplies the same meaning; no horizontal overflow at 375px.

### Topic Card
- **Structure**: image or tonal media, topic label, qualified description, route link.
- **Variants**: featured, compact, education, safety.
- **States**: default, hover, focus-visible.
- **Accessibility**: one meaningful link target, descriptive alt text, no named clinician/patient implication from stock imagery.

### Clinical Pathway
- **Structure**: numbered steps from question to independent assessment and follow-up.
- **Variants**: four-step desktop rail, stacked mobile list.
- **Accessibility**: semantic ordered list; numbers are supplementary, not the only labels.

### CTA
- **Structure**: clear action, honest expectation, secondary education link.
- **Variants**: information request, education, consultation route, clinic verification.
- **Rules**: no “free”, “guaranteed”, “right therapy”, response-time promise, or medical-advisor claim without evidence.

## 6. Motion & Interaction

| Type | Duration | Easing | Usage |
|---|---:|---|---|
| Micro | 120ms | ease-out | Press and color response |
| Standard | 240ms | ease-in-out | Dropdown and mobile panel |
| Emphasis | 520ms | `cubic-bezier(0.16, 1, 0.3, 1)` | Hero entry |

### Rules
- Animate only `transform` and `opacity`; never animate layout properties.
- Never use `whileInView`; existing motion uses mount-time `animate` and should remain deterministic.
- Every motion must clarify an entrance or interaction state.
- Respect `prefers-reduced-motion` and keep keyboard focus visible.

## 7. Depth & Surface

### Strategy
Mixed, with tonal shifts as the primary separation and restrained tinted shadows for elevated menus and primary media.

- Cards use tonal backgrounds or subtle borders; avoid border-plus-shadow on every card.
- Dropdowns use a white surface, `--border-default`, and a teal-tinted shadow.
- Hero media uses a real image with a soft cream/teal atmospheric layer, not a flat geometric focal object.
- Clinic hero media is full-bleed and uses a dark teal readability gradient; below-the-fold media uses restrained rounded crops and lazy loading.
- Keep corner radii varied: 12px controls, 20px cards, 32px feature media.

## 8. Accessibility Constraints & Accepted Debt

### Constraints
- WCAG 2.2 AA target: 4.5:1 body text, 3:1 large text, visible focus for every interactive element, full keyboard navigation, no horizontal overflow at 375px, and reduced-motion support.
- Content must distinguish education from treatment availability and must not imply that StemCell.my is a clinic, regulator, certifier, or hospital network without documentary evidence.
- Medical uncertainty is part of the interface: qualify claims and link to relevant education, safety, legal, or verification pages.

### Accepted Debt
| Item | Location | Why accepted | Exit |
|---|---|---|---|
| Existing inner-page copy still needs a full evidence pass | `src/app/**` | User requested homepage and navbar first; audit has identified the backlog | Remediate route-by-route after homepage sign-off |
| Existing image CDN is Unsplash | `src/components/home/**` | It is already configured and prevents a new asset pipeline in this iteration | Replace only when licensed clinical assets are supplied |
