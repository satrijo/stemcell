import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import CallToAction from "@/components/shared/CallToAction";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Image from "next/image";
import { ShieldCheck, CheckCircle2, FlaskConical } from "lucide-react";

export const metadata: Metadata = {
  title: "Stem Cell Research Malaysia | Universities, Institutions & Progress",
  description:
    "Overview of stem cell research in Malaysia — leading universities, research institutions, key findings, and how Malaysia contributes to global regenerative medicine science.",
  keywords:
    "stem cell research malaysia, stem cell university malaysia, regenerative medicine research malaysia, Malaysian stem cell institute",
};

const institutions = [
  {
    name: "Universiti Malaya (UM)",
    department: "Department of Biomedical Science & Faculty of Medicine",
    focus: "MSC immunomodulation, leukaemia, orthopaedic regeneration",
    notable: "One of Malaysia's leading centres for clinical-grade cell therapy research",
  },
  {
    name: "Universiti Kebangsaan Malaysia (UKM)",
    department: "UKM Medical Molecular Biology Institute (UMBI)",
    focus: "Cancer stem cells, cord blood banking, haematopoiesis",
    notable: "Manages the National Blood Centre cord blood research arm",
  },
  {
    name: "Universiti Sains Malaysia (USM)",
    department: "Institute for Research in Molecular Medicine (INFORMM)",
    focus: "Stem cell differentiation, neural regeneration, gene therapy",
    notable: "Active collaborations with international research networks",
  },
  {
    name: "AIMST University",
    department: "Faculty of Medicine & Health Sciences",
    focus: "Adipose-derived MSCs, wound healing, diabetes",
    notable: "Growing stem cell biology research programme",
  },
  {
    name: "Malaysia Genome & Vaccine Institute (MGVI)",
    department: "National Institutes of Biotechnology Malaysia",
    focus: "Genomics, bioinformatics, cell therapy product development",
    notable: "Government-linked R&D under MOSTI",
  },
];

const milestones = [
  { year: "2009", event: "MOH establishes first formal guidelines for human cell therapy in Malaysia" },
  { year: "2011", event: "National Blood Centre launches cord blood public registry — PBCR" },
  { year: "2015", event: "University Malaya Medical Centre performs 1,000th haematopoietic stem cell transplant" },
  { year: "2018", event: "Malaysian researchers publish MSC immunomodulation data in international peer-reviewed journals" },
  { year: "2021", event: "MOH releases updated Cell, Tissue & Gene Therapy (CTGT) regulatory framework" },
  { year: "2023", event: "Multiple private hospitals in Malaysia launch Phase I/II MSC clinical trials for knee OA and autoimmune disease" },
];

export default function StemCellResearchMalaysia() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Stem Cell Research"
          highlightedText="in Malaysia"
          description="Malaysia's universities, hospitals, and government institutes are actively advancing the science of regenerative medicine — contributing to global knowledge and clinical innovation."
          badgeText="Research · Science · Innovation"
        />

        {/* Institutions */}
        <AnimatedSection>
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                  Leading Research <span className="text-teal-600">Institutions</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Malaysia has a growing network of universities and research institutes publishing in international stem cell and regenerative medicine journals.
                </p>
              </div>
              <div className="space-y-5">
                {institutions.map((inst) => (
                  <div key={inst.name} className="bg-slate-50 rounded-2xl p-6 border border-gray-100">
                    <div className="flex items-start gap-4">
                      <div className="bg-teal-600 w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                        <FlaskConical className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className="font-bold text-gray-900 text-lg">{inst.name}</h3>
                          <span className="text-xs text-teal-600 font-medium">{inst.department}</span>
                        </div>
                        <p className="text-gray-600 text-sm mb-1"><span className="font-semibold">Research focus:</span> {inst.focus}</p>
                        <p className="text-gray-500 text-xs italic">{inst.notable}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Milestones + Image */}
        <AnimatedSection>
          <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
                    Key Malaysian <span className="text-teal-600">Milestones</span>
                  </h2>
                  <div className="space-y-4">
                    {milestones.map((m) => (
                      <div key={m.year} className="flex gap-4 items-start">
                        <div className="text-teal-600 font-extrabold text-sm w-12 shrink-0 pt-0.5">
                          {m.year}
                        </div>
                        <div className="flex-1 flex gap-3 items-start">
                          <CheckCircle2 className="h-4 w-4 text-teal-500 shrink-0 mt-0.5" />
                          <p className="text-gray-700 text-sm leading-relaxed">{m.event}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=700&q=80"
                    alt="Stem cell research laboratory Malaysia"
                    width={700}
                    height={500}
                    className="rounded-3xl shadow-2xl object-cover w-full"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                    <p className="text-2xl font-extrabold text-teal-600">500+</p>
                    <p className="text-sm text-gray-600">Malaysian stem cell publications</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Regulatory note */}
        <AnimatedSection>
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-teal-50 border border-teal-100 rounded-2xl p-8 flex gap-4">
                <ShieldCheck className="h-6 w-6 text-teal-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-teal-900 mb-2">Malaysia&apos;s Regulatory Commitment</h3>
                  <p className="text-sm text-teal-800 leading-relaxed">
                    The National Pharmaceutical Regulatory Agency (NPRA) under MOH oversees all cell, tissue, and gene therapy (CTGT) products in Malaysia. The 2021 CTGT framework aligns Malaysia with international regulatory standards, enabling both research and clinical deployment of approved stem cell therapies under rigorous oversight.
                  </p>
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
