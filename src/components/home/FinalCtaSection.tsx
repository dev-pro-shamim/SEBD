"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, PhoneCall, MessageSquare, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import { companyInfo } from "@/data/company";

export default function FinalCtaSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-primary-50/60 to-primary-100/40 text-slate-950 border-t border-b border-primary-200/80 relative overflow-hidden">
      {/* Background topography grid & ambient blurs */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-0 right-10 w-96 h-96 bg-primary-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-brand-yellow/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200/90 text-primary-700 text-xs font-bold uppercase tracking-wider shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-brand-yellow" />
          <span>START YOUR DIGITAL JOURNEY TODAY</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight text-slate-950">
          Ready to Turn Your Ideas Into Reality?
        </h2>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Schedule a direct discovery call with our software architects. We will analyze your operational bottlenecks, architect the right solution, and provide a clear milestone roadmap within 24 hours.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/get-a-quote"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full text-base font-bold text-slate-950 bg-brand-yellow hover:bg-yellow-300 shadow-xl shadow-brand-yellow/20 hover:shadow-brand-yellow/30 transition-all duration-200 active:scale-95 group"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href={companyInfo.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/25 transition-all duration-200 active:scale-95"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={companyInfo.phoneLink}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-base font-bold text-slate-900 bg-white hover:bg-slate-50 border border-slate-200/90 shadow-sm transition-all duration-200"
          >
            <PhoneCall className="w-4 h-4 text-brand-yellow" />
            <span>{companyInfo.phone}</span>
          </a>
        </div>

        {/* Reassurance pills */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-700">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-yellow" />
            <span>Free Architectural Consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-yellow" />
            <span>Strict NDA Signed Before Call</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-yellow" />
            <span>Response Guaranteed Within 24h</span>
          </div>
        </div>
      </div>
    </section>
  );
}
