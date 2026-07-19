"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Lee",
    location: "Kuala Lumpur",
    condition: "Anti-Aging Therapy",
    outcome: "Visible skin texture improvement",
    quote: "The facial rejuvenation treatment gave me lasting results that no topical skincare product ever could. My skin texture and elasticity improved dramatically in just weeks. I was guided through every step with absolute care.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&q=80",
    rating: 5,
  },
  {
    name: "Tariq Ibrahim",
    location: "Penang",
    condition: "Hair Loss Recovery",
    outcome: "Full hair regrowth in 6 months",
    quote: "I was highly skeptical at first, but the results speak volumes. The targeted cellular treatment stimulated significant regrowth where other conventional treatments had failed completely.",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&h=150&fit=crop&q=80",
    rating: 5,
  },
  {
    name: "Ahmad Fazli",
    location: "Johor Bahru",
    condition: "Autoimmune Condition",
    outcome: "Flare-ups reduced by 90%",
    quote: "The systemic therapy has completely renewed my energy levels and quality of life. I sleep so much better, recover faster, and my joint inflammation has almost disappeared. The clinical process was seamless.",
    avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=150&h=150&fit=crop&q=80",
    rating: 5,
  },
  {
    name: "Dr. Vincent Yeoh",
    location: "Kuala Lumpur",
    condition: "Knee Osteoarthritis",
    outcome: "80% reduced pain in 3 months",
    quote: "After years of chronic knee pain and avoiding surgery, this stem cell therapy was a game-changer. My mobility has fully returned, and the daily pain is practically gone. I can finally play with my grandkids again.",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop&q=80",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-slate-50 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-sm font-semibold tracking-wide uppercase mb-4"
          >
            Patient Stories
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-slate-900"
          >
            Real results from our patients
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              className="bg-white rounded-3xl border border-slate-100 shadow-md p-8 flex flex-col relative hover:shadow-lg transition-shadow overflow-hidden"
            >
              {/* Large decorative quote */}
              <span className="absolute -top-2 -left-2 text-[120px] font-serif text-teal-100 leading-none select-none pointer-events-none">
                &quot;
              </span>

              {/* Top Row: Stars and Condition Tag */}
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-xs font-semibold border border-teal-100/50">
                  {testimonial.condition}
                </span>
              </div>

              {/* Quote Content */}
              <div className="relative flex-grow z-10">
                <p className="text-slate-700 text-lg italic leading-relaxed relative z-10">
                  {testimonial.quote}
                </p>
                
                {/* Outcome Tag */}
                <div className="mt-4 mb-8 inline-flex items-center gap-1.5 bg-teal-50 text-teal-700 px-3 py-1.5 rounded-lg text-xs font-bold border border-teal-100">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {testimonial.outcome}
                </div>
              </div>

              {/* Bottom Row: User Info */}
              <div className="flex items-center gap-4 mt-auto border-t border-slate-100 pt-5 relative z-10">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 bg-slate-100">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-xs text-slate-500">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
