"use client";

import React, { useEffect, useState } from "react";
import { PanelBottom, Save, Plus, Trash2, ShieldCheck, MapPin, Mail, Phone, Globe } from "lucide-react";
import { FooterCMS } from "@/dashboard/types";
import { fetchCMS, saveCMS } from "@/dashboard/services/cms";

export default function AdminFooterPage() {
  const [footer, setFooter] = useState<FooterCMS | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const loadData = async () => {
    setLoading(true);
    const data = await fetchCMS<FooterCMS>("footer");
    if (data) setFooter(data);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!footer) return;
    setSaving(true);
    const success = await saveCMS("footer", footer);
    setSaving(false);
    if (success) {
      setToast("Footer configuration updated successfully!");
      setTimeout(() => setToast(null), 3000);
    } else {
      alert("Failed to save footer settings.");
    }
  };

  // Column link helpers
  const addColumnLink = (colIdx: number) => {
    if (!footer) return;
    const cols = [...footer.columns];
    cols[colIdx].links.push({ label: "New Link", href: "/" });
    setFooter({ ...footer, columns: cols });
  };

  const updateColumnLink = (colIdx: number, linkIdx: number, field: "label" | "href", val: string) => {
    if (!footer) return;
    const cols = [...footer.columns];
    cols[colIdx].links[linkIdx] = { ...cols[colIdx].links[linkIdx], [field]: val };
    setFooter({ ...footer, columns: cols });
  };

  const removeColumnLink = (colIdx: number, linkIdx: number) => {
    if (!footer) return;
    const cols = [...footer.columns];
    cols[colIdx].links = cols[colIdx].links.filter((_, i) => i !== linkIdx);
    setFooter({ ...footer, columns: cols });
  };

  if (loading || !footer) {
    return <div className="p-8 text-center text-xs text-slate-500">Loading footer configuration...</div>;
  }

  return (
    <form onSubmit={handleSave} className="space-y-8 max-w-5xl">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-500 text-slate-950 px-4 py-2.5 rounded-xl font-bold shadow-lg shadow-emerald-500/20 text-sm flex items-center gap-2">
          <ShieldCheck className="w-4 h-4" />
          <span>{toast}</span>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white flex items-center gap-2">
            <PanelBottom className="w-6 h-6 text-amber-400" />
            <span>Footer & Socials Management</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Manage company address, copyright text, contact points, and link columns across the website footer.
          </p>
        </div>

        <button
          type="submit"
          disabled={saving}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary-500 hover:bg-primary-600 disabled:opacity-50 text-slate-950 font-bold text-xs transition-colors shadow-md shadow-primary-500/20"
        >
          <Save className="w-4 h-4" />
          <span>{saving ? "Saving Changes..." : "Save Footer Changes"}</span>
        </button>
      </div>

      {/* General Company Information */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
        <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <MapPin className="w-4 h-4 text-amber-400" />
          <span>Company Branding & Official Address</span>
        </h2>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">Company Bio / About Blurb</label>
          <textarea
            rows={2}
            value={footer.aboutText}
            onChange={(e) => setFooter({ ...footer, aboutText: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-primary-500"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Official Physical Address (Displayed on Footer) *
          </label>
          <input
            type="text"
            required
            value={footer.address}
            onChange={(e) => setFooter({ ...footer, address: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-primary-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Official Contact Email</label>
            <input
              type="email"
              value={footer.email}
              onChange={(e) => setFooter({ ...footer, email: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-primary-500 font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Official Phone / Hotline</label>
            <input
              type="text"
              value={footer.phone}
              onChange={(e) => setFooter({ ...footer, phone: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-primary-500 font-mono"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">Copyright Statement</label>
          <input
            type="text"
            value={footer.copyright}
            onChange={(e) => setFooter({ ...footer, copyright: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-primary-500"
          />
        </div>
      </div>

      {/* Social Media Links */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
        <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <Globe className="w-4 h-4 text-amber-400" />
          <span>Social Media Channels</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Facebook Page URL</label>
            <input
              type="url"
              value={footer.socialLinks?.facebook || ""}
              onChange={(e) =>
                setFooter({
                  ...footer,
                  socialLinks: { ...footer.socialLinks, facebook: e.target.value },
                })
              }
              placeholder="https://facebook.com/..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-primary-500 font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">LinkedIn Profile / Company URL</label>
            <input
              type="url"
              value={footer.socialLinks?.linkedin || ""}
              onChange={(e) =>
                setFooter({
                  ...footer,
                  socialLinks: { ...footer.socialLinks, linkedin: e.target.value },
                })
              }
              placeholder="https://linkedin.com/company/..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-primary-500 font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">GitHub Organization URL</label>
            <input
              type="url"
              value={footer.socialLinks?.github || ""}
              onChange={(e) =>
                setFooter({
                  ...footer,
                  socialLinks: { ...footer.socialLinks, github: e.target.value },
                })
              }
              placeholder="https://github.com/..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-primary-500 font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Twitter / X URL</label>
            <input
              type="url"
              value={footer.socialLinks?.twitter || ""}
              onChange={(e) =>
                setFooter({
                  ...footer,
                  socialLinks: { ...footer.socialLinks, twitter: e.target.value },
                })
              }
              placeholder="https://twitter.com/..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-primary-500 font-mono"
            />
          </div>
        </div>
      </div>

      {/* Footer Navigation Columns */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
        <h2 className="text-sm font-bold text-white uppercase tracking-wider">
          Footer Navigation Columns
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {footer.columns.map((col, colIdx) => (
            <div key={colIdx} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  value={col.title}
                  onChange={(e) => {
                    const cols = [...footer.columns];
                    cols[colIdx].title = e.target.value;
                    setFooter({ ...footer, columns: cols });
                  }}
                  className="font-bold text-white text-xs bg-transparent border-b border-slate-800 focus:outline-none focus:border-primary-500 py-1"
                />
                <button
                  type="button"
                  onClick={() => addColumnLink(colIdx)}
                  className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-amber-400"
                  title="Add Link"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>

              <div className="space-y-2">
                {col.links.map((link, linkIdx) => (
                  <div key={linkIdx} className="space-y-1 p-2 rounded-lg bg-slate-900 border border-slate-800/80">
                    <div className="flex items-center justify-between gap-2">
                      <input
                        type="text"
                        placeholder="Link Label"
                        value={link.label}
                        onChange={(e) => updateColumnLink(colIdx, linkIdx, "label", e.target.value)}
                        className="w-full text-xs text-slate-200 bg-transparent focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => removeColumnLink(colIdx, linkIdx)}
                        className="text-slate-500 hover:text-rose-400"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                    <input
                      type="text"
                      placeholder="URL path (e.g. /hire-developers)"
                      value={link.href}
                      onChange={(e) => updateColumnLink(colIdx, linkIdx, "href", e.target.value)}
                      className="w-full text-[11px] font-mono text-slate-400 bg-transparent focus:outline-none"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </form>
  );
}
