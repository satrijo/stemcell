import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Umbilical Cord Stem Cell Storage Malaysia | Complete Banking Guide 2025",
  description:
    "Everything parents need to know about umbilical cord stem cell storage in Malaysia — collection process, costs, storage options, banking providers, and future medical uses.",
  keywords:
    "umbilical cord stem cell storage malaysia, cord blood banking malaysia, cord tissue banking, umbilical cord stem cells malaysia",
  alternates: {
    canonical: "https://stemcell.my/umbilical-cord-stem-cell-storage",
  },
  openGraph: {
    title: "Umbilical Cord Stem Cell Storage Malaysia | Complete Banking Guide",
    description:
      "Everything parents need to know about umbilical cord stem cell storage in Malaysia — collection, costs, providers, and future uses.",
    url: "https://stemcell.my/umbilical-cord-stem-cell-storage",
    type: "website",
    images: [{ url: "https://stemcell.my/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Umbilical Cord Stem Cell Storage Malaysia | Banking Guide",
    description:
      "Everything about umbilical cord stem cell storage in Malaysia — collection, costs, and providers.",
    images: ["https://stemcell.my/og-default.jpg"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
