"use client";

import React, { useState } from "react";
import DashboardSidebar from "../components/Sidebar";
import DashboardHeader from "../components/Header";

interface DashboardLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export default function DashboardLayout({ children, title, subtitle }: DashboardLayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row antialiased font-sans">
      {/* Desktop Sidebar */}
      <div className="hidden md:block shrink-0 h-screen sticky top-0 z-40">
        <DashboardSidebar />
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-slate-950/80 backdrop-blur-sm flex">
          <div className="w-72 h-full bg-slate-900 shadow-2xl relative z-10 animate-in slide-in-from-left duration-200">
            <DashboardSidebar onNavigate={() => setMobileOpen(false)} />
          </div>
          <div className="flex-1" onClick={() => setMobileOpen(false)} />
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        <DashboardHeader
          title={title}
          subtitle={subtitle}
          onToggleMobile={() => setMobileOpen((o) => !o)}
        />
        <main className="flex-1 p-4 sm:p-8 max-w-7xl w-full mx-auto space-y-8">
          {children}
        </main>
      </div>
    </div>
  );
}
