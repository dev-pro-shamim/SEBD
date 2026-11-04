"use client";

import React, { useEffect, useState } from "react";
import { Mail, PhoneCall, MessageSquare, CheckCircle2, ChevronRight, X, Save } from "lucide-react";
import { StoredContactInquiry } from "@/lib/store";

export default function AdminContactsPage() {
  const [contacts, setContacts] = useState<StoredContactInquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState<StoredContactInquiry | null>(null);
  const [tempStatus, setTempStatus] = useState("New");
  const [tempNotes, setTempNotes] = useState("");
  const [saving, setSaving] = useState(false);
  const [feedback, setFeedback] = useState("");

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/contacts");
      if (res.ok) {
        const data = await res.json();
        setContacts(data.contacts || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const openModal = (c: StoredContactInquiry) => {
    setSelectedContact(c);
    setTempStatus(c.status);
    setTempNotes(c.internalNotes || "");
    setFeedback("");
  };

  const handleUpdate = async () => {
    if (!selectedContact) return;
    setSaving(true);
    setFeedback("");

    try {
      const res = await fetch("/api/admin/contacts", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: selectedContact._id,
          status: tempStatus,
          notes: tempNotes,
        }),
      });

      if (res.ok) {
        setFeedback("Contact status updated!");
        setContacts((prev) =>
          prev.map((item) =>
            item._id === selectedContact._id
              ? { ...item, status: tempStatus as any, internalNotes: tempNotes }
              : item
          )
        );
        setSelectedContact((prev) =>
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
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Contact Messages</h1>
        <p className="text-xs text-slate-400 mt-1">General inquiries and consultation requests from the contact page.</p>
      </div>

      <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950 text-slate-400 uppercase tracking-wider text-[10px] font-bold border-b border-slate-800">
              <tr>
                <th className="py-4 px-6">Sender</th>
                <th className="py-4 px-6">Subject / Service</th>
                <th className="py-4 px-6">Message Excerpt</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6">Received</th>
                <th className="py-4 px-6 text-right">View</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {loading ? (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-slate-500">
                    Loading messages...
                  </td>
                </tr>
              ) : contacts.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-slate-500">
                    No contact messages found.
                  </td>
                </tr>
              ) : (
                contacts.map((c) => (
                  <tr
                    key={c._id}
                    onClick={() => openModal(c)}
                    className="hover:bg-slate-800/40 transition-colors cursor-pointer"
                  >
                    <td className="py-4 px-6">
                      <div className="font-bold text-white text-sm">{c.fullName}</div>
                      <div className="text-slate-400 font-mono text-[11px]">{c.email}</div>
                    </td>

                    <td className="py-4 px-6">
                      <div className="font-semibold text-primary-400">{c.subject || "General Inquiry"}</div>
                      <div className="text-slate-500 text-[11px]">{c.serviceInterest || "General"}</div>
                    </td>

                    <td className="py-4 px-6 max-w-xs truncate text-slate-300">
                      {c.message}
                    </td>

                    <td className="py-4 px-6">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-slate-800 text-slate-300 border border-slate-700">
                        {c.status}
                      </span>
                    </td>

                    <td className="py-4 px-6 text-slate-400 whitespace-nowrap">
                      {new Date(c.createdAt).toLocaleDateString([], { month: "short", day: "numeric" })}
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

      {/* Modal */}
      {selectedContact && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary-400">
                  CONTACT #{selectedContact._id}
                </span>
                <h2 className="text-xl font-bold text-white mt-1">{selectedContact.fullName}</h2>
                <div className="text-xs text-slate-400 font-mono">{selectedContact.email}</div>
              </div>
              <button onClick={() => setSelectedContact(null)} className="p-2 rounded-xl bg-slate-800 text-slate-300">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 leading-relaxed whitespace-pre-wrap">
              {selectedContact.message}
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`mailto:${selectedContact.email}?subject=Re:%20${encodeURIComponent(selectedContact.subject || "SmartEdge Consultation")}`}
                className="flex-1 py-2.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-xs text-center flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Reply via Email</span>
              </a>

              {selectedContact.phoneNumber && (
                <a
                  href={`https://wa.me/${selectedContact.phoneNumber.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
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
                  <option value="Contacted">Contacted</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Follow-up Notes:</label>
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
                className="w-full py-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-bold text-xs flex items-center justify-center gap-2"
              >
                <Save className="w-4 h-4" />
                <span>{saving ? "Saving..." : "Update Status"}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
