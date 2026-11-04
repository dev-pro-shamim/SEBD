"use client";

import React, { useEffect, useState } from "react";
import { Briefcase, Users, FileText, ChevronRight, X, ExternalLink, Save, CheckCircle2 } from "lucide-react";
import { StoredJobApplication } from "@/lib/store";
import { JobPosition } from "@/data/careers";

export default function AdminJobsPage() {
  const [jobs, setJobs] = useState<JobPosition[]>([]);
  const [applications, setApplications] = useState<StoredJobApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedApp, setSelectedApp] = useState<StoredJobApplication | null>(null);
  const [tempStatus, setTempStatus] = useState("New");
  const [tempNotes, setTempNotes] = useState("");
  const [saving, setSaving] = useState(false);
  const [feedback, setFeedback] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/jobs");
      if (res.ok) {
        const data = await res.json();
        setJobs(data.jobs || []);
        setApplications(data.applications || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const openApp = (app: StoredJobApplication) => {
    setSelectedApp(app);
    setTempStatus(app.status);
    setTempNotes(app.internalNotes || "");
    setFeedback("");
  };

  const handleUpdate = async () => {
    if (!selectedApp) return;
    setSaving(true);
    setFeedback("");

    try {
      const res = await fetch("/api/admin/jobs", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: selectedApp._id,
          status: tempStatus,
          notes: tempNotes,
        }),
      });

      if (res.ok) {
        setFeedback("Applicant status updated!");
        setApplications((prev) =>
          prev.map((item) =>
            item._id === selectedApp._id
              ? { ...item, status: tempStatus as any, internalNotes: tempNotes }
              : item
          )
        );
        setSelectedApp((prev) =>
          prev ? { ...prev, status: tempStatus as any, internalNotes: tempNotes } : null
        );
      }
    } catch {
      setFeedback("Network error.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Careers & Talent Pipeline</h1>
        <p className="text-xs text-slate-400 mt-1">Review candidate applications and active engineering openings.</p>
      </div>

      {/* Applications Table */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <Users className="w-4 h-4 text-primary-400" />
          <span>Received Candidate Applications ({applications.length})</span>
        </h2>

        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-950 text-slate-400 uppercase tracking-wider text-[10px] font-bold border-b border-slate-800">
                <tr>
                  <th className="py-4 px-6">Applicant Name</th>
                  <th className="py-4 px-6">Applied Role</th>
                  <th className="py-4 px-6">Resume / Links</th>
                  <th className="py-4 px-6">Status</th>
                  <th className="py-4 px-6">Applied Date</th>
                  <th className="py-4 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {loading ? (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-slate-500">
                      Loading applications...
                    </td>
                  </tr>
                ) : applications.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-slate-500">
                      No applications received yet.
                    </td>
                  </tr>
                ) : (
                  applications.map((app) => (
                    <tr
                      key={app._id}
                      onClick={() => openApp(app)}
                      className="hover:bg-slate-800/40 transition-colors cursor-pointer"
                    >
                      <td className="py-4 px-6">
                        <div className="font-bold text-white text-sm">{app.fullName}</div>
                        <div className="text-slate-400 text-[11px] font-mono">{app.email}</div>
                        <div className="text-slate-500 text-[11px]">{app.phone}</div>
                      </td>

                      <td className="py-4 px-6">
                        <span className="font-semibold text-primary-400">{app.positionTitle}</span>
                      </td>

                      <td className="py-4 px-6">
                        <div className="space-y-1">
                          {app.resumeFileName && (
                            <span className="text-emerald-400 font-medium flex items-center gap-1 text-[11px]">
                              <FileText className="w-3 h-3" />
                              {app.resumeFileName}
                            </span>
                          )}
                          {app.portfolioUrl && (
                            <a
                              href={app.portfolioUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="text-primary-400 hover:underline flex items-center gap-1 text-[11px]"
                            >
                              <ExternalLink className="w-3 h-3" />
                              <span>Portfolio / GitHub</span>
                            </a>
                          )}
                        </div>
                      </td>

                      <td className="py-4 px-6">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-slate-800 text-slate-300 border border-slate-700">
                          {app.status}
                        </span>
                      </td>

                      <td className="py-4 px-6 text-slate-400 whitespace-nowrap">
                        {new Date(app.createdAt).toLocaleDateString([], { month: "short", day: "numeric" })}
                      </td>

                      <td className="py-4 px-6 text-right">
                        <button className="p-1.5 rounded-lg bg-slate-800 hover:bg-primary-500 text-slate-300 hover:text-white transition-colors">
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
      </div>

      {/* Active Job Openings Grid */}
      <div className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <Briefcase className="w-4 h-4 text-brand-yellow" />
          <span>Active Engineering Job Postings ({jobs.length})</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((j) => (
            <div key={j.id} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="px-2.5 py-0.5 rounded-full bg-primary-500/10 text-primary-400 border border-primary-500/20">
                  {j.department}
                </span>
                <span className="text-emerald-400">● {j.status}</span>
              </div>
              <h3 className="font-bold text-white text-base">{j.title}</h3>
              <p className="text-xs text-slate-400 line-clamp-2">{j.shortDesc}</p>
              <div className="text-[11px] text-slate-500 font-mono">{j.salaryRange}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedApp && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary-400">
                  APPLICANT #{selectedApp._id}
                </span>
                <h2 className="text-xl font-bold text-white mt-1">{selectedApp.fullName}</h2>
                <div className="text-xs text-slate-400">{selectedApp.positionTitle}</div>
              </div>
              <button onClick={() => setSelectedApp(null)} className="p-2 rounded-xl bg-slate-800 text-slate-300">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 grid grid-cols-2 gap-2 text-slate-300">
                <div>Email: <strong className="text-white">{selectedApp.email}</strong></div>
                <div>Phone: <strong className="text-white">{selectedApp.phone}</strong></div>
              </div>

              {selectedApp.coverLetter && (
                <div>
                  <div className="text-slate-400 font-bold mb-1">Cover Note:</div>
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 whitespace-pre-wrap">
                    {selectedApp.coverLetter}
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-white uppercase">Status:</label>
                <select
                  value={tempStatus}
                  onChange={(e) => setTempStatus(e.target.value)}
                  className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-bold"
                >
                  <option value="New">New</option>
                  <option value="Reviewed">Reviewed</option>
                  <option value="Shortlisted">Shortlisted</option>
                  <option value="Interview Scheduled">Interview Scheduled</option>
                  <option value="Hired">Hired</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Internal Interview Notes:</label>
                <textarea
                  rows={2}
                  value={tempNotes}
                  onChange={(e) => setTempNotes(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
                />
              </div>

              {feedback && <div className="text-xs font-bold text-emerald-400">{feedback}</div>}

              <button
                onClick={handleUpdate}
                disabled={saving}
                className="w-full py-2.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-xs"
              >
                {saving ? "Saving..." : "Update Applicant Status"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
