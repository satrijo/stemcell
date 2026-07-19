"use client";

import { motion } from "framer-motion";
import { BadgeCheck, MapPin } from "lucide-react";

const hospitals = [
  {
    name: "Gleneagles Kuala Lumpur",
    location: "Kuala Lumpur",
    type: "Private Tertiary",
    jci: true,
    msqh: true,
    specialties: ["Oncology", "Regenerative Medicine", "Orthopaedics"],
    beds: "300+",
  },
  {
    name: "Prince Court Medical Centre",
    location: "Kuala Lumpur",
    type: "International Hospital",
    jci: true,
    msqh: true,
    specialties: ["Cell Therapy", "Neurology", "Cardiology"],
    beds: "260+",
  },
  {
    name: "Subang Jaya Medical Centre",
    location: "Selangor",
    type: "Private Tertiary",
    jci: false,
    msqh: true,
    specialties: ["Stem Cell Therapy", "Sports Medicine", "Immunology"],
    beds: "400+",
  },
  {
    name: "Pantai Hospital Kuala Lumpur",
    location: "Kuala Lumpur",
    type: "Private General",
    jci: true,
    msqh: true,
    specialties: ["Anti-Aging", "Hair Restoration", "Dermatology"],
    beds: "450+",
  },
  {
    name: "KPJ Damansara Specialist",
    location: "Petaling Jaya",
    type: "Specialist Centre",
    jci: false,
    msqh: true,
    specialties: ["Orthopaedics", "Regenerative Medicine"],
    beds: "200+",
  },
  {
    name: "Penang Adventist Hospital",
    location: "Penang",
    type: "Private General",
    jci: true,
    msqh: false,
    specialties: ["Cell Therapy", "Internal Medicine"],
    beds: "320+",
  },
];

const initials = (name: string) =>
  name
    .split(" ")
    .filter((w) => w.length > 2)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

export default function PartnerHospitals() {
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
            Partner Network
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Treatments delivered at{" "}
            <span className="gradient-text">accredited facilities</span>
          </h2>
          <p className="text-slate-500 text-base">
            We partner exclusively with MOH-licensed hospitals and specialist clinics — many holding JCI and MSQH dual accreditation.
          </p>
        </motion.div>

        {/* Hospital Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.09 },
            },
          }}
        >
          {hospitals.map((h, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
              }}
              className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-teal-100 transition-all group"
            >
              {/* Top row: logo abbr + badges */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-teal-600 flex items-center justify-center text-white font-black text-base shrink-0">
                  {initials(h.name)}
                </div>
                <div className="flex items-center gap-1.5 flex-wrap justify-end">
                  {h.jci && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-sky-50 border border-sky-100 text-sky-600 text-xs font-bold">
                      <BadgeCheck className="w-3 h-3" />
                      JCI
                    </span>
                  )}
                  {h.msqh && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-teal-50 border border-teal-100 text-teal-600 text-xs font-bold">
                      <BadgeCheck className="w-3 h-3" />
                      MSQH
                    </span>
                  )}
                </div>
              </div>

              {/* Name + location */}
              <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors mb-1">
                {h.name}
              </h3>
              <div className="flex items-center gap-1 text-xs text-slate-500 mb-1">
                <MapPin className="w-3 h-3" />
                {h.location}
              </div>
              <div className="text-xs text-slate-400 mb-4">{h.type} · {h.beds} beds</div>

              {/* Specialties */}
              <div className="flex flex-wrap gap-1.5">
                {h.specialties.map((s, j) => (
                  <span
                    key={j}
                    className="px-2 py-0.5 rounded-full bg-slate-50 border border-slate-100 text-xs font-medium text-slate-600"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-10"
        >
          <p className="text-sm text-slate-400 mb-4">
            Network spans 40+ facilities across Peninsular Malaysia and East Malaysia
          </p>
          <a
            href="/hospitals"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700 hover:underline transition-colors"
          >
            View all partner hospitals →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
