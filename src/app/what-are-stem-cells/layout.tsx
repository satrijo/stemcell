import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Are Stem Cells? | Complete Beginner's Guide to Regenerative Medicine",
  description:
    "Understand what stem cells are, how they work, their different types, and why they matter for medical treatment — a clear, science-based guide for patients in Malaysia.",
  keywords:
    "what are stem cells, stem cells explained, stem cell definition, how stem cells work, stem cell guide malaysia",
  alternates: {
    canonical: "https://stemcell.my/what-are-stem-cells",
  },
  openGraph: {
    title: "What Are Stem Cells? | Complete Guide to Regenerative Medicine",
    description:
      "Understand stem cells, their types, and why they matter for treatment — a clear science-based guide for patients in Malaysia.",
    url: "https://stemcell.my/what-are-stem-cells",
    type: "website",
    images: [{ url: "https://stemcell.my/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Are Stem Cells? | Regenerative Medicine Guide",
    description:
      "Understand stem cells, their types, and why they matter — a clear guide for patients in Malaysia.",
    images: ["https://stemcell.my/og-default.jpg"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
