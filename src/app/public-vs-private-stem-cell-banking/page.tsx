import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import CallToAction from "@/components/shared/CallToAction";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { CheckCircle2, XCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Public vs Private Stem Cell Banking Malaysia | Which Is Right for You?",
  description:
    "Should you bank privately or donate publicly? Honest comparison of public vs private cord blood banking in Malaysia — costs, access, benefits, and who each is for.",
  keywords:
    "public vs private stem cell banking malaysia, cord blood donation malaysia, private cord blood banking vs public",
};

const comparison = [
  {
    aspect: "Cost",
    public: "Free — no processing or storage fees",
    private: "RM 3,000–6,000 initial + RM 800–1,500/year storage",
  },
  {
    aspect: "Ownership",
    public: "Donated to national registry — available to any matched patient",
    private: "Family-owned — exclusively reserved for your child/family",
  },
  {
    aspect: "Access",
    public: "No guaranteed access for the donor child",
    private: "Guaranteed access for the child and potentially matched siblings",
  },
  {
    aspect: "HLA Match",
    public: "Helps unrelated patients who need a match",
    private: "100% match for the donor child (autologous use)",
  },
  {
    aspect: "Societal benefit",
    public: "High — adds diversity to public registry, helps patients nationwide",
    private: "Individual only",
  },
  {
    aspect: "Probability of personal use",
    public: "N/A (no reserved unit)",
    private: "Estimated 1 in 2,700 chance of using own cord blood by age 20",
  },
  {
    aspect: "Cord tissue banking",
    public: "Not available in Malaysian public banks",
    private: "Available — stores MSC-rich Wharton's Jelly tissue",
  },
  {
    aspect: "Quality standards",
    public: "MOH regulated",
    private: "MOH + AABB (international) accreditation",
  },
];

const whoShouldConsiderPrivate = [
  "Family history of blood cancers (leukaemia, lymphoma, aplastic anaemia)",
  "Family history of sickle cell disease or thalassaemia",
  "Siblings with conditions treatable by cord blood transplant",
  "Parents with high-risk autoimmune conditions (cord tissue MSCs may be relevant)",
  "Families wanting maximum biological insurance for their child",
];

const whoShouldConsiderPublic = [
  "Healthy families with no known high-risk genetic history",
  "Those who cannot afford private banking costs",
  "Parents who want to help the broader patient community",
  "When no family history makes private banking statistically unlikely to be used",
];

export default function PublicVsPrivateStemCellBanking() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Public vs Private"
          highlightedText="Stem Cell Banking"
          description="An honest, balanced comparison to help you decide. Both options serve important purposes — the right choice depends on your family's health history and priorities."
          badgeText="Cord Blood Banking · Informed Choice"
        />

        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="relative h-[380px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=1400&q=80&auto=format&fit=crop"
                  alt="Cord blood banking cryopreservation facility Malaysia"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent" />
                <div className="absolute bottom-6 left-8 text-white">
                  <p className="text-sm font-semibold uppercase tracking-wider text-teal-300">Cord Blood Banking</p>
                  <p className="text-xl font-bold">Protecting Your Family&apos;s Future</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Comparison Table */}
        <AnimatedSection>
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                  Side-by-Side <span className="text-teal-600">Comparison</span>
                </h2>
              </div>
              <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left px-6 py-4 font-semibold text-gray-700 bg-slate-50 w-40">Aspect</th>
                      <th className="text-left px-6 py-4 font-semibold text-teal-700 bg-teal-50">🏥 Public Banking</th>
                      <th className="text-left px-6 py-4 font-semibold text-teal-700 bg-teal-50">🔒 Private Banking</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((c, i) => (
                      <tr key={c.aspect} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                        <td className="px-6 py-4 font-semibold text-gray-800 border-r border-gray-100">{c.aspect}</td>
                        <td className="px-6 py-4 text-gray-600 border-r border-gray-100">{c.public}</td>
                        <td className="px-6 py-4 text-gray-600">{c.private}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Who should choose what */}
        <AnimatedSection>
          <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                  Which Is <span className="text-teal-600">Right for You?</span>
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-teal-700 mb-5">
                    🔒 Consider Private Banking If…
                  </h3>
                  <ul className="space-y-3">
                    {whoShouldConsiderPrivate.map((w) => (
                      <li key={w} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm leading-relaxed">{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-teal-700 mb-5">
                    🏥 Consider Public Donation If…
                  </h3>
                  <ul className="space-y-3">
                    {whoShouldConsiderPublic.map((w) => (
                      <li key={w} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm leading-relaxed">{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-amber-50 border border-amber-100 rounded-2xl p-6">
                <p className="text-sm text-amber-800 leading-relaxed">
                  <strong>Important:</strong> Major medical organisations — including the American Academy of Pediatrics — recommend public donation for families with no identifiable high-risk factor, as the statistical probability of private use is low and public donation provides greater societal benefit. Families with known risk factors are the strongest candidates for private banking.
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
