import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | SmartEdge Bangladesh",
  description: "Terms of Service and Software Delivery Agreements of SmartEdge Bangladesh Ltd.",
};

export default function TermsConditionsPage() {
  return (
    <div className="pt-28 pb-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Terms & Conditions
        </h1>
        <p className="text-xs text-slate-400 mb-8">
          Last Updated: October 30, 2026 &bull; SmartEdge Bangladesh Ltd.
        </p>

        <div className="prose prose-slate max-w-none text-sm sm:text-base text-slate-700 space-y-6 leading-relaxed">
          <p>
            Welcome to SmartEdge Bangladesh. By accessing our website (https://smartedgebangladesh.com) or engaging our engineering team for software development services, you agree to comply with and be bound by the following Terms and Conditions.
          </p>

          <h2 className="text-xl font-bold text-slate-900 pt-4">1. Scope of Services</h2>
          <p>
            SmartEdge Bangladesh provides custom software development, enterprise ERP implementation, web and mobile product engineering, AI workflow integration, and dedicated technical squad services under formal Statements of Work (SOW).
          </p>

          <h2 className="text-xl font-bold text-slate-900 pt-4">2. Intellectual Property Rights (100% Client Ownership)</h2>
          <p>
            Upon receipt of final milestone payment as stipulated in the relevant Master Services Agreement (MSA), all custom-developed source code, database architectures, graphics, and documentation created specifically for the client transfer to the 100% exclusive intellectual property ownership of the client.
          </p>

          <h2 className="text-xl font-bold text-slate-900 pt-4">3. Agile Delivery & Milestone Reviews</h2>
          <p>
            Development proceeds in two-week agile sprint cycles. Clients receive access to live staging environments and participate in sprint demonstrations. Any formal change requests altering fundamental architectural assumptions are documented in mutually approved written change orders.
          </p>

          <h2 className="text-xl font-bold text-slate-900 pt-4">4. Warranties & SLA Post-Launch Support</h2>
          <p>
            SmartEdge provides a standard 30-day post-launch bug warranty for all fixed-scope projects. Extended 24/7 Service Level Agreements (SLAs) covering server monitoring, zero-day security patches, and point-in-time database backups are governed by individual support agreements.
          </p>

          <h2 className="text-xl font-bold text-slate-900 pt-4">5. Governing Law & Dispute Resolution</h2>
          <p>
            These terms are governed by the laws of Bangladesh. For international clients, engagements are executed with standard cross-border commercial arbitration agreements to ensure mutual legal protection.
          </p>

          <p className="pt-6 font-semibold text-slate-900">
            SmartEdge Bangladesh Ltd.<br />
            Email: <a href="mailto:info@smartedgebangladesh.com" className="text-primary-600">info@smartedgebangladesh.com</a><br />
            Telephone: +8801743589784
          </p>
        </div>
      </div>
    </div>
  );
}
