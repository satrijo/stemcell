import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import CallToAction from "@/components/shared/CallToAction";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { CheckCircle2, TrendingUp, FlaskConical, Stethoscope, Clock, ShieldCheck, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Stem Cell Therapy Cost in Malaysia (2025 Guide)",
  description:
    "Learn about stem cell therapy cost in Malaysia, factors affecting pricing, treatment types, and what patients can expect before planning their care.",
};

const costFactors = [
  {
    title: "Cell Source",
    description: "Autologous (your own cells) vs. allogeneic (donor cells like umbilical cord blood). Cord blood MSCs typically involve higher initial processing fees.",
    icon: <FlaskConical className="w-6 h-6 text-teal-600" />,
  },
  {
    title: "Cell Count",
    description: "Treatments are often priced by the millions of cells required (e.g., 50M, 100M, 200M). More extensive conditions require higher cell counts.",
    icon: <TrendingUp className="w-6 h-6 text-teal-600" />,
  },
  {
    title: "Specialist Expertise",
    description: "Procedures performed by board-certified orthopedic surgeons or neurologists carry different fees than general administration.",
    icon: <Stethoscope className="w-6 h-6 text-teal-600" />,
  },
  {
    title: "Treatment Duration",
    description: "Some conditions require a single targeted injection, while others need multiple sessions spread over several months.",
    icon: <Clock className="w-6 h-6 text-teal-600" />,
  },
  {
    title: "Facility Grade",
    description: "MOH-certified hospitals and premium private clinics with state-of-the-art CGMP clean rooms have higher overheads.",
    icon: <ShieldCheck className="w-6 h-6 text-teal-600" />,
  },
  {
    title: "Location in Malaysia",
    description: "Clinics in central Kuala Lumpur typically have slightly higher pricing compared to facilities in other states due to operational costs.",
    icon: <MapPin className="w-6 h-6 text-teal-600" />,
  },
];

const pricingEstimates = [
  {
    treatment: "Joint & Orthopedic Injection (e.g., Knee OA)",
    range: "RM 15,000 – RM 35,000",
    description: "Targeted localized injection, usually utilizing autologous or cord-derived MSCs.",
  },
  {
    treatment: "Anti-Aging & Wellness",
    range: "RM 25,000 – RM 60,000",
    description: "Systemic IV drip therapy requiring higher cell counts (usually 100M+ cells).",
  },
  {
    treatment: "Neurological Conditions",
    range: "RM 40,000 – RM 80,000+",
    description: "Complex administration protocols often requiring multiple treatment sessions.",
  },
  {
    treatment: "Hair Restoration",
    range: "RM 8,000 – RM 20,000",
    description: "Localized scalp injections combined with growth factors.",
  },
];

const faqs = [
  {
    q: "Why is stem cell therapy cheaper in Malaysia than in the US or Australia?",
    a: "Malaysia benefits from a lower cost of living, favorable exchange rates, and a highly government-supported medical tourism infrastructure. The clinical standards and CGMP laboratory facilities are world-class, but operational and administrative costs are significantly lower than in Western countries.",
  },
  {
    q: "Is there hidden pricing or extra fees?",
    a: "Reputable, MOH-compliant clinics will provide a transparent, all-inclusive quote after your initial consultation. This usually covers cell harvesting, processing, administration, and standard follow-ups. Always ask if blood work or MRI scans are included.",
  },
  {
    q: "Can I use medical insurance or Medisave?",
    a: "Currently, stem cell therapy is largely classified as an elective or experimental treatment by most insurance providers globally, including those in Malaysia. Patients typically pay out-of-pocket.",
  },
  {
    q: "Do clinics offer payment plans?",
    a: "Many premium medical centers and specialized clinics in Malaysia offer installment plans or partner with local banks to provide 0% interest financing options for 6 to 24 months.",
  },
];

export default function StemCellCostMalaysia() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Stem Cell Therapy"
          highlightedText="Cost in Malaysia"
          description="A transparent guide to pricing, treatment variables, and understanding the investment in your regenerative health journey."
        />

        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="relative h-[380px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=1400&q=80&auto=format&fit=crop"
                  alt="Stem cell therapy consultation cost Malaysia"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent" />
                <div className="absolute bottom-6 left-8 text-white">
                  <p className="text-sm font-semibold uppercase tracking-wider text-teal-300">Transparent Pricing</p>
                  <p className="text-xl font-bold">Understanding Your Investment in Health</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Overview & Why Malaysia is Cost-Effective */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                  Understanding the <span className="gradient-text">Investment</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Malaysia has emerged as a premier destination for regenerative medicine not just because of its world-class medical facilities, but due to its highly competitive pricing structure compared to the US, Europe, and neighboring Asian countries.
                </p>
                <p className="text-lg text-gray-600">
                  While exact costs can only be determined after a proper medical consultation, the average cost for stem cell therapy in Malaysia typically ranges from <strong>RM 15,000 to RM 80,000+</strong> depending on the complexity of the condition.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Pricing Table */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">
                Estimated Price Ranges by Treatment
              </h2>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-100">
                        <th className="p-6 font-bold text-gray-900">Treatment Area</th>
                        <th className="p-6 font-bold text-gray-900">Estimated Cost (MYR)</th>
                        <th className="p-6 font-bold text-gray-900 hidden md:table-cell">Details</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {pricingEstimates.map((item, idx) => (
                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                          <td className="p-6 font-medium text-gray-900">{item.treatment}</td>
                          <td className="p-6 font-bold text-teal-600">{item.range}</td>
                          <td className="p-6 text-gray-600 hidden md:table-cell text-sm">{item.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-6 bg-teal-50/50 border-t border-teal-100 text-sm text-gray-600 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <p>
                    <strong>Disclaimer:</strong> Prices shown are estimates based on market averages in Malaysia as of 2024. Exact quotations require a thorough medical assessment and depend heavily on the required cell count (e.g., 50 million vs. 200 million cells).
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Factors Affecting Cost */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-16 text-center">
                Factors That <span className="gradient-text">Determine Cost</span>
              </h2>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {costFactors.map((factor, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.1}>
                  <div className="bg-slate-50 p-8 rounded-2xl border border-gray-100 h-full">
                    <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-6">
                      {factor.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{factor.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{factor.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 bg-teal-700 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center">
                What's Typically <span className="text-teal-200">Included?</span>
              </h2>
              <div className="bg-white p-8 md:p-10 rounded-3xl border border-teal-200">
                <p className="text-gray-600 mb-8 text-lg">When you receive a formal quotation from a top-tier clinic in Malaysia, the package generally encompasses:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Specialist medical consultation and pre-screening",
                    "Laboratory processing (CGMP standards)",
                    "The prescribed dosage of stem cells (quantified in millions)",
                    "Administration by licensed medical professionals",
                    "Necessary medical consumables and facility fees",
                    "Post-treatment observation and standard follow-ups"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-teal-600" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center">
                Pricing <span className="gradient-text">FAQs</span>
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