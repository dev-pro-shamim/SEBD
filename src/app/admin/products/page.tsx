"use client";

import React from "react";
import Link from "next/link";
import { Package, ExternalLink, CheckCircle2 } from "lucide-react";
import { productsData } from "@/data/products";

export default function AdminProductsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Digital Products Catalog</h1>
          <p className="text-xs text-slate-400 mt-1">Ready software products and concept applications.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productsData.map((prod) => (
          <div key={prod.slug} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-slate-400">{prod.category}</span>
              <span
                className={`px-2.5 py-0.5 rounded-full ${
                  prod.badge === "Production Ready"
                    ? "bg-emerald-500/20 text-emerald-400"
                    : "bg-blue-500/20 text-blue-400"
                }`}
              >
                {prod.badge}
              </span>
            </div>

            <h3 className="text-xl font-bold text-white">{prod.name}</h3>
            <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">{prod.description}</p>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
              <span className="text-[11px] text-slate-500 font-mono">
                {prod.techStack.slice(0, 3).join(", ")}
              </span>
              <Link
                href={`/products/${prod.slug}`}
                target="_blank"
                className="text-primary-400 hover:text-primary-300 text-xs font-bold flex items-center gap-1"
              >
                <span>View</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
