# StemCell.my

StemCell.my is a Malaysia-focused stem cell care website designed as a **clinic-first experience supported by patient education**. The site helps visitors explore treatment pathways, understand evidence and risks, verify providers, and request a consultation without using unsupported outcome promises.

## Product direction

The experience follows a patient journey:

1. Arrive with a condition or question.
2. Explore a relevant treatment pathway.
3. Understand the process, costs, evidence, and safety checks.
4. Prepare for a conversation with a qualified provider.

The homepage is intentionally conversion-aware, but it does not invent clinic credentials, success rates, doctors, pricing, or accreditation. Those details should be added only when the business supplies verified information.

## Homepage structure

The current homepage lives in `src/components/home/ClinicHomepage.tsx` and includes:

- Full-bleed consultation hero with transparent-to-scrolled navbar state.
- Consultation and treatment discovery CTAs.
- Image-led treatment pathways for orthopaedics, transplant, aesthetics, and emerging applications.
- Patient-first care approach and consultation expectations.
- Four-step patient journey from first question to follow-up.
- Clinic verification and safety checklist.
- Education centre with science, treatment-process, and cost guides.
- FAQ and final consultation CTA.

The route shell is `src/app/page.tsx`. The visual contract and tokens are documented in [`DESIGN.md`](./DESIGN.md).

## Content areas

The App Router contains pages for:

- Treatment and condition guides.
- Stem cell education and types.
- Stem cell transplant pathways.
- Stem cell banking.
- Malaysian research and regulation.
- Clinic verification and consultation.

Internal links should preserve the distinction between established care, emerging research, educational information, and provider availability.

## Tech stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Geist via `next/font`
- Lucide React icons
- Framer Motion for purposeful navigation and interaction states
- Unsplash image CDN through `next/image`

## Getting started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production validation:

```bash
npm run lint
npm run build
npm run start
```

## Consultation form

`src/app/api/consultation/route.ts` sends consultation requests through Web3Forms. Configure the following environment variable before using the form in a deployed environment:

```bash
WEB3FORMS_ACCESS_KEY=your_access_key
```

Without the key, the API intentionally returns a configuration error instead of silently dropping a request.

## Design and content guardrails

- Use the teal accent for actions, evidence, safety, and navigation cues.
- Keep medical copy qualified and specific to the evidence available.
- Do not claim guaranteed cures, universal suitability, success rates, or regulatory approval without documentation.
- Do not present stock imagery as a named clinician, patient outcome, or owned facility.
- Keep consultation CTAs clear, but never pressure visitors to book.
- Preserve visible focus states, keyboard navigation, readable contrast, and mobile layouts without horizontal overflow.

## Deployment

The project is designed for Vercel:

1. Import the repository into Vercel.
2. Use the default Next.js build settings.
3. Add `WEB3FORMS_ACCESS_KEY` in Project Settings → Environment Variables.
4. Deploy and verify the homepage, consultation form, and key content routes in production.

