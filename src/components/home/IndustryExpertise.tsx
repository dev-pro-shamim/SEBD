"use client";

import React from "react";
import {
  ShoppingBag,
  Truck,
  Layers,
  GraduationCap,
  Building2,
  HeartPulse,
  Factory,
  Landmark,
} from "lucide-react";

export default function IndustryExpertise() {
  const industries = [
    {
      title: "Retail & Digital Commerce",
      icon: <ShoppingBag className="w-6 h-6 text-brand-yellow" />,
      desc: "High-volume B2C marketplaces, single-page checkouts, flash sale queuing, and courier API automated dispatch.",
      solutions: ["Multi-Vendor Portals", "Showroom Inventory Sync", "Instant Mobile EMI"],
    },
    {
      title: "Logistics & Fleet Operations",
      icon: <Truck className="w-6 h-6 text-brand-yellow" />,
      desc: "Live GPS vehicle telemetry, automated route optimization, offline-ready river port ticketing, and digital ePODs.",
      solutions: ["Real-Time Control Tower", "Driver Navigation Apps", "Fuel & Speed Analytics"],
    },
    {
      title: "SaaS & Cloud Platforms",
      icon: <Layers className="w-6 h-6 text-brand-yellow" />,
      desc: "Multi-tenant data isolation, Stripe recurring subscription billing, user role tiering, and developer APIs.",
      solutions: ["Tenant Schemas", "Usage Metering", "SAML 2.0 Enterprise SSO"],
    },
    {
      title: "Manufacturing & Industrial Export",
      icon: <Factory className="w-6 h-6 text-brand-yellow" />,
      desc: "Live Bill of Materials (BOM) cost calculations, floor order progress, raw material stock alerts, and export customs paperwork.",
      solutions: ["Floor Execution ERP", "Multi-Plant Inventory", "Commercial LC Compliance"],
    },
    {
      title: "Healthcare & Digital Health",
      icon: <HeartPulse className="w-6 h-6 text-brand-yellow" />,
      desc: "Encrypted WebRTC telehealth video calls, doctor e-prescription workflows, and pharmacy fulfillment integration.",
      solutions: ["HIPAA-Compliant Records", "Drug-Interaction Engine", "Patient Portals"],
    },
    {
      title: "Real Estate & Construction",
      icon: <Building2 className="w-6 h-6 text-brand-yellow" />,
      desc: "Interactive 3D architectural lookbooks, apartment installment billing schedules, and contractor material allocation.",
      solutions: ["Unit Booking Portals", "Construction Milestones", "Contractor Dashboards"],
    },
    {
      title: "FinTech & Payment Systems",
      icon: <Landmark className="w-6 h-6 text-brand-yellow" />,
      desc: "Multi-gateway payment aggregators, escrow balance settlement, automated ledger reconciliation, and fraud prevention.",
      solutions: ["Instant bKash/Card Webhooks", "Escrow Ledgers", "Automated Banking Payouts"],
    },
    {
      title: "Education & Learning Management",
      icon: <GraduationCap className="w-6 h-6 text-brand-yellow" />,
      desc: "Interactive video course platforms, student progress telemetry, automated digital certificates, and live virtual classrooms.",
      solutions: ["Student LMS Portals", "Exam Assessment Engines", "Batch Progress Tracking"],
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden border-b border-slate-100">
      {/* Background Topography & Subtle Ambient Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-brand-yellow/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-xs font-semibold uppercase tracking-wider mb-4 border border-primary-200/60">
            SECTOR SPECIALIZATION
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Experience Across Diverse Business Models.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Domain expertise matters. We understand the specific operational constraints, compliance mandates, and customer behaviors unique to each industry.
          </p>
        </div>

        {/* 8 Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-primary-200 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center mb-5 group-hover:bg-primary-100/70 transition-colors shadow-xs">
                  {ind.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary-600 transition-colors mb-2">
                  {ind.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {ind.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-1">
                {ind.solutions.map((sol, sIdx) => (
                  <div key={sIdx} className="text-[11px] font-semibold text-slate-500">
                    &bull; {sol}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
