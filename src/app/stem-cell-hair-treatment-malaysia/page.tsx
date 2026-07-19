import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import CallToAction from "@/components/shared/CallToAction";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Image from "next/image";
import { Scissors, CheckCircle2, RefreshCcw, TrendingUp, Calendar, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Stem Cell Hair Treatment in Malaysia",
  description:
    "Explore stem cell hair treatment in Malaysia for hair loss and thinning. Learn about benefits, suitability, treatment process, recovery, and personalised care.",
};

const processSteps = [
  {
    title: "Scalp Analysis",
    description: "A detailed microscopic analysis of your scalp and hair follicles to determine the type and severity of hair loss.",
  },
  {
    title: "Extraction & Processing",
    description: "Typically uses autologous micrografts (from your own healthy scalp tissue) which are processed to extract progenitor cells and growth factors.",
  },
  {
    title: "Preparation",
    description: "The scalp is numbed with local anesthesia, and the treatment area is prepared and sterilized.",
  },
  {
    title: "Targeted Micro-injections",
    description: "The concentrated stem cell solution is meticulously injected into the areas of thinning hair to stimulate dormant follicles.",
  },
];

const resultsTimeline = [
  {
    time: "Month 1",
    title: "Stabilization",
    description: "Hair shedding typically decreases or stops entirely. Cellular repair of dormant follicles begins beneath the scalp surface.",
  },
  {
    time: "Months 2-3",
    title: "Early Growth",
    description: "Fine, baby hairs (vellus hairs) may begin to appear in treated areas. Existing hair may start feeling slightly thicker.",
  },
  {
    time: "Months 4-6",
    title: "Visible Thickening",
    description: "Noticeable improvement in hair density and coverage. The new hairs mature into thicker, darker terminal hairs.",
  },
  {
    time: "Months 9-12",
    title: "Optimal Results",
    description: "Maximum density and thickness are achieved. Results can last for several years, though maintenance sessions may be recommended.",
  },
];

const faqs = [
  {
    q: "Is stem cell hair treatment better than a hair transplant?",
    a: "They serve different purposes. Stem cell therapy is excellent for thickening existing thinning hair and reviving dormant follicles without surgery. However, if a follicle is completely dead (a completely bald, shiny area), a hair transplant is required. Often, doctors combine both treatments for optimal results.",
  },
  {
    q: "How many sessions are required?",
    a: "Unlike PRP which requires multiple sessions, many autologous stem cell treatments (like Regenera Activa) require only one single session to see results lasting 1-3 years.",
  },
  {
    q: "Is there any downtime?",
    a: "Downtime is minimal. You can usually return to work the next day. However, you should avoid strenuous exercise, swimming, or washing your hair for the first 24-48 hours.",
  },
];

export default function HairStemCellTherapy() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Stem Cell Hair"
          highlightedText="Treatment"
          description="Combat hair loss at the cellular level. Stimulate dormant follicles naturally without the need for invasive transplant surgery."
        />

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                  Revive Dormant <span className="gradient-text">Follicles</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Hair loss, whether genetic (androgenetic alopecia) or environmental, occurs when hair follicles miniaturize and eventually become dormant. 
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Stem cell hair therapy utilizes powerful regenerative cells to reverse this process. By injecting concentrated growth factors and progenitor cells directly into the scalp, the treatment stimulates blood flow, reduces inflammation, and reactivates dormant follicles.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: <RefreshCcw className="w-5 h-5 text-teal-600" />, text: "Reverses miniaturization" },
                    { icon: <TrendingUp className="w-5 h-5 text-teal-600" />, text: "Increases hair density" },
                    { icon: <Scissors className="w-5 h-5 text-teal-600" />, text: "No scalpel or stitches" },
                    { icon: <Calendar className="w-5 h-5 text-teal-600" />, text: "Long-lasting results" }
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-gray-100">
                      {feature.icon}
                      <span className="font-medium text-gray-900">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2} className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&q=80"
                  alt="Microscopic view of hair and scalp health"
                  fill
                  className="object-cover"
                />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Who It Helps */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                  Who is the <span className="gradient-text">Ideal Candidate?</span>
                </h2>
                <p className="text-lg text-gray-600">
                  Stem cell therapy is highly effective for thinning hair, but timing is crucial.
                </p>
              </div>
            </AnimatedSection>

            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <AnimatedSection delay={0.1} className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-gray-100 bg-teal-50/30">
                  <h3 className="text-xl font-bold text-teal-900 mb-6 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-teal-600" /> Best Results For
                  </h3>
                  <ul className="space-y-4">
                    {["Early to moderate stages of hair loss", "Male pattern baldness (Norwood stages 2-4)", "Female pattern hair loss", "Overall hair thinning and loss of density"].map((item, i) => (
                      <li key={i} className="flex gap-3 text-gray-700">
                        <span className="font-bold text-teal-600">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </AnimatedSection>
                <AnimatedSection delay={0.2} className="p-8 md:p-10 bg-red-50/30">
                  <h3 className="text-xl font-bold text-red-900 mb-6 flex items-center gap-2">
                    <AlertCircle className="w-6 h-6 text-red-500" /> Not Recommended For
                  </h3>
                  <ul className="space-y-4">
                    {["Completely bald areas (dead follicles)", "Advanced male pattern baldness (Norwood 6-7)", "Active scalp infections", "Hair loss due to active medication (e.g., chemo)"].map((item, i) => (
                      <li key={i} className="flex gap-3 text-gray-700">
                        <span className="font-bold text-red-500">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Process */}
        <section className="py-20 bg-teal-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-16 text-center">
                The <span className="text-teal-200">Procedure</span>
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.1}>
                  <div className="bg-white p-8 rounded-2xl border border-teal-100 h-full relative group hover:border-teal-300 transition-colors">
                    <div className="text-5xl font-extrabold text-teal-100 absolute top-4 right-4 group-hover:text-teal-200 transition-colors">
                      {idx + 1}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed relative z-10">{step.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Results Timeline */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                  When Will I See <span className="gradient-text">Results?</span>
                </h2>
                <p className="text-lg text-gray-600">
                  Hair grows slowly, typically half an inch per month. Patience is required as the follicles heal and begin to produce new hair.
                </p>
              </div>
            </AnimatedSection>

            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-teal-100 -translate-x-1/2" />
              
              <div className="space-y-12">
                {resultsTimeline.map((phase, idx) => (
                  <AnimatedSection key={idx} delay={idx * 0.1}>
                    <div className={`flex flex-col md:flex-row items-center justify-between ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="w-full md:w-5/12 mb-4 md:mb-0" />
                      
                      {/* Timeline node */}
                      <div className="hidden md:flex w-10 h-10 rounded-full bg-teal-600 border-4 border-white shadow-md z-10 items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white" />
                      </div>
                      
                      {/* Content box */}
                      <div className={`w-full md:w-5/12 bg-slate-50 p-6 rounded-2xl border border-gray-100 shadow-sm ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right text-left'}`}>
                        <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 text-sm font-bold rounded-full mb-3">
                          {phase.time}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                        <p className="text-gray-600">{phase.description}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
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