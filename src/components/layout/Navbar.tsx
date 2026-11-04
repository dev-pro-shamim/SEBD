"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  ShieldCheck,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  PhoneCall,
  MessageSquare,
  Sparkles,
  Building2,
  Briefcase,
  Layers,
  CheckCircle2,
  Lock,
} from "lucide-react";
import { servicesData } from "@/data/services";
import { solutionsData } from "@/data/solutions";
import { productsData } from "@/data/products";
import { industriesData } from "@/data/industries";
import { companyInfo } from "@/data/company";
import Logo from "@/components/ui/Logo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMegaMenu(null);
    setMobileSubmenu(null);
  }, [pathname]);

  // Close mega menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMegaMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Group services into categories for the mega menu
  const serviceCategories = [
    {
      name: "Custom Software & Cloud",
      items: [
        { title: "Custom Software Development", slug: "custom-software-development", icon: Code2 },
        { title: "ERP Development", slug: "erp-development", icon: Database },
        { title: "CRM Development", slug: "crm-development", icon: Users },
        { title: "Cloud & DevOps", slug: "cloud-devops", icon: Cloud },
        { title: "Website Maintenance & Support", slug: "website-maintenance-support", icon: ShieldCheck },
      ],
    },
    {
      name: "Web, CMS & E-Commerce",
      items: [
        { title: "Web Application Development", slug: "web-application-development", icon: Globe },
        { title: "E-Commerce Development", slug: "ecommerce-development", icon: ShoppingCart },
        { title: "WooCommerce Development", slug: "woocommerce-development", icon: ShoppingCart },
        { title: "Shopify Development", slug: "shopify-development", icon: ShoppingCart },
        { title: "WordPress Development", slug: "wordpress-development", icon: Code2 },
        { title: "Laravel Development", slug: "laravel-development", icon: Code2 },
      ],
    },
    {
      name: "Mobile, AI & Automation",
      items: [
        { title: "Mobile Application Development", slug: "mobile-app-development", icon: Smartphone },
        { title: "SaaS Development", slug: "saas-development", icon: Globe },
        { title: "AI Development & Integration", slug: "ai-development-integration", icon: Cpu },
        { title: "Business Process Automation", slug: "business-process-automation", icon: Zap },
        { title: "API Development & Integration", slug: "api-development-integration", icon: Zap },
      ],
    },
    {
      name: "Design & Quality",
      items: [
        { title: "UI/UX Product Design", slug: "ui-ux-design", icon: Layers },
        { title: "Software Testing & QA", slug: "software-testing-qa", icon: ShieldCheck },
      ],
    },
  ];

  return (
    <header ref={navRef} className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Bar (Hero Gradient Style) */}
      <div className="bg-gradient-to-r from-slate-50 via-primary-50/60 to-slate-50 text-slate-700 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-200/90 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="text-slate-600">
              Global Software Engineering Partner &bull; <strong className="text-slate-950">US &bull; UK &bull; CA &bull; AU &bull; EU &bull; BD</strong>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:info@smartedgebangladesh.com"
              className="hover:text-primary-600 transition-colors text-slate-700"
            >
              info@smartedgebangladesh.com
            </a>
            <span className="text-slate-300">|</span>
            <a
              href={companyInfo.phoneLink}
              className="hover:text-primary-600 font-bold transition-colors flex items-center gap-1.5 text-slate-900"
            >
              <PhoneCall className="w-3.5 h-3.5 text-brand-yellow" />
              <span>+8801743589784</span>
            </a>
            <span className="text-slate-300">|</span>
            <a
              href={companyInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 hover:text-emerald-800 font-semibold flex items-center gap-1.5 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp Chat</span>
            </a>
            <span className="text-slate-300">|</span>
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-brand-yellow text-slate-950 hover:bg-yellow-300 transition-all shadow-sm"
            >
              <Sparkles className="w-3 h-3 text-slate-950" />
              <span>Get a Quote</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200"
            : "bg-white py-4 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center gap-2">
            <Logo />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-7">
            {/* SERVICES MEGA MENU */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMegaMenu("services")}
            >
              <button
                onClick={() => setActiveMegaMenu(activeMegaMenu === "services" ? null : "services")}
                className={`flex items-center gap-1.5 text-sm font-bold transition-colors py-2 ${
                  pathname.startsWith("/services") || activeMegaMenu === "services"
                    ? "text-primary-600"
                    : "text-slate-800 hover:text-primary-600"
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMegaMenu === "services" ? "rotate-180" : ""}`} />
              </button>

              {activeMegaMenu === "services" && (
                <div
                  onMouseLeave={() => setActiveMegaMenu(null)}
                  className="absolute -left-32 top-full pt-2 w-[900px] z-50 animate-fadeIn"
                >
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-8 grid grid-cols-4 gap-6">
                    {serviceCategories.map((cat, idx) => (
                      <div key={idx} className="space-y-3">
                        <div className="text-xs font-bold uppercase tracking-wider text-primary-600 border-b border-slate-100 pb-2">
                          {cat.name}
                        </div>
                        <div className="space-y-2">
                          {cat.items.map((item, itemIdx) => {
                            const ItemIcon = item.icon;
                            return (
                              <Link
                                key={itemIdx}
                                href={`/services/${item.slug}`}
                                className="group flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors"
                              >
                                <ItemIcon className="w-4 h-4 text-slate-400 group-hover:text-primary-600 shrink-0 mt-0.5" />
                                <span className="text-xs font-medium text-slate-700 group-hover:text-slate-950 group-hover:font-semibold leading-snug">
                                  {item.title}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* SOLUTIONS MEGA MENU */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMegaMenu("solutions")}
            >
              <button
                onClick={() => setActiveMegaMenu(activeMegaMenu === "solutions" ? null : "solutions")}
                className={`flex items-center gap-1.5 text-sm font-bold transition-colors py-2 ${
                  pathname.startsWith("/solutions") || activeMegaMenu === "solutions"
                    ? "text-primary-600"
                    : "text-slate-800 hover:text-primary-600"
                }`}
              >
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMegaMenu === "solutions" ? "rotate-180" : ""}`} />
              </button>

              {activeMegaMenu === "solutions" && (
                <div
                  onMouseLeave={() => setActiveMegaMenu(null)}
                  className="absolute -left-20 top-full pt-2 w-[720px] z-50 animate-fadeIn"
                >
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-7 grid grid-cols-2 gap-4">
                    {solutionsData.map((sol) => (
                      <Link
                        key={sol.slug}
                        href={`/solutions/${sol.slug}`}
                        className="group p-3 rounded-xl hover:bg-slate-50 transition-colors flex items-start gap-3 border border-transparent hover:border-slate-200"
                      >
                        <div className="w-8 h-8 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center font-bold shrink-0 mt-0.5">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-primary-600">
                            {sol.title}
                          </div>
                          <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                            {sol.shortDescription}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* PRODUCTS */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMegaMenu("products")}
            >
              <button
                onClick={() => setActiveMegaMenu(activeMegaMenu === "products" ? null : "products")}
                className={`flex items-center gap-1.5 text-sm font-bold transition-colors py-2 ${
                  pathname.startsWith("/products") || activeMegaMenu === "products"
                    ? "text-primary-600"
                    : "text-slate-800 hover:text-primary-600"
                }`}
              >
                <span>Products</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMegaMenu === "products" ? "rotate-180" : ""}`} />
              </button>

              {activeMegaMenu === "products" && (
                <div
                  onMouseLeave={() => setActiveMegaMenu(null)}
                  className="absolute -left-10 top-full pt-2 w-[650px] z-50 animate-fadeIn"
                >
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 grid grid-cols-2 gap-3">
                    {productsData.map((prod) => (
                      <Link
                        key={prod.slug}
                        href={`/products/${prod.slug}`}
                        className="group p-3 rounded-xl hover:bg-slate-50 transition-colors flex items-start gap-3 border border-transparent hover:border-slate-200"
                      >
                        <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold shrink-0 mt-0.5">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-primary-600">
                            {prod.name}
                          </div>
                          <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                            {prod.tagline}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* TECHNOLOGIES */}
            <Link
              href="/technologies"
              className={`text-sm font-bold transition-colors py-2 ${
                pathname === "/technologies" ? "text-primary-600" : "text-slate-800 hover:text-primary-600"
              }`}
            >
              Technologies
            </Link>

            {/* INDUSTRIES */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMegaMenu("industries")}
            >
              <button
                onClick={() => setActiveMegaMenu(activeMegaMenu === "industries" ? null : "industries")}
                className={`flex items-center gap-1.5 text-sm font-bold transition-colors py-2 ${
                  pathname.startsWith("/industries") || activeMegaMenu === "industries"
                    ? "text-primary-600"
                    : "text-slate-800 hover:text-primary-600"
                }`}
              >
                <span>Industries</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMegaMenu === "industries" ? "rotate-180" : ""}`} />
              </button>

              {activeMegaMenu === "industries" && (
                <div
                  onMouseLeave={() => setActiveMegaMenu(null)}
                  className="absolute -left-20 top-full pt-2 w-[700px] z-50 animate-fadeIn"
                >
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 grid grid-cols-3 gap-3">
                    {industriesData.map((ind) => (
                      <Link
                        key={ind.slug}
                        href={`/industries/${ind.slug}`}
                        className="p-2.5 rounded-lg hover:bg-slate-50 transition-colors text-xs font-semibold text-slate-700 hover:text-primary-600 block"
                      >
                        {ind.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* PORTFOLIO */}
            <Link
              href="/portfolio"
              className={`text-sm font-bold transition-colors py-2 ${
                pathname.startsWith("/portfolio") ? "text-primary-600" : "text-slate-800 hover:text-primary-600"
              }`}
            >
              Portfolio
            </Link>

            {/* COMPANY DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMegaMenu("company")}
            >
              <button
                onClick={() => setActiveMegaMenu(activeMegaMenu === "company" ? null : "company")}
                className={`flex items-center gap-1.5 text-sm font-bold transition-colors py-2 ${
                  pathname === "/about-us" ||
                  pathname.startsWith("/careers") ||
                  pathname.startsWith("/blog") ||
                  pathname.startsWith("/case-studies") ||
                  pathname.startsWith("/cases") ||
                  pathname === "/contact"
                    ? "text-primary-600"
                    : "text-slate-800 hover:text-primary-600"
                }`}
              >
                <span>Company</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMegaMenu === "company" ? "rotate-180" : ""}`} />
              </button>

              {activeMegaMenu === "company" && (
                <div
                  onMouseLeave={() => setActiveMegaMenu(null)}
                  className="absolute -left-10 top-full pt-2 w-56 z-50 animate-fadeIn"
                >
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-3 space-y-1">
                    <Link
                      href="/about-us"
                      className="block px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary-600 transition-colors"
                    >
                      About SmartEdge
                    </Link>
                    <Link
                      href="/case-studies"
                      className="block px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary-600 transition-colors"
                    >
                      Case Studies
                    </Link>
                    <Link
                      href="/careers"
                      className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary-600 transition-colors"
                    >
                      <span>Careers</span>
                      <span className="text-[10px] font-bold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">
                        Hiring
                      </span>
                    </Link>
                    <Link
                      href="/blog"
                      className="block px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary-600 transition-colors"
                    >
                      Blog & Insights
                    </Link>
                    <Link
                      href="/contact"
                      className="block px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary-600 transition-colors"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Right CTAs */}
          <div className="hidden xl:flex items-center gap-3">
            <a
              href={companyInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Quick Contact"
              className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-slate-950 bg-brand-yellow hover:bg-yellow-300 shadow-md shadow-brand-yellow/20 transition-all active:scale-95 group font-bold"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex xl:hidden items-center gap-3">
            <Link
              href="/get-a-quote"
              className="px-4 py-2 rounded-full text-xs font-bold text-slate-950 bg-brand-yellow"
            >
              Get a Quote
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-slate-200 px-4 pt-4 pb-8 max-h-[85vh] overflow-y-auto space-y-4">
            <div className="space-y-1">
              {/* Services Mobile Accordion */}
              <div>
                <button
                  onClick={() => setMobileSubmenu(mobileSubmenu === "services" ? null : "services")}
                  className="w-full flex items-center justify-between py-2 text-sm font-bold text-slate-900"
                >
                  <span>Services ({servicesData.length})</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === "services" ? "rotate-180" : ""}`} />
                </button>
                {mobileSubmenu === "services" && (
                  <div className="pl-4 py-2 space-y-1.5 border-l-2 border-primary-100 ml-2">
                    {servicesData.slice(0, 18).map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="block py-1 text-xs text-slate-600 hover:text-primary-600 font-medium"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Solutions Mobile Accordion */}
              <div>
                <button
                  onClick={() => setMobileSubmenu(mobileSubmenu === "solutions" ? null : "solutions")}
                  className="w-full flex items-center justify-between py-2 text-sm font-bold text-slate-900"
                >
                  <span>Solutions</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === "solutions" ? "rotate-180" : ""}`} />
                </button>
                {mobileSubmenu === "solutions" && (
                  <div className="pl-4 py-2 space-y-1.5 border-l-2 border-primary-100 ml-2">
                    {solutionsData.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/solutions/${s.slug}`}
                        className="block py-1 text-xs text-slate-600 hover:text-primary-600 font-medium"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Products Mobile */}
              <div>
                <button
                  onClick={() => setMobileSubmenu(mobileSubmenu === "products" ? null : "products")}
                  className="w-full flex items-center justify-between py-2 text-sm font-bold text-slate-900"
                >
                  <span>Products</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === "products" ? "rotate-180" : ""}`} />
                </button>
                {mobileSubmenu === "products" && (
                  <div className="pl-4 py-2 space-y-1.5 border-l-2 border-primary-100 ml-2">
                    {productsData.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/products/${p.slug}`}
                        className="block py-1 text-xs text-slate-600 hover:text-primary-600 font-medium"
                      >
                        {p.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/technologies"
                className="block py-2 text-sm font-bold text-slate-900 hover:text-primary-600"
              >
                Technologies
              </Link>

              <Link
                href="/portfolio"
                className="block py-2 text-sm font-bold text-slate-900 hover:text-primary-600"
              >
                Portfolio
              </Link>

              {/* Company Mobile Accordion */}
              <div>
                <button
                  onClick={() => setMobileSubmenu(mobileSubmenu === "company" ? null : "company")}
                  className="w-full flex items-center justify-between py-2 text-sm font-bold text-slate-900"
                >
                  <span>Company</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === "company" ? "rotate-180" : ""}`} />
                </button>
                {mobileSubmenu === "company" && (
                  <div className="pl-4 py-2 space-y-1.5 border-l-2 border-primary-100 ml-2">
                    <Link
                      href="/about-us"
                      className="block py-1 text-xs text-slate-600 hover:text-primary-600 font-medium"
                    >
                      About SmartEdge
                    </Link>
                    <Link
                      href="/case-studies"
                      className="block py-1 text-xs text-slate-600 hover:text-primary-600 font-medium"
                    >
                      Case Studies
                    </Link>
                    <Link
                      href="/careers"
                      className="flex items-center justify-between py-1 text-xs text-slate-600 hover:text-primary-600 font-medium"
                    >
                      <span>Careers</span>
                      <span className="text-[10px] font-bold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">Hiring</span>
                    </Link>
                    <Link
                      href="/blog"
                      className="block py-1 text-xs text-slate-600 hover:text-primary-600 font-medium"
                    >
                      Blog & Insights
                    </Link>
                    <Link
                      href="/contact"
                      className="block py-1 text-xs text-slate-600 hover:text-primary-600 font-medium"
                    >
                      Contact Us
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Contact Quick Actions */}
            <div className="pt-6 border-t border-slate-100 space-y-3">
              <a
                href={companyInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp: {companyInfo.whatsapp}</span>
              </a>

              <a
                href={companyInfo.phoneLink}
                className="w-full py-3 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-primary-500" />
                <span>Call {companyInfo.phone}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
