"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  {
    value: "Vary",
    label: "Treatment Outcomes",
    sub: "Depending on condition & protocol",
    color: "from-teal-500 to-teal-600",
  },
  {
    value: "MOH",
    label: "Regulated Framework",
    sub: "National oversight applies",
    color: "from-sky-500 to-sky-600",
  },
  {
    value: "Active",
    label: "Clinical Research",
    sub: "Ongoing trials in Malaysia",
    color: "from-teal-600 to-emerald-600",
  },
  {
    value: "Learn",
    label: "Before Treating",
    sub: "Evidence-based education first",
    color: "from-sky-600 to-teal-500",
  },
];

export default function StatsSection() {
  return (
    <section className="relative py-0 overflow-hidden">
      {/* Split layout: dark left panel + photo right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[420px]">

        {/* Left: dark slate panel with stats */}
        <div className="bg-slate-900 relative flex items-center">
          {/* subtle teal accent line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 to-teal-600" />

          <div className="w-full px-10 lg:px-16 py-16">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-bold text-teal-400 tracking-widest uppercase mb-8"
            >
              Understand The Landscape
            </motion.p>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="flex flex-col"
                >
                  <span className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                    {stat.value}
                  </span>
                  <span className="text-sm font-bold text-white mb-0.5">{stat.label}</span>
                  <span className="text-xs text-slate-400">{stat.sub}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: clinic photo with overlay quote */}
        <div className="relative hidden lg:block">
          <Image
            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=900&q=85&auto=format&fit=crop"
            alt="Medical professional examining laboratory samples"
            fill
            className="object-cover"
            sizes="50vw"
          />
          {/* dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-slate-900/30 to-slate-900/60" />

          {/* Floating card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute bottom-10 left-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-slate-100"
          >
            <p className="text-sm text-slate-600 italic leading-relaxed mb-3">
              &ldquo;Regenerative medicine is evolving rapidly. We encourage patients to seek treatments that are part of verified clinical trials or strict regulatory frameworks.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center shrink-0">
                <span className="text-white text-xs font-bold">i</span>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Safety & Efficacy</p>
                <p className="text-xs text-slate-500">A patient-first approach</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
