import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import CallToAction from "@/components/shared/CallToAction";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Image from "next/image";
import { Stethoscope, FlaskConical, Activity, ShieldCheck, HelpCircle, CheckCircle2, UserCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "What is Stem Cell Therapy? | Complete Guide",
  description:
    "Curious what stem cell therapy actually involves? Get a clear, patient-friendly explanation of the process, uses, and safety considerations in Malaysia.",
};

const processSteps = [
  {
    icon: <Stethoscope className="w-6 h-6 text-white" />,
    title: "1. Medical Assessment",
    description: "A doctor reviews your medical history, imaging (like MRIs), and conducts blood tests to ensure you are a viable candidate for regenerative medicine.",
  },
  {
    icon: <FlaskConical className="w-6 h-6 text-white" />,
    title: "2. Cell Collection & Processing",
    description: "Cells are either harvested from your body (fat or bone marrow) or obtained from a certified laboratory (umbilical cord MSCs). They are concentrated in a sterile environment.",
  },
  {
    icon: <Activity className="w-6 h-6 text-white" />,
    title: "3. Administration",
    description: "The concentrated cells are administered either via targeted injection (e.g., into a knee joint) or via intravenous (IV) drip for systemic conditions.",
  },
];

const faqs = [
  {
    q: "Is stem cell therapy painful?",
    a: "Most targeted injections involve local anesthesia, making the procedure no more painful than a standard joint injection or blood draw. IV therapies are entirely painless.",
  },
  {
    q: "How long does a session take?",
    a: "The actual administration usually takes between 30 minutes to 2 hours, depending on whether it is a targeted injection or an IV drip. It is an outpatient procedure, meaning you go home the same day.",
  },
  {
    q: "Are the cells manipulated genetically?",
    a: "No. In clinical therapies available in Malaysia, mesenchymal stem cells (MSCs) are simply isolated, expanded in number, and concentrated. Their genetics are not altered.",
  },
];

export default function WhatIsStemCellTherapy() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="What is Stem"
          highlightedText="Cell Therapy?"
          description="A patient-friendly guide to understanding how regenerative medicine works, what it treats, and what to expect."
        />

        {/* What Is It */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                  Moving Beyond <span className="gradient-text">Symptom Management</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Traditional medicine often focuses on managing symptoms—prescribing painkillers for joint pain or anti-inflammatories for autoimmune conditions. 
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  <strong>Stem cell therapy</strong>, a branch of regenerative medicine, seeks to address the root cause. It involves introducing healthy, concentrated stem cells into the body to promote the repair response of diseased, dysfunctional, or injured tissue.
                </p>
                <div className="p-6 bg-teal-50 border border-teal-100 rounded-2xl">
                  <p className="text-teal-900 font-medium">
                    Think of it as planting seeds (stem cells) and fertilizer (growth factors) in a barren garden. The therapy provides the raw materials your body needs to heal itself from within.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2} className="relative h-[450px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1584362917165-526a968579e8?w=800&q=80"
                  alt="Medical professional with patient"
                  fill
                  className="object-cover"
                />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* The Process */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                  The Treatment <span className="gradient-text">Process</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  While every protocol is customized to the patient, most stem cell therapies follow a similar three-step journey.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connector line for desktop */}
              <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-teal-100" />
              
              {processSteps.map((step, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.1} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-teal-600 flex items-center justify-center mb-6 shadow-xl shadow-teal-600/20 border-4 border-white">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Profile */}
        <section className="py-20 bg-teal-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection>
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                  Safety &amp; <span className="text-teal-200">Side Effects</span>
                </h2>
                <p className="text-lg text-teal-100 mb-6 leading-relaxed">
                  Stem cell therapy utilizing Adult Mesenchymal Stem Cells (MSCs) has an excellent safety profile documented across thousands of clinical trials globally.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3 text-teal-100">
                    <CheckCircle2 className="w-6 h-6 text-white shrink-0" />
                    <span><strong>No Rejection Risk:</strong> MSCs are "immune-privileged," meaning they do not trigger an immune response or rejection, even if they come from a donor (allogeneic).</span>
                  </li>
                  <li className="flex gap-3 text-teal-100">
                    <CheckCircle2 className="w-6 h-6 text-white shrink-0" />
                    <span><strong>Minor Side Effects:</strong> Temporary soreness at an injection site or mild fatigue for 24 hours are the most commonly reported effects.</span>
                  </li>
                </ul>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2}>
                <div className="bg-white p-8 rounded-3xl border border-teal-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-900">
                    <UserCheck className="w-6 h-6 text-teal-600" /> Who is a Candidate?
                  </h3>
                  <p className="text-gray-600 mb-6">You might be a candidate if you suffer from:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {["Osteoarthritis & Joint Pain", "Sports Injuries (Torn Ligaments)", "Autoimmune Conditions", "Chronic Inflammation", "Neurological Disorders", "Hair Loss (Alopecia)"].map((condition, i) => (
                      <div key={i} className="bg-teal-50 p-3 rounded-lg text-sm text-teal-800 text-center border border-teal-100">
                        {condition}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="flex items-center justify-center gap-3 mb-12">
                <HelpCircle className="w-8 h-8 text-teal-600" />
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                  Common <span className="gradient-text">Questions</span>
                </h2>
              </div>
            </AnimatedSection>
            
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.1}>
                  <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <CallToAction />
      </main>
      <Footer />
    </>
  );
}