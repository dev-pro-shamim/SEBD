import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  TrendingUp,
  Layers,
  Quote,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { caseStudiesData, CaseStudy } from "@/data/cases";
import { cmsStore } from "@/lib/cms-store";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const cases = cmsStore.getCases();
  return (cases.length > 0 ? cases : caseStudiesData).map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const allCases = cmsStore.getCases();
  const caseItem = allCases.find((c) => c.slug === params.slug) || caseStudiesData.find((c) => c.slug === params.slug);
  if (!caseItem) {
    return {
      title: "Case Study Not Found",
    };
  }

  const seo = (caseItem as any).seo;
  const description = seo?.description || caseItem.summary || caseItem.overview;
  const title = seo?.title || `${caseItem.title} | Enterprise Case Study | SmartEdge Bangladesh`;
  const canonical = seo?.canonicalUrl || `https://smartedgebangladesh.com/case-studies/${caseItem.slug}`;
  const ogTitle = seo?.ogTitle || title;
  const ogDescription = seo?.ogDescription || description;
  const ogImage = seo?.ogImage || caseItem.heroImage || "/android-chrome-512x512.png";

  return {
    title,
    description,
    keywords: [
      caseItem.title,
      caseItem.industry,
      ...(seo?.focusKeyword ? [seo.focusKeyword] : []),
      ...(seo?.secondaryKeywords || []),
      ...(caseItem.technologies || []),
      "Enterprise Case Study",
      "Software Engineering Case Study",
      "SmartEdge Bangladesh",
    ],
    robots: seo?.metaRobots ? { index: !seo.metaRobots.includes("noindex"), follow: !seo.metaRobots.includes("nofollow") } : undefined,
    alternates: {
      canonical,
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: canonical,
      siteName: "SmartEdge Bangladesh",
      type: "article",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [ogImage],
    },
  };
}

export default function CaseStudyDetailPage({ params }: PageProps) {
  const allCases = cmsStore.getCases();
  const defaultCase = caseStudiesData.find((c) => c.slug === params.slug);
  const cmsCase = allCases.find((c) => c.slug === params.slug);

  if (!defaultCase && !cmsCase) {
    notFound();
  }

  const caseItem = {
    ...defaultCase,
    ...cmsCase,
    metrics: (cmsCase?.metrics && cmsCase.metrics.length > 0 ? cmsCase.metrics : defaultCase?.metrics) || [],
    screenshots: (cmsCase?.screenshots && cmsCase.screenshots.length > 0 ? cmsCase.screenshots : defaultCase?.screenshots) || [],
    processSteps: (cmsCase?.processSteps && cmsCase.processSteps.length > 0 ? cmsCase.processSteps : defaultCase?.processSteps) || [],
    results: (cmsCase?.results && cmsCase.results.length > 0 ? cmsCase.results : defaultCase?.results) || [],
    technologies: (cmsCase?.technologies && cmsCase.technologies.length > 0 ? cmsCase.technologies : defaultCase?.technologies) || [],
  } as unknown as CaseStudy;

  const relatedCases = (allCases.length > 0 ? allCases : caseStudiesData).filter((c) =>
    (caseItem.relatedSlugs || []).includes(c.slug)
  );

  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Structured Data: Breadcrumb */}
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Case Studies", url: "/case-studies" },
          { name: caseItem.title, url: `/case-studies/${caseItem.slug}` },
        ]}
      />

      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-slate-500 flex items-center gap-1.5">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/case-studies" className="hover:text-primary-600">Case Studies</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-900 truncate max-w-xs">{caseItem.title}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-primary-50/40 via-white to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold">
                {caseItem.category}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                {caseItem.industry}
              </span>
              <span className="text-xs text-slate-400">&bull;</span>
              <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                {caseItem.duration}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {caseItem.title}
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
              {caseItem.summary}
            </p>

            <div className="mt-6 flex items-center gap-3 text-xs font-medium text-slate-500">
              <span>Client: <strong className="text-slate-800">{caseItem.client}</strong></span>
              <span>&bull;</span>
              <span className="text-emerald-600 font-semibold">{caseItem.clientType}</span>
            </div>

            {/* Big Metrics Grid */}
            <div className="mt-10 pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {(caseItem.metrics || []).map((m, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="text-xs text-slate-500 font-medium">{m.label}</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 font-mono">
                    {m.value}
                  </div>
                  <div className="text-xs font-semibold text-emerald-600 mt-1 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5 text-amber-500" />
                    <span>{m.change}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Project Hero Image Showcase Frame */}
            <div className="mt-12 rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-white relative group">
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-100/95 border-b border-slate-200 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <span className="ml-3 font-mono text-[11px] text-slate-600 bg-white px-3 py-1 rounded border border-slate-200/90 truncate shadow-xs">
                  https://smartedgebangladesh.com/case-studies/{caseItem.slug}
                </span>
                <span className="ml-auto text-[10px] font-bold uppercase tracking-wider text-slate-950 bg-brand-yellow px-2.5 py-0.5 rounded shadow-xs">
                  Live Production Delivery
                </span>
              </div>
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                <img
                  src={caseItem.heroImage}
                  alt={`${caseItem.title} - Enterprise Architecture Showcase by SmartEdge Bangladesh`}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Project Overview
          </h2>
          <p className="text-base text-slate-600 leading-relaxed mb-12">
            {caseItem.overview}
          </p>

          {/* The Challenge */}
          <div className="mb-14 p-8 rounded-3xl bg-slate-50 border border-slate-200/80">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600 mb-2 block">
              THE BUSINESS CHALLENGE
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              {typeof caseItem.challenge === "string" ? "Navigating Structural Roadblocks" : caseItem.challenge?.headline}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {typeof caseItem.challenge === "string" ? caseItem.challenge : caseItem.challenge?.details}
            </p>

            {caseItem.challenge?.points && Array.isArray(caseItem.challenge.points) && (
              <div className="space-y-3 pt-4 border-t border-slate-200/60">
                {caseItem.challenge.points.map((pt: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* The Solution */}
          <div className="mb-14 p-8 rounded-3xl bg-primary-50/40 border border-primary-200/70">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-600 mb-2 block">
              THE SMARTEDGE SOLUTION
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              {typeof caseItem.solution === "string" ? "Engineered for Resilience & Scale" : caseItem.solution?.headline}
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              {typeof caseItem.solution === "string" ? caseItem.solution : caseItem.solution?.architecture}
            </p>

            {caseItem.solution?.highlights && Array.isArray(caseItem.solution.highlights) && (
              <div className="space-y-3 pt-4 border-primary-200/50">
                {caseItem.solution.highlights.map((h: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Screenshots / Interface Architecture Preview */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              System Architecture & Interface Previews
            </h3>
            <div className="space-y-8">
              {(caseItem.screenshots || []).map((s, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl overflow-hidden border border-slate-200/80 shadow-md bg-white group hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                    <img
                      src={s.image || caseItem.heroImage}
                      alt={`${s.title} - ${caseItem.title} Architecture Interface`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 z-10">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-brand-yellow block mb-1">
                        Interface Component 0{idx + 1}
                      </span>
                      <h4 className="text-xl font-bold text-white drop-shadow-sm">{s.title}</h4>
                    </div>
                  </div>
                  <div className="p-6 bg-slate-50 border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {s.caption}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Delivery Process */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Execution Sprints & Methodology
            </h3>
            <div className="space-y-4">
              {(caseItem.processSteps || []).map((step, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200/80 flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-1">
                      {step.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quantified Results */}
          <div className="mb-16 p-8 rounded-3xl bg-gradient-to-br from-white via-primary-50/40 to-slate-50 text-slate-900 border border-slate-200/90 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-yellow/10 rounded-full blur-xl pointer-events-none" />
            <div className="relative z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-primary-700 mb-2 block">
                MEASURABLE BUSINESS IMPACT
              </span>
              <h3 className="text-2xl font-extrabold text-slate-950 mb-6">
                Verified Project Outcomes
              </h3>
              <div className="space-y-5">
                {(caseItem.results || []).map((res, idx) => (
                  <div key={idx} className="pb-4 border-b border-slate-200 last:border-0 last:pb-0">
                    <div className="text-lg font-bold text-primary-700 mb-1">
                      {res.metric}
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {res.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial if available */}
          {caseItem.testimonial && (
            <div className="mb-16 p-8 rounded-3xl bg-primary-50/60 border border-primary-100 relative">
              <Quote className="w-10 h-10 text-primary-300 mb-4" />
              <p className="text-base sm:text-lg text-slate-800 italic leading-relaxed mb-6 font-medium">
                "{caseItem.testimonial.quote}"
              </p>
              <div>
                <div className="font-bold text-slate-900">
                  {caseItem.testimonial.author}
                </div>
                <div className="text-xs text-slate-500">
                  {caseItem.testimonial.role} &bull; {caseItem.testimonial.company}
                </div>
              </div>
            </div>
          )}

          {/* Technologies Used */}
          <div className="mb-16">
            <h3 className="text-lg font-bold text-slate-900 mb-3">
              Technologies Deployed in This Solution
            </h3>
            <div className="flex flex-wrap gap-2">
              {(caseItem.technologies || []).map((t, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Related Case Studies */}
          {relatedCases.length > 0 && (
            <div className="pt-12 border-t border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Related Engineering Projects
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedCases.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/cases/${rel.slug}`}
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-lg transition-all group"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary-600 block mb-1">
                      {rel.category}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-primary-600 transition-colors mb-2">
                      {rel.title}
                    </h4>
                    <span className="text-xs font-semibold text-primary-600 inline-flex items-center gap-1">
                      Read Case Study &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-b from-white via-primary-50/50 to-primary-100/40 text-slate-950 border-t border-slate-200/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mb-4 tracking-tight">
            Have a Similar Software Challenge in Your Business?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Let's discuss how our senior engineering team can tailor a proven solution for your requirements.
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
              href="/cases"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-slate-800 hover:text-slate-950 bg-white border border-slate-200/90 hover:bg-slate-50 shadow-sm transition-all"
            >
              Back to All Cases
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
