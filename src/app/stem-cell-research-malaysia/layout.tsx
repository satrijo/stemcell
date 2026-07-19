import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stem Cell Research Malaysia | Universities, Institutions & Clinical Progress",
  description:
    "Overview of stem cell research in Malaysia — leading universities, research institutions, clinical trials, government initiatives, and the latest scientific breakthroughs.",
  keywords:
    "stem cell research malaysia, stem cell clinical trials malaysia, regenerative medicine research malaysia, stem cell university malaysia",
  alternates: {
    canonical: "https://stemcell.my/stem-cell-research-malaysia",
  },
  openGraph: {
    title: "Stem Cell Research Malaysia | Universities, Institutions & Progress",
    description:
      "Overview of stem cell research in Malaysia — leading universities, clinical trials, and the latest scientific breakthroughs.",
    url: "https://stemcell.my/stem-cell-research-malaysia",
    type: "website",
    images: [{ url: "https://stemcell.my/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stem Cell Research Malaysia | Universities & Clinical Progress",
    description:
      "Overview of stem cell research in Malaysia — leading universities, clinical trials, and breakthroughs.",
    images: ["https://stemcell.my/og-default.jpg"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
