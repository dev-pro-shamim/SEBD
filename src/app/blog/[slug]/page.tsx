import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  ArrowRight,
  ChevronRight,
  Clock,
  Sparkles,
  Share2,
  BookmarkCheck,
  MapPin,
  Phone,
  Mail,
  Globe,
} from "lucide-react";
import { blogPostsData, BlogPost } from "@/data/blogs";
import { cmsStore } from "@/lib/cms-store";
import { BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const blogs = cmsStore.getBlogs();
  return (blogs.length > 0 ? blogs : blogPostsData).map((b) => ({
    slug: b.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const allBlogs = cmsStore.getBlogs();
  const post = allBlogs.find((b) => b.slug === params.slug) || blogPostsData.find((b) => b.slug === params.slug);
  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  const seo = (post as any).seo;
  const title = seo?.title || `${post.title} | SmartEdge Bangladesh Insights`;
  const description = seo?.description || post.excerpt;
  const canonical = seo?.canonicalUrl || `https://smartedgebangladesh.com/blog/${post.slug}`;
  const ogTitle = seo?.ogTitle || title;
  const ogDescription = seo?.ogDescription || description;
  const ogImage = seo?.ogImage || "/android-chrome-512x512.png";

  return {
    title,
    description,
    keywords: [
      post.category,
      ...(seo?.focusKeyword ? [seo.focusKeyword] : []),
      ...(seo?.secondaryKeywords || []),
      ...(post.tags || []),
      "Software Development Bangladesh",
      "Enterprise Engineering",
      "SmartEdge Bangladesh",
    ],
    robots: seo?.metaRobots ? { index: !seo.metaRobots.includes("noindex"), follow: !seo.metaRobots.includes("nofollow") } : undefined,
    alternates: {
      canonical,
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      type: "article",
      publishedTime: post.date,
      authors: [post.author?.name || "SmartEdge Engineering"],
      url: canonical,
      siteName: "SmartEdge Bangladesh",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [ogImage],
    },
  };
}

export default function BlogPostDetailPage({ params }: PageProps) {
  const allBlogs = cmsStore.getBlogs();
  const post = allBlogs.find((b) => b.slug === params.slug) || blogPostsData.find((b) => b.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = (allBlogs.length > 0 ? allBlogs : blogPostsData)
    .filter((b) => b.slug !== post.slug)
    .slice(0, 2);

  return (
    <div className="pt-28 pb-20 bg-white min-h-screen">
      {/* Structured Data: Article & Breadcrumb */}
      <ArticleSchema
        headline={post.title}
        description={post.excerpt}
        url={`/blog/${post.slug}`}
        datePublished={post.date}
        authorName={post.author?.name}
        keywords={post.tags}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug}` },
        ]}
      />
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-100 py-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-slate-500 flex items-center gap-1.5">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/blog" className="hover:text-primary-600">Blog</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-900 truncate max-w-xs">{post.title}</span>
        </div>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-4 mb-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold">
              {post.category}
            </span>
            <span className="text-xs text-slate-400">&bull;</span>
            <span className="text-xs text-slate-500 font-medium">{post.date}</span>
            <span className="text-xs text-slate-400">&bull;</span>
            <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed font-normal">
            {post.excerpt}
          </p>

          {/* Author Byline */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-700 text-white flex items-center justify-center font-bold text-sm">
                {post.author.initials}
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">{post.author.name}</div>
                <div className="text-xs text-slate-500">{post.author.role} &bull; SmartEdge Bangladesh</div>
              </div>
            </div>

            <div className="text-xs font-semibold text-slate-400 flex items-center gap-1">
              <Share2 className="w-4 h-4 text-slate-400" />
              <span>Share</span>
            </div>
          </div>
        </div>

        {/* Featured Hero Banner / Logo Emblem */}
        <div className="relative w-full rounded-3xl overflow-hidden border border-slate-200/80 shadow-lg shadow-slate-200/50 mb-12 bg-gradient-to-br from-slate-950 via-slate-900 to-primary-950 p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5 sm:gap-6">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shadow-xl border-2 border-primary-500/40 bg-white flex-shrink-0">
              <Image
                src={(post as any).image || "/images/smartedge-symbol.jpg"}
                alt={`${post.title} - SmartEdge Bangladesh Official Logo`}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-500/20 text-brand-yellow text-[11px] font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                Featured Industry Authority Guide
              </div>
              <h2 className="text-lg sm:text-2xl font-black text-white tracking-tight">
                SmartEdge Bangladesh
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-0.5">
                #1 Enterprise Software & Product Engineering Company &bull; Dhaka, Bangladesh
              </p>
            </div>
          </div>
          <div className="flex md:flex-col gap-2.5 w-full md:w-auto">
            <Link
              href="/discuss-your-project"
              className="w-full md:w-auto text-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-bold text-xs shadow-md transition-all whitespace-nowrap"
            >
              Consult with Architects
            </Link>
            <a
              href="https://wa.me/8801743589784"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto text-center px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-all flex items-center justify-center gap-1.5 whitespace-nowrap"
            >
              WhatsApp: +8801743589784
            </a>
          </div>
        </div>

        {/* Key Takeaways Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-primary-50/60 border border-primary-100 mb-12">
          <h3 className="text-sm font-bold uppercase tracking-wider text-primary-700 mb-4 flex items-center gap-2">
            <BookmarkCheck className="w-4 h-4 text-primary-600" />
            Executive Takeaways
          </h3>
          <ul className="space-y-2.5">
            {post.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Article Body */}
        <div className="prose prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
          {post.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Verified Company Information & Contact Card */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-primary-950 to-slate-900 text-white shadow-xl border border-primary-500/25">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl overflow-hidden bg-white shadow-md relative flex-shrink-0">
                <Image
                  src="/images/smartedge-symbol.jpg"
                  alt="SmartEdge Bangladesh Official Emblem"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-[11px] font-bold text-brand-yellow uppercase tracking-widest block">
                  Official Technology Partner
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  SmartEdge Bangladesh Ltd.
                </h3>
              </div>
            </div>
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Verified #1 IT & Software Company
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-6 text-xs sm:text-sm text-slate-300">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-semibold mb-0.5">Corporate Headquarters:</strong>
                <span>1294 Rokeya Sharani, Mirpur-10, Dhaka-1216, Next to Metro Pillar No. 267, Dhaka, Bangladesh 1216.</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-semibold mb-0.5">Direct Phone & WhatsApp:</strong>
                <a href="tel:+8801743589784" className="hover:text-brand-yellow transition-colors font-medium">
                  +880 1743-589784
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-semibold mb-0.5">Official Inquiries & RFP:</strong>
                <a href="mailto:info@smartedgebangladesh.com" className="hover:text-brand-yellow transition-colors font-medium">
                  info@smartedgebangladesh.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Globe className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-semibold mb-0.5">Official Website:</strong>
                <a href="https://smartedgebangladesh.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow transition-colors font-medium">
                  https://smartedgebangladesh.com
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-400">
              Specialized in Custom Software, Enterprise ERP/CRM, Full-Stack Next.js/React & AI Automation.
            </p>
            <Link
              href="/discuss-your-project"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Tags */}
        <div className="pt-10 mt-12 border-t border-slate-200">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
            Article Tags:
          </span>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author Bio Card */}
        <div className="mt-12 p-8 rounded-3xl bg-slate-50 border border-slate-200 flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary-700 to-sky-500 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
            {post.author.initials}
          </div>
          <div>
            <h4 className="text-base font-bold text-slate-900">{post.author.name}</h4>
            <div className="text-xs text-primary-600 font-semibold mb-2">{post.author.role}</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Leads technical strategy and software architecture at SmartEdge Bangladesh, helping organizations design scalable enterprise systems and digital platforms.
            </p>
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              More Engineering Perspectives
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-primary-200 hover:shadow-lg transition-all group"
                >
                  <span className="text-[10px] font-bold text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full inline-block mb-2">
                    {rel.category}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 group-hover:text-primary-600 transition-colors mb-2 leading-snug">
                    {rel.title}
                  </h4>
                  <span className="text-xs text-primary-600 font-semibold inline-flex items-center gap-1">
                    Read Article &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>

      {/* CTA Footer */}
      <section className="py-20 bg-gradient-to-b from-white via-primary-50/50 to-primary-100/40 text-slate-950 border-t border-slate-200/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mb-4 tracking-tight">
            Need Help With a Technology or Architecture Decision?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Speak directly with our senior engineering architects. We can evaluate your current codebase or plan your upcoming digital product.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-slate-950 bg-brand-yellow hover:bg-yellow-400 shadow-md transition-all"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-slate-800 hover:text-slate-950 bg-white border border-slate-200/90 hover:bg-slate-50 shadow-sm transition-all"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
