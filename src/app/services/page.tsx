import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Code2,
  Zap,
  Database,
  Globe,
  Smartphone,
  ShoppingCart,
  FileCode,
  Users,
  Cloud,
  Cpu,
  RefreshCw,
  ShieldCheck,
  ArrowRight,
  Check,
  CheckCircle2,
  Layers,
  Sparkles,
} from "lucide-react";
import { servicesData } from "@/data/services";
import { cmsStore } from "@/lib/cms-store";

export const metadata: Metadata = {
  title: "Enterprise Software Services & Engineering Capabilities | SmartEdge Bangladesh",
  description:
    "Explore SmartEdge Bangladesh's core software engineering services: Custom Software Development, ERP & CRM Systems, Next.js Web Apps, Mobile Development, E-commerce, Dedicated Teams, and AI Automation in Bangladesh and globally.",
  keywords: [
    "Software Development Services",
    "Custom Software Development Bangladesh",
    "Web Development Services Dhaka",
    "Mobile App Development",
    "ERP Software Development",
    "Next.js Development Services",
    "React Development Company",
    "SmartEdge Bangladesh Services",
  ],
  alternates: {
    canonical: "https://smartedgebangladesh.com/services",
  },
  openGraph: {
    title: "Enterprise Software Development Services | SmartEdge Bangladesh",
    description:
      "Full-lifecycle software engineering: Custom Apps, ERP, Next.js, Flutter, and AI automation for global companies.",
    url: "https://smartedgebangladesh.com/services",
    type: "website",
    images: ["/android-chrome-512x512.png"],
  },
};

export default function ServicesPage() {
  const cmsServices = cmsStore.getServices();
  const displayServices = cmsServices.length > 0 ? cmsServices : servicesData;
  const getIcon = (name?: string) => {
    switch (name) {
      case "Code2":
        return <Code2 className="w-6 h-6 text-primary-500" />;
      case "Zap":
        return <Zap className="w-6 h-6 text-amber-500" />;
      case "Database":
        return <Database className="w-6 h-6 text-emerald-500" />;
      case "Globe":
        return <Globe className="w-6 h-6 text-sky-500" />;
      case "Smartphone":
        return <Smartphone className="w-6 h-6 text-indigo-500" />;
      case "ShoppingCart":
        return <ShoppingCart className="w-6 h-6 text-rose-500" />;
      case "FileCode":
        return <FileCode className="w-6 h-6 text-blue-600" />;
      case "Users":
        return <Users className="w-6 h-6 text-purple-500" />;
      case "Cloud":
        return <Cloud className="w-6 h-6 text-cyan-500" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-violet-500" />;
      case "RefreshCw":
        return <RefreshCw className="w-6 h-6 text-teal-500" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-green-600" />;
      default:
        return <Code2 className="w-6 h-6 text-primary-500" />;
    }
  };

  const businessChallenges = [
    {
      title: "Manual & Repetitive Work",
      desc: "Valuable employees wasting hours re-entering invoices, order tickets, and customer records between disconnected systems.",
    },
    {
      title: "Disconnected Business Systems",
      desc: "Inventory in warehouses failing to communicate with e-commerce storefronts and corporate accounting ledgers.",
    },
    {
      title: "Aging Legacy Software",
      desc: "Fragile desktop systems and deprecated PHP codebases that cannot integrate with modern cloud APIs or mobile apps.",
    },
    {
      title: "Scaling & Concurrency Bottlenecks",
      desc: "Servers crashing and databases locking up under flash sale rushes, promotional campaigns, or peak month-end closes.",
    },
    {
      title: "Poor Operational Visibility",
      desc: "Executive decision-makers flying blind due to lack of real-time P&L, stock valuation, and customer retention metrics.",
    },
    {
      title: "Limited In-House Engineering Capacity",
      desc: "Product roadmaps delayed by months because hiring senior domestic engineers is painfully slow and prohibitively expensive.",
    },
  ];

  const engagementModels = [
    {
      title: "Project-Based Delivery",
      badge: "Fixed Scope & Milestone Billing",
      desc: "Ideal for well-defined MVPs, platform redesigns, and new software products. We handle end-to-end architecture, development, QA, and launch under guaranteed milestone timelines.",
      points: [
        "Fixed-price transparency with zero surprise invoices",
        "Bi-weekly sprint demos and working staging previews",
        "Complete QA testing and 30-day post-launch warranty",
      ],
    },
    {
      title: "Dedicated Engineering Teams",
      badge: "Staff Augmentation & Dedicated Squads",
      desc: "Embed full-time senior software engineers, frontend specialists, tech leads, and QA analysts directly into your existing product team and Jira workflows.",
      points: [
        "100% exclusive allocation with zero split focus",
        "Guaranteed 4 to 6 hours daily timezone overlap",
        "14-day risk-free candidate replacement trial",
      ],
    },
    {
      title: "Discovery & Technical Consulting",
      badge: "Architecture & Feasibility Audits",
      desc: "Unsure of the right architecture? Our Principal Architects audit your legacy code, database schemas, and performance bottlenecks to formulate a concrete engineering roadmap.",
      points: [
        "Comprehensive architectural blueprint and ER diagrams",
        "Technology stack recommendations and cost projections",
        "Security audit and cloud modernization strategy",
      ],
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Services Hero matching reference */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary-50/40 via-white to-white border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-xs font-semibold uppercase tracking-wider mb-4 border border-primary-200/60">
            COMPREHENSIVE CAPABILITIES
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Software Engineering Services Built Around Business Growth.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            From custom software and business automation to digital commerce, cloud platforms, and dedicated engineering teams, we help ambitious companies build, modernize, and scale technology with confidence.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/discuss-your-project"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-primary-500 hover:bg-primary-600 shadow-md shadow-primary-500/20 transition-all"
            >
              Discuss Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-all"
            >
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Complete 12 Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Engineering Capabilities for Every Stage of Growth.
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Every service is delivered by senior software engineers with deep domain expertise and strict adherence to enterprise coding standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayServices.map((service) => (
              <div
                key={service.slug}
                className="bg-slate-50/70 hover:bg-white rounded-2xl p-7 border border-slate-200/80 hover:border-primary-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-white group-hover:bg-primary-50 shadow-sm border border-slate-100 group-hover:border-primary-100 transition-colors">
                      {getIcon(service.iconName || (service as any).icon)}
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200/80">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary-600 transition-colors mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {service.shortDescription}
                  </p>

                  <div className="space-y-2 mb-6 pt-4 border-t border-slate-200/60">
                    {(service.features || []).slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-primary-500 flex-shrink-0 mt-0.5" />
                        <span>{feat.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 group-hover:text-primary-700 group-hover:translate-x-1 transition-all pt-2"
                >
                  <span>Explore {service.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Challenges Section matching reference */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-600 mb-2 block">
              OPERATIONAL REALITY
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Technology Should Remove Business Friction — Not Add to It.
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Most businesses don't fail for lack of effort. They get throttled by disconnected tools, manual bottlenecks, and fragile software architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessChallenges.map((challenge, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-sm mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {challenge.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {challenge.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models matching reference */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-600 mb-2 block">
              COLLABORATION FRAMEWORK
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Flexible Engagement. Clear Responsibility.
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Choose the delivery model that fits your operational stage, budget constraints, and management style.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {engagementModels.map((model, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-primary-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-primary-100/70 text-primary-700 mb-4 inline-block">
                    {model.badge}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {model.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {model.desc}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-200/70 mb-6">
                    {model.points.map((p, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/discuss-your-project"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-primary-700 bg-primary-50 hover:bg-primary-100 transition-colors text-center"
                >
                  Choose {model.title}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
