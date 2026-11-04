"use client";

import React from "react";
import { companyInfo } from "@/data/company";
import { Award, CheckCircle2, Globe2, Users2 } from "lucide-react";

export default function StatsSection() {
  const statIcons = [
    <Award key="1" className="w-6 h-6 text-primary-400" />,
    <CheckCircle2 key="2" className="w-6 h-6 text-emerald-400" />,
    <Users2 key="3" className="w-6 h-6 text-sky-400" />,
    <Globe2 key="4" className="w-6 h-6 text-amber-400" />,
  ];

  const trustedLogos = [
    "MK Shipping Lines",
    "Esquire Electronics",
    "Aurora Manufacturing",
    "SKCOMART Global",
    "Urbanize Real Estate",
    "FinLease Financial",
    "Apex Lifestyle",
    "MediConnect Health",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-primary-50/35 to-slate-50 text-slate-900 relative overflow-hidden border-b border-slate-100">
      {/* Background topography grid & ambient radial glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-primary-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[450px] h-[300px] bg-brand-yellow/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-600 mb-3 block">
            BUILT ON EXPERIENCE &bull; PROVEN THROUGH DELIVERY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
            Enterprise Reliability Across Industries and Global Markets.
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Years of engineering experience, rigorous delivery cadences, and deep technical partnerships supporting businesses worldwide.
          </p>
        </div>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {companyInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-white/90 backdrop-blur-sm border border-slate-200/90 shadow-sm text-center relative group hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/5 transition-all"
            >
              <div className="mx-auto w-12 h-12 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {statIcons[idx]}
              </div>
              <div className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-600 font-semibold mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Trusted Partners Ticker / Grid */}
        <div className="pt-10 border-t border-slate-200/80 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-8">
            TRUSTED BY BUSINESSES ACROSS GLOBAL MARKETS
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
            {trustedLogos.map((clientName, idx) => (
              <div
                key={idx}
                className="py-3 px-4 rounded-xl bg-white/80 border border-slate-200 text-xs font-semibold text-slate-700 hover:text-primary-600 hover:border-primary-300 transition-colors shadow-xs"
              >
                {clientName}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
