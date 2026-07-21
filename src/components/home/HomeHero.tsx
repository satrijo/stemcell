"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import { ArrowLink } from "./HomePrimitives";

const assurances = [
  "Evidence before claims",
  "Safety before commitment",
  "Questions before decisions",
] as const;

const heroSlides = [
  {
    src: "https://images.pexels.com/photos/8442571/pexels-photo-8442571.jpeg?auto=compress&cs=tinysrgb&w=2200",
    alt: "Two laboratory researchers working at microscopes in a clean white research facility",
    position: "center",
  },
  {
    src: "https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=2200",
    alt: "Scientist in white coat and blue gloves examining a sample under a microscope",
    position: "center",
  },
  {
    src: "https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg?auto=compress&cs=tinysrgb&w=2200",
    alt: "Scientist in full protective equipment working in a laboratory with warm lighting",
    position: "center",
  },
  {
    src: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=2200",
    alt: "Smiling doctor in white coat walking through a modern hospital corridor",
    position: "center",
  },
] as const;

const SLIDE_DURATION = 5000;

export function HomeHero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="px-[var(--page-inset)] pb-8 pt-3">
      <div className="relative min-h-[calc(100dvh-1.5rem)] overflow-hidden rounded-xl bg-[var(--ink)] text-white">
        {/* Carousel images */}
        <AnimatePresence initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={heroSlides[current].src}
              alt={heroSlides[current].alt}
              fill
              priority={current === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradients */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,30,33,.98)_0%,rgba(12,30,33,.9)_34%,rgba(12,30,33,.36)_72%,rgba(12,30,33,.12)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(12,30,33,.65)_0%,transparent_48%)]" />

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2 lg:left-auto lg:right-14 lg:translate-x-0">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setCurrent(i)}
              className="h-1 rounded-full bg-white/40 transition-all duration-300 hover:bg-white/70"
              style={{
                width: i === current ? "2rem" : "0.5rem",
                background:
                  i === current ? "rgba(255,255,255,0.85)" : undefined,
              }}
            />
          ))}
        </div>

        <div className="relative mx-auto flex min-h-[calc(100dvh-1.5rem)] max-w-[85rem] flex-col justify-end px-5 pb-28 pt-32 sm:px-9 sm:pb-10 lg:px-14 lg:pb-12">
          <div className="max-w-[54rem] animate-[reveal-in_800ms_cubic-bezier(.16,1,.3,1)_both]">
            <p className="eyebrow flex items-center gap-3 text-[var(--accent-pale)]">
              <span className="size-2 rounded-full bg-[var(--accent)]" />
              Independent stem cell guide · Malaysia
            </p>
            <h1 className="display-title mt-7 max-w-[52rem] text-pretty text-white">
              Understand the care before you decide.
            </h1>
            <p className="mt-7 max-w-[42rem] text-[clamp(1.05rem,1.5vw,1.25rem)] leading-8 text-white/72">
              Clear, responsible information on stem cell science, treatment
              pathways, provider checks, costs, and the questions worth asking
              first.
            </p>
            <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <ArrowLink href="/consultation/">
                Prepare a consultation
              </ArrowLink>
              <Link
                href="/stem-cell-education/"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/30 px-6 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/8"
              >
                Explore the education hub
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-5 border-t border-white/20 pt-6 lg:flex-row lg:items-end lg:justify-between">
            <ul className="grid gap-3 text-sm text-white/76 sm:grid-cols-3 sm:gap-8">
              {assurances.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <Check
                    aria-hidden="true"
                    className="size-4 text-[var(--accent-pale)]"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="#overview"
              aria-label="Scroll to overview"
              className="hidden size-20 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-[var(--accent-pale)] hover:text-[var(--accent-pale)] lg:flex"
            >
              <ArrowDown aria-hidden="true" className="size-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
