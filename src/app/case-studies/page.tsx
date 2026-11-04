import CaseStudiesPage from "@/app/cases/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Case Studies & Client Success Stories | SmartEdge Bangladesh",
  description:
    "Explore real-world software engineering case studies from SmartEdge Bangladesh. High-concurrency ticketing, cloud ERP platforms, headless e-commerce, and workflow automation.",
  alternates: {
    canonical: "https://smartedgebangladesh.com/case-studies",
  },
  openGraph: {
    title: "Software Engineering Case Studies | SmartEdge Bangladesh",
    description:
      "Real-world enterprise systems and results delivered by SmartEdge Bangladesh.",
    url: "https://smartedgebangladesh.com/case-studies",
    type: "website",
    images: ["/android-chrome-512x512.png"],
  },
};

export default CaseStudiesPage;
