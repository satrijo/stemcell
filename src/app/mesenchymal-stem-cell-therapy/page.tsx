import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import CallToAction from "@/components/shared/CallToAction";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Activity, Dna } from "lucide-react";

export const metadata: Metadata = {
  title: "Mesenchymal Stem Cell Therapy Malaysia | MSC Treatment Guide",
  description:
    "Everything about Mesenchymal Stem Cell (MSC) therapy in Malaysia — sources, mechanisms, conditions treated, safety, and what to expect from treatment.",
  keywords:
    "mesenchymal stem cell therapy malaysia, MSC treatment malaysia, MSC stem cells, Wharton jelly stem cells malaysia",
};

const sources = [
  {
    name: "Bone Marrow",
    description: "The traditional source. MSCs are harvested from the patient's own iliac crest under sedation. Gold standard for autologous use.",
    badge: "Autologous",
  },
  {
    name: "Adipose Tissue (Fat)",
    description: "Lipoaspirate from a mini-liposuction procedure. Yields high MSC numbers with minimal harvesting discomfort. Very popular in Malaysia.",
    badge: "Autologous",
  },
  {
    name: "Umbilical Cord (Wharton's Jelly)",
    description: "Ethically donated cord tissue post-birth. Yields young, highly potent MSCs. Used in allogeneic treatments — no harvesting from the patient required.",
    badge: "Allogeneic",
  },
  {
    name: "Placental Tissue",
    description: "Rich source of MSCs with high immunomodulatory activity. Used in specialised protocols particularly for inflammatory conditions.",
    badge: "Allogeneic",
  },
];

const conditions = [
  "Osteoarthritis (knee, hip, shoulder)",
  "Rheumatoid Arthritis",
  "Autoimmune conditions (Lupus, MS)",
  "Liver cirrhosis",
  "COPD & lung conditions",
  "Heart failure (cardiac MSC therapy)",
  "Diabetes & metabolic disease",
  "Anti-aging & longevity protocols",
  "Hair loss (androgenic alopecia)",
  "Skin conditions & wound healing",
  "Spinal disc degeneration",
  "Stroke recovery support",
];

const mechanism = [
  {
    icon: ShieldCheck,
    title: "Immunomodulation",
    description: "MSCs suppress overactive immune responses by secreting IL-10, TGF-β, and PGE2 — reducing chronic inflammation without suppressing overall immunity.",
  },
  {
    icon: Dna,
    title: "Paracrine Signalling",
    description: "MSCs work primarily through secreted growth factors (VEGF, BDNF, HGF) rather than direct differentiation — recruiting local progenitor cells to repair tissue.",
  },
  {
    icon: Activity,
    title: "Tissue Regeneration",
    description: "In the right microenvironment, MSCs differentiate into bone, cartilage, muscle, and adipose tissue to replace damaged cells directly.",
  },
];

const faqs = [
  {
    q: "What makes MSCs different from other stem cells?",
    a: "MSCs have three defining properties: they can self-renew, differentiate into multiple tissue types, and — uniquely — they modulate the immune system. This makes them effective for both degenerative and inflammatory conditions. They also have very low immunogenicity, meaning allogeneic (donor) MSCs are well-tolerated without full immunosuppression.",
  },
  {
    q: "How are MSCs delivered into the body?",
    a: "Delivery method depends on the target condition: intravenous (IV) infusion for systemic conditions; direct injection into joints, discs, or lesions for localised conditions; or intrathecal injection for neurological applications. IV is most common at Malaysian clinics.",
  },
  {
    q: "How many MSCs are needed for a treatment?",
    a: "Typical therapeutic doses range from 50 million to 200 million cells per treatment, though protocols vary. Higher cell counts are generally used for systemic conditions, lower counts for localised joint injections.",
  },
  {
    q: "Are allogeneic (donor) MSCs safe?",
    a: "Yes. MSCs express very low levels of MHC class II antigen — meaning they largely 'fly under the radar' of the recipient's immune system. Published data from large cohorts show allogeneic MSC infusions are well-tolerated with minimal adverse events in most patients.",
  },
];

export default function MesenchymalStemCellTherapy() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Mesenchymal Stem Cell"
          highlightedText="Therapy (MSC) Malaysia"
          description="The most clinically used stem cell in regenerative medicine — powerful anti-inflammatory, immunomodulatory, and tissue-regenerative properties in a single therapy."
          badgeText="MSC Therapy · MOH Regulated"
        />

        {/* Mechanism */}
        <AnimatedSection>
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                  How MSCs <span className="text-teal-600">Work</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  MSCs are a therapeutic powerhouse — working through three distinct biological pathways simultaneously.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {mechanism.map((m) => (
                  <div key={m.title} className="bg-gradient-to-br from-teal-50 to-teal-50 rounded-2xl p-8 border border-teal-100/50">
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

        {/* Sources */}
        <AnimatedSection>
          <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                  MSC <span className="text-teal-600">Sources</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  MSCs can be harvested from multiple tissues. The source affects potency, availability, and whether the cells are autologous or allogeneic.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {sources.map((s) => (
                  <div key={s.name} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-gray-900">{s.name}</h3>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${s.badge === "Autologous" ? "bg-teal-100 text-teal-700" : "bg-teal-100 text-teal-700"}`}>
                        {s.badge}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Conditions + Image */}
        <AnimatedSection>
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
                    Conditions <span className="text-teal-600">MSC Therapy Addresses</span>
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {conditions.map((c) => (
                      <div key={c} className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-teal-500 shrink-0" />
                        <span className="text-gray-700 text-sm">{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=700&q=80"
                    alt="Mesenchymal stem cell therapy Malaysia"
                    width={700}
                    height={500}
                    className="rounded-3xl shadow-2xl object-cover w-full"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                    <p className="text-2xl font-extrabold text-teal-600">200M+</p>
                    <p className="text-sm text-gray-600">cells per therapeutic dose</p>
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
                  <div key={faq.q} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
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
