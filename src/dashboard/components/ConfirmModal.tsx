"use client";

import React from "react";
import { AlertTriangle, Trash2 } from "lucide-react";

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
  confirmLabel?: string;
  isDeleting?: boolean;
  loading?: boolean;
}

export default function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title = "Confirm Deletion",
  message = "Are you sure you want to delete this record? This action cannot be undone.",
  confirmLabel = "Delete Record",
  isDeleting = false,
  loading = false,
}: ConfirmModalProps) {
  if (!isOpen) return null;
  const busy = isDeleting || loading;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative space-y-5 animate-in fade-in zoom-in-95 duration-200">
        <div className="w-12 h-12 rounded-2xl bg-rose-500/15 border border-rose-500/30 text-rose-400 flex items-center justify-center mx-auto">
          <AlertTriangle className="w-6 h-6" />
        </div>

        <div className="text-center space-y-2">
          <h3 className="text-lg font-bold text-white tracking-tight">{title}</h3>
          <p className="text-xs text-slate-400 leading-relaxed">{message}</p>
        </div>

        <div className="pt-2 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={busy}
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-rose-600 hover:bg-rose-500 transition-colors shadow-md shadow-rose-600/25 flex items-center gap-1.5 disabled:opacity-50"
          >
            <Trash2 className="w-4 h-4" />
            <span>{busy ? "Deleting..." : confirmLabel}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
