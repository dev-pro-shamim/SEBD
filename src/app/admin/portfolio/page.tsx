"use client";

import React, { useState, useEffect } from "react";
import { Plus, Edit, Trash2, FolderGit2, RefreshCw, ExternalLink, Save, CheckCircle2, AlertCircle } from "lucide-react";
import { PortfolioCMS } from "@/dashboard/types";
import { fetchCMS, saveCMS, deleteCMS } from "@/dashboard/services/cms";
import DataTable, { Column } from "@/dashboard/components/DataTable";
import Modal from "@/dashboard/components/Modal";
import ConfirmModal from "@/dashboard/components/ConfirmModal";
import SEOFieldsCard from "@/dashboard/components/SEOFieldsCard";
import ImageUploader from "@/dashboard/components/ImageUploader";
import Link from "next/link";

export default function PortfolioCMSPage() {
  const [projects, setProjects] = useState<PortfolioCMS[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<PortfolioCMS | null>(null);
  const [projectToDelete, setProjectToDelete] = useState<PortfolioCMS | null>(null);

  // Form State
  const [formData, setFormData] = useState<Partial<PortfolioCMS>>({
    title: "",
    slug: "",
    clientType: "Enterprise Partner",
    industry: "Logistics & Supply Chain",
    category: "Full-Stack Web Application",
    shortDescription: "",
    fullDescription: "",
    architecture: "",
    image: "",
    gallery: [],
    technologies: [],
    metrics: [],
    features: [],
    keyOutcomes: [],
  });

  const [techInput, setTechInput] = useState("");
  const [metricLabel, setMetricLabel] = useState("");
  const [metricVal, setMetricVal] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    loadPortfolio();
  }, []);

  async function loadPortfolio() {
    try {
      setLoading(true);
      const data = await fetchCMS<PortfolioCMS[]>("portfolio");
      setProjects(data || []);
    } catch (err: any) {
      setToast({ type: "error", text: err.message || "Failed to load portfolio." });
    } finally {
      setLoading(false);
    }
  }

  function handleOpenCreate() {
    setSelectedProject(null);
    setFormData({
      title: "",
      slug: "",
      clientType: "Enterprise Client",
      industry: "Retail Commerce",
      category: "Enterprise System",
      shortDescription: "",
      fullDescription: "",
      architecture: "",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      gallery: [],
      technologies: ["TypeScript", "Next.js", "Docker"],
      metrics: [{ label: "Throughput", value: "10k req/s" }],
      features: ["Real-time synchronization", "Role-based access"],
      keyOutcomes: ["Reduced processing latency by 65%"],
    });
    setModalOpen(true);
  }

  function handleOpenEdit(p: PortfolioCMS) {
    setSelectedProject(p);
    setFormData({ ...p });
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

  function handleAddMetric() {
    if (!metricLabel.trim() || !metricVal.trim()) return;
    const current = formData.metrics || [];
    setFormData({
      ...formData,
      metrics: [...current, { label: metricLabel.trim(), value: metricVal.trim() }],
    });
    setMetricLabel("");
    setMetricVal("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formData.title) return;

    try {
      setSubmitting(true);
      const res = await saveCMS<PortfolioCMS>("portfolio", formData);
      setToast({ type: "success", text: `Portfolio project '${res.title}' saved successfully.` });
      setModalOpen(false);
      loadPortfolio();
    } catch (err: any) {
      setToast({ type: "error", text: err.message || "Failed to save portfolio project." });
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDeleteConfirm() {
    if (!projectToDelete) return;
    try {
      await deleteCMS("portfolio", projectToDelete.id);
      setToast({ type: "success", text: `Project '${projectToDelete.title}' deleted.` });
      setDeleteModalOpen(false);
      setProjectToDelete(null);
      loadPortfolio();
    } catch (err: any) {
      setToast({ type: "error", text: err.message || "Failed to delete project." });
    }
  }

  const columns: Column<PortfolioCMS>[] = [
    {
      header: "Project Title & Preview",
      cell: (item) => (
        <div className="flex items-center gap-3">
          <div className="w-12 h-10 rounded-lg overflow-hidden bg-slate-950 border border-slate-800 shrink-0">
            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="font-bold text-white text-sm flex items-center gap-2">
              <span>{item.title}</span>
              <Link
                href={`/portfolio/${item.slug}`}
                target="_blank"
                className="text-slate-500 hover:text-amber-400"
                title="View on site"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="text-slate-400 text-xs mt-0.5">{item.industry} &bull; {item.clientType}</div>
          </div>
        </div>
      ),
    },
    {
      header: "Category",
      cell: (item) => (
        <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
          {item.category}
        </span>
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
            title="Edit Project"
          >
            <Edit className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => {
              setProjectToDelete(item);
              setDeleteModalOpen(true);
            }}
            className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 hover:text-rose-300 transition-colors"
            title="Delete Project"
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
            <FolderGit2 className="w-5 h-5 text-amber-400" />
            <span>Portfolio Projects ({projects.length})</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Manage showcase projects, high-resolution screenshots, architecture breakdowns, and metrics.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/portfolio"
            target="_blank"
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition-all flex items-center gap-1.5"
          >
            <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
            <span>Public Portfolio</span>
          </Link>

          <button
            onClick={handleOpenCreate}
            className="px-4 py-2.5 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2"
          >
            <Plus className="w-4 h-4 text-amber-300" />
            <span>Add Portfolio Project</span>
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
          <span>Loading portfolio items...</span>
        </div>
      ) : (
        <DataTable
          data={projects}
          columns={columns}
          searchKey="title"
          searchPlaceholder="Search portfolio by project title..."
          filterKey="category"
          filterCategories={Array.from(new Set(projects.map((p) => p.category)))}
        />
      )}

      {/* Add / Edit Project Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={selectedProject ? `Edit Project: ${selectedProject.title}` : "Add New Portfolio Project"}
        subtitle="Manage hero screenshot, system architecture notes, and key business outcomes."
        maxWidth="3xl"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Project Title *</label>
              <input
                type="text"
                required
                value={formData.title || ""}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g. Nexus Enterprise ERP"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Category</label>
              <input
                type="text"
                value={formData.category || ""}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                placeholder="e.g. Enterprise ERP Platform"
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
                placeholder="e.g. Logistics & Supply Chain"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Client Type</label>
              <input
                type="text"
                value={formData.clientType || ""}
                onChange={(e) => setFormData({ ...formData, clientType: e.target.value })}
                placeholder="e.g. Enterprise Partner (UK)"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
              />
            </div>
          </div>

          <ImageUploader
            value={formData.image || ""}
            onChange={(url) => setFormData({ ...formData, image: url })}
            label="Hero Showcase Image"
            helperText="Main high-res interface screenshot displayed on the card and details hero."
          />

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Short Overview (Listing Card)</label>
            <input
              type="text"
              value={formData.shortDescription || ""}
              onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Architecture & Engineering Approach</label>
            <textarea
              rows={3}
              value={formData.architecture || ""}
              onChange={(e) => setFormData({ ...formData, architecture: e.target.value })}
              placeholder="Technical architecture, concurrency, database model, and scalability choices."
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs leading-relaxed"
            />
          </div>

          {/* Technologies Tag Manager */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Technologies Deployed</label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={techInput}
                onChange={(e) => setTechInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), handleAddTech())}
                placeholder="Add tech & press enter"
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

          {/* Quantified Metrics */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Key Impact Metrics</label>
            <div className="grid grid-cols-2 gap-2 mb-2">
              <input
                type="text"
                value={metricLabel}
                onChange={(e) => setMetricLabel(e.target.value)}
                placeholder="Metric Label (e.g. Uptime)"
                className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  value={metricVal}
                  onChange={(e) => setMetricVal(e.target.value)}
                  placeholder="Value (e.g. 99.98%)"
                  className="flex-1 px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
                />
                <button
                  type="button"
                  onClick={handleAddMetric}
                  className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl"
                >
                  + Add
                </button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {(formData.metrics || []).map((m, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-primary-500/10 border border-primary-500/20 text-primary-300 text-xs flex items-center gap-2"
                >
                  <span className="font-bold">{m.value}</span>
                  <span className="text-[10px] text-slate-400">{m.label}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Portfolio SEO Management */}
          <SEOFieldsCard
            seo={formData.seo}
            onChange={(seo) => setFormData({ ...formData, seo })}
            defaultTitle={formData.title}
            defaultDescription={formData.shortDescription}
            defaultSlug={`portfolio/${formData.slug || "new-project"}`}
            sectionTitle="Portfolio Project SEO & SERP Management"
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
              <span>{submitting ? "Saving..." : "Save Project"}</span>
            </button>
          </div>
        </form>
      </Modal>

      {/* Delete Confirmation */}
      <ConfirmModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
        title={`Delete Project '${projectToDelete?.title}'?`}
        message="This portfolio showcase and all its details will be removed from the public website immediately."
      />
    </div>
  );
}
