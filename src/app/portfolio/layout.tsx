import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Development Portfolio & Case Work | SmartEdge Bangladesh",
  description:
    "Explore enterprise web apps, SaaS platforms, ERP systems, digital commerce engines, and mobile applications engineered by SmartEdge Bangladesh for domestic and international clients.",
  keywords: [
    "Software Portfolio",
    "Web Application Case Studies",
    "Enterprise Software Projects",
    "Next.js Projects",
    "React Case Studies",
    "ERP Implementations",
    "SmartEdge Bangladesh Portfolio",
  ],
  alternates: {
    canonical: "https://smartedgebangladesh.com/portfolio",
  },
  openGraph: {
    title: "Software Engineering Portfolio | SmartEdge Bangladesh",
    description:
      "Proven digital products and enterprise applications engineered for global scalability and reliability.",
    url: "https://smartedgebangladesh.com/portfolio",
    type: "website",
    images: ["/android-chrome-512x512.png"],
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
