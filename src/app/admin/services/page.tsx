"use client";

import React, { useState, useEffect } from "react";
import { Plus, Edit, Trash2, Layers, RefreshCw, ExternalLink, Save, CheckCircle2, AlertCircle } from "lucide-react";
import { ServiceCMS } from "@/dashboard/types";
import { fetchCMS, saveCMS, deleteCMS } from "@/dashboard/services/cms";
import DataTable, { Column } from "@/dashboard/components/DataTable";
import Modal from "@/dashboard/components/Modal";
import ConfirmModal from "@/dashboard/components/ConfirmModal";
import SEOFieldsCard from "@/dashboard/components/SEOFieldsCard";
import Link from "next/link";

export default function ServicesCMSPage() {
  const [services, setServices] = useState<ServiceCMS[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceCMS | null>(null);
  const [serviceToDelete, setServiceToDelete] = useState<ServiceCMS | null>(null);

  // Form State
  const [formData, setFormData] = useState<Partial<ServiceCMS>>({
    title: "",
    slug: "",
    category: "Enterprise Solutions",
    icon: "Layers",
    shortDescription: "",
    fullDescription: "",
    technologies: [],
    deliverables: [],
  });

  const [techInput, setTechInput] = useState("");
  const [delivInput, setDelivInput] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    loadServices();
  }, []);

  async function loadServices() {
    try {
      setLoading(true);
      const data = await fetchCMS<ServiceCMS[]>("services");
      setServices(data || []);
    } catch (err: any) {
      setToast({ type: "error", text: err.message || "Failed to load services." });
    } finally {
      setLoading(false);
    }
  }

  function handleOpenCreate() {
    setSelectedService(null);
    setFormData({
      title: "",
      slug: "",
      category: "Enterprise Solutions",
      icon: "Layers",
      shortDescription: "",
      fullDescription: "",
      technologies: ["TypeScript", "Next.js", "PostgreSQL"],
      deliverables: ["Full Source Code", "Deployment SLA", "Architecture Manual"],
    });
    setTechInput("");
    setDelivInput("");
    setModalOpen(true);
  }

  function handleOpenEdit(srv: ServiceCMS) {
    setSelectedService(srv);
    setFormData({ ...srv });
    setTechInput("");
    setDelivInput("");
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

  function handleRemoveTech(t: string) {
    setFormData({
      ...formData,
      technologies: (formData.technologies || []).filter((item) => item !== t),
    });
  }

  function handleAddDeliverable() {
    if (!delivInput.trim()) return;
    const current = formData.deliverables || [];
    if (!current.includes(delivInput.trim())) {
      setFormData({ ...formData, deliverables: [...current, delivInput.trim()] });
    }
    setDelivInput("");
  }

  function handleRemoveDeliverable(d: string) {
    setFormData({
      ...formData,
      deliverables: (formData.deliverables || []).filter((item) => item !== d),
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formData.title) return;

    try {
      setSubmitting(true);
      const res = await saveCMS<ServiceCMS>("services", formData);
      setToast({ type: "success", text: `Service '${res.title}' saved successfully.` });
      setModalOpen(false);
      loadServices();
    } catch (err: any) {
      setToast({ type: "error", text: err.message || "Failed to save service." });
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDeleteConfirm() {
    if (!serviceToDelete) return;
    try {
      await deleteCMS("services", serviceToDelete.id);
      setToast({ type: "success", text: `Service '${serviceToDelete.title}' deleted.` });
      setDeleteModalOpen(false);
      setServiceToDelete(null);
      loadServices();
    } catch (err: any) {
      setToast({ type: "error", text: err.message || "Failed to delete service." });
    }
  }

  const columns: Column<ServiceCMS>[] = [
    {
      header: "Service Title & Details",
      cell: (item) => (
        <div>
          <div className="font-bold text-white text-sm flex items-center gap-2">
            <span>{item.title}</span>
            <Link
              href={`/services/${item.slug}`}
              target="_blank"
              className="text-slate-500 hover:text-amber-400"
              title="View on site"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="text-slate-400 text-xs mt-0.5 line-clamp-1">
            {item.shortDescription}
          </div>
        </div>
      ),
    },
    {
      header: "Category",
      cell: (item) => (
        <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-primary-500/15 text-primary-300 border border-primary-500/30">
          {item.category}
        </span>
      ),
    },
    {
      header: "Tech Stack",
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
            title="Edit Service"
          >
            <Edit className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => {
              setServiceToDelete(item);
              setDeleteModalOpen(true);
            }}
            className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 hover:text-rose-300 transition-colors"
            title="Delete Service"
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
            <Layers className="w-5 h-5 text-amber-400" />
            <span>Services Management ({services.length})</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Create, edit, or remove software services. Updates instantly reflect on the public website.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/services"
            target="_blank"
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition-all flex items-center gap-1.5"
          >
            <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
            <span>Public Services Page</span>
          </Link>

          <button
            onClick={handleOpenCreate}
            className="px-4 py-2.5 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2"
          >
            <Plus className="w-4 h-4 text-amber-300" />
            <span>Add New Service</span>
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
          <span>Loading services catalog...</span>
        </div>
      ) : (
        <DataTable
          data={services}
          columns={columns}
          searchKey="title"
          searchPlaceholder="Search services by title..."
          filterKey="category"
          filterCategories={Array.from(new Set(services.map((s) => s.category)))}
        />
      )}

      {/* Add / Edit Service Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={selectedService ? `Edit Service: ${selectedService.title}` : "Add New Software Service"}
        subtitle="Specify service overview, guaranteed deliverables, and core technology stack."
        maxWidth="3xl"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Service Title *</label>
              <input
                type="text"
                required
                value={formData.title || ""}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g. AI-Powered Workflow Automation"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Category</label>
              <input
                type="text"
                value={formData.category || ""}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                placeholder="e.g. Enterprise Solutions"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Short Summary (Listing Card)</label>
            <input
              type="text"
              value={formData.shortDescription || ""}
              onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
              placeholder="1-2 sentences summarizing the service value proposition."
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Full Service Description</label>
            <textarea
              rows={4}
              value={formData.fullDescription || ""}
              onChange={(e) => setFormData({ ...formData, fullDescription: e.target.value })}
              placeholder="In-depth architectural overview displayed on the dedicated service details page."
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs leading-relaxed"
            />
          </div>

          {/* Technologies Tag Manager */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Core Technologies</label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={techInput}
                onChange={(e) => setTechInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), handleAddTech())}
                placeholder="Add tech (e.g. Next.js 14, Python, Docker) & press enter"
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
                    onClick={() => handleRemoveTech(t)}
                    className="text-slate-400 hover:text-rose-400"
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Deliverables Manager */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Project Deliverables</label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={delivInput}
                onChange={(e) => setDelivInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), handleAddDeliverable())}
                placeholder="e.g. 100% Intellectual Property Ownership"
                className="flex-1 px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
              />
              <button
                type="button"
                onClick={handleAddDeliverable}
                className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl"
              >
                + Add
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {(formData.deliverables || []).map((d, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-primary-500/10 text-primary-300 text-xs border border-primary-500/20"
                >
                  <span>{d}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveDeliverable(d)}
                    className="text-slate-400 hover:text-rose-400"
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Service SEO & Search Metadata */}
          <SEOFieldsCard
            seo={formData.seo}
            onChange={(seo) => setFormData({ ...formData, seo })}
            defaultTitle={formData.title}
            defaultDescription={formData.shortDescription}
            defaultSlug={`services/${formData.slug || "new-service"}`}
            sectionTitle="Service SEO & Search Engine Ranking"
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
              <span>{submitting ? "Saving..." : "Save Service"}</span>
            </button>
          </div>
        </form>
      </Modal>

      {/* Delete Confirmation */}
      <ConfirmModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
        title={`Delete Service '${serviceToDelete?.title}'?`}
        message="This service will be immediately removed from both the public services listing and its dedicated detail page."
      />
    </div>
  );
}
