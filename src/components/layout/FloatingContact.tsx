"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { MessageSquare, Phone, X } from "lucide-react";
import { companyInfo } from "@/data/company";

// Facebook Icon SVG
function FacebookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function FloatingContact() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappMessage = encodeURIComponent(
    "Hello SmartEdge Bangladesh team! I am interested in discussing a software development project for my business."
  );
  const whatsappUrl = `https://wa.me/8801743589784?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Tooltip / Speech Bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-slate-900 text-xs font-semibold py-2 px-3.5 rounded-2xl shadow-xl border border-slate-200/90 animate-in fade-in slide-in-from-bottom-2 duration-300 max-w-xs">
          <span>Need answers? Chat with a SmartEdge engineer.</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-700 p-0.5 rounded-full"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <div className="flex items-center gap-2.5">
        {/* Official Facebook Page Button */}
        <a
          href={companyInfo.socials.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full bg-[#1877F2] hover:bg-[#1567d3] text-white flex items-center justify-center shadow-lg shadow-blue-500/25 hover:scale-110 active:scale-95 transition-all duration-200 group"
          title="Official Facebook Page: SmartEdge Technologies Ltd"
          aria-label="Visit SmartEdge Bangladesh on Facebook"
        >
          <FacebookIcon className="w-5 h-5 group-hover:scale-105 transition-transform" />
        </a>

        {/* Direct Call Button */}
        <a
          href={companyInfo.phoneLink}
          className="w-11 h-11 rounded-full bg-primary-500 hover:bg-primary-600 text-white flex items-center justify-center shadow-lg shadow-primary-500/30 hover:scale-110 active:scale-95 transition-all duration-200 group"
          title="Direct Phone Call: +8801743589784"
          aria-label="Call SmartEdge Bangladesh"
        >
          <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
        </a>

        {/* Floating WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-13 h-13 p-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-xl shadow-emerald-500/35 hover:scale-110 active:scale-95 transition-all duration-200 group"
          title="Instant WhatsApp Consultation: +8801743589784"
          aria-label="Chat with SmartEdge on WhatsApp"
        >
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white animate-ping" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white" />
          <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform fill-current" />
        </a>
      </div>
    </div>
  );
}
