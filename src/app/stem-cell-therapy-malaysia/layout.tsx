import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stem Cell Therapy Malaysia — Complete Patient Guide",
  description:
    "Everything you need to know about stem cell therapy in Malaysia: how it works, what conditions it treats, costs, safety, and how to find MOH-approved clinics.",
  alternates: { canonical: "https://stemcell.my/stem-cell-therapy-malaysia" },
  openGraph: {
    title: "Stem Cell Therapy Malaysia — Complete Patient Guide",
    description: "Everything about stem cell therapy in Malaysia: how it works, conditions treated, costs, safety, and MOH-approved clinics.",
    url: "https://stemcell.my/stem-cell-therapy-malaysia",
    type: "website",
    images: [{ url: "https://stemcell.my/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stem Cell Therapy Malaysia — Complete Patient Guide",
    description: "Everything about stem cell therapy in Malaysia: conditions treated, costs, safety, and MOH-approved clinics.",
    images: ["https://stemcell.my/og-default.jpg"],
  },
};

const faqs = [
  { q: "Is stem cell therapy legal in Malaysia?", a: "Yes, stem cell therapy is legal in Malaysia when performed in compliance with the Ministry of Health (MOH) guidelines. Only approved medical facilities and licensed practitioners are permitted to offer these treatments." },
  { q: "How much does it typically cost?", a: "The cost varies significantly depending on the type of treatment, the condition being treated, and the source of stem cells. It generally ranges from RM 15,000 to RM 80,000+. A consultation is required for an exact quote." },
  { q: "Are there any side effects?", a: "When using your own cells (autologous), the risk of rejection is essentially zero. Common side effects are mild and temporary, such as soreness at the injection site, minor swelling, or fatigue." },
  { q: "How long does it take to see results?", a: "Results vary by patient and condition. Some patients report improvement within a few weeks, while for others it may take 2 to 6 months as the regenerative process takes time to rebuild tissue." },
  { q: "Does insurance cover stem cell therapy in Malaysia?", a: "Currently, most health insurance policies in Malaysia do not cover stem cell therapy as it is often considered an elective or experimental treatment. It's best to check directly with your insurance provider." },
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
