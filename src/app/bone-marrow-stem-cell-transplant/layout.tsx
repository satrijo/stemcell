import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bone Marrow Stem Cell Transplant Malaysia | Procedure, Costs & Recovery",
  description:
    "Comprehensive guide to bone marrow stem cell transplant in Malaysia — eligibility criteria, procedure steps, costs, recovery timeline, and leading haematology centres.",
  keywords:
    "bone marrow transplant malaysia, bone marrow stem cell malaysia, BMT malaysia, bone marrow transplant cost malaysia",
  alternates: {
    canonical: "https://stemcell.my/bone-marrow-stem-cell-transplant",
  },
  openGraph: {
    title: "Bone Marrow Stem Cell Transplant Malaysia | Procedure, Costs & Recovery",
    description:
      "Comprehensive guide to bone marrow stem cell transplant in Malaysia — eligibility, costs, recovery timeline, and leading haematology centres.",
    url: "https://stemcell.my/bone-marrow-stem-cell-transplant",
    type: "website",
    images: [{ url: "https://stemcell.my/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bone Marrow Stem Cell Transplant Malaysia | Procedure & Costs",
    description:
      "Guide to bone marrow stem cell transplant in Malaysia — eligibility, costs, and recovery.",
    images: ["https://stemcell.my/og-default.jpg"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
