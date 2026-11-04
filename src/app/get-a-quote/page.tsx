"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import {
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
  Video,
  Building,
  ArrowRight,
  ShieldCheck,
  Send,
  Loader2,
  MessageSquare,
  Globe2,
} from "lucide-react";
import { quoteLeadSchema, QuoteLeadData } from "@/lib/validations/quote";
import { companyInfo } from "@/data/company";

const websiteTypes = [
  "Business Website",
  "Corporate Website",
  "E-commerce Website",
  "Portfolio Website",
  "SaaS / Web Application",
  "Landing Page",
  "Custom Web Application",
  "Other",
];

const budgetOptions = [
  "৳15,000 – ৳25,000",
  "৳25,000 – ৳50,000",
  "৳50,000 – ৳75,000",
  "৳75,000 – ৳100,000",
];

const timelineOptions = ["7–15 Days", "15–30 Days", "1–2 Months"];

const meetingTimes = [
  "10:00 AM – 11:30 AM (Morning)",
  "11:30 AM – 01:00 PM (Midday)",
  "02:30 PM – 04:00 PM (Afternoon)",
  "04:00 PM – 05:30 PM (Late Afternoon)",
  "07:00 PM – 08:30 PM (Evening)",
];

const meetingTypes = [
  {
    value: "Online Meeting (Google Meet)",
    label: "Online Meeting (Google Meet)",
    description: "Fast, convenient video call via Google Meet invite.",
    icon: Video,
  },
  {
    value: "In-person Meeting (Office)",
    label: "In-person Meeting (Office)",
    description: "Meet face-to-face at our Mirpur-10, Dhaka engineering office.",
    icon: Building,
  },
];

export default function GetAQuotePage() {
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [emailStatusNote, setEmailStatusNote] = useState<string | null>(null);

  // Form initialization
  const todayStr = new Date().toISOString().split("T")[0];

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<QuoteLeadData>({
    resolver: zodResolver(quoteLeadSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      companyName: "",
      companyAddress: "",
      websiteType: "Business Website",
      projectDescription: "",
      projectBudget: "৳25,000 – ৳50,000",
      projectTimeline: "15–30 Days",
      meetingDate: todayStr,
      meetingTime: "02:30 PM – 04:00 PM (Afternoon)",
      meetingType: "Online Meeting (Google Meet)",
      botField: "",
    },
  });

  const selectedBudget = watch("projectBudget");
  const selectedTimeline = watch("projectTimeline");
  const selectedMeetingType = watch("meetingType");
  const projectDesc = watch("projectDescription") || "";

  const onSubmit = async (data: QuoteLeadData) => {
    setSubmissionStatus("loading");
    setStatusMessage("");
    setEmailStatusNote(null);

    try {
      const response = await fetch("/api/inquiries/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmissionStatus("success");
        setStatusMessage(
          result.message ||
            "Thank you! Your project requirements have been safely transmitted to our team."
        );
        if (result.emailStatus?.note) {
          setEmailStatusNote(result.emailStatus.note);
        }
        reset();
      } else {
        setSubmissionStatus("error");
        setStatusMessage(
          result.error ||
            "Please check that all required fields are filled out correctly."
        );
      }
    } catch {
      setSubmissionStatus("error");
      setStatusMessage(
        "Network connection failed. Your inquiry could not reach our servers. Please check your internet connection or reach out directly on WhatsApp."
      );
    }
  };

  return (
    <div className="pt-28 pb-24 bg-gradient-to-b from-white via-primary-50/20 to-slate-50 min-h-screen relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[300px] bg-brand-yellow/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Page Header Hero */}
      <section className="bg-gradient-to-b from-white via-primary-50/35 to-white border-b border-slate-200/80 py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 text-primary-700 text-xs font-bold uppercase tracking-wider mb-4 border border-primary-200">
            <Sparkles className="w-3.5 h-3.5 text-brand-yellow" />
            <span>START A PROJECT WITH SMARTEDGE BANGLADESH</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Let's Discuss Your Project
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Tell us about your business and project requirements. Our team will get in touch with you to discuss the best solution.
          </p>
        </div>
      </section>

      {/* Main Form & Trust Column */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 md:mt-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-start">
          {/* Left Column: Direct Inquiries & Trust Factors (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Card */}
            <div className="bg-gradient-to-br from-white via-primary-50/40 to-slate-50 text-slate-900 rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-yellow/10 rounded-full blur-xl pointer-events-none" />

              <h2 className="text-xl font-bold text-slate-950 mb-2 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-yellow" />
                <span>Client Promise & SLA</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                All client specifications are covered under strict confidentiality. We do not outsource your code or share your data with third parties.
              </p>

              <div className="space-y-4 pt-4 border-t border-slate-200 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary-50 border border-primary-100 flex items-center justify-center text-brand-yellow shrink-0 shadow-sm">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-950">Under 24-Hour Response</div>
                    <div className="text-slate-600 text-xs mt-0.5">
                      A senior technical consultant will analyze your requirements.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary-50 border border-primary-100 flex items-center justify-center text-brand-yellow shrink-0 shadow-sm">
                    <Video className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-950">Dedicated Consultation</div>
                    <div className="text-slate-600 text-xs mt-0.5">
                      Choose between Google Meet or face-to-face at our Mirpur-10 office.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary-50 border border-primary-100 flex items-center justify-center text-brand-yellow shrink-0 shadow-sm">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-950">Tailored BDT Budgeting</div>
                    <div className="text-slate-600 text-xs mt-0.5">
                      Transparent milestone-based pricing designed for growth.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Official Contact Cards */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                Prefer Immediate Discussion?
              </h3>

              {/* WhatsApp */}
              <a
                href={companyInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/90 hover:bg-emerald-100/70 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-sm shrink-0">
                  <MessageSquare className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="text-xs text-emerald-800 font-semibold">WhatsApp Instant Consultation</div>
                  <div className="text-sm font-bold text-slate-950 group-hover:text-emerald-700 transition-colors">
                    +880 1743-589784
                  </div>
                </div>
              </a>

              {/* Phone */}
              <a
                href={companyInfo.phoneLink}
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-slate-100/80 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-primary-600 shadow-sm shrink-0">
                  <Phone className="w-5 h-5 text-brand-yellow" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold">Direct Telephone</div>
                  <div className="text-sm font-bold text-slate-950 group-hover:text-primary-600 transition-colors">
                    {companyInfo.phone}
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-slate-100/80 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-primary-600 shadow-sm shrink-0">
                  <Mail className="w-5 h-5 text-brand-yellow" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold">Official Business Email</div>
                  <div className="text-sm font-bold text-slate-950 group-hover:text-primary-600 transition-colors">
                    {companyInfo.email}
                  </div>
                </div>
              </a>

              {/* Head Office Location */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-primary-600 shadow-sm shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-brand-yellow" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold">Head Office Location</div>
                  <div className="text-xs text-slate-800 leading-relaxed font-medium mt-0.5">
                    {companyInfo.address.formatted}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Collection Form (7 Columns) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl relative">
              {/* Status Message Alerts */}
              {submissionStatus === "success" && (
                <div className="mb-8 p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 animate-fadeIn">
                  <div className="flex items-center gap-2.5 font-bold text-lg mb-2">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                    <span>Inquiry Successfully Received!</span>
                  </div>
                  <p className="text-sm text-emerald-800 leading-relaxed">
                    {statusMessage}
                  </p>
                  <p className="text-xs text-emerald-700 mt-2">
                    All specifications have been forwarded to our solutions desk. We will confirm your preferred meeting date and time shortly.
                  </p>
                  {emailStatusNote && (
                    <div className="mt-3 text-xs bg-white/80 p-2.5 rounded-xl border border-emerald-100 text-emerald-900 font-medium">
                      <strong>System Notification:</strong> {emailStatusNote}
                    </div>
                  )}
                  <div className="mt-4 pt-4 border-t border-emerald-200/60 flex items-center gap-3">
                    <a
                      href={companyInfo.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat with us on WhatsApp Now</span>
                    </a>
                  </div>
                </div>
              )}

              {submissionStatus === "error" && (
                <div className="mb-8 p-5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-950 flex items-start gap-3 animate-fadeIn">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-sm">Submission Error</div>
                    <p className="text-xs sm:text-sm text-rose-800 mt-0.5">
                      {statusMessage}
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
                {/* Honeypot field for bot suppression (invisible to humans) */}
                <input
                  type="text"
                  {...register("botField")}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                {/* 1. PERSONAL INFORMATION */}
                <div className="space-y-4">
                  <div className="pb-2 border-b border-slate-100 flex items-center justify-between">
                    <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-brand-yellow text-slate-950 flex items-center justify-center text-xs font-black">
                        1
                      </span>
                      Personal Information
                    </h3>
                    <span className="text-[11px] text-slate-400 font-medium">* Required fields</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        {...register("fullName")}
                        placeholder="e.g. Asif Mahmud"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-slate-50/70 focus:bg-white focus:outline-none transition-all ${
                          errors.fullName
                            ? "border-rose-400 focus:border-rose-500"
                            : "border-slate-200 focus:border-primary-500"
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-rose-500 mt-1 font-medium">
                          {errors.fullName.message}
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        {...register("phoneNumber")}
                        placeholder="e.g. +880 1712-345678"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-slate-50/70 focus:bg-white focus:outline-none transition-all ${
                          errors.phoneNumber
                            ? "border-rose-400 focus:border-rose-500"
                            : "border-slate-200 focus:border-primary-500"
                        }`}
                      />
                      {errors.phoneNumber && (
                        <p className="text-xs text-rose-500 mt-1 font-medium">
                          {errors.phoneNumber.message}
                        </p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        {...register("email")}
                        placeholder="e.g. asif@company.com"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-slate-50/70 focus:bg-white focus:outline-none transition-all ${
                          errors.email
                            ? "border-rose-400 focus:border-rose-500"
                            : "border-slate-200 focus:border-primary-500"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-500 mt-1 font-medium">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* Company Name (Optional) */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Company Name <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        {...register("companyName")}
                        placeholder="e.g. Apex Innovations Ltd."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 bg-slate-50/70 focus:bg-white focus:outline-none focus:border-primary-500 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* 2. BUSINESS & PROJECT INFORMATION */}
                <div className="space-y-4">
                  <div className="pb-2 border-b border-slate-100 flex items-center justify-between">
                    <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-brand-yellow text-slate-950 flex items-center justify-center text-xs font-black">
                        2
                      </span>
                      Business Information
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {/* Company Address / Location */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Company Address / Location
                      </label>
                      <input
                        type="text"
                        {...register("companyAddress")}
                        placeholder="e.g. Gulshan-2, Dhaka / Chittagong / Remote"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 bg-slate-50/70 focus:bg-white focus:outline-none focus:border-primary-500 transition-all"
                      />
                    </div>

                    {/* What Type of Website Do You Want? */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        What Type of Website Do You Want? <span className="text-rose-500">*</span>
                      </label>
                      <select
                        {...register("websiteType")}
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-slate-50/70 focus:bg-white focus:outline-none transition-all ${
                          errors.websiteType
                            ? "border-rose-400 focus:border-rose-500"
                            : "border-slate-200 focus:border-primary-500"
                        }`}
                      >
                        {websiteTypes.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                      {errors.websiteType && (
                        <p className="text-xs text-rose-500 mt-1 font-medium">
                          {errors.websiteType.message}
                        </p>
                      )}
                    </div>

                    {/* Briefly Describe Your Project */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                          Briefly Describe Your Project <span className="text-rose-500">*</span>
                        </label>
                        <span className="text-[11px] text-slate-400">
                          {projectDesc.length} / 5000 characters
                        </span>
                      </div>
                      <textarea
                        rows={4}
                        {...register("projectDescription")}
                        placeholder="Please describe what your website or digital platform needs to do, key pages/features, target audience, and any reference sites you admire..."
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-slate-50/70 focus:bg-white focus:outline-none transition-all ${
                          errors.projectDescription
                            ? "border-rose-400 focus:border-rose-500"
                            : "border-slate-200 focus:border-primary-500"
                        }`}
                      />
                      {errors.projectDescription && (
                        <p className="text-xs text-rose-500 mt-1 font-medium">
                          {errors.projectDescription.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* 3. PROJECT BUDGET & TIMELINE */}
                <div className="space-y-4">
                  <div className="pb-2 border-b border-slate-100">
                    <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-brand-yellow text-slate-950 flex items-center justify-center text-xs font-black">
                        3
                      </span>
                      Budget & Expected Timeline
                    </h3>
                  </div>

                  {/* Project Budget (BDT) */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Project Budget (BDT) <span className="text-rose-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {budgetOptions.map((opt) => (
                        <label
                          key={opt}
                          className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer text-xs font-bold transition-all ${
                            selectedBudget === opt
                              ? "border-primary-500 bg-primary-50/50 text-primary-900 shadow-sm"
                              : "border-slate-200 bg-slate-50/60 hover:bg-white text-slate-700"
                          }`}
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
                      <p className="text-xs text-rose-500 mt-1 font-medium">
                        {errors.projectBudget.message}
                      </p>
                    )}
                  </div>

                  {/* Expected Project Timeline */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Expected Project Timeline <span className="text-rose-500">*</span>
                    </label>
                    <div className="grid grid-cols-3 gap-2.5">
                      {timelineOptions.map((opt) => (
                        <label
                          key={opt}
                          className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer text-xs font-bold text-center justify-center transition-all ${
                            selectedTimeline === opt
                              ? "border-primary-500 bg-primary-50/50 text-primary-900 shadow-sm"
                              : "border-slate-200 bg-slate-50/60 hover:bg-white text-slate-700"
                          }`}
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
                    {errors.projectTimeline && (
                      <p className="text-xs text-rose-500 mt-1 font-medium">
                        {errors.projectTimeline.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* 4. MEETING SCHEDULE */}
                <div className="space-y-4">
                  <div className="pb-2 border-b border-slate-100">
                    <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-brand-yellow text-slate-950 flex items-center justify-center text-xs font-black">
                        4
                      </span>
                      Meeting Schedule
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Preferred Meeting Date */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-brand-yellow" />
                        <span>Preferred Meeting Date <span className="text-rose-500">*</span></span>
                      </label>
                      <input
                        type="date"
                        min={todayStr}
                        {...register("meetingDate")}
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-slate-50/70 focus:bg-white focus:outline-none transition-all ${
                          errors.meetingDate
                            ? "border-rose-400 focus:border-rose-500"
                            : "border-slate-200 focus:border-primary-500"
                        }`}
                      />
                      {errors.meetingDate && (
                        <p className="text-xs text-rose-500 mt-1 font-medium">
                          {errors.meetingDate.message}
                        </p>
                      )}
                    </div>

                    {/* Preferred Meeting Time */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-brand-yellow" />
                        <span>Preferred Meeting Time <span className="text-rose-500">*</span></span>
                      </label>
                      <select
                        {...register("meetingTime")}
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-slate-50/70 focus:bg-white focus:outline-none transition-all ${
                          errors.meetingTime
                            ? "border-rose-400 focus:border-rose-500"
                            : "border-slate-200 focus:border-primary-500"
                        }`}
                      >
                        {meetingTimes.map((mt) => (
                          <option key={mt} value={mt}>
                            {mt}
                          </option>
                        ))}
                      </select>
                      {errors.meetingTime && (
                        <p className="text-xs text-rose-500 mt-1 font-medium">
                          {errors.meetingTime.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Meeting Type Selection */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Meeting Type <span className="text-rose-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {meetingTypes.map((mt) => {
                        const Icon = mt.icon;
                        const isSelected = selectedMeetingType === mt.value;
                        return (
                          <label
                            key={mt.value}
                            className={`flex items-start gap-3 p-4 rounded-2xl border cursor-pointer transition-all ${
                              isSelected
                                ? "border-primary-500 bg-primary-50/60 shadow-sm"
                                : "border-slate-200 bg-slate-50/60 hover:bg-white"
                            }`}
                          >
                            <input
                              type="radio"
                              value={mt.value}
                              {...register("meetingType")}
                              className="mt-1 text-primary-600 focus:ring-primary-500"
                            />
                            <div>
                              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-950">
                                <Icon className="w-3.5 h-3.5 text-brand-yellow shrink-0" />
                                <span>{mt.label}</span>
                              </div>
                              <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                                {mt.description}
                              </div>
                            </div>
                          </label>
                        );
                      })}
                    </div>
                    {errors.meetingType && (
                      <p className="text-xs text-rose-500 mt-1 font-medium">
                        {errors.meetingType.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-4 border-t border-slate-100">
                  <button
                    type="submit"
                    disabled={submissionStatus === "loading"}
                    className="w-full py-4 px-6 rounded-2xl bg-brand-yellow hover:bg-yellow-300 text-slate-950 font-extrabold text-sm sm:text-base shadow-xl shadow-brand-yellow/20 flex items-center justify-center gap-2.5 transition-all duration-200 active:scale-98 disabled:opacity-60 disabled:cursor-not-allowed group cursor-pointer"
                  >
                    {submissionStatus === "loading" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending Project Requirements...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Requirements</span>
                        <Send className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-slate-400 mt-3">
                    By submitting, your requirements are dispatched directly to our official company email. No spam, ever.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
