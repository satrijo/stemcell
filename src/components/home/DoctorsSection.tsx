"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck } from "lucide-react";

const doctors = [
  {
    name: "Dr. Ahmad Faizal",
    specialty: "Regenerative Medicine Specialist",
    experience: "18 years experience",
    languages: "Languages: English, Bahasa Malaysia",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80&auto=format&fit=crop&facepad=3"
  },
  {
    name: "Dr. Priya Nair",
    specialty: "Cellular Biology & Immunotherapy",
    experience: "14 years experience",
    languages: "Languages: English, Tamil, Mandarin",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80&auto=format&fit=crop&facepad=3"
  },
  {
    name: "Dr. Chen Wei Long",
    specialty: "Hematology & Transplant Medicine",
    experience: "22 years experience",
    languages: "Languages: English, Mandarin, Cantonese",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&q=80&auto=format&fit=crop&facepad=3"
  }
];

export default function DoctorsSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold text-teal-600 tracking-widest uppercase mb-3 block"
          >
            World-Class Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4"
          >
            Meet Our Specialists
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base text-slate-600"
          >
            Board-certified regenerative medicine specialists with decades of clinical experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col"
            >
              <div className="relative w-full aspect-[3/4] shrink-0">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 text-xs font-bold text-teal-700 flex items-center gap-1.5 shadow-sm">
                  <BadgeCheck className="w-4 h-4" />
                  MOH Certified
                </div>
              </div>
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{doctor.name}</h3>
                
                <div className="mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-teal-50 text-xs font-semibold text-teal-700 border border-teal-100">
                    {doctor.specialty}
                  </span>
                </div>
                
                <div className="flex flex-col gap-1 text-sm text-slate-500 mb-4 flex-1">
                  <span>{doctor.experience}</span>
                  <span>{doctor.languages}</span>
                </div>
                
                <Link
                  href="/consultation/"
                  className="inline-flex items-center gap-1.5 text-teal-600 font-semibold text-sm mt-4 hover:text-teal-700 transition-colors group w-fit"
                >
                  Book Consultation <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
