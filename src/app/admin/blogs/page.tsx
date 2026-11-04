"use client";

import React, { useState, useEffect } from "react";
import { Plus, Edit, Trash2, BookOpen, RefreshCw, ExternalLink, Save, CheckCircle2, AlertCircle } from "lucide-react";
import { BlogPostCMS } from "@/dashboard/types";
import { fetchCMS, saveCMS, deleteCMS } from "@/dashboard/services/cms";
import DataTable, { Column } from "@/dashboard/components/DataTable";
import Modal from "@/dashboard/components/Modal";
import ConfirmModal from "@/dashboard/components/ConfirmModal";
import Link from "next/link";

export default function BlogsCMSPage() {
  const [blogs, setBlogs] = useState<BlogPostCMS[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<BlogPostCMS | null>(null);
  const [blogToDelete, setBlogToDelete] = useState<BlogPostCMS | null>(null);

  // Form State
  const [formData, setFormData] = useState<Partial<BlogPostCMS>>({
    title: "",
    slug: "",
    category: "Enterprise Engineering",
    excerpt: "",
    author: { name: "Nahyan Ahmed", role: "CEO", initials: "NA" },
    date: "",
    readTime: "6 min read",
    featured: false,
    status: "published",
    tags: [],
    content: [],
    keyTakeaways: [],
  });

  const [tagInput, setTagInput] = useState("");
  const [contentParagraph, setContentParagraph] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    loadBlogs();
  }, []);

  async function loadBlogs() {
    try {
      setLoading(true);
      const data = await fetchCMS<BlogPostCMS[]>("blogs");
      setBlogs(data || []);
    } catch (err: any) {
      setToast({ type: "error", text: err.message || "Failed to load blogs." });
    } finally {
      setLoading(false);
    }
  }

  function handleOpenCreate() {
    setSelectedBlog(null);
    setFormData({
      title: "",
      slug: "",
      category: "Engineering Architecture",
      excerpt: "",
      author: { name: "Nahyan Ahmed", role: "Chief Executive Officer (CEO)", initials: "NA" },
      date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      readTime: "5 min read",
      featured: false,
      status: "published",
      tags: ["Software", "Architecture"],
      content: ["Write the full paragraph content here..."],
      keyTakeaways: ["Key insight 1", "Key insight 2"],
    });
    setModalOpen(true);
  }

  function handleOpenEdit(b: BlogPostCMS) {
    setSelectedBlog(b);
    setFormData({ ...b });
    setModalOpen(true);
  }

  function handleAddTag() {
    if (!tagInput.trim()) return;
    const current = formData.tags || [];
    if (!current.includes(tagInput.trim())) {
      setFormData({ ...formData, tags: [...current, tagInput.trim()] });
    }
    setTagInput("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formData.title) return;

    try {
      setSubmitting(true);
      const res = await saveCMS<BlogPostCMS>("blogs", formData);
      setToast({ type: "success", text: `Blog '${res.title}' saved successfully.` });
      setModalOpen(false);
      loadBlogs();
    } catch (err: any) {
      setToast({ type: "error", text: err.message || "Failed to save blog post." });
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDeleteConfirm() {
    if (!blogToDelete) return;
    try {
      await deleteCMS("blogs", blogToDelete.id);
      setToast({ type: "success", text: `Blog post '${blogToDelete.title}' deleted.` });
      setDeleteModalOpen(false);
      setBlogToDelete(null);
      loadBlogs();
    } catch (err: any) {
      setToast({ type: "error", text: err.message || "Failed to delete blog." });
    }
  }

  const columns: Column<BlogPostCMS>[] = [
    {
      header: "Article Title & Author",
      cell: (item) => (
        <div>
          <div className="font-bold text-white text-sm flex items-center gap-2">
            <span>{item.title}</span>
            <Link
              href={`/blog/${item.slug}`}
              target="_blank"
              className="text-slate-500 hover:text-amber-400"
              title="View on site"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="text-slate-400 text-xs mt-0.5">
            By {item.author.name} ({item.author.role}) &bull; {item.date}
          </div>
        </div>
      ),
    },
    {
      header: "Category",
      cell: (item) => (
        <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-sky-500/15 text-sky-300 border border-sky-500/30">
          {item.category}
        </span>
      ),
    },
    {
      header: "Status",
      cell: (item) => (
        <span
          className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${
            item.status === "published"
              ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
              : "bg-slate-800 text-slate-400 border border-slate-700"
          }`}
        >
          {item.status === "published" ? "Published" : "Draft"}
        </span>
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
            title="Edit Article"
          >
            <Edit className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => {
              setBlogToDelete(item);
              setDeleteModalOpen(true);
            }}
            className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 hover:text-rose-300 transition-colors"
            title="Delete Article"
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
            <BookOpen className="w-5 h-5 text-amber-400" />
            <span>Blog & Technical Insights CMS ({blogs.length})</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Author and publish engineering insights, architecture guides, and technology articles.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/blog"
            target="_blank"
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition-all flex items-center gap-1.5"
          >
            <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
            <span>Public Insights Page</span>
          </Link>

          <button
            onClick={handleOpenCreate}
            className="px-4 py-2.5 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2"
          >
            <Plus className="w-4 h-4 text-amber-300" />
            <span>Write New Article</span>
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
          <span>Loading articles...</span>
        </div>
      ) : (
        <DataTable
          data={blogs}
          columns={columns}
          searchKey="title"
          searchPlaceholder="Search articles by title..."
          filterKey="category"
          filterCategories={Array.from(new Set(blogs.map((b) => b.category)))}
        />
      )}

      {/* Add / Edit Blog Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={selectedBlog ? `Edit Article: ${selectedBlog.title}` : "Write New Technical Article"}
        subtitle="Manage author attribution, categories, reading time, and content sections."
        maxWidth="3xl"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Article Title *</label>
              <input
                type="text"
                required
                value={formData.title || ""}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g. Modern Microservices Architecture"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Category</label>
              <input
                type="text"
                value={formData.category || ""}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                placeholder="e.g. Enterprise Engineering"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Author Name</label>
              <input
                type="text"
                value={formData.author?.name || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    author: { ...formData.author, name: e.target.value, role: formData.author?.role || "Author", initials: formData.author?.initials || "NA" },
                  })
                }
                placeholder="e.g. Nahyan Ahmed"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Author Designation</label>
              <input
                type="text"
                value={formData.author?.role || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    author: { ...formData.author, role: e.target.value, name: formData.author?.name || "Author", initials: formData.author?.initials || "NA" },
                  })
                }
                placeholder="e.g. Chief Executive Officer (CEO)"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Publication Status</label>
              <select
                value={formData.status || "published"}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
              >
                <option value="published">Published</option>
                <option value="draft">Draft</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Excerpt / Summary</label>
            <textarea
              rows={2}
              value={formData.excerpt || ""}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              placeholder="Short summary displayed on the card and SEO description."
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs leading-relaxed"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Full Article Paragraphs (One per line)</label>
            <textarea
              rows={6}
              value={(formData.content || []).join("\n\n")}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  content: e.target.value.split("\n\n").map((p) => p.trim()).filter(Boolean),
                })
              }
              placeholder="Type your paragraphs here. Separate each paragraph with a double return/enter."
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs leading-relaxed font-mono"
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
              <span>{submitting ? "Saving..." : "Save Article"}</span>
            </button>
          </div>
        </form>
      </Modal>

      {/* Delete Confirmation */}
      <ConfirmModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
        title={`Delete Article '${blogToDelete?.title}'?`}
        message="This article will be immediately unpublished and removed from the public website."
      />
    </div>
  );
}
