import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import CallToAction from "@/components/shared/CallToAction";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Link from "next/link";
import { BookOpen, Dna, FlaskConical, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Stem Cell Education Hub Malaysia | Learn About Regenerative Medicine",
  description:
    "Your complete guide to understanding stem cells — what they are, types, how therapy works, benefits, risks, and the science behind regenerative medicine.",
  keywords:
    "stem cell education malaysia, learn stem cell therapy, stem cell science, regenerative medicine guide",
};

const resources = [
  {
    icon: Dna,
    title: "What Are Stem Cells?",
    description:
      "Learn the fundamental biology of stem cells — their unique properties, self-renewal ability, and how they differ from regular body cells.",
    href: "/what-are-stem-cells/",
    cta: "Read Guide",
  },
  {
    icon: FlaskConical,
    title: "Types of Stem Cells",
    description:
      "Embryonic, adult, iPSC, MSC — understand the differences between each stem cell type and when each is used clinically.",
    href: "/types-of-stem-cells/",
    cta: "Explore Types",
  },
  {
    icon: BookOpen,
    title: "What Is Stem Cell Therapy?",
    description:
      "How does stem cell therapy actually work? A clear explanation of the treatment process, mechanisms, and what to expect.",
    href: "/what-is-stem-cell-therapy/",
    cta: "Learn More",
  },
  {
    icon: ShieldCheck,
    title: "Therapy Benefits",
    description:
      "Evidence-based overview of the proven and emerging benefits of stem cell therapy across different medical conditions.",
    href: "/stem-cell-therapy-benefits/",
    cta: "View Benefits",
  },
];

const quickLinks = [
  { label: "Mesenchymal Stem Cell Therapy", href: "/mesenchymal-stem-cell-therapy/" },
  { label: "Side Effects & Risks", href: "/stem-cell-therapy-side-effects/" },
  { label: "Is It Legal in Malaysia?", href: "/is-stem-cell-therapy-legal-malaysia/" },
  { label: "How to Verify a Clinic", href: "/verify-stem-cell-clinic-malaysia/" },
  { label: "Stem Cell Banking", href: "/stem-cell-banking-malaysia/" },
  { label: "Stem Cell Research in Malaysia", href: "/stem-cell-research-malaysia/" },
];

export default function StemCellEducation() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Stem Cell Education"
          highlightedText="Hub"
          description="Everything you need to understand stem cells and regenerative medicine — from basic biology to treatment protocols, safety, and Malaysian regulations."
          badgeText="Patient Education · Science-Based"
        />

        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="relative h-[380px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1400&q=80&auto=format&fit=crop"
                  alt="Stem cell science education laboratory"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent" />
                <div className="absolute bottom-6 left-8 text-white">
                  <p className="text-sm font-semibold uppercase tracking-wider text-teal-300">Patient Education</p>
                  <p className="text-xl font-bold">Science-Based Knowledge for Every Patient</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Main Resources */}
        <AnimatedSection>
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                  Start Your Learning <span className="text-teal-600">Journey</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Our education resources are written by medical professionals and designed for patients, caregivers, and the curious.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {resources.map((r) => (
                  <Link
                    key={r.title}
                    href={r.href}
                    className="group bg-gradient-to-br from-teal-50 to-teal-50 rounded-3xl p-8 border border-teal-100/50 hover:shadow-xl transition-all duration-300 flex flex-col"
                  >
                    <div className="bg-teal-600 w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:bg-teal-700 transition-colors">
                      <r.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                      {r.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed flex-1">{r.description}</p>
                    <div className="mt-5 flex items-center gap-2 text-teal-600 font-semibold text-sm">
                      {r.cta} <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Quick Links */}
        <AnimatedSection>
          <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                  More <span className="text-teal-600">Educational Topics</span>
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {quickLinks.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    className="group flex items-center justify-between bg-white rounded-2xl px-6 py-4 border border-gray-100 hover:border-teal-200 hover:shadow-md transition-all"
                  >
                    <span className="text-gray-800 font-medium group-hover:text-teal-600 transition-colors">
                      {l.label}
                    </span>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-teal-500 group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
