import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Types of Stem Cells Explained | Embryonic, Adult, MSC & iPSC Guide",
  description:
    "Clear scientific explanation of all major stem cell types — embryonic, adult, mesenchymal (MSC), haematopoietic (HSC), and induced pluripotent (iPSC) — with medical applications.",
  keywords:
    "types of stem cells, mesenchymal stem cells, embryonic stem cells, iPSC malaysia, haematopoietic stem cells, stem cell types explained",
  alternates: {
    canonical: "https://stemcell.my/types-of-stem-cells",
  },
  openGraph: {
    title: "Types of Stem Cells Explained | Embryonic, Adult, MSC & iPSC",
    description:
      "Scientific explanation of all major stem cell types — embryonic, adult, MSC, HSC, and iPSC — with medical applications.",
    url: "https://stemcell.my/types-of-stem-cells",
    type: "website",
    images: [{ url: "https://stemcell.my/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Types of Stem Cells Explained | Embryonic, Adult, MSC & iPSC",
    description:
      "Scientific explanation of stem cell types — embryonic, adult, MSC, and iPSC — with medical applications.",
    images: ["https://stemcell.my/og-default.jpg"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
