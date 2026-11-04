import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Users,
  Code2,
  CheckCircle2,
  ShieldCheck,
  Zap,
  ArrowRight,
  Clock,
  Sparkles,
  Award,
  Calendar,
  Layers,
  PhoneCall,
  MessageSquare,
} from "lucide-react";
import { developerRoles, engagementModels, hiringProcessSteps, hireFaqs } from "@/data/developers";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: "Hire Dedicated Software Developers & Teams | SmartEdge Bangladesh",
  description:
    "Hire vetted senior Full-Stack, Next.js, React, Node.js, Laravel, Flutter developers and dedicated engineering squads from Bangladesh for USA, UK, Canada, Australia, and European enterprises. Flexible engagement with a 2-week risk-free trial.",
  keywords: [
    "Hire Dedicated Developers",
    "Hire Software Engineers Bangladesh",
    "Hire Next.js Developers",
    "Hire React Developers",
    "Dedicated Engineering Teams",
    "Outsource Software Development Bangladesh",
    "SmartEdge Bangladesh",
  ],
  alternates: {
    canonical: "https://smartedgebangladesh.com/hire-developers",
  },
  openGraph: {
    title: "Hire Dedicated Software Developers | SmartEdge Bangladesh",
    description:
      "Scale your engineering squad with elite full-stack, mobile, and cloud developers from Dhaka, Bangladesh.",
    url: "https://smartedgebangladesh.com/hire-developers",
    type: "website",
    images: ["/android-chrome-512x512.png"],
  },
};

export default function HireDevelopersPage() {
  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 via-navy-950 to-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary-500/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-brand-yellow/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-brand-yellow text-xs font-bold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5 text-brand-yellow" />
              <span>DEDICATED TALENT & STAFF AUGMENTATION</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Hire Dedicated Developers. Scale Your Engineering Capacity.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Plug senior Next.js, React, Node.js, Laravel, Flutter, and QA engineers directly into your sprint roadmap. Zero recruitment fees, instant onboarding in 3 to 7 days, and an evaluation trial period.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/discuss-your-project?type=hire-developers"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-bold text-slate-950 bg-brand-yellow hover:bg-yellow-400 shadow-xl shadow-brand-yellow/20 transition-all duration-200 active:scale-95"
              >
                <span>Inquire About Developers</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={companyInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-base font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Instant Match</span>
              </a>
            </div>

            {/* Key Trust Signals */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-800">
              <div>
                <div className="text-2xl font-black text-white">Top 3%</div>
                <div className="text-xs text-slate-400 font-medium">Vetted Engineering Talent</div>
              </div>
              <div>
                <div className="text-2xl font-black text-brand-yellow">48 Hours</div>
                <div className="text-xs text-slate-400 font-medium">Curated CV Matching</div>
              </div>
              <div>
                <div className="text-2xl font-black text-white">2 Weeks</div>
                <div className="text-xs text-slate-400 font-medium">Risk-Free Evaluation Trial</div>
              </div>
              <div>
                <div className="text-2xl font-black text-primary-400">Time-Zone</div>
                <div className="text-xs text-slate-400 font-medium">Overlapping Sprint Hours</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
              Flexible Hiring & Engagement Models
            </h2>
            <p className="text-base text-slate-600">
              Choose the right engagement structure to match your project timeline, internal bandwidth, and budget constraints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engagementModels.map((model) => (
              <div
                key={model.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:border-primary-400 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary-50 text-primary-700 border border-primary-200/60 inline-block mb-4">
                    {model.badge}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{model.title}</h3>
                  <div className="text-xs font-semibold text-primary-600 mb-3">{model.commitment}</div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">{model.description}</p>

                  <ul className="space-y-2 mb-6">
                    {model.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/discuss-your-project?engagement=${model.id}`}
                  className="w-full text-center py-2.5 rounded-xl bg-slate-100 hover:bg-primary-500 hover:text-white text-xs font-bold text-slate-800 transition-colors"
                >
                  Choose {model.title.split(" ")[0]}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Roles Showcase Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-bold uppercase">
              <span>SPECIALIZED ENGINEERING ROLES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
              Browse Available Developer Profiles & Stacks
            </h2>
            <p className="text-base text-slate-600">
              Every SmartEdge developer undergoes rigorous algorithmic evaluations, live architecture assessments, and English fluency vetting before joining client teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developerRoles.map((role) => (
              <div
                key={role.id}
                className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm hover:shadow-xl hover:border-primary-400 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                      {role.category}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      {role.availability}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-950 mb-2 group-hover:text-primary-600 transition-colors">
                    {role.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-5">
                    {role.shortDesc}
                  </p>

                  {/* Primary Skills */}
                  <div className="mb-4">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Primary Technologies
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {role.primarySkills.map((skill, sIdx) => (
                        <span key={sIdx} className="text-xs font-semibold px-2.5 py-1 rounded-md bg-primary-50 text-primary-700 border border-primary-200/60">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Deliverables */}
                  <div className="space-y-2 mb-6">
                    {role.deliverables.slice(0, 3).map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-[11px] text-slate-500 font-medium">
                    Exp: {role.experienceLevels.join(", ")}
                  </div>
                  <Link
                    href={`/discuss-your-project?role=${role.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-600 hover:text-primary-700"
                  >
                    <span>Hire {role.title.replace("Hire ", "")}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Hiring Process */}
      <section className="py-20 bg-gradient-to-b from-slate-50 via-primary-50/25 to-white text-slate-900 border-y border-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Our Streamlined 4-Step Hiring Process
            </h2>
            <p className="text-base text-slate-600">
              From requirement definition to your first sprint kickoff in less than one week.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {hiringProcessSteps.map((step) => (
              <div key={step.step} className="bg-white/95 rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow relative">
                <div className="text-3xl font-black text-primary-600 font-mono mb-3">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-2">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Hiring FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-950">Frequently Asked Questions</h2>
            <p className="text-sm text-slate-600">Common questions about hiring dedicated developers with SmartEdge.</p>
          </div>

          <div className="space-y-4">
            {hireFaqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="text-base font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-primary-50 border-t border-primary-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-slate-950">
            Need Dedicated Developers Starting Next Week?
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Contact us today with your technical requirements. We will send curated developer CVs and schedule technical video interviews within 48 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/discuss-your-project?type=hire-developers"
              className="px-8 py-4 rounded-full text-base font-bold text-white bg-primary-500 hover:bg-primary-600 shadow-xl shadow-primary-500/25 transition-all"
            >
              Request Developer Profiles
            </Link>
            <a
              href={companyInfo.phoneLink}
              className="px-6 py-4 rounded-full text-base font-bold text-slate-800 bg-white border border-slate-200 hover:bg-slate-50 transition-all inline-flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-primary-500" />
              <span>Call +8801743589784</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
