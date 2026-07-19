"use client";

import { motion } from "framer-motion";
import { MessageCircle, ClipboardList, Activity, HeartPulse } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Initial Inquiry",
    description:
      "Reach out to discuss your condition and learn about potential pathways.",
    icon: MessageCircle,
  },
  {
    number: "2",
    title: "Medical Evaluation",
    description:
      "A comprehensive medical history review is required to assess eligibility for any procedure.",
    icon: ClipboardList,
  },
  {
    number: "3",
    title: "Procedure",
    description:
      "If eligible, treatment is administered at a licensed medical facility following strict protocols.",
    icon: Activity,
  },
  {
    number: "4",
    title: "Follow-up",
    description:
      "Post-procedure monitoring to observe progress and support recovery.",
    icon: HeartPulse,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function ProcessSection() {
  return (
    <section className="bg-slate-50 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold text-slate-900 mb-4"
          >
            The Clinical Pathway
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-lg text-slate-600"
          >
            A typical journey from inquiry to post-procedure monitoring.
          </motion.p>
        </div>

        <div className="relative mt-8">
          {/* Connecting line (Desktop only) */}
          <div className="hidden lg:block absolute top-[6rem] left-[12.5%] right-[12.5%] border-t-[2px] border-dashed border-teal-200 z-0" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 relative z-10"
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col items-center text-center relative"
                >
                  <div className="bg-teal-50 rounded-xl px-3 py-2 mb-4 text-teal-600 inline-flex items-center justify-center relative z-10 border border-teal-100">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="w-20 h-20 rounded-full bg-white border border-teal-200 text-teal-700 font-black text-2xl flex items-center justify-center ring-4 ring-white mb-6 relative z-10 shadow-sm">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 relative z-10">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed px-2 relative z-10">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
