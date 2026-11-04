"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import {
  Search,
  ArrowRight,
  ExternalLink,
  Layers,
  Sparkles,
  CheckCircle2,
  Filter,
} from "lucide-react";
import { portfolioProjectsData, portfolioCategories, PortfolioProject } from "@/data/portfolio";

export default function PortfolioPage() {
  const [projects, setProjects] = useState<any[]>(portfolioProjectsData);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    fetch("/api/content/portfolio")
      .then((res) => res.json())
      .then((data) => {
        if (data?.data && Array.isArray(data.data) && data.data.length > 0) {
          setProjects(data.data);
        }
      })
      .catch(() => {});
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.shortDescription.toLowerCase().includes(q) ||
        project.technologies.some((t: string) => t.toLowerCase().includes(q)) ||
        project.industry.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  return (
    <div className="pt-28 pb-20 bg-white min-h-screen">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary-50/40 via-white to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-xs font-semibold uppercase tracking-wider mb-4 border border-primary-200/60">
            <Sparkles className="w-3.5 h-3.5" />
            ENGINEERED WORKS & SHOWCASE
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Our Enterprise Software Portfolio.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Explore our curated showcase of enterprise software systems, high-speed web apps, AI pipelines, mobile products, and workflow automation engines built for modern businesses.
          </p>
        </div>
      </section>

      {/* Controls Bar: Search & Category Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          {/* Search Box */}
          <div className="relative flex-grow max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by technology, keyword, or industry..."
              className="w-full bg-slate-50 border border-slate-200 rounded-full pl-11 pr-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary-500 focus:bg-white transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Results Count */}
          <div className="text-xs font-semibold text-slate-500 flex items-center gap-1.5 self-center">
            <Filter className="w-3.5 h-3.5 text-primary-500" />
            <span>
              Showing {filteredProjects.length} of {projects.length} Projects
            </span>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-6 mb-10">
          {portfolioCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-primary-500 text-white shadow-md shadow-primary-500/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center max-w-md mx-auto">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400 mb-3">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">No projects found</h3>
            <p className="text-sm text-slate-500 mt-1">
              Try adjusting your search keywords or choosing a different category filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-primary-50 text-primary-600 text-xs font-semibold hover:bg-primary-100 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.slug}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Visual Header with High-Quality Project Image */}
                <div className="h-56 p-6 text-white flex flex-col justify-between relative overflow-hidden group/header">
                  {/* Background Image */}
                  <img
                    src={project.image}
                    alt={`${project.title} - Software Engineering Portfolio by SmartEdge Bangladesh`}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  {/* Gradient Overlay for Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-slate-950/40 group-hover:via-slate-950/50 transition-colors duration-300" />

                  <div className="flex items-center justify-between z-10 relative">
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-semibold border border-white/20">
                      {project.category}
                    </span>
                    <span className="text-[11px] text-white/90 font-medium bg-black/40 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-white/10">
                      {project.clientType}
                    </span>
                  </div>

                  <div className="z-10 relative">
                    <span className="text-xs uppercase tracking-wider font-semibold text-sky-300 block mb-1 drop-shadow-sm">
                      {project.industry}
                    </span>
                    <h3 className="text-xl font-bold leading-snug text-white group-hover:text-sky-200 transition-colors drop-shadow-sm">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {project.shortDescription}
                    </p>

                    {/* Metrics Highlights */}
                    <div className="grid grid-cols-3 gap-2 mb-6 p-3 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                      {(project.metrics || []).map((m: any, mIdx: number) => (
                        <div key={mIdx}>
                          <div className="text-[10px] text-slate-400 font-medium truncate">{m.label}</div>
                          <div className="text-sm font-bold text-slate-900 mt-0.5">{m.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {(project.technologies || []).slice(0, 4).map((tech: any, tIdx: number) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-primary-600 hover:text-primary-700 group/link"
                    >
                      <span>Explore Details</span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="text-xs font-semibold text-slate-400 hover:text-slate-700 flex items-center gap-1"
                    >
                      <span>Preview</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Demonstration Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-500 leading-relaxed">
          <strong className="text-slate-800">Transparency Notice:</strong> In accordance with our client NDAs and ethical business policies, projects designated as "Demonstration Projects" represent functional architectural proofs of concept engineered by SmartEdge Bangladesh to illustrate our technical capabilities in that specific domain. We do not invent fictional customer testimonials or fabricate metrics.
        </div>
      </section>
    </div>
  );
}
