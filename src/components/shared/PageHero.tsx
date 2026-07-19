"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

interface PageHeroProps {
  title: string;
  highlightedText?: string;
  description: string;
  badgeText?: string;
}

export default function PageHero({
  title,
  highlightedText,
  description,
  badgeText = "MOH Compliant · Malaysia",
}: PageHeroProps) {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as const } },
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-50">
      {/* Subtle background photo */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1579165466991-467135ad3110?w=1600&q=40&auto=format&fit=crop"
          alt=""
          fill
          className="object-cover opacity-[0.06]"
          sizes="100vw"
        />
      </div>

      {/* Teal accent bar at top */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-teal-500 to-cyan-400" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Badge */}
          {badgeText && (
            <motion.div variants={item} className="mb-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-200">
                <ShieldCheck className="h-4 w-4 text-teal-600" />
                <span className="text-sm font-semibold text-teal-700">{badgeText}</span>
              </div>
            </motion.div>
          )}

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-5 leading-[1.08]"
          >
            {title}{" "}
            {highlightedText && <span className="gradient-text">{highlightedText}</span>}
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={item}
            className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
