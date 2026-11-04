import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | SmartEdge Bangladesh | Software & IT Solutions Company Dhaka",
  description:
    "Get in touch with SmartEdge Bangladesh for custom software engineering, website development, enterprise ERP systems, and cloud architecture. Located at Mirpur-10, Dhaka-1216. Phone: +8801743589784.",
  alternates: {
    canonical: "https://smartedgebangladesh.com/contact",
  },
  openGraph: {
    title: "Contact SmartEdge Bangladesh | Software Company in Dhaka",
    description:
      "Connect with our technology consulting team in Dhaka. Inquire about enterprise web, mobile app, and bespoke software projects.",
    url: "https://smartedgebangladesh.com/contact",
    type: "website",
    images: ["/android-chrome-512x512.png"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
