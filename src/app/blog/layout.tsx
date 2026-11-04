import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology, Architecture & Software Engineering Blog | SmartEdge Bangladesh",
  description:
    "Expert technical articles, architectural guides, custom software vs ready-made comparisons, web development costs in Bangladesh, Next.js insights, and business automation strategies.",
  keywords: [
    "Software Development Blog",
    "IT Insights Bangladesh",
    "Next.js Development Guide",
    "Custom Software vs SaaS",
    "Web Development Cost Bangladesh",
    "SmartEdge Engineering Blog",
  ],
  alternates: {
    canonical: "https://smartedgebangladesh.com/blog",
  },
  openGraph: {
    title: "Software Engineering & Technology Blog | SmartEdge Bangladesh",
    description:
      "Deep-dive technical perspectives, software development guides, and tech industry insights from SmartEdge Bangladesh.",
    url: "https://smartedgebangladesh.com/blog",
    type: "website",
    images: ["/android-chrome-512x512.png"],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
