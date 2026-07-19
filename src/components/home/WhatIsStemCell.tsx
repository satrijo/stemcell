"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, FlaskConical } from "lucide-react";

const points = [
  "Master cells that can generate specialized tissue",
  "Subject to guidelines by Malaysia's Ministry of Health (MOH)",
  "Sourced from your own body (autologous) or matched donors",
  "Supported by ongoing peer-reviewed clinical research"
];

export default function WhatIsStemCell() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left: photo collage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[550px] w-full"
          >
            {/* Main large photo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] h-[80%] rounded-3xl overflow-hidden shadow-sm border border-slate-100 z-10">
              <Image
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80&auto=format&fit=crop"
                alt="Stem cell laboratory research"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-teal-900/10 mix-blend-multiply" />
            </div>

            {/* Overlapping smaller top-right */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute top-4 right-0 w-[40%] aspect-[4/3] rounded-2xl overflow-hidden shadow-md z-20 border-4 border-white rotate-3 hover:rotate-0 transition-transform duration-500 motion-reduce:transition-none"
            >
              <Image
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80&auto=format&fit=crop"
                alt="Microscope analysis"
                fill
                className="object-cover"
                sizes="30vw"
              />
            </motion.div>

            {/* Small bottom-left with teal border */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute bottom-16 left-0 w-[35%] aspect-square rounded-2xl overflow-hidden shadow-md z-20 border-4 border-teal-50 -rotate-6 hover:rotate-0 transition-transform duration-500 ring-1 ring-teal-100 motion-reduce:transition-none"
            >
              <Image
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80&auto=format&fit=crop"
                alt="Cellular structure"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </motion.div>

            {/* Floating stat card 1 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -bottom-4 right-4 bg-white rounded-2xl shadow-md px-5 py-4 flex items-center gap-3 border border-slate-100 z-30"
            >
              <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center shrink-0 border border-teal-100">
                <CheckCircle2 className="h-5 w-5 text-teal-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Ongoing Clinical Studies</p>
                <p className="text-xs text-slate-500">Exploring new applications</p>
              </div>
            </motion.div>

            {/* Floating stat card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute top-12 -left-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-md px-4 py-3 flex items-center gap-3 border border-slate-100 z-30"
            >
              <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center shrink-0">
                <FlaskConical className="h-4 w-4 text-teal-600" />
              </div>
              <p className="text-sm font-bold text-slate-800">Decades of Research</p>
            </motion.div>
          </motion.div>

          {/* Right: content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <span className="text-xs font-bold text-teal-600 tracking-widest uppercase mb-3">
              What Are Stem Cells?
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-5 leading-tight">
              The foundational cells of{" "}
              <span className="font-serif italic font-medium text-teal-700">regenerative medicine</span>
            </h2>

            <p className="text-base text-slate-600 mb-8 leading-relaxed">
              Stem cells are the body&apos;s natural raw materials — cells from which all other
              cells with specialised functions are generated. Under the right conditions, they divide
              to form more cells, presenting opportunities for research in tissue repair and immune modulation.
            </p>

            <ul className="space-y-4 mb-10">
              {points.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                  className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-sm"
                >
                  <div className="mt-0.5 bg-teal-50 p-1 rounded-full">
                    <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0" />
                  </div>
                  <span className="text-slate-700 text-sm font-medium">{point}</span>
                </motion.li>
              ))}
            </ul>

            <Link
              href="/what-are-stem-cells/"
              className="inline-flex items-center gap-2 text-white bg-teal-600 px-6 py-3 rounded-full font-semibold hover:bg-teal-700 transition-colors w-fit text-sm shadow-sm focus-visible:outline-2 focus-visible:outline-teal-600 focus-visible:outline-offset-4"
            >
              Learn more about stem cells
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
