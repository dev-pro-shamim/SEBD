"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Users, Layers, Zap, Rocket, ShieldCheck, Cpu } from "lucide-react";

export default function EngagementModels() {
  const models = [
    {
      title: "End-to-End Software Development",
      badge: "Turnkey Delivery",
      icon: Layers,
      desc: "Complete product engineering lifecycle from requirement architecture and UI/UX design to production deployment and SLA maintenance.",
      features: [
        "Fixed-scope or sprint-based agile delivery",
        "Full dedicated engineering squad & tech lead",
        "Zero-shortcut architecture with automated QA",
        "100% intellectual property & source code transfer",
      ],
      link: "/discuss-your-project?model=end-to-end",
    },
    {
      title: "Dedicated Development Teams",
      badge: "Scaleup Squads",
      icon: Users,
      desc: "An exclusive team of pre-vetted engineers, UI/UX designers, and QA working under your direct roadmap or managed by our Scrum Master.",
      features: [
        "Full-time dedicated 160 hrs/month per engineer",
        "Direct Slack, Teams, and daily standup overlap",
        "2-week risk-free trial evaluation period",
        "Scale squad size up or down with 2 weeks notice",
      ],
      link: "/hire-developers",
    },
    {
      title: "Staff Augmentation",
      badge: "Immediate Capacity",
      icon: Zap,
      desc: "Quickly inject senior Next.js, Node, Laravel, or Flutter developers directly into your existing in-house team to accelerate sprint velocity.",
      features: [
        "Vetted senior & mid-level software engineers",
        "Direct task management in your Jira/GitHub",
        "Zero recruitment fees or local HR overhead",
        "Immediate onboarding within 3 to 7 business days",
      ],
      link: "/hire-developers?model=staff-augmentation",
    },
    {
      title: "MVP Development for Startups",
      badge: "Rapid Market Fit",
      icon: Rocket,
      desc: "Turn your product vision into a tested, investor-ready production MVP in 6 to 8 weeks with lean, high-impact feature prioritization.",
      features: [
        "Rapid prototyping & interactive Figma designs",
        "Modern scalable Next.js + PostgreSQL tech stack",
        "Investor-ready technical architecture & Git repos",
        "Built-in analytics & automated user onboarding",
      ],
      link: "/discuss-your-project?model=mvp",
    },
    {
      title: "Software & Cloud Consulting",
      badge: "Strategic Advisory",
      icon: ShieldCheck,
      desc: "Architectural audits, cloud modernization, security assessments, and FinOps cost optimization by principal engineers.",
      features: [
        "Deep code quality & security vulnerability audits",
        "Microservices & database scaling blueprints",
        "AWS & cloud monthly cost reduction by 30-50%",
        "Legacy system migration roadmap",
      ],
      link: "/contact?subject=consulting",
    },
    {
      title: "Business Process Automation",
      badge: "Operational ROI",
      icon: Cpu,
      desc: "Eliminate manual data entry, streamline multi-channel orders, and synchronize disparate databases with intelligent event-driven workflows.",
      features: [
        "Custom API middleware & webhook listeners",
        "Automated WhatsApp, SMS, & email customer triggers",
        "Multi-warehouse inventory & POS synchronization",
        "Automated PDF quotation & invoicing engines",
      ],
      link: "/services/business-process-automation",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-primary-50/25 to-white text-slate-900 relative overflow-hidden border-b border-slate-100">
      {/* Background Subtle Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-200/90 text-primary-700 text-xs font-bold uppercase tracking-wider shadow-xs">
            <span>FLEXIBLE COLLABORATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950">
            Tailored Engagement Models Built Around Your Business Needs.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Whether you need a dedicated engineering squad to scale your product roadmap, an agile team to ship an MVP fast, or end-to-end software development — SmartEdge delivers with agility and accountability.
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className="bg-white/95 hover:bg-white border border-slate-200/90 hover:border-primary-400 rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl hover:shadow-primary-500/10 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-primary-50/80 border border-primary-100 flex items-center justify-center text-brand-yellow group-hover:bg-primary-100/70 transition-colors">
                      <Icon className="w-6 h-6 text-brand-yellow" />
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-primary-50 text-primary-800 border border-primary-200/80">
                      {m.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-950 mb-3 group-hover:text-primary-600 transition-colors">
                    {m.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {m.desc}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {m.features.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={m.link}
                  className="inline-flex items-center justify-between w-full px-4 py-3 rounded-xl bg-slate-50 hover:bg-primary-500 text-slate-900 hover:text-white border border-slate-200 hover:border-primary-500 text-xs font-bold transition-all duration-200"
                >
                  <span>Select Model & Discuss</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
