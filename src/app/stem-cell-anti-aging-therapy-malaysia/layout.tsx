import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stem Cell Anti-Aging Therapy Malaysia | Longevity Medicine",
  description:
    "Reverse cellular aging with stem cell anti-aging therapy in Malaysia. IV infusions, exosome protocols, and integrated longevity medicine for energy, immunity, and vitality.",
  alternates: { canonical: "https://stemcell.my/stem-cell-anti-aging-therapy-malaysia" },
  openGraph: {
    title: "Stem Cell Anti-Aging Therapy Malaysia | Longevity Medicine",
    description: "Reverse cellular aging with stem cell anti-aging therapy in Malaysia — IV infusions, exosome protocols, and integrated longevity medicine.",
    url: "https://stemcell.my/stem-cell-anti-aging-therapy-malaysia",
    type: "website",
    images: [{ url: "https://stemcell.my/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stem Cell Anti-Aging Therapy Malaysia | Longevity Medicine",
    description: "Reverse cellular aging with stem cell therapy in Malaysia — IV infusions, exosome protocols, and longevity medicine.",
    images: ["https://stemcell.my/og-default.jpg"],
  },
};

const faqs = [
  { q: "At what age should I start stem cell anti-aging therapy?", a: "Most longevity medicine specialists recommend starting between ages 40–55 when cellular decline begins to accelerate. However, younger patients with specific biomarker imbalances or chronic fatigue may also benefit." },
  { q: "Is anti-aging stem cell therapy approved in Malaysia?", a: "Stem cell therapies in Malaysia are regulated by the Ministry of Health. Reputable clinics operate under strict MOH guidelines. Always verify a clinic's certification before proceeding." },
  { q: "How soon will I feel the effects?", a: "Many patients report improved energy and sleep quality within 2–4 weeks. Systemic benefits such as improved immunity, skin quality, and cognitive clarity typically become evident over 2–3 months." },
  { q: "Is it safe to combine with other wellness treatments?", a: "Yes. Stem cell therapy pairs well with NAD+ infusions, ozone therapy, and peptide protocols. Your physician will design an integrated plan tailored to your health goals." },
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
