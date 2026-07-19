"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, CheckCircle2 } from "lucide-react";

const cases = [
  {
    condition: "Knee Osteoarthritis",
    tag: "Joint Regeneration",
    before: {
      label: "Before",
      points: ["Chronic daily pain (8/10)", "Unable to climb stairs", "Avoided walking >200m", "Failed 3 cortisone courses"],
    },
    after: {
      label: "3 Months After",
      points: ["Pain reduced to 1–2/10", "Full stair mobility restored", "Walking 5km daily", "No further injections needed"],
    },
    improvement: "80% Pain Reduction",
    duration: "3 months",
    patient: "Male, 62 — Kuala Lumpur",
  },
  {
    condition: "Autoimmune Flares",
    tag: "Systemic Therapy",
    before: {
      label: "Before",
      points: ["Weekly flare-ups", "Chronic fatigue & joint swelling", "High-dose immunosuppressants", "Disrupted sleep & work life"],
    },
    after: {
      label: "6 Months After",
      points: ["Flare frequency down 90%", "Energy fully restored", "Medication dose halved", "Returned to full-time work"],
    },
    improvement: "90% Flare Reduction",
    duration: "6 months",
    patient: "Female, 41 — Penang",
  },
  {
    condition: "Hair Loss (Alopecia)",
    tag: "Scalp Regeneration",
    before: {
      label: "Before",
      points: ["60% scalp coverage lost", "Patchy thinning crown", "Failed topical & oral treatments", "Significant confidence impact"],
    },
    after: {
      label: "6 Months After",
      points: ["Dense regrowth across crown", "Natural hairline restored", "No ongoing medication", "Sustained at 12-month review"],
    },
    improvement: "Full Regrowth",
    duration: "6 months",
    patient: "Male, 35 — Johor Bahru",
  },
];

export default function BeforeAfterSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-bold tracking-widest uppercase mb-4">
            Clinical Outcomes
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Documented results,{" "}
            <span className="gradient-text">real patients</span>
          </h2>
          <p className="text-slate-500 text-base">
            Every case below is drawn from verified patient records under MOH-regulated protocols.
            Results are individual and may vary.
          </p>
        </motion.div>

        {/* Case Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.12 }}
              className="bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Card Header */}
              <div className="bg-teal-600 px-5 py-4">
                <span className="text-xs font-bold text-teal-100 tracking-widest uppercase">
                  {c.tag}
                </span>
                <h3 className="text-lg font-extrabold text-white mt-1">{c.condition}</h3>
                <div className="flex items-center gap-3 mt-2">
                  <span className="flex items-center gap-1 text-teal-100 text-xs font-semibold">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {c.improvement}
                  </span>
                  <span className="flex items-center gap-1 text-teal-100 text-xs font-semibold">
                    <Clock className="w-3.5 h-3.5" />
                    {c.duration}
                  </span>
                </div>
              </div>

              {/* Before / After */}
              <div className="grid grid-cols-2 divide-x divide-slate-200 p-5 gap-0">
                {/* Before */}
                <div className="pr-4">
                  <div className="text-xs font-bold text-rose-500 tracking-wider uppercase mb-2">
                    {c.before.label}
                  </div>
                  <ul className="space-y-1.5">
                    {c.before.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-1.5 text-xs text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-300 mt-1.5 shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* After */}
                <div className="pl-4">
                  <div className="text-xs font-bold text-teal-600 tracking-wider uppercase mb-2">
                    {c.after.label}
                  </div>
                  <ul className="space-y-1.5">
                    {c.after.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-1.5 text-xs text-slate-600">
                        <CheckCircle2 className="w-3 h-3 text-teal-500 mt-0.5 shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Patient Note */}
              <div className="px-5 pb-4 border-t border-slate-100 pt-3">
                <p className="text-xs text-slate-400 font-medium">{c.patient}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center text-xs text-slate-400 mt-8"
        >
          All treatments performed under MOH-licensed facilities. Individual results may vary.
        </motion.p>
      </div>
    </section>
  );
}
