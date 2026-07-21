import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { carePathways, decisionSteps } from "./home-content";
import { ArrowLink, SectionHeading } from "./HomePrimitives";

export function HomePathways() {
  return (
    <>
      <section id="pathways" className="home-section scroll-mt-28 bg-[var(--ink)] text-white">
        <div className="site-frame">
          <div className="reveal">
            <SectionHeading
              eyebrow="Treatment pathways"
              title={
                <>
                  One field. <span className="text-white/42">Very different levels of evidence.</span>
                </>
              }
              copy="Start with the pathway you are researching, then distinguish established specialist care from emerging applications."
              light
            />
          </div>

          <div className="mt-14 divide-y divide-white/15 border-y border-white/15">
            {carePathways.map((pathway) => (
              <Link
                key={pathway.title}
                href={pathway.href}
                className="group grid gap-6 py-7 transition-colors hover:bg-white/[0.035] sm:grid-cols-[5rem_11rem_1fr_auto] sm:items-center sm:px-4 lg:grid-cols-[6rem_15rem_1fr_auto]"
              >
                <span className="font-mono text-xs text-[var(--accent-pale)]">{pathway.index}</span>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={pathway.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, 240px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                  />
                </div>
                <div>
                  <p className="eyebrow text-[var(--accent-pale)]">{pathway.label}</p>
                  <h3 className="card-title mt-3 text-white">{pathway.title}</h3>
                  <p className="mt-3 max-w-2xl leading-7 text-white/58">{pathway.description}</p>
                </div>
                <span className="flex size-12 items-center justify-center rounded-full border border-white/25 text-white transition-all group-hover:border-[var(--accent-pale)] group-hover:bg-[var(--accent)]">
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex justify-end">
            <ArrowLink href="/treatments-conditions/">Compare all conditions</ArrowLink>
          </div>
        </div>
      </section>

      <section id="process" className="home-section scroll-mt-28 bg-[var(--surface-soft)]">
        <div className="site-frame">
          <div className="reveal">
            <SectionHeading
              eyebrow="A responsible decision path"
              title={
                <>
                  Move from interest <span className="text-[var(--muted)]">to informed questions.</span>
                </>
              }
              copy="The treatment decision is yours. This framework helps make the conversation more specific, comparable, and safer."
            />
          </div>
          <ol className="reveal mt-14 grid border-y border-[var(--border)] md:grid-cols-2 xl:grid-cols-4">
            {decisionSteps.map((step) => (
              <li
                key={step.index}
                className="flex min-h-[22rem] flex-col border-b border-[var(--border)] py-7 md:nth-[odd]:border-r md:px-7 xl:border-b-0 xl:border-r xl:last:border-r-0"
              >
                <span className="font-mono text-xs text-[var(--accent-dark)]">{step.index}</span>
                <div className="mt-auto pt-14">
                  <h3 className="text-xl font-medium tracking-[-0.025em] text-[var(--ink)]">{step.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
