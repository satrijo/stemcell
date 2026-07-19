import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Verify a Stem Cell Clinic in Malaysia | Patient Safety Checklist",
  description:
    "Step-by-step guide to verifying a stem cell clinic in Malaysia — MOH licensing checks, NPRA compliance, CGMP certification, red flags to avoid, and questions to ask your doctor.",
  keywords:
    "verify stem cell clinic malaysia, stem cell clinic safety malaysia, MOH licensed stem cell clinic, how to choose stem cell clinic malaysia",
  alternates: {
    canonical: "https://stemcell.my/verify-stem-cell-clinic-malaysia",
  },
  openGraph: {
    title: "How to Verify a Stem Cell Clinic in Malaysia | Patient Safety Checklist",
    description:
      "Step-by-step guide to verifying a stem cell clinic in Malaysia — MOH checks, CGMP certification, red flags, and questions to ask.",
    url: "https://stemcell.my/verify-stem-cell-clinic-malaysia",
    type: "website",
    images: [{ url: "https://stemcell.my/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Verify a Stem Cell Clinic in Malaysia | Safety Checklist",
    description:
      "Guide to verifying a stem cell clinic in Malaysia — MOH checks, CGMP certification, and red flags.",
    images: ["https://stemcell.my/og-default.jpg"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
