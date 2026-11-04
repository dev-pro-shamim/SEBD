import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  AlertCircle,
  Lightbulb,
  Cpu,
  Layers,
  ShieldCheck,
} from "lucide-react";
import { industriesData } from "@/data/industries";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return industriesData.map((ind) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const ind = industriesData.find((i) => i.slug === params.slug);
  if (!ind) {
    return { title: "Industry Not Found" };
  }

  const title = `${ind.name} Software Development Solutions | SmartEdge Bangladesh`;
  const description = `${ind.shortDesc} Tailored software engineering for ${ind.name} enterprises.`;

  return {
    title,
    description,
    keywords: [
      `${ind.name} Software Development`,
      `${ind.name} IT Solutions`,
      "Software Company Bangladesh",
      "SmartEdge Bangladesh",
    ],
    alternates: {
      canonical: `https://smartedgebangladesh.com/industries/${ind.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://smartedgebangladesh.com/industries/${ind.slug}`,
      siteName: "SmartEdge Bangladesh",
      type: "website",
      images: ["/android-chrome-512x512.png"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/android-chrome-512x512.png"],
    },
  };
}

export default function IndustryDetailPage({ params }: PageProps) {
  const ind = industriesData.find((i) => i.slug === params.slug);

  if (!ind) {
    notFound();
  }

  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Structured Data: Breadcrumbs */}
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Industries", url: "/industries" },
          { name: ind.name, url: `/industries/${ind.slug}` },
        ]}
      />

      {/* Breadcrumb Bar */}
      <div className="bg-slate-50 border-b border-slate-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-slate-500 flex items-center gap-1.5">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/industries" className="hover:text-primary-600">Industries</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 font-semibold">{ind.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-white via-primary-50/40 to-slate-50 text-slate-900 py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-brand-yellow/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-200 text-primary-700 inline-block shadow-sm">
              {ind.badge}
            </span>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              {ind.name}: {ind.headline}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {ind.overview}
            </p>

            <div className="pt-2">
              <Link
                href={`/get-a-quote?industry=${ind.slug}`}
                className="px-8 py-4 rounded-full text-base font-bold text-slate-950 bg-brand-yellow hover:bg-yellow-400 shadow-md transition-all inline-flex items-center gap-2"
              >
                <span>Discuss {ind.name} Project</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </Link>
            </div>
          </div>

          {/* Metrics Preview */}
          <div className="lg:col-span-4 bg-white/95 rounded-3xl p-8 border border-slate-200/90 shadow-xl space-y-4">
            <div className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Industry Benchmarks
            </div>
            {ind.metrics.map((m, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-primary-50/60 border border-primary-100">
                <div className="text-3xl font-black text-slate-950">{m.value}</div>
                <div className="text-xs text-slate-600 font-medium mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Opportunities */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Challenges */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-2 text-rose-600 font-bold text-xs uppercase tracking-wider">
              <AlertCircle className="w-4 h-4" />
              <span>Current Sector Challenges</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-950">
              Where Traditional Systems Fail
            </h2>
            <div className="space-y-4">
              {ind.challenges.map((ch, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-rose-50/50 border border-rose-100">
                  <h3 className="text-sm font-bold text-slate-900 mb-1">{ch.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{ch.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Opportunities */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-wider">
              <Lightbulb className="w-4 h-4" />
              <span>Digital Growth Opportunities</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-950">
              Where Technology Creates Market Advantage
            </h2>
            <div className="space-y-4">
              {ind.opportunities.map((op, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-100">
                  <h3 className="text-sm font-bold text-slate-900 mb-1">{op.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{op.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Software Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-950">
              Tailored Software Solutions for {ind.name}
            </h2>
            <p className="text-sm text-slate-600">
              Battle-tested applications and custom software modules built for this industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ind.solutions.map((sol, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-7 border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-950">{sol.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Tech */}
      <section className="py-20 bg-gradient-to-b from-white via-primary-50/50 to-primary-100/40 text-slate-950 border-t border-slate-200/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-primary-700 mb-2">
              Recommended Tech Stack
            </div>
            <div className="text-2xl font-extrabold text-slate-950 mb-2">
              Optimal Architectures for {ind.name} Platforms
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {ind.recommendedTech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200/90 shadow-sm text-xs font-semibold text-slate-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <Link
            href={`/get-a-quote?industry=${ind.slug}`}
            className="px-8 py-3.5 rounded-full text-sm font-bold bg-brand-yellow hover:bg-yellow-400 text-slate-950 shadow-md transition-all shrink-0"
          >
            Start Industry Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
