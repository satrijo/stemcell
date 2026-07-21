import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Scale, ShieldCheck } from "lucide-react";
import { ArrowLink } from "./HomePrimitives";

const guidePillars = [
  {
    icon: BookOpen,
    title: "Learn the fundamentals",
    copy: "Cell types, therapy processes, benefits, limitations, and side effects in plain language.",
    href: "/stem-cell-education/",
  },
  {
    icon: Scale,
    title: "Understand Malaysia",
    copy: "Explore the legal landscape, local research, pricing factors, and how regulation affects care.",
    href: "/is-stem-cell-therapy-legal-malaysia/",
  },
  {
    icon: ShieldCheck,
    title: "Make a safer choice",
    copy: "Use a practical checklist to examine provider credentials, documentation, consent, and follow-up.",
    href: "/verify-stem-cell-clinic-malaysia/",
  },
] as const;

export function HomeOverview() {
  return (
    <section id="overview" className="home-section scroll-mt-24">
      <div className="site-frame">
        <div className="reveal grid gap-4 lg:grid-cols-12">
          <article className="home-card flex min-h-[27rem] flex-col justify-between p-7 sm:p-10 lg:col-span-8 lg:p-12">
            <div className="grid gap-8 sm:grid-cols-[1fr_auto]">
              <div>
                <p className="eyebrow text-[var(--accent-dark)]">A clearer starting point</p>
                <h2 className="section-title mt-5 max-w-[50rem] text-pretty text-[var(--ink)]">
                  Good decisions begin before the clinic room.
                </h2>
              </div>
              <div className="hidden size-20 items-center justify-center rounded-full bg-[var(--accent-pale)] text-xl font-medium text-[var(--ink)] sm:flex">
                26
              </div>
            </div>
            <div className="mt-12 grid gap-7 border-t border-[var(--border)] pt-7 sm:grid-cols-[1fr_auto] sm:items-end">
              <p className="max-w-2xl text-lg leading-8 text-[var(--muted)]">
                The site&apos;s guides span science, transplants, regenerative applications,
                banking, safety, regulation, clinic verification, research, and costs. The
                homepage now brings those subjects into one coherent decision path.
              </p>
              <ArrowLink href="/stem-cell-education/" variant="dark">
                Browse all guides
              </ArrowLink>
            </div>
          </article>

          <article className="relative min-h-[27rem] overflow-hidden rounded-xl bg-[var(--ink)] lg:col-span-4">
            <Image
              src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1000"
              alt="Doctor consulting with a patient using a tablet in a modern clinic"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
              <p className="eyebrow text-[var(--accent-pale)]">Our role</p>
              <p className="mt-4 text-xl font-medium leading-7 text-white">
                Prepare you for a better conversation, not sell a guaranteed outcome.
              </p>
            </div>
          </article>
        </div>

        <div className="reveal mt-4 grid gap-4 md:grid-cols-3">
          {guidePillars.map(({ icon: Icon, title, copy, href }, index) => (
            <Link
              key={title}
              href={href}
              className="home-card group flex min-h-[19rem] flex-col p-7 transition-colors hover:bg-[var(--surface-soft)] sm:p-8"
            >
              <div className="flex items-center justify-between">
                <Icon aria-hidden="true" className="size-6 text-[var(--accent-dark)]" strokeWidth={1.7} />
                <span className="font-mono text-xs text-[var(--muted)]">0{index + 1}</span>
              </div>
              <div className="mt-auto pt-14">
                <h3 className="card-title text-[var(--ink)]">{title}</h3>
                <p className="mt-4 leading-7 text-[var(--muted)]">{copy}</p>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-dark)]">
                  Open guide
                  <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
