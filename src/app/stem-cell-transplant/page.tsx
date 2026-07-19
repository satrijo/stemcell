import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import CallToAction from "@/components/shared/CallToAction";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Stem Cell Transplant Malaysia | Complete Guide to All Types",
  description:
    "Comprehensive guide to stem cell transplants in Malaysia — HSCT, bone marrow, autologous, and allogeneic transplants. Who qualifies, what to expect, and where to get treated.",
  keywords:
    "stem cell transplant malaysia, bone marrow transplant malaysia, HSCT malaysia, autologous allogeneic stem cell transplant",
};

const types = [
  {
    name: "Hematopoietic Stem Cell Transplant (HSCT)",
    description:
      "The most established form — used for blood cancers and severe autoimmune disease. Rebuilds the entire blood and immune system.",
    href: "/hematopoietic-stem-cell-transplant/",
    conditions: ["Leukaemia", "Lymphoma", "Multiple Myeloma", "Severe MS & Crohn's"],
  },
  {
    name: "Bone Marrow Transplant",
    description:
      "Stem cells are harvested directly from the bone marrow and infused to rebuild blood cell production after high-dose chemotherapy.",
    href: "/bone-marrow-stem-cell-transplant/",
    conditions: ["Aplastic Anaemia", "Leukaemia", "Sickle Cell Disease", "Thalassaemia"],
  },
  {
    name: "Autologous Transplant",
    description:
      "Your own stem cells are collected, stored, and reinfused after high-dose conditioning. No donor matching required — no rejection risk.",
    href: "/autologous-stem-cell-transplant/",
    conditions: ["Multiple Myeloma", "Hodgkin Lymphoma", "Non-Hodgkin Lymphoma"],
  },
  {
    name: "Allogeneic Transplant",
    description:
      "Stem cells from a matched donor (sibling, unrelated, or cord blood). The donor's immune system can also fight remaining cancer cells.",
    href: "/allogeneic-stem-cell-transplant/",
    conditions: ["AML / ALL", "MDS", "Chronic Myeloid Leukaemia", "Bone Marrow Failure"],
  },
];

const steps = [
  { step: "01", title: "Evaluation", description: "Full medical assessment, disease staging, organ function tests, and HLA typing for matching (allogeneic)." },
  { step: "02", title: "Conditioning", description: "High-dose chemotherapy and/or radiation to eliminate diseased cells and make room for new stem cells." },
  { step: "03", title: "Transplant Day", description: "Stem cells are infused via IV — similar to a blood transfusion. The process typically takes 1–5 hours." },
  { step: "04", title: "Engraftment", description: "New stem cells travel to bone marrow and begin producing blood cells. This takes 2–4 weeks and is the critical monitoring period." },
  { step: "05", title: "Recovery", description: "Hospital discharge once counts stabilise. Outpatient monitoring for months to watch for complications or relapse." },
];

export default function StemCellTransplant() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Stem Cell Transplant"
          highlightedText="Malaysia"
          description="A life-saving procedure that rebuilds your blood and immune system. Comprehensive guide to all transplant types available in Malaysia at MOH-accredited centres."
          badgeText="Haematology · MOH Accredited Centres"
        />

        {/* Types */}
        <AnimatedSection>
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                  Types of <span className="text-teal-600">Stem Cell Transplants</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Each transplant type has distinct indications, donor requirements, and recovery profiles.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {types.map((t) => (
                  <Link
                    key={t.name}
                    href={t.href}
                    className="group bg-slate-50 rounded-3xl p-8 border border-gray-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                      {t.name}
                    </h3>
                    <p className="text-gray-600 mb-5 leading-relaxed text-sm">{t.description}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {t.conditions.map((c) => (
                        <span key={c} className="text-xs font-medium px-3 py-1 bg-teal-100 text-teal-700 rounded-full">
                          {c}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-teal-600 font-semibold text-sm">
                      Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
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
                  The Transplant <span className="text-teal-600">Journey</span>
                </h2>
              </div>
              <div className="grid md:grid-cols-5 gap-6">
                {steps.map((s) => (
                  <div key={s.step} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-teal-600 text-white font-extrabold text-lg flex items-center justify-center mx-auto mb-4">
                      {s.step}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">{s.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Image + Info */}
        <AnimatedSection>
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=700&q=80"
                    alt="Stem cell transplant Malaysia hospital"
                    width={700}
                    height={500}
                    className="rounded-3xl shadow-2xl object-cover w-full"
                  />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                    Transplant in Malaysia —{" "}
                    <span className="text-teal-600">World-Class at Lower Cost</span>
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Malaysia&apos;s leading transplant centres — including University Malaya Medical Centre (UMMC), Hospital Ampang, and select private hospitals — perform stem cell transplants at internationally comparable standards, at a fraction of Western costs.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Joint Commission International (JCI) accredited centres",
                      "Experienced haematologists trained at UK, US, and Australian institutions",
                      "National Bone Marrow Donor Registry (PBMDR) access",
                      "Cord blood bank access via public and private registries",
                      "Cost advantage: 30–70% lower than Singapore, UK, or US",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <ShieldCheck className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
