import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import CallToAction from "@/components/shared/CallToAction";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Types of Stem Cells Explained | Embryonic, Adult, MSC, iPSC",
  description:
    "A complete guide to the different types of stem cells — embryonic, adult, mesenchymal, hematopoietic, and induced pluripotent stem cells (iPSC). Learn which is used in therapy.",
  keywords:
    "types of stem cells, embryonic stem cells, adult stem cells, MSC, iPSC, hematopoietic stem cells, stem cell types explained",
};

const types = [
  {
    name: "Embryonic Stem Cells (ESCs)",
    source: "Early human embryos (blastocyst stage)",
    potency: "Pluripotent — can become any cell type",
    clinical: "Limited clinical use due to ethical concerns and immune rejection risk",
    pros: ["Greatest differentiation potential", "Well-studied"],
    cons: ["Ethical controversy", "Risk of immune rejection", "Not used in Malaysia"],
    color: "blue",
  },
  {
    name: "Adult / Somatic Stem Cells",
    source: "Bone marrow, fat tissue, blood, dental pulp",
    potency: "Multipotent — can become several related cell types",
    clinical: "Most widely used in clinical practice globally",
    pros: ["No ethical concerns", "Autologous use possible", "Established safety profile"],
    cons: ["More limited differentiation range than ESCs"],
    color: "teal",
  },
  {
    name: "Mesenchymal Stem Cells (MSCs)",
    source: "Bone marrow, adipose tissue, umbilical cord (Wharton's jelly)",
    potency: "Multipotent — bone, cartilage, muscle, fat, connective tissue",
    clinical: "Primary cells used in Malaysian regenerative medicine clinics",
    pros: ["Strong anti-inflammatory effect", "Low immunogenicity", "Well tolerated", "MOH-regulated use in Malaysia"],
    cons: ["Variable potency between donors"],
    color: "blue",
  },
  {
    name: "Hematopoietic Stem Cells (HSCs)",
    source: "Bone marrow, peripheral blood, umbilical cord blood",
    potency: "Multipotent — all blood and immune cells",
    clinical: "Used in bone marrow transplants for blood cancers and autoimmune disease",
    pros: ["Long clinical track record", "Proven in haematological malignancies"],
    cons: ["Requires matched donor for allogeneic use", "Conditioning regimen required"],
    color: "teal",
  },
  {
    name: "Induced Pluripotent Stem Cells (iPSCs)",
    source: "Adult cells reprogrammed to embryonic-like state",
    potency: "Pluripotent — functionally similar to ESCs",
    clinical: "Primarily in research; clinical applications emerging",
    pros: ["Patient-specific (autologous)", "No ethical concerns", "High differentiation potential"],
    cons: ["Complex manufacturing", "Mutation risk from reprogramming", "Not yet mainstream clinically"],
    color: "blue",
  },
  {
    name: "Exosomes / Extracellular Vesicles",
    source: "Secreted by MSCs and other stem cells",
    potency: "Not cells themselves — carry regenerative signals",
    clinical: "Growing use in aesthetic medicine and neurological support",
    pros: ["Off-the-shelf availability", "No live cell risks", "Easier to store and ship"],
    cons: ["Standardisation challenges", "Evidence base still developing"],
    color: "teal",
  },
];

export default function TypesOfStemCells() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Types of Stem Cells"
          highlightedText="Explained"
          description="Not all stem cells are the same. Understanding the differences between ESCs, MSCs, HSCs, and iPSCs is essential to making informed decisions about therapy."
          badgeText="Patient Education · Science-Based"
        />

        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="relative h-[380px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=1400&q=80&auto=format&fit=crop"
                  alt="Stem cell biology laboratory microscopy"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent" />
                <div className="absolute bottom-6 left-8 text-white">
                  <p className="text-sm font-semibold uppercase tracking-wider text-teal-300">Cell Biology</p>
                  <p className="text-xl font-bold">Embryonic, Adult, MSC, iPSC — Explained</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <AnimatedSection>
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                  The 6 Main Types of <span className="text-teal-600">Stem Cells</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Each type has distinct properties, sources, and clinical applications. Here&apos;s a clear breakdown.
                </p>
              </div>

              <div className="space-y-8">
                {types.map((t, i) => (
                  <div
                    key={t.name}
                    className="bg-slate-50 rounded-3xl p-8 border border-gray-100"
                  >
                    <div className="grid lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-1">
                        <span className="text-sm font-bold text-teal-600 mb-2 block">TYPE {String(i + 1).padStart(2, "0")}</span>
                        <h3 className="text-xl font-extrabold text-gray-900 mb-3">{t.name}</h3>
                        <div className="space-y-2 text-sm text-gray-600">
                          <p><span className="font-semibold text-gray-800">Source:</span> {t.source}</p>
                          <p><span className="font-semibold text-gray-800">Potency:</span> {t.potency}</p>
                          <p><span className="font-semibold text-gray-800">Clinical use:</span> {t.clinical}</p>
                        </div>
                      </div>
                      <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
                        <div>
                          <p className="text-sm font-bold text-green-700 mb-3">✓ Advantages</p>
                          <ul className="space-y-2">
                            {t.pros.map((p) => (
                              <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                                <CheckCircle2 className="h-4 w-4 text-teal-500 shrink-0 mt-0.5" />
                                {p}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-red-600 mb-3">✗ Limitations</p>
                          <ul className="space-y-2">
                            {t.cons.map((c) => (
                              <li key={c} className="flex items-start gap-2 text-sm text-gray-700">
                                <span className="text-red-400 shrink-0">—</span>
                                {c}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick comparison note */}
              <div className="mt-12 bg-gradient-to-br from-teal-50 to-teal-50 rounded-3xl p-8 border border-teal-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Which Type Is Used in Malaysia?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The vast majority of clinical stem cell therapies in Malaysia use <strong>Mesenchymal Stem Cells (MSCs)</strong> — either autologous (from the patient&apos;s own bone marrow or fat) or allogeneic (from umbilical cord Wharton&apos;s jelly). MSCs are preferred for their excellent safety profile, potent anti-inflammatory effects, and low risk of immune rejection. Hematopoietic stem cells (HSCs) are used in transplant settings for blood cancers and severe autoimmune disease.
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
