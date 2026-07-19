import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import CallToAction from "@/components/shared/CallToAction";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { CheckCircle2, AlertCircle, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Allogeneic Stem Cell Transplant Malaysia | Donor Transplant Guide",
  description:
    "Guide to allogeneic stem cell transplant in Malaysia — donor types, HLA matching, GvHD management, conditions treated, and outcomes. Expert haematology centres available.",
  keywords:
    "allogeneic stem cell transplant malaysia, allo SCT malaysia, donor stem cell transplant, HLA matching malaysia",
};

const donorSources = [
  { name: "HLA-Matched Sibling", probability: "25% chance", description: "Best outcomes. Full 10/10 HLA match. Lowest GvHD risk among allogeneic sources." },
  { name: "Matched Unrelated Donor (MUD)", probability: "Requires registry search", description: "8–10/10 matched donor from national or international registries. Good outcomes with modern protocols." },
  { name: "Haploidentical (Half-Match)", probability: "Almost always a match available", description: "Parent, child, or half-match sibling. Post-transplant cyclophosphamide (PTCy) has made this highly viable." },
  { name: "Umbilical Cord Blood", probability: "Available via banks", description: "Lower cell dose but good GvL effect. Suitable for smaller patients or when adult donor unavailable." },
];

const gvhd = [
  { type: "Acute GvHD", timing: "Days 10–100", frequency: "30–60% of allo transplants", severity: "Grade I–IV; skin, gut, liver", treatment: "Steroids, tacrolimus, ruxolitinib (steroid-refractory)" },
  { type: "Chronic GvHD", timing: "Day 100+", frequency: "20–50% of allo transplants", severity: "Multiple organ involvement possible", treatment: "Long-term immunosuppression, photopheresis, rituximab" },
];

const advantages = [
  "Graft-versus-Leukaemia (GvL) effect — donor immune cells actively hunt and kill residual cancer",
  "May achieve true long-term remission or cure in some blood cancers",
  "Donor marrow is unaffected by prior chemotherapy (unlike autologous)",
  "Suitable when patient's own cells are too diseased or insufficient",
];

const faqs = [
  {
    q: "What is the graft-versus-leukaemia (GvL) effect?",
    a: "GvL is a powerful anti-cancer benefit of allogeneic transplant. Donor T-cells recognize the recipient's remaining leukaemia cells as foreign and destroy them — an immune attack on cancer. This is why allo transplant can achieve long-term remission even in high-risk leukaemia.",
  },
  {
    q: "How do I find a donor in Malaysia?",
    a: "Malaysia has a national bone marrow registry (PBMDR). If no local match is found, international registries (BMDW, NMDP) covering 40+ million donors worldwide are searched. For patients without a matched donor, haploidentical transplant from a family member is now a well-established alternative.",
  },
  {
    q: "Is allogeneic transplant more dangerous than autologous?",
    a: "Yes — transplant-related mortality (TRM) is higher for allo (5–15%) than auto (<2%) largely due to GvHD and infection from prolonged immunosuppression. However, for diseases where GvL effect matters (like AML, MDS, CML), the benefit far outweighs the risk.",
  },
];

export default function AllogeneicTransplant() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Allogeneic Stem Cell"
          highlightedText="Transplant Malaysia"
          description="Donor stem cells that rebuild your immune system — and harness the graft-versus-leukaemia effect to fight residual cancer. The most powerful tool in haematological oncology."
          badgeText="Haematology · Donor Transplant"
        />

        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="relative h-[380px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=1400&q=80&auto=format&fit=crop"
                  alt="Bone marrow transplant laboratory — allogeneic stem cell procedure"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent" />
                <div className="absolute bottom-6 left-8 text-white">
                  <p className="text-sm font-semibold uppercase tracking-wider text-teal-300">Haematology Oncology</p>
                  <p className="text-xl font-bold">Donor-Based Stem Cell Transplant</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Advantages */}
        <AnimatedSection>
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                    Why Allogeneic? <span className="text-teal-600">Key Advantages</span>
                  </h2>
                  <ul className="space-y-4">
                    {advantages.map((a) => (
                      <li key={a} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                        <span className="text-gray-700 leading-relaxed">{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Donor Sources */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                    <span className="text-teal-600">Donor</span> Sources
                  </h2>
                  <div className="space-y-4">
                    {donorSources.map((d) => (
                      <div key={d.name} className="bg-slate-50 rounded-2xl p-5 border border-gray-100">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold text-gray-900 text-sm">{d.name}</h3>
                          <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full font-medium">{d.probability}</span>
                        </div>
                        <p className="text-gray-600 text-sm">{d.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* GvHD */}
        <AnimatedSection>
          <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                  Understanding <span className="text-teal-600">GvHD</span>
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Graft-versus-Host Disease is the most significant complication of allogeneic transplant — and a major focus of transplant medicine.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {gvhd.map((g) => (
                  <div key={g.type} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <AlertCircle className="h-5 w-5 text-amber-500" />
                      <h3 className="font-bold text-gray-900">{g.type}</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-semibold text-gray-800">Timing:</span> <span className="text-gray-600">{g.timing}</span></p>
                      <p><span className="font-semibold text-gray-800">Frequency:</span> <span className="text-gray-600">{g.frequency}</span></p>
                      <p><span className="font-semibold text-gray-800">Affected:</span> <span className="text-gray-600">{g.severity}</span></p>
                      <p><span className="font-semibold text-gray-800">Treatment:</span> <span className="text-gray-600">{g.treatment}</span></p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 bg-teal-50 border border-teal-100 rounded-2xl p-6 flex gap-4">
                <ShieldCheck className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                <p className="text-sm text-teal-800 leading-relaxed">
                  Modern GvHD prophylaxis using post-transplant cyclophosphamide (PTCy) and calcineurin inhibitors has significantly reduced GvHD rates and severity, making haploidentical transplants safer than ever before.
                </p>
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
