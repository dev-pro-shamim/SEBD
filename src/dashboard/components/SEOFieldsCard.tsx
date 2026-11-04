"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Globe,
  Share2,
  Image as ImageIcon,
  Copy,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { SEOConfig } from "@/dashboard/types";

interface SEOFieldsCardProps {
  seo: SEOConfig | undefined;
  onChange: (seo: SEOConfig) => void;
  defaultTitle?: string;
  defaultDescription?: string;
  defaultSlug?: string;
  sectionTitle?: string;
}

export default function SEOFieldsCard({
  seo,
  onChange,
  defaultTitle = "",
  defaultDescription = "",
  defaultSlug = "",
  sectionTitle = "Search Engine Optimization (SEO) & Social Sharing",
}: SEOFieldsCardProps) {
  const [expanded, setExpanded] = useState(true);
  const [activeTab, setActiveTab] = useState<"general" | "social" | "advanced">("general");

  const currentSeo: SEOConfig = useMemo(() => {
    return {
      title: seo?.title ?? defaultTitle,
      description: seo?.description ?? defaultDescription,
      focusKeyword: seo?.focusKeyword ?? "",
      secondaryKeywords: seo?.secondaryKeywords ?? [],
      canonicalUrl: seo?.canonicalUrl ?? "",
      metaRobots: seo?.metaRobots ?? "index, follow",
      ogTitle: seo?.ogTitle ?? "",
      ogDescription: seo?.ogDescription ?? "",
      ogImage: seo?.ogImage ?? "",
      imageAlt: seo?.imageAlt ?? "",
      schemaType: seo?.schemaType ?? "WebPage",
    };
  }, [seo, defaultTitle, defaultDescription]);

  const update = (field: keyof SEOConfig, value: any) => {
    onChange({
      ...currentSeo,
      [field]: value,
    });
  };

  const titleLength = (currentSeo.title || "").length;
  const descLength = (currentSeo.description || "").length;
  const focusKw = (currentSeo.focusKeyword || "").trim().toLowerCase();

  // SEO Health Checklist Evaluation
  const checklist = useMemo(() => {
    const title = (currentSeo.title || "").toLowerCase();
    const desc = (currentSeo.description || "").toLowerCase();

    return [
      {
        id: "title-len",
        label: "Title Length (40–65 characters)",
        pass: titleLength >= 40 && titleLength <= 65,
        tip: titleLength < 40 ? "Title is slightly short. Expand with primary benefit." : titleLength > 65 ? "Title may be truncated in search results." : "Optimal title length.",
        weight: 20,
      },
      {
        id: "desc-len",
        label: "Meta Description Length (120–165 characters)",
        pass: descLength >= 120 && descLength <= 165,
        tip: descLength < 120 ? "Description is under 120 chars. Add a call to action." : descLength > 165 ? "Description exceeds 165 chars and may be trimmed by Google." : "Optimal description length.",
        weight: 20,
      },
      {
        id: "focus-kw",
        label: "Focus Keyword Defined",
        pass: focusKw.length > 2,
        tip: focusKw.length > 2 ? `Target keyword set to "${currentSeo.focusKeyword}".` : "Add a primary focus keyword.",
        weight: 15,
      },
      {
        id: "kw-in-title",
        label: "Focus Keyword in Title",
        pass: focusKw.length > 2 && title.includes(focusKw),
        tip: focusKw.length > 2 && title.includes(focusKw) ? "Keyword appears in title." : "Include your focus keyword within the title.",
        weight: 15,
      },
      {
        id: "kw-in-desc",
        label: "Focus Keyword in Meta Description",
        pass: focusKw.length > 2 && desc.includes(focusKw),
        tip: focusKw.length > 2 && desc.includes(focusKw) ? "Keyword appears in description." : "Include your focus keyword within the description.",
        weight: 15,
      },
      {
        id: "social-image",
        label: "Social Share & Image Alt Specified",
        pass: Boolean(currentSeo.ogImage || currentSeo.imageAlt),
        tip: currentSeo.ogImage || currentSeo.imageAlt ? "Social image or ALT text configured." : "Add a custom social image or descriptive ALT text.",
        weight: 15,
      },
    ];
  }, [currentSeo, titleLength, descLength, focusKw]);

  const score = useMemo(() => {
    return checklist.reduce((acc, item) => (item.pass ? acc + item.weight : acc), 0);
  }, [checklist]);

  const scoreBadgeColor =
    score >= 80
      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
      : score >= 50
      ? "bg-amber-500/10 text-amber-400 border-amber-500/30"
      : "bg-rose-500/10 text-rose-400 border-rose-500/30";

  return (
    <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 space-y-5">
      {/* Header with Score */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400">
            <Search className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white">{sectionTitle}</h3>
            <p className="text-[11px] text-slate-400">
              Manage page metadata, focus keywords, social sharing, and search rankings.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div
            className={`px-3 py-1 rounded-full text-xs font-bold border flex items-center gap-1.5 ${scoreBadgeColor}`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>SEO Score: {score}/100</span>
          </div>

          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="p-1 rounded-lg text-slate-400 hover:text-white transition-colors"
          >
            {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {expanded && (
        <>
          {/* Sub Tabs */}
          <div className="flex gap-2 border-b border-slate-800 pb-2 text-xs">
            <button
              type="button"
              onClick={() => setActiveTab("general")}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-colors flex items-center gap-1.5 ${
                activeTab === "general"
                  ? "bg-primary-500 text-slate-950 font-bold"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>General SEO & SERP</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("social")}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-colors flex items-center gap-1.5 ${
                activeTab === "social"
                  ? "bg-primary-500 text-slate-950 font-bold"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Open Graph & Social</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("advanced")}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-colors flex items-center gap-1.5 ${
                activeTab === "advanced"
                  ? "bg-primary-500 text-slate-950 font-bold"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Robots & Indexing</span>
            </button>
          </div>

          {/* TAB 1: General */}
          {activeTab === "general" && (
            <div className="space-y-4">
              {/* Focus Keyword */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Primary Focus Keyword
                  </label>
                  <input
                    type="text"
                    value={currentSeo.focusKeyword || ""}
                    onChange={(e) => update("focusKeyword", e.target.value)}
                    placeholder="e.g. Software Company in Bangladesh"
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-primary-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Secondary Keywords (comma-separated)
                  </label>
                  <input
                    type="text"
                    value={(currentSeo.secondaryKeywords || []).join(", ")}
                    onChange={(e) =>
                      update(
                        "secondaryKeywords",
                        e.target.value
                          .split(",")
                          .map((s) => s.trim())
                          .filter(Boolean)
                      )
                    }
                    placeholder="e.g. Custom Software, Web Development Dhaka"
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-primary-500"
                  />
                </div>
              </div>

              {/* SEO Title */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-semibold text-slate-300">
                    SEO Meta Title
                  </label>
                  <span
                    className={`text-[11px] font-mono ${
                      titleLength >= 40 && titleLength <= 65
                        ? "text-emerald-400 font-bold"
                        : "text-amber-400"
                    }`}
                  >
                    {titleLength}/65 characters
                  </span>
                </div>
                <input
                  type="text"
                  value={currentSeo.title || ""}
                  onChange={(e) => update("title", e.target.value)}
                  placeholder="e.g. Enterprise Software Development Company | SmartEdge Bangladesh"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-primary-500"
                />
              </div>

              {/* Meta Description */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-semibold text-slate-300">
                    SEO Meta Description
                  </label>
                  <span
                    className={`text-[11px] font-mono ${
                      descLength >= 120 && descLength <= 165
                        ? "text-emerald-400 font-bold"
                        : "text-amber-400"
                    }`}
                  >
                    {descLength}/165 characters
                  </span>
                </div>
                <textarea
                  rows={3}
                  value={currentSeo.description || ""}
                  onChange={(e) => update("description", e.target.value)}
                  placeholder="Engaging search snippet summary describing the service or article with a clear call to action..."
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-primary-500"
                />
              </div>

              {/* Live Google Search Result Simulation */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1.5">
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block mb-1">
                  Google Search Snippet Simulator
                </span>
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <span className="w-3.5 h-3.5 rounded-full bg-primary-500 inline-block" />
                  <span className="text-slate-300">smartedgebangladesh.com</span>
                  <span>&rsaquo;</span>
                  <span className="text-slate-400">{defaultSlug || "page"}</span>
                </div>
                <div className="text-sm font-semibold text-blue-400 hover:underline cursor-pointer truncate">
                  {currentSeo.title || "SmartEdge Bangladesh | Enterprise Software Engineering"}
                </div>
                <div className="text-xs text-slate-400 line-clamp-2">
                  {currentSeo.description ||
                    "Leading software development and product engineering company in Bangladesh and globally."}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Social & Open Graph */}
          {activeTab === "social" && (
            <div className="space-y-4">
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    update("ogTitle", currentSeo.title);
                    update("ogDescription", currentSeo.description);
                  }}
                  className="text-[11px] text-amber-400 hover:text-amber-300 flex items-center gap-1 font-semibold"
                >
                  <Copy className="w-3 h-3" />
                  <span>Sync from SEO Title & Description</span>
                </button>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Open Graph Title (Facebook, LinkedIn, Twitter)
                </label>
                <input
                  type="text"
                  value={currentSeo.ogTitle || ""}
                  onChange={(e) => update("ogTitle", e.target.value)}
                  placeholder={currentSeo.title || "Social title..."}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-primary-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Open Graph Description
                </label>
                <textarea
                  rows={2}
                  value={currentSeo.ogDescription || ""}
                  onChange={(e) => update("ogDescription", e.target.value)}
                  placeholder={currentSeo.description || "Social description..."}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-primary-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Social Share Image URL (og:image)
                  </label>
                  <input
                    type="text"
                    value={currentSeo.ogImage || ""}
                    onChange={(e) => update("ogImage", e.target.value)}
                    placeholder="https://smartedgebangladesh.com/images/og-share.jpg"
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-primary-500 font-mono text-[11px]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Featured Image ALT Text
                  </label>
                  <input
                    type="text"
                    value={currentSeo.imageAlt || ""}
                    onChange={(e) => update("imageAlt", e.target.value)}
                    placeholder="Descriptive image ALT tag for accessibility & Google Image Search"
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-primary-500"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Advanced */}
          {activeTab === "advanced" && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Canonical URL Override
                  </label>
                  <input
                    type="url"
                    value={currentSeo.canonicalUrl || ""}
                    onChange={(e) => update("canonicalUrl", e.target.value)}
                    placeholder={`https://smartedgebangladesh.com/${defaultSlug}`}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-primary-500 font-mono text-[11px]"
                  />
                  <p className="text-[10px] text-slate-500 mt-1">
                    Leave blank to automatically default to the page's standard canonical path.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Meta Robots Directive
                  </label>
                  <select
                    value={currentSeo.metaRobots || "index, follow"}
                    onChange={(e: any) => update("metaRobots", e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-primary-500"
                  >
                    <option value="index, follow">index, follow (Default - Allow search indexing)</option>
                    <option value="noindex, follow">noindex, follow (Hide from search, follow links)</option>
                    <option value="index, nofollow">index, nofollow (Index page, ignore links)</option>
                    <option value="noindex, nofollow">noindex, nofollow (Do not index)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* SEO Checklist & Suggestions */}
          <div className="pt-3 border-t border-slate-800 space-y-2">
            <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-primary-400" />
              SEO Quality Checklist ({checklist.filter((c) => c.pass).length}/{checklist.length} Passed)
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {checklist.map((item) => (
                <div
                  key={item.id}
                  className={`p-2.5 rounded-xl border text-xs flex items-start gap-2 ${
                    item.pass
                      ? "bg-emerald-500/5 border-emerald-500/20 text-emerald-300"
                      : "bg-slate-950 border-slate-800/80 text-slate-400"
                  }`}
                >
                  {item.pass ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <div className="font-semibold text-white">{item.label}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{item.tip}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
