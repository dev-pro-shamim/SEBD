"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  Sparkles,
  ExternalLink,
  Lock,
} from "lucide-react";
import { companyInfo } from "@/data/company";
import Logo from "@/components/ui/Logo";

// Facebook Icon SVG
function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribing, setSubscribing] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState<"idle" | "success" | "error">("idle");
  const [subscribeMessage, setSubscribeMessage] = useState("");
  const [footerCms, setFooterCms] = useState<any>(null);

  useEffect(() => {
    fetch("/api/content/footer")
      .then((res) => res.json())
      .then((data) => {
        if (data?.data) {
          setFooterCms(data.data);
        }
      })
      .catch(() => {});
  }, []);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    setSubscribing(true);
    setSubscribeStatus("idle");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newsletterEmail }),
      });
      const data = await res.json();
      if (res.ok) {
        setSubscribeStatus("success");
        setSubscribeMessage(data.message || "Thank you for subscribing to SmartEdge insights.");
        setNewsletterEmail("");
      } else {
        setSubscribeStatus("error");
        setSubscribeMessage(data.error || "Could not subscribe. Please try again.");
      }
    } catch {
      setSubscribeStatus("error");
      setSubscribeMessage("Network error. Please try again later.");
    } finally {
      setSubscribing(false);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-slate-50 via-primary-50/25 to-slate-100/90 text-slate-600 pt-16 pb-12 border-t border-slate-200/90 relative overflow-hidden">
      {/* Background Topography & Subtle Ambient Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-brand-yellow/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Pre-Footer Action Banner with Electric Yellow Accent Box */}
        <div className="rounded-3xl bg-gradient-to-r from-primary-700 via-primary-800 to-navy-950 p-8 sm:p-12 mb-16 border border-primary-500/40 shadow-2xl relative overflow-hidden text-white">
          <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow/10 text-brand-yellow text-xs font-bold uppercase tracking-wider mb-4 border border-brand-yellow/30">
                <Sparkles className="w-3.5 h-3.5" />
                Let's Build Together
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Ready to elevate your{" "}
                <span className="bg-brand-yellow text-slate-950 px-2 py-0.5 rounded font-black inline-block">
                  BUSINESS
                </span>{" "}
                today?
              </h2>
              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                Custom software, digital commerce, cloud architecture, and dedicated engineering squads for companies looking to lead their industry.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 flex-shrink-0">
              <Link
                href="/get-a-quote"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm font-bold text-slate-950 bg-brand-yellow hover:bg-yellow-300 shadow-xl shadow-brand-yellow/20 transition-all duration-200 active:scale-95"
              >
                Discuss Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={companyInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-sm font-semibold text-emerald-300 bg-emerald-950/70 hover:bg-emerald-900/80 border border-emerald-500/40 transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                WhatsApp Direct
              </a>
            </div>
          </div>
        </div>

        {/* Multi-Column Main Footer */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 xl:gap-10 pb-12 border-b border-slate-200/90 text-sm">
          {/* Brand Info */}
          <div className="col-span-2 space-y-4">
            <Logo size="md" />

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm">
              Global product engineering and enterprise software development company delivering scalable web, mobile, SaaS, ERP, and automation platforms.
            </p>

            {/* Official Social Links */}
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5">
                Official Social Channels
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href={companyInfo.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white hover:bg-[#1877F2] text-slate-700 hover:text-white border border-slate-200 hover:border-[#1877F2] text-xs font-semibold transition-all group shadow-xs"
                  aria-label="SmartEdge Bangladesh Facebook Page"
                >
                  <FacebookIcon className="w-4 h-4 text-[#1877F2] group-hover:text-white transition-colors" />
                  <span>Facebook Page</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>

                <a
                  href={companyInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white hover:bg-emerald-50 text-emerald-600 border border-slate-200 hover:border-emerald-500/40 transition-all shadow-xs"
                  title="Chat on WhatsApp"
                  aria-label="WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="pt-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                Subscribe to Tech Insights
              </h4>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter business email"
                  required
                  className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary-500 flex-grow shadow-xs"
                />
                <button
                  type="submit"
                  disabled={subscribing}
                  className="bg-primary-500 hover:bg-primary-600 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors whitespace-nowrap disabled:opacity-50 shadow-sm"
                >
                  {subscribing ? "Subscribing..." : "Subscribe"}
                </button>
              </form>
              {subscribeStatus === "success" && (
                <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 text-emerald-600" />
                  <span>{subscribeMessage}</span>
                </div>
              )}
              {subscribeStatus === "error" && (
                <div className="mt-2 flex items-center gap-1.5 text-xs text-rose-600 font-semibold">
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0 text-rose-600" />
                  <span>{subscribeMessage}</span>
                </div>
              )}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/services/custom-software-development" className="text-slate-600 hover:text-primary-600 transition-colors">
                  Custom Software
                </Link>
              </li>
              <li>
                <Link href="/services/business-automation" className="text-slate-600 hover:text-primary-600 transition-colors">
                  Business Automation
                </Link>
              </li>
              <li>
                <Link href="/services/erp-crm-development" className="text-slate-600 hover:text-primary-600 transition-colors">
                  ERP & CRM Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="text-slate-600 hover:text-primary-600 transition-colors">
                  Web Applications
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-app-development" className="text-slate-600 hover:text-primary-600 transition-colors">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/services/ecommerce-development" className="text-slate-600 hover:text-primary-600 transition-colors">
                  Digital Commerce
                </Link>
              </li>
              <li>
                <Link href="/services/saas-development" className="text-slate-600 hover:text-primary-600 transition-colors">
                  SaaS Platforms
                </Link>
              </li>
              <li>
                <Link href="/services/ai-automation" className="text-slate-600 hover:text-primary-600 transition-colors">
                  AI Intelligent Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Industries
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
              <li>Retail & E-commerce</li>
              <li>Logistics & Supply Chain</li>
              <li>SaaS & Cloud Platforms</li>
              <li>Manufacturing & Export</li>
              <li>Healthcare & Digital Health</li>
              <li>Real Estate & Construction</li>
              <li>Education & Learning</li>
              <li>FinTech & Payments</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/about-us" className="text-slate-600 hover:text-primary-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/hire-developers"
                  className="text-slate-600 hover:text-primary-600 transition-colors flex items-center gap-1.5"
                >
                  <span>Hire Developers</span>
                  <span className="text-[10px] font-black uppercase tracking-wider bg-brand-yellow text-slate-950 px-1.5 py-0.5 rounded-full leading-none">
                    Top 3%
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-slate-600 hover:text-primary-600 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-slate-600 hover:text-primary-600 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-slate-600 hover:text-primary-600 transition-colors">
                  Portfolio Projects
                </Link>
              </li>
              <li>
                <Link href="/technologies" className="text-slate-600 hover:text-primary-600 transition-colors">
                  Technologies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-600 hover:text-primary-600 transition-colors">
                  Engineering Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-primary-600 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href={companyInfo.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-[#1877F2] transition-colors flex items-center gap-1"
                >
                  Facebook Page &rarr;
                </a>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-slate-600 hover:text-primary-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="text-slate-600 hover:text-primary-600 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Markets We Serve & Global Inquiries */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Global Inquiries
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-slate-600">
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                <a href={`mailto:${footerCms?.officialEmail || companyInfo.email}`} className="hover:text-primary-600 transition-colors font-medium">
                  {footerCms?.officialEmail || companyInfo.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                <a href={`tel:${footerCms?.officialPhone || companyInfo.phone}`} className="hover:text-primary-600 transition-colors font-medium">
                  {footerCms?.officialPhone || companyInfo.phone}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <a href={companyInfo.whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors font-medium text-emerald-700">
                  WhatsApp Support
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-yellow flex-shrink-0 mt-0.5" />
                <a
                  href={companyInfo.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-relaxed hover:text-primary-600 transition-colors"
                  title="Open SmartEdge Bangladesh location on Google Maps"
                >
                  {footerCms?.officeAddress || companyInfo.address.formatted}
                </a>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-900 block mb-2">
                Markets Served
              </span>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                USA &bull; UK &bull; UAE &bull; Australia &bull; Canada &bull; Singapore &bull; Europe &bull; Bangladesh
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved. Registered software engineering company.
          </div>
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 text-emerald-600 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              All Systems Operational (99.98% SLA)
            </span>
            <Link href="/privacy-policy" className="hover:text-slate-900 transition-colors">
              Privacy
            </Link>
            <Link href="/terms-conditions" className="hover:text-slate-900 transition-colors">
              Terms
            </Link>
            <Link href="/admin/login" className="hover:text-slate-900 transition-colors flex items-center gap-1 text-[11px]">
              <Lock className="w-3 h-3" />
              <span>Portal</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
