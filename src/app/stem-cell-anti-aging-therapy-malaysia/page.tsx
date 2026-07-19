import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import CallToAction from "@/components/shared/CallToAction";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Image from "next/image";
import { Dna, Heart, Brain, Activity, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Stem Cell Anti-Aging Therapy Malaysia | Regenerative Longevity Medicine",
  description:
    "Explore stem cell anti-aging therapy in Malaysia. Reverse cellular ageing, restore vitality, and improve quality of life with evidence-based regenerative medicine.",
  keywords:
    "stem cell anti-aging malaysia, anti-aging therapy malaysia, regenerative longevity malaysia, stem cell rejuvenation",
};

const pillars = [
  {
    icon: Dna,
    title: "Cellular Regeneration",
    description:
      "Mesenchymal stem cells (MSCs) secrete growth factors that repair aged, damaged tissues throughout the body — from organs to skin.",
  },
  {
    icon: Heart,
    title: "Cardiovascular Vitality",
    description:
      "Stem cell therapy has shown promise in improving heart function, reducing arterial stiffness, and enhancing blood flow in ageing patients.",
  },
  {
    icon: Brain,
    title: "Cognitive Support",
    description:
      "Neuroprotective growth factors released by MSCs support brain health, memory, and cognitive function as we age.",
  },
  {
    icon: Activity,
    title: "Hormonal Balance",
    description:
      "Regenerative protocols can support endocrine health, energy levels, metabolism, and overall hormonal stability in both men and women.",
  },
];

const biomarkers = [
  "Reduced inflammatory markers (CRP, IL-6)",
  "Improved telomere length",
  "Enhanced NK cell activity",
  "Better mitochondrial function",
  "Improved VO2 max & endurance",
  "Stabilised blood sugar & lipid profiles",
  "Improved skin collagen density",
  "Reduced oxidative stress markers",
];

const packages = [
  {
    name: "Foundation",
    description: "Single IV infusion with MSC exosomes. Ideal for first-timers exploring regenerative longevity.",
    price: "From RM 8,000",
    features: ["1x IV exosome infusion", "Pre-treatment bloodwork", "Physician consultation", "Post-care protocol"],
  },
  {
    name: "Revitalise",
    description: "Three-session protocol with combination MSC + NAD+ therapy for comprehensive systemic renewal.",
    price: "From RM 22,000",
    features: ["3x IV MSC infusion", "NAD+ therapy", "Full biomarker panel", "Lifestyle optimisation plan", "6-month follow-up"],
    highlighted: true,
  },
  {
    name: "Elite Longevity",
    description: "Annual programme with quarterly treatments, advanced diagnostics, and personalised longevity coaching.",
    price: "From RM 65,000",
    features: ["4x quarterly treatments", "Advanced genomics panel", "Epigenetic age testing", "Dedicated longevity coach", "Priority clinic access"],
  },
];

const faqs = [
  {
    q: "At what age should I start stem cell anti-aging therapy?",
    a: "Most longevity medicine specialists recommend starting between ages 40–55 when cellular decline begins to accelerate. However, younger patients with specific biomarker imbalances or chronic fatigue may also benefit.",
  },
  {
    q: "Is anti-aging stem cell therapy approved in Malaysia?",
    a: "Stem cell therapies in Malaysia are regulated by the Ministry of Health. Reputable clinics operate under strict MOH guidelines. Always verify a clinic's certification before proceeding.",
  },
  {
    q: "How soon will I feel the effects?",
    a: "Many patients report improved energy and sleep quality within 2–4 weeks. Systemic benefits such as improved immunity, skin quality, and cognitive clarity typically become evident over 2–3 months.",
  },
  {
    q: "Is it safe to combine with other wellness treatments?",
    a: "Yes. Stem cell therapy pairs well with NAD+ infusions, ozone therapy, and peptide protocols. Your physician will design an integrated plan tailored to your health goals.",
  },
];

export default function StemCellAntiAging() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Stem Cell Anti-Aging"
          highlightedText="Therapy Malaysia"
          description="Move beyond surface-level wellness. Regenerative longevity medicine that works at the cellular level — restoring vitality, resilience, and youthful function from within."
          badgeText="Longevity Medicine · MOH Regulated"
        />

        {/* 4 Pillars */}
        <AnimatedSection>
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                  The 4 Pillars of Stem Cell{" "}
                  <span className="text-teal-600">Anti-Aging</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Our approach addresses the root causes of biological ageing — not just the symptoms.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {pillars.map((p) => (
                  <div
                    key={p.title}
                    className="bg-gradient-to-br from-teal-50 to-teal-50 rounded-2xl p-6 border border-teal-100/50"
                  >
                    <div className="bg-teal-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      <p.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{p.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{p.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Biomarkers Image Section */}
        <AnimatedSection>
          <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=700&q=80"
                    alt="Anti-aging regenerative medicine Malaysia"
                    width={700}
                    height={500}
                    className="rounded-3xl shadow-2xl object-cover w-full"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                    <p className="text-2xl font-extrabold text-teal-600">+40%</p>
                    <p className="text-sm text-gray-600">avg. energy improvement reported</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                    Measurable Biomarker{" "}
                    <span className="text-teal-600">Improvements</span>
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Longevity isn&apos;t just about feeling better — it&apos;s about measurable biological age reversal. Our protocols are tracked against validated biomarkers.
                  </p>
                  <ul className="grid grid-cols-1 gap-3">
                    {biomarkers.map((b) => (
                      <li key={b} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-teal-500 shrink-0" />
                        <span className="text-gray-700">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Packages */}
        <AnimatedSection>
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                  Longevity <span className="text-teal-600">Programmes</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Tailored anti-aging packages for every stage of your wellness journey.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {packages.map((pkg) => (
                  <div
                    key={pkg.name}
                    className={`rounded-3xl p-8 border ${
                      pkg.highlighted
                        ? "bg-teal-700 border-teal-600 text-white ring-2 ring-teal-500/50"
                        : "bg-white border-gray-200"
                    }`}
                  >
                    <h3
                      className={`text-xl font-bold mb-2 ${
                        pkg.highlighted ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {pkg.name}
                    </h3>
                    <p
                      className={`text-sm mb-4 leading-relaxed ${
                        pkg.highlighted ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {pkg.description}
                    </p>
                    <p
                      className={`text-2xl font-extrabold mb-6 ${
                        pkg.highlighted ? "text-teal-400" : "text-teal-600"
                      }`}
                    >
                      {pkg.price}
                    </p>
                    <ul className="space-y-2">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm">
                          <CheckCircle2
                            className={`h-4 w-4 shrink-0 ${
                              pkg.highlighted ? "text-teal-400" : "text-teal-500"
                            }`}
                          />
                          <span className={pkg.highlighted ? "text-gray-300" : "text-gray-700"}>
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* FAQ */}
        <AnimatedSection>
          <section className="py-24 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center">
                Frequently Asked <span className="text-teal-600">Questions</span>
              </h2>
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                  >
                    <h3 className="text-base font-bold text-gray-900 mb-2">{faq.q}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
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
