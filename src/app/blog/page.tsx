"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { Search, Clock, ArrowRight, Sparkles, Filter } from "lucide-react";
import { blogPostsData, blogCategories, BlogPost } from "@/data/blogs";

export default function BlogListingPage() {
  const [posts, setPosts] = useState<any[]>(blogPostsData);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    fetch("/api/content/blogs")
      .then((res) => res.json())
      .then((data) => {
        if (data?.data && Array.isArray(data.data) && data.data.length > 0) {
          setPosts(data.data);
        }
      })
      .catch(() => {});
  }, []);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((t: string) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [posts, selectedCategory, searchQuery]);

  const featuredPost = posts.find((p) => p.featured) || posts[0];

  return (
    <div className="pt-28 pb-20 bg-white min-h-screen">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary-50/40 via-white to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-xs font-semibold uppercase tracking-wider mb-4 border border-primary-200/60">
            ENGINEERING PERSPECTIVES
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Ideas, Insights and Engineering Perspectives.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Practical thinking on custom ERP systems, AI automation, high-converting digital commerce, and modern cloud architecture from active practitioners.
          </p>
        </div>
      </section>

      {/* Featured Article Banner if available */}
      {featuredPost && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="rounded-3xl bg-gradient-to-br from-white via-primary-50/40 to-slate-50 text-slate-900 p-8 sm:p-12 border border-slate-200/90 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-yellow/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="max-w-3xl relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-bold border border-primary-200">
                  Featured Insight
                </span>
                <span className="text-xs text-slate-600 font-medium">
                  {featuredPost.category}
                </span>
                <span className="text-xs text-slate-400">&bull;</span>
                <span className="text-xs text-slate-600 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-brand-yellow" />
                  {featuredPost.readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl xl:text-4xl font-extrabold text-slate-950 leading-tight mb-4 group-hover:text-primary-700 transition-colors">
                <Link href={`/blog/${featuredPost.slug}`}>
                  {featuredPost.title}
                </Link>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                {featuredPost.excerpt}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-xs shadow-sm">
                    {featuredPost.author?.initials || "SE"}
                  </div>
                  <div className="text-xs">
                    <div className="font-bold text-slate-950">{featuredPost.author?.name || "SmartEdge Engineering"}</div>
                    <div className="text-slate-500">{featuredPost.author?.role || "Engineering Team"}</div>
                  </div>
                </div>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-primary-700 hover:text-primary-800"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 text-primary-700" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Controls Bar: Search & Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          {/* Search Input */}
          <div className="relative flex-grow max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles by topic, keyword, or tag..."
              className="w-full bg-slate-50 border border-slate-200 rounded-full pl-11 pr-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary-500 focus:bg-white transition-colors"
            />
          </div>

          <div className="text-xs font-semibold text-slate-500 flex items-center gap-1.5 self-center">
            <Filter className="w-3.5 h-3.5 text-primary-500" />
            <span>Showing {filteredPosts.length} articles</span>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-6 mb-10">
          {blogCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-primary-500 text-white shadow-md shadow-primary-500/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.slug}
              className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-primary-200 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold text-primary-600 bg-primary-50 px-2.5 py-0.5 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary-600 transition-colors mb-3 leading-snug">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {post.tags.slice(0, 3).map((tag: string, tIdx: number) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[11px] font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="text-xs text-slate-500">
                  By <span className="font-semibold text-slate-800">{post.author?.name || post.author || "SmartEdge Engineering"}</span>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-primary-600 hover:text-primary-700"
                >
                  <span>Read</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
