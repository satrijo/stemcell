import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stem Cell Banking Malaysia | Cord Blood & Tissue Storage Guide 2025",
  description:
    "Complete guide to stem cell banking in Malaysia — cord blood collection, storage options, costs, banking providers, and how banked cells are used in future medical treatments.",
  keywords:
    "stem cell banking malaysia, cord blood banking malaysia, umbilical cord stem cell banking, stem cell storage malaysia",
  alternates: {
    canonical: "https://stemcell.my/stem-cell-banking-malaysia",
  },
  openGraph: {
    title: "Stem Cell Banking Malaysia | Cord Blood & Tissue Storage Guide 2025",
    description:
      "Complete guide to stem cell banking in Malaysia — cord blood collection, storage options, costs, and banking providers.",
    url: "https://stemcell.my/stem-cell-banking-malaysia",
    type: "website",
    images: [{ url: "https://stemcell.my/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stem Cell Banking Malaysia | Cord Blood & Tissue Storage Guide",
    description:
      "Complete guide to stem cell banking in Malaysia — cord blood collection, storage options, and costs.",
    images: ["https://stemcell.my/og-default.jpg"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
