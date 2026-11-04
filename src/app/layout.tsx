import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/layout/FloatingContact";
import {
  OrganizationSchema,
  LocalBusinessSchema,
  WebSiteSchema,
} from "@/components/seo/JsonLd";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://smartedgebangladesh.com"),
  title: {
    default: "SmartEdge Bangladesh | Enterprise Software, Web & Mobile App Development Company",
    template: "%s | SmartEdge Bangladesh",
  },
  description:
    "SmartEdge Bangladesh is a premier enterprise software and product engineering company based in Dhaka, serving clients in Bangladesh, USA, UK, Canada, Australia, and Europe. Specializing in custom software development, Next.js web applications, mobile apps, ERP & CRM systems, and AI automation.",
  keywords: [
    "Software Company in Bangladesh",
    "Software Development Company in Dhaka",
    "IT Company in Bangladesh",
    "Custom Software Development",
    "Web Development Company in Dhaka",
    "Website Development Company in Bangladesh",
    "Software Development Company",
    "Next.js Development Services",
    "React Development Company",
    "Full Stack Development",
    "Enterprise ERP Software Development",
    "Mobile App Development Bangladesh",
    "E-commerce Website Development in Bangladesh",
    "AI Development Services",
    "Dedicated Engineering Teams",
    "SmartEdge Bangladesh",
  ],
  authors: [{ name: "SmartEdge Bangladesh Ltd.", url: "https://smartedgebangladesh.com" }],
  creator: "SmartEdge Bangladesh",
  publisher: "SmartEdge Bangladesh Ltd.",
  category: "technology",
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
      "Global software development and product engineering company specializing in custom web, mobile, SaaS platforms, ERPs, and AI automation solutions.",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "SmartEdge Bangladesh - Enterprise Software & Product Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartEdge Bangladesh | Enterprise Software & Product Engineering",
    description:
      "Bespoke enterprise software, ERP platforms, Next.js web engineering, mobile apps, and dedicated developer teams.",
    images: ["/android-chrome-512x512.png"],
    creator: "@SmartEdgeBD",
  },
  alternates: {
    canonical: "https://smartedgebangladesh.com",
    languages: {
      "en-US": "https://smartedgebangladesh.com",
      "en-GB": "https://smartedgebangladesh.com",
      "en-BD": "https://smartedgebangladesh.com",
      "x-default": "https://smartedgebangladesh.com",
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || undefined,
    other: {
      ...(process.env.NEXT_PUBLIC_BING_VERIFICATION
        ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION }
        : {}),
    },
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
  const gaId = process.env.NEXT_PUBLIC_GA4_ID;
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="en" className={poppins.variable}>
      <head>
        {/* Google Tag Manager Header Script */}
        {gtmId && (
          <Script id="gtm-script" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
        )}

        {/* Google Analytics 4 Script */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-script" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', { page_path: window.location.pathname });`}
            </Script>
          </>
        )}

        {/* Structured Data: Organization, LocalBusiness, WebSite */}
        <OrganizationSchema />
        <LocalBusinessSchema />
        <WebSiteSchema />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased text-slate-900 bg-white selection:bg-primary-500 selection:text-white">
        {/* Google Tag Manager noscript */}
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
