"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { companyInfo } from "@/data/company";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-xs font-semibold uppercase tracking-wider mb-4 border border-primary-200/60">
            COMMON INQUIRIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Clear Answers for Project Leaders.
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Everything you need to know about our engagement models, intellectual property ownership, delivery timelines, and technology standards.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {companyInfo.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/90 overflow-hidden transition-all duration-200 bg-white"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base sm:text-lg text-slate-900">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-primary-50 text-primary-600" : "text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support note */}
        <div className="mt-12 text-center text-sm text-slate-600">
          Have a specific technical question or need architectural consultation?{" "}
          <Link
            href="/discuss-your-project"
            className="font-bold text-primary-600 hover:text-primary-700 inline-flex items-center gap-1"
          >
            Schedule a Discovery Call
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
