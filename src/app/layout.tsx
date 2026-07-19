import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/shared/FloatingWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Stem Cell Malaysia | Advanced Regenerative Medicine",
    template: "%s | Stem Cell Malaysia",
  },
  description:
    "Discover advanced stem cell therapy in Malaysia. Learn about regenerative medicine, treatment options, conditions, benefits, safety, recovery, costs, and expert guidance.",
  keywords:
    "stem cell malaysia, stem cell therapy malaysia, regenerative medicine malaysia, stem cell treatment, stem cell clinic malaysia",
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: "https://stemcell.my",
    siteName: "Stem Cell Malaysia",
    title: "Stem Cell Malaysia | Advanced Regenerative Medicine",
    description:
      "Discover advanced stem cell therapy in Malaysia. Learn about regenerative medicine, treatment options, conditions, benefits, safety, recovery, costs, and expert guidance.",
    images: [{ url: "https://stemcell.my/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stem Cell Malaysia | Advanced Regenerative Medicine",
    description:
      "Discover advanced stem cell therapy in Malaysia — regenerative medicine, treatment options, costs, and expert guidance.",
    images: ["https://stemcell.my/og-default.jpg"],
  },
  alternates: {
    canonical: "https://stemcell.my",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  name: "StemCell.my",
  url: "https://stemcell.my",
  logo: "https://stemcell.my/logo.png",
  description:
    "Malaysia's leading resource for stem cell therapy information, clinic referrals, and free medical consultations.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kuala Lumpur",
    addressCountry: "MY",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+60-12-345-6789",
    contactType: "customer service",
    availableLanguage: ["English", "Malay", "Chinese"],
  },
  sameAs: ["https://stemcell.my"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
