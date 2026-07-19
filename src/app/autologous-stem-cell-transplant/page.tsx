import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import CallToAction from "@/components/shared/CallToAction";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { CheckCircle2, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Autologous Stem Cell Transplant Malaysia | Self-Donor Procedure Guide",
  description:
    "Complete guide to autologous stem cell transplant in Malaysia — using your own stem cells. Learn about eligibility, procedure, recovery, costs, and outcomes at Malaysian centres.",
  keywords:
    "autologous stem cell transplant malaysia, auto SCT malaysia, self stem cell transplant, ASCT malaysia",
};

const pros = [
  "No donor needed — no HLA matching required",
  "Zero risk of graft-versus-host disease (GvHD)",
  "Lower transplant-related mortality vs allogeneic",
  "Faster immune reconstitution",
  "Cells can be stored (cryopreserved) for years",
  "Can be repeated if needed (second autologous transplant)",
];

const conditions = [
  { name: "Multiple Myeloma", note: "Standard of care for eligible patients under 70" },
  { name: "Non-Hodgkin Lymphoma", note: "For relapsed/refractory disease after chemotherapy" },
  { name: "Hodgkin Lymphoma", note: "Salvage therapy for chemo-sensitive relapse" },
  { name: "Germ Cell Tumours", note: "High-dose carboplatin/etoposide regimen" },
  { name: "Neuroblastoma", note: "Part of front-line consolidation in high-risk paediatric cases" },
];

const steps = [
  { title: "Mobilisation", description: "G-CSF (filgrastim) injections stimulate your bone marrow to release stem cells into the bloodstream over 4–7 days." },
  { title: "Apheresis (Collection)", description: "Blood is drawn through a central line and passed through an apheresis machine that separates and collects stem cells. Sessions typically last 4–6 hours." },
  { title: "Cryopreservation", description: "Collected stem cells are frozen using DMSO cryoprotectant and stored in liquid nitrogen until transplant day." },
  { title: "High-Dose Conditioning", description: "High-dose chemotherapy eliminates remaining disease and creates space in the marrow for the new cells." },
  { title: "Reinfusion", description: "Your thawed stem cells are reinfused via IV on 'Day 0' — they travel to the bone marrow and begin rebuilding blood production." },
  { title: "Engraftment & Discharge", description: "Blood counts recover over 10–14 days. Most patients are discharged within 2–3 weeks post-transplant." },
];

export default function AutologousTransplant() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Autologous Stem Cell"
          highlightedText="Transplant Malaysia"
          description="Using your own stem cells as the donor — eliminating rejection risk while delivering the full power of high-dose therapy followed by stem cell rescue."
          badgeText="Haematology · Self-Donor Transplant"
        />

        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="relative h-[380px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1400&q=80&auto=format&fit=crop"
                  alt="Medical specialist preparing autologous stem cell transplant"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent" />
                <div className="absolute bottom-6 left-8 text-white">
                  <p className="text-sm font-semibold uppercase tracking-wider text-teal-300">Self-Donor Procedure</p>
                  <p className="text-xl font-bold">Your Own Cells. Zero Rejection Risk.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Advantages */}
        <AnimatedSection>
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                    Why Choose <span className="text-teal-600">Autologous?</span>
                  </h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Autologous transplant is the preferred option when the primary goal is delivering high-dose therapy without the complication risk of GvHD — particularly for diseases that are chemo-sensitive.
                  </p>
                  <ul className="space-y-3">
                    {pros.map((p) => (
                      <li key={p} className="flex items-start gap-3">
                        <ShieldCheck className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                        <span className="text-gray-700">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-teal-50 rounded-3xl p-8 border border-teal-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Conditions Treated</h3>
                  <div className="space-y-4">
                    {conditions.map((c) => (
                      <div key={c.name} className="bg-white rounded-xl p-4 border border-gray-100">
                        <div className="flex items-center gap-2 mb-1">
                          <CheckCircle2 className="h-4 w-4 text-teal-500 shrink-0" />
                          <span className="font-bold text-gray-900 text-sm">{c.name}</span>
                        </div>
                        <p className="text-gray-500 text-xs pl-6">{c.note}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Steps */}
        <AnimatedSection>
          <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                  Step-by-Step: The <span className="text-teal-600">Autologous Process</span>
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {steps.map((s, i) => (
                  <div key={s.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <div className="text-4xl font-black text-teal-100 mb-3 leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Cost note */}
        <AnimatedSection>
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-teal-50 border border-teal-100 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cost in Malaysia</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Autologous stem cell transplant in Malaysia typically costs <strong>RM 60,000–RM 120,000</strong> at private haematology centres. Government hospital costs are significantly lower with means-tested subsidies. Compare to Singapore (RM 200,000–400,000) or the UK/US (RM 500,000+).
                </p>
                <p className="text-sm text-gray-500">
                  Costs include: stem cell collection, cryopreservation, conditioning chemotherapy, inpatient stay, engraftment monitoring, and 30-day post-transplant follow-up.
                </p>
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
