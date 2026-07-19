import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stem Cell Therapy Cost in Malaysia 2024 | Price Guide",
  description:
    "Transparent cost breakdown for stem cell therapy in Malaysia. Compare prices for knee, hair, anti-aging, and systemic treatments. RM 5,000–250,000 range explained.",
  alternates: { canonical: "https://stemcell.my/stem-cell-therapy-cost-malaysia" },
  openGraph: {
    title: "Stem Cell Therapy Cost in Malaysia 2024 | Price Guide",
    description: "Transparent cost breakdown for stem cell therapy in Malaysia. Compare prices for knee, hair, anti-aging, and systemic treatments — RM 5,000–250,000 explained.",
    url: "https://stemcell.my/stem-cell-therapy-cost-malaysia",
    type: "website",
    images: [{ url: "https://stemcell.my/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stem Cell Therapy Cost in Malaysia 2024 | Price Guide",
    description: "Transparent pricing for stem cell therapy in Malaysia — knee, hair, anti-aging, and systemic treatments from RM 5,000.",
    images: ["https://stemcell.my/og-default.jpg"],
  },
};

const faqs = [
  { q: "Why is stem cell therapy cheaper in Malaysia than in the US or Australia?", a: "Malaysia benefits from a lower cost of living, favorable exchange rates, and a highly government-supported medical tourism infrastructure. The clinical standards and CGMP laboratory facilities are world-class, but operational and administrative costs are significantly lower than in Western countries." },
  { q: "Is there hidden pricing or extra fees?", a: "Reputable, MOH-compliant clinics will provide a transparent, all-inclusive quote after your initial consultation. This usually covers cell harvesting, processing, administration, and standard follow-ups. Always ask if blood work or MRI scans are included." },
  { q: "Can I use medical insurance or Medisave?", a: "Currently, stem cell therapy is largely classified as an elective or experimental treatment by most insurance providers globally, including those in Malaysia. Patients typically pay out-of-pocket." },
  { q: "Do clinics offer payment plans?", a: "Many premium medical centers and specialized clinics in Malaysia offer installment plans or partner with local banks to provide 0% interest financing options for 6 to 24 months." },
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
