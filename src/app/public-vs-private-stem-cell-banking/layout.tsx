import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Public vs Private Stem Cell Banking Malaysia | Which Is Right for You?",
  description:
    "Compare public and private stem cell banking options in Malaysia — costs, access, storage duration, and which choice offers the best protection for your family.",
  keywords:
    "public vs private stem cell banking malaysia, cord blood banking malaysia, stem cell storage comparison malaysia",
  alternates: {
    canonical: "https://stemcell.my/public-vs-private-stem-cell-banking",
  },
  openGraph: {
    title: "Public vs Private Stem Cell Banking Malaysia | Which Is Right for You?",
    description:
      "Compare public and private stem cell banking in Malaysia — costs, access, storage duration, and the best option for your family.",
    url: "https://stemcell.my/public-vs-private-stem-cell-banking",
    type: "website",
    images: [{ url: "https://stemcell.my/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Public vs Private Stem Cell Banking Malaysia",
    description:
      "Compare public and private stem cell banking in Malaysia — costs, access, and the best option for your family.",
    images: ["https://stemcell.my/og-default.jpg"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
