import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | SmartEdge Bangladesh Ltd.",
  description: "Official Privacy Policy, data governance, and information security standards of SmartEdge Bangladesh Ltd.",
  alternates: {
    canonical: "https://smartedgebangladesh.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-400 mb-8">
          Last Updated: October 30, 2026 &bull; SmartEdge Bangladesh Ltd.
        </p>

        <div className="prose prose-slate max-w-none text-sm sm:text-base text-slate-700 space-y-6 leading-relaxed">
          <p>
            At SmartEdge Bangladesh Ltd. ("SmartEdge", "we", "our", or "us"), we are committed to protecting the privacy and security of the personal and business information entrusted to us by our clients, website visitors, and partners.
          </p>

          <h2 className="text-xl font-bold text-slate-900 pt-4">1. Information We Collect</h2>
          <p>
            When you visit our website, submit a project inquiry, or contact us through digital channels, we collect information necessary to evaluate your requirements and communicate effectively:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Contact Details:</strong> Full name, corporate email address, telephone/WhatsApp number.</li>
            <li><strong>Company Information:</strong> Organization name, current website URL, country of operation.</li>
            <li><strong>Project Specifications:</strong> Technical scope descriptions, estimated budget range, target delivery timelines.</li>
            <li><strong>Technical Diagnostics:</strong> IP address, browser user-agent, operating system for fraud and spam prevention.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 pt-4">2. How We Use Your Information</h2>
          <p>
            We process collected information solely for legitimate enterprise software delivery purposes:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Reviewing architectural feasibility and drafting project proposals.</li>
            <li>Responding to customer inquiries and scheduling technical discovery consultations.</li>
            <li>Delivering automated inquiry receipts and administrative notifications.</li>
            <li>Protecting our digital infrastructure against spam, abuse, and automated bot attacks.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 pt-4">3. Data Confidentiality & Non-Disclosure</h2>
          <p>
            We treat all client project descriptions, architecture designs, source code, and business models as strictly confidential trade secrets. We never sell, rent, or lease your information to third-party marketing brokers.
          </p>

          <h2 className="text-xl font-bold text-slate-900 pt-4">4. Enterprise AI Data Governance</h2>
          <p>
            For clients utilizing our AI Integration and automation services, all data processing utilizes commercial zero-data-retention API agreements. Your proprietary business data, customer records, and internal documents are never ingested into public foundation models.
          </p>

          <h2 className="text-xl font-bold text-slate-900 pt-4">5. Contact Information</h2>
          <p>
            For inquiries regarding our data handling practices or to request data removal, please contact our Data Governance Officer at:
          </p>
          <p className="font-semibold text-slate-900">
            SmartEdge Bangladesh Ltd.<br />
            Email: <a href="mailto:info@smartedgebangladesh.com" className="text-primary-600">info@smartedgebangladesh.com</a><br />
            Telephone: +8801743589784<br />
            Address: 1294 Rokeya Sharani, Mirpur-10, Dhaka-1216, Next to Metro Pillar No. 267, Dhaka, Bangladesh 1216.
          </p>
        </div>
      </div>
    </div>
  );
}
