# StemCell.my Design System

## 1. Atmosphere & Identity

StemCell.my feels like a calm, independent medical navigator: clinically precise without looking sterile, reassuring without making promises. The visual contract comes from `ref/themejunction.net/html/bexon/demo/index-2.html` and its `home-2.webp` preview, reinterpreted for patient education rather than copied as a business template. Its signature is a framed photographic hero followed by an asymmetric editorial grid of quiet mineral surfaces.

## 2. Color

| Role | Token | Value | Usage |
|---|---|---:|---|
| Canvas | `--canvas` | `#ecf0f0` | Page background |
| Surface | `--surface` | `#ffffff` | Navigation and cards |
| Surface soft | `--surface-soft` | `#d8e5e5` | Editorial panels |
| Ink | `--ink` | `#0c1e21` | Primary headings and dark sections |
| Text | `--text` | `#364e52` | Body copy |
| Muted | `--muted` | `#67787a` | Metadata and secondary copy |
| Border | `--border` | `#c9d1d1` | Dividers and controls |
| Accent | `--accent` | `#1e8a8a` | Links, buttons, active states |
| Accent dark | `--accent-dark` | `#116969` | Hover and accessible small text |
| Accent pale | `--accent-pale` | `#cee0e0` | Selected and supporting surfaces |
| On dark | `--on-dark` | `#f7fbfa` | Text on ink surfaces |
| Warning | `--warning` | `#9a5b21` | Medical caveats only |

Accent is functional, not decorative confetti. Photography carries atmosphere; color carries hierarchy and action.

## 3. Typography

Mona Sans is self-hosted from `ref/` via `next/font/local`; system sans is the fallback. The reference's moderate weights are retained to avoid the over-bold startup look.

| Role | Size | Weight | Line height | Tracking |
|---|---|---:|---:|---:|
| Display | `clamp(3rem, 7vw, 6.75rem)` | 500 | 0.92 | -0.055em |
| Section | `clamp(2.35rem, 4.6vw, 4.75rem)` | 500 | 0.98 | -0.045em |
| Card title | `clamp(1.4rem, 2vw, 2rem)` | 500 | 1.12 | -0.025em |
| Lead | `clamp(1.05rem, 1.5vw, 1.25rem)` | 400 | 1.6 | -0.01em |
| Body | `1rem` | 400 | 1.7 | 0 |
| Small | `0.875rem` | 500 | 1.5 | 0 |
| Eyebrow | `0.6875rem` | 700 | 1.2 | 0.16em |

## 4. Spacing & Layout

- Base unit: 4px.
- Tokens: `--space-1` 4px, `--space-2` 8px, `--space-3` 12px, `--space-4` 16px, `--space-5` 20px, `--space-6` 24px, `--space-8` 32px, `--space-10` 40px, `--space-12` 48px, `--space-16` 64px, `--space-20` 80px, `--space-24` 96px, `--space-30` 120px.
- Content width: 1360px. Reading width: 680px. Outer page inset: `clamp(12px, 2vw, 28px)`.
- Desktop uses a 12-column grid. Tablet and mobile collapse according to reading order rather than preserving visual symmetry.
- Section rhythm is generous but varied: compact proof bands separate larger narrative sections.

## 5. Components

### Frame
- **Structure**: centered max-width container with responsive outer inset.
- **States**: static.
- **Accessibility**: never clips focus rings.
- **Layout**: document-flow shell. The full desktop link row appears from 1344px; below it, the mobile disclosure prevents the brand, links, and CTA from colliding.

### ArrowLink
- **Structure**: text plus circular arrow control.
- **Variants**: accent fill, dark fill, outline.
- **States**: hover translates the icon once; active compresses; focus uses a visible accent outline; disabled is not used for links.
- **Accessibility**: descriptive link text; icon is decorative.
- **Motion**: 180ms transform and color only.

### EditorialCard
- **Structure**: optional index/eyebrow, heading, copy, optional media/action.
- **Variants**: white, soft, dark, photographic.
- **States**: interactive cards reveal an arrow and lift media by 2%; static cards do not animate.
- **Accessibility**: full-card links keep meaningful names; contrast meets WCAG AA.
- **Layout**: grid item; radius 12px, matching the Bexon reference rather than pill-heavy UI.

### SectionHeading
- **Structure**: eyebrow, large heading, optional supporting paragraph/action.
- **States**: static.
- **Accessibility**: logical heading order, balanced text only above mobile width.
- **Layout**: split heading/supporting-copy composition.

### FAQRow
- **Structure**: native button header and region answer.
- **States**: collapsed, expanded, hover, focus.
- **Accessibility**: `aria-expanded`, `aria-controls`, keyboard-native button.
- **Motion**: opacity/translate reveal; no animated layout properties.

### Navigation
- **Structure**: floating brand bar, desktop links, Explore popover, consultation CTA, mobile disclosure.
- **States**: transparent-on-hero, solid-on-scroll, popover open, mobile open, focus.
- **Accessibility**: Escape closes overlays; outside click closes popover; all controls have names.
- **Motion**: 200ms opacity/translate and surface transition.

## 6. Motion & Interaction

| Type | Duration | Easing | Use |
|---|---:|---|---|
| Micro | 180ms | ease-out | Arrows, buttons, focus-adjacent feedback |
| Standard | 280ms | ease-in-out | Menus and FAQ content |
| Emphasis | 650ms | `cubic-bezier(.16,1,.3,1)` | Hero load and viewport reveal |

Only `transform`, `opacity`, and color/filter transitions are animated. Viewport reveals use CSS view timelines where supported, with static content as the fallback. `prefers-reduced-motion` disables reveals, marquee movement, and image scaling. The one signature moment is the hero copy settling over the framed photograph.

## 7. Depth & Surface

Strategy: mixed tonal shift and restrained shadow. Most separation comes from `canvas → soft → surface → ink`; only floating navigation and menus use shadow. Photography receives directional overlays, never glass cards stacked over glass cards.

| Level | Value | Usage |
|---|---|---|
| Subtle | `0 1px 0 rgba(12,30,33,.06)` | Card separation |
| Floating | `0 18px 50px rgba(12,30,33,.14)` | Navigation popover |

## 8. Accessibility Constraints & Accepted Debt

- Target WCAG 2.2 AA: 4.5:1 body text, 3:1 large text and UI boundaries.
- Visible keyboard focus on every interactive element; touch targets at least 44px.
- Mobile copy uses natural line wrapping and avoids isolated one-word display lines.
- Reduced-motion preferences are respected globally.
- No fake doctors, patient outcomes, partner endorsements, or unsupported clinic metrics are presented.

### Accepted Debt

None.
