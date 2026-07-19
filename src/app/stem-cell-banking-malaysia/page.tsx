import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import CallToAction from "@/components/shared/CallToAction";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Stem Cell Banking Malaysia | Cord Blood & Tissue Storage Guide",
  description:
    "Complete guide to stem cell banking in Malaysia — cord blood banking, tissue banking, public vs private options, costs, and leading Malaysian banks.",
  keywords:
    "stem cell banking malaysia, cord blood banking malaysia, stem cell storage malaysia, umbilical cord banking malaysia",
};

const benefits = [
  "Biological insurance for your child's future health",
  "Stem cells used in 80+ diseases including leukaemia, lymphoma, and sickle cell disease",
  "Perfect HLA match for the donor child (autologous use)",
  "Potential match for siblings and family members",
  "Cells stored cryogenically — viability maintained for 25+ years",
  "No pain or risk to mother or baby during collection",
];

const banks = [
  {
    name: "Cryocord",
    type: "Private",
    founded: "2003",
    accreditation: "AABB, MOH Licensed",
    storage: "Cord blood, cord tissue, placental tissue",
    note: "Malaysia's first and largest private cord blood bank",
  },
  {
    name: "StemLife",
    type: "Private",
    founded: "2001",
    accreditation: "AABB, MOH Licensed",
    storage: "Cord blood, cord tissue",
    note: "Pioneer in Malaysian stem cell banking",
  },
  {
    name: "CordLife Malaysia",
    type: "Private",
    founded: "2009",
    accreditation: "AABB, MOH Licensed",
    storage: "Cord blood, cord tissue",
    note: "Part of regional CordLife group",
  },
  {
    name: "National Blood Centre (PDN)",
    type: "Public",
    founded: "2005",
    accreditation: "MOH",
    storage: "Cord blood (public registry)",
    note: "Free public donation — units available to any matched patient",
  },
];

const quickLinks = [
  { label: "Umbilical Cord Stem Cell Storage", href: "/umbilical-cord-stem-cell-storage/" },
  { label: "Public vs Private Banking", href: "/public-vs-private-stem-cell-banking/" },
];

export default function StemCellBankingMalaysia() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Stem Cell Banking"
          highlightedText="Malaysia"
          description="Give your child the ultimate biological insurance — preserving newborn stem cells at the moment of highest potency for potential use in 80+ diseases."
          badgeText="Cord Blood Banking · MOH Licensed"
        />

        {/* What is it */}
        <AnimatedSection>
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                    What Is <span className="text-teal-600">Stem Cell Banking?</span>
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Stem cell banking is the collection and cryogenic storage of stem cells — typically from a newborn&apos;s umbilical cord blood and tissue — immediately after birth. These cells are stored at ultra-low temperatures (-196°C) and can remain viable for decades, ready to be used if the child or a matched family member ever needs them.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Cord blood stem cells are rich in hematopoietic stem cells (HSCs) — the same cells used in bone marrow transplants for leukaemia and other blood disorders.
                  </p>
                  <ul className="space-y-3">
                    {benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <CheckCircle2 className="h-4 w-4 text-teal-500 shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=700&q=80"
                    alt="Stem cell banking Malaysia newborn cord blood"
                    width={700}
                    height={500}
                    className="rounded-3xl shadow-2xl object-cover w-full"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                    <p className="text-2xl font-extrabold text-teal-600">80+</p>
                    <p className="text-sm text-gray-600">treatable diseases</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Quick nav to sub-pages */}
        <AnimatedSection>
          <section className="py-12 bg-teal-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {quickLinks.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    className="group flex items-center justify-between bg-white rounded-2xl px-6 py-4 border border-teal-100 hover:border-teal-400 hover:shadow-md transition-all"
                  >
                    <span className="text-gray-800 font-medium group-hover:text-teal-600 transition-colors">
                      {l.label}
                    </span>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-teal-500 group-hover:translate-x-1 transition-all ml-4" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Banks */}
        <AnimatedSection>
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                  Leading Stem Cell Banks in <span className="text-teal-600">Malaysia</span>
                </h2>
              </div>
              <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                <table className="w-full text-sm">
                  <thead className="bg-teal-600 text-white">
                    <tr>
                      <th className="text-left px-6 py-4 font-semibold">Bank</th>
                      <th className="text-left px-6 py-4 font-semibold">Type</th>
                      <th className="text-left px-6 py-4 font-semibold">Accreditation</th>
                      <th className="text-left px-6 py-4 font-semibold">Storage</th>
                      <th className="text-left px-6 py-4 font-semibold">Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {banks.map((b, i) => (
                      <tr key={b.name} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="px-6 py-4 font-bold text-gray-900">{b.name}</td>
                        <td className="px-6 py-4">
                          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${b.type === "Private" ? "bg-teal-100 text-teal-700" : "bg-teal-100 text-teal-700"}`}>
                            {b.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-600">{b.accreditation}</td>
                        <td className="px-6 py-4 text-gray-600">{b.storage}</td>
                        <td className="px-6 py-4 text-gray-500 text-xs italic">{b.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4 flex items-start gap-2">
                <ShieldCheck className="h-4 w-4 text-teal-500 shrink-0 mt-0.5" />
                All private banks listed are licensed by Malaysia Ministry of Health (MOH) and accredited by AABB (formerly American Association of Blood Banks).
              </p>
            </div>
          </section>
        </AnimatedSection>

        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
