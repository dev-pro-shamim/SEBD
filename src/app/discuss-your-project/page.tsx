"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Send,
  Lock,
  Clock,
  ArrowRight,
  PhoneCall,
  MessageSquare,
  HelpCircle,
} from "lucide-react";
import { projectInquirySchema, ProjectInquiryData } from "@/lib/validations/inquiry";

function DiscussProjectForm() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "";
  const preselectedRef = searchParams.get("ref") || "";

  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [emailStatusNote, setEmailStatusNote] = useState<string | null>(null);
  const [inquiryId, setInquiryId] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProjectInquiryData>({
    resolver: zodResolver(projectInquirySchema),
    defaultValues: {
      fullName: "",
      businessEmail: "",
      phoneNumber: "",
      companyName: "",
      websiteUrl: "",
      country: "Bangladesh",
      serviceRequired: "Custom Software Development",
      projectBudget: "৳20,000 – ৳30,000",
      projectTimeline: "15–30 Days",
      projectDescription: "",
      additionalRequirements: "",
      botField: "",
    },
  });

  useEffect(() => {
    if (preselectedService) {
      setValue("serviceRequired", preselectedService);
    }
    if (preselectedRef) {
      setValue(
        "projectDescription",
        `Interested in building a solution similar to: ${preselectedRef}.\n\nProject Scope & Objectives:\n`
      );
    }
  }, [preselectedService, preselectedRef, setValue]);

  const watchedDescription = watch("projectDescription") || "";

  const onSubmit = async (data: ProjectInquiryData) => {
    setSubmissionStatus("loading");
    setStatusMessage("");
    setEmailStatusNote(null);

    try {
      const response = await fetch("/api/inquiries/project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmissionStatus("success");
        setStatusMessage(
          result.message ||
            "Your project inquiry has been safely stored. Our solutions architects are reviewing your specifications."
        );
        if (result.inquiryId) setInquiryId(result.inquiryId);
        if (result.emailStatus && result.emailStatus.note) {
          setEmailStatusNote(result.emailStatus.note);
        }
        reset();
      } else {
        setSubmissionStatus("error");
        setStatusMessage(
          result.error || "Please review form fields and correct validation errors."
        );
      }
    } catch {
      setSubmissionStatus("error");
      setStatusMessage(
        "Network connection error. Your inquiry could not be delivered to the server. Please try again or reach out on WhatsApp."
      );
    }
  };

  const budgetOptions = [
    "৳15,000 – ৳20,000",
    "৳20,000 – ৳30,000",
    "৳30,000 – ৳50,000",
    "৳50,000 – ৳70,000",
    "৳70,000 – ৳90,000",
    "৳90,000 – ৳100,000 (1 Lakh)",
  ];

  const timelineOptions = [
    "7–15 Days",
    "15–30 Days",
    "1–2 Months",
  ];

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 text-primary-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-primary-200">
            <Sparkles className="w-3.5 h-3.5" />
            CONFIDENTIAL PROJECT INQUIRY
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Discuss Your Software Project.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Provide your project requirements below. A Senior Solutions Architect from SmartEdge Bangladesh will evaluate technical feasibility and return a detailed scope and estimate within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl relative">
          {/* Trust Guarantees Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-8 mb-8 border-b border-slate-100 text-xs text-slate-600">
            <div className="flex items-center gap-2 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Strict NDA & IP Confidentiality</span>
            </div>
            <div className="flex items-center gap-2 font-medium">
              <Clock className="w-4 h-4 text-primary-600 flex-shrink-0" />
              <span>Response Under 24 Business Hours</span>
            </div>
            <div className="flex items-center gap-2 font-medium">
              <Lock className="w-4 h-4 text-indigo-600 flex-shrink-0" />
              <span>Encrypted Secure Storage</span>
            </div>
          </div>

          {/* Success Notification */}
          {submissionStatus === "success" && (
            <div className="mb-10 p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 animate-in fade-in">
              <div className="flex items-center gap-2.5 font-bold text-lg mb-2">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                <span>Project Inquiry Successfully Stored & Logged!</span>
              </div>
              <p className="text-sm text-emerald-800 leading-relaxed">
                {statusMessage}
              </p>
              {inquiryId && (
                <div className="mt-3 text-xs font-mono text-emerald-900 bg-white/80 p-2.5 rounded-lg border border-emerald-200">
                  Tracking Reference ID: <strong>{inquiryId}</strong>
                </div>
              )}
              {emailStatusNote && (
                <div className="mt-2 text-xs text-emerald-800 bg-white/80 p-2.5 rounded-lg border border-emerald-200">
                  <strong>Notification Status:</strong> {emailStatusNote}
                </div>
              )}
              <div className="mt-4 pt-4 border-t border-emerald-200/60 flex flex-wrap gap-4 text-xs font-semibold">
                <a
                  href="https://wa.me/8801743589784?text=Hello%20SmartEdge,%20I%20just%20submitted%20a%20project%20inquiry%20form"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-800 hover:text-emerald-950 inline-flex items-center gap-1.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  Speed up review via WhatsApp &rarr;
                </a>
              </div>
            </div>
          )}

          {/* Error Notification */}
          {submissionStatus === "error" && (
            <div className="mb-8 p-5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-950 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-sm font-bold">Submission Alert</strong>
                <p className="text-xs text-rose-800 mt-0.5">{statusMessage}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
            {/* Honeypot Field */}
            <input
              type="text"
              {...register("botField")}
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />

            {/* SECTION 1: Client & Company Information */}
            <div>
              <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center text-xs font-bold">
                  1
                </span>
                Company & Contact Information
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("fullName")}
                    placeholder="e.g. Michael Smith"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-slate-50/60 focus:bg-white focus:outline-none transition-all ${
                      errors.fullName
                        ? "border-rose-400 focus:border-rose-500"
                        : "border-slate-200 focus:border-primary-500"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-rose-500 mt-1">{errors.fullName.message}</p>
                  )}
                </div>

                {/* Business Email */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Business Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    {...register("businessEmail")}
                    placeholder="e.g. michael@company.com"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-slate-50/60 focus:bg-white focus:outline-none transition-all ${
                      errors.businessEmail
                        ? "border-rose-400 focus:border-rose-500"
                        : "border-slate-200 focus:border-primary-500"
                    }`}
                  />
                  {errors.businessEmail && (
                    <p className="text-xs text-rose-500 mt-1">{errors.businessEmail.message}</p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    {...register("phoneNumber")}
                    placeholder="e.g. +880 1743-589784"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-slate-50/60 focus:bg-white focus:outline-none transition-all ${
                      errors.phoneNumber
                        ? "border-rose-400 focus:border-rose-500"
                        : "border-slate-200 focus:border-primary-500"
                    }`}
                  />
                  {errors.phoneNumber && (
                    <p className="text-xs text-rose-500 mt-1">{errors.phoneNumber.message}</p>
                  )}
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Company / Organization <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("companyName")}
                    placeholder="e.g. Apex Global Ltd"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-slate-50/60 focus:bg-white focus:outline-none transition-all ${
                      errors.companyName
                        ? "border-rose-400 focus:border-rose-500"
                        : "border-slate-200 focus:border-primary-500"
                    }`}
                  />
                  {errors.companyName && (
                    <p className="text-xs text-rose-500 mt-1">{errors.companyName.message}</p>
                  )}
                </div>

                {/* Website URL */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Current Website URL (Optional)
                  </label>
                  <input
                    type="url"
                    {...register("websiteUrl")}
                    placeholder="https://company.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 bg-slate-50/60 focus:bg-white focus:outline-none focus:border-primary-500 transition-all"
                  />
                  {errors.websiteUrl && (
                    <p className="text-xs text-rose-500 mt-1">{errors.websiteUrl.message}</p>
                  )}
                </div>

                {/* Country */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Country <span className="text-rose-500">*</span>
                  </label>
                  <select
                    {...register("country")}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 bg-slate-50/60 focus:bg-white focus:outline-none focus:border-primary-500 transition-all"
                  >
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United Arab Emirates">United Arab Emirates</option>
                    <option value="Australia">Australia</option>
                    <option value="Canada">Canada</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Germany">Germany</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Other">Other Country</option>
                  </select>
                </div>
              </div>
            </div>

            {/* SECTION 2: Project Scope & Technical Requirements */}
            <div>
              <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center text-xs font-bold">
                  2
                </span>
                Project Scope & Requirements
              </h3>

              <div className="space-y-6">
                {/* Service Required */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Primary Service Required <span className="text-rose-500">*</span>
                  </label>
                  <select
                    {...register("serviceRequired")}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 bg-slate-50/60 focus:bg-white focus:outline-none focus:border-primary-500 transition-all"
                  >
                    <option value="Custom Software Development">Custom Software Development</option>
                    <option value="Business Automation & Workflows">Business Automation & Workflows</option>
                    <option value="ERP & CRM Development">ERP & CRM Development</option>
                    <option value="Web Application Development">Web Application Development</option>
                    <option value="Mobile Application Development">Mobile Application Development</option>
                    <option value="E-commerce & Multi-Vendor Marketplaces">E-commerce & Multi-Vendor Marketplaces</option>
                    <option value="WordPress & Headless CMS Development">WordPress & Headless CMS Development</option>
                    <option value="Dedicated Development Teams">Dedicated Development Teams</option>
                    <option value="SaaS Product Engineering">SaaS Product Engineering</option>
                    <option value="AI Integration & Automation">AI Integration & Automation</option>
                    <option value="Legacy Software Modernization">Legacy Software Modernization</option>
                    <option value="Website Maintenance & SRE Support">Website Maintenance & SRE Support</option>
                  </select>
                </div>

                {/* Estimated Budget */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Project Budget (BDT / ৳) <span className="text-rose-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {budgetOptions.map((opt) => (
                      <label
                        key={opt}
                        className="flex items-center gap-2 p-3 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white cursor-pointer text-xs font-semibold text-slate-800 transition-colors"
                      >
                        <input
                          type="radio"
                          value={opt}
                          {...register("projectBudget")}
                          className="text-primary-600 focus:ring-primary-500"
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                  {errors.projectBudget && (
                    <p className="text-xs text-rose-500 mt-1">{errors.projectBudget.message}</p>
                  )}
                </div>

                {/* Target Timeline */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Estimated Project Timeline <span className="text-rose-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {timelineOptions.map((opt) => (
                      <label
                        key={opt}
                        className="flex items-center gap-2 p-3 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white cursor-pointer text-xs font-semibold text-slate-800 transition-colors"
                      >
                        <input
                          type="radio"
                          value={opt}
                          {...register("projectTimeline")}
                          className="text-primary-600 focus:ring-primary-500"
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Project Description & Key Deliverables <span className="text-rose-500">*</span>
                    </label>
                    <span className="text-[11px] text-slate-400">
                      {watchedDescription.length} / 5000 characters
                    </span>
                  </div>
                  <textarea
                    rows={5}
                    {...register("projectDescription")}
                    placeholder="Describe what you want to build, the problems you are solving, core user workflows, target audience, and any existing software systems you need integrated..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-slate-50/60 focus:bg-white focus:outline-none transition-all ${
                      errors.projectDescription
                        ? "border-rose-400 focus:border-rose-500"
                        : "border-slate-200 focus:border-primary-500"
                    }`}
                  />
                  {errors.projectDescription && (
                    <p className="text-xs text-rose-500 mt-1">
                      {errors.projectDescription.message}
                    </p>
                  )}
                </div>

                {/* Additional Requirements */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Additional Requirements & Constraints (Optional)
                  </label>
                  <textarea
                    rows={3}
                    {...register("additionalRequirements")}
                    placeholder="E.g. strict compliance needs, preferred cloud hosts (AWS/Vercel), existing third-party APIs (Stripe, bKash, SAP), or NDA requirements..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 bg-slate-50/60 focus:bg-white focus:outline-none focus:border-primary-500 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Submission Button */}
            <div className="pt-4 border-t border-slate-100">
              <button
                type="submit"
                disabled={isSubmitting || submissionStatus === "loading"}
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-8 rounded-full text-base font-bold text-white bg-primary-500 hover:bg-primary-600 shadow-xl shadow-primary-500/25 active:scale-95 transition-all disabled:opacity-50"
              >
                {isSubmitting || submissionStatus === "loading" ? (
                  <span>Transmitting Project Specifications...</span>
                ) : (
                  <>
                    <span>Submit Project for Technical Review</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
              <p className="text-center text-xs text-slate-400 mt-3">
                Protected by strict non-disclosure terms. Your business data is never shared.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function DiscussProjectPage() {
  return (
    <Suspense fallback={<div className="pt-40 text-center text-sm text-slate-500">Loading inquiry portal...</div>}>
      <DiscussProjectForm />
    </Suspense>
  );
}
