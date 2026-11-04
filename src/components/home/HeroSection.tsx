"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  TrendingUp,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle,
  PhoneCall,
  MessageSquare,
} from "lucide-react";
import { companyInfo } from "@/data/company";

export default function HeroSection() {
  const [cmsData, setCmsData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/content/homepage")
      .then((res) => res.json())
      .then((data) => {
        if (data?.data) {
          setCmsData(data.data);
        }
      })
      .catch(() => {});
  }, []);

  const servicePills = [
    "WordPress & Headless CMS",
    "React & Next.js Systems",
    "Laravel & Enterprise Backends",
    "Flutter & Mobile Apps",
    "Inventory & ERP Software",
    "SaaS & Cloud Platforms",
    "Domain & High-Speed Hosting",
    "AI Agents & Automation",
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-white via-primary-50/30 to-white">
      {/* Background Decorative Topography & Electric Blue Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 -left-40 w-[550px] h-[550px] bg-primary-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-brand-yellow/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-200/90 text-primary-700 text-xs font-bold uppercase tracking-wider shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary-600 animate-pulse" />
              <span>{cmsData?.badgeText || "GLOBAL SOFTWARE & PRODUCT ENGINEERING"}</span>
            </div>

            {/* Tech Stack Ticker Badge */}
            <div className="text-xs font-bold uppercase tracking-widest text-slate-400">
              NEXT.JS &bull; REACT &bull; TYPESCRIPT &bull; NODE &bull; LARAVEL &bull; FLUTTER &bull; AI
            </div>

            {/* Main Title with Signature Electric Yellow Highlight Box */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.14]">
              {cmsData?.heroTitle ? (
                cmsData.heroTitle
              ) : (
                <>
                  Engineering{" "}
                  <span className="bg-brand-yellow text-slate-950 px-3 py-0.5 rounded-lg font-black inline-block shadow-sm transform -rotate-1">
                    DIGITAL
                  </span>{" "}
                  Solutions. Accelerating Business Growth.
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {cmsData?.heroSubtitle ||
                "SmartEdge Bangladesh helps businesses design, develop, and scale powerful digital products through modern software engineering, AI, and automation."}
            </p>

            {/* Service Tags Pill Carousel matching banner */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              {servicePills.map((pill) => (
                <span
                  key={pill}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-700 shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                  {pill}
                </span>
              ))}
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href={cmsData?.primaryCtaLink || "/discuss-your-project"}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-bold text-white bg-primary-500 hover:bg-primary-600 shadow-xl shadow-primary-500/25 hover:shadow-primary-500/40 transition-all duration-200 active:scale-95 group"
              >
                <span>{cmsData?.primaryCtaText || "Discuss Your Project"}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href={cmsData?.secondaryCtaLink || "/services"}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow transition-all duration-200 active:scale-95"
              >
                <span>{cmsData?.secondaryCtaText || "Explore Our Services"}</span>
              </Link>

              <a
                href={companyInfo.phoneLink}
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-primary-600 transition-colors py-2 px-3"
                title="Call Directly"
              >
                <div className="w-8 h-8 rounded-full bg-brand-yellow flex items-center justify-center text-slate-950 font-bold shadow-sm">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <span>{companyInfo.phone}</span>
              </a>
            </div>

            {/* Trust Points */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-slate-200/80 max-w-lg mx-auto lg:mx-0 text-left">
              <div>
                <div className="text-xl sm:text-2xl font-black text-slate-900">8+</div>
                <div className="text-xs text-slate-500 font-medium">Years Experience</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-slate-900">120+</div>
                <div className="text-xs text-slate-500 font-medium">Delivered Systems</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-slate-900">99.98%</div>
                <div className="text-xs text-slate-500 font-medium">SLA Reliability</div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Interactive Enterprise Preview Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Card: Enterprise Operations Telemetry Portal */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-200/90 relative overflow-hidden">
                {/* Header of preview window */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-400" />
                    <span className="w-3 h-3 rounded-full bg-brand-yellow" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="text-xs font-semibold text-slate-400 ml-2">
                      smartedgebd.com/cloud-telemetry
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-wider border border-emerald-200">
                    Active &bull; Live
                  </span>
                </div>

                {/* Metric Summary row */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-slate-500">
                        Operational Throughput
                      </span>
                      <TrendingUp className="w-4 h-4 text-amber-500" />
                    </div>
                    <div className="text-xl font-black text-slate-900 mt-1">42,850/hr</div>
                    <span className="text-[10px] text-amber-600 font-semibold">
                      &uarr; 34% vs legacy
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-slate-500">
                        API Response Time
                      </span>
                      <Zap className="w-4 h-4 text-amber-500" />
                    </div>
                    <div className="text-xl font-black text-slate-900 mt-1">48ms</div>
                    <span className="text-[10px] text-primary-600 font-semibold">
                      Global Edge CDN
                    </span>
                  </div>
                </div>

                {/* Visual Architecture Pipeline Preview */}
                <div className="space-y-3">
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-amber-500" />
                    Production Cloud Architecture
                  </div>

                  <div className="p-3.5 rounded-xl bg-navy-950 text-white space-y-2 text-xs">
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        Next.js Edge Cluster
                      </span>
                      <span className="text-emerald-400 font-mono text-[11px]">Healthy (0 errors)</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-brand-blue" />
                        Distributed Redis Queues
                      </span>
                      <span className="text-brand-yellow font-mono text-[11px]">8.2k jobs/min</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-cyan-400" />
                        Multi-AZ PostgreSQL / Mongo
                      </span>
                      <span className="text-cyan-300 font-mono text-[11px]">99.99% ACID Sync</span>
                    </div>
                  </div>
                </div>

                {/* Bottom live notification */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-500" />
                    <span>ISO 27001 & OWASP Hardened</span>
                  </div>
                  <span className="text-primary-600 font-bold">Ready for Scale</span>
                </div>
              </div>

              {/* Floating Badge 1: Top Right */}
              <div className="absolute -top-5 -right-4 sm:-right-6 bg-white rounded-2xl p-3.5 shadow-xl border border-slate-200/90 flex items-center gap-3 animate-float-slow">
                <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center text-brand-yellow border border-primary-100 shadow-sm">
                  <CheckCircle className="w-5 h-5 text-brand-yellow" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Zero Downtime</div>
                  <div className="text-[10px] text-slate-500 font-medium">99.98% SLA Guarantee</div>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Left */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white rounded-2xl p-3.5 shadow-xl border border-slate-200/90 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center text-brand-yellow border border-primary-100 shadow-sm">
                  <Cpu className="w-5 h-5 text-brand-yellow" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Enterprise AI Ready</div>
                  <div className="text-[10px] text-slate-500 font-medium">RAG Document Automation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
