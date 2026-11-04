import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Zap,
  Building2,
  Cpu,
  ShoppingCart,
  Globe,
  Database,
  Workflow,
} from "lucide-react";
import { solutionsData } from "@/data/solutions";

export const metadata: Metadata = {
  title: "Enterprise Software Solutions & Digital Transformation | SmartEdge Bangladesh",
  description:
    "Explore SmartEdge Bangladesh's enterprise solutions: Digital Transformation, Enterprise Systems, Business Automation, AI Solutions, SaaS Architecture, and ERP/CRM platforms.",
  alternates: {
    canonical: "https://smartedgebangladesh.com/solutions",
  },
};

export default function SolutionsPage() {
  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-900 via-navy-950 to-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary-500/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-primary-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>STRATEGIC BUSINESS MODERNIZATION</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Enterprise Solutions Built for Real-World Impact.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We partner with enterprises, mid-market businesses, and scaleups to solve deep operational bottlenecks through custom software architecture, event-driven automation, and AI integration.
          </p>

          <div className="pt-2">
            <Link
              href="/discuss-your-project"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-bold text-slate-950 bg-brand-yellow hover:bg-yellow-400 shadow-xl shadow-brand-yellow/20 transition-all active:scale-95"
            >
              <span>Schedule Strategic Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutionsData.map((sol) => (
              <div
                key={sol.slug}
                className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm hover:shadow-2xl hover:border-primary-400 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-primary-50 text-primary-700 border border-primary-200/80">
                      {sol.badge}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">
                      {sol.techStack.slice(0, 3).join(" • ")}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-slate-950 mb-3 group-hover:text-primary-600 transition-colors">
                    {sol.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-8">
                    {sol.shortDescription}
                  </p>

                  {/* Business Problems Addressed */}
                  <div className="mb-8 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Core Business Challenges Solved
                    </div>
                    <ul className="space-y-2">
                      {sol.businessProblems.slice(0, 2).map((bp, bpIdx) => (
                        <li key={bpIdx} className="text-xs text-slate-700 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5" />
                          <span>
                            <strong className="text-slate-900">{bp.title}:</strong> {bp.desc}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact Metrics */}
                  <div className="grid grid-cols-3 gap-3 mb-8">
                    {sol.businessImpact.map((imp, impIdx) => (
                      <div key={impIdx} className="p-3 bg-slate-50/80 rounded-xl border border-slate-100 text-center">
                        <div className="text-lg font-black text-slate-900">{imp.metric}</div>
                        <div className="text-[10px] text-slate-500 font-semibold leading-tight">{imp.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/solutions/${sol.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary-600 group-hover:text-primary-700"
                  >
                    <span>Read Solution Architecture</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href={`/discuss-your-project?solution=${sol.slug}`}
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-primary-500 hover:text-white text-slate-700 transition-colors"
                  >
                    Consult Team
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
