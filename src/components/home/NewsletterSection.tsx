"use client";

import { motion } from "framer-motion";
import { Mail, ShieldCheck, Bell, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

const benefits = [
  { icon: Bell, label: "Information updates" },
  { icon: FileText, label: "Clinical research digests" },
  { icon: ShieldCheck, label: "Regulatory news" },
];

export default function NewsletterSection() {
  return (
    <section className="bg-slate-900 py-20 overflow-hidden relative">
      {/* Subtle teal glow top-left */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-teal-600/10 blur-3xl pointer-events-none" />
      {/* Subtle teal glow bottom-right */}
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-teal-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30">
              <Mail className="h-4 w-4 text-teal-400" />
              <span className="text-sm font-semibold text-teal-400">Monthly Briefing</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
              Stay ahead of the{" "}
              <span className="text-teal-400">science</span>
            </h2>

            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Explore curated updates on stem cell research and Malaysian regulatory news.
              An informational resource for patients and professionals.
            </p>

            <ul className="flex flex-col gap-3">
              {benefits.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
                    <Icon className="h-4 w-4 text-teal-400" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right — resource links */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-10">
              <p className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-6">
                Educational Resources
              </p>

              <div className="flex flex-col gap-4">
                <Link
                  href="/stem-cell-research-malaysia/"
                  className="group flex items-center justify-between p-4 rounded-xl bg-white/8 border border-white/15 hover:border-teal-500/70 hover:bg-white/10 transition-colors"
                >
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-white mb-1">Clinical Research</span>
                    <span className="text-xs text-slate-400">Explore ongoing trials and scientific literature.</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-teal-400 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/stem-cell-education/"
                  className="group flex items-center justify-between p-4 rounded-xl bg-white/8 border border-white/15 hover:border-teal-500/70 hover:bg-white/10 transition-colors"
                >
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-white mb-1">Patient Education</span>
                    <span className="text-xs text-slate-400">Understand the fundamentals of regenerative medicine.</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-teal-400 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <p className="mt-6 text-xs text-slate-500 text-center leading-relaxed">
                Access to independent, evidence-based information to empower informed choices.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
