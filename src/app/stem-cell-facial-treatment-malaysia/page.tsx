import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import CallToAction from "@/components/shared/CallToAction";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Image from "next/image";
import { Sparkles, Clock, ShieldCheck, CheckCircle2, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Stem Cell Facial Treatment Malaysia | Regenerative Skin Rejuvenation",
  description:
    "Discover stem cell facial treatment in Malaysia. Advanced regenerative therapy to restore youthful skin, reduce wrinkles, and improve texture. MOH-compliant clinics.",
  keywords:
    "stem cell facial treatment malaysia, stem cell skin treatment, stem cell facelift malaysia, regenerative facial therapy",
};

const benefits = [
  {
    icon: Sparkles,
    title: "Deep Cellular Renewal",
    description:
      "Stem cells target damaged skin cells at the root level, stimulating collagen and elastin production for lasting skin transformation.",
  },
  {
    icon: ShieldCheck,
    title: "Natural & Safe",
    description:
      "Using your own cells (autologous) or ethically sourced exosomes, the risk of rejection or adverse reactions is minimal.",
  },
  {
    icon: Clock,
    title: "Long-Lasting Results",
    description:
      "Unlike surface-level cosmetic procedures, stem cell therapy addresses the root cause of ageing skin — results last 12–24 months or longer.",
  },
  {
    icon: Star,
    title: "Minimal Downtime",
    description:
      "Most patients resume normal activities within 24–48 hours with only minor redness or sensitivity post-treatment.",
  },
];

const conditions = [
  "Fine lines & deep wrinkles",
  "Age spots & hyperpigmentation",
  "Loose or sagging skin",
  "Dull, uneven skin tone",
  "Acne scarring",
  "Sun-damaged skin",
  "Large pores",
  "Under-eye dark circles & bags",
];

const process = [
  {
    step: "01",
    title: "Skin Assessment",
    description:
      "A detailed skin analysis is conducted by a dermatologist or aesthetic physician to determine your skin type, concerns, and suitability for treatment.",
  },
  {
    step: "02",
    title: "Cell Preparation",
    description:
      "Depending on the protocol, stem cells or growth-factor-rich exosomes are prepared. For PRP-enhanced protocols, a small blood draw is done.",
  },
  {
    step: "03",
    title: "Delivery",
    description:
      "Stem cell serums or exosomes are delivered via micro-needling, mesotherapy injections, or topical application under professional guidance.",
  },
  {
    step: "04",
    title: "Recovery & Results",
    description:
      "Mild redness subsides within 24–48 hours. Skin luminosity improves within 2–4 weeks as cellular regeneration progresses.",
  },
];

const faqs = [
  {
    q: "Is stem cell facial treatment the same as PRP (platelet-rich plasma)?",
    a: "Not exactly. While both are regenerative, PRP uses growth factors from your blood platelets, while stem cell facials use actual stem cell-derived exosomes or adipose-derived stem cells for deeper cellular renewal. Some clinics combine both for enhanced results.",
  },
  {
    q: "How many sessions are needed?",
    a: "Most patients see significant improvement after 2–3 sessions spaced 4–6 weeks apart. A maintenance session every 6–12 months is recommended for sustained results.",
  },
  {
    q: "Is the treatment painful?",
    a: "A topical numbing cream is applied before treatment. Most patients describe the sensation as mild tingling or pressure — minimal discomfort overall.",
  },
  {
    q: "What is the cost of stem cell facial treatment in Malaysia?",
    a: "Costs range from RM 1,500 to RM 6,000 per session depending on the protocol (exosome-based, PRP-combined, or full adipose-derived). Package deals are often available.",
  },
];

export default function StemCellFacialTreatment() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Stem Cell Facial"
          highlightedText="Treatment Malaysia"
          description="Advanced regenerative aesthetics that renew your skin from within — targeting wrinkles, pigmentation, and sagging with clinically proven stem cell technology."
          badgeText="Aesthetic Medicine · MOH Compliant"
        />

        {/* Benefits */}
        <AnimatedSection>
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                  Why Choose{" "}
                  <span className="text-teal-600">Stem Cell Facial Therapy?</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Go beyond surface-level treatments. Stem cell therapy regenerates skin at the cellular level for results that last.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((b) => (
                  <div
                    key={b.title}
                    className="bg-gradient-to-br from-teal-50 to-teal-50 rounded-2xl p-6 border border-teal-100/50"
                  >
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

        {/* Conditions Treated */}
        <AnimatedSection>
          <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                    Skin Concerns{" "}
                    <span className="text-teal-600">We Address</span>
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Stem cell facial therapies in Malaysia target a wide range of cosmetic and medical skin concerns, delivering results that conventional treatments can&apos;t match.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {conditions.map((c) => (
                      <li key={c} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-teal-500 shrink-0" />
                        <span className="text-gray-700">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=700&q=80"
                    alt="Stem cell facial treatment skincare"
                    width={700}
                    height={500}
                    className="rounded-3xl shadow-2xl object-cover w-full"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                    <p className="text-2xl font-extrabold text-teal-600">92%</p>
                    <p className="text-sm text-gray-600">patient satisfaction rate</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Process */}
        <AnimatedSection>
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                  The Treatment{" "}
                  <span className="text-teal-600">Process</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  A streamlined, clinically guided protocol from assessment to glowing results.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {process.map((p) => (
                  <div key={p.step} className="relative">
                    <div className="text-6xl font-black text-teal-100 mb-4 leading-none">
                      {p.step}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{p.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{p.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* FAQs */}
        <AnimatedSection>
          <section className="py-24 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center">
                Frequently Asked <span className="text-teal-600">Questions</span>
              </h2>
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                  >
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
