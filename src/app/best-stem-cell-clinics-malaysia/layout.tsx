import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Stem Cell Clinics in Malaysia 2025 | How to Choose a Trusted Centre",
  description:
    "Find a trusted stem cell centre in Malaysia offering advanced regenerative treatments, experienced specialists, CGMP-certified labs, and comprehensive patient care.",
  keywords:
    "best stem cell clinic malaysia, stem cell centre malaysia, trusted stem cell clinic kl, MOH approved stem cell malaysia",
  alternates: {
    canonical: "https://stemcell.my/best-stem-cell-clinics-malaysia",
  },
  openGraph: {
    title: "Best Stem Cell Clinics in Malaysia 2025 | How to Choose a Trusted Centre",
    description:
      "Find a trusted stem cell centre in Malaysia offering advanced regenerative treatments, experienced specialists, and CGMP-certified labs.",
    url: "https://stemcell.my/best-stem-cell-clinics-malaysia",
    type: "website",
    images: [{ url: "https://stemcell.my/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Stem Cell Clinics in Malaysia 2025 | How to Choose",
    description:
      "Find a trusted stem cell centre in Malaysia offering advanced regenerative treatments and CGMP-certified labs.",
    images: ["https://stemcell.my/og-default.jpg"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
