"use client";

import React, { useEffect, useState } from "react";
import { Users2, Plus, Edit2, Trash2, ShieldCheck, Globe, ExternalLink } from "lucide-react";
import { TeamMemberCMS } from "@/dashboard/types";
import { fetchCMS, saveCMS, deleteCMS } from "@/dashboard/services/cms";
import DataTable from "@/dashboard/components/DataTable";
import Modal from "@/dashboard/components/Modal";
import ConfirmModal from "@/dashboard/components/ConfirmModal";
import ImageUploader from "@/dashboard/components/ImageUploader";

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function GitHubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export default function AdminTeamPage() {
  const [members, setMembers] = useState<TeamMemberCMS[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState<TeamMemberCMS | null>(null);
  const [memberToDelete, setMemberToDelete] = useState<TeamMemberCMS | null>(null);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState<Partial<TeamMemberCMS>>({
    name: "",
    role: "",
    department: "Executive & Leadership",
    bio: "",
    avatarUrl: "",
    initials: "",
    skills: [],
    linkedin: "",
    github: "",
    featured: true,
  });

  const [skillsInput, setSkillsInput] = useState("");

  const loadData = async () => {
    setLoading(true);
    const data = await fetchCMS<TeamMemberCMS[]>("team");
    if (data) setMembers(data);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const openAddModal = () => {
    setEditingMember(null);
    setFormData({
      name: "",
      role: "",
      department: "Executive & Leadership",
      bio: "",
      avatarUrl: "",
      initials: "",
      skills: [],
      linkedin: "",
      github: "",
      featured: true,
    });
    setSkillsInput("");
    setIsModalOpen(true);
  };

  const openEditModal = (member: TeamMemberCMS) => {
    setEditingMember(member);
    setFormData(member);
    setSkillsInput((member.skills || []).join(", "));
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const skillsArray = skillsInput
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    const initials =
      formData.initials?.trim() ||
      formData.name
        ?.split(" ")
        .map((n) => n[0])
        .join("")
        .substring(0, 2)
        .toUpperCase() ||
      "SE";

    const payload: Partial<TeamMemberCMS> = {
      ...formData,
      initials,
      skills: skillsArray,
    };

    if (editingMember) {
      payload.id = editingMember.id;
    }

    const success = await saveCMS("team", payload);
    setSaving(false);

    if (success) {
      setIsModalOpen(false);
      setToast(editingMember ? "Team member updated!" : "New team member added!");
      setTimeout(() => setToast(null), 3000);
      loadData();
    } else {
      alert("Failed to save team member.");
    }
  };

  const handleDelete = async () => {
    if (!memberToDelete) return;
    setDeleting(true);
    const success = await deleteCMS("team", memberToDelete.id);
    setDeleting(false);

    if (success) {
      setMemberToDelete(null);
      setToast("Member deleted successfully.");
      setTimeout(() => setToast(null), 3000);
      loadData();
    } else {
      alert("Failed to delete team member.");
    }
  };

  const columns = [
    {
      header: "Member",
      accessor: (m: TeamMemberCMS) => (
        <div className="flex items-center gap-3">
          {m.avatarUrl ? (
            <img
              src={m.avatarUrl}
              alt={m.name}
              className="w-10 h-10 rounded-full object-cover border border-slate-700"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary-600 to-amber-400 font-bold text-slate-950 flex items-center justify-center text-sm">
              {m.initials}
            </div>
          )}
          <div>
            <div className="font-bold text-white flex items-center gap-2">
              <span>{m.name}</span>
              {m.featured && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-300 font-medium border border-amber-400/20">
                  Featured
                </span>
              )}
            </div>
            <div className="text-xs text-amber-400/90 font-medium">{m.role}</div>
          </div>
        </div>
      ),
    },
    {
      header: "Department",
      accessor: (m: TeamMemberCMS) => (
        <span className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 font-mono">
          {m.department}
        </span>
      ),
    },
    {
      header: "Key Expertise",
      accessor: (m: TeamMemberCMS) => (
        <div className="flex flex-wrap gap-1 max-w-xs">
          {(m.skills || []).slice(0, 3).map((s, i) => (
            <span
              key={i}
              className="text-[10px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700"
            >
              {s}
            </span>
          ))}
          {(m.skills || []).length > 3 && (
            <span className="text-[10px] px-1.5 py-0.5 rounded text-slate-400">
              +{(m.skills || []).length - 3} more
            </span>
          )}
        </div>
      ),
    },
    {
      header: "Socials",
      accessor: (m: TeamMemberCMS) => (
        <div className="flex items-center gap-2 text-slate-400">
          {m.linkedin && (
            <a
              href={m.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
          )}
          {m.github && (
            <a
              href={m.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
          )}
        </div>
      ),
    },
    {
      header: "Actions",
      accessor: (m: TeamMemberCMS) => (
        <div className="flex items-center gap-2">
          <button
            onClick={() => openEditModal(m)}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            title="Edit Member"
          >
            <Edit2 className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setMemberToDelete(m)}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-500/20 text-slate-300 hover:text-rose-400 transition-colors"
            title="Delete Member"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
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
            <Users2 className="w-6 h-6 text-amber-400" />
            <span>Team & Leadership Management</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Manage executive leadership (CEO Nahyan Ahmed, CTO MD Shamim Islam) and engineering staff displayed on About Us.
          </p>
        </div>
        <button
          onClick={openAddModal}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-slate-950 font-bold text-xs transition-colors shadow-md shadow-primary-500/20"
        >
          <Plus className="w-4 h-4" />
          <span>Add Team Member</span>
        </button>
      </div>

      {/* Data Table */}
      <DataTable
        data={members}
        columns={columns}
        searchKey="name"
        searchPlaceholder="Search team members..."
        filterKey="department"
        filterOptions={["All", "Executive & Leadership", "Engineering", "Design", "Product"]}
        loading={loading}
      />

      {/* Add / Edit Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingMember ? `Edit ${editingMember.name}` : "Add New Team Member"}
        size="lg"
      >
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name || ""}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Nahyan Ahmed"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-primary-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Designation / Role *
              </label>
              <input
                type="text"
                required
                value={formData.role || ""}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                placeholder="e.g. Chief Executive Officer (CEO)"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-primary-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Department
              </label>
              <select
                value={formData.department || "Executive & Leadership"}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-primary-500"
              >
                <option value="Executive & Leadership">Executive & Leadership</option>
                <option value="Engineering & Architecture">Engineering & Architecture</option>
                <option value="Product & Design">Product & Design</option>
                <option value="Operations & Delivery">Operations & Delivery</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Initials (Optional Fallback)
              </label>
              <input
                type="text"
                maxLength={4}
                value={formData.initials || ""}
                onChange={(e) => setFormData({ ...formData, initials: e.target.value })}
                placeholder="e.g. NA"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-primary-500 uppercase"
              />
            </div>
          </div>

          {/* Photo Uploader */}
          <ImageUploader
            label="Profile Photo / Portrait"
            value={formData.avatarUrl || ""}
            onChange={(url) => setFormData({ ...formData, avatarUrl: url })}
            placeholder="Upload headshot or paste image URL"
          />

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Professional Biography
            </label>
            <textarea
              rows={3}
              value={formData.bio || ""}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              placeholder="Brief professional background, career highlights, and leadership role..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-primary-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Core Skills / Technologies (comma separated)
            </label>
            <input
              type="text"
              value={skillsInput}
              onChange={(e) => setSkillsInput(e.target.value)}
              placeholder="e.g. Strategy, Enterprise Architecture, Next.js, Cloud Scaling"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-primary-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                LinkedIn Profile URL
              </label>
              <input
                type="url"
                value={formData.linkedin || ""}
                onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                placeholder="https://linkedin.com/in/username"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-primary-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                GitHub / Portfolio URL
              </label>
              <input
                type="url"
                value={formData.github || ""}
                onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                placeholder="https://github.com/username"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-primary-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <input
              type="checkbox"
              id="featured-check"
              checked={formData.featured ?? true}
              onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
              className="w-4 h-4 rounded bg-slate-950 border-slate-800 text-primary-500 focus:ring-0"
            />
            <label htmlFor="featured-check" className="text-xs font-semibold text-slate-300">
              Featured on About Us Leadership Grid
            </label>
          </div>

          {/* Form Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="px-5 py-2.5 rounded-xl bg-primary-500 hover:bg-primary-600 disabled:opacity-50 text-slate-950 font-bold text-xs shadow-md shadow-primary-500/20"
            >
              {saving ? "Saving..." : editingMember ? "Update Member" : "Add Member"}
            </button>
          </div>
        </form>
      </Modal>

      {/* Delete Confirmation */}
      <ConfirmModal
        isOpen={!!memberToDelete}
        onClose={() => setMemberToDelete(null)}
        onConfirm={handleDelete}
        title="Delete Team Member"
        message={`Are you sure you want to remove "${memberToDelete?.name}"? This will remove them from the website.`}
        loading={deleting}
      />
    </div>
  );
}
