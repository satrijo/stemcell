import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import CallToAction from "@/components/shared/CallToAction";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Zap, Heart, Brain, Activity } from "lucide-react";

export const metadata: Metadata = {
  title: "Stem Cell Therapy Benefits | Evidence-Based Guide Malaysia",
  description:
    "Explore the proven and emerging benefits of stem cell therapy — pain relief, tissue regeneration, immune support, anti-aging, and more. Evidence-based overview for Malaysian patients.",
  keywords:
    "stem cell therapy benefits, benefits of stem cell treatment, stem cell advantages, what does stem cell therapy do",
};

const corebenefits = [
  {
    icon: ShieldCheck,
    title: "Reduced Inflammation",
    description:
      "MSCs are powerful immunomodulators. They reduce pro-inflammatory cytokines such as TNF-α and IL-6, providing relief from chronic inflammatory conditions without suppressing overall immunity.",
  },
  {
    icon: Activity,
    title: "Pain Reduction",
    description:
      "Peer-reviewed studies consistently show significant pain reduction in osteoarthritis, back pain, and joint conditions — often enabling patients to reduce or eliminate pain medication.",
  },
  {
    icon: Zap,
    title: "Tissue Regeneration",
    description:
      "Stem cells directly repair damaged cartilage, muscle, bone, and organ tissue — not just masking symptoms but restoring genuine biological function.",
  },
  {
    icon: Heart,
    title: "Cardiovascular Support",
    description:
      "Cardiac stem cell therapy has shown improvements in ejection fraction and reduced scar tissue in heart failure patients in multiple Phase II trials.",
  },
  {
    icon: Brain,
    title: "Neuroprotection",
    description:
      "BDNF and GDNF secreted by MSCs protect neurons from degeneration and support neuroplasticity — relevant in Parkinson's, MS, and stroke recovery.",
  },
  {
    icon: CheckCircle2,
    title: "Improved Quality of Life",
    description:
      "Beyond specific disease markers, patients consistently report improved energy levels, better mobility, and greater overall wellbeing following treatment.",
  },
];

const evidence = [
  {
    condition: "Knee Osteoarthritis",
    finding: "60–80% of patients report significant pain reduction and functional improvement at 12-month follow-up in multiple RCTs.",
    source: "Journal of Bone & Joint Surgery, 2022",
  },
  {
    condition: "Multiple Sclerosis (HSCT)",
    finding: "MIST trial showed 86% of HSCT patients had no evidence of disease activity at 3 years vs 9% in disease-modifying drug group.",
    source: "JAMA Neurology, 2019",
  },
  {
    condition: "Heart Failure",
    finding: "Intracoronary MSC infusion improved LVEF by mean 5–6% and reduced hospitalisation by 30% in POSEIDON trial.",
    source: "JAMA, 2012",
  },
  {
    condition: "Crohn's Disease",
    finding: "Phase III trial showed 50% remission rate in fistulising Crohn's with adipose-derived stem cell treatment.",
    source: "The Lancet, 2016",
  },
];

const faqs = [
  {
    q: "How long until I see results?",
    a: "Timeline varies by condition. Joint patients often report 4–8 weeks for initial improvement; full results at 3–6 months. Systemic conditions (autoimmune, neurological) may show gradual improvement over 3–12 months.",
  },
  {
    q: "Are the benefits permanent?",
    a: "Not always. Some patients achieve long-lasting or permanent improvement (particularly in autoimmune remission cases). Others benefit for 1–3 years before considering a booster session. Outcome depends on condition severity, age, and lifestyle factors.",
  },
  {
    q: "What if stem cell therapy doesn't work for me?",
    a: "Non-response does occur, particularly in very advanced disease. Reputable clinics will honestly assess your eligibility and set realistic expectations before treatment. If you're not a good candidate, a good doctor will tell you.",
  },
];

export default function StemCellTherapyBenefits() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Stem Cell Therapy"
          highlightedText="Benefits"
          description="Evidence-based overview of what stem cell therapy can realistically achieve — from pain relief and tissue regeneration to immune support and longevity."
          badgeText="Patient Education · Evidence-Based"
        />

        {/* Core Benefits */}
        <AnimatedSection>
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                  6 Key Clinical <span className="text-teal-600">Benefits</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Stem cell therapy works through multiple biological pathways — providing a spectrum of benefits that single-target drugs cannot match.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {corebenefits.map((b) => (
                  <div key={b.title} className="bg-gradient-to-br from-teal-50 to-teal-50 rounded-2xl p-6 border border-teal-100/50">
                    <div className="bg-teal-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      <b.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{b.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{b.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Clinical Evidence */}
        <AnimatedSection>
          <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
                    What the Research <span className="text-teal-600">Shows</span>
                  </h2>
                  <div className="space-y-5">
                    {evidence.map((e) => (
                      <div key={e.condition} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                        <p className="text-sm font-bold text-teal-600 mb-1">{e.condition}</p>
                        <p className="text-gray-800 text-sm leading-relaxed mb-2">{e.finding}</p>
                        <p className="text-xs text-gray-400 italic">{e.source}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=700&q=80"
                    alt="Stem cell therapy clinical evidence"
                    width={700}
                    height={500}
                    className="rounded-3xl shadow-2xl object-cover w-full"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                    <p className="text-2xl font-extrabold text-teal-600">6,000+</p>
                    <p className="text-sm text-gray-600">registered clinical trials globally</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* FAQs */}
        <AnimatedSection>
          <section className="py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center">
                Frequently Asked <span className="text-teal-600">Questions</span>
              </h2>
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <div key={faq.q} className="bg-slate-50 rounded-2xl p-6 border border-gray-100">
                    <h3 className="text-base font-bold text-gray-900 mb-2">{faq.q}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
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
