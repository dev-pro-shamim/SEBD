"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Code2,
  Server,
  Database,
  Smartphone,
  Cloud,
  Cpu,
  Layers,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  RefreshCw,
  Sparkles,
  Check,
} from "lucide-react";
import { technologiesData, techCategories, TechItem } from "@/data/technologies";

export default function TechnologiesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredTech =
    selectedCategory === "All"
      ? technologiesData
      : technologiesData.filter((t) => t.category === selectedCategory);

  const engineeringPrinciples = [
    {
      title: "Maintainability",
      desc: "Strict TypeScript types, modular clean architecture, and exhaustive unit tests make codebases easy to understand, update, and hand over.",
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" />,
    },
    {
      title: "Scalability",
      desc: "Stateless microservices, Redis caching layers, and database sharding patterns ensure zero crashes when traffic spikes 100x.",
      icon: <Layers className="w-5 h-5 text-primary-500" />,
    },
    {
      title: "Performance",
      desc: "Sub-second edge rendering with Next.js, optimized database indexing, and WebP compression guaranteeing 95+ Core Web Vitals.",
      icon: <Zap className="w-5 h-5 text-amber-500" />,
    },
    {
      title: "Long-Term Fit",
      desc: "We avoid short-lived developer fads, selecting proven, widely supported enterprise platforms with extensive active ecosystems.",
      icon: <ShieldCheck className="w-5 h-5 text-indigo-500" />,
    },
  ];

  const architecturalPillars = [
    {
      title: "API-First Architecture",
      desc: "Clean separation between frontend presentation and backend services via standardized REST and GraphQL contracts.",
    },
    {
      title: "Modular Component Design",
      desc: "Self-contained UI components and backend domain modules that can be updated independently without regression side effects.",
    },
    {
      title: "Security-Minded Engineering",
      desc: "Zero-trust input validation with Zod, database parameterization against injection, and strict OWASP top-10 mitigation.",
    },
    {
      title: "Automated CI/CD Workflows",
      desc: "Continuous integration pipelines running automated linter and unit test checks on every pull request prior to deployment.",
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-white min-h-screen">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary-50/40 via-white to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-xs font-semibold uppercase tracking-wider mb-4 border border-primary-200/60">
            ENGINEERING STACK
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Modern Technologies. Engineered for Real Products.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            The right technology for the right business problem. We select proven, enterprise-grade frameworks that prioritize speed, security, and long-term maintainability.
          </p>
        </div>
      </section>

      {/* 4 Core Technology Decision Principles */}
      <section className="py-16 bg-slate-50 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-slate-900">
              How We Make Technology Choices
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Every framework in our stack is evaluated against four strict engineering benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {engineeringPrinciples.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Categorized Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Explore Technologies by Engineering Layer
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Select a layer to explore our specific toolchains, design patterns, and deployment use cases.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {techCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-primary-500 text-white shadow-md shadow-primary-500/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTech.map((tech, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-primary-200 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary-600 transition-colors">
                    {tech.name}
                  </h3>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${tech.badgeColor}`}>
                    {tech.category}
                  </span>
                </div>

                <div className="text-xs font-bold text-primary-600 mb-3">
                  {tech.tagline}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {tech.description}
                </p>

                {/* Key Features */}
                <div className="space-y-1.5 mb-5 pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Technical Capabilities:
                  </span>
                  {tech.features.map((f, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-1.5 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Primary Use Cases:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {tech.useCases.map((uc, uIdx) => (
                    <span
                      key={uIdx}
                      className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-medium"
                    >
                      {uc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Architectural Standards */}
      <section className="py-20 bg-gradient-to-b from-slate-50 via-primary-50/25 to-white text-slate-900 border-y border-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-700 mb-2 block">
              ENGINEERING STANDARDS
            </span>
            <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight">
              Good Software Is More Than a Technology Stack.
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              A modern stack is only as reliable as the architectural discipline and security standards that guide its implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {architecturalPillars.map((p, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/95 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow text-left"
              >
                <div className="w-8 h-8 rounded-lg bg-primary-50 text-primary-700 border border-primary-200 flex items-center justify-center font-bold text-xs mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-950">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Planning a Product or Modernizing an Existing System?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Let's evaluate your technical requirements and select the ideal stack to achieve your speed, concurrency, and budgetary goals.
          </p>
          <Link
            href="/discuss-your-project"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-primary-500 hover:bg-primary-600 shadow-md transition-all"
          >
            Schedule a Technical Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
