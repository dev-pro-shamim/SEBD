import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Search, HelpCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="pt-32 pb-24 min-h-[70vh] flex items-center justify-center bg-white">
      <div className="max-w-md mx-auto px-4 text-center">
        <span className="text-6xl font-black text-primary-500 font-mono block mb-3">
          404
        </span>
        <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
          Page Not Found
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed mb-8">
          The requested page could not be located on the SmartEdge Bangladesh portal. It may have been relocated or updated.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-primary-500 hover:bg-primary-600 shadow-sm transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all"
          >
            <span>Explore Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
