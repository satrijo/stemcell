"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Search } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative bg-teal-600 py-24 overflow-hidden">
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Background photo blend */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&q=60&auto=format&fit=crop"
          alt=""
          fill
          className="object-cover opacity-10 mix-blend-luminosity"
          sizes="100vw"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm">
            <Search className="h-4 w-4 text-white" />
            <span className="text-sm font-semibold text-white">Find Your Path</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            Continue learning about your options
          </h2>

          <p className="text-lg text-teal-50 mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you are just starting your research or ready to speak with a provider,
            explore our resources to help guide your decision.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/consultation"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-teal-700 font-bold text-base hover:bg-teal-50 transition-colors shadow-xl shadow-teal-900/20 group focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4"
            >
              Consultation Information
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/stem-cell-education/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-transparent border-2 border-white/50 text-white font-semibold text-base hover:border-white hover:bg-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4"
            >
              <BookOpen className="h-4 w-4" />
              Education Hub
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-teal-100">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
              Independent resources
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
              Focused on Malaysia
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
              Educational guidance
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
