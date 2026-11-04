import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/layout/FloatingContact";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://smartedgebangladesh.com"),
  title: {
    default: "SmartEdge Bangladesh | Enterprise Software & Product Engineering Company",
    template: "%s | SmartEdge Bangladesh",
  },
  description:
    "Leading enterprise software and product engineering company in Bangladesh. Custom software development, ERP & CRM systems, Next.js web applications, mobile apps, digital commerce, and AI automation for global companies.",
  keywords: [
    "Software Development Company",
    "Software Development Company in Bangladesh",
    "Custom Software Development",
    "Web Application Development",
    "Mobile App Development",
    "E-commerce Development",
    "Business Automation",
    "ERP Software Development",
    "AI Automation Services",
    "Next.js Development Agency",
    "Dedicated Engineering Teams",
    "SmartEdge Bangladesh",
  ],
  authors: [{ name: "SmartEdge Bangladesh Ltd." }],
  creator: "SmartEdge Bangladesh",
  publisher: "SmartEdge Bangladesh Ltd.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://smartedgebangladesh.com",
    siteName: "SmartEdge Bangladesh",
    title: "SmartEdge Bangladesh | Enterprise Software & Product Engineering Company",
    description:
      "Global software development and product engineering company specializing in custom web, mobile, SaaS platforms, ERPs, and business automation solutions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SmartEdge Bangladesh - Enterprise Software & Product Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartEdge Bangladesh | Enterprise Software & Product Engineering Company",
    description:
      "Bespoke enterprise software, ERP platforms, Next.js web engineering, and dedicated developer teams.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://smartedgebangladesh.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SmartEdge Bangladesh",
    legalName: "SmartEdge Bangladesh Ltd.",
    url: "https://smartedgebangladesh.com",
    logo: "https://smartedgebangladesh.com/logo.png",
    email: "info@smartedgebangladesh.com",
    telephone: "+8801743589784",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1294 Rokeya Sharani, Mirpur-10, Next to Metro Pillar No. 267",
      addressLocality: "Dhaka",
      postalCode: "1216",
      addressCountry: "BD",
    },
    sameAs: [
      "https://www.facebook.com/SmartEdgeTechnologiesltd/",
      "https://wa.me/8801743589784",
      "https://www.linkedin.com/company/smartedge-bangladesh",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+8801743589784",
      contactType: "customer service",
      areaServed: ["BD", "US", "GB", "AE", "AU", "CA", "SG"],
      availableLanguage: ["English", "Bengali"],
    },
  };

  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased text-slate-900 bg-white selection:bg-primary-500 selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
