"use client";

import { motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

const treatments = [
  { name: "Stem Cell Therapy (Joint)", us: "$15,000–$50,000", europe: "$12,000–$40,000", thailand: "$8,000–$20,000", malaysia: "$4,000–$10,000" },
  { name: "Anti-Aging IV Infusion", us: "$5,000–$15,000", europe: "$4,000–$12,000", thailand: "$2,500–$8,000", malaysia: "$1,500–$4,000" },
  { name: "Autoimmune Treatment", us: "$20,000–$80,000", europe: "$18,000–$60,000", thailand: "$10,000–$30,000", malaysia: "$5,000–$15,000" },
  { name: "Hair Restoration", us: "$8,000–$25,000", europe: "$6,000–$20,000", thailand: "$4,000–$12,000", malaysia: "$2,000–$6,000" },
];

const features = [
  { label: "MOH Regulation", us: true, europe: true, thailand: false, malaysia: true },
  { label: "English-speaking Specialists", us: true, europe: false, thailand: false, malaysia: true },
  { label: "JCI Accredited Hospitals", us: true, europe: true, thailand: false, malaysia: true },
  { label: "Free Initial Consultation", us: false, europe: false, thailand: false, malaysia: true },
];

const columns = [
  { key: "us", label: "USA", flag: "🇺🇸", highlight: false },
  { key: "europe", label: "Europe", flag: "🇪🇺", highlight: false },
  { key: "thailand", label: "Thailand", flag: "🇹🇭", highlight: false },
  { key: "malaysia", label: "Malaysia", flag: "🇲🇾", highlight: true },
];

type ColumnKey = "us" | "europe" | "thailand" | "malaysia";

export default function CostComparison() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-bold tracking-widest uppercase mb-4">
            Cost Comparison
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            World-class care at a{" "}
            <span className="gradient-text">fraction of the cost</span>
          </h2>
          <p className="text-slate-500 text-base">
            Malaysia delivers internationally accredited stem cell therapy at 40–70% less than Western countries — without compromising on quality or safety.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white"
        >
          <table className="w-full min-w-[640px]">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="text-left text-sm font-semibold text-slate-500 px-6 py-5 w-1/3">
                  Treatment
                </th>
                {columns.map((col) => (
                  <th
                    key={col.key}
                    className={`text-center px-4 py-5 ${
                      col.highlight
                        ? "bg-teal-600 text-white rounded-t-xl"
                        : "text-slate-600"
                    }`}
                  >
                    <div className="text-xl mb-1">{col.flag}</div>
                    <div className={`text-sm font-bold ${col.highlight ? "text-white" : "text-slate-800"}`}>
                      {col.label}
                    </div>
                    {col.highlight && (
                      <div className="text-xs font-semibold text-teal-100 mt-0.5">Best Value</div>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {treatments.map((row, i) => (
                <tr key={i} className="hover:bg-slate-50/60 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-slate-800">{row.name}</td>
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      className={`text-center px-4 py-4 text-sm font-semibold ${
                        col.highlight
                          ? "bg-teal-50 text-teal-700"
                          : "text-slate-600"
                      }`}
                    >
                      {row[col.key as ColumnKey]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Feature Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white"
        >
          <table className="w-full min-w-[640px]">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="text-left text-sm font-semibold text-slate-500 px-6 py-4 w-1/3">
                  Included Benefits
                </th>
                {columns.map((col) => (
                  <th
                    key={col.key}
                    className={`text-center px-4 py-4 text-sm font-bold ${
                      col.highlight ? "text-teal-700" : "text-slate-500"
                    }`}
                  >
                    {col.flag} {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {features.map((feat, i) => (
                <tr key={i} className="hover:bg-slate-50/60 transition-colors">
                  <td className="px-6 py-3.5 text-sm text-slate-700">{feat.label}</td>
                  {columns.map((col) => {
                    const val = feat[col.key as ColumnKey] as boolean;
                    return (
                      <td key={col.key} className={`text-center px-4 py-3.5 ${col.highlight ? "bg-teal-50" : ""}`}>
                        {val ? (
                          <CheckCircle2 className="w-5 h-5 text-teal-500 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-slate-300 mx-auto" />
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* CTA note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-8"
        >
          <p className="text-sm text-slate-400">
            Prices are indicative. Exact costs depend on treatment protocol.{" "}
            <a href="/contact" className="text-teal-600 font-semibold hover:underline">
              Get a personalised quote →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
