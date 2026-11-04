"use client";

import React, { useState, useEffect } from "react";
import { Save, Info, CheckCircle2, AlertCircle, RefreshCw, Eye, Globe2 } from "lucide-react";
import { CompanyCMS } from "@/dashboard/types";
import { fetchCMS, saveCMS } from "@/dashboard/services/cms";
import Link from "next/link";

export default function AboutCMSPage() {
  const [data, setData] = useState<CompanyCMS | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    loadCompany();
  }, []);

  async function loadCompany() {
    try {
      setLoading(true);
      const res = await fetchCMS<CompanyCMS>("company");
      setData(res);
    } catch (err: any) {
      setMessage({ type: "error", text: err.message || "Failed to load company profile." });
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!data) return;

    try {
      setSaving(true);
      setMessage(null);
      await saveCMS("company", data);
      setMessage({ type: "success", text: "Company profile updated and synced across all pages!" });
    } catch (err: any) {
      setMessage({ type: "error", text: err.message || "Failed to save company profile." });
    } finally {
      setSaving(false);
    }
  }

  if (loading || !data) {
    return (
      <div className="p-12 text-center text-slate-400 flex items-center justify-center gap-2">
        <RefreshCw className="w-5 h-5 animate-spin text-primary-500" />
        <span>Loading company data...</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Info className="w-5 h-5 text-amber-400" />
            <span>About Company Management</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Manage company background, mission, vision statements, office address, and delivery markets.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/about-us"
            target="_blank"
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition-all flex items-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5 text-amber-400" />
            <span>View About Us</span>
          </Link>

          <button
            type="submit"
            disabled={saving}
            className="px-5 py-2.5 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-bold text-xs shadow-lg shadow-primary-600/30 transition-all flex items-center gap-2 disabled:opacity-50"
          >
            <Save className="w-4 h-4 text-amber-300" />
            <span>{saving ? "Saving Changes..." : "Publish Updates"}</span>
          </button>
        </div>
      </div>

      {message && (
        <div
          className={`p-4 rounded-2xl text-xs flex items-center gap-3 border ${
            message.type === "success"
              ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-300"
              : "bg-rose-500/15 border-rose-500/30 text-rose-300"
          }`}
        >
          {message.type === "success" ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          ) : (
            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
          )}
          <span>{message.text}</span>
        </div>
      )}

      {/* Basic Company Identity */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-md">
        <h3 className="text-base font-bold text-white tracking-tight border-b border-slate-800 pb-3">
          1. Company Identity & Strategic Vision
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Company Legal Name</label>
            <input
              type="text"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Tagline</label>
            <input
              type="text"
              value={data.tagline}
              onChange={(e) => setData({ ...data, tagline: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">
            About Company Overview (Story)
          </label>
          <textarea
            rows={4}
            value={data.aboutText}
            onChange={(e) => setData({ ...data, aboutText: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs leading-relaxed"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Mission Statement</label>
            <textarea
              rows={3}
              value={data.mission}
              onChange={(e) => setData({ ...data, mission: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs leading-relaxed"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Vision Statement</label>
            <textarea
              rows={3}
              value={data.vision}
              onChange={(e) => setData({ ...data, vision: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs leading-relaxed"
            />
          </div>
        </div>
      </div>

      {/* Official Contact & Physical Office */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-md">
        <h3 className="text-base font-bold text-white tracking-tight border-b border-slate-800 pb-3">
          2. Official Address & Contact Points
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Business Email</label>
            <input
              type="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Direct Phone</label>
            <input
              type="text"
              value={data.phone}
              onChange={(e) => setData({ ...data, phone: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">WhatsApp URL</label>
            <input
              type="text"
              value={data.whatsappLink}
              onChange={(e) => setData({ ...data, whatsappLink: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">
            Complete Physical Company Address
          </label>
          <input
            type="text"
            value={data.address}
            onChange={(e) => setData({ ...data, address: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs"
          />
        </div>
      </div>

      {/* International Delivery Markets */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-md">
        <h3 className="text-base font-bold text-white tracking-tight border-b border-slate-800 pb-3 flex items-center justify-between">
          <span>3. Global Delivery Markets ({data.globalMarkets.length})</span>
          <button
            type="button"
            onClick={() =>
              setData({
                ...data,
                globalMarkets: [...data.globalMarkets, { country: "New Market", code: "NEW", role: "Offshore Squads" }],
              })
            }
            className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-[11px] font-bold text-primary-300"
          >
            + Add Market
          </button>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.globalMarkets.map((m, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2 relative group">
              <button
                type="button"
                onClick={() => {
                  const next = data.globalMarkets.filter((_, i) => i !== idx);
                  setData({ ...data, globalMarkets: next });
                }}
                className="absolute top-2 right-2 text-slate-500 hover:text-rose-400 text-sm font-bold"
                title="Remove market"
              >
                &times;
              </button>
              <div>
                <label className="block text-[10px] text-slate-400 mb-0.5">Country</label>
                <input
                  type="text"
                  value={m.country}
                  onChange={(e) => {
                    const next = [...data.globalMarkets];
                    next[idx].country = e.target.value;
                    setData({ ...data, globalMarkets: next });
                  }}
                  className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[10px] text-slate-400 mb-0.5">Code</label>
                  <input
                    type="text"
                    value={m.code}
                    onChange={(e) => {
                      const next = [...data.globalMarkets];
                      next[idx].code = e.target.value;
                      setData({ ...data, globalMarkets: next });
                    }}
                    className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white font-mono text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-slate-400 mb-0.5">Role</label>
                  <input
                    type="text"
                    value={m.role}
                    onChange={(e) => {
                      const next = [...data.globalMarkets];
                      next[idx].role = e.target.value;
                      setData({ ...data, globalMarkets: next });
                    }}
                    className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </form>
  );
}
