"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TrendingUp, Users, Clock, Award } from "lucide-react";

const outcomes = [
  {
    metric: "87%",
    label: "Report reduced pain",
    sub: "within 3 months of treatment",
    icon: TrendingUp,
    color: "teal",
  },
  {
    metric: "10,000+",
    label: "Patients treated",
    sub: "across verified Malaysian clinics",
    icon: Users,
    color: "sky",
  },
  {
    metric: "< 3 days",
    label: "Average hospital stay",
    sub: "minimally invasive procedures",
    icon: Clock,
    color: "teal",
  },
  {
    metric: "94%",
    label: "Patient satisfaction",
    sub: "based on 6-month follow-up surveys",
    icon: Award,
    color: "sky",
  },
];

const caseStudies = [
  {
    condition: "Knee Osteoarthritis",
    result: "Avoided total knee replacement",
    duration: "12-week outcome",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80&auto=format&fit=crop",
    age: "58, Kuala Lumpur",
  },
  {
    condition: "Neurological Recovery",
    result: "Regained 70% motor function",
    duration: "6-month outcome",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80&auto=format&fit=crop",
    age: "44, Penang",
  },
  {
    condition: "Anti-Aging Therapy",
    result: "Measurable cellular regeneration",
    duration: "8-week outcome",
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80&auto=format&fit=crop",
    age: "62, Johor Bahru",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function OutcomesSection() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-200"
          >
            <TrendingUp className="h-4 w-4 text-teal-600" />
            <span className="text-sm font-semibold text-teal-700">Clinical Outcomes Data</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight"
          >
            Results that speak{" "}
            <span className="gradient-text">for themselves</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-slate-600"
          >
            Aggregated outcomes from verified patients treated at MOH-certified
            clinics across Malaysia. Updated quarterly.
          </motion.p>
        </div>

        {/* Metrics grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {outcomes.map((o) => {
            const Icon = o.icon;
            return (
              <motion.div
                key={o.metric}
                variants={itemVariants}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col gap-3"
              >
                <span
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    o.color === "teal"
                      ? "bg-teal-50 text-teal-600"
                      : "bg-sky-50 text-sky-600"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p
                    className={`text-3xl font-black mb-0.5 ${
                      o.color === "teal" ? "text-teal-600" : "text-sky-600"
                    }`}
                  >
                    {o.metric}
                  </p>
                  <p className="text-sm font-bold text-slate-800">{o.label}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{o.sub}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Case study cards */}
        <div className="mb-8">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">
            Featured patient outcomes
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {caseStudies.map((cs) => (
              <motion.div
                key={cs.condition}
                variants={itemVariants}
                className="group relative rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Photo */}
                <div className="relative h-48 w-full">
                  <Image
                    src={cs.image}
                    alt={cs.condition}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
                  {/* Duration badge */}
                  <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-xs font-bold text-teal-700 px-2.5 py-1 rounded-full">
                    {cs.duration}
                  </span>
                </div>

                {/* Copy */}
                <div className="p-5 bg-white">
                  <p className="text-xs font-bold uppercase tracking-wider text-teal-600 mb-1">
                    {cs.condition}
                  </p>
                  <p className="text-base font-bold text-slate-900 mb-1.5">
                    {cs.result}
                  </p>
                  <p className="text-xs text-slate-400">Patient, {cs.age}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-slate-400 text-center max-w-2xl mx-auto leading-relaxed">
          * Results vary by individual condition, health status, and treatment protocol.
          All outcome data is collected from consented patients. Stem cell therapy is
          not a guaranteed cure. Consult a qualified physician before pursuing treatment.
        </p>

      </div>
    </section>
  );
}
