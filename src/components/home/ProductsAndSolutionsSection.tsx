"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, Shield, BarChart3, Database, ShoppingCart, Cpu, Globe, ExternalLink } from "lucide-react";
import { productsData } from "@/data/products";
import { solutionsData } from "@/data/solutions";

export default function ProductsAndSolutionsSection() {
  const [activeTab, setActiveTab] = useState<"solutions" | "products">("solutions");

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-primary-50/25 relative overflow-hidden border-y border-slate-200/80">
      {/* Decorative background grid & ambient glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-200/90 text-primary-700 text-xs font-bold uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-brand-yellow" />
              <span>INNOVATION & READY PLATFORMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
              Enterprise Solutions & Digital Products.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore our strategic digital transformation blueprints and turnkey software platforms engineered to accelerate business operations with zero recurring vendor lock-in.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm self-start md:self-auto">
            <button
              onClick={() => setActiveTab("solutions")}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                activeTab === "solutions"
                  ? "bg-primary-500 text-white shadow-md shadow-primary-500/20"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              Enterprise Solutions
            </button>
            <button
              onClick={() => setActiveTab("products")}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                activeTab === "products"
                  ? "bg-primary-500 text-white shadow-md shadow-primary-500/20"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              Ready Software Products
            </button>
          </div>
        </div>

        {/* SOLUTIONS VIEW */}
        {activeTab === "solutions" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutionsData.map((sol) => (
              <div
                key={sol.slug}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:border-primary-400 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary-50 text-primary-700 border border-primary-200/60">
                      {sol.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary-600 transition-colors mb-2.5">
                    {sol.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {sol.shortDescription}
                  </p>

                  <div className="space-y-2 mb-6">
                    {sol.keyFeatures.slice(0, 2).map((kf, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span className="font-medium">{kf.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/solutions/${sol.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-600 group-hover:text-primary-700 pt-4 border-t border-slate-100"
                >
                  <span>Explore Solution</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* PRODUCTS VIEW */}
        {activeTab === "products" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.map((prod) => (
              <div
                key={prod.slug}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-primary-400 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="p-7">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                      {prod.category}
                    </span>
                    <span
                      className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                        prod.badge === "Production Ready"
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : prod.badge === "Enterprise Demo"
                          ? "bg-blue-50 text-blue-700 border border-blue-200"
                          : "bg-amber-50 text-amber-700 border border-amber-200"
                      }`}
                    >
                      {prod.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary-600 transition-colors mb-2">
                    {prod.name}
                  </h3>
                  <p className="text-xs font-semibold text-primary-600 mb-3">
                    {prod.tagline}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {prod.description}
                  </p>

                  {/* Metrics preview */}
                  <div className="grid grid-cols-3 gap-2 p-3 bg-slate-50 rounded-xl mb-6 border border-slate-100">
                    {prod.metrics.map((m, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-xs font-black text-slate-900">{m.value}</div>
                        <div className="text-[10px] text-slate-500 font-medium leading-tight">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {prod.techStack.slice(0, 4).map((tech, i) => (
                      <span key={i} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/products/${prod.slug}`}
                    className="text-xs font-bold text-primary-600 hover:text-primary-700 inline-flex items-center gap-1.5"
                  >
                    <span>Product Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href={prod.demoUrl || `/discuss-your-project?product=${prod.slug}`}
                    className="text-xs font-bold px-3 py-1.5 rounded-lg bg-primary-500 hover:bg-primary-600 text-white transition-colors"
                  >
                    Request Demo
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View All Bar */}
        <div className="mt-14 text-center">
          <Link
            href={activeTab === "solutions" ? "/solutions" : "/products"}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 text-sm font-bold shadow-sm hover:shadow transition-all"
          >
            <span>View All {activeTab === "solutions" ? "Enterprise Solutions" : "Digital Products"}</span>
            <ArrowRight className="w-4 h-4 text-primary-500" />
          </Link>
        </div>
      </div>
    </section>
  );
}
