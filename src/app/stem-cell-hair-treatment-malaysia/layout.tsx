import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stem Cell Hair Loss Treatment Malaysia | Follicle Regeneration",
  description:
    "Clinically proven stem cell hair treatments in Malaysia for androgenetic alopecia and hair thinning. Minimal downtime, long-lasting results without surgery.",
  alternates: { canonical: "https://stemcell.my/stem-cell-hair-treatment-malaysia" },
  openGraph: {
    title: "Stem Cell Hair Loss Treatment Malaysia | Follicle Regeneration",
    description: "Clinically proven stem cell hair treatments in Malaysia for androgenetic alopecia and hair thinning. Minimal downtime, long-lasting results without surgery.",
    url: "https://stemcell.my/stem-cell-hair-treatment-malaysia",
    type: "website",
    images: [{ url: "https://stemcell.my/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stem Cell Hair Loss Treatment Malaysia | Follicle Regeneration",
    description: "Proven stem cell hair treatments for alopecia and hair thinning in Malaysia — minimal downtime, surgery-free.",
    images: ["https://stemcell.my/og-default.jpg"],
  },
};

const faqs = [
  { q: "Is stem cell hair treatment better than a hair transplant?", a: "They serve different purposes. Stem cell therapy is excellent for thickening existing thinning hair and reviving dormant follicles without surgery. However, if a follicle is completely dead, a hair transplant is required. Often, doctors combine both treatments for optimal results." },
  { q: "How many sessions are required?", a: "Unlike PRP which requires multiple sessions, many autologous stem cell treatments (like Regenera Activa) require only one single session to see results lasting 1-3 years." },
  { q: "Is there any downtime?", a: "Downtime is minimal. You can usually return to work the next day. However, you should avoid strenuous exercise, swimming, or washing your hair for the first 24-48 hours." },
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
