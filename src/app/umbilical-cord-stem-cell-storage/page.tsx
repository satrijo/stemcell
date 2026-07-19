import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import CallToAction from "@/components/shared/CallToAction";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { CheckCircle2, Clock, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Umbilical Cord Stem Cell Storage Malaysia | Complete Guide",
  description:
    "How umbilical cord blood and tissue banking works in Malaysia — collection, processing, cryopreservation, storage, and how to access your cells when needed.",
  keywords:
    "umbilical cord stem cell storage malaysia, cord blood banking malaysia, cord tissue storage, newborn stem cell banking",
};

const whatIsStored = [
  {
    name: "Cord Blood",
    description:
      "Blood remaining in the umbilical cord and placenta after birth. Rich in hematopoietic stem cells (HSCs) — the same type used in bone marrow transplants. Currently used clinically in 80+ diseases.",
    icon: "🩸",
  },
  {
    name: "Cord Tissue (Wharton's Jelly)",
    description:
      "The gelatinous tissue surrounding the umbilical cord blood vessels. Contains a rich supply of mesenchymal stem cells (MSCs) — the primary cells used in regenerative medicine therapies.",
    icon: "🧬",
  },
  {
    name: "Placental Tissue",
    description:
      "Some banks also offer placental tissue banking — an additional source of MSCs and other progenitor cells with strong immunomodulatory properties.",
    icon: "🔬",
  },
];

const process = [
  { step: "01", title: "Enrolment (Before Birth)", description: "Register with your chosen bank during pregnancy (ideally by 34–36 weeks). A collection kit is mailed to you." },
  { step: "02", title: "Collection (At Birth)", description: "After the cord is clamped and cut, blood is drained from the cord and placenta into a sterile collection bag — a painless 5-minute process. Cord tissue is separately cut and stored." },
  { step: "03", title: "Transport", description: "The collected sample is couriered in a temperature-controlled container to the bank's processing laboratory within 24–48 hours of birth." },
  { step: "04", title: "Processing", description: "The laboratory separates stem cells, checks viability, performs bacterial and viral testing, and prepares the sample for long-term storage." },
  { step: "05", title: "Cryopreservation", description: "Cells are gradually cooled using DMSO cryoprotectant, then stored in liquid nitrogen at -196°C. At this temperature, cellular activity is suspended indefinitely." },
  { step: "06", title: "Storage & Access", description: "Your cells are stored in a secure, temperature-monitored facility. If ever needed, the bank retrieves and ships them to the treating medical centre within hours." },
];

const considerations = [
  { label: "Collection window", value: "Immediate post-birth — one opportunity only" },
  { label: "Typical cord blood volume", value: "60–150 mL" },
  { label: "Stem cell viability at storage", value: "95%+ if processed within 48h" },
  { label: "Storage temperature", value: "-196°C in liquid nitrogen" },
  { label: "Proven storage duration", value: "25+ years (cells still viable)" },
  { label: "Annual storage cost", value: "RM 800–1,500/year (private)" },
  { label: "Initial processing fee", value: "RM 3,000–6,000 (private)" },
  { label: "Public banking", value: "Free — cells donated to national registry" },
];

export default function UmbilicalCordStemCellStorage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Umbilical Cord Stem Cell"
          highlightedText="Storage Malaysia"
          description="The most potent, ethically uncontroversial source of stem cells — collected painlessly at birth, stored for decades, and ready the moment your family needs it."
          badgeText="Cord Blood Banking · MOH Licensed"
        />

        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="relative h-[380px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1400&q=80&auto=format&fit=crop"
                  alt="Umbilical cord blood storage cryopreservation facility"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent" />
                <div className="absolute bottom-6 left-8 text-white">
                  <p className="text-sm font-semibold uppercase tracking-wider text-teal-300">Cord Blood Banking</p>
                  <p className="text-xl font-bold">Stored for a Lifetime of Potential</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* What is stored */}
        <AnimatedSection>
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                  What Is <span className="text-teal-600">Stored?</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Modern cord banking goes beyond just blood — cord tissue and placenta store different, complementary types of stem cells.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {whatIsStored.map((w) => (
                  <div key={w.name} className="bg-gradient-to-br from-teal-50 to-teal-50 rounded-2xl p-8 border border-teal-100/50">
                    <div className="text-4xl mb-4">{w.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{w.name}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{w.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Process */}
        <AnimatedSection>
          <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                  From Birth to <span className="text-teal-600">Storage</span>
                </h2>
              </div>
              <div className="space-y-6 max-w-3xl mx-auto">
                {process.map((p) => (
                  <div key={p.step} className="flex gap-5 items-start">
                    <div className="w-10 h-10 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                      {p.step}
                    </div>
                    <div className="bg-white rounded-2xl p-5 border border-gray-100 flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{p.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{p.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Key considerations */}
        <AnimatedSection>
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                  Key <span className="text-teal-600">Facts & Figures</span>
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                {considerations.map((c) => (
                  <div key={c.label} className="flex items-start gap-4 bg-slate-50 rounded-xl p-4 border border-gray-100">
                    <Clock className="h-4 w-4 text-teal-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{c.label}</p>
                      <p className="text-sm text-gray-600">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 max-w-3xl mx-auto bg-teal-50 border border-teal-100 rounded-2xl p-6 flex gap-4">
                <ShieldCheck className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                <p className="text-sm text-teal-800 leading-relaxed">
                  The optimal window is immediately after birth. Once the cord is discarded, these stem cells are lost forever. If you&apos;re expecting, register with a bank by 34 weeks of pregnancy to ensure a collection kit is ready.
                </p>
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
