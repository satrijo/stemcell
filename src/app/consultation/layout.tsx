import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Free Consultation | Stem Cell Therapy Malaysia",
  description:
    "Schedule your free, no-obligation stem cell therapy consultation with our Malaysia medical specialists. Get a personalised treatment assessment within 24 hours.",
  keywords:
    "stem cell consultation malaysia, free stem cell consultation, book stem cell therapy malaysia, regenerative medicine consultation",
  openGraph: {
    title: "Book a Free Consultation | Stem Cell Therapy Malaysia",
    description:
      "Schedule your free, no-obligation stem cell therapy consultation with our Malaysia medical specialists. Get a personalised treatment assessment within 24 hours.",
    url: "https://stemcell.my/consultation",
    type: "website",
    images: [{ url: "https://stemcell.my/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Free Consultation | Stem Cell Therapy Malaysia",
    description: "Free, no-obligation stem cell therapy consultation with Malaysia medical specialists. Get assessed within 24 hours.",
    images: ["https://stemcell.my/og-default.jpg"],
  },
  alternates: {
    canonical: "https://stemcell.my/consultation",
  },
};

export default function ConsultationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
