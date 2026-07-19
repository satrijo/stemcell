"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, BadgeCheck, Star } from "lucide-react";

const accreditations = [
  {
    icon: ShieldCheck,
    name: "Independent Guide",
    sub: "Unbiased Patient Navigation",
    color: "teal",
  },
  {
    icon: Award,
    name: "Evidence-Based",
    sub: "Scientific Literacy First",
    color: "sky",
  },
  {
    icon: BadgeCheck,
    name: "Safety Focused",
    sub: "Risk & Protocol Awareness",
    color: "teal",
  },
  {
    icon: Star,
    name: "Cost Transparent",
    sub: "Understanding Financial Factors",
    color: "sky",
  },
  {
    icon: ShieldCheck,
    name: "Patient Centric",
    sub: "Empowering Informed Choices",
    color: "teal",
  },
];

export default function AwardsStrip() {
  return (
    <section className="bg-white py-12 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-xs font-bold text-slate-400 tracking-widest uppercase">
            Our Commitment to Patients
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 md:gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08 },
            },
          }}
        >
          {accreditations.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
                className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-xl px-5 py-3.5 hover:border-teal-200 hover:shadow-sm transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0 group-hover:bg-teal-100 transition-colors">
                  <Icon className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-800">{item.name}</div>
                  <div className="text-xs text-slate-500 leading-tight">{item.sub}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
