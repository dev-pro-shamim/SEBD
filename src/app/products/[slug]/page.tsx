import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  ChevronRight,
  Sparkles,
  BarChart3,
  Users,
  Code2,
  Layers,
  PhoneCall,
  MessageSquare,
} from "lucide-react";
import { productsData } from "@/data/products";
import { companyInfo } from "@/data/company";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return productsData.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const prod = productsData.find((p) => p.slug === params.slug);
  if (!prod) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${prod.name} | SmartEdge Bangladesh Software Products`,
    description: prod.description,
    alternates: {
      canonical: `https://smartedgebangladesh.com/products/${prod.slug}`,
    },
    openGraph: {
      title: `${prod.name} | SmartEdge Bangladesh`,
      description: prod.description,
      url: `https://smartedgebangladesh.com/products/${prod.slug}`,
    },
  };
}

export default function ProductDetailPage({ params }: PageProps) {
  const prod = productsData.find((p) => p.slug === params.slug);

  if (!prod) {
    notFound();
  }

  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Breadcrumb Bar */}
      <div className="bg-slate-50 border-b border-slate-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-slate-500 flex items-center gap-1.5">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/products" className="hover:text-primary-600">Products</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 font-semibold">{prod.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-white via-primary-50/40 to-slate-50 text-slate-900 py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-brand-yellow/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-white border border-slate-200/90 text-slate-700 shadow-sm">
                {prod.category}
              </span>
              <span
                className={`text-xs font-bold px-3.5 py-1 rounded-full shadow-sm ${
                  prod.badge === "Production Ready"
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    : "bg-amber-50 text-amber-700 border border-amber-200"
                }`}
              >
                {prod.badge}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              {prod.name}
            </h1>
            <div className="text-base font-bold text-primary-700">
              {prod.tagline}
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {prod.overview}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href={`/get-a-quote?product=${prod.slug}`}
                className="px-8 py-4 rounded-full text-base font-bold text-slate-950 bg-brand-yellow hover:bg-yellow-400 shadow-md transition-all inline-flex items-center gap-2"
              >
                <span>Request Live Demo</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </Link>

              <a
                href={companyInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-full text-base font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200/90 shadow-sm transition-all inline-flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Metrics Preview */}
          <div className="lg:col-span-4 bg-white/95 rounded-3xl p-8 border border-slate-200/90 shadow-xl space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Benchmark Metrics
            </h3>
            <div className="space-y-4">
              {prod.metrics.map((m, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-primary-50/60 border border-primary-100">
                  <div className="text-3xl font-black text-slate-950">{m.value}</div>
                  <div className="text-xs text-slate-600 font-medium mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Deep Dive */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-950">
              Core Capabilities & Architecture Features
            </h2>
            <p className="text-base text-slate-600">
              Engineered with clean domain boundaries, rigorous security, and intuitive user interfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {prod.features.map((feat, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center font-bold">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-950">{feat.title}</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed pl-13">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack & Target Audience */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Tech Stack */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-white via-primary-50/40 to-slate-50 text-slate-900 border border-slate-200/90 shadow-xl relative overflow-hidden space-y-4">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-primary-700">
                Technology Stack
              </div>
              <h3 className="text-2xl font-extrabold text-slate-950">Built with Modern Frameworks</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Standardized on enterprise TypeScript, high-performance database indexing, and containerized cloud hosting.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {prod.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200/90 shadow-sm text-xs font-semibold text-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Target Audience */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Target Clients
            </div>
            <h3 className="text-2xl font-bold text-slate-950">Who This Platform is Built For</h3>
            <ul className="space-y-3 pt-2">
              {prod.targetAudience.map((aud, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>{aud}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-b from-white via-primary-50/50 to-primary-100/40 text-slate-950 border-t border-slate-200/80 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Interested in {prod.name}?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Contact us for pricing, custom feature scoping, and a live demonstration with our product architects.
          </p>
          <div className="pt-2">
            <Link
              href={`/get-a-quote?product=${prod.slug}`}
              className="inline-flex items-center gap-2 px-9 py-4 rounded-full text-base font-bold text-slate-950 bg-brand-yellow hover:bg-yellow-400 shadow-md transition-all"
            >
              <span>Schedule Live Demo</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
