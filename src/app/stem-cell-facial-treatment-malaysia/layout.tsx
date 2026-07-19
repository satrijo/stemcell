import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stem Cell Facial Treatment Malaysia | Skin Rejuvenation",
  description:
    "Achieve younger-looking skin with stem cell facial treatments in Malaysia. Exosome facials, adipose-derived protocols, and combination therapy for collagen regeneration.",
  alternates: { canonical: "https://stemcell.my/stem-cell-facial-treatment-malaysia" },
  openGraph: {
    title: "Stem Cell Facial Treatment Malaysia | Skin Rejuvenation",
    description: "Achieve younger-looking skin with stem cell facial treatments in Malaysia — exosome facials, adipose-derived protocols, and collagen regeneration.",
    url: "https://stemcell.my/stem-cell-facial-treatment-malaysia",
    type: "website",
    images: [{ url: "https://stemcell.my/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stem Cell Facial Treatment Malaysia | Skin Rejuvenation",
    description: "Younger-looking skin with stem cell facials in Malaysia — exosome protocols and collagen regeneration.",
    images: ["https://stemcell.my/og-default.jpg"],
  },
};

const faqs = [
  { q: "Is stem cell facial treatment the same as PRP (platelet-rich plasma)?", a: "Not exactly. While both are regenerative, PRP uses growth factors from your blood platelets, while stem cell facials use actual stem cell-derived exosomes or adipose-derived stem cells for deeper cellular renewal. Some clinics combine both for enhanced results." },
  { q: "How many sessions are needed?", a: "Most patients see significant improvement after 2–3 sessions spaced 4–6 weeks apart. A maintenance session every 6–12 months is recommended for sustained results." },
  { q: "Is the treatment painful?", a: "A topical numbing cream is applied before treatment. Most patients describe the sensation as mild tingling or pressure — minimal discomfort overall." },
  { q: "What is the cost of stem cell facial treatment in Malaysia?", a: "Costs range from RM 1,500 to RM 6,000 per session depending on the protocol (exosome-based, PRP-combined, or full adipose-derived). Package deals are often available." },
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
