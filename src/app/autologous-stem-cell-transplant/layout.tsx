import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autologous Stem Cell Transplant Malaysia | Self-Donor Procedure Guide",
  description:
    "Complete guide to autologous stem cell transplant in Malaysia — using your own stem cells. Learn about eligibility, procedure, recovery, costs, and outcomes at Malaysian centres.",
  keywords:
    "autologous stem cell transplant malaysia, auto SCT malaysia, self stem cell transplant, ASCT malaysia",
  alternates: {
    canonical: "https://stemcell.my/autologous-stem-cell-transplant",
  },
  openGraph: {
    title: "Autologous Stem Cell Transplant Malaysia | Self-Donor Procedure Guide",
    description:
      "Complete guide to autologous stem cell transplant in Malaysia — using your own stem cells. Learn about eligibility, procedure, recovery, costs, and outcomes.",
    url: "https://stemcell.my/autologous-stem-cell-transplant",
    type: "website",
    images: [{ url: "https://stemcell.my/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Autologous Stem Cell Transplant Malaysia | Self-Donor Procedure Guide",
    description:
      "Complete guide to autologous stem cell transplant in Malaysia — using your own stem cells.",
    images: ["https://stemcell.my/og-default.jpg"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
