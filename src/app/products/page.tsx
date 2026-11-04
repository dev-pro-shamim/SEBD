import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Shield,
  Layers,
  BarChart3,
  Database,
  Building,
  CheckSquare,
  QrCode,
  Kanban,
  FileText,
  DollarSign,
  Zap,
} from "lucide-react";
import { productsData } from "@/data/products";

export const metadata: Metadata = {
  title: "Software Products & Platforms | SmartEdge Bangladesh",
  description:
    "Explore SmartEdge Bangladesh's digital software products: Enterprise Hub, SmartStock Pro, EdgeCRM, OmniERP Core, CloudSync Engine, ApexCommerce, and DocuIntelligence AI.",
  alternates: {
    canonical: "https://smartedgebangladesh.com/products",
  },
};

export default function ProductsPage() {
  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-900 via-navy-950 to-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary-500/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-brand-yellow text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PROVEN READY-TO-DEPLOY SOFTWARE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Digital Products Engineered for Speed & Control.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Ready enterprise platforms, modular ERP/CRM cores, inventory engines, and AI business tools. Deploy as standalone turnkey solutions or customize to your exact business logic.
          </p>

          <div className="pt-2">
            <Link
              href="/discuss-your-project?type=product-demo"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-bold text-slate-950 bg-brand-yellow hover:bg-yellow-400 shadow-xl shadow-brand-yellow/20 transition-all active:scale-95"
            >
              <span>Request a Live Product Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products Showcase Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.map((prod) => (
              <div
                key={prod.slug}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl hover:border-primary-400 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="p-8">
                  {/* Category and status badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                      {prod.category}
                    </span>
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full ${
                        prod.badge === "Production Ready"
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : prod.badge === "Enterprise Demo"
                          ? "bg-blue-50 text-blue-700 border border-blue-200"
                          : "bg-amber-50 text-amber-700 border border-amber-200"
                      }`}
                    >
                      {prod.badge}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-slate-950 group-hover:text-primary-600 transition-colors mb-2">
                    {prod.name}
                  </h2>
                  <div className="text-xs font-semibold text-primary-600 mb-4">
                    {prod.tagline}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {prod.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {prod.features.slice(0, 3).map((f, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span><strong className="text-slate-900">{f.title}:</strong> {f.desc.slice(0, 60)}...</span>
                      </div>
                    ))}
                  </div>

                  {/* Metrics Box */}
                  <div className="grid grid-cols-3 gap-2 p-3 bg-slate-50 rounded-xl mb-6 border border-slate-100 text-center">
                    {prod.metrics.map((m, mIdx) => (
                      <div key={mIdx}>
                        <div className="text-sm font-black text-slate-900">{m.value}</div>
                        <div className="text-[10px] text-slate-500 font-semibold">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {prod.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/products/${prod.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-600 hover:text-primary-700"
                  >
                    <span>Full Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href={`/discuss-your-project?product=${prod.slug}`}
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-primary-500 hover:bg-primary-600 text-white transition-colors"
                  >
                    Request Demo
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
