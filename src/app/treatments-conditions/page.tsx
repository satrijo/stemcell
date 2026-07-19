import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import CallToAction from "@/components/shared/CallToAction";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Link from "next/link";
import { ArrowRight, Activity, Brain, Heart, Scissors, Sparkles, ActivitySquare, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Stem Cell Treatments & Conditions",
  description:
    "Explore stem cell treatment in Malaysia, including available therapies, potential benefits, eligibility, treatment process, and trusted clinics for informed care.",
};

const treatments = [
  {
    title: "Knee Osteoarthritis",
    description: "Regenerate damaged cartilage, reduce inflammation, and delay or avoid total knee replacement surgery.",
    icon: <Activity className="w-8 h-8 text-teal-600" />,
    link: "/stem-cell-therapy-knee-malaysia",
    badge: "Most Popular",
  },
  {
    title: "Hair Restoration",
    description: "Stimulate dormant hair follicles to promote natural, thicker hair growth for men and women.",
    icon: <Scissors className="w-8 h-8 text-teal-500" />,
    link: "/stem-cell-hair-treatment-malaysia",
  },
  {
    title: "Anti-Aging & Wellness",
    description: "Systemic IV therapy to rejuvenate cellular function, improve energy levels, and enhance overall vitality.",
    icon: <Sparkles className="w-8 h-8 text-teal-600" />,
    link: "/consultation",
  },
  {
    title: "Neurological Conditions",
    description: "Targeted therapies showing promise for conditions like Parkinson's, Alzheimer's, and stroke recovery.",
    icon: <Brain className="w-8 h-8 text-teal-500" />,
    link: "/consultation",
  },
  {
    title: "Cardiovascular Health",
    description: "Support heart tissue repair and improve vascular function following cardiac events.",
    icon: <Heart className="w-8 h-8 text-teal-600" />,
    link: "/consultation",
  },
  {
    title: "Sports Injuries",
    description: "Accelerate healing of torn ligaments, tendons, and muscle injuries for faster return to peak performance.",
    icon: <ActivitySquare className="w-8 h-8 text-teal-500" />,
    link: "/consultation",
  },
];

export default function TreatmentsConditions() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Treatments &"
          highlightedText="Conditions"
          description="Explore the range of medical and aesthetic conditions currently being treated with advanced regenerative medicine in Malaysia."
        />

        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="relative h-[380px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1400&q=80&auto=format&fit=crop"
                  alt="Stem cell treatments and medical conditions overview"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent" />
                <div className="absolute bottom-6 left-8 text-white">
                  <p className="text-sm font-semibold uppercase tracking-wider text-teal-300">Regenerative Medicine</p>
                  <p className="text-xl font-bold">Treatments Spanning 30+ Conditions</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Treatments Grid */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                  Targeted <span className="gradient-text">Regenerative Solutions</span>
                </h2>
                <p className="text-lg text-gray-600">
                  Stem cell therapy is not a one-size-fits-all approach. Treatments are highly specific to the targeted tissue and condition.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {treatments.map((treatment, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.1}>
                  <Link href={treatment.link} className="block group h-full">
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-teal-100 transition-all duration-300 h-full flex flex-col relative overflow-hidden">
                      {treatment.badge && (
                        <div className="absolute top-6 right-6 bg-teal-50 text-teal-600 text-xs font-bold px-3 py-1 rounded-full">
                          {treatment.badge}
                        </div>
                      )}
                      <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-teal-50 group-hover:scale-110 transition-all duration-300">
                        {treatment.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">{treatment.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-8 flex-grow">{treatment.description}</p>
                      
                      <div className="flex items-center text-teal-600 font-medium group-hover:translate-x-2 transition-transform">
                        Learn more <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                  Are You a <span className="gradient-text">Candidate?</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  While stem cell therapy offers incredible potential, it is not suitable for everyone or every condition. A thorough medical evaluation is required.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-teal-500" /> Generally Good Candidates:
                    </h3>
                    <ul className="text-gray-600 space-y-2 ml-7">
                      <li>• Patients with degenerative joint conditions (OA)</li>
                      <li>• Those seeking alternatives to invasive surgery</li>
                      <li>• Individuals with certain autoimmune disorders</li>
                      <li>• Patients looking for anti-aging and vital tissue repair</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full border-2 border-red-500 flex items-center justify-center text-red-500 font-bold text-xs">X</div> 
                      Generally Not Suitable:
                    </h3>
                    <ul className="text-gray-600 space-y-2 ml-7">
                      <li>• Patients with active cancer or recent cancer history</li>
                      <li>• Those with active, severe systemic infections</li>
                      <li>• Pregnant women</li>
                      <li>• Conditions for which stem cell efficacy is completely unproven</li>
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2}>
                <div className="bg-teal-700 rounded-3xl p-10 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/30 rounded-full blur-[80px] pointer-events-none" />
                  
                  <h3 className="text-2xl font-bold mb-6">The Assessment Process</h3>
                  <div className="space-y-6 relative z-10">
                    {[
                      { step: 1, title: "Initial Consultation", desc: "Review of medical history and current symptoms." },
                      { step: 2, title: "Diagnostic Testing", desc: "Blood work, MRI, or X-rays to establish a baseline." },
                      { step: 3, title: "Protocol Design", desc: "Customizing the cell type, count, and delivery method." },
                      { step: 4, title: "Clearance", desc: "Final medical clearance to proceed safely." }
                    ].map((item) => (
                      <div key={item.step} className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 font-bold">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-lg">{item.title}</h4>
                          <p className="text-teal-100">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <CallToAction />
      </main>
      <Footer />
    </>
  );
}