"use client";

import React from "react";
import { companyInfo } from "@/data/company";

export default function DevelopmentProcess() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-primary-50/25 to-slate-50 relative overflow-hidden border-b border-slate-100">
      {/* Background Topography & Subtle Ambient Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-brand-yellow/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-xs font-semibold uppercase tracking-wider mb-4 border border-primary-200/60">
            HOW WE WORK
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            From Requirement to Reliable Software.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Our systematic engineering process eliminates guesswork, reduces scope drift, and ensures software is delivered on schedule.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companyInfo.workingProcess.map((step, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:shadow-xl transition-all duration-300 relative group"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-black text-primary-600 font-mono">
                  {step.step}
                </span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  {step.subtitle}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary-600 transition-colors mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
