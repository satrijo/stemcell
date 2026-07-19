"use client";

import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2, Lock, AlertTriangle } from "lucide-react";

const badges = [
  { name: "MOH Licensed", sub: "Ministry of Health Malaysia" },
  { name: "GMP Certified", sub: "Good Manufacturing Practice" },
  { name: "ISO 9001", sub: "Quality Management System" },
  { name: "JCI Accredited", sub: "Joint Commission International" },
  { name: "JAKIM Halal", sub: "For eligible treatments" },
  { name: "MSQH Accredited", sub: "Malaysian Society for Quality in Health" },
];

const checkpoints = [
  "All partner clinics hold active MOH Cell Therapy Centre (CTC) certification",
  "Donor screening includes full infectious disease panel per FACT/JACIE standards",
  "Cell processing performed in ISO Class 7 cleanroom environments",
  "Post-treatment monitoring protocol included with every treatment plan",
  "Adverse event reporting integrated with MOH pharmacovigilance system",
  "Independent ethics committee review for all experimental protocols",
];

export default function SafetySection() {
  return (
    <section className="relative py-24 overflow-hidden bg-slate-50">
      {/* subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, #0d9488 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-200 mb-6"
          >
            <ShieldCheck className="h-4 w-4 text-teal-600" />
            <span className="text-sm font-semibold text-teal-700">Safety & Compliance</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-5"
          >
            Your safety is our{" "}
            <span className="gradient-text">non-negotiable</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-base text-slate-500 leading-relaxed"
          >
            Every clinic in our network meets a comprehensive multi-layer safety standard before
            we recommend them to patients. No exceptions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left: accreditation badges */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center">
                <Lock className="h-5 w-5 text-teal-600" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Accreditations & Certifications</h3>
                <p className="text-xs text-slate-500">Required of every partner clinic</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {badges.map((badge, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="flex flex-col items-center text-center bg-slate-50 border border-slate-100 rounded-2xl p-4 hover:border-teal-200 hover:bg-teal-50/40 transition-all"
                >
                  <CheckCircle2 className="h-5 w-5 text-teal-500 mb-2" />
                  <span className="text-sm font-bold text-slate-900 mb-0.5">{badge.name}</span>
                  <span className="text-[10px] text-slate-500 leading-tight">{badge.sub}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: checklist */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-slate-900 rounded-3xl p-8 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-teal-600/20 border border-teal-600/30 flex items-center justify-center">
                <AlertTriangle className="h-5 w-5 text-teal-400" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Our Safety Checklist</h3>
                <p className="text-xs text-slate-400">Applied to every partner, every year</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {checkpoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.07, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="h-4 w-4 text-teal-400 mt-0.5 shrink-0" />
                  <p className="text-sm text-slate-300 leading-relaxed">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
