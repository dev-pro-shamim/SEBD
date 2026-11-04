"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Inbox,
  Mail,
  Briefcase,
  TrendingUp,
  Download,
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Users,
  Activity,
  Layers,
  FolderGit2,
  FileCheck2,
  BookOpen,
  MessageSquareQuote,
  Users2,
  Home,
  Image as ImageIcon,
} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<any>(null);
  const [chartData, setChartData] = useState<any[]>([]);
  const [recentLogs, setRecentLogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch("/api/admin/stats");
        if (res.ok) {
          const data = await res.json();
          setStats(data.stats);
          setChartData(data.chartData);
          setRecentLogs(data.recentLogs);
        }
      } catch (err) {
        console.error("Failed to load dashboard data:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  return (
    <div className="space-y-8">
      {/* Top Banner & Quick Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            Operations Dashboard
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Real-time pipeline analytics, project inquiries, and client messages.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/api/admin/export"
            download
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-bold text-white transition-all shadow-sm"
          >
            <Download className="w-4 h-4 text-brand-yellow" />
            <span>Export Inquiries CSV</span>
          </a>

          <Link
            href="/admin/inquiries"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-xs font-bold text-white shadow-md shadow-primary-500/20 transition-all"
          >
            <span>Manage Inquiries</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider">New Inquiries</span>
            <div className="w-8 h-8 rounded-lg bg-primary-500/10 text-primary-400 flex items-center justify-center">
              <Inbox className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-black text-white">
            {loading ? "..." : stats?.newLeads || 0}
          </div>
          <div className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
            <span>● Awaiting initial contact</span>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider">In Progress Projects</span>
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-black text-white">
            {loading ? "..." : stats?.inProgressProjects || 0}
          </div>
          <div className="text-[11px] text-slate-400 font-semibold">
            Active architectural scoping
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider">Contact Messages</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <Mail className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-black text-white">
            {loading ? "..." : stats?.contactMessages || 0}
          </div>
          <div className="text-[11px] text-slate-400 font-semibold">
            Direct website contact inquiries
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider">Job Applications</span>
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center">
              <Briefcase className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-black text-white">
            {loading ? "..." : stats?.jobApplications || 0}
          </div>
          <div className="text-[11px] text-purple-400 font-semibold">
            Engineering candidates
          </div>
        </div>
      </div>

      {/* CMS Content Modules Counters & Quick Access */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <Layers className="w-4 h-4 text-amber-400" />
            <span>Website CMS Quick Access</span>
          </h2>
          <span className="text-xs text-slate-400">Click any card to edit public site content</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <Link
            href="/admin/homepage"
            className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-400/50 transition-all group"
          >
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <Home className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
              <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="text-lg font-bold text-white">Hero & Stats</div>
            <div className="text-[11px] text-slate-400">Homepage CMS</div>
          </Link>

          <Link
            href="/admin/services"
            className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-400/50 transition-all group"
          >
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <Layers className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
              <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="text-lg font-bold text-white">{stats?.totalServices ?? 18} Services</div>
            <div className="text-[11px] text-slate-400">Services Catalog</div>
          </Link>

          <Link
            href="/admin/portfolio"
            className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-400/50 transition-all group"
          >
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <FolderGit2 className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
              <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="text-lg font-bold text-white">{stats?.totalPortfolio ?? 8} Projects</div>
            <div className="text-[11px] text-slate-400">Portfolio Work</div>
          </Link>

          <Link
            href="/admin/cases"
            className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-400/50 transition-all group"
          >
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <FileCheck2 className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
              <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="text-lg font-bold text-white">{stats?.totalCases ?? 3} Cases</div>
            <div className="text-[11px] text-slate-400">Case Studies</div>
          </Link>

          <Link
            href="/admin/blogs"
            className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-400/50 transition-all group"
          >
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <BookOpen className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
              <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="text-lg font-bold text-white">{stats?.totalBlogs ?? 5} Articles</div>
            <div className="text-[11px] text-slate-400">Blog Insights</div>
          </Link>

          <Link
            href="/admin/team"
            className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-400/50 transition-all group"
          >
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <Users2 className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
              <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="text-lg font-bold text-white">{stats?.totalTeam ?? 4} Members</div>
            <div className="text-[11px] text-slate-400">Team Leadership</div>
          </Link>
        </div>
      </div>

      {/* Analytics Chart & Activity Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Recharts Analytics Area Chart */}
        <div className="lg:col-span-8 p-6 sm:p-7 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h2 className="text-base font-bold text-white">Inquiry Ingestion & Engagement Velocity</h2>
              <p className="text-xs text-slate-400">Monthly breakdown of received inquiries vs qualified engagements.</p>
            </div>
            <div className="flex items-center gap-4 text-xs font-bold">
              <span className="flex items-center gap-1.5 text-primary-400">
                <span className="w-3 h-3 rounded-full bg-primary-500 inline-block" />
                Inquiries
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                Converted
              </span>
            </div>
          </div>

          <div className="h-72 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorInq" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#005cbb" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#005cbb" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorConv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="month" stroke="#64748b" fontSize={12} tickLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0f172a",
                    border: "1px solid #334155",
                    borderRadius: "12px",
                    fontSize: "12px",
                    color: "#f8fafc",
                  }}
                />
                <Area type="monotone" dataKey="inquiries" stroke="#005cbb" strokeWidth={2} fillOpacity={1} fill="url(#colorInq)" />
                <Area type="monotone" dataKey="converted" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorConv)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity Log Stream */}
        <div className="lg:col-span-4 p-6 sm:p-7 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <Activity className="w-4 h-4 text-primary-400" />
                <span>Audit & Activity Stream</span>
              </h2>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                Live
              </span>
            </div>

            <div className="space-y-3.5">
              {recentLogs.slice(0, 5).map((log, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-800/60 border border-slate-800 text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">{log.action}</span>
                    <span className="text-[10px] text-slate-500 font-mono">
                      {new Date(log.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </span>
                  </div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">{log.details}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800">
            <Link
              href="/admin/inquiries"
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors"
            >
              <span>View All Project Inquiries</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
