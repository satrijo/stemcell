import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is Stem Cell Therapy? | How It Works — Malaysia Guide",
  description:
    "Plain-English explanation of how stem cell therapy works: what happens during treatment, types of procedures, where cells come from, and what to expect.",
  alternates: { canonical: "https://stemcell.my/what-is-stem-cell-therapy" },
  openGraph: {
    title: "What Is Stem Cell Therapy? | How It Works — Malaysia Guide",
    description: "Plain-English explanation of stem cell therapy — what happens during treatment, procedure types, cell sources, and what to expect in Malaysia.",
    url: "https://stemcell.my/what-is-stem-cell-therapy",
    type: "website",
    images: [{ url: "https://stemcell.my/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is Stem Cell Therapy? | How It Works — Malaysia Guide",
    description: "Plain-English guide to stem cell therapy in Malaysia — how treatment works, cell sources, and what to expect.",
    images: ["https://stemcell.my/og-default.jpg"],
  },
};

const faqs = [
  { q: "Is stem cell therapy painful?", a: "Most targeted injections involve local anesthesia, making the procedure no more painful than a standard joint injection or blood draw. IV therapies are entirely painless." },
  { q: "How long does a session take?", a: "The actual administration usually takes between 30 minutes to 2 hours, depending on whether it is a targeted injection or an IV drip. It is an outpatient procedure, meaning you go home the same day." },
  { q: "Are the cells manipulated genetically?", a: "No. In clinical therapies available in Malaysia, mesenchymal stem cells (MSCs) are simply isolated, expanded in number, and concentrated. Their genetics are not altered." },
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
