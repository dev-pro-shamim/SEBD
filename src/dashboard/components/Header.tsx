"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Menu,
  LogOut,
  KeyRound,
  ExternalLink,
  ShieldCheck,
  User,
  Sparkles,
} from "lucide-react";

interface HeaderProps {
  onToggleMobile: () => void;
  title?: string;
  subtitle?: string;
}

export default function DashboardHeader({ onToggleMobile, title = "Admin Dashboard", subtitle }: HeaderProps) {
  const router = useRouter();
  const [passwordModalOpen, setPasswordModalOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      router.push("/admin/login");
    } catch {
      router.push("/admin/login");
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    if (newPassword !== confirmPassword) {
      setErrorMsg("New password and confirmation do not match.");
      return;
    }

    if (newPassword.length < 8) {
      setErrorMsg("New password must be at least 8 characters long.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/admin/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentPassword, newPassword }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSuccessMsg(data.message || "Password changed successfully! Redirecting to login...");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
        setTimeout(() => {
          setPasswordModalOpen(false);
          router.push("/admin/login");
        }, 1500);
      } else {
        setErrorMsg(data.error || "Failed to change password.");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <header className="h-16 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-4 sm:px-8 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleMobile}
            className="md:hidden p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white"
            aria-label="Open mobile menu"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span>{title}</span>
            </h1>
            {subtitle && <p className="text-[11px] text-slate-400 hidden sm:block">{subtitle}</p>}
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setPasswordModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 hover:text-white border border-slate-700 transition-all shadow-sm"
          >
            <KeyRound className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Change Password</span>
          </button>

          <a
            href="/"
            target="_blank"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-primary-600/20 hover:bg-primary-600/30 text-xs font-semibold text-primary-300 border border-primary-500/30 transition-all shadow-sm"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Preview Live Site</span>
          </a>

          {/* User badge */}
          <div className="flex items-center gap-2 pl-2 border-l border-slate-800">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary-600 to-amber-400 p-0.5 flex items-center justify-center">
              <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center text-xs font-black text-amber-400">
                AD
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="p-2 rounded-xl bg-slate-800 hover:bg-rose-500/20 hover:text-rose-400 text-slate-400 transition-all"
              title="Sign out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Change Password Modal */}
      {passwordModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative space-y-5 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2 text-white font-bold text-base">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                <span>Change Administrator Password</span>
              </div>
              <button
                onClick={() => setPasswordModalOpen(false)}
                className="text-slate-400 hover:text-white text-lg font-bold p-1"
              >
                &times;
              </button>
            </div>

            {errorMsg && (
              <div className="p-3 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs">
                {errorMsg}
              </div>
            )}

            {successMsg && (
              <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs">
                {successMsg}
              </div>
            )}

            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Current Password
                </label>
                <input
                  type="password"
                  required
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Enter current password"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-primary-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  New Password (min. 8 characters)
                </label>
                <input
                  type="password"
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new strong password"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-primary-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter new password"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-primary-500"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setPasswordModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-md disabled:opacity-50"
                >
                  {isSubmitting ? "Updating..." : "Save New Password"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
