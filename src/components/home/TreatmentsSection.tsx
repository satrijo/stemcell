"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Bone, Activity, Sparkles, Infinity as InfinityIcon, Brain, ShieldPlus } from "lucide-react";

const treatments = [
  {
    id: "knee-joint",
    title: "Joint Health Research",
    description: "Studies explore applications for cartilage and joint mobility conditions.",
    icon: Bone,
    href: "/stem-cell-therapy-knee-malaysia/",
    image: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=900&q=85&auto=format&fit=crop",
    tag: "Orthopedics",
    span: "lg:col-span-2 lg:row-span-2",
    aspect: "aspect-[4/3]",
  },
  {
    id: "hair-loss",
    title: "Hair Follicle Studies",
    description: "Investigating potential regenerative properties for hair follicles.",
    icon: Activity,
    href: "/stem-cell-hair-treatment-malaysia/",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&q=80&auto=format&fit=crop",
    tag: "Aesthetic",
    span: "lg:col-span-1",
    aspect: "aspect-[4/3]",
  },
  {
    id: "facial",
    title: "Skin Rejuvenation",
    description: "Ongoing exploration into collagen production and tissue elasticity.",
    icon: Sparkles,
    href: "/stem-cell-facial-treatment-malaysia/",
    image: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=700&q=80&auto=format&fit=crop",
    tag: "Aesthetic",
    span: "lg:col-span-1",
    aspect: "aspect-[4/3]",
  },
  {
    id: "anti-aging",
    title: "Cellular Renewal",
    description: "Research into systemic approaches to support vitality and wellness.",
    icon: InfinityIcon,
    href: "/stem-cell-anti-aging-therapy-malaysia/",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=700&q=80&auto=format&fit=crop",
    tag: "Wellness",
    span: "lg:col-span-1",
    aspect: "aspect-[4/3]",
  },
  {
    id: "neurological",
    title: "Neurological Studies",
    description: "Clinical research exploring potential support for nerve and cognitive function.",
    icon: Brain,
    href: "/stem-cell-therapy-neurological-disorders-malaysia/",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=700&q=80&auto=format&fit=crop",
    tag: "Medical",
    span: "lg:col-span-1",
    aspect: "aspect-[4/3]",
  },
  {
    id: "autoimmune",
    title: "Immune System Research",
    description: "Investigating mechanisms that may support immune modulation.",
    icon: ShieldPlus,
    href: "/stem-cell-therapy-autoimmune-disease/",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=700&q=80&auto=format&fit=crop",
    tag: "Medical",
    span: "lg:col-span-1",
    aspect: "aspect-[4/3]",
  },
];

const tagColors: Record<string, string> = {
  "Orthopedics": "bg-teal-600 text-white",
  "Aesthetic": "bg-sky-100 text-sky-700",
  "Wellness": "bg-emerald-100 text-emerald-700",
  "Medical": "bg-slate-100 text-slate-700",
};

export default function TreatmentsSection() {
  const featured = treatments[0];
  const rest = treatments.slice(1);

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-bold text-teal-600 tracking-widest uppercase mb-3 block"
            >
              Areas of Exploration
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight"
            >
              Current Applications<br className="hidden md:block" /> &amp; Research
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base text-slate-500 max-w-xs leading-relaxed"
          >
            Regenerative medicine is actively studied for various conditions, though clinical evidence varies by application.
          </motion.p>
        </div>

        {/* Bento-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

          {/* Featured — spans 2×2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 lg:row-span-2"
          >
            <Link
              href={featured.href}
              className="group relative flex flex-col h-full min-h-[400px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 focus-visible:outline-2 focus-visible:outline-teal-600 focus-visible:outline-offset-4"
            >
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />

              <div className="absolute top-5 left-5 z-10">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${tagColors[featured.tag]}`}>
                  {featured.tag}
                </span>
              </div>

              <div className="relative z-10 mt-auto p-8">
                <div className="flex items-center gap-3 mb-3">
                  {(() => { const Icon = featured.icon; return <Icon className="w-5 h-5 text-teal-300" />; })()}
                  <h3 className="text-2xl font-bold text-white">{featured.title}</h3>
                </div>
                <p className="text-sm text-white/75 leading-relaxed mb-5 max-w-sm">{featured.description}</p>
                <span className="inline-flex items-center gap-2 text-teal-300 font-semibold text-sm group-hover:gap-3 transition-all">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Rest — smaller cards */}
          {rest.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index + 1) * 0.07, duration: 0.5 }}
              >
                <Link
                  href={item.href}
                  className="group relative flex flex-col h-full min-h-[190px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 focus-visible:outline-2 focus-visible:outline-teal-600 focus-visible:outline-offset-4"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/20 to-transparent" />

                  <div className="absolute top-3 left-3 z-10">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${tagColors[item.tag]}`}>
                      {item.tag}
                    </span>
                  </div>

                  <div className="relative z-10 mt-auto p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="w-4 h-4 text-teal-300 shrink-0" />
                      <h3 className="text-sm font-bold text-white leading-tight">{item.title}</h3>
                    </div>
                    <span className="inline-flex items-center gap-1 text-teal-300 text-xs font-semibold group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="mt-10 text-center"
        >
          <Link
            href="/treatments-conditions/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-slate-200 rounded-full text-sm font-semibold text-slate-700 hover:border-teal-400 hover:text-teal-700 transition-all focus-visible:outline-2 focus-visible:outline-teal-600 focus-visible:outline-offset-4"
          >
            Explore clinical conditions <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
