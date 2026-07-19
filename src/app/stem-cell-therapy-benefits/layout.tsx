import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Benefits of Stem Cell Therapy Malaysia | Evidence-Based Guide",
  description:
    "What are the real benefits of stem cell therapy? Pain reduction, tissue regeneration, immune modulation, and anti-aging — backed by clinical evidence.",
  alternates: { canonical: "https://stemcell.my/stem-cell-therapy-benefits" },
  openGraph: {
    title: "Benefits of Stem Cell Therapy Malaysia | Evidence-Based Guide",
    description: "Real benefits of stem cell therapy — pain reduction, tissue regeneration, immune modulation, and anti-aging backed by clinical evidence.",
    url: "https://stemcell.my/stem-cell-therapy-benefits",
    type: "website",
    images: [{ url: "https://stemcell.my/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Benefits of Stem Cell Therapy Malaysia | Evidence-Based Guide",
    description: "Real, evidence-backed benefits of stem cell therapy — pain relief, regeneration, immunity, and anti-aging in Malaysia.",
    images: ["https://stemcell.my/og-default.jpg"],
  },
};

const faqs = [
  { q: "How long until I see results?", a: "Timeline varies by condition. Joint patients often report 4–8 weeks for initial improvement; full results at 3–6 months. Systemic conditions (autoimmune, neurological) may show gradual improvement over 3–12 months." },
  { q: "Are the benefits permanent?", a: "Not always. Some patients achieve long-lasting or permanent improvement (particularly in autoimmune remission cases). Others benefit for 1–3 years before considering a booster session. Outcome depends on condition severity, age, and lifestyle factors." },
  { q: "What if stem cell therapy doesn't work for me?", a: "Non-response does occur, particularly in very advanced disease. Reputable clinics will honestly assess your eligibility and set realistic expectations before treatment. If you're not a good candidate, a good doctor will tell you." },
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
