"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Microscope, Receipt, Scale, Stethoscope } from "lucide-react";

const patientChecks = [
  {
    title: "Current Regulation",
    description: "Verify the legal status and specific MOH guidelines for the proposed therapy.",
    icon: Scale,
    color: "bg-teal-50 text-teal-600 border-teal-100",
    href: "/is-stem-cell-therapy-legal-malaysia/",
  },
  {
    title: "Clinician Credentials",
    description: "Ensure the treating physician has recognized specialized training and credentials.",
    icon: Stethoscope,
    color: "bg-sky-50 text-sky-600 border-sky-100",
    href: "/verify-stem-cell-clinic-malaysia/",
  },
  {
    title: "Cell Source & Lab",
    description: "Request transparency on where cells are sourced and the processing laboratory standards.",
    icon: Microscope,
    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    href: "/verify-stem-cell-clinic-malaysia/",
  },
  {
    title: "Itemised Costs",
    description: "Demand clear breakdowns of treatment costs and long-term follow-up expenses.",
    icon: Receipt,
    color: "bg-violet-50 text-violet-600 border-violet-100",
    href: "/stem-cell-therapy-cost-malaysia/",
  },
];

export default function WhyMalaysia() {
  return (
    <section className="relative py-24 overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: editorial photo panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative rounded-3xl overflow-hidden min-h-[460px] shadow-sm border border-slate-100"
          >
            <Image
              src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=85&auto=format&fit=crop"
              alt="Kuala Lumpur cityscape showing medical infrastructure"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
            {/* dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />

            {/* text overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="text-xs font-bold text-teal-300 tracking-widest uppercase mb-2 block">
                Patient Decision Guide
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-3">
                Navigating Options in{" "}
                <span className="font-serif italic font-medium text-teal-300">Malaysia</span>
              </h2>
              <p className="text-sm text-white/80 leading-relaxed max-w-sm">
                Before proceeding with any regenerative therapy, patients should systematically verify the legal standing, medical credentials, and associated costs.
              </p>
            </div>
          </motion.div>

          {/* Right: 2x2 checks bento */}
          <motion.div
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
          >
            {patientChecks.map((check, i) => {
              const Icon = check.icon;
              return (
                <Link key={i} href={check.href} className="block group">
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    }}
                    className="h-full bg-white border border-slate-100 rounded-2xl p-7 shadow-sm transition-all flex flex-col gap-4 hover:border-teal-200 hover:shadow-md"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${check.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-teal-700 transition-colors">{check.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{check.description}</p>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
