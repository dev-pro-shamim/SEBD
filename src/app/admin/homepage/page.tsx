"use client";

import React, { useState, useEffect } from "react";
import { Save, Sparkles, CheckCircle2, AlertCircle, RefreshCw, Eye } from "lucide-react";
import { HomepageCMS } from "@/dashboard/types";
import { fetchCMS, saveCMS } from "@/dashboard/services/cms";
import Link from "next/link";

export default function HomepageCMSPage() {
  const [data, setData] = useState<HomepageCMS | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    loadHomepage();
  }, []);

  async function loadHomepage() {
    try {
      setLoading(true);
      const res = await fetchCMS<HomepageCMS>("homepage");
      setData(res);
    } catch (err: any) {
      setMessage({ type: "error", text: err.message || "Failed to load homepage content." });
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
      await saveCMS("homepage", data);
      setMessage({ type: "success", text: "Homepage content saved successfully and is now active on the live website!" });
    } catch (err: any) {
      setMessage({ type: "error", text: err.message || "Failed to save homepage content." });
    } finally {
      setSaving(false);
    }
  }

  if (loading || !data) {
    return (
      <div className="p-12 text-center text-slate-400 flex items-center justify-center gap-2">
        <RefreshCw className="w-5 h-5 animate-spin text-primary-500" />
        <span>Loading homepage CMS...</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Top Header & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span>Homepage Editor</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Update hero headlines, badges, primary CTA links, and company key performance metrics.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            target="_blank"
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition-all flex items-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5 text-amber-400" />
            <span>Preview Homepage</span>
          </Link>

          <button
            type="submit"
            disabled={saving}
            className="px-5 py-2.5 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-bold text-xs shadow-lg shadow-primary-600/30 transition-all flex items-center gap-2 disabled:opacity-50"
          >
            <Save className="w-4 h-4 text-amber-300" />
            <span>{saving ? "Saving Changes..." : "Publish to Live Site"}</span>
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

      {/* Hero Section Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-md">
        <h3 className="text-base font-bold text-white tracking-tight border-b border-slate-800 pb-3">
          1. Hero Section Content
        </h3>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Top Pill Badge Text
            </label>
            <input
              type="text"
              value={data.hero.badgeText}
              onChange={(e) =>
                setData({ ...data, hero: { ...data.hero, badgeText: e.target.value } })
              }
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-primary-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Main Headline (First Part)
              </label>
              <input
                type="text"
                value={data.hero.headline}
                onChange={(e) =>
                  setData({ ...data, hero: { ...data.hero, headline: e.target.value } })
                }
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-primary-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Highlighted Phrase (Blue Gradient)
              </label>
              <input
                type="text"
                value={data.hero.highlightText}
                onChange={(e) =>
                  setData({ ...data, hero: { ...data.hero, highlightText: e.target.value } })
                }
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-primary-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Hero Subtitle / Description
            </label>
            <textarea
              rows={3}
              value={data.hero.subtitle}
              onChange={(e) =>
                setData({ ...data, hero: { ...data.hero, subtitle: e.target.value } })
              }
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-primary-500 leading-relaxed"
            />
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-3">
              <span className="text-xs font-bold text-amber-400 block">Primary Action Button</span>
              <div>
                <label className="block text-[11px] text-slate-400 mb-1">Button Label</label>
                <input
                  type="text"
                  value={data.hero.primaryBtnText}
                  onChange={(e) =>
                    setData({ ...data, hero: { ...data.hero, primaryBtnText: e.target.value } })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs"
                />
              </div>
              <div>
                <label className="block text-[11px] text-slate-400 mb-1">Target Link URL</label>
                <input
                  type="text"
                  value={data.hero.primaryBtnUrl}
                  onChange={(e) =>
                    setData({ ...data, hero: { ...data.hero, primaryBtnUrl: e.target.value } })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs"
                />
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-3">
              <span className="text-xs font-bold text-slate-300 block">Secondary Action Button</span>
              <div>
                <label className="block text-[11px] text-slate-400 mb-1">Button Label</label>
                <input
                  type="text"
                  value={data.hero.secondaryBtnText}
                  onChange={(e) =>
                    setData({ ...data, hero: { ...data.hero, secondaryBtnText: e.target.value } })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs"
                />
              </div>
              <div>
                <label className="block text-[11px] text-slate-400 mb-1">Target Link URL</label>
                <input
                  type="text"
                  value={data.hero.secondaryBtnUrl}
                  onChange={(e) =>
                    setData({ ...data, hero: { ...data.hero, secondaryBtnUrl: e.target.value } })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Badges */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-md">
        <h3 className="text-base font-bold text-white tracking-tight border-b border-slate-800 pb-3">
          2. Hero Floating Trust Badges
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-3">
            <span className="text-xs font-bold text-emerald-400 block">Floating Badge 1 (Top Right)</span>
            <div>
              <label className="block text-[11px] text-slate-400 mb-1">Title</label>
              <input
                type="text"
                value={data.hero.floatingBadge1.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    hero: {
                      ...data.hero,
                      floatingBadge1: { ...data.hero.floatingBadge1, title: e.target.value },
                    },
                  })
                }
                className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs"
              />
            </div>
            <div>
              <label className="block text-[11px] text-slate-400 mb-1">Subtitle</label>
              <input
                type="text"
                value={data.hero.floatingBadge1.subtitle}
                onChange={(e) =>
                  setData({
                    ...data,
                    hero: {
                      ...data.hero,
                      floatingBadge1: { ...data.hero.floatingBadge1, subtitle: e.target.value },
                    },
                  })
                }
                className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs"
              />
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-3">
            <span className="text-xs font-bold text-primary-400 block">Floating Badge 2 (Bottom Left)</span>
            <div>
              <label className="block text-[11px] text-slate-400 mb-1">Title</label>
              <input
                type="text"
                value={data.hero.floatingBadge2.title}
                onChange={(e) =>
                  setData({
                    ...data,
                    hero: {
                      ...data.hero,
                      floatingBadge2: { ...data.hero.floatingBadge2, title: e.target.value },
                    },
                  })
                }
                className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs"
              />
            </div>
            <div>
              <label className="block text-[11px] text-slate-400 mb-1">Subtitle</label>
              <input
                type="text"
                value={data.hero.floatingBadge2.subtitle}
                onChange={(e) =>
                  setData({
                    ...data,
                    hero: {
                      ...data.hero,
                      floatingBadge2: { ...data.hero.floatingBadge2, subtitle: e.target.value },
                    },
                  })
                }
                className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Homepage Statistics Strip */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-md">
        <h3 className="text-base font-bold text-white tracking-tight border-b border-slate-800 pb-3">
          3. Quantified Statistics Strip
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.stats.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Stat #{idx + 1}
              </span>
              <div>
                <label className="block text-[11px] text-slate-400 mb-1">Metric Value</label>
                <input
                  type="text"
                  value={stat.value}
                  onChange={(e) => {
                    const next = [...data.stats];
                    next[idx].value = e.target.value;
                    setData({ ...data, stats: next });
                  }}
                  className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white font-mono font-bold text-xs"
                />
              </div>
              <div>
                <label className="block text-[11px] text-slate-400 mb-1">Label</label>
                <input
                  type="text"
                  value={stat.label}
                  onChange={(e) => {
                    const next = [...data.stats];
                    next[idx].label = e.target.value;
                    setData({ ...data, stats: next });
                  }}
                  className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs"
                />
              </div>
              <div>
                <label className="block text-[11px] text-slate-400 mb-1">Subtext</label>
                <input
                  type="text"
                  value={stat.subtext || ""}
                  onChange={(e) => {
                    const next = [...data.stats];
                    next[idx].subtext = e.target.value;
                    setData({ ...data, stats: next });
                  }}
                  className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </form>
  );
}
