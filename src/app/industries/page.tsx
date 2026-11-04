import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Activity,
  CreditCard,
  GraduationCap,
  ShoppingCart,
  Store,
  Truck,
  Building,
  Cpu,
  Plane,
  Globe,
  Rocket,
} from "lucide-react";
import { industriesData } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries We Serve | Enterprise Software Engineering | SmartEdge Bangladesh",
  description:
    "SmartEdge Bangladesh delivers mission-critical software engineering across 11 key industries: Healthcare, Finance, Education, E-Commerce, Retail, Real Estate, Logistics, Manufacturing, Travel, SaaS, and Startups.",
  keywords: [
    "Healthcare Software Development",
    "Fintech Development Bangladesh",
    "Logistics Software Bangladesh",
    "Manufacturing ERP",
    "E-commerce Development",
    "Industry Software Solutions",
  ],
  alternates: {
    canonical: "https://smartedgebangladesh.com/industries",
  },
  openGraph: {
    title: "Industry Software Solutions | SmartEdge Bangladesh",
    description:
      "Domain-specific software engineering, compliance, and systems integration across 11 global industries.",
    url: "https://smartedgebangladesh.com/industries",
    type: "website",
    images: ["/android-chrome-512x512.png"],
  },
};

export default function IndustriesPage() {
  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-900 via-navy-950 to-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary-500/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-primary-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DOMAIN EXPERTISE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Specialized Software for Global Industries.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We don't just write code — we understand your sector's regulatory standards, operational bottlenecks, transaction lifecycles, and competitive opportunities.
          </p>

          <div className="pt-2">
            <Link
              href="/discuss-your-project"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-bold text-slate-950 bg-brand-yellow hover:bg-yellow-400 shadow-xl shadow-brand-yellow/20 transition-all active:scale-95"
            >
              <span>Consult an Industry Architect</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesData.map((ind) => (
              <div
                key={ind.slug}
                className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-2xl hover:border-primary-400 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-primary-50 text-primary-700 border border-primary-200/60">
                      {ind.badge}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-slate-950 group-hover:text-primary-600 transition-colors mb-2">
                    {ind.name}
                  </h2>
                  <div className="text-xs font-semibold text-slate-400 mb-3">
                    {ind.headline}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {ind.shortDesc}
                  </p>

                  {/* Challenges preview */}
                  <div className="space-y-2 mb-6">
                    {ind.challenges.slice(0, 2).map((ch, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5" />
                        <span><strong className="text-slate-900">{ch.title}</strong></span>
                      </div>
                    ))}
                  </div>

                  {/* Metrics preview */}
                  <div className="grid grid-cols-3 gap-2 p-3 bg-slate-50 rounded-xl mb-6 border border-slate-100 text-center">
                    {ind.metrics.map((m, mIdx) => (
                      <div key={mIdx}>
                        <div className="text-sm font-black text-slate-900">{m.value}</div>
                        <div className="text-[10px] text-slate-500 font-semibold leading-tight">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-600 group-hover:text-primary-700"
                  >
                    <span>Industry Detail</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href={`/discuss-your-project?industry=${ind.slug}`}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-slate-100 hover:bg-primary-500 hover:text-white text-slate-700 transition-colors"
                  >
                    Discuss Project
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
