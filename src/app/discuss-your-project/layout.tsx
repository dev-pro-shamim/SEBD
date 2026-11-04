import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discuss Your Project | Custom Software & Web Engineering | SmartEdge Bangladesh",
  description:
    "Schedule a confidential technical discovery call with SmartEdge Bangladesh. Discuss software requirements, technical architecture, timeline, and dedicated team estimates.",
  alternates: {
    canonical: "https://smartedgebangladesh.com/discuss-your-project",
  },
  openGraph: {
    title: "Discuss Your Software Project | SmartEdge Bangladesh",
    description:
      "Share your product vision with our engineering leaders. Custom software, React/Next.js platforms, mobile apps, and enterprise solutions.",
    url: "https://smartedgebangladesh.com/discuss-your-project",
    type: "website",
    images: ["/android-chrome-512x512.png"],
  },
};

export default function DiscussProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
