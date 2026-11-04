"use client";

import React, { useState, useEffect } from "react";
import { Star, ShieldCheck, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";

export default function TestimonialsSection() {
  const [list, setList] = useState<any[]>(testimonialsData);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("/api/content/testimonials")
      .then((res) => res.json())
      .then((data) => {
        if (data?.data && Array.isArray(data.data) && data.data.length > 0) {
          setList(
            data.data.map((t: any) => ({
              ...t,
              quote: t.content || t.quote,
              role: t.clientRole || t.role,
              projectImpact: t.projectType || t.projectImpact || "Accelerated release velocity",
              serviceProvided: t.projectType || t.serviceProvided || "Enterprise Software Engineering",
              country: t.country || "Global Partner",
            }))
          );
        }
      })
      .catch(() => {});
  }, []);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? list.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === list.length - 1 ? 0 : prevIdx + 1));
  };

  const current = list[currentIndex] || list[0] || testimonialsData[0];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-primary-50/20 relative overflow-hidden border-b border-slate-100">
      {/* Background Topography & Subtle Ambient Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-brand-yellow/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>VERIFIED CLIENT PARTNERSHIPS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Trusted by Leaders Across Bangladesh & Global Markets.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Authentic feedback from enterprise founders, managing directors, and engineering leaders who rely on SmartEdge Bangladesh for mission-critical software engineering.
          </p>
        </div>

        {/* Featured Testimonial Carousel Card */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-white via-primary-50/40 to-slate-50 text-slate-900 rounded-3xl p-8 sm:p-12 shadow-xl relative border border-slate-200/90 overflow-hidden">
          <Quote className="absolute top-8 right-8 w-16 h-16 text-primary-100 pointer-events-none" />

          {/* Rating Stars */}
          <div className="flex items-center gap-1 mb-6">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-brand-yellow text-brand-yellow" />
            ))}
            <span className="ml-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
              Verified Engagement
            </span>
          </div>

          {/* Quote Body */}
          <blockquote className="text-xl sm:text-2xl font-medium text-slate-950 leading-relaxed mb-8">
            "{current.quote}"
          </blockquote>

          {/* Impact Banner */}
          <div className="mb-8 p-4 rounded-xl bg-white/90 border border-slate-200 shadow-xs inline-flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span className="text-xs font-semibold text-slate-700">
              <strong className="text-slate-950">Business Impact:</strong> {current.projectImpact}
            </span>
          </div>

          {/* Client Bio & Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-slate-200/80">
            <div>
              <div className="font-bold text-lg text-slate-950">{current.clientName}</div>
              <div className="text-sm text-slate-600">
                {current.role} &bull; <span className="text-primary-600 font-bold">{current.company}</span>
              </div>
              <div className="text-xs text-slate-500 mt-1">
                {current.country} &bull; {current.serviceProvided}
              </div>
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-3 self-end sm:self-auto">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-11 h-11 rounded-full bg-white hover:bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 hover:text-primary-600 shadow-xs transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs font-bold text-slate-500 font-mono">
                {currentIndex + 1} / {list.length}
              </span>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-11 h-11 rounded-full bg-white hover:bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 hover:text-primary-600 shadow-xs transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Small verified client logos / company names ticker */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 text-slate-800 flex flex-col justify-center items-center"
            >
              <div className="font-bold text-sm text-slate-900">{t.company}</div>
              <div className="text-[10px] font-semibold text-emerald-600 mt-0.5">Verified Partner &bull; {t.country}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
