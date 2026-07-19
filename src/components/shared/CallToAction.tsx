"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-teal-700 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Background decoration inside card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/30 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] pointer-events-none" />
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 relative z-10">
            Ready to explore <span className="text-teal-200">stem cell therapy?</span>
          </h2>
          <p className="text-lg text-teal-100 mb-10 max-w-2xl mx-auto relative z-10">
            Schedule a free, no-obligation consultation with our medical team to discuss your condition and discover if regenerative medicine is right for you.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Link
              href="/consultation"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-teal-700 font-bold hover:bg-teal-50 transition-all shadow-lg flex items-center justify-center gap-2 text-lg"
            >
              Book Free Consultation <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="tel:+60123456789"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-white/40 text-white font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" /> Call Us Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}