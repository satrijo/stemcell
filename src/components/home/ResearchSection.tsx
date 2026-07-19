"use client";

import { motion } from "framer-motion";
import { FlaskConical, BookOpen, Microscope, Award } from "lucide-react";

const pillars = [
  {
    icon: FlaskConical,
    title: "Peer-Reviewed Science",
    description:
      "Every protocol we recommend is grounded in published, peer-reviewed clinical research from accredited journals.",
    color: "bg-teal-50 text-teal-600 border-teal-100",
  },
  {
    icon: Microscope,
    title: "GMP-Grade Cell Processing",
    description:
      "All stem cell preparations are processed in ISO-certified GMP laboratories meeting international pharmaceutical standards.",
    color: "bg-sky-50 text-sky-600 border-sky-100",
  },
  {
    icon: BookOpen,
    title: "Transparent Outcomes",
    description:
      "We publish treatment outcome data openly — because informed patients make better decisions about their health.",
    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
  },
  {
    icon: Award,
    title: "Accredited Partners Only",
    description:
      "Every clinic and hospital in our network holds MOH licensure and relevant international accreditation.",
    color: "bg-violet-50 text-violet-600 border-violet-100",
  },
];

const publications = [
  { journal: "Nature Medicine", year: "2023", topic: "MSC therapy in autoimmune disorders" },
  { journal: "The Lancet", year: "2023", topic: "Safety profile of allogeneic stem cell transplantation" },
  { journal: "NEJM", year: "2022", topic: "Cartilage regeneration outcomes — 3-year follow-up" },
  { journal: "Cell Stem Cell", year: "2024", topic: "Anti-aging mechanisms of senolytic therapy" },
];

export default function ResearchSection() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold text-teal-600 tracking-widest uppercase mb-3 block"
          >
            Science & Evidence
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-5"
          >
            Built on rigorous{" "}
            <span className="gradient-text">clinical science</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base text-slate-500 leading-relaxed"
          >
            We do not recommend unproven therapies. Every treatment pathway on our platform is
            supported by clinical evidence, regulatory compliance, and transparent outcomes data.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left: 4 pillar cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:shadow-md hover:border-teal-100 transition-all"
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center border mb-4 ${pillar.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{pillar.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{pillar.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Right: publication ticker */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="bg-slate-900 rounded-3xl p-8 h-full">
              <p className="text-xs font-bold text-teal-400 tracking-widest uppercase mb-6">
                Key Publications
              </p>
              <div className="flex flex-col gap-5">
                {publications.map((pub, i) => (
                  <div key={i} className="flex items-start gap-4 pb-5 border-b border-slate-700/60 last:border-0 last:pb-0">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-teal-600/20 flex items-center justify-center">
                      <BookOpen className="w-4 h-4 text-teal-400" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-bold text-white">{pub.journal}</span>
                        <span className="text-xs text-slate-500">{pub.year}</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">{pub.topic}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-slate-700/60">
                <p className="text-xs text-slate-500 leading-relaxed">
                  Our medical advisory board reviews emerging literature quarterly to ensure
                  all platform recommendations remain evidence-based.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
