import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Let's Discuss Your Project | Get a Quote | SmartEdge Bangladesh",
  description:
    "Tell us about your business and project requirements. Our engineering team will get in touch with you to discuss the best solution.",
  alternates: {
    canonical: "https://smartedgebangladesh.com/get-a-quote",
  },
  openGraph: {
    title: "Let's Discuss Your Project | SmartEdge Bangladesh",
    description:
      "Request a consultation or get a project quote. Tailored software engineering, digital commerce, and web applications in Bangladesh.",
    url: "https://smartedgebangladesh.com/get-a-quote",
    siteName: "SmartEdge Bangladesh",
    type: "website",
  },
};

export default function GetAQuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
