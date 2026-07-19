import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mesenchymal Stem Cell Therapy Malaysia | MSC Treatment Guide",
  description:
    "How mesenchymal stem cells (MSCs) work, what conditions they treat, delivery methods, and safety profile. The science behind Malaysia's most popular regenerative therapy.",
  alternates: { canonical: "https://stemcell.my/mesenchymal-stem-cell-therapy" },
  openGraph: {
    title: "Mesenchymal Stem Cell Therapy Malaysia | MSC Treatment Guide",
    description: "How mesenchymal stem cells work, what conditions they treat, delivery methods, and safety profile — Malaysia's most popular regenerative therapy.",
    url: "https://stemcell.my/mesenchymal-stem-cell-therapy",
    type: "website",
    images: [{ url: "https://stemcell.my/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mesenchymal Stem Cell Therapy Malaysia | MSC Treatment Guide",
    description: "How MSCs work, what conditions they treat, delivery methods, and safety profile in Malaysia.",
    images: ["https://stemcell.my/og-default.jpg"],
  },
};

const faqs = [
  { q: "What makes MSCs different from other stem cells?", a: "MSCs have three defining properties: they can self-renew, differentiate into multiple tissue types, and — uniquely — they modulate the immune system. This makes them effective for both degenerative and inflammatory conditions. They also have very low immunogenicity, meaning allogeneic (donor) MSCs are well-tolerated without full immunosuppression." },
  { q: "How are MSCs delivered into the body?", a: "Delivery method depends on the target condition: intravenous (IV) infusion for systemic conditions; direct injection into joints, discs, or lesions for localised conditions; or intrathecal injection for neurological applications. IV is most common at Malaysian clinics." },
  { q: "How many MSCs are needed for a treatment?", a: "Typical therapeutic doses range from 50 million to 200 million cells per treatment, though protocols vary. Higher cell counts are generally used for systemic conditions, lower counts for localised joint injections." },
  { q: "Are allogeneic (donor) MSCs safe?", a: "Yes. MSCs express very low levels of MHC class II antigen — meaning they largely 'fly under the radar' of the recipient's immune system. Published data from large cohorts show allogeneic MSC infusions are well-tolerated with minimal adverse events in most patients." },
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
