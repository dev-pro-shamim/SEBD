import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Layers,
  ChevronRight,
  Cpu,
  BarChart3,
  Check,
  AlertCircle,
  HelpCircle,
} from "lucide-react";
import { solutionsData } from "@/data/solutions";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return solutionsData.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const sol = solutionsData.find((s) => s.slug === params.slug);
  if (!sol) {
    return { title: "Solution Not Found" };
  }

  return {
    title: `${sol.title} | SmartEdge Bangladesh`,
    description: sol.shortDescription,
    alternates: {
      canonical: `https://smartedgebangladesh.com/solutions/${sol.slug}`,
    },
    openGraph: {
      title: `${sol.title} | SmartEdge Bangladesh`,
      description: sol.shortDescription,
      url: `https://smartedgebangladesh.com/solutions/${sol.slug}`,
    },
  };
}

export default function SolutionDetailPage({ params }: PageProps) {
  const sol = solutionsData.find((s) => s.slug === params.slug);

  if (!sol) {
    notFound();
  }

  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Breadcrumb Bar */}
      <div className="bg-slate-50 border-b border-slate-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-slate-500 flex items-center gap-1.5">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/solutions" className="hover:text-primary-600">Solutions</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 font-semibold">{sol.title}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white via-primary-50/40 to-slate-50 text-slate-900 py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-brand-yellow/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-xs font-bold uppercase tracking-wider shadow-sm">
              <span>{sol.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              {sol.heroTitle}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {sol.heroSubtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href={`/get-a-quote?solution=${sol.slug}`}
                className="px-8 py-4 rounded-full text-base font-bold text-slate-950 bg-brand-yellow hover:bg-yellow-400 shadow-md transition-all active:scale-95 inline-flex items-center gap-2"
              >
                <span>Discuss This Solution</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </Link>
            </div>
          </div>

          {/* Metrics Card */}
          <div className="lg:col-span-4 bg-white/95 rounded-3xl p-8 border border-slate-200/90 shadow-xl space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Verified Business Impact
            </h3>
            <div className="space-y-4">
              {sol.businessImpact.map((imp, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-primary-50/60 border border-primary-100">
                  <div className="text-3xl font-black text-slate-950">{imp.metric}</div>
                  <div className="text-xs text-slate-600 font-medium mt-1">{imp.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Challenges & Our Approach */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Challenges */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
              <div className="inline-flex items-center gap-2 text-rose-600 font-bold text-xs uppercase tracking-wider">
                <AlertCircle className="w-4 h-4" />
                <span>Operational Bottlenecks We Eliminate</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-950">
                The Business Problems This Solution Addresses
              </h2>
              <div className="space-y-4">
                {sol.businessProblems.map((prob, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-rose-50/50 border border-rose-100">
                    <h3 className="text-sm font-bold text-slate-900 mb-1">{prob.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{prob.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Approach */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
              <div className="inline-flex items-center gap-2 text-primary-600 font-bold text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Our Engineering Methodology</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-950">
                How SmartEdge Solves It Architecturally
              </h2>
              <div className="space-y-4">
                {sol.ourApproach.map((app, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-primary-50/50 border border-primary-100">
                    <h3 className="text-sm font-bold text-slate-900 mb-1">{app.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{app.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture & Tech Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-white via-primary-50/40 to-slate-50 text-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xl relative overflow-hidden space-y-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-3xl space-y-3 relative z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-primary-700">
                ENTERPRISE SYSTEM ARCHITECTURE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                Under the Hood: Reliable Architecture Blueprint
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {sol.architectureOverview}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200 relative z-10">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                Core Technology Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {sol.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-xl bg-white border border-slate-200/90 shadow-sm text-xs font-semibold text-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables List */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-950">
              Complete Project Deliverables
            </h2>
            <p className="text-sm text-slate-600">
              Everything included with 100% intellectual property and source code ownership.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-4">
            {sol.deliverables.map((del, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>{del}</span>
              </div>
            ))}
          </div>

          {/* FAQs */}
          <div className="space-y-6 pt-8">
            <h3 className="text-2xl font-bold text-slate-950 text-center">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {sol.faqs.map((faq, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200">
                  <h4 className="text-base font-bold text-slate-900 mb-2">{faq.q}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center pt-8">
            <Link
              href={`/discuss-your-project?solution=${sol.slug}`}
              className="inline-flex items-center gap-2 px-9 py-4 rounded-full text-base font-bold text-white bg-primary-500 hover:bg-primary-600 shadow-xl shadow-primary-500/25 transition-all"
            >
              <span>Discuss {sol.title}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
