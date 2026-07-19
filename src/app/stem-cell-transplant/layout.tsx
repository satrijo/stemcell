import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stem Cell Transplant Malaysia | Complete Guide to All Types & Procedures",
  description:
    "Comprehensive guide to stem cell transplants in Malaysia — autologous, allogeneic, and haploidentical procedures, conditions treated, costs, and recovery expectations.",
  keywords:
    "stem cell transplant malaysia, SCT malaysia, stem cell transplant types, stem cell transplant cost malaysia",
  alternates: {
    canonical: "https://stemcell.my/stem-cell-transplant",
  },
  openGraph: {
    title: "Stem Cell Transplant Malaysia | Complete Guide to All Types",
    description:
      "Comprehensive guide to stem cell transplants in Malaysia — autologous, allogeneic, conditions treated, costs, and recovery.",
    url: "https://stemcell.my/stem-cell-transplant",
    type: "website",
    images: [{ url: "https://stemcell.my/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stem Cell Transplant Malaysia | All Types & Procedures",
    description:
      "Complete guide to stem cell transplants in Malaysia — types, conditions treated, costs, and recovery.",
    images: ["https://stemcell.my/og-default.jpg"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
