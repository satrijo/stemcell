"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "10,000+", label: "Patients Guided" },
  { value: "MOH", label: "Regulated Framework" },
  { value: "15+", label: "Verified Conditions" },
  { value: "Free", label: "Consultation Available" },
];

export default function TrustBar() {
  return (
    <section className="bg-white py-16 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-sm font-semibold text-slate-500 tracking-wider uppercase mb-10">
            Trusted by patients across Malaysia
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center pt-8 lg:pt-0 first:pt-0"
              >
                <span className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 gradient-text-green">
                  {stat.value}
                </span>
                <span className="text-slate-600 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
