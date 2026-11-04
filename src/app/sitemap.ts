import { MetadataRoute } from "next";
import { servicesData } from "@/data/services";
import { solutionsData } from "@/data/solutions";
import { productsData } from "@/data/products";
import { industriesData } from "@/data/industries";
import { caseStudiesData } from "@/data/cases";
import { portfolioProjectsData } from "@/data/portfolio";
import { blogPostsData } from "@/data/blogs";
import { openPositions } from "@/data/careers";
import { cmsStore } from "@/lib/cms-store";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://smartedgebangladesh.com";
  const lastModified = new Date();

  // Static core routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, lastModified, changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/solutions`, lastModified, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/hire-developers`, lastModified, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/products`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/case-studies`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/portfolio`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/technologies`, lastModified, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/industries`, lastModified, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/about-us`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/careers`, lastModified, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/blog`, lastModified, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/get-a-quote`, lastModified, changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/discuss-your-project`, lastModified, changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/privacy-policy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms-conditions`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];

  // Dynamic Service routes (CMS + static fallback merged)
  const cmsServices = cmsStore.getServices();
  const allServices = Array.from(
    new Map([...servicesData, ...cmsServices].map((item) => [item.slug, item])).values()
  );
  const serviceRoutes: MetadataRoute.Sitemap = allServices.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Dynamic Solution routes
  const solutionRoutes: MetadataRoute.Sitemap = solutionsData.map((sol) => ({
    url: `${baseUrl}/solutions/${sol.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Dynamic Product routes
  const productRoutes: MetadataRoute.Sitemap = productsData.map((prod) => ({
    url: `${baseUrl}/products/${prod.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Dynamic Industry routes
  const industryRoutes: MetadataRoute.Sitemap = industriesData.map((ind) => ({
    url: `${baseUrl}/industries/${ind.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Dynamic Case Study routes (CMS + static fallback merged)
  const cmsCases = cmsStore.getCases();
  const allCases = Array.from(
    new Map([...caseStudiesData, ...cmsCases].map((item) => [item.slug, item])).values()
  );
  const caseRoutes: MetadataRoute.Sitemap = allCases.map((c) => ({
    url: `${baseUrl}/case-studies/${c.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Dynamic Portfolio routes (CMS + static fallback merged)
  const cmsPortfolio = cmsStore.getPortfolio();
  const allPortfolio = Array.from(
    new Map([...portfolioProjectsData, ...cmsPortfolio].map((item) => [item.slug, item])).values()
  );
  const portfolioRoutes: MetadataRoute.Sitemap = allPortfolio.map((p) => ({
    url: `${baseUrl}/portfolio/${p.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Dynamic Job Opening routes
  const careerRoutes: MetadataRoute.Sitemap = openPositions.map((j) => ({
    url: `${baseUrl}/careers/${j.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Dynamic Blog routes (CMS + static fallback merged)
  const cmsBlogs = cmsStore.getBlogs();
  const allBlogs = Array.from(
    new Map([...blogPostsData, ...cmsBlogs].map((item) => [item.slug, item])).values()
  ).filter((b) => (b as any).status !== "draft");
  const blogRoutes: MetadataRoute.Sitemap = allBlogs.map((b) => ({
    url: `${baseUrl}/blog/${b.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...solutionRoutes,
    ...productRoutes,
    ...industryRoutes,
    ...caseRoutes,
    ...portfolioRoutes,
    ...careerRoutes,
    ...blogRoutes,
  ];
}
