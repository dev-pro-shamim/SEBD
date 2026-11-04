import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  ArrowRight,
  ChevronRight,
  Layers,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { portfolioProjectsData, PortfolioProject } from "@/data/portfolio";
import { cmsStore } from "@/lib/cms-store";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const projects = cmsStore.getPortfolio();
  return (projects.length > 0 ? projects : portfolioProjectsData).map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const allProjects = cmsStore.getPortfolio();
  const project = allProjects.find((p) => p.slug === params.slug) || portfolioProjectsData.find((p) => p.slug === params.slug);
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Portfolio | SmartEdge Bangladesh`,
    description: project.shortDescription,
    alternates: {
      canonical: `https://smartedgebangladesh.com/portfolio/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Portfolio`,
      description: project.shortDescription,
      url: `https://smartedgebangladesh.com/portfolio/${project.slug}`,
    },
  };
}

export default function PortfolioDetailPage({ params }: PageProps) {
  const allProjects = cmsStore.getPortfolio();
  const defaultProject = portfolioProjectsData.find((p) => p.slug === params.slug);
  const cmsProject = allProjects.find((p) => p.slug === params.slug);

  if (!defaultProject && !cmsProject) {
    notFound();
  }

  const project: PortfolioProject = {
    slug: params.slug,
    title: cmsProject?.title || defaultProject?.title || "Project",
    shortDescription: cmsProject?.shortDescription || defaultProject?.shortDescription || "",
    fullDescription: cmsProject?.fullDescription || defaultProject?.fullDescription || "",
    client: (cmsProject as any)?.client || defaultProject?.client || "Enterprise Client",
    clientType: (cmsProject?.clientType || defaultProject?.clientType || "Commercial Delivery") as any,
    industry: cmsProject?.industry || defaultProject?.industry || "Technology",
    category: (cmsProject?.category || defaultProject?.category || "Web Development") as any,
    architecture: cmsProject?.architecture || defaultProject?.architecture || "",
    image: cmsProject?.image || defaultProject?.image || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    gallery: (cmsProject?.gallery && cmsProject.gallery.length > 0 ? cmsProject.gallery : defaultProject?.gallery) || [],
    technologies: (cmsProject?.technologies && cmsProject.technologies.length > 0 ? cmsProject.technologies : defaultProject?.technologies) || [],
    metrics: (cmsProject?.metrics && cmsProject.metrics.length > 0 ? cmsProject.metrics : defaultProject?.metrics) || [],
    features: (cmsProject?.features && cmsProject.features.length > 0 ? cmsProject.features : defaultProject?.features) || [],
    keyOutcomes: (cmsProject?.keyOutcomes && cmsProject.keyOutcomes.length > 0 ? cmsProject.keyOutcomes : defaultProject?.keyOutcomes) || [],
    liveUrl: cmsProject?.liveUrl || defaultProject?.liveUrl,
    demoUrl: (cmsProject as any)?.demoUrl || defaultProject?.demoUrl,
    githubUrl: cmsProject?.githubUrl || defaultProject?.githubUrl,
  };

  return (
    <div className="pt-28 pb-20 bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-slate-500 flex items-center gap-1.5">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/portfolio" className="hover:text-primary-600">Portfolio</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-900 truncate max-w-xs">{project.title}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-primary-50/40 via-white to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold">
                {project.category}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                {project.industry}
              </span>
              <span className="text-xs text-slate-400">&bull;</span>
              <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                {project.clientType}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
              {project.fullDescription}
            </p>

            {/* Metrics */}
            <div className="mt-10 pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {(project.metrics || []).map((m, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="text-xs text-slate-500 font-medium">{m.label}</div>
                  <div className="text-2xl font-extrabold text-slate-900 mt-1 font-mono">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Project Hero Image Showcase */}
            <div className="mt-12 rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-white relative group">
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-100/95 border-b border-slate-200 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <span className="ml-3 font-mono text-[11px] text-slate-600 bg-white px-3 py-1 rounded border border-slate-200/90 truncate shadow-xs">
                  https://smartedgebangladesh.com/systems/{project.slug}
                </span>
                <span className="ml-auto text-[10px] font-bold uppercase tracking-wider text-primary-700 bg-primary-100 border border-primary-200 px-2.5 py-0.5 rounded shadow-xs">
                  System Preview
                </span>
              </div>
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={`${project.title} - Main Interface`}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Body */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {/* Architecture & Engineering Approach */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-white via-primary-50/40 to-slate-50 text-slate-900 border border-slate-200/90 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-yellow/10 rounded-full blur-xl pointer-events-none" />
            <div className="relative z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-primary-700 mb-2 block">
                SYSTEM ARCHITECTURE
              </span>
              <h2 className="text-2xl font-extrabold text-slate-950 mb-4">
                Architectural Design & Scalability
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {project.architecture}
              </p>

              <div className="pt-4 border-t border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-3">
                  Technologies & Tools Used:
                </span>
                <div className="flex flex-wrap gap-2">
                  {(project.technologies || []).map((t, idx) => (
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
          </div>

          {/* Visual Showcase & System Interfaces */}
          {project.gallery && project.gallery.length > 0 && (
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary-600 mb-2 block">
                SYSTEM INTERFACES & WORKFLOW SHOWCASE
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Operational Modules & Deep-Dive Views
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.gallery.map((item, idx) => (
                  <div
                    key={idx}
                    className="group rounded-2xl overflow-hidden border border-slate-200 bg-slate-50/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="p-5 flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-primary-600 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {item.caption}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Features Breakdown */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Core Capabilities & Functional Modules
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(project.features || []).map((feat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-800">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Outcomes */}
          <div className="p-8 rounded-3xl bg-primary-50/50 border border-primary-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Business Value & Strategic Outcomes
            </h2>
            <ul className="space-y-3">
              {(project.keyOutcomes || []).map((outcome, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                  <span className="w-2 h-2 rounded-full bg-primary-600 mt-2 flex-shrink-0" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-gradient-to-b from-white via-primary-50/50 to-primary-100/40 text-slate-950 border-t border-slate-200/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mb-4 tracking-tight">
            Want to Build a Solution Like {project.title}?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Our engineering team will assess your operational requirements and draft an architectural plan tailored to your budget and growth targets.
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
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-slate-800 hover:text-slate-950 bg-white border border-slate-200/90 hover:bg-slate-50 shadow-sm transition-all"
            >
              Back to Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
