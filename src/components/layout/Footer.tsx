import Link from "next/link";
import { ArrowUpRight, Dna } from "lucide-react";

const footerGroups = [
  {
    title: "Learn",
    links: [
      ["Education hub", "/stem-cell-education/"],
      ["What are stem cells?", "/what-are-stem-cells/"],
      ["How therapy works", "/what-is-stem-cell-therapy/"],
      ["Types of stem cells", "/types-of-stem-cells/"],
      ["Benefits and evidence", "/stem-cell-therapy-benefits/"],
    ],
  },
  {
    title: "Explore care",
    links: [
      ["All conditions", "/treatments-conditions/"],
      ["Stem cell transplant", "/stem-cell-transplant/"],
      ["Knee and joint", "/stem-cell-therapy-knee-malaysia/"],
      ["Neurological conditions", "/stem-cell-therapy-neurological-disorders-malaysia/"],
      ["Stem cell banking", "/stem-cell-banking-malaysia/"],
    ],
  },
  {
    title: "Plan safely",
    links: [
      ["Malaysia overview", "/stem-cell-therapy-malaysia/"],
      ["Verify a clinic", "/verify-stem-cell-clinic-malaysia/"],
      ["Legal context", "/is-stem-cell-therapy-legal-malaysia/"],
      ["Costs in Malaysia", "/stem-cell-therapy-cost-malaysia/"],
      ["Research in Malaysia", "/stem-cell-research-malaysia/"],
    ],
  },
] as const;

export default function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-white">
      <div className="site-frame py-16 sm:py-20">
        <div className="grid gap-14 border-b border-white/15 pb-16 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="eyebrow text-[var(--accent-pale)]">StemCell.my</p>
            <h2 className="mt-5 max-w-4xl text-[clamp(2.75rem,6vw,6rem)] font-medium leading-[0.94] tracking-[-0.05em] text-pretty">
              Bring better questions to your next conversation.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <Link
              href="/consultation/"
              className="inline-flex min-h-12 items-center gap-4 rounded-full bg-[var(--accent)] px-2 pl-6 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-dark)]"
            >
              Prepare a consultation
              <span className="flex size-9 items-center justify-center rounded-full bg-white text-[var(--ink)]">
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </span>
            </Link>
          </div>
        </div>

        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 rounded-md">
              <span className="flex size-10 items-center justify-center rounded-full bg-white text-[var(--ink)]">
                <Dna aria-hidden="true" className="size-5" strokeWidth={1.8} />
              </span>
              <span className="text-lg font-semibold tracking-[-0.035em]">
                StemCell<span className="text-[var(--accent-pale)]">.my</span>
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-7 text-white/52">
              An independent, evidence-conscious guide to stem cell science, treatment
              pathways, provider checks, and consultation preparation in Malaysia.
            </p>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="eyebrow text-[var(--accent-pale)]">{group.title}</h3>
              <ul className="mt-6 space-y-3">
                {group.links.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="text-sm text-white/55 transition-colors hover:text-white">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5 border-t border-white/15 pt-7 text-xs leading-5 text-white/38 md:flex-row md:items-start md:justify-between">
          <p>© 2026 StemCell.my · Powered by Daiki Media</p>
          <p className="max-w-2xl md:text-right">
            Information on this site does not replace advice from a qualified healthcare
            provider. Treatment suitability, risks, availability, and outcomes require an
            individual clinical assessment.
          </p>
        </div>
      </div>
    </footer>
  );
}
