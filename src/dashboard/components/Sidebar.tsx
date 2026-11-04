"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Inbox,
  Mail,
  Briefcase,
  Home,
  Info,
  Layers,
  FolderGit2,
  FileCheck2,
  BookOpen,
  MessageSquareQuote,
  Users2,
  Navigation,
  PanelBottom,
  Image as ImageIcon,
  Settings,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  LogOut,
} from "lucide-react";

interface SidebarProps {
  onNavigate?: () => void;
}

export default function DashboardSidebar({ onNavigate }: SidebarProps) {
  const pathname = usePathname();

  const sections = [
    {
      title: "Core Operations",
      items: [
        { label: "Overview", href: "/admin", icon: LayoutDashboard },
        { label: "Business Leads", href: "/admin/inquiries", icon: Inbox, badge: "Live" },
        { label: "Contact Inquiries", href: "/admin/contacts", icon: Mail },
        { label: "Job Applications", href: "/admin/jobs", icon: Briefcase },
      ],
    },
    {
      title: "Website Content (CMS)",
      items: [
        { label: "Homepage Editor", href: "/admin/homepage", icon: Home },
        { label: "About Company", href: "/admin/about", icon: Info },
        { label: "Services", href: "/admin/services", icon: Layers },
        { label: "Portfolio Projects", href: "/admin/portfolio", icon: FolderGit2 },
        { label: "Case Studies", href: "/admin/cases", icon: FileCheck2 },
        { label: "Blog Insights", href: "/admin/blogs", icon: BookOpen },
        { label: "Client Testimonials", href: "/admin/testimonials", icon: MessageSquareQuote },
        { label: "Team Leadership", href: "/admin/team", icon: Users2 },
      ],
    },
    {
      title: "Layout & Media",
      items: [
        { label: "Navigation Menus", href: "/admin/navigation", icon: Navigation },
        { label: "Footer & Socials", href: "/admin/footer", icon: PanelBottom },
        { label: "Media Library", href: "/admin/media", icon: ImageIcon },
      ],
    },
    {
      title: "System",
      items: [
        { label: "Global Settings", href: "/admin/settings", icon: Settings },
      ],
    },
  ];

  return (
    <aside className="w-72 bg-slate-900 border-r border-slate-800 flex flex-col justify-between h-full text-slate-200">
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-7 custom-scrollbar">
        {/* Brand Header */}
        <div className="px-2 flex items-center justify-between">
          <Link href="/admin" className="flex items-center gap-3 group" onClick={onNavigate}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-600 via-primary-500 to-amber-400 p-0.5 shadow-lg shadow-primary-500/20 flex items-center justify-center">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-black text-amber-400 font-mono text-lg">
                SE
              </div>
            </div>
            <div>
              <div className="font-extrabold text-white text-base tracking-tight flex items-center gap-1.5">
                <span>SmartEdge</span>
                <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-primary-500/20 text-primary-300 border border-primary-500/30">
                  CMS
                </span>
              </div>
              <div className="text-[10px] font-semibold text-slate-400">Admin Control Center</div>
            </div>
          </Link>
        </div>

        {/* Navigation Sections */}
        <nav className="space-y-6">
          {sections.map((sec, sIdx) => (
            <div key={sIdx} className="space-y-1.5">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3">
                {sec.title}
              </div>
              <div className="space-y-1">
                {sec.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onNavigate}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all group ${
                        isActive
                          ? "bg-primary-600 text-white shadow-md shadow-primary-600/25 font-bold"
                          : "text-slate-300 hover:text-white hover:bg-slate-800/80"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-amber-300" : "text-amber-400 group-hover:text-amber-300"}`} />
                        <span>{item.label}</span>
                      </div>
                      {item.badge ? (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          {item.badge}
                        </span>
                      ) : isActive ? (
                        <ChevronRight className="w-3.5 h-3.5 opacity-80" />
                      ) : null}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </div>

      {/* Footer Utility */}
      <div className="p-4 border-t border-slate-800 bg-slate-950/60 space-y-2">
        <button
          onClick={async () => {
            await fetch("/api/admin/logout", { method: "POST" });
            window.location.href = "/admin/login";
          }}
          className="w-full flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 text-xs font-bold text-rose-400 hover:text-rose-300 transition-all shadow-sm"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Sign Out / Log Out</span>
        </button>

        <Link
          href="/"
          target="_blank"
          className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 text-xs font-bold text-slate-300 hover:text-white transition-all shadow-sm group"
        >
          <div className="flex items-center gap-2">
            <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
            <span>Open Public Website</span>
          </div>
          <span className="text-[10px] text-slate-400">Live ↗</span>
        </Link>
        <div className="px-2 pt-1 flex items-center justify-between text-[11px] text-slate-400">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            Admin Role: Super Admin
          </span>
          <span className="font-mono text-[10px]">v2.6</span>
        </div>
      </div>
    </aside>
  );
}
