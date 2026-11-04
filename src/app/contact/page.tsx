"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { contactFormSchema, ContactFormData } from "@/lib/validations/inquiry";
import { companyInfo } from "@/data/company";

export default function ContactPage() {
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [emailStatusNote, setEmailStatusNote] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      companyName: "",
      serviceInterest: "General Inquiry",
      subject: "",
      message: "",
      botField: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmissionStatus("loading");
    setStatusMessage("");
    setEmailStatusNote(null);

    try {
      const response = await fetch("/api/inquiries/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmissionStatus("success");
        setStatusMessage(result.message || "Thank you! Your message has been received.");
        if (result.emailStatus && result.emailStatus.note) {
          setEmailStatusNote(result.emailStatus.note);
        }
        reset();
      } else {
        setSubmissionStatus("error");
        setStatusMessage(result.error || "Failed to process message. Please check required fields.");
      }
    } catch {
      setSubmissionStatus("error");
      setStatusMessage("Network error occurred. Please try contacting us directly via WhatsApp or phone.");
    }
  };

  return (
    <div className="pt-28 pb-20 bg-gradient-to-b from-white via-primary-50/20 to-slate-50 min-h-screen relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[300px] bg-brand-yellow/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white via-primary-50/35 to-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 text-primary-700 text-xs font-bold uppercase tracking-wider mb-4 border border-primary-200 shadow-sm">
            CONNECT WITH US
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Tell Us What You Want to Build.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Whether you have an upcoming project, need technical consulting, or want to explore long-term software partnership, our engineering team is here to assist.
          </p>
        </div>
      </section>

      {/* Main Grid: Details & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary-600 block mb-2">
                OFFICIAL CHANNELS
              </span>
              <h2 className="text-2xl font-bold text-slate-900">
                Direct Contact Information
              </h2>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Connect directly with our engineering management office in Dhaka or reach out through our official digital communication channels.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-primary-600 flex-shrink-0 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Official Business Email</div>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="text-base font-bold text-slate-900 hover:text-primary-600 transition-colors"
                  >
                    {companyInfo.email}
                  </a>
                  <div className="text-[11px] text-slate-400 mt-0.5">Response under 24 hours guaranteed</div>
                </div>
              </div>

              {/* Phone */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-primary-600 flex-shrink-0 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Direct Telephone</div>
                  <a
                    href={companyInfo.phoneLink}
                    className="text-base font-bold text-slate-900 hover:text-primary-600 transition-colors"
                  >
                    {companyInfo.phone}
                  </a>
                  <div className="text-[11px] text-slate-400 mt-0.5">Sun – Thu: 9:00 AM – 7:00 PM (GMT+6)</div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-emerald-200 flex items-center justify-center text-emerald-600 flex-shrink-0 shadow-sm">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-emerald-800 font-medium">WhatsApp Instant Consultation</div>
                  <a
                    href={companyInfo.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-emerald-950 hover:text-emerald-700 transition-colors"
                  >
                    +880 1743-589784
                  </a>
                  <div className="text-[11px] text-emerald-700 mt-0.5">Click for instantaneous WhatsApp chat</div>
                </div>
              </div>

              {/* Official Facebook Page */}
              <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-blue-200 flex items-center justify-center text-[#1877F2] flex-shrink-0 shadow-sm">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-blue-800 font-semibold">Official Facebook Page</div>
                  <a
                    href={companyInfo.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-slate-900 hover:text-[#1877F2] transition-colors"
                  >
                    facebook.com/SmartEdgeTechnologiesltd
                  </a>
                  <div className="text-[11px] text-slate-500 mt-0.5">Follow for updates, portfolio launches & tech news</div>
                </div>
              </div>

              {/* Head Office */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-primary-600 flex-shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5 text-brand-yellow" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Head Office Location</div>
                  <div className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {companyInfo.address.formatted}
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Container */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-56 bg-slate-100 relative">
              <iframe
                title="SmartEdge Bangladesh Location Map"
                src="https://maps.google.com/maps?q=1294%20Rokeya%20Sharani%2C%20Mirpur-10%2C%20Dhaka%201216%2C%20Bangladesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                aria-label="Google Map showing 1294 Rokeya Sharani, Mirpur-10, Dhaka, Bangladesh"
              />
            </div>
          </div>

          {/* Right Column: Business Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xl relative">
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-primary-600 block mb-1">
                  INQUIRY FORM
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  Send Us a Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  All inquiries are protected by non-disclosure agreements and logged directly into our engineering review queue.
                </p>
              </div>

              {/* Success Notification */}
              {submissionStatus === "success" && (
                <div className="mb-6 p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 animate-in fade-in">
                  <div className="flex items-center gap-2 font-bold text-base mb-1">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>Inquiry Successfully Received</span>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                    {statusMessage}
                  </p>
                  {emailStatusNote && (
                    <div className="mt-2 text-[11px] text-emerald-700 bg-white/70 p-2 rounded-lg border border-emerald-100">
                      <strong>System Note:</strong> {emailStatusNote}
                    </div>
                  )}
                </div>
              )}

              {/* Error Notification */}
              {submissionStatus === "error" && (
                <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 flex items-start gap-2.5">
                  <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <strong>Error:</strong> {statusMessage}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                {/* Honeypot Field (invisible to users, catches spam bots) */}
                <input
                  type="text"
                  {...register("botField")}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("fullName")}
                      placeholder="e.g. John Doe"
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
                      {...register("email")}
                      placeholder="e.g. john@company.com"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-slate-50/60 focus:bg-white focus:outline-none transition-all ${
                        errors.email
                          ? "border-rose-400 focus:border-rose-500"
                          : "border-slate-200 focus:border-primary-500"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-500 mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      {...register("phoneNumber")}
                      placeholder="e.g. +880 1743-589784"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 bg-slate-50/60 focus:bg-white focus:outline-none focus:border-primary-500 transition-all"
                    />
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      {...register("companyName")}
                      placeholder="e.g. Acme Corp"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 bg-slate-50/60 focus:bg-white focus:outline-none focus:border-primary-500 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Service Interest */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Service Area of Interest
                    </label>
                    <select
                      {...register("serviceInterest")}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 bg-slate-50/60 focus:bg-white focus:outline-none focus:border-primary-500 transition-all"
                    >
                      <option value="Custom Software Development">Custom Software Development</option>
                      <option value="Business Automation & Workflows">Business Automation & Workflows</option>
                      <option value="ERP & CRM Systems">ERP & CRM Systems</option>
                      <option value="Web Application Development">Web Application Development</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="Digital Commerce & Marketplaces">Digital Commerce & Marketplaces</option>
                      <option value="Dedicated Engineering Teams">Dedicated Engineering Teams</option>
                      <option value="SaaS Product Engineering">SaaS Product Engineering</option>
                      <option value="AI Integration & Automation">AI Integration & Automation</option>
                      <option value="General Technical Inquiry">General Technical Inquiry</option>
                    </select>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      {...register("subject")}
                      placeholder="Brief headline of your inquiry"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 bg-slate-50/60 focus:bg-white focus:outline-none focus:border-primary-500 transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Message / Requirements <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    {...register("message")}
                    placeholder="Please tell us about your software project, current challenges, or technical questions..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-slate-50/60 focus:bg-white focus:outline-none transition-all ${
                      errors.message
                        ? "border-rose-400 focus:border-rose-500"
                        : "border-slate-200 focus:border-primary-500"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-500 mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting || submissionStatus === "loading"}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl text-base font-bold text-white bg-primary-500 hover:bg-primary-600 shadow-lg shadow-primary-500/25 active:scale-95 transition-all disabled:opacity-50"
                  >
                    {isSubmitting || submissionStatus === "loading" ? (
                      <span>Sending Your Inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
