import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modern Enterprise Technology Stack & Frameworks | SmartEdge Bangladesh",
  description:
    "Explore the modern technologies, programming languages, and cloud frameworks powering SmartEdge Bangladesh: Next.js, React, TypeScript, Node.js, Laravel, Flutter, PostgreSQL, Docker, AWS, and AI models.",
  keywords: [
    "Next.js Development",
    "React Technology Stack",
    "TypeScript Enterprise",
    "Node.js Backend",
    "Laravel Web Development",
    "Flutter Mobile Development",
    "PostgreSQL",
    "Cloud Architecture Bangladesh",
  ],
  alternates: {
    canonical: "https://smartedgebangladesh.com/technologies",
  },
  openGraph: {
    title: "Enterprise Technology Stack & Engineering Architecture | SmartEdge Bangladesh",
    description:
      "Modern programming languages, frontends, backends, databases, and DevOps tools we leverage for mission-critical client systems.",
    url: "https://smartedgebangladesh.com/technologies",
    type: "website",
    images: ["/android-chrome-512x512.png"],
  },
};

export default function TechnologiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
