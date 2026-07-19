import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import CallToAction from "@/components/shared/CallToAction";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Image from "next/image";
import { BookOpen, Layers, Zap, Activity, Users, Globe2, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "What is a Stem Cell? | Regenerative Medicine Guide",
  description:
    "Learn how these unique cells work, their different types, and why they are the foundation of regenerative medicine in Malaysia today.",
};

const types = [
  {
    title: "Embryonic Stem Cells",
    description: "Pluripotent cells capable of becoming any cell type in the body. While highly versatile, their use is heavily restricted in Malaysia due to ethical considerations.",
    icon: <Layers className="w-8 h-8 text-teal-600" />,
  },
  {
    title: "Adult (Somatic) Stem Cells",
    description: "Found in small numbers in most adult tissues, like bone marrow or fat. Primarily used by the body to maintain and repair the specific tissue in which they are found.",
    icon: <Users className="w-8 h-8 text-teal-600" />,
  },
  {
    title: "Mesenchymal Stem Cells (MSCs)",
    description: "A highly potent type of adult stem cell derived from sources like umbilical cord tissue. MSCs are the primary focus of modern regenerative treatments in Malaysia.",
    icon: <Activity className="w-8 h-8 text-teal-600" />,
  },
  {
    title: "Induced Pluripotent (iPSCs)",
    description: "Regular adult cells that have been genetically reprogrammed to behave like embryonic stem cells. Currently used mostly in research rather than clinical treatments.",
    icon: <Zap className="w-8 h-8 text-teal-600" />,
  },
];

export default function WhatAreStemCells() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="What Are"
          highlightedText="Stem Cells?"
          description="Understanding the master cells of the human body and the foundation of modern regenerative medicine."
        />

        {/* What Are They (Simple Explanation) */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-600 font-medium mb-6">
                  <BookOpen className="w-4 h-4" /> The Basics
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                  The Body's <span className="gradient-text">Master Builders</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Stem cells are the body's raw materials — cells from which all other cells with specialized functions are generated. 
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Under the right conditions in the body or a laboratory, stem cells divide to form more cells called daughter cells. These daughter cells either become new stem cells (self-renewal) or become specialized cells (differentiation) with a more specific function, such as blood cells, brain cells, heart muscle cells or bone cells.
                </p>
                
                <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-2">Two Unique Properties:</h3>
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex gap-3">
                      <span className="font-bold text-teal-500">1.</span>
                      <span>They can divide over and over again to produce new cells.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-teal-500">2.</span>
                      <span>As they divide, they can change into the other types of cell that make up the body.</span>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2} className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80"
                  alt="Microscopic cell visualization"
                  fill
                  className="object-cover"
                />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Types of Stem Cells */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-16 text-center">
                Types of <span className="gradient-text">Stem Cells</span>
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {types.map((type, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.1}>
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm h-full hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 rounded-2xl bg-teal-50 flex items-center justify-center mb-6">
                      {type.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{type.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* How They Work in Medicine */}
        <section className="py-20 bg-teal-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection className="order-2 lg:order-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: "Seek & Detect", desc: "Stem cells are drawn to areas of inflammation and tissue damage." },
                    { title: "Reduce Inflammation", desc: "They release powerful anti-inflammatory proteins to calm the area." },
                    { title: "Stimulate Repair", desc: "They secrete growth factors that signal local cells to start dividing and healing." },
                    { title: "Differentiate", desc: "In some cases, they become the specific tissue cells needed for repair." }
                  ].map((step, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl border border-teal-100">
                      <div className="text-teal-600 font-bold mb-2">Phase {idx + 1}</div>
                      <h4 className="text-gray-900 font-bold mb-2">{step.title}</h4>
                      <p className="text-gray-600 text-sm">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2} className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                  How Do They Work in <span className="text-teal-200">Treatments?</span>
                </h2>
                <p className="text-lg text-teal-100 mb-6 leading-relaxed">
                  When used in regenerative medicine, concentrated doses of stem cells are introduced into a patient's body—either systematically via IV or injected directly into a damaged joint or tissue.
                </p>
                <p className="text-lg text-teal-100 leading-relaxed">
                  They act as directors on a construction site. Rather than doing all the building themselves, they release biochemical signals (cytokines and exosomes) that command the body's local cells to wake up, reduce inflammation, and begin the repair process.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Why Malaysia */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center mx-auto mb-6">
                <Globe2 className="w-8 h-8 text-teal-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
                Stem Cell Research in <span className="gradient-text">Malaysia</span>
              </h2>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                Malaysia has positioned itself as a leading hub for medical tourism and advanced regenerative medicine in Southeast Asia. The country combines strict regulatory oversight with cutting-edge biotechnology.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-teal-600" /> Strict MOH Oversight
                  </h3>
                  <p className="text-gray-600">The Ministry of Health ensures all cellular products meet strict Current Good Manufacturing Practice (CGMP) standards.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600" /> Advanced Facilities
                  </h3>
                  <p className="text-gray-600">Kuala Lumpur houses multiple world-class laboratories capable of isolating, expanding, and cryopreserving stem cells.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <CallToAction />
      </main>
      <Footer />
    </>
  );
}