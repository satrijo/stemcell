import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stem Cell Education Hub Malaysia | Learn About Regenerative Medicine",
  description:
    "Your comprehensive resource for understanding stem cell therapy in Malaysia — types of stem cells, how treatments work, medical evidence, safety, costs, and patient guidance.",
  keywords:
    "stem cell education malaysia, learn stem cell therapy, stem cell guide malaysia, regenerative medicine education malaysia",
  alternates: {
    canonical: "https://stemcell.my/stem-cell-education",
  },
  openGraph: {
    title: "Stem Cell Education Hub Malaysia | Learn About Regenerative Medicine",
    description:
      "Complete resource for understanding stem cell therapy in Malaysia — types, treatments, medical evidence, and patient guidance.",
    url: "https://stemcell.my/stem-cell-education",
    type: "website",
    images: [{ url: "https://stemcell.my/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stem Cell Education Hub Malaysia | Regenerative Medicine",
    description:
      "Complete resource for understanding stem cell therapy in Malaysia — types, treatments, and patient guidance.",
    images: ["https://stemcell.my/og-default.jpg"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
