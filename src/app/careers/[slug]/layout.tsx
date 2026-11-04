import { Metadata } from "next";
import { openPositions } from "@/data/careers";

interface LayoutProps {
  params: { slug: string };
  children: React.ReactNode;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const job = openPositions.find((j) => j.slug === params.slug);
  if (!job) {
    return { title: "Job Position Not Found" };
  }

  const title = `${job.title} (${job.department}) | Careers | SmartEdge Bangladesh`;
  const description = `Join SmartEdge Bangladesh as ${job.title}. ${job.experience} experience, ${job.type}, based in Mirpur-10, Dhaka. ${job.shortDesc}`;

  return {
    title,
    description,
    keywords: [
      `${job.title} Job Dhaka`,
      "Software Engineer Vacancy",
      `${job.department} Jobs Bangladesh`,
      "SmartEdge Bangladesh Careers",
    ],
    alternates: {
      canonical: `https://smartedgebangladesh.com/careers/${job.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://smartedgebangladesh.com/careers/${job.slug}`,
      siteName: "SmartEdge Bangladesh",
      type: "website",
      images: ["/android-chrome-512x512.png"],
    },
  };
}

export default function CareerJobLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
