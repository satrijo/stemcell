import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import CallToAction from "@/components/shared/CallToAction";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Image from "next/image";
import { ShieldCheck, Activity, CheckCircle2, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Stem Cell Therapy for Autoimmune Disease Malaysia",
  description:
    "Stem cell therapy for autoimmune diseases in Malaysia — Lupus, Rheumatoid Arthritis, Crohn's, and more. Immunomodulation and long-term remission strategies.",
  keywords:
    "stem cell autoimmune disease malaysia, stem cell lupus malaysia, stem cell rheumatoid arthritis malaysia, autoimmune stem cell therapy",
};

const conditions = [
  { name: "Systemic Lupus Erythematosus (SLE)" },
  { name: "Rheumatoid Arthritis" },
  { name: "Crohn's Disease" },
  { name: "Multiple Sclerosis" },
  { name: "Type 1 Diabetes" },
  { name: "Ankylosing Spondylitis" },
  { name: "Myasthenia Gravis" },
  { name: "Psoriasis & Psoriatic Arthritis" },
  { name: "Sjögren's Syndrome" },
  { name: "Systemic Sclerosis (Scleroderma)" },
];

const howItWorks = [
  {
    step: "01",
    title: "Immune Reset",
    description:
      "In HSCT protocols, the dysfunctional immune system is first suppressed, then rebuilt using a clean set of stem cells — effectively 'rebooting' immune tolerance.",
  },
  {
    step: "02",
    title: "Immunomodulation",
    description:
      "MSCs secrete powerful anti-inflammatory cytokines (IL-10, TGF-β) that reduce chronic inflammation without the side effects of long-term immunosuppressant drugs.",
  },
  {
    step: "03",
    title: "Tissue Repair",
    description:
      "Stem cells help repair tissues damaged by years of autoimmune attack — whether joints, gut lining, myelin sheaths, or organ tissue.",
  },
  {
    step: "04",
    title: "Sustained Remission",
    description:
      "Clinical trials show some patients achieve drug-free remission for years following stem cell therapy — a milestone conventional treatment rarely achieves.",
  },
];

const evidence = [
  "HSCT has achieved 60–80% sustained remission in relapsing-remitting MS in published trials",
  "Phase II trials show MSC therapy reduces Crohn's disease activity index significantly",
  "Lupus nephritis patients show improved renal function post-MSC treatment",
  "RA patients report 50%+ reduction in joint pain and swelling scores after MSC infusions",
];

const faqs = [
  {
    q: "Is stem cell therapy better than biologics for autoimmune disease?",
    a: "They work differently. Biologics target specific immune pathways to reduce symptoms. Stem cell therapy aims to re-educate or reset the immune system — potentially achieving remission rather than just symptom control. Many patients explore stem cells after failing multiple biologic therapies.",
  },
  {
    q: "Which type of stem cell therapy is best for autoimmune disease?",
    a: "HSCT is favoured for severe, refractory autoimmune conditions (especially MS, Crohn's, SLE). MSC therapy is preferred for milder disease or patients who cannot tolerate the conditioning regimen required for HSCT.",
  },
  {
    q: "What are the risks?",
    a: "HSCT carries higher risk due to the chemotherapy conditioning phase — though centres with experience have significantly reduced treatment-related mortality to below 1%. MSC therapy is considerably safer with a good tolerability profile.",
  },
  {
    q: "Can I continue my current medications during stem cell therapy?",
    a: "This depends on the treatment protocol. Some medications may need to be paused while others are maintained. Your physician will review your medication list and provide specific guidance.",
  },
];

export default function AutoimmuneStemCellTherapy() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Stem Cell Therapy for"
          highlightedText="Autoimmune Disease"
          description="When the immune system attacks itself, regenerative medicine offers a genuine path toward remission — not just symptom management. Available at MOH-regulated clinics in Malaysia."
          badgeText="Immunology · Evidence-Based"
        />

        {/* How It Works */}
        <AnimatedSection>
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                  How Stem Cells Treat{" "}
                  <span className="text-teal-600">Autoimmune Disease</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Two primary strategies — immunomodulation and immune reset — both aimed at long-term remission.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {howItWorks.map((h) => (
                  <div key={h.step} className="relative">
                    <div className="text-6xl font-black text-teal-100 mb-4 leading-none">
                      {h.step}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{h.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{h.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Conditions + Evidence */}
        <AnimatedSection>
          <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16">
                {/* Conditions */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
                    Conditions <span className="text-teal-600">Treated</span>
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {conditions.map((c) => (
                      <div
                        key={c.name}
                        className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100"
                      >
                        <CheckCircle2 className="h-5 w-5 text-teal-500 shrink-0" />
                        <span className="text-gray-700 text-sm font-medium">{c.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Evidence */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
                    Clinical <span className="text-teal-600">Evidence</span>
                  </h2>
                  <div className="space-y-4">
                    {evidence.map((e) => (
                      <div
                        key={e}
                        className="flex gap-4 bg-white rounded-xl p-4 border border-gray-100"
                      >
                        <ShieldCheck className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                        <p className="text-gray-700 text-sm leading-relaxed">{e}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Image + Disclaimer */}
        <AnimatedSection>
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                    Beyond Symptom Control —{" "}
                    <span className="text-teal-600">Aiming for Remission</span>
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Most autoimmune patients spend decades on medications that suppress — but never resolve — their disease. Stem cell therapy is the first category of treatment that meaningfully targets disease remission, giving patients hope for a life with fewer medications and more freedom.
                  </p>
                  <div className="flex items-start gap-3 bg-teal-50 rounded-2xl p-5 border border-teal-100">
                    <Activity className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-teal-800 leading-relaxed">
                      Our partner clinics work alongside rheumatologists, neurologists, and gastroenterologists to ensure integrated care for autoimmune patients.
                    </p>
                  </div>
                  <div className="mt-4 flex items-start gap-3 bg-amber-50 rounded-2xl p-5 border border-amber-100">
                    <AlertCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-amber-800 leading-relaxed">
                      Treatment outcomes vary. Stem cell therapy for autoimmune disease is still evolving. Always consult with a qualified specialist before discontinuing any existing medication.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=80"
                    alt="Stem cell therapy autoimmune disease Malaysia"
                    width={700}
                    height={500}
                    className="rounded-3xl shadow-2xl object-cover w-full"
                  />
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
