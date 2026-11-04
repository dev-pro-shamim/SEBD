import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Users2,
  Globe2,
  Clock,
  Sparkles,
  Award,
  Layers,
} from "lucide-react";
import { companyInfo } from "@/data/company";
import { cmsStore } from "@/lib/cms-store";
import ClientLogoSlider from "@/components/home/ClientLogoSlider";

export const metadata: Metadata = {
  title: "About Us | SmartEdge Bangladesh | Software Company in Dhaka",
  description:
    "Learn about SmartEdge Bangladesh: our founding in 2018, leadership team, engineering values, and global product delivery model for clients in Bangladesh, USA, UK, Canada, Australia, and Europe.",
  keywords: [
    "About SmartEdge Bangladesh",
    "Software Company in Dhaka",
    "IT Company in Bangladesh",
    "Software Engineering Leadership",
    "SmartEdge Founders",
    "Software Development Company in Bangladesh",
  ],
  alternates: {
    canonical: "https://smartedgebangladesh.com/about-us",
  },
  openGraph: {
    title: "About SmartEdge Bangladesh | Software Company in Dhaka",
    description:
      "Our mission, technical leadership team, and global track record in custom software engineering.",
    url: "https://smartedgebangladesh.com/about-us",
    type: "website",
    images: ["/android-chrome-512x512.png"],
  },
};

export default function AboutPage() {
  const company = cmsStore.getCompany();
  const teamMembers = cmsStore.getTeam();

  const milestones = [
    {
      year: "2018",
      title: "Founding of SmartEdge Bangladesh",
      desc: "Founded in Dhaka by senior software engineers with a focused mission: to deliver international-standard custom software without corporate bloat.",
    },
    {
      year: "2020",
      title: "Enterprise ERP & Commerce Expansion",
      desc: "Architected mission-critical manufacturing ERPs and high-throughput e-commerce platforms handling millions in annual GMV.",
    },
    {
      year: "2023",
      title: "Cross-Border International Delivery",
      desc: "Expanded dedicated engineering squads to clients across North America, the United Kingdom, Australia, and the UAE.",
    },
    {
      year: "2026",
      title: "AI Integration & Cloud Native Scale",
      desc: "Pioneering enterprise RAG and autonomous AI agent workflows, operating with 120+ successfully delivered software systems.",
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary-50/40 via-white to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-xs font-semibold uppercase tracking-wider mb-4 border border-primary-200/60">
            OUR STORY & MISSION
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Engineering Digital Products. Building Long-Term Partnerships.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            From an agile engineering team in Dhaka to a trusted technology partner for growing businesses across 8 global markets. We build software that performs, scales, and lasts.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-primary-600 block">
                WHO WE ARE
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                An Engineering-Led Company Built for Technical Excellence.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                SmartEdge Bangladesh is not a sales-heavy agency that outsources work to random contractors. We are a software engineering organization founded and managed by active practitioners who write code, design architectures, and take deep pride in every system we launch.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Our mission is straightforward: to provide fast-growing businesses with the engineering rigor, architectural sophistication, and transparent communication of an elite Silicon Valley software team, coupled with efficient delivery economics.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Our Mission</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Eliminate operational friction through clean, resilient, and human-centered software engineering.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Our Vision</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    To be the most reliable, respected, and technically proficient software partner in South Asia.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Stats Box */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white via-primary-50/40 to-slate-50 text-slate-900 relative overflow-hidden border border-slate-200/90 shadow-xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-yellow/10 rounded-full blur-xl pointer-events-none" />
              <div className="relative z-10 space-y-8">
                <span className="text-xs font-bold uppercase tracking-widest text-primary-700 block">
                  AT A GLANCE
                </span>

                <div className="grid grid-cols-2 gap-6">
                  {company.stats.map((s, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-white/95 border border-slate-200/90 shadow-sm">
                      <div className="text-3xl font-black text-slate-950 font-mono">
                        {s.value}
                      </div>
                      <div className="text-xs text-slate-600 font-medium mt-1">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-200 text-xs text-slate-600">
                  Headquartered at {typeof company.address === "string" ? company.address : (company.address as any)?.formatted} with active client engagements across the United States, United Kingdom, United Arab Emirates, Australia, Canada, and Singapore.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-600 mb-2 block">
              LEADERSHIP & ARCHITECTURE
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Leadership That Drives Strategy & Engineering Excellence.
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Hands-on technical leaders with proven track records building enterprise software and scaling delivery operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((leader, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl transition-all"
              >
                {leader.avatarUrl ? (
                  <img
                    src={leader.avatarUrl}
                    alt={`${leader.name} - ${leader.role} at SmartEdge Bangladesh`}
                    loading="lazy"
                    className="w-16 h-16 rounded-2xl object-cover mb-6 shadow-md border border-slate-200"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary-700 to-sky-500 text-white flex items-center justify-center font-bold text-xl mb-6 shadow-md shadow-primary-500/20">
                    {leader.initials}
                  </div>
                )}
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  {leader.name}
                </h3>
                <div className="text-xs font-semibold text-primary-600 mb-4">
                  {leader.role}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-600 mb-2 block">
              OUR GUIDING PRINCIPLES
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              How We Hold Ourselves Accountable.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyInfo.coreValues.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/60 flex items-center justify-center text-primary-600 font-bold mb-4 shadow-sm">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Delivery Markets */}
      <section className="py-20 bg-gradient-to-b from-slate-50 via-primary-50/25 to-white text-slate-900 border-b border-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-700 mb-2 block">
              INTERNATIONAL REACH
            </span>
            <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight">
              Global Delivery. Built for Cross-Border Collaboration.
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              We provide practical timezone overlap, fluent English communication, and international legal IP protections for businesses across 8 global markets.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {company.globalMarkets.map((m, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/95 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow text-left"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-primary-700 font-mono">
                    {m.code}
                  </span>
                  <Globe2 className="w-4 h-4 text-brand-yellow" />
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-1">
                  {m.country}
                </h3>
                <p className="text-xs text-slate-600">
                  {m.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Journey / Milestones */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-600 mb-2 block">
              OUR JOURNEY
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Evolution of SmartEdge Bangladesh.
            </h2>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-0.5 before:bg-slate-200">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row items-start ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                } gap-6`}
              >
                {/* Node circle */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary-500 border-4 border-white shadow-md flex items-center justify-center text-white text-xs font-bold z-10" />

                <div className="pl-12 md:pl-0 md:w-1/2 md:px-8">
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm">
                    <span className="text-sm font-bold text-primary-600 font-mono block mb-1">
                      {m.year}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {m.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Client Logos Slider */}
      <ClientLogoSlider />

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-b from-white via-primary-50/50 to-primary-100/40 text-slate-950 border-t border-slate-200/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mb-4 tracking-tight">
            Looking for a Long-Term Technology Partner?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Tell us about your technical goals. We're ready to engineer scalable solutions that grow with your company.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-slate-950 bg-brand-yellow hover:bg-yellow-400 shadow-md transition-all"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-slate-800 hover:text-slate-950 bg-white border border-slate-200/90 hover:bg-slate-50 shadow-sm transition-all"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
