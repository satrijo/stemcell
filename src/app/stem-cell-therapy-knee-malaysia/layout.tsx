import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stem Cell Therapy for Knee Pain Malaysia | Joint Regeneration",
  description:
    "Non-surgical stem cell treatment for knee osteoarthritis, cartilage damage, and chronic joint pain in Malaysia. Avoid knee replacement and recover faster.",
  alternates: { canonical: "https://stemcell.my/stem-cell-therapy-knee-malaysia" },
  openGraph: {
    title: "Stem Cell Therapy for Knee Pain Malaysia | Joint Regeneration",
    description: "Non-surgical stem cell treatment for knee osteoarthritis, cartilage damage, and chronic joint pain in Malaysia.",
    url: "https://stemcell.my/stem-cell-therapy-knee-malaysia",
    type: "website",
    images: [{ url: "https://stemcell.my/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stem Cell Therapy for Knee Pain Malaysia | Joint Regeneration",
    description: "Non-surgical stem cell treatment for knee osteoarthritis and cartilage damage in Malaysia.",
    images: ["https://stemcell.my/og-default.jpg"],
  },
};

const faqs = [
  { q: "Will this completely cure my knee osteoarthritis?", a: "While stem cell therapy is highly effective at reducing pain and regenerating some lost cartilage, it is not a 'cure-all'. It can significantly delay or prevent the need for knee replacement, but severe, bone-on-bone osteoarthritis may still require surgical intervention." },
  { q: "How is the injection administered?", a: "The injection is typically administered directly into the knee joint (intra-articular) under ultrasound guidance to ensure precise placement of the cells." },
  { q: "Is the procedure painful?", a: "Most patients experience only mild discomfort similar to a standard joint injection. Local anesthesia is used to numb the area beforehand." },
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
