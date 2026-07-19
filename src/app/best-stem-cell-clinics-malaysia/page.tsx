import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import CallToAction from "@/components/shared/CallToAction";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { CheckCircle2, ShieldAlert, Award, Microscope, UserRound, Building2, FileText, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Best Stem Cell Clinics in Malaysia | How to Choose",
  description:
    "Find a trusted stem cell centre in Malaysia offering advanced regenerative treatments, experienced specialists, and comprehensive patient care.",
};

const criteria = [
  {
    title: "MOH & NPRA Compliance",
    description: "The clinic must strictly adhere to the guidelines set by the Ministry of Health Malaysia and the National Pharmaceutical Regulatory Agency.",
    icon: <Award className="w-6 h-6 text-teal-600" />,
  },
  {
    title: "CGMP Certified Labs",
    description: "Cells must be processed in Current Good Manufacturing Practice (CGMP) certified clean rooms to ensure sterility and cell viability.",
    icon: <Microscope className="w-6 h-6 text-teal-600" />,
  },
  {
    title: "Specialist Medical Team",
    description: "Treatments should be prescribed and administered by specialists relevant to your condition, not general practitioners.",
    icon: <UserRound className="w-6 h-6 text-teal-600" />,
  },
  {
    title: "Transparent Cell Sourcing",
    description: "The clinic must provide clear documentation on where the cells come from and how they are screened for infectious diseases.",
    icon: <FileText className="w-6 h-6 text-teal-600" />,
  },
  {
    title: "Proper Facility Grade",
    description: "Procedures should be performed in clinical environments equipped to handle medical emergencies, not just aesthetic centers.",
    icon: <Building2 className="w-6 h-6 text-teal-600" />,
  },
  {
    title: "Evidence-Based Protocols",
    description: "The clinic avoids exaggerated claims and instead provides treatments backed by clinical data and realistic patient expectations.",
    icon: <ShieldAlert className="w-6 h-6 text-teal-600" />,
  },
];

const questions = [
  "What is the specific source of the stem cells you use?",
  "Are your laboratory facilities CGMP certified?",
  "Who exactly will be administering the treatment, and what are their qualifications?",
  "Can you provide a certificate of analysis (COA) for the cell product?",
  "What is the viability and total cell count of the treatment I will receive?",
  "What is your protocol for follow-up care and monitoring?",
];

export default function BestClinicsMalaysia() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Finding the Right"
          highlightedText="Stem Cell Centre"
          description="Navigating your options in Malaysia safely. Learn the critical criteria for identifying legitimate, high-quality regenerative medicine providers."
        />

        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="relative h-[380px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1400&q=80&auto=format&fit=crop"
                  alt="Premium stem cell clinic interior in Malaysia"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent" />
                <div className="absolute bottom-6 left-8 text-white">
                  <p className="text-sm font-semibold uppercase tracking-wider text-teal-300">MOH Certified Centres</p>
                  <p className="text-xl font-bold">Finding the Right Clinic Safely</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* How We Verify */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                  The Importance of <span className="gradient-text">Verification</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  As stem cell therapy grows in popularity across Malaysia, so does the number of clinics offering these services. However, not all facilities maintain the same standards of safety, ethics, and clinical efficacy.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Choosing the right center is the most critical decision in your regenerative medicine journey. A legitimate provider prioritizing patient safety will always be transparent about their credentials, laboratory standards, and expected outcomes.
                </p>
                <div className="bg-teal-50 border border-teal-100 rounded-2xl p-6">
                  <h3 className="font-bold text-teal-900 mb-3 flex items-center gap-2">
                    <ShieldAlert className="w-5 h-5 text-teal-600" /> Red Flags to Avoid:
                  </h3>
                  <ul className="space-y-2">
                    {["Guarantees of a 100% cure for incurable diseases", "Refusal to provide cell count or viability data", "Treatments administered in non-clinical hotel settings", "Unclear origins of allogeneic (donor) cells"].map((flag, i) => (
                      <li key={i} className="flex gap-3 text-teal-800 text-sm">
                        <span className="font-bold">•</span> {flag}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Visual checklist */}
                  {[
                    "MOH Guidelines Compliance",
                    "NPRA Product Registration",
                    "CGMP Lab Processing",
                    "Board-Certified Specialists",
                    "Transparent Cell Viability",
                    "Ethical Sourcing Standards"
                  ].map((item, idx) => (
                    <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center">
                      <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                        <CheckCircle2 className="w-5 h-5 text-teal-600" />
                      </div>
                      <span className="font-medium text-gray-900">{item}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* What to Look For */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-16 text-center">
                6 Criteria of a <span className="gradient-text">Top-Tier Clinic</span>
              </h2>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {criteria.map((item, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.1}>
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 h-full shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-6">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Questions to Ask */}
        <section className="py-20 bg-teal-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                  Essential <span className="text-teal-200">Questions to Ask</span>
                </h2>
                <p className="text-lg text-teal-100">
                  Take this list with you to your consultation. A reputable doctor will welcome these questions and answer them clearly.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl border border-teal-200 p-8 md:p-10">
                <ul className="space-y-6">
                  {questions.map((q, idx) => (
                    <li key={idx} className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 font-bold">
                        {idx + 1}
                      </div>
                      <span className="text-gray-700 text-lg leading-relaxed pt-0.5">{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="flex items-start gap-4 p-6 bg-yellow-50 border border-yellow-200 rounded-2xl">
                <AlertTriangle className="w-6 h-6 text-yellow-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-yellow-900 mb-2">Medical Disclaimer</h4>
                  <p className="text-sm text-yellow-800 leading-relaxed">
                    The information provided on this website is for educational purposes only and does not constitute medical advice. StemCell.my does not endorse any specific clinic, doctor, or treatment. Always consult with a qualified, licensed healthcare professional before making any medical decisions. Results from stem cell therapies vary by individual and are not guaranteed.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <CallToAction />
      </main>
      <Footer />
    </>
  );
}