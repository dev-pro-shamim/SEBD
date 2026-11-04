import { MetadataRoute } from "next";
import { servicesData } from "@/data/services";
import { solutionsData } from "@/data/solutions";
import { productsData } from "@/data/products";
import { industriesData } from "@/data/industries";
import { caseStudiesData } from "@/data/cases";
import { portfolioProjectsData } from "@/data/portfolio";
import { blogPostsData } from "@/data/blogs";
import { openPositions } from "@/data/careers";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://smartedgebangladesh.com";
  const lastModified = new Date();

  // Static core routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/solutions`, lastModified, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/hire-developers`, lastModified, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/products`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/case-studies`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/portfolio`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/technologies`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/industries`, lastModified, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/about-us`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/careers`, lastModified, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/blog`, lastModified, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/insights`, lastModified, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/get-a-quote`, lastModified, changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/discuss-your-project`, lastModified, changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/privacy-policy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms-conditions`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];

  // Dynamic Service routes (all 18+)
  const serviceRoutes: MetadataRoute.Sitemap = servicesData.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Dynamic Solution routes (8)
  const solutionRoutes: MetadataRoute.Sitemap = solutionsData.map((sol) => ({
    url: `${baseUrl}/solutions/${sol.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Dynamic Product routes (7)
  const productRoutes: MetadataRoute.Sitemap = productsData.map((prod) => ({
    url: `${baseUrl}/products/${prod.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Dynamic Industry routes (11)
  const industryRoutes: MetadataRoute.Sitemap = industriesData.map((ind) => ({
    url: `${baseUrl}/industries/${ind.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Dynamic Case Study routes
  const caseRoutes: MetadataRoute.Sitemap = caseStudiesData.map((c) => ({
    url: `${baseUrl}/case-studies/${c.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Dynamic Portfolio routes
  const portfolioRoutes: MetadataRoute.Sitemap = portfolioProjectsData.map((p) => ({
    url: `${baseUrl}/portfolio/${p.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  // Dynamic Job Opening routes
  const careerRoutes: MetadataRoute.Sitemap = openPositions.map((j) => ({
    url: `${baseUrl}/careers/${j.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Dynamic Blog routes
  const blogRoutes: MetadataRoute.Sitemap = blogPostsData.map((b) => ({
    url: `${baseUrl}/blog/${b.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.75,
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
