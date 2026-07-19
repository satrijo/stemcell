import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hematopoietic Stem Cell Transplant (HSCT) Malaysia | Blood Cancer Treatment",
  description:
    "Complete guide to HSCT in Malaysia for leukaemia, lymphoma, myeloma, and severe autoimmune disease. Costs, donor matching, procedure, and recovery timeline.",
  alternates: { canonical: "https://stemcell.my/hematopoietic-stem-cell-transplant" },
  openGraph: {
    title: "Hematopoietic Stem Cell Transplant (HSCT) Malaysia | Blood Cancer Treatment",
    description: "Complete guide to HSCT in Malaysia for leukaemia, lymphoma, myeloma, and severe autoimmune disease. Costs, donor matching, procedure, and recovery timeline.",
    url: "https://stemcell.my/hematopoietic-stem-cell-transplant",
    type: "website",
    images: [{ url: "https://stemcell.my/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hematopoietic Stem Cell Transplant (HSCT) Malaysia | Blood Cancer Treatment",
    description: "Complete guide to HSCT in Malaysia — leukaemia, lymphoma, myeloma, costs, donor matching, and recovery.",
    images: ["https://stemcell.my/og-default.jpg"],
  },
};

const faqs = [
  { q: "What is HSCT and why is it different from regular stem cell therapy?", a: "HSCT is a medical transplant procedure used to treat blood cancers and severe autoimmune disease. Unlike regenerative MSC therapy (which adds cells to help repair tissue), HSCT destroys the existing blood and immune system with chemotherapy and replaces it entirely with new stem cells — either from the patient or a donor." },
  { q: "How long is the hospital stay?", a: "Typically 4–6 weeks for the initial transplant and engraftment phase. After discharge, patients require close outpatient monitoring for 3–6 months during the early recovery period." },
  { q: "What is graft-versus-host-disease (GvHD)?", a: "GvHD occurs in allogeneic transplants when donor immune cells attack the recipient's tissues. Acute GvHD occurs in 30–60% of cases; chronic GvHD in 20–50%. It's managed with immunosuppression and is a major focus of transplant medicine today." },
  { q: "What is the cost of HSCT in Malaysia?", a: "Autologous HSCT: RM 60,000–120,000. Allogeneic (related donor): RM 100,000–180,000. Allogeneic (unrelated donor): RM 150,000–250,000. These are significantly lower than Singapore (2–3x higher) or the UK/US (5–10x higher)." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
