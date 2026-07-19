import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import CallToAction from "@/components/shared/CallToAction";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { CheckCircle2, ShieldCheck, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Hematopoietic Stem Cell Transplant (HSCT) Malaysia | Blood Cancer & Autoimmune",
  description:
    "Complete guide to HSCT in Malaysia — for leukaemia, lymphoma, multiple myeloma, and severe autoimmune disease. Procedure, eligibility, donors, outcomes, and costs.",
  keywords:
    "HSCT malaysia, hematopoietic stem cell transplant malaysia, blood cancer stem cell transplant, bone marrow transplant malaysia",
};

const indications = [
  { category: "Blood Cancers", conditions: ["Acute Myeloid Leukaemia (AML)", "Acute Lymphoblastic Leukaemia (ALL)", "Chronic Myeloid Leukaemia (CML)", "Hodgkin & Non-Hodgkin Lymphoma", "Multiple Myeloma", "Myelodysplastic Syndrome (MDS)"] },
  { category: "Bone Marrow Failure", conditions: ["Aplastic Anaemia", "Fanconi Anaemia", "Paroxysmal Nocturnal Haemoglobinuria (PNH)"] },
  { category: "Autoimmune Disease (Severe)", conditions: ["Relapsing-Remitting Multiple Sclerosis", "Refractory Crohn's Disease", "Systemic Sclerosis (Scleroderma)", "Neuromyelitis Optica"] },
  { category: "Genetic Disorders", conditions: ["Sickle Cell Disease", "Thalassaemia Major", "Severe Combined Immunodeficiency (SCID)"] },
];

const outcomes = [
  { condition: "Acute Leukaemia (first remission)", survival: "50–70%", note: "5-year event-free survival" },
  { condition: "Multiple Myeloma (autologous)", survival: "85–90%", note: "transplant-related mortality <2%" },
  { condition: "Relapsing MS (MIST trial)", survival: "86% NED at 3 years", note: "vs 9% for DMTs" },
  { condition: "Aplastic Anaemia (sibling donor)", survival: ">80%", note: "long-term OS with matched sibling" },
];

const faqs = [
  {
    q: "What is HSCT and why is it different from regular stem cell therapy?",
    a: "HSCT is a medical transplant procedure used to treat blood cancers and severe autoimmune disease. Unlike regenerative MSC therapy (which adds cells to help repair tissue), HSCT destroys the existing blood and immune system with chemotherapy and replaces it entirely with new stem cells — either from the patient or a donor.",
  },
  {
    q: "How long is the hospital stay?",
    a: "Typically 4–6 weeks for the initial transplant and engraftment phase. After discharge, patients require close outpatient monitoring for 3–6 months during the early recovery period.",
  },
  {
    q: "What is graft-versus-host-disease (GvHD)?",
    a: "GvHD occurs in allogeneic transplants when donor immune cells attack the recipient's tissues. Acute GvHD occurs in 30–60% of cases; chronic GvHD in 20–50%. It's managed with immunosuppression and is a major focus of transplant medicine today.",
  },
  {
    q: "What is the cost of HSCT in Malaysia?",
    a: "Autologous HSCT: RM 60,000–120,000. Allogeneic (related donor): RM 100,000–180,000. Allogeneic (unrelated donor): RM 150,000–250,000. These are significantly lower than Singapore (2–3x higher) or the UK/US (5–10x higher).",
  },
];

export default function HSCTransplant() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Hematopoietic Stem Cell"
          highlightedText="Transplant (HSCT)"
          description="The gold standard for blood cancer treatment and severe autoimmune disease — a complete rebuild of the blood and immune system using donor or patient stem cells."
          badgeText="Haematology · Transplant Oncology"
        />

        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="relative h-[380px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1400&q=80&auto=format&fit=crop"
                  alt="Hematopoietic stem cell laboratory Malaysia"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent" />
                <div className="absolute bottom-6 left-8 text-white">
                  <p className="text-sm font-semibold uppercase tracking-wider text-teal-300">Transplant Oncology</p>
                  <p className="text-xl font-bold">Gold Standard for Blood Cancers</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Indications */}
        <AnimatedSection>
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                  Who Is HSCT <span className="text-teal-600">Used For?</span>
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {indications.map((ind) => (
                  <div key={ind.category} className="bg-slate-50 rounded-2xl p-6 border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-teal-600 inline-block" />
                      {ind.category}
                    </h3>
                    <ul className="space-y-2">
                      {ind.conditions.map((c) => (
                        <li key={c} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle2 className="h-4 w-4 text-teal-500 shrink-0" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Outcomes */}
        <AnimatedSection>
          <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                  Clinical <span className="text-teal-600">Outcomes</span>
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Published survival data from major clinical registries and trials.
                </p>
              </div>
              <div className="overflow-x-auto rounded-2xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead className="bg-teal-600 text-white">
                    <tr>
                      <th className="text-left px-6 py-4 font-semibold">Condition</th>
                      <th className="text-left px-6 py-4 font-semibold">Outcome</th>
                      <th className="text-left px-6 py-4 font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {outcomes.map((o, i) => (
                      <tr key={o.condition} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="px-6 py-4 font-medium text-gray-800">{o.condition}</td>
                        <td className="px-6 py-4 text-teal-600 font-bold">{o.survival}</td>
                        <td className="px-6 py-4 text-gray-500 italic text-xs">{o.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Safety note */}
        <AnimatedSection>
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex gap-4">
                <AlertCircle className="h-6 w-6 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-800 mb-2">Important Notice</p>
                  <p className="text-sm text-amber-700 leading-relaxed">
                    HSCT is a high-risk, life-altering medical procedure. Outcomes depend heavily on disease stage, age, organ function, and centre experience. All statistics above are population-level figures from published literature — individual outcomes vary significantly. This information is educational only. Consult a haematologist at a licensed transplant centre for personal evaluation.
                  </p>
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
