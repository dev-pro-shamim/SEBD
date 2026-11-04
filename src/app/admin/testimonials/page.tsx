"use client";

import React, { useState, useEffect } from "react";
import { Plus, Edit, Trash2, MessageSquareQuote, RefreshCw, Save, CheckCircle2, AlertCircle, Star } from "lucide-react";
import { TestimonialCMS } from "@/dashboard/types";
import { fetchCMS, saveCMS, deleteCMS } from "@/dashboard/services/cms";
import DataTable, { Column } from "@/dashboard/components/DataTable";
import Modal from "@/dashboard/components/Modal";
import ConfirmModal from "@/dashboard/components/ConfirmModal";

export default function TestimonialsCMSPage() {
  const [testimonials, setTestimonials] = useState<TestimonialCMS[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<TestimonialCMS | null>(null);
  const [itemToDelete, setItemToDelete] = useState<TestimonialCMS | null>(null);

  // Form State
  const [formData, setFormData] = useState<Partial<TestimonialCMS>>({
    clientName: "",
    clientRole: "Managing Director",
    company: "",
    content: "",
    rating: 5,
    projectType: "Custom ERP & Automation",
    verified: true,
  });

  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    loadTestimonials();
  }, []);

  async function loadTestimonials() {
    try {
      setLoading(true);
      const data = await fetchCMS<TestimonialCMS[]>("testimonials");
      setTestimonials(data || []);
    } catch (err: any) {
      setToast({ type: "error", text: err.message || "Failed to load testimonials." });
    } finally {
      setLoading(false);
    }
  }

  function handleOpenCreate() {
    setSelectedItem(null);
    setFormData({
      clientName: "",
      clientRole: "Chief Technology Officer",
      company: "Enterprise Partner Ltd",
      content: "",
      rating: 5,
      projectType: "Custom Enterprise Software",
      verified: true,
    });
    setModalOpen(true);
  }

  function handleOpenEdit(t: TestimonialCMS) {
    setSelectedItem(t);
    setFormData({ ...t });
    setModalOpen(true);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formData.clientName || !formData.content) return;

    try {
      setSubmitting(true);
      const res = await saveCMS<TestimonialCMS>("testimonials", formData);
      setToast({ type: "success", text: `Review by '${res.clientName}' saved successfully.` });
      setModalOpen(false);
      loadTestimonials();
    } catch (err: any) {
      setToast({ type: "error", text: err.message || "Failed to save testimonial." });
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDeleteConfirm() {
    if (!itemToDelete) return;
    try {
      await deleteCMS("testimonials", itemToDelete.id);
      setToast({ type: "success", text: `Review by '${itemToDelete.clientName}' deleted.` });
      setDeleteModalOpen(false);
      setItemToDelete(null);
      loadTestimonials();
    } catch (err: any) {
      setToast({ type: "error", text: err.message || "Failed to delete testimonial." });
    }
  }

  const columns: Column<TestimonialCMS>[] = [
    {
      header: "Client & Company",
      cell: (item) => (
        <div>
          <div className="font-bold text-white text-sm">{item.clientName}</div>
          <div className="text-slate-400 text-xs mt-0.5">
            {item.clientRole} &bull; <span className="text-slate-300 font-semibold">{item.company}</span>
          </div>
        </div>
      ),
    },
    {
      header: "Rating",
      cell: (item) => (
        <div className="flex items-center gap-1 text-amber-400 font-bold">
          <span>{item.rating}</span>
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
        </div>
      ),
    },
    {
      header: "Review Summary",
      cell: (item) => (
        <p className="text-slate-300 text-xs line-clamp-2 max-w-md italic">
          "{item.content}"
        </p>
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
            title="Edit Testimonial"
          >
            <Edit className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => {
              setItemToDelete(item);
              setDeleteModalOpen(true);
            }}
            className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 hover:text-rose-300 transition-colors"
            title="Delete Testimonial"
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
            <MessageSquareQuote className="w-5 h-5 text-amber-400" />
            <span>Client Testimonials CMS ({testimonials.length})</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Manage verified client testimonials, satisfaction ratings, and corporate reviews.
          </p>
        </div>

        <button
          onClick={handleOpenCreate}
          className="px-4 py-2.5 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2"
        >
          <Plus className="w-4 h-4 text-amber-300" />
          <span>Add New Review</span>
        </button>
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
          <span>Loading testimonials...</span>
        </div>
      ) : (
        <DataTable
          data={testimonials}
          columns={columns}
          searchKey="clientName"
          searchPlaceholder="Search reviews by client or company..."
        />
      )}

      {/* Add / Edit Testimonial Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={selectedItem ? `Edit Review: ${selectedItem.clientName}` : "Add New Client Review"}
        subtitle="Manage client designation, organization, rating score, and testimonial content."
        maxWidth="2xl"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Client Full Name *</label>
              <input
                type="text"
                required
                value={formData.clientName || ""}
                onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                placeholder="e.g. David Sterling"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Designation / Role</label>
              <input
                type="text"
                value={formData.clientRole || ""}
                onChange={(e) => setFormData({ ...formData, clientRole: e.target.value })}
                placeholder="e.g. Head of Engineering"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Company / Organization *</label>
              <input
                type="text"
                required
                value={formData.company || ""}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="e.g. Apex Retail UK"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Rating (1 to 5 Stars)</label>
              <select
                value={formData.rating || 5}
                onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
              >
                <option value={5}>⭐⭐⭐⭐⭐ (5 Stars)</option>
                <option value={4}>⭐⭐⭐⭐ (4 Stars)</option>
                <option value={3}>⭐⭐⭐ (3 Stars)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Review Statement *</label>
            <textarea
              rows={4}
              required
              value={formData.content || ""}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              placeholder="What the client said about SmartEdge's delivery, velocity, and communication..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs leading-relaxed"
            />
          </div>

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
              <span>{submitting ? "Saving..." : "Save Review"}</span>
            </button>
          </div>
        </form>
      </Modal>

      {/* Delete Confirmation */}
      <ConfirmModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
        title={`Delete review from '${itemToDelete?.clientName}'?`}
        message="This review will be permanently removed from the website testimonial carousel."
      />
    </div>
  );
}
