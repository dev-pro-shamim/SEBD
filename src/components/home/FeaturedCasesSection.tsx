"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";
import { caseStudiesData } from "@/data/cases";

export default function FeaturedCasesSection() {
  const [cases, setCases] = useState<any[]>(caseStudiesData);

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

  const featuredList = cases.filter((c) => c.featured);
  const featuredCases = (featuredList.length > 0 ? featuredList : cases).slice(0, 3);

  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-xs font-semibold uppercase tracking-wider mb-4 border border-primary-200/60">
              PROVEN RESULTS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Real Products. Real Business Outcomes.
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Explore how we design, engineer, and deploy mission-critical software solutions that eliminate operational friction and accelerate growth.
            </p>
          </div>
          <Link
            href="/cases"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary-600 hover:text-primary-700 group flex-shrink-0"
          >
            <span>View All Case Studies</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredCases.map((item) => (
            <div
              key={item.slug}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Card Visual Header with Verified Hero Image */}
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
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-semibold tracking-wide border border-white/20">
                    {item.category}
                  </span>
                  <span className="text-xs text-amber-300 font-semibold bg-black/40 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-white/10">
                    {item.industry}
                  </span>
                </div>

                <div className="z-10 relative">
                  <span className="text-xs uppercase tracking-wider font-semibold text-brand-yellow block mb-1 drop-shadow-sm">
                    {item.client}
                  </span>
                  <h3 className="text-xl font-bold leading-snug text-white group-hover:text-sky-200 transition-colors drop-shadow-sm">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {item.summary}
                  </p>

                  {/* Impact Metrics Highlights */}
                  <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    {item.metrics.slice(0, 2).map((m: any, mIdx: number) => (
                      <div key={mIdx}>
                        <div className="text-xs text-slate-500 font-medium">{m.label}</div>
                        <div className="text-lg font-bold text-slate-900 mt-0.5">{m.value}</div>
                        <div className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          <span>{m.change}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.technologies.slice(0, 4).map((tech: any, tIdx: number) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Read Case Study Link */}
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
    </section>
  );
}
