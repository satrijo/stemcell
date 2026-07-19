"use client";

import { motion } from "framer-motion";
import { Play, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const highlights = [
  "Full walkthrough of the stem cell treatment journey",
  "Real patient testimonials — unscripted and unedited",
  "Expert commentary from our MOH-licensed medical advisors",
  "Explanation of what to expect before, during, and after treatment",
];

export default function VideoSection() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: text + highlights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-bold text-teal-600 tracking-widest uppercase mb-3 block">
              Patient Education
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
              See the journey{" "}
              <span className="gradient-text">first-hand</span>
            </h2>
            <p className="text-base text-slate-500 leading-relaxed mb-8">
              Watch our in-depth video guide produced with our partner clinics —
              covering every step of the stem cell therapy process so you can make
              an informed, confident decision.
            </p>

            <div className="flex flex-col gap-3 mb-10">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-teal-500 mt-0.5 shrink-0" />
                  <p className="text-sm text-slate-600 leading-relaxed">{h}</p>
                </div>
              ))}
            </div>

            <motion.a
              href="/consultation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors shadow-lg shadow-teal-600/20 text-sm"
            >
              Book a Free Consultation
            </motion.a>
          </motion.div>

          {/* Right: video thumbnail with play button overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video bg-slate-100 group cursor-pointer"
          >
            <Image
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=900&q=85&auto=format&fit=crop"
              alt="Stem cell treatment video tour"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* overlay */}
            <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/30 transition-colors" />

            {/* play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/95 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 text-teal-600 ml-1" />
              </div>
            </div>

            {/* bottom caption */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3">
                <p className="text-sm font-semibold text-white">Malaysia Stem Cell Treatment Tour</p>
                <p className="text-xs text-white/70 mt-0.5">12 min · Produced with partner clinics · 2024</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
