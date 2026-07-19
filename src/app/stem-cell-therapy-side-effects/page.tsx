import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import CallToAction from "@/components/shared/CallToAction";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { AlertCircle, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Stem Cell Therapy Side Effects & Risks | Honest Patient Guide",
  description:
    "An honest, transparent guide to stem cell therapy side effects and risks — common, uncommon, and serious. Know what to expect and how reputable clinics minimise risk.",
  keywords:
    "stem cell therapy side effects, stem cell treatment risks, stem cell therapy risks malaysia, is stem cell therapy safe",
};

const common = [
  { effect: "Mild fever (low-grade)", duration: "24–48 hours", management: "Paracetamol, rest" },
  { effect: "Fatigue after infusion", duration: "1–3 days", management: "Rest, hydration" },
  { effect: "Injection-site soreness", duration: "2–5 days", management: "Ice, rest" },
  { effect: "Mild headache", duration: "24 hours", management: "Paracetamol, fluids" },
  { effect: "Nausea (IV infusion)", duration: "Hours", management: "Anti-nausea medication if needed" },
  { effect: "Temporary symptom flare", duration: "Days to 2 weeks", management: "Monitor with physician" },
];

const uncommon = [
  "Allergic reaction to cell preparation agents (<1% of cases)",
  "Localised swelling at injection site lasting >1 week",
  "Immune response to allogeneic cells (rare with MSCs)",
  "Infection at injection or harvest site (preventable with sterile technique)",
];

const serious = [
  "Tumour formation — theoretical with pluripotent cells; extremely rare with MSCs",
  "Blood clots — reported in IV delivery routes; mitigated with proper patient screening",
  "Travel-related complications (DVT) if flying soon after treatment",
  "Serious allergic (anaphylactic) reaction — very rare; managed in clinic immediately",
];

const redFlags = [
  "No pre-treatment medical assessment or screening",
  "Promises of 'guaranteed' cures or 100% success rates",
  "No information on cell source, testing, or manufacturing standards",
  "Unusually low prices without explanation",
  "No post-treatment follow-up protocol",
  "Treatment not listed on any MOH or professional registry",
];

const safetyMeasures = [
  "Comprehensive pre-treatment bloodwork and health screening",
  "Cell quality testing — sterility, viability, identity verification",
  "Experienced physician administration (not technicians)",
  "Monitored infusion with crash-cart ready onsite",
  "Structured post-treatment follow-up at 2 weeks, 1 month, 3 months",
  "Patient exclusion for high-risk conditions (active cancer, severe immunosuppression)",
];

export default function StemCellTherapySideEffects() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Stem Cell Therapy Side Effects"
          highlightedText="& Risks"
          description="An honest, balanced guide to what can go wrong — and how reputable Malaysian clinics safeguard against it. Knowledge is your best protection."
          badgeText="Patient Safety · Transparent Information"
        />

        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="relative h-[380px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&q=80&auto=format&fit=crop"
                  alt="Medical professional monitoring patient during stem cell therapy"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent" />
                <div className="absolute bottom-6 left-8 text-white">
                  <p className="text-sm font-semibold uppercase tracking-wider text-teal-300">Patient Safety First</p>
                  <p className="text-xl font-bold">Honest, Evidence-Based Risk Information</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Common Side Effects */}
        <AnimatedSection>
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                  Common Side Effects <span className="text-teal-600">(Usually Mild)</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Most patients experience only minor, short-lived effects in the days following treatment. These are normal signs of your immune system responding to therapy.
                </p>
              </div>
              <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                <table className="w-full text-sm">
                  <thead className="bg-teal-600 text-white">
                    <tr>
                      <th className="text-left px-6 py-4 font-semibold">Side Effect</th>
                      <th className="text-left px-6 py-4 font-semibold">Typical Duration</th>
                      <th className="text-left px-6 py-4 font-semibold">Management</th>
                    </tr>
                  </thead>
                  <tbody>
                    {common.map((r, i) => (
                      <tr key={r.effect} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="px-6 py-4 text-gray-800 font-medium">{r.effect}</td>
                        <td className="px-6 py-4 text-gray-600">{r.duration}</td>
                        <td className="px-6 py-4 text-gray-600">{r.management}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Uncommon + Serious */}
        <AnimatedSection>
          <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Uncommon */}
                <div>
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
                    Uncommon Side Effects <span className="text-amber-500">(&lt;5%)</span>
                  </h2>
                  <div className="space-y-3">
                    {uncommon.map((u) => (
                      <div key={u} className="flex gap-3 bg-amber-50 rounded-xl p-4 border border-amber-100">
                        <AlertCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                        <p className="text-gray-700 text-sm leading-relaxed">{u}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Serious */}
                <div>
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
                    Serious Risks <span className="text-red-500">(Rare)</span>
                  </h2>
                  <div className="space-y-3">
                    {serious.map((s) => (
                      <div key={s} className="flex gap-3 bg-red-50 rounded-xl p-4 border border-red-100">
                        <AlertCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                        <p className="text-gray-700 text-sm leading-relaxed">{s}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Red Flags + Safety */}
        <AnimatedSection>
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Red Flags */}
                <div>
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
                    🚩 Red Flags to Avoid
                  </h2>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    Most risk in stem cell therapy comes not from the science — but from unregulated providers. Watch out for:
                  </p>
                  <ul className="space-y-3">
                    {redFlags.map((r) => (
                      <li key={r} className="flex items-start gap-3 text-sm text-gray-700">
                        <span className="text-red-500 font-bold shrink-0">✗</span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Safety Measures */}
                <div>
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
                    <ShieldCheck className="inline h-6 w-6 text-teal-500 mr-2" />
                    Safety Measures at Reputable Clinics
                  </h2>
                  <ul className="space-y-3">
                    {safetyMeasures.map((s) => (
                      <li key={s} className="flex items-start gap-3 text-sm text-gray-700">
                        <CheckCircle2 className="h-4 w-4 text-teal-500 shrink-0 mt-0.5" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
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
