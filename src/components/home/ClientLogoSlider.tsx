"use client";

import React from "react";
import Image from "next/image";
import { clientLogos } from "@/data/clients";
import { Sparkles, Building2, ShieldCheck, Globe2 } from "lucide-react";

export default function ClientLogoSlider() {
  // Split 36 logos into two balanced rows of 18 logos each
  const firstRow = clientLogos.slice(0, 18);
  const secondRow = clientLogos.slice(18, 36);

  // Duplicate arrays to achieve infinite seamless loop
  const rowOneItems = [...firstRow, ...firstRow];
  const rowTwoItems = [...secondRow, ...secondRow];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden border-y border-slate-200/80">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[300px] bg-primary-500/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[450px] h-[300px] bg-brand-yellow/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-100/70 border border-primary-200 text-primary-700 text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-primary-600" />
          <span>TRUSTED BY 120+ GLOBAL CLIENTS & ENTERPRISES</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
          Empowering Leading Brands Worldwide
        </h2>

        <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          From high-growth tech startups to multinational enterprises across the United States, United Kingdom, Australia, Europe, and Bangladesh.
        </p>
      </div>

      {/* Marquee Track Container with Vignette Fade Masks */}
      <div className="relative w-full overflow-hidden space-y-5">
        {/* Left & Right Gradient Vignette Fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-44 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-44 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-20" />

        {/* Row 1: Sliding Left */}
        <div className="flex w-max gap-5 animate-marquee hover:[animation-play-state:paused] py-2">
          {rowOneItems.map((client, idx) => (
            <div
              key={`row1-${client.id}-${idx}`}
              className="group relative flex-shrink-0 w-44 sm:w-52 h-24 sm:h-28 rounded-2xl bg-white/95 border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-primary-500/10 hover:border-primary-400 transition-all duration-300 flex flex-col items-center justify-center p-4"
            >
              <div className="relative w-full h-14 flex items-center justify-center">
                <Image
                  src={client.src}
                  alt={`${client.name} - Official Client of SmartEdge Bangladesh`}
                  width={140}
                  height={56}
                  className="max-h-12 w-auto max-w-[130px] object-contain transition-all duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <span className="text-[10px] font-semibold text-slate-400 group-hover:text-primary-600 truncate max-w-[130px] transition-colors mt-1">
                {client.name}
              </span>
            </div>
          ))}
        </div>

        {/* Row 2: Sliding Right (Reverse) */}
        <div className="flex w-max gap-5 animate-marquee-reverse hover:[animation-play-state:paused] py-2">
          {rowTwoItems.map((client, idx) => (
            <div
              key={`row2-${client.id}-${idx}`}
              className="group relative flex-shrink-0 w-44 sm:w-52 h-24 sm:h-28 rounded-2xl bg-white/95 border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-primary-500/10 hover:border-primary-400 transition-all duration-300 flex flex-col items-center justify-center p-4"
            >
              <div className="relative w-full h-14 flex items-center justify-center">
                <Image
                  src={client.src}
                  alt={`${client.name} - Official Client of SmartEdge Bangladesh`}
                  width={140}
                  height={56}
                  className="max-h-12 w-auto max-w-[130px] object-contain transition-all duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <span className="text-[10px] font-semibold text-slate-400 group-hover:text-primary-600 truncate max-w-[130px] transition-colors mt-1">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Badges Bar */}
      <div className="max-w-5xl mx-auto px-4 mt-12 pt-8 border-t border-slate-200/70 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs font-semibold text-slate-600">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          <span>100% Intellectual Property Ownership</span>
        </div>
        <div className="flex items-center gap-2">
          <Globe2 className="w-4 h-4 text-primary-500" />
          <span>Active in 8+ International Markets</span>
        </div>
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4 text-brand-yellow" />
          <span>98% Multi-Year Client Retention</span>
        </div>
      </div>
    </section>
  );
}
