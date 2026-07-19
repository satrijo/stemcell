"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Navigating Stem Cell Regulations in Malaysia",
    excerpt:
      "An overview of current guidelines for regenerative medicine, helping patients understand the local regulatory environment before considering therapy.",
    category: "Patient Guide",
    readTime: "Read the guide",
    author: "StemCell.my editorial guide",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=75&auto=format&fit=crop",
    href: "/is-stem-cell-therapy-legal-malaysia/",
  },
  {
    title: "Understanding Stem Cell Therapy Costs in Malaysia",
    excerpt:
      "A look at the factors that influence treatment expenses, from cell sources to facility types, to help you plan your healthcare journey.",
    category: "Cost & Access",
    readTime: "Read the guide",
    author: "StemCell.my editorial guide",
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=75&auto=format&fit=crop",
    href: "/stem-cell-therapy-cost-malaysia/",
  },
  {
    title: "Mesenchymal Stem Cells: Current Clinical Perspectives",
    excerpt:
      "An educational exploration of mesenchymal stem cells, their biological mechanisms, and ongoing research into their potential applications.",
    category: "Research",
    readTime: "Read the guide",
    author: "StemCell.my editorial guide",
    img: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=75&auto=format&fit=crop",
    href: "/mesenchymal-stem-cell-therapy/",
  },
];

export default function BlogPreviewSection() {
  const featuredPost = posts[0];
  const standardPosts = posts.slice(1);

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
          <div>
            <span className="text-xs font-bold text-teal-600 tracking-widest uppercase mb-3 block">
              Latest Insights
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Editorial &amp; Research
            </h2>
          </div>
          <Link
            href="/stem-cell-education/"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 hover:text-teal-700 shrink-0 group"
          >
            View all articles <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="flex flex-col gap-8">
          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href={featuredPost.href}
              className="group flex flex-col lg:grid lg:grid-cols-2 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg overflow-hidden transition-all duration-300"
            >
              <div className="relative aspect-video lg:aspect-auto lg:h-full overflow-hidden">
                <Image
                  src={featuredPost.img}
                  alt={featuredPost.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-5">
                  <span className="inline-flex items-center text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full">
                    {featuredPost.category}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors mb-4 leading-tight">
                  {featuredPost.title}
                </h3>
                <p className="text-base text-slate-600 line-clamp-3 mb-8 leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-slate-900 mb-0.5">
                      {featuredPost.author}
                    </span>
                    <span className="text-xs text-slate-400">
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-teal-600 font-semibold text-sm">
                    Read article <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Standard Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {standardPosts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              >
                <Link
                  href={post.href}
                  className="flex flex-col h-full bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg overflow-hidden transition-all duration-300 group"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={post.img}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col flex-1">
                    <div className="mb-4">
                      <span className="inline-flex items-center text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors mb-3 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-2 mb-8 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-slate-900 mb-0.5">
                          {post.author}
                        </span>
                        <span className="text-xs text-slate-400">
                          {post.readTime}
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1 text-teal-600 font-semibold text-sm shrink-0">
                        Read article <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
