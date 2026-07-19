import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Allogeneic Stem Cell Transplant Malaysia | Donor Transplant Guide",
  description:
    "How allogeneic (donor) stem cell transplants work in Malaysia. GvL effect, donor matching via PBMDR, risks vs. benefits, and cost comparison vs. Singapore.",
  alternates: { canonical: "https://stemcell.my/allogeneic-stem-cell-transplant" },
  openGraph: {
    title: "Allogeneic Stem Cell Transplant Malaysia | Donor Transplant Guide",
    description: "How allogeneic (donor) stem cell transplants work in Malaysia. GvL effect, donor matching via PBMDR, risks vs. benefits, and cost comparison vs. Singapore.",
    url: "https://stemcell.my/allogeneic-stem-cell-transplant",
    type: "website",
    images: [{ url: "https://stemcell.my/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Allogeneic Stem Cell Transplant Malaysia | Donor Transplant Guide",
    description: "How allogeneic donor stem cell transplants work in Malaysia — GvL effect, donor matching, risks, and costs.",
    images: ["https://stemcell.my/og-default.jpg"],
  },
};

const faqs = [
  { q: "What is the graft-versus-leukaemia (GvL) effect?", a: "GvL is a powerful anti-cancer benefit of allogeneic transplant. Donor T-cells recognize the recipient's remaining leukaemia cells as foreign and destroy them — an immune attack on cancer. This is why allo transplant can achieve long-term remission even in high-risk leukaemia." },
  { q: "How do I find a donor in Malaysia?", a: "Malaysia has a national bone marrow registry (PBMDR). If no local match is found, international registries (BMDW, NMDP) covering 40+ million donors worldwide are searched. For patients without a matched donor, haploidentical transplant from a family member is now a well-established alternative." },
  { q: "Is allogeneic transplant more dangerous than autologous?", a: "Yes — transplant-related mortality (TRM) is higher for allo (5–15%) than auto (<2%) largely due to GvHD and infection from prolonged immunosuppression. However, for diseases where GvL effect matters (like AML, MDS, CML), the benefit far outweighs the risk." },
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
