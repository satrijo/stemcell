import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Landmark, Microscope, ReceiptText } from "lucide-react";
import { learningGuides } from "./home-content";
import { ArrowLink, SectionHeading } from "./HomePrimitives";

const malaysiaTopics = [
  {
    icon: Landmark,
    title: "Legal and regulatory context",
    copy: "Understand the framework and what to verify before relying on a provider's compliance claim.",
    href: "/is-stem-cell-therapy-legal-malaysia/",
  },
  {
    icon: Microscope,
    title: "Research in Malaysia",
    copy: "Explore local institutions, milestones, and how research differs from a treatment sold to patients.",
    href: "/stem-cell-research-malaysia/",
  },
  {
    icon: ReceiptText,
    title: "Cost and comparison",
    copy: "See the factors that shape pricing and the details a written quotation should make clear.",
    href: "/stem-cell-therapy-cost-malaysia/",
  },
] as const;

export function HomeMalaysia() {
  return (
    <>
      <section id="malaysia" className="home-section scroll-mt-28 bg-[var(--surface)]">
        <div className="site-frame grid overflow-hidden rounded-xl bg-[var(--ink)] lg:grid-cols-2">
          <div className="reveal flex flex-col p-7 sm:p-12 lg:p-16">
            <p className="eyebrow text-[var(--accent-pale)]">Malaysia context</p>
            <h2 className="section-title mt-5 text-pretty text-white">
              Local context changes the questions you should ask.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/62">
              Regulation, physician credentials, facility standards, cell processing,
              research status, and total treatment costs all need to be understood in the
              Malaysian context.
            </p>
            <div className="mt-10">
              <ArrowLink href="/stem-cell-therapy-malaysia/">Read the Malaysia guide</ArrowLink>
            </div>
          </div>
          <div className="relative min-h-[31rem] lg:min-h-[44rem]">
            <Image
              src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=1400&q=86&auto=format&fit=crop"
              alt="Modern private hospital corridor in Malaysia"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)]/40 to-transparent" />
          </div>
        </div>

        <div className="site-frame mt-5 grid gap-5 md:grid-cols-3">
          {malaysiaTopics.map(({ icon: Icon, title, copy, href }) => (
            <Link
              key={title}
              href={href}
              className="home-card group flex min-h-[17rem] flex-col p-7 transition-colors hover:bg-[var(--surface-soft)] sm:p-8"
            >
              <Icon aria-hidden="true" className="size-6 text-[var(--accent-dark)]" strokeWidth={1.7} />
              <div className="mt-auto pt-10">
                <h3 className="text-xl font-medium tracking-[-0.025em] text-[var(--ink)]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{copy}</p>
                <ArrowUpRight
                  aria-hidden="true"
                  className="mt-6 size-4 text-[var(--accent-dark)] transition-transform group-hover:translate-x-1"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="education" className="home-section scroll-mt-28 bg-[var(--canvas)]">
        <div className="site-frame">
          <div className="reveal">
            <SectionHeading
              eyebrow="Education library"
              title={
                <>
                  Learn the essentials. <span className="text-[var(--muted)]">Then go deeper.</span>
                </>
              }
              copy="Three useful starting points, selected from the wider library to build science, process, and risk literacy."
            />
          </div>

          <div className="reveal mt-14 grid gap-5 lg:grid-cols-3">
            {learningGuides.map((guide, index) => (
              <Link key={guide.title} href={guide.href} className="media-zoom group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[var(--surface-soft)]">
                  <Image
                    src={guide.image}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <span className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full bg-[var(--surface)] text-[var(--ink)]">
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </span>
                </div>
                <div className="grid grid-cols-[auto_1fr] gap-5 pt-5">
                  <span className="font-mono text-xs text-[var(--accent-dark)]">0{index + 1}</span>
                  <div>
                    <p className="eyebrow text-[var(--accent-dark)]">{guide.label}</p>
                    <h3 className="card-title mt-3 text-[var(--ink)]">{guide.title}</h3>
                    <p className="mt-4 leading-7 text-[var(--muted)]">{guide.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex justify-end">
            <ArrowLink href="/stem-cell-education/" variant="outline">
              View the full library
            </ArrowLink>
          </div>
        </div>
      </section>
    </>
  );
}
