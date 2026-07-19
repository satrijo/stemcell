import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stem Cell Treatments & Conditions Malaysia | What Can Stem Cells Treat?",
  description:
    "Explore the full range of stem cell treatments and conditions managed in Malaysia — joint pain, autoimmune disease, neurological disorders, anti-aging, hair restoration, and more.",
  keywords:
    "stem cell treatments malaysia, conditions treated stem cells, stem cell therapy conditions, what can stem cells treat malaysia",
  alternates: {
    canonical: "https://stemcell.my/treatments-conditions",
  },
  openGraph: {
    title: "Stem Cell Treatments & Conditions Malaysia | What Can Stem Cells Treat?",
    description:
      "Explore the full range of stem cell treatments in Malaysia — joints, autoimmune, neurological, anti-aging, hair restoration, and more.",
    url: "https://stemcell.my/treatments-conditions",
    type: "website",
    images: [{ url: "https://stemcell.my/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stem Cell Treatments & Conditions Malaysia",
    description:
      "Explore stem cell treatments in Malaysia — joints, autoimmune, neurological, anti-aging, and hair restoration.",
    images: ["https://stemcell.my/og-default.jpg"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
