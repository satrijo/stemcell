import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stem Cell Therapy for Neurological Disorders Malaysia | Brain & Spine",
  description:
    "Stem cell treatment for MS, Parkinson's, ALS, and stroke recovery in Malaysia. Learn about MSC neuroprotection, delivery methods, and realistic outcomes.",
  alternates: { canonical: "https://stemcell.my/stem-cell-therapy-neurological-disorders-malaysia" },
  openGraph: {
    title: "Stem Cell Therapy for Neurological Disorders Malaysia | Brain & Spine",
    description: "Stem cell treatment for MS, Parkinson's, ALS, and stroke recovery in Malaysia — MSC neuroprotection, delivery methods, and realistic outcomes.",
    url: "https://stemcell.my/stem-cell-therapy-neurological-disorders-malaysia",
    type: "website",
    images: [{ url: "https://stemcell.my/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stem Cell Therapy for Neurological Disorders Malaysia | Brain & Spine",
    description: "Stem cell treatment for MS, Parkinson's, ALS, and stroke recovery in Malaysia — realistic outcomes explained.",
    images: ["https://stemcell.my/og-default.jpg"],
  },
};

const faqs = [
  { q: "Is stem cell therapy a cure for neurological diseases?", a: "Currently, stem cell therapy is not a cure for most neurological conditions. It is best understood as a disease-modifying and symptom-improving therapy. It can slow progression, improve quality of life, and in some cases (like MS) lead to long-term remission." },
  { q: "What type of stem cells are used for neurological conditions?", a: "Mesenchymal stem cells (MSCs) are most commonly used for their potent neuroprotective and anti-inflammatory properties. For MS, hematopoietic stem cell transplantation (HSCT) is increasingly used under strict clinical protocols." },
  { q: "How is the treatment delivered to the brain?", a: "Delivery methods include intravenous (IV) infusion, intrathecal injection (into the spinal fluid), and in specialised cases, direct intraparenchymal injection. IV and intrathecal routes are most common in Malaysia." },
  { q: "What results can realistically be expected?", a: "Results vary by condition, stage, and patient health. Common improvements include reduced fatigue, better motor coordination, improved speech, and slowed disease progression. Full recovery is rare but quality-of-life improvements are frequently reported." },
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
