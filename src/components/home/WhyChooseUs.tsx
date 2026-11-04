"use client";

import React from "react";
import {
  ShieldCheck,
  Code2,
  Clock,
  Layers,
  HeartHandshake,
  FileCheck,
} from "lucide-react";

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: <Layers className="w-6 h-6 text-brand-yellow" />,
      title: "Scalable Architecture First",
      desc: "We build systems designed to withstand 10x traffic bursts, avoiding costly rewrites as your business scales.",
    },
    {
      icon: <Code2 className="w-6 h-6 text-brand-yellow" />,
      title: "Clean TypeScript Codebases",
      desc: "Strict type safety, automated CI/CD testing, and modular architecture ensure maintainability for years to come.",
    },
    {
      icon: <Clock className="w-6 h-6 text-brand-yellow" />,
      title: "Predictable Agile Cadence",
      desc: "Bi-weekly sprint demos and functional staging deployments keep you in continuous control of your product timeline.",
    },
    {
      icon: <FileCheck className="w-6 h-6 text-brand-yellow" />,
      title: "100% IP & Code Ownership",
      desc: "Complete repository access, deployment credentials, and full legal intellectual property transfer upon delivery.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand-yellow" />,
      title: "Security-Minded Engineering",
      desc: "Adherence to OWASP standards, AES-256 database encryption, role-based access control, and vulnerability audits.",
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-brand-yellow" />,
      title: "Long-Term Technical Partner",
      desc: "Over 90% of our clients retain us post-launch for ongoing feature scaling, 24/7 monitoring, and SRE support.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-primary-50/20 to-white relative overflow-hidden border-b border-slate-100">
      {/* Background Topography & Subtle Ambient Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-40 w-96 h-96 bg-brand-yellow/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-xs font-semibold uppercase tracking-wider mb-4 border border-primary-200/60">
            WHY BUSINESSES TRUST US
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Engineering Excellence. Proven Through Delivery.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We operate as an extension of your leadership team, translating complex business requirements into high-performance software systems.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-primary-200 hover:bg-white hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center mb-6 shadow-xs group-hover:bg-primary-100/70 transition-colors">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary-600 transition-colors mb-2.5">
                {pillar.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
