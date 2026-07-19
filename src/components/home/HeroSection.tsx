"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Activity, Bone, Brain, ShieldCheck, Sparkles } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as const } },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-white">
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full flex flex-col gap-12 pt-32 lg:pt-20">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            {/* Badge */}
            <motion.div variants={item} className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-600">
                <ShieldCheck className="h-4 w-4 text-teal-600" />
                <span className="text-sm font-semibold text-teal-700">Educational Resource · Malaysia</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="text-6xl md:text-7xl font-black tracking-tight text-slate-900 mb-6 leading-[1.0]"
              style={{ textWrap: "balance" }}
            >
              Stem Cell Therapy <span className="font-serif italic font-medium text-teal-700">in Malaysia</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={item}
              className="text-xl text-slate-600 mb-8 leading-relaxed"
              style={{ textWrap: "pretty" }}
            >
              Independent guidance on regenerative medicine. Learn how to evaluate treatments, verify clinic safety, and navigate the clinical landscape in Malaysia.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/stem-cell-education/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-teal-600 focus-visible:outline-offset-4 text-lg"
              >
                Start Learning
              </Link>
              <Link
                href="/verify-stem-cell-clinic-malaysia/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-800 font-semibold hover:border-teal-300 hover:text-teal-700 transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-teal-600 focus-visible:outline-offset-4 text-lg"
              >
                Verify a Clinic
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column (Editorial Photo) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="hidden lg:block relative h-[640px] w-full"
          >
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-sm border border-slate-100">
              <div className="absolute inset-0 bg-teal-900/10 mix-blend-multiply z-10 rounded-3xl pointer-events-none" />
              <Image 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&q=85&auto=format&fit=crop"
                alt="Research laboratory setting with advanced medical equipment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Popular Topics Shortcut Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-5 flex flex-col md:flex-row items-center gap-4 md:gap-6 mt-4"
        >
          <span className="text-sm font-bold text-slate-700 uppercase tracking-wider shrink-0">
            Learn About:
          </span>
          <div className="flex flex-wrap items-center gap-3">
            <Link 
              href="/stem-cell-therapy-knee-malaysia/"
              className="flex items-center gap-2 rounded-full bg-white border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-teal-400 hover:text-teal-700 transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-teal-600 focus-visible:outline-offset-2"
            >
              <Bone className="w-4 h-4" /> Joint & Orthopedics
            </Link>
            <Link 
              href="/what-is-stem-cell-therapy/"
              className="flex items-center gap-2 rounded-full bg-white border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-teal-400 hover:text-teal-700 transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-teal-600 focus-visible:outline-offset-2"
            >
              <Activity className="w-4 h-4" /> How It Works
            </Link>
            <Link 
              href="/stem-cell-therapy-cost-malaysia/"
              className="flex items-center gap-2 rounded-full bg-white border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-teal-400 hover:text-teal-700 transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-teal-600 focus-visible:outline-offset-2"
            >
              <Sparkles className="w-4 h-4" /> Cost & Factors
            </Link>
            <Link 
              href="/stem-cell-research-malaysia/"
              className="flex items-center gap-2 rounded-full bg-white border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-teal-400 hover:text-teal-700 transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-teal-600 focus-visible:outline-offset-2"
            >
              <Brain className="w-4 h-4" /> Current Research
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
