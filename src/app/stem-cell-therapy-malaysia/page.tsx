import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import CallToAction from "@/components/shared/CallToAction";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Image from "next/image";
import { CheckCircle2, Shield, Activity, RefreshCcw, Zap, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Stem Cell Therapy in Malaysia",
  description:
    "Discover stem cell therapy in Malaysia, including treatment options, benefits, eligibility, regulations, and leading clinics for informed healthcare decisions.",
};

const benefits = [
  {
    title: "Natural Healing",
    description: "Stimulates your body's natural repair mechanisms to heal damaged tissues without invasive surgery.",
    icon: <Heart className="w-6 h-6 text-teal-500" />,
  },
  {
    title: "Reduced Inflammation",
    description: "Powerful anti-inflammatory properties that can significantly reduce chronic pain and swelling.",
    icon: <Activity className="w-6 h-6 text-teal-500" />,
  },
  {
    title: "Faster Recovery",
    description: "Accelerated healing process compared to traditional surgical interventions.",
    icon: <Zap className="w-6 h-6 text-teal-500" />,
  },
  {
    title: "Tissue Regeneration",
    description: "Promotes the growth of new, healthy tissue to replace damaged cartilage, muscle, or skin.",
    icon: <RefreshCcw className="w-6 h-6 text-teal-500" />,
  },
  {
    title: "Safe & Regulated",
    description: "Treatments in Malaysia are strictly regulated by the Ministry of Health (MOH) ensuring high safety standards.",
    icon: <Shield className="w-6 h-6 text-teal-500" />,
  },
  {
    title: "Long-lasting Results",
    description: "Addresses the root cause of the condition rather than just managing the symptoms.",
    icon: <CheckCircle2 className="w-6 h-6 text-teal-500" />,
  },
];

const steps = [
  {
    step: "01",
    title: "Initial Consultation",
    description: "A thorough medical evaluation by a certified specialist to determine if you are a suitable candidate.",
  },
  {
    step: "02",
    title: "Cell Collection",
    description: "Stem cells are harvested from your own body (bone marrow or fat) or sourced from verified, ethical umbilical cord banks.",
  },
  {
    step: "03",
    title: "Processing",
    description: "The collected cells are processed and concentrated in a highly controlled, sterile laboratory environment.",
  },
  {
    step: "04",
    title: "Administration",
    description: "The concentrated stem cells are safely administered back into your body, targeted at the specific area requiring treatment.",
  },
];

const faqs = [
  {
    q: "Is stem cell therapy legal in Malaysia?",
    a: "Yes, stem cell therapy is legal in Malaysia when performed in compliance with the Ministry of Health (MOH) guidelines. Only approved medical facilities and licensed practitioners are permitted to offer these treatments.",
  },
  {
    q: "How much does it typically cost?",
    a: "The cost varies significantly depending on the type of treatment, the condition being treated, and the source of stem cells. It generally ranges from RM 15,000 to RM 80,000+. A consultation is required for an exact quote.",
  },
  {
    q: "Are there any side effects?",
    a: "When using your own cells (autologous), the risk of rejection is essentially zero. Common side effects are mild and temporary, such as soreness at the injection site, minor swelling, or fatigue.",
  },
  {
    q: "How long does it take to see results?",
    a: "Results vary by patient and condition. Some patients report improvement within a few weeks, while for others it may take 2 to 6 months as the regenerative process takes time to rebuild tissue.",
  },
  {
    q: "Does insurance cover stem cell therapy in Malaysia?",
    a: "Currently, most health insurance policies in Malaysia do not cover stem cell therapy as it is often considered an elective or experimental treatment. It's best to check directly with your insurance provider.",
  },
];

export default function StemCellTherapyMalaysia() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Stem Cell Therapy in"
          highlightedText="Malaysia"
          description="A comprehensive guide to regenerative medicine, treatment options, regulations, and finding the right care in Malaysia."
        />

        {/* What Is It */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                  What is Stem Cell <span className="gradient-text">Therapy?</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Stem cell therapy, also known as regenerative medicine, promotes the repair response of diseased, dysfunctional, or injured tissue using stem cells or their derivatives. 
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  In Malaysia, this advanced medical field has seen rapid growth, offering new hope for patients with conditions that traditional medicine struggles to fully resolve. By utilizing the body's natural healing mechanisms, stem cell treatments aim to address the root cause of conditions rather than merely managing symptoms.
                </p>
                <ul className="space-y-4 mt-8">
                  {["Addresses root causes", "Minimally invasive alternative", "Harnesses natural healing"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-teal-600" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
              <AnimatedSection delay={0.2} className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80"
                  alt="Medical professional examining stem cells"
                  fill
                  className="object-cover"
                />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                  Key Benefits of <span className="gradient-text">Treatment</span>
                </h2>
                <p className="text-lg text-gray-600">
                  Why more patients in Malaysia are turning to regenerative medicine for their health challenges.
                </p>
              </AnimatedSection>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.1}>
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm h-full hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center mb-6">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-16 text-center">
                The Treatment <span className="gradient-text">Process</span>
              </h2>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map((step, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.1} className="relative">
                  {idx < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-teal-100" />
                  )}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-teal-600 text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-lg shadow-teal-600/30">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* MOH Regulations */}
        <section className="py-20 bg-teal-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                  Strictly Regulated by <span className="text-teal-200">MOH Malaysia</span>
                </h2>
                <p className="text-lg text-teal-100 mb-6 leading-relaxed">
                  Patient safety is paramount. In Malaysia, stem cell therapies are tightly regulated by the Ministry of Health (MOH) and the National Pharmaceutical Regulatory Agency (NPRA).
                </p>
                <p className="text-lg text-teal-100 leading-relaxed">
                  All legitimate stem cell centers must operate under specific guidelines (CGMP standards) ensuring that processing, storage, and administration of cellular therapies meet the highest international safety protocols.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.2} className="bg-white p-8 rounded-3xl border border-teal-200">
                <h3 className="text-xl font-bold mb-6 text-gray-900">What this means for you:</h3>
                <ul className="space-y-4">
                  {[
                    "Ethical sourcing of all cellular materials",
                    "Laboratory processing under strict clean-room (CGMP) standards",
                    "Administration only by specialized, licensed medical professionals",
                    "Mandatory safety reporting and follow-up protocols"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <CheckCircle2 className="w-6 h-6 text-teal-600 shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
            </AnimatedSection>
            
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.1}>
                  <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
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