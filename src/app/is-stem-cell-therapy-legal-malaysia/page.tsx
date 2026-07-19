import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import CallToAction from "@/components/shared/CallToAction";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { ShieldCheck, CheckCircle2, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Is Stem Cell Therapy Legal in Malaysia? | MOH Regulations Explained",
  description:
    "A clear, accurate guide to the legal status of stem cell therapy in Malaysia — what's regulated, what's permitted, and how to ensure the clinic you choose is fully compliant.",
  keywords:
    "is stem cell therapy legal malaysia, stem cell therapy regulations malaysia, MOH stem cell malaysia, NPRA cell therapy malaysia",
};

const legalFramework = [
  {
    law: "Control of Drugs and Cosmetics Regulations 1984",
    role: "Governs all therapeutic products including biological medicines. Cell therapy products fall under this unless specifically carved out.",
  },
  {
    law: "Medical Device Act 2012",
    role: "Regulates medical devices used in stem cell procedures (e.g., apheresis machines, cell processing equipment).",
  },
  {
    law: "Private Healthcare Facilities and Services Act 1998",
    role: "Requires all private hospitals and specialist centres to be licensed under MOH. Stem cell procedures must be performed in licensed facilities.",
  },
  {
    law: "Cell, Tissue and Gene Therapy (CTGT) Framework 2021",
    role: "Specific regulatory pathway for cell therapies — includes manufacturing standards, clinical trial requirements, and market authorisation for commercial CTGT products.",
  },
];

const permitted = [
  "Autologous stem cell procedures (using patient's own cells) at licensed facilities",
  "Bone marrow and cord blood transplants at accredited transplant centres",
  "MSC infusions as part of approved clinical research protocols",
  "Cord blood banking at MOH-licensed stem cell banks",
  "Stem cell-based cosmetic/aesthetic procedures at licensed aesthetic clinics",
];

const grey = [
  "Commercial allogeneic MSC infusions not under a registered clinical trial",
  "Exosome therapies — regulatory status is evolving; not yet formally classified",
  "Offshore-sourced cells imported without NPRA approval",
];

const prohibited = [
  "Embryonic stem cell-based therapies in a commercial or non-research setting",
  "Clinics administering undefined or uncharacterised cell mixtures",
  "Providers claiming to cure specific diseases with no trial evidence",
];

const verificationSteps = [
  "Request the clinic&apos;s MOH Private Healthcare Facility License",
  "Ask for the cell product&apos;s Certificate of Analysis (CoA) — viability, sterility, identity testing",
  "Verify the doctor is registered with the Malaysian Medical Council (MMC)",
  "Check if the treatment is part of a registered clinical trial (clinicaltrials.gov / NMRR)",
  "Avoid any clinic unwilling to share these documents",
];

export default function StemCellLegalMalaysia() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Is Stem Cell Therapy"
          highlightedText="Legal in Malaysia?"
          description="Yes — with important nuances. Malaysia has a structured regulatory framework for cell therapies. Know the rules, know your rights, and protect yourself from unregulated providers."
          badgeText="Regulation · MOH · NPRA"
        />

        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="relative h-[380px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1400&q=80&auto=format&fit=crop"
                  alt="Malaysia Ministry of Health regulated medical facility"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent" />
                <div className="absolute bottom-6 left-8 text-white">
                  <p className="text-sm font-semibold uppercase tracking-wider text-teal-300">MOH · NPRA Regulated</p>
                  <p className="text-xl font-bold">Legal, Safe, and Properly Overseen</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Short answer */}
        <AnimatedSection>
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-teal-50 border border-teal-200 rounded-2xl p-8 flex gap-4">
                <ShieldCheck className="h-6 w-6 text-teal-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-teal-900 mb-2 text-lg">The Short Answer</h3>
                  <p className="text-teal-800 leading-relaxed">
                    Stem cell therapy is <strong>legal in Malaysia</strong> when performed at a licensed healthcare facility, by a registered Malaysian Medical Council (MMC) physician, using characterised and tested cell products. Autologous procedures (using your own cells) and transplants at accredited centres are well-established. Some allogeneic treatments operate under clinical trial protocols. The grey areas exist mainly for commercial off-the-shelf allogeneic products without formal NPRA approval.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Legal Framework */}
        <AnimatedSection>
          <section className="py-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
                The <span className="text-teal-600">Legal Framework</span>
              </h2>
              <div className="space-y-4">
                {legalFramework.map((l) => (
                  <div key={l.law} className="bg-white rounded-2xl p-5 border border-gray-100">
                    <h3 className="font-bold text-gray-900 text-sm mb-1">{l.law}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{l.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Permitted / Grey / Prohibited */}
        <AnimatedSection>
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                  What&apos;s <span className="text-teal-600">Permitted, Grey, & Prohibited</span>
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Permitted */}
                <div>
                  <h3 className="font-bold text-green-700 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5" /> Clearly Permitted
                  </h3>
                  <ul className="space-y-3">
                    {permitted.map((p) => (
                      <li key={p} className="bg-green-50 border border-green-100 rounded-xl p-3 text-sm text-gray-700 leading-relaxed">
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Grey */}
                <div>
                  <h3 className="font-bold text-amber-700 mb-4 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" /> Grey Areas (Evolving)
                  </h3>
                  <ul className="space-y-3">
                    {grey.map((g) => (
                      <li key={g} className="bg-amber-50 border border-amber-100 rounded-xl p-3 text-sm text-gray-700 leading-relaxed">
                        {g}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Prohibited */}
                <div>
                  <h3 className="font-bold text-red-700 mb-4 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" /> Not Permitted
                  </h3>
                  <ul className="space-y-3">
                    {prohibited.map((pr) => (
                      <li key={pr} className="bg-red-50 border border-red-100 rounded-xl p-3 text-sm text-gray-700 leading-relaxed">
                        {pr}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Verification */}
        <AnimatedSection>
          <section className="py-16 bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-8 text-center">
                How to Verify a <span className="text-teal-600">Compliant Clinic</span>
              </h2>
              <ul className="space-y-3">
                {verificationSteps.map((v, i) => (
                  <li key={i} className="flex items-start gap-3 bg-white rounded-xl px-5 py-4 border border-gray-100">
                    <span className="text-teal-600 font-extrabold text-sm shrink-0 pt-0.5">{String(i + 1).padStart(2, "0")}</span>
                    <p className="text-gray-700 text-sm leading-relaxed">{v}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </AnimatedSection>

        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
