"use client";

import React, { useState } from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Upload,
  Send,
  Sparkles,
  AlertCircle,
  ShieldCheck,
} from "lucide-react";
import { openPositions, JobPosition } from "@/data/careers";

export default function JobDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const job = openPositions.find((j) => j.slug === slug);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    portfolioUrl: "",
    linkedinUrl: "",
    resumeFileName: "",
    coverLetter: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  if (!job) {
    notFound();
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("Resume file size must be less than 5MB");
        return;
      }
      setFormData((prev) => ({ ...prev, resumeFileName: file.name }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/careers/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          positionSlug: job.slug,
          positionTitle: job.title,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.error || "Submission failed. Please try again.");
      }
    } catch (err) {
      setErrorMessage("Network error. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-slate-500 flex items-center gap-1.5">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/careers" className="hover:text-primary-600">Careers</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 font-semibold">{job.title}</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-white via-primary-50/40 to-slate-50 text-slate-900 py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-brand-yellow/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-primary-50 text-primary-700 border border-primary-200 shadow-sm">
                {job.department}
              </span>
              <span className="text-xs font-semibold px-3.5 py-1 rounded-full bg-white text-slate-700 border border-slate-200/90 shadow-sm">
                {job.type}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              {job.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-600 font-medium pt-2">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-brand-yellow" />
                {job.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-brand-yellow" />
                {job.experience}
              </span>
              <span className="text-slate-950 font-bold bg-white border border-slate-200/90 shadow-sm px-3 py-1 rounded-md">
                {job.salaryRange}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Application Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Job Details (Left) */}
          <div className="lg:col-span-7 space-y-10">
            {/* Overview */}
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-slate-950">About the Role</h2>
              <p className="text-sm text-slate-600 leading-relaxed">{job.overview}</p>
            </div>

            {/* Responsibilities */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-950">Key Responsibilities</h2>
              <ul className="space-y-2.5">
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-primary-500 shrink-0 mt-1" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-950">Candidate Requirements</h2>
              <ul className="space-y-2.5">
                {job.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nice to have */}
            {job.niceToHave.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-slate-950">Bonus Points (Nice to Have)</h2>
                <ul className="space-y-2.5">
                  {job.niceToHave.map((nth, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                      <span className="w-2 h-2 rounded-full bg-slate-400 shrink-0 mt-2" />
                      <span>{nth}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Benefits */}
            <div className="space-y-4 p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-950">Perks & Compensation</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {job.benefits.map((ben, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                    <Sparkles className="w-4 h-4 text-brand-yellow shrink-0" />
                    <span>{ben}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Application Form (Right) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl sticky top-36">
              <div className="space-y-2 mb-6">
                <h3 className="text-xl font-bold text-slate-950">Apply for this Position</h3>
                <p className="text-xs text-slate-500">
                  Fill in your details below. We review every application and respond within 3 business days.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-950">Application Received!</h4>
                  <p className="text-xs text-emerald-700 leading-relaxed">
                    Thank you, {formData.fullName}. Our engineering recruitment team has received your application for <strong>{job.title}</strong> and will reach out via email shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Asif Mahmud"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-primary-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="asif@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+88017..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-primary-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      GitHub or Portfolio URL
                    </label>
                    <input
                      type="url"
                      value={formData.portfolioUrl}
                      onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                      placeholder="https://github.com/..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-primary-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      LinkedIn Profile
                    </label>
                    <input
                      type="url"
                      value={formData.linkedinUrl}
                      onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                      placeholder="https://linkedin.com/in/..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-primary-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Resume Attachment (PDF or DOC)
                    </label>
                    <div className="relative border-2 border-dashed border-slate-200 hover:border-primary-400 rounded-xl p-3 text-center transition-colors">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                      />
                      <div className="flex items-center justify-center gap-2 text-xs text-slate-600">
                        <Upload className="w-4 h-4 text-primary-500" />
                        <span>{formData.resumeFileName || "Click to attach resume (max 5MB)"}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Brief Note or Cover Letter
                    </label>
                    <textarea
                      rows={3}
                      value={formData.coverLetter}
                      onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                      placeholder="Tell us briefly why you're a great fit for SmartEdge..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-primary-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>Sending Application...</span>
                    ) : (
                      <>
                        <span>Submit Application</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
