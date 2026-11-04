import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  Check,
  ShieldCheck,
  Layers,
  ChevronRight,
  TrendingUp,
  FileCheck,
} from "lucide-react";
import { servicesData, ServiceDetail } from "@/data/services";
import { cmsStore } from "@/lib/cms-store";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const services = cmsStore.getServices();
  return (services.length > 0 ? services : servicesData).map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const allServices = cmsStore.getServices();
  const service = allServices.find((s) => s.slug === params.slug) || servicesData.find((s) => s.slug === params.slug);
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | SmartEdge Bangladesh`,
    description: service.shortDescription,
    alternates: {
      canonical: `https://smartedgebangladesh.com/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | SmartEdge Bangladesh`,
      description: service.shortDescription,
      url: `https://smartedgebangladesh.com/services/${service.slug}`,
    },
  };
}

export default function ServiceDetailPage({ params }: PageProps) {
  const allServices = cmsStore.getServices();
  const defaultService = servicesData.find((s) => s.slug === params.slug);
  const cmsService = allServices.find((s) => s.slug === params.slug);

  if (!defaultService && !cmsService) {
    notFound();
  }

  // Merge default rich details with CMS updates
  const service: ServiceDetail = {
    slug: params.slug,
    title: cmsService?.title || defaultService?.title || "Service",
    shortDescription: cmsService?.shortDescription || defaultService?.shortDescription || "",
    category: cmsService?.category || defaultService?.category || "Service",
    iconName: (cmsService as any)?.iconName || defaultService?.iconName || "Code2",
    badge: (cmsService as any)?.badge || defaultService?.badge || "Service",
    heroTitle: (cmsService as any)?.heroTitle || defaultService?.heroTitle || cmsService?.title || defaultService?.title || "Enterprise Service",
    heroSubtitle: (cmsService as any)?.heroSubtitle || defaultService?.heroSubtitle || cmsService?.shortDescription || defaultService?.shortDescription || "",
    challenges: defaultService?.challenges || [],
    solutions: defaultService?.solutions || [],
    features: (cmsService?.features && cmsService.features.length > 0 ? cmsService.features : defaultService?.features) || [],
    technologies: (cmsService?.technologies && cmsService.technologies.length > 0 ? cmsService.technologies : defaultService?.technologies) || [],
    deliverables: (cmsService?.deliverables && cmsService.deliverables.length > 0 ? cmsService.deliverables : defaultService?.deliverables) || [],
    process: defaultService?.process || [],
    benefits: defaultService?.benefits || [],
    faqs: (cmsService?.faqs && cmsService.faqs.length > 0 ? cmsService.faqs : defaultService?.faqs) || [],
    metrics: defaultService?.metrics || [],
  };

  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Breadcrumb Bar */}
      <div className="bg-slate-50 border-b border-slate-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-slate-500 flex items-center gap-1.5">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/services" className="hover:text-primary-600">Services</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-900">{service.title}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary-50/40 via-white to-white border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-xs font-semibold uppercase tracking-wider mb-4 border border-primary-200/60">
              {service.badge}
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {service.heroTitle}
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
              {service.heroSubtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={`/discuss-your-project?service=${encodeURIComponent(service.title)}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-primary-500 hover:bg-primary-600 shadow-md shadow-primary-500/20 transition-all"
              >
                <span>Discuss Your {service.title} Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`https://wa.me/8801743589784?text=Hi%20SmartEdge,%20I%20would%20like%20to%20discuss%20${encodeURIComponent(service.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all"
              >
                Instant WhatsApp Inquiry
              </a>
            </div>

            {/* Impact Metrics Row */}
            <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-3 gap-6">
              {(service.metrics || []).map((m, idx) => (
                <div key={idx}>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">
                    {m.value}
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-1">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions Side-by-Side */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-600 mb-2 block">
              CHALLENGES & SOLUTIONS
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Solving the Core Friction in {service.title}.
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Here is how we turn common operational roadblocks into competitive technical advantages.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Challenges Column */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2 text-rose-600">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                The Common Challenges You Face
              </h3>
              <div className="space-y-6">
                {(service.challenges || []).map((c, idx) => (
                  <div key={idx} className="pb-5 border-b border-slate-100 last:border-0 last:pb-0">
                    <h4 className="text-base font-bold text-slate-900 mb-1.5">
                      {c.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions Column */}
            <div className="bg-white rounded-3xl p-8 border border-primary-200/90 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2 text-primary-600">
                <span className="w-2.5 h-2.5 rounded-full bg-primary-500" />
                How SmartEdge Bangladesh Delivers the Solution
              </h3>
              <div className="space-y-6">
                {(service.solutions || []).map((s, idx) => (
                  <div key={idx} className="pb-5 border-b border-slate-100 last:border-0 last:pb-0">
                    <h4 className="text-base font-bold text-slate-900 mb-1.5">
                      {s.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Technical Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-600 mb-2 block">
              CAPABILITIES BREAKDOWN
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Features & Engineering Highlights
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Built with uncompromising security, performance benchmarks, and modularity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {(service.features || []).map((feat, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm hover:border-primary-200 hover:bg-white hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {feat.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Tech Stack & Deliverables */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-white via-primary-50/40 to-slate-50 text-slate-900 border border-slate-200/90 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-yellow/10 rounded-full blur-xl pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-950">
                  <Layers className="w-5 h-5 text-brand-yellow" />
                  Technologies & Frameworks Deployed
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  We select the optimal programming languages and database engines to ensure maximum concurrency and maintainability.
                </p>
                <div className="flex flex-wrap gap-2">
                  {(service.technologies || []).map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-lg bg-white text-slate-800 text-xs font-semibold border border-slate-200/90 shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-primary-50/60 border border-primary-100">
              <h3 className="text-lg font-bold mb-4 text-slate-900 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-primary-600" />
                Guaranteed Project Deliverables
              </h3>
              <ul className="space-y-3">
                {(service.deliverables || []).map((deliv, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Step Development Process */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-600 mb-2 block">
              DELIVERY PROCESS
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Our 6-Step Delivery Lifecycle for {service.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(service.process || []).map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-2xl font-black text-primary-600 font-mono block mb-2">
                  {step.step}
                </span>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions About {service.title}
            </h2>
          </div>

          <div className="space-y-4">
            {(service.faqs || []).map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80"
              >
                <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  {faq.q}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-20 bg-gradient-to-b from-white via-primary-50/50 to-primary-100/40 text-slate-950 border-t border-slate-200/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4">
            Ready to Engineer Your {service.title}?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Speak directly with a Senior Technical Architect from SmartEdge Bangladesh. We provide an initial technical scope and ballpark estimation within 24 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-slate-950 bg-brand-yellow hover:bg-yellow-400 shadow-md transition-all"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-slate-800 hover:text-slate-950 bg-white border border-slate-200/90 hover:bg-slate-50 shadow-sm transition-all"
            >
              Back to All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
