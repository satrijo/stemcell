import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stem Cell Therapy Side Effects & Risks | Honest Patient Guide Malaysia",
  description:
    "Honest, evidence-based guide to stem cell therapy side effects and risks in Malaysia — common reactions, serious complications, risk factors, and how to minimise them safely.",
  keywords:
    "stem cell therapy side effects malaysia, stem cell therapy risks, stem cell treatment complications, stem cell safety malaysia",
  alternates: {
    canonical: "https://stemcell.my/stem-cell-therapy-side-effects",
  },
  openGraph: {
    title: "Stem Cell Therapy Side Effects & Risks | Honest Patient Guide Malaysia",
    description:
      "Evidence-based guide to stem cell therapy side effects and risks in Malaysia — common reactions, complications, and how to minimise them.",
    url: "https://stemcell.my/stem-cell-therapy-side-effects",
    type: "website",
    images: [{ url: "https://stemcell.my/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stem Cell Therapy Side Effects & Risks | Patient Guide Malaysia",
    description:
      "Evidence-based guide to stem cell therapy side effects, risks, and how to minimise them in Malaysia.",
    images: ["https://stemcell.my/og-default.jpg"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
