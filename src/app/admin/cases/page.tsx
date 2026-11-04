"use client";

import React, { useState, useEffect } from "react";
import { Plus, Edit, Trash2, FileCheck2, RefreshCw, ExternalLink, Save, CheckCircle2, AlertCircle } from "lucide-react";
import { CaseStudyCMS } from "@/dashboard/types";
import { fetchCMS, saveCMS, deleteCMS } from "@/dashboard/services/cms";
import DataTable, { Column } from "@/dashboard/components/DataTable";
import Modal from "@/dashboard/components/Modal";
import ConfirmModal from "@/dashboard/components/ConfirmModal";
import SEOFieldsCard from "@/dashboard/components/SEOFieldsCard";
import ImageUploader from "@/dashboard/components/ImageUploader";
import Link from "next/link";

export default function CasesCMSPage() {
  const [cases, setCases] = useState<CaseStudyCMS[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedCase, setSelectedCase] = useState<CaseStudyCMS | null>(null);
  const [caseToDelete, setCaseToDelete] = useState<CaseStudyCMS | null>(null);

  // Form State
  const [formData, setFormData] = useState<Partial<CaseStudyCMS>>({
    title: "",
    slug: "",
    client: "Confidential Enterprise",
    industry: "E-Commerce Logistics",
    duration: "3 Months",
    heroImage: "",
    overview: "",
    challenge: "",
    solution: "",
    results: [],
    technologies: [],
    metrics: [],
  });

  const [techInput, setTechInput] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    loadCases();
  }, []);

  async function loadCases() {
    try {
      setLoading(true);
      const data = await fetchCMS<CaseStudyCMS[]>("cases");
      setCases(data || []);
    } catch (err: any) {
      setToast({ type: "error", text: err.message || "Failed to load case studies." });
    } finally {
      setLoading(false);
    }
  }

  function handleOpenCreate() {
    setSelectedCase(null);
    setFormData({
      title: "",
      slug: "",
      client: "Enterprise Client",
      industry: "FinTech & Banking",
      duration: "4 Months",
      heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      overview: "",
      challenge: "",
      solution: "",
      results: [{ metric: "99.99% Uptime", description: "Zero transaction drops during peak sales" }],
      technologies: ["Next.js", "PostgreSQL", "Docker"],
      metrics: [{ label: "Order Throughput", value: "35,000/hr", change: "+140%" }],
    });
    setModalOpen(true);
  }

  function handleOpenEdit(c: CaseStudyCMS) {
    setSelectedCase(c);
    setFormData({ ...c });
    setModalOpen(true);
  }

  function handleAddTech() {
    if (!techInput.trim()) return;
    const current = formData.technologies || [];
    if (!current.includes(techInput.trim())) {
      setFormData({ ...formData, technologies: [...current, techInput.trim()] });
    }
    setTechInput("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formData.title) return;

    try {
      setSubmitting(true);
      const res = await saveCMS<CaseStudyCMS>("cases", formData);
      setToast({ type: "success", text: `Case study '${res.title}' saved successfully.` });
      setModalOpen(false);
      loadCases();
    } catch (err: any) {
      setToast({ type: "error", text: err.message || "Failed to save case study." });
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDeleteConfirm() {
    if (!caseToDelete) return;
    try {
      await deleteCMS("cases", caseToDelete.id);
      setToast({ type: "success", text: `Case study '${caseToDelete.title}' deleted.` });
      setDeleteModalOpen(false);
      setCaseToDelete(null);
      loadCases();
    } catch (err: any) {
      setToast({ type: "error", text: err.message || "Failed to delete case study." });
    }
  }

  const columns: Column<CaseStudyCMS>[] = [
    {
      header: "Case Study Title & Client",
      cell: (item) => (
        <div className="flex items-center gap-3">
          <div className="w-12 h-10 rounded-lg overflow-hidden bg-slate-950 border border-slate-800 shrink-0">
            <img src={item.heroImage} alt={item.title} className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="font-bold text-white text-sm flex items-center gap-2">
              <span>{item.title}</span>
              <Link
                href={`/case-studies/${item.slug}`}
                target="_blank"
                className="text-slate-500 hover:text-amber-400"
                title="View on site"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="text-slate-400 text-xs mt-0.5">{item.client} &bull; {item.industry}</div>
          </div>
        </div>
      ),
    },
    {
      header: "Duration",
      cell: (item) => (
        <span className="text-slate-300 font-semibold">{item.duration}</span>
      ),
    },
    {
      header: "Technologies",
      cell: (item) => (
        <div className="flex flex-wrap gap-1 max-w-xs">
          {item.technologies.slice(0, 3).map((t, idx) => (
            <span key={idx} className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300">
              {t}
            </span>
          ))}
          {item.technologies.length > 3 && (
            <span className="text-[10px] text-slate-500 font-bold">+{item.technologies.length - 3}</span>
          )}
        </div>
      ),
    },
    {
      header: "Actions",
      className: "text-right",
      cell: (item) => (
        <div className="flex items-center justify-end gap-2">
          <button
            onClick={() => handleOpenEdit(item)}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            title="Edit Case"
          >
            <Edit className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => {
              setCaseToDelete(item);
              setDeleteModalOpen(true);
            }}
            className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 hover:text-rose-300 transition-colors"
            title="Delete Case"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <FileCheck2 className="w-5 h-5 text-amber-400" />
            <span>Case Studies Management ({cases.length})</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Manage comprehensive client delivery cases, verified metrics, and technical sprints.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/case-studies"
            target="_blank"
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition-all flex items-center gap-1.5"
          >
            <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
            <span>Public Case Studies</span>
          </Link>

          <button
            onClick={handleOpenCreate}
            className="px-4 py-2.5 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2"
          >
            <Plus className="w-4 h-4 text-amber-300" />
            <span>Add Case Study</span>
          </button>
        </div>
      </div>

      {toast && (
        <div
          className={`p-4 rounded-2xl text-xs flex items-center gap-3 border ${
            toast.type === "success"
              ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-300"
              : "bg-rose-500/15 border-rose-500/30 text-rose-300"
          }`}
        >
          {toast.type === "success" ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          ) : (
            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
          )}
          <span>{toast.text}</span>
        </div>
      )}

      {loading ? (
        <div className="p-12 text-center text-slate-400 flex items-center justify-center gap-2">
          <RefreshCw className="w-5 h-5 animate-spin text-primary-500" />
          <span>Loading case studies...</span>
        </div>
      ) : (
        <DataTable
          data={cases}
          columns={columns}
          searchKey="title"
          searchPlaceholder="Search case studies by title..."
          filterKey="industry"
          filterCategories={Array.from(new Set(cases.map((c) => c.industry)))}
        />
      )}

      {/* Add / Edit Case Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={selectedCase ? `Edit Case Study: ${selectedCase.title}` : "Add New Case Study"}
        subtitle="Specify problem, solution architecture, and verified measurable business impact."
        maxWidth="3xl"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Case Study Title *</label>
              <input
                type="text"
                required
                value={formData.title || ""}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g. MK Shipping Fleet Automation"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Client Name / Organization</label>
              <input
                type="text"
                value={formData.client || ""}
                onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                placeholder="e.g. MK Shipping Lines Ltd"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Industry</label>
              <input
                type="text"
                value={formData.industry || ""}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                placeholder="e.g. Maritime Logistics"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Execution Duration</label>
              <input
                type="text"
                value={formData.duration || ""}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                placeholder="e.g. 3 Months"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
              />
            </div>
          </div>

          <ImageUploader
            value={formData.heroImage || ""}
            onChange={(url) => setFormData({ ...formData, heroImage: url })}
            label="Hero Showcase Cover Image"
            helperText="Featured image shown on the case studies grid and details hero frame."
          />

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Project Overview</label>
            <textarea
              rows={3}
              value={formData.overview || ""}
              onChange={(e) => setFormData({ ...formData, overview: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs leading-relaxed"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">The Challenge</label>
              <textarea
                rows={3}
                value={typeof formData.challenge === "string" ? formData.challenge : (formData.challenge as any)?.details || (formData.challenge as any)?.headline || ""}
                onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs leading-relaxed"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">The Engineered Solution</label>
              <textarea
                rows={3}
                value={typeof formData.solution === "string" ? formData.solution : (formData.solution as any)?.architecture || (formData.solution as any)?.headline || ""}
                onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs leading-relaxed"
              />
            </div>
          </div>

          {/* Technologies */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Technologies Used</label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={techInput}
                onChange={(e) => setTechInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), handleAddTech())}
                placeholder="Add technology & press enter"
                className="flex-1 px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
              />
              <button
                type="button"
                onClick={handleAddTech}
                className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl"
              >
                + Add
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {(formData.technologies || []).map((t, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 text-slate-200 text-xs border border-slate-700"
                >
                  <span>{t}</span>
                  <button
                    type="button"
                    onClick={() =>
                      setFormData({
                        ...formData,
                        technologies: (formData.technologies || []).filter((item) => item !== t),
                      })
                    }
                    className="text-slate-400 hover:text-rose-400"
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Case Study SEO Management */}
          <SEOFieldsCard
            seo={formData.seo}
            onChange={(seo) => setFormData({ ...formData, seo })}
            defaultTitle={formData.title}
            defaultDescription={formData.overview}
            defaultSlug={`case-studies/${formData.slug || "new-case"}`}
            sectionTitle="Case Study SEO & SERP Management"
          />

          <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="px-6 py-2.5 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 disabled:opacity-50"
            >
              <Save className="w-4 h-4 text-amber-300" />
              <span>{submitting ? "Saving..." : "Save Case Study"}</span>
            </button>
          </div>
        </form>
      </Modal>

      {/* Delete Confirmation */}
      <ConfirmModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
        title={`Delete Case Study '${caseToDelete?.title}'?`}
        message="This case study and all its quantified outcomes will be removed from the public website immediately."
      />
    </div>
  );
}
