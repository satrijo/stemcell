import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import CallToAction from "@/components/shared/CallToAction";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Image from "next/image";
import { Brain, Activity, ShieldCheck, CheckCircle2, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Stem Cell Therapy for Neurological Disorders Malaysia",
  description:
    "Explore stem cell therapy for neurological disorders in Malaysia — Parkinson's, ALS, MS, stroke recovery, and more. Learn about neuroprotection and neural repair.",
  keywords:
    "stem cell therapy neurological disorders malaysia, stem cell parkinson malaysia, stem cell stroke recovery malaysia, neurological stem cell treatment",
};

const conditions = [
  {
    name: "Parkinson's Disease",
    description:
      "Dopaminergic neuron loss leads to motor dysfunction. Stem cells may help replace lost neurons and protect remaining ones from further degeneration.",
  },
  {
    name: "Amyotrophic Lateral Sclerosis (ALS)",
    description:
      "Progressive motor neuron disease. Stem cell therapy aims to slow progression by delivering neuroprotective factors to affected areas.",
  },
  {
    name: "Multiple Sclerosis (MS)",
    description:
      "Autoimmune attack on myelin. Hematopoietic stem cell transplantation (HSCT) has shown remission in relapsing-remitting MS cases.",
  },
  {
    name: "Stroke Recovery",
    description:
      "Stem cells delivered post-stroke can promote neuroplasticity, reduce inflammation, and improve motor and cognitive recovery outcomes.",
  },
  {
    name: "Cerebral Palsy",
    description:
      "Cord blood-derived stem cells are being studied to help repair brain damage and improve motor function in children with cerebral palsy.",
  },
  {
    name: "Traumatic Brain Injury",
    description:
      "Regenerative therapy helps reduce neuroinflammation and support axonal repair after traumatic brain injuries.",
  },
];

const mechanisms = [
  {
    icon: Brain,
    title: "Neuroprotection",
    description:
      "MSCs secrete BDNF, GDNF, and VEGF — growth factors that protect surviving neurons from further apoptosis.",
  },
  {
    icon: Activity,
    title: "Neuroplasticity Support",
    description:
      "Stem cells promote the formation of new synaptic connections, essential for motor and cognitive function recovery.",
  },
  {
    icon: ShieldCheck,
    title: "Immunomodulation",
    description:
      "In autoimmune neurological diseases like MS, stem cells help re-regulate the immune response to stop the attack on neural tissue.",
  },
];

const faqs = [
  {
    q: "Is stem cell therapy a cure for neurological diseases?",
    a: "Currently, stem cell therapy is not a cure for most neurological conditions. It is best understood as a disease-modifying and symptom-improving therapy. It can slow progression, improve quality of life, and in some cases (like MS) lead to long-term remission.",
  },
  {
    q: "What type of stem cells are used for neurological conditions?",
    a: "Mesenchymal stem cells (MSCs) are most commonly used for their potent neuroprotective and anti-inflammatory properties. For MS, hematopoietic stem cell transplantation (HSCT) is increasingly used under strict clinical protocols.",
  },
  {
    q: "How is the treatment delivered to the brain?",
    a: "Delivery methods include intravenous (IV) infusion, intrathecal injection (into the spinal fluid), and in specialised cases, direct intraparenchymal injection. IV and intrathecal routes are most common in Malaysia.",
  },
  {
    q: "What results can realistically be expected?",
    a: "Results vary by condition, stage, and patient health. Common improvements include reduced fatigue, better motor coordination, improved speech, and slowed disease progression. Full recovery is rare but quality-of-life improvements are frequently reported.",
  },
];

export default function NeurologicalStemCellTherapy() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Stem Cell Therapy for Neurological"
          highlightedText="Disorders Malaysia"
          description="Hope-based regenerative medicine for Parkinson's, MS, ALS, stroke recovery, and more — using the neuroprotective and neuro-regenerative power of stem cells."
          badgeText="Neurology · MOH Regulated Clinics"
        />

        {/* Mechanisms */}
        <AnimatedSection>
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                  How Stem Cells Support{" "}
                  <span className="text-teal-600">Brain & Nerve Repair</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Unlike drugs that manage symptoms, stem cells work with your biology to slow damage and promote genuine neural repair.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {mechanisms.map((m) => (
                  <div
                    key={m.title}
                    className="bg-gradient-to-br from-teal-50 to-teal-50 rounded-2xl p-8 border border-teal-100/50"
                  >
                    <div className="bg-teal-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      <m.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{m.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{m.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Conditions */}
        <AnimatedSection>
          <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                  Neurological Conditions{" "}
                  <span className="text-teal-600">We Help With</span>
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {conditions.map((c) => (
                  <div
                    key={c.name}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal-500 shrink-0" />
                      {c.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{c.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Image + Disclaimer */}
        <AnimatedSection>
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=700&q=80"
                    alt="Stem cell therapy neurological disorders Malaysia"
                    width={700}
                    height={500}
                    className="rounded-3xl shadow-2xl object-cover w-full"
                  />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                    A Compassionate,{" "}
                    <span className="text-teal-600">Evidence-Informed Approach</span>
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    We understand that neurological conditions often come after years of conventional treatment failures. Our team works transparently — setting realistic expectations while using the best available regenerative science.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex gap-4">
                    <AlertCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-amber-800 mb-1">Medical Disclaimer</p>
                      <p className="text-sm text-amber-700">
                        Stem cell therapy for neurological conditions is an emerging field. Results are variable and not guaranteed. All treatment decisions should be made in consultation with a licensed neurologist and regenerative medicine specialist.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* FAQs */}
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
