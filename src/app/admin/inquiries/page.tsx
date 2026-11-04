"use client";

import React, { useEffect, useState } from "react";
import {
  Search,
  Filter,
  Download,
  PhoneCall,
  Mail,
  MessageSquare,
  CheckCircle2,
  Clock,
  ExternalLink,
  ChevronRight,
  X,
  Save,
  AlertCircle,
} from "lucide-react";
import { StoredProjectInquiry } from "@/lib/store";
import { InquiryStatus } from "@/lib/models/ProjectInquiry";

const STATUSES: InquiryStatus[] = [
  "New",
  "Contacted",
  "Pending",
  "In Progress",
  "Completed",
  "Cancelled",
];

export default function AdminInquiriesPage() {
  const [inquiries, setInquiries] = useState<StoredProjectInquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedInquiry, setSelectedInquiry] = useState<StoredProjectInquiry | null>(null);
  const [savingNotes, setSavingNotes] = useState(false);
  const [tempNotes, setTempNotes] = useState("");
  const [tempStatus, setTempStatus] = useState<InquiryStatus>("New");
  const [feedbackMsg, setFeedbackMsg] = useState("");

  const fetchInquiries = async () => {
    try {
      setLoading(true);
      const url = new URL("/api/admin/inquiries", window.location.origin);
      if (statusFilter !== "All") url.searchParams.set("status", statusFilter);
      if (searchQuery) url.searchParams.set("search", searchQuery);

      const res = await fetch(url.toString());
      if (res.ok) {
        const data = await res.json();
        setInquiries(data.inquiries || []);
      }
    } catch (err) {
      console.error("Failed to fetch inquiries:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, [statusFilter, searchQuery]);

  const openInquiryModal = (inq: StoredProjectInquiry) => {
    setSelectedInquiry(inq);
    setTempStatus(inq.status);
    setTempNotes(inq.internalNotes || "");
    setFeedbackMsg("");
  };

  const handleUpdate = async () => {
    if (!selectedInquiry) return;
    setSavingNotes(true);
    setFeedbackMsg("");

    try {
      const res = await fetch(`/api/admin/inquiries/${selectedInquiry._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status: tempStatus,
          internalNotes: tempNotes,
        }),
      });

      if (res.ok) {
        setFeedbackMsg("Inquiry updated successfully!");
        setInquiries((prev) =>
          prev.map((item) =>
            item._id === selectedInquiry._id
              ? { ...item, status: tempStatus, internalNotes: tempNotes }
              : item
          )
        );
        setSelectedInquiry((prev) =>
          prev ? { ...prev, status: tempStatus, internalNotes: tempNotes } : null
        );
      } else {
        setFeedbackMsg("Failed to update inquiry.");
      }
    } catch {
      setFeedbackMsg("Network error.");
    } finally {
      setSavingNotes(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            Project Inquiries
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Manage incoming enterprise project inquiries, status workflows, and client notes.
          </p>
        </div>

        <a
          href="/api/admin/export"
          download
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-bold text-white transition-all self-start sm:self-auto"
        >
          <Download className="w-4 h-4 text-brand-yellow" />
          <span>Export to CSV</span>
        </a>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by client name, email, company, or service..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-primary-500"
          />
        </div>

        {/* Status Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          <button
            onClick={() => setStatusFilter("All")}
            className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
              statusFilter === "All"
                ? "bg-primary-500 text-white"
                : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
            }`}
          >
            All ({inquiries.length})
          </button>
          {STATUSES.map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
                statusFilter === st
                  ? "bg-primary-500 text-white"
                  : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Inquiries Table */}
      <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950 text-slate-400 uppercase tracking-wider text-[10px] font-bold border-b border-slate-800">
              <tr>
                <th className="py-4 px-6">Client / Company</th>
                <th className="py-4 px-6">Required Service</th>
                <th className="py-4 px-6">Budget & Timeline</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6">Date</th>
                <th className="py-4 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {loading ? (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-slate-500">
                    Loading inquiries...
                  </td>
                </tr>
              ) : inquiries.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-slate-500">
                    No inquiries found matching criteria.
                  </td>
                </tr>
              ) : (
                inquiries.map((inq) => (
                  <tr
                    key={inq._id}
                    onClick={() => openInquiryModal(inq)}
                    className="hover:bg-slate-800/40 transition-colors cursor-pointer"
                  >
                    <td className="py-4 px-6">
                      <div className="font-bold text-white text-sm">{inq.fullName}</div>
                      <div className="text-slate-400">{inq.companyName} &bull; {inq.country}</div>
                      <div className="text-slate-500 text-[11px] font-mono">{inq.businessEmail}</div>
                    </td>

                    <td className="py-4 px-6">
                      <span className="font-semibold text-primary-400">
                        {inq.serviceRequired}
                      </span>
                    </td>

                    <td className="py-4 px-6">
                      <div className="text-slate-200 font-bold">{inq.projectBudget}</div>
                      <div className="text-slate-400 text-[11px]">{inq.projectTimeline}</div>
                    </td>

                    <td className="py-4 px-6">
                      <span
                        className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          inq.status === "New"
                            ? "bg-rose-500/20 text-rose-300 border border-rose-500/30"
                            : inq.status === "In Progress"
                            ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                            : inq.status === "Contacted"
                            ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                            : inq.status === "Completed"
                            ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                            : "bg-slate-700 text-slate-300"
                        }`}
                      >
                        {inq.status}
                      </span>
                    </td>

                    <td className="py-4 px-6 text-slate-400 whitespace-nowrap">
                      {new Date(inq.createdAt).toLocaleDateString([], {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </td>

                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openInquiryModal(inq);
                        }}
                        className="p-1.5 rounded-lg bg-slate-800 hover:bg-primary-500 text-slate-300 hover:text-white transition-colors"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail / Status Drawer Modal */}
      {selectedInquiry && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl">
            {/* Header */}
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary-400">
                  INQUIRY #{selectedInquiry._id}
                </span>
                <h2 className="text-xl font-bold text-white mt-1">
                  {selectedInquiry.fullName}
                </h2>
                <div className="text-xs text-slate-400">
                  {selectedInquiry.companyName} &bull; {selectedInquiry.country}
                </div>
              </div>
              <button
                onClick={() => setSelectedInquiry(null)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Customer Direct Contact Shortcuts */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Direct Contact Shortcuts:
              </span>
              <a
                href={`mailto:${selectedInquiry.businessEmail}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary-500/20 text-primary-300 text-xs font-semibold hover:bg-primary-500 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{selectedInquiry.businessEmail}</span>
              </a>

              <a
                href={`https://wa.me/${selectedInquiry.phoneNumber.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-semibold hover:bg-emerald-500 hover:text-white transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`tel:${selectedInquiry.phoneNumber}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700 hover:text-white transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-brand-yellow" />
                <span>{selectedInquiry.phoneNumber}</span>
              </a>
            </div>

            {/* Project Details */}
            <div className="space-y-4 text-xs">
              {(selectedInquiry.websiteType || selectedInquiry.meetingDate) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-amber-950/20 border border-amber-500/30">
                  <div>
                    <div className="text-amber-400 font-semibold">Website Type Requested</div>
                    <div className="text-white font-bold text-sm mt-0.5">{selectedInquiry.websiteType}</div>
                  </div>
                  <div>
                    <div className="text-amber-400 font-semibold">Scheduled Meeting Request</div>
                    <div className="text-white font-bold text-sm mt-0.5">
                      {selectedInquiry.meetingDate} &bull; {selectedInquiry.meetingTime}
                    </div>
                    <div className="text-amber-300 text-[11px] mt-0.5">{selectedInquiry.meetingType}</div>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-800/60 border border-slate-800">
                <div>
                  <div className="text-slate-400 font-semibold">Service Needed</div>
                  <div className="text-white font-bold text-sm mt-0.5">{selectedInquiry.serviceRequired}</div>
                </div>
                <div>
                  <div className="text-slate-400 font-semibold">Budget & Timeline</div>
                  <div className="text-white font-bold text-sm mt-0.5">
                    {selectedInquiry.projectBudget} ({selectedInquiry.projectTimeline})
                  </div>
                </div>
              </div>

              <div>
                <div className="text-slate-400 font-bold uppercase tracking-wider mb-1.5">
                  Project Description
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 leading-relaxed whitespace-pre-wrap">
                  {selectedInquiry.projectDescription}
                </div>
              </div>

              {selectedInquiry.additionalRequirements && (
                <div>
                  <div className="text-slate-400 font-bold uppercase tracking-wider mb-1.5">
                    Additional Requirements
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-400">
                    {selectedInquiry.additionalRequirements}
                  </div>
                </div>
              )}
            </div>

            {/* Status Workflow & Internal Notes */}
            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-white uppercase tracking-wider">
                  Update Inquiry Status:
                </label>
                <select
                  value={tempStatus}
                  onChange={(e) => setTempStatus(e.target.value as InquiryStatus)}
                  className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-bold focus:outline-none focus:border-primary-500"
                >
                  {STATUSES.map((st) => (
                    <option key={st} value={st}>
                      {st}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">
                  Internal Engineering Notes & Follow-up Log:
                </label>
                <textarea
                  rows={3}
                  value={tempNotes}
                  onChange={(e) => setTempNotes(e.target.value)}
                  placeholder="e.g. Conducted technical scoping call on Zoom. Sent architecture proposal."
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-primary-500"
                />
              </div>

              {feedbackMsg && (
                <div className="text-xs font-bold text-emerald-400">
                  {feedbackMsg}
                </div>
              )}

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={async () => {
                    if (!confirm(`Are you sure you want to permanently delete inquiry #${selectedInquiry._id}?`)) return;
                    try {
                      const res = await fetch(`/api/admin/inquiries/${selectedInquiry._id}`, { method: "DELETE" });
                      if (res.ok) {
                        setInquiries((prev) => prev.filter((i) => i._id !== selectedInquiry._id));
                        setSelectedInquiry(null);
                      } else {
                        alert("Failed to delete inquiry.");
                      }
                    } catch (e) {
                      alert("Error deleting inquiry.");
                    }
                  }}
                  className="px-4 py-2.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 font-bold text-xs transition-colors border border-rose-500/30"
                >
                  Delete Inquiry
                </button>

                <button
                  onClick={handleUpdate}
                  disabled={savingNotes}
                  className="flex-1 py-2.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all disabled:opacity-50 shadow-md shadow-primary-500/20"
                >
                  <Save className="w-4 h-4" />
                  <span>{savingNotes ? "Saving..." : "Save Status & Notes"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
