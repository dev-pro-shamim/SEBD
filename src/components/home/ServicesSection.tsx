"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Code2,
  Zap,
  Database,
  Globe,
  Smartphone,
  ShoppingCart,
  Users,
  Cloud,
  Cpu,
  RefreshCw,
  ShieldCheck,
  ArrowRight,
  Check,
} from "lucide-react";
import { servicesData } from "@/data/services";

export default function ServicesSection() {
  const [services, setServices] = useState<any[]>(servicesData);

  useEffect(() => {
    fetch("/api/content/services")
      .then((res) => res.json())
      .then((data) => {
        if (data?.data && Array.isArray(data.data) && data.data.length > 0) {
          setServices(data.data);
        }
      })
      .catch(() => {});
  }, []);
  const getIcon = (name: string) => {
    switch (name) {
      case "Code2":
        return <Code2 className="w-6 h-6 text-brand-yellow" />;
      case "Zap":
        return <Zap className="w-6 h-6 text-brand-yellow" />;
      case "Database":
        return <Database className="w-6 h-6 text-brand-yellow" />;
      case "Globe":
        return <Globe className="w-6 h-6 text-brand-yellow" />;
      case "Smartphone":
        return <Smartphone className="w-6 h-6 text-brand-yellow" />;
      case "ShoppingCart":
        return <ShoppingCart className="w-6 h-6 text-brand-yellow" />;
      case "Users":
        return <Users className="w-6 h-6 text-brand-yellow" />;
      case "Cloud":
        return <Cloud className="w-6 h-6 text-brand-yellow" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-brand-yellow" />;
      case "RefreshCw":
        return <RefreshCw className="w-6 h-6 text-brand-yellow" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-brand-yellow" />;
      default:
        return <Code2 className="w-6 h-6 text-brand-yellow" />;
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-primary-50/20 to-slate-50 relative overflow-hidden border-b border-slate-100">
      {/* Background Topography & Subtle Ambient Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-brand-yellow/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-xs font-semibold uppercase tracking-wider mb-4 border border-primary-200/60">
            ENGINEERING CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Software Engineering Services Built Around Business Growth.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            From custom software and business automation to digital commerce and dedicated engineering teams, we help growing companies build, modernize, and scale technology with confidence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 9).map((service) => (
            <div
              key={service.slug}
              className="group bg-slate-50/70 hover:bg-white rounded-2xl p-7 border border-slate-200/80 hover:border-primary-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 p-2.5 rounded-xl bg-primary-50 border border-primary-100/90 shadow-xs flex items-center justify-center group-hover:bg-primary-100/80 transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200/80">
                    {service.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary-600 transition-colors mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                {/* Key Features Bullet List */}
                <div className="space-y-2 mb-6 pt-4 border-t border-slate-200/60">
                  {(service.features || []).slice(0, 3).map((feat: any, idx: number) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-primary-500 flex-shrink-0 mt-0.5" />
                      <span>{feat.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 group-hover:text-primary-700 group-hover:translate-x-1 transition-all pt-2"
              >
                <span>Learn more about {service.title}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom Callout & Link */}
        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            <span>Explore all 12 capabilities & delivery models</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
