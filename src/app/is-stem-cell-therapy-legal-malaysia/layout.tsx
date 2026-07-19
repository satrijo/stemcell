import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Is Stem Cell Therapy Legal in Malaysia? | MOH & NPRA Regulations Explained",
  description:
    "Clear explanation of Malaysia's stem cell therapy legal framework — Ministry of Health guidelines, NPRA regulations, approved treatments, and how to verify a licensed clinic.",
  keywords:
    "stem cell therapy legal malaysia, MOH stem cell regulations malaysia, NPRA stem cell malaysia, legal stem cell treatment malaysia",
  alternates: {
    canonical: "https://stemcell.my/is-stem-cell-therapy-legal-malaysia",
  },
  openGraph: {
    title: "Is Stem Cell Therapy Legal in Malaysia? | MOH & NPRA Regulations Explained",
    description:
      "Clear explanation of Malaysia's stem cell therapy legal framework — MOH guidelines, NPRA regulations, and verified licensed clinics.",
    url: "https://stemcell.my/is-stem-cell-therapy-legal-malaysia",
    type: "website",
    images: [{ url: "https://stemcell.my/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Is Stem Cell Therapy Legal in Malaysia? | MOH Regulations",
    description:
      "Malaysia's stem cell therapy legal framework — MOH guidelines, NPRA regulations, and licensed clinics.",
    images: ["https://stemcell.my/og-default.jpg"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
