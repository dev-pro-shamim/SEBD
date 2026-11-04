"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { caseStudiesData, CaseStudy } from "@/data/cases";

const categories = [
  "All",
  "Digital Commerce",
  "Business Automation",
  "Operational Platforms",
  "Web & Mobile Products",
  "AI Solutions",
] as const;

export default function CaseStudiesPage() {
  const [cases, setCases] = useState<any[]>(caseStudiesData);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    fetch("/api/content/cases")
      .then((res) => res.json())
      .then((data) => {
        if (data?.data && Array.isArray(data.data) && data.data.length > 0) {
          setCases(data.data);
        }
      })
      .catch(() => {});
  }, []);

  const filteredCases =
    selectedCategory === "All"
      ? cases
      : cases.filter((c) => c.category === selectedCategory);

  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary-50/40 via-white to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-xs font-semibold uppercase tracking-wider mb-4 border border-primary-200/60">
            PROVEN CLIENT IMPACT
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Real Products. Real Business Outcomes.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Deep dive into our enterprise engineering case studies. Discover how we architect high-concurrency systems, automate complex business workflows, and scale digital platforms.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-200 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-primary-500 text-white shadow-md shadow-primary-500/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCases.map((item) => (
            <div
              key={item.slug}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Card Banner with Verified Project Image */}
              <div className="h-56 p-6 text-white flex flex-col justify-between relative overflow-hidden group/header">
                {/* Background Image */}
                <img
                  src={item.heroImage}
                  alt={`${item.title} - Enterprise Case Study by SmartEdge Bangladesh`}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                {/* Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-slate-950/40 group-hover:via-slate-950/50 transition-colors duration-300" />

                <div className="flex items-center justify-between z-10 relative">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-semibold border border-white/20">
                    {item.category}
                  </span>
                  <span className="text-xs text-amber-300 font-semibold bg-black/40 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-white/10">
                    {item.duration}
                  </span>
                </div>

                <div className="z-10 relative">
                  <span className="text-xs uppercase tracking-wider font-semibold text-brand-yellow block mb-1 drop-shadow-sm">
                    {item.client}
                  </span>
                  <h3 className="text-lg font-bold leading-snug text-white group-hover:text-sky-200 transition-colors drop-shadow-sm">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="text-xs text-slate-400 font-medium mb-3">
                    Industry: <span className="text-slate-700 font-semibold">{item.industry}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {item.summary}
                  </p>

                  {/* Metrics Box */}
                  <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    {item.metrics.slice(0, 2).map((m: any, mIdx: number) => (
                      <div key={mIdx}>
                        <div className="text-[11px] text-slate-500 font-medium">{m.label}</div>
                        <div className="text-base font-bold text-slate-900 mt-0.5">{m.value}</div>
                        <div className="text-[10px] font-semibold text-emerald-600 flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          <span>{m.change}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.technologies.slice(0, 4).map((tech: any, tIdx: number) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href={`/cases/${item.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary-600 hover:text-primary-700 group/link"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
