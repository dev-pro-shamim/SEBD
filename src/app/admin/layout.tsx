"use client";

import React from "react";
import { usePathname } from "next/navigation";
import DashboardLayout from "@/dashboard/layouts/DashboardLayout";

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login" || pathname?.startsWith("/admin/login");

  // If on login page, render children directly without dashboard shell
  if (isLoginPage) {
    return <>{children}</>;
  }

  // Derive dynamic page title from pathname
  let pageTitle = "Dashboard Overview";
  let pageSubtitle = "Real-time operations, website CMS, and business lead analytics.";

  if (pathname?.includes("/admin/inquiries")) {
    pageTitle = "Business Leads & Inquiries";
    pageSubtitle = "Review, track status, add internal notes, and export qualified website leads.";
  } else if (pathname?.includes("/admin/contacts")) {
    pageTitle = "Contact Messages";
    pageSubtitle = "Inquiries received via the official Contact Us page.";
  } else if (pathname?.includes("/admin/jobs")) {
    pageTitle = "Careers & Candidate Applications";
    pageSubtitle = "Review candidate resumes, portfolios, and interview statuses.";
  } else if (pathname?.includes("/admin/homepage")) {
    pageTitle = "Homepage Content CMS";
    pageSubtitle = "Edit Hero headline, descriptions, statistics, and preview links.";
  } else if (pathname?.includes("/admin/about")) {
    pageTitle = "About Company CMS";
    pageSubtitle = "Manage story, mission, vision, and international markets.";
  } else if (pathname?.includes("/admin/services")) {
    pageTitle = "Services Management";
    pageSubtitle = "Add, edit, and organize software development capabilities.";
  } else if (pathname?.includes("/admin/portfolio")) {
    pageTitle = "Portfolio Projects CMS";
    pageSubtitle = "Showcase delivered systems, architecture blueprints, and metrics.";
  } else if (pathname?.includes("/admin/cases")) {
    pageTitle = "Case Studies CMS";
    pageSubtitle = "Manage in-depth production case studies and quantified results.";
  } else if (pathname?.includes("/admin/blogs")) {
    pageTitle = "Technical Insights & Blogs";
    pageSubtitle = "Publish, edit, and categorize technical articles and architecture guides.";
  } else if (pathname?.includes("/admin/testimonials")) {
    pageTitle = "Client Testimonials CMS";
    pageSubtitle = "Manage client reviews, ratings, designations, and verification status.";
  } else if (pathname?.includes("/admin/team")) {
    pageTitle = "Team Leadership CMS";
    pageSubtitle = "Manage executive leadership, designations, bios, and social links.";
  } else if (pathname?.includes("/admin/navigation")) {
    pageTitle = "Navigation & Header Menus";
    pageSubtitle = "Configure header menu items, dropdown categories, and links.";
  } else if (pathname?.includes("/admin/footer")) {
    pageTitle = "Footer & Contact Details";
    pageSubtitle = "Manage footer columns, physical office address, and social channels.";
  } else if (pathname?.includes("/admin/media")) {
    pageTitle = "Central Media Library";
    pageSubtitle = "Upload, organize, preview, and copy image links across the site.";
  } else if (pathname?.includes("/admin/settings")) {
    pageTitle = "Global Website Settings";
    pageSubtitle = "Branding, SEO meta tags, Google Analytics, and credentials.";
  }

  return (
    <DashboardLayout title={pageTitle} subtitle={pageSubtitle}>
      {children}
    </DashboardLayout>
  );
}
