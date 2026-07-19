import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import CallToAction from "@/components/shared/CallToAction";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { ShieldCheck, CheckCircle2, XCircle, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Verify a Stem Cell Clinic in Malaysia | Safety Checklist",
  description:
    "A step-by-step guide to verifying if a stem cell clinic in Malaysia is legitimate, MOH-licensed, and safe — before you commit to any treatment.",
  keywords:
    "verify stem cell clinic malaysia, legitimate stem cell clinic malaysia, how to choose stem cell clinic, MOH licensed stem cell malaysia",
};

const checklist = [
  {
    item: "MOH Private Healthcare Facility License",
    description: "Every private clinic or hospital offering invasive procedures must hold a valid MOH license. Ask to see it — or look up the facility on the MOH private healthcare directory.",
    mustHave: true,
  },
  {
    item: "MMC-Registered Physician",
    description: "The doctor performing or supervising your treatment must be registered with the Malaysian Medical Council (MMC). Verify at mmc.gov.my.",
    mustHave: true,
  },
  {
    item: "Cell Product Certificate of Analysis (CoA)",
    description: "Any allogeneic cell product used should have a CoA confirming: cell viability (>70%), sterility (negative bacterial/fungal culture), identity (cell surface markers), and donor viral screening.",
    mustHave: true,
  },
  {
    item: "GMP-Compliant Manufacturing",
    description: "Cell products should be manufactured at a Good Manufacturing Practice (GMP) certified facility. Ask where cells are processed and request the facility's GMP certification.",
    mustHave: true,
  },
  {
    item: "Informed Consent Process",
    description: "A reputable clinic will provide written informed consent detailing the procedure, risks, alternatives, and realistic expectations — never rush this step.",
    mustHave: true,
  },
  {
    item: "No 'Guaranteed Cure' Claims",
    description: "Any provider promising guaranteed cures, 100% success rates, or dismissing side effects entirely is violating Malaysian advertising regulations for medical services.",
    mustHave: false,
  },
  {
    item: "Clinical Trial Registration (if applicable)",
    description: "If the clinic offers experimental therapies, they should be registered with NMRR (National Medical Research Register) or clinicaltrials.gov. Ask for the trial number.",
    mustHave: false,
  },
  {
    item: "Post-Treatment Follow-up Protocol",
    description: "Legitimate clinics have structured follow-up at 2 weeks, 1 month, and 3 months post-treatment. This is both medically necessary and ethically required.",
    mustHave: true,
  },
];

const redFlags = [
  "Offering treatments in non-medical settings (hotel rooms, beauty salons)",
  "Unable or unwilling to provide the doctor's MMC registration number",
  "Selling 'stem cell treatments' via social media DMs or WhatsApp without a clinical consultation",
  "Prices dramatically lower than market rate with no explanation",
  "Claims to treat any and all diseases with the same product",
  "No physical clinic address — online-only consultations with delivery to home",
  "Pressure tactics or urgency to sign up immediately",
  "Cannot name the source, type, or manufacturer of the cell product",
];

const resources = [
  { name: "MOH Private Healthcare Facilities Directory", url: "https://www.moh.gov.my", description: "Search for licensed private healthcare facilities" },
  { name: "Malaysian Medical Council (MMC) Register", url: "https://www.mmc.gov.my", description: "Verify doctor registration and specialisation" },
  { name: "NPRA Product Register", url: "https://www.npra.gov.my", description: "Check if a therapeutic product is registered in Malaysia" },
  { name: "NMRR Clinical Trial Registry", url: "https://www.nmrr.gov.my", description: "Find registered clinical trials in Malaysia" },
];

export default function VerifyStemCellClinic() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="How to Verify a"
          highlightedText="Stem Cell Clinic Malaysia"
          description="Before any treatment, do your homework. This checklist protects you from unqualified providers and ensures your safety is in legitimate hands."
          badgeText="Patient Safety · Due Diligence"
        />

        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="relative h-[380px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1516841273335-e39b37888115?w=1400&q=80&auto=format&fit=crop"
                  alt="MOH licensed stem cell clinic verification Malaysia"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent" />
                <div className="absolute bottom-6 left-8 text-white">
                  <p className="text-sm font-semibold uppercase tracking-wider text-teal-300">Clinic Verification</p>
                  <p className="text-xl font-bold">Protect Yourself — Verify Before You Commit</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Checklist */}
        <AnimatedSection>
          <section className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                  The Verification <span className="text-teal-600">Checklist</span>
                </h2>
                <p className="text-lg text-gray-600">
                  Go through each point before committing to a clinic. A legitimate provider will welcome these questions.
                </p>
              </div>
              <div className="space-y-4">
                {checklist.map((c) => (
                  <div
                    key={c.item}
                    className={`rounded-2xl p-5 border ${c.mustHave ? "border-teal-100 bg-teal-50" : "border-gray-100 bg-slate-50"}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${c.mustHave ? "bg-teal-600" : "bg-gray-300"}`}>
                        <CheckCircle2 className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-gray-900 text-sm">{c.item}</h3>
                          {c.mustHave && (
                            <span className="text-xs font-semibold text-teal-700 bg-teal-100 px-2 py-0.5 rounded-full">
                              Must Have
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{c.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Red Flags */}
        <AnimatedSection>
          <section className="py-24 bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
                🚩 Red Flags to <span className="text-red-500">Walk Away From</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {redFlags.map((r) => (
                  <div key={r} className="flex items-start gap-3 bg-red-50 border border-red-100 rounded-xl p-4">
                    <XCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm leading-relaxed">{r}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Resources */}
        <AnimatedSection>
          <section className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
                Official <span className="text-teal-600">Verification Resources</span>
              </h2>
              <div className="space-y-4">
                {resources.map((r) => (
                  <div key={r.name} className="flex items-start gap-4 bg-slate-50 rounded-2xl p-5 border border-gray-100">
                    <ShieldCheck className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-gray-900 text-sm mb-1">{r.name}</p>
                      <p className="text-gray-500 text-xs">{r.description}</p>
                      <p className="text-teal-500 text-xs mt-1">{r.url}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 bg-amber-50 border border-amber-100 rounded-2xl p-6 flex gap-4">
                <AlertCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800 leading-relaxed">
                  If you encounter a provider you suspect is operating illegally or making false medical claims, you can report them to the Ministry of Health Malaysia via the MedikLink complaint portal or call 03-8883 3888.
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
