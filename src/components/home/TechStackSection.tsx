"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { technologiesData, techCategories } from "@/data/technologies";

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredTech =
    activeCategory === "All"
      ? technologiesData.slice(0, 12)
      : technologiesData.filter((t) => t.category === activeCategory);

  return (
    <section className="py-24 bg-gradient-to-b from-primary-50/25 via-white to-slate-50 relative overflow-hidden border-b border-slate-100">
      {/* Background Topography & Subtle Ambient Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-40 w-96 h-96 bg-brand-yellow/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-xs font-semibold uppercase tracking-wider mb-4 border border-primary-200/60">
            TECHNICAL CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Modern Engineering Behind Every Solution.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            We deliberately choose proven, production-grade frameworks that prioritize performance, security, and long-term maintainability.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {techCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-primary-500 text-white shadow-md shadow-primary-500/20"
                  : "bg-white text-slate-700 hover:bg-slate-200/70 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Technology Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTech.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary-600 transition-colors">
                    {item.name}
                  </h3>
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${item.badgeColor}`}>
                    {item.category}
                  </span>
                </div>
                <div className="text-xs font-semibold text-primary-600 mb-2">
                  {item.tagline}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-slate-100">
                  {item.features.slice(0, 2).map((f, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-1.5 text-[11px] text-slate-500">
                      <Check className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] font-semibold text-slate-400">
                Experience: <span className="text-slate-700">{item.experience}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All Tech Link */}
        <div className="mt-12 text-center">
          <Link
            href="/technologies"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary-600 hover:text-primary-700 group"
          >
            <span>Explore Complete Technology Architecture & Standards</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
