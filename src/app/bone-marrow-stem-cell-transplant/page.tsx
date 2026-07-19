import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import CallToAction from "@/components/shared/CallToAction";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Bone Marrow Stem Cell Transplant Malaysia | Procedure & Costs",
  description:
    "Learn about bone marrow stem cell transplants in Malaysia — how they work, conditions treated, donor matching, the procedure, recovery, and costs at Malaysian centres.",
  keywords:
    "bone marrow transplant malaysia, bone marrow stem cell transplant, BMT malaysia, bone marrow donation malaysia",
};

const conditions = [
  "Aplastic Anaemia",
  "Acute Myeloid Leukaemia (AML)",
  "Acute Lymphoblastic Leukaemia (ALL)",
  "Thalassaemia Major",
  "Sickle Cell Disease",
  "Myelodysplastic Syndrome (MDS)",
  "Fanconi Anaemia",
  "Chronic Myeloid Leukaemia (CML)",
];

const donorTypes = [
  {
    type: "Autologous",
    description: "Patient's own marrow is harvested (collected), stored, and reinfused after high-dose treatment. No rejection risk.",
    match: "Self — no HLA matching needed",
    best: "Multiple myeloma, lymphoma",
  },
  {
    type: "Sibling Donor (Matched)",
    description: "HLA-identical sibling is the ideal donor — 25% chance of a full 10/10 match. Best rejection and GvHD profile among allogeneic options.",
    match: "HLA-matched sibling",
    best: "Leukaemia, aplastic anaemia",
  },
  {
    type: "Unrelated Donor (MUD)",
    description: "Matched Unrelated Donor sourced from national or international registries. Malaysia has access to international registries with millions of donors.",
    match: "8–10/10 HLA match from registry",
    best: "When no sibling match is available",
  },
  {
    type: "Haploidentical (Half-Match)",
    description: "Parent, child, or half-matched sibling. Modern post-transplant cyclophosphamide (PTCy) protocols have made haploidentical BMT a viable option.",
    match: "5/10 HLA match (half-matched family)",
    best: "When no matched donor available",
  },
];

const phases = [
  { title: "Pre-Transplant Workup", description: "Comprehensive medical evaluation, HLA typing, organ function tests, infectious disease screening, and consent discussions." },
  { title: "Stem Cell Collection", description: "Bone marrow is harvested under general anaesthesia via multiple needle aspirations from the iliac crest of the hip bone. For peripheral blood SCT, G-CSF mobilisation is used instead." },
  { title: "Conditioning", description: "High-dose chemotherapy (and sometimes total body irradiation) eliminates diseased marrow and suppresses immunity to prevent rejection." },
  { title: "Transplant Infusion", description: "The stem cell product is infused intravenously — similar to a blood transfusion. Takes 1–5 hours." },
  { title: "Engraftment Period", description: "Days +10 to +21: New stem cells begin producing blood cells. This is the most critical and vulnerable period — patients are in isolation." },
  { title: "Recovery & Follow-up", description: "Discharge once blood counts recover. Outpatient monitoring for 3–12 months for complications (GvHD, infection, relapse)." },
];

export default function BoneMarrowTransplant() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Bone Marrow Stem Cell"
          highlightedText="Transplant Malaysia"
          description="One of medicine's most powerful interventions — a complete rebuild of the blood-forming system. Used to treat leukaemia, aplastic anaemia, thalassaemia, and more."
          badgeText="Haematology · Transplant Medicine"
        />

        {/* Conditions */}
        <AnimatedSection>
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
                    Conditions <span className="text-teal-600">Treated</span>
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
                    src="https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=700&q=80"
                    alt="Bone marrow transplant Malaysia"
                    width={700}
                    height={500}
                    className="rounded-3xl shadow-2xl object-cover w-full"
                  />
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Donor Types */}
        <AnimatedSection>
          <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                  Donor <span className="text-teal-600">Options</span>
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {donorTypes.map((d) => (
                  <div key={d.type} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{d.type}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{d.description}</p>
                    <p className="text-xs text-gray-500"><span className="font-semibold">Matching:</span> {d.match}</p>
                    <p className="text-xs text-gray-500"><span className="font-semibold">Best for:</span> {d.best}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Phases */}
        <AnimatedSection>
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                  The Transplant <span className="text-teal-600">Process</span>
                </h2>
              </div>
              <div className="space-y-6">
                {phases.map((p, i) => (
                  <div key={p.title} className="flex gap-6 items-start">
                    <div className="w-10 h-10 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-5 border border-gray-100 flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{p.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{p.description}</p>
                    </div>
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
