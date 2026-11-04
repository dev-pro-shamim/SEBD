import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Briefcase,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Clock,
  Sparkles,
  TrendingUp,
  GraduationCap,
  Home,
  Laptop,
  Heart,
  Coffee,
} from "lucide-react";
import { openPositions, companyPerks } from "@/data/careers";

export const metadata: Metadata = {
  title: "Careers & Engineering Culture | SmartEdge Bangladesh | Software Jobs Dhaka",
  description:
    "Join SmartEdge Bangladesh's high-caliber engineering squad in Mirpur-10, Dhaka. Explore open positions for Next.js, React, Node.js, Laravel, Flutter, and QA automation engineers.",
  keywords: [
    "Software Engineer Jobs Dhaka",
    "IT Jobs in Bangladesh",
    "Next.js Developer Jobs",
    "Flutter Developer Vacancy",
    "SmartEdge Careers",
  ],
  alternates: {
    canonical: "https://smartedgebangladesh.com/careers",
  },
  openGraph: {
    title: "Careers at SmartEdge Bangladesh | Software Engineering Jobs Dhaka",
    description:
      "Work on high-impact enterprise systems with modern tech stacks, competitive compensation, and engineering autonomy.",
    url: "https://smartedgebangladesh.com/careers",
    type: "website",
    images: ["/android-chrome-512x512.png"],
  },
};

export default function CareersPage() {
  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-900 via-navy-950 to-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary-500/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-primary-400 text-xs font-bold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>WE ARE HIRING</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Build Meaningful Software with Bangladesh's Elite Engineers.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            At SmartEdge Bangladesh, we solve challenging architectural problems for high-growth global startups and enterprises. No micromanagement, clean codebases, modern hardware, and continuous technical growth.
          </p>

          <div className="pt-2">
            <a
              href="#openings"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-bold text-slate-950 bg-brand-yellow hover:bg-yellow-400 shadow-xl shadow-brand-yellow/20 transition-all active:scale-95"
            >
              <span>View Open Engineering Roles</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Perks & Benefits Grid */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
              Why Engineers Love Working at SmartEdge
            </h2>
            <p className="text-base text-slate-600">
              We provide the environment, autonomy, and tooling necessary for engineers to do their life's best work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyPerks.map((perk, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm space-y-3">
                <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-950">{perk.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section id="openings" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-600">
              CURRENT OPPORTUNITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
              Open Positions at Our Mirpur-10 Hub
            </h2>
            <p className="text-sm text-slate-600">
              Find your next career chapter. All roles feature hybrid flexibility and competitive compensation.
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((job) => (
              <div
                key={job.id}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-primary-400 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 group"
              >
                <div className="space-y-3 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-primary-100 text-primary-800">
                      {job.department}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white text-slate-600 border border-slate-200">
                      {job.type}
                    </span>
                    <span className="text-xs font-bold text-emerald-600">
                      {job.status === "Open" ? "● Actively Interviewing" : "Reviewing"}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-950 group-hover:text-primary-600 transition-colors">
                    {job.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {job.shortDesc}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium pt-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {job.experience}
                    </span>
                    <span className="text-slate-900 font-bold">
                      {job.salaryRange}
                    </span>
                  </div>
                </div>

                <div className="shrink-0">
                  <Link
                    href={`/careers/${job.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-white text-sm font-bold shadow-md shadow-primary-500/20 transition-all"
                  >
                    <span>View Role & Apply</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spontaneous Application */}
      <section className="py-20 bg-gradient-to-b from-white via-primary-50/50 to-primary-100/40 text-slate-950 border-t border-slate-200/80 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 space-y-4 relative z-10">
          <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight">Don't See Your Exact Role?</h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
            We are always interested in connecting with outstanding software architects, tech leads, and product designers. Send your GitHub and resume directly to our engineering leadership.
          </p>
          <div className="pt-2">
            <a
              href="mailto:info@smartedgebangladesh.com?subject=Spontaneous%20Engineering%20Application"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-slate-950 bg-brand-yellow hover:bg-yellow-400 shadow-md transition-colors"
            >
              <span>Email Your Resume to info@smartedgebangladesh.com</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
