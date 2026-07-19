import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import CallToAction from "@/components/shared/CallToAction";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Image from "next/image";
import { Activity, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Knee Stem Cell Therapy in Malaysia",
  description:
    "Considering knee stem cell therapy in Malaysia? Learn about treatment for knee osteoarthritis, benefits, recovery, eligibility, and what to expect.",
};

const recoveryTimeline = [
  {
    time: "Days 1-3",
    title: "Initial Healing",
    description: "Mild soreness or swelling at the injection site. Rest is recommended. Avoid anti-inflammatory medications (NSAIDs) as inflammation is part of the initial healing trigger.",
  },
  {
    time: "Weeks 1-4",
    title: "Cellular Activation",
    description: "Stem cells begin to differentiate and secrete growth factors. You may start physical therapy to promote blood flow and joint mobility.",
  },
  {
    time: "Months 1-3",
    title: "Tissue Regeneration",
    description: "Noticeable reduction in pain and improvement in joint function. Cartilage regeneration is actively occurring.",
  },
  {
    time: "Months 3-6+",
    title: "Maximum Benefit",
    description: "Peak results are typically observed. Many patients report significant improvements in mobility and quality of life, avoiding joint replacement surgery.",
  },
];

const faqs = [
  {
    q: "Will this completely cure my knee osteoarthritis?",
    a: "While stem cell therapy is highly effective at reducing pain and regenerating some lost cartilage, it is not a 'cure-all'. It can significantly delay or prevent the need for knee replacement, but severe, bone-on-bone osteoarthritis may still require surgical intervention.",
  },
  {
    q: "How is the injection administered?",
    a: "The injection is typically administered directly into the knee joint (intra-articular) under ultrasound guidance to ensure precise placement of the cells.",
  },
  {
    q: "Is the procedure painful?",
    a: "Most patients experience only mild discomfort similar to a standard joint injection. Local anesthesia is used to numb the area beforehand.",
  },
];

export default function KneeStemCellTherapy() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Knee Stem Cell"
          highlightedText="Therapy"
          description="A minimally invasive alternative to knee replacement surgery. Regenerate cartilage, reduce pain, and restore mobility."
        />

        {/* What Is It */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                  Targeted Relief for <span className="gradient-text">Knee Pain</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Knee osteoarthritis involves the gradual breakdown of protective cartilage in the joint. Traditional treatments focus merely on managing pain through cortisone shots or ultimately replacing the joint surgically.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Stem cell therapy takes a fundamentally different approach. By injecting concentrated mesenchymal stem cells (MSCs) directly into the knee, the treatment actively reduces inflammation and promotes the regeneration of damaged cartilage tissue.
                </p>
                
                <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Activity className="w-5 h-5 text-teal-600" /> Key Advantages
                  </h3>
                  <ul className="space-y-3">
                    {["Outpatient procedure (no hospital stay)", "Avoids the risks of major surgery", "Uses the body's natural repair mechanisms", "Minimal downtime"].map((item, i) => (
                      <li key={i} className="flex gap-3 text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2} className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
                  alt="Doctor examining knee x-ray"
                  fill
                  className="object-cover"
                />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Who Is Eligible */}
        <section className="py-20 bg-teal-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                Are You a <span className="text-teal-200">Good Candidate?</span>
              </h2>
              <p className="text-lg text-teal-100 max-w-3xl mx-auto mb-16">
                Not every knee condition responds to stem cell therapy. Ideal candidates typically fall into specific categories.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
              <AnimatedSection delay={0.1}>
                <div className="bg-white p-8 rounded-3xl border border-teal-200 h-full">
                  <h3 className="text-2xl font-bold text-teal-700 mb-6 flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6" /> Ideal Candidates
                  </h3>
                  <ul className="space-y-4">
                    {["Mild to moderate osteoarthritis", "Partial meniscus tears", "Patellofemoral syndrome", "Sports injuries to knee ligaments", "Patients wanting to delay surgery"].map((item, i) => (
                      <li key={i} className="flex gap-3 text-gray-700">
                        <span className="text-teal-600 font-bold">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2}>
                <div className="bg-white p-8 rounded-3xl border border-red-200 h-full">
                  <h3 className="text-2xl font-bold text-red-600 mb-6 flex items-center gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-current text-sm">X</span> Less Ideal Candidates
                  </h3>
                  <ul className="space-y-4">
                    {["Severe 'bone-on-bone' arthritis (Grade 4)", "Active infections in the joint", "Complete ligament tears requiring mechanical repair", "Patients with active cancer"].map((item, i) => (
                      <li key={i} className="flex gap-3 text-gray-700">
                        <span className="text-red-500 font-bold">✕</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Recovery Timeline */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                  Recovery <span className="gradient-text">Timeline</span>
                </h2>
                <p className="text-lg text-gray-600">
                  Healing is a biological process. Here is what you can expect in the weeks and months following your injection.
                </p>
              </div>
            </AnimatedSection>

            <div className="space-y-8">
              {recoveryTimeline.map((phase, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.1}>
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-6 items-start md:items-center">
                    <div className="w-32 shrink-0">
                      <div className="bg-teal-50 text-teal-700 font-bold px-4 py-2 rounded-lg inline-flex items-center gap-2">
                        <Clock className="w-4 h-4" /> {phase.time}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                      <p className="text-gray-600">{phase.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
            </AnimatedSection>
            
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.1}>
                  <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-gray-100">
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