import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stem Cell Therapy for Autoimmune Disease Malaysia | Immune Reset",
  description:
    "How HSC transplants and MSC therapy can achieve remission in rheumatoid arthritis, lupus, Crohn's, and multiple sclerosis. Expert guide for Malaysian patients.",
  alternates: { canonical: "https://stemcell.my/stem-cell-therapy-autoimmune-disease" },
  openGraph: {
    title: "Stem Cell Therapy for Autoimmune Disease Malaysia | Immune Reset",
    description: "HSC transplants and MSC therapy for remission in rheumatoid arthritis, lupus, Crohn's, and multiple sclerosis — expert guide for Malaysian patients.",
    url: "https://stemcell.my/stem-cell-therapy-autoimmune-disease",
    type: "website",
    images: [{ url: "https://stemcell.my/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stem Cell Therapy for Autoimmune Disease Malaysia | Immune Reset",
    description: "MSC and HSCT therapy for remission in RA, lupus, Crohn's, and MS — Malaysia patient guide.",
    images: ["https://stemcell.my/og-default.jpg"],
  },
};

const faqs = [
  { q: "Is stem cell therapy better than biologics for autoimmune disease?", a: "They work differently. Biologics target specific immune pathways to reduce symptoms. Stem cell therapy aims to re-educate or reset the immune system — potentially achieving remission rather than just symptom control. Many patients explore stem cells after failing multiple biologic therapies." },
  { q: "Which type of stem cell therapy is best for autoimmune disease?", a: "HSCT is favoured for severe, refractory autoimmune conditions (especially MS, Crohn's, SLE). MSC therapy is preferred for milder disease or patients who cannot tolerate the conditioning regimen required for HSCT." },
  { q: "What are the risks?", a: "HSCT carries higher risk due to the chemotherapy conditioning phase — though centres with experience have significantly reduced treatment-related mortality to below 1%. MSC therapy is considerably safer with a good tolerability profile." },
  { q: "Can I continue my current medications during stem cell therapy?", a: "This depends on the treatment protocol. Some medications may need to be paused while others are maintained. Your physician will review your medication list and provide specific guidance." },
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
