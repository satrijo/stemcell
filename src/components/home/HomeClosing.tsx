import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { ArrowLink, SectionHeading } from "./HomePrimitives";
import { HomeFaq } from "./HomeFaq";

export function HomeClosing() {
  return (
    <>
      <section id="faq" className="home-section scroll-mt-28 bg-[var(--surface)]">
        <div className="site-frame grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="reveal lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Common questions"
              title={
                <>
                  Clarity before <span className="text-[var(--muted)]">consultation.</span>
                </>
              }
            />
            <p className="mt-7 max-w-md leading-7 text-[var(--muted)]">
              These answers are a starting point. Personal suitability and risks still
              require assessment by a qualified healthcare professional.
            </p>
          </div>
          <div className="reveal lg:col-span-7">
            <HomeFaq />
          </div>
        </div>
      </section>

      <section className="bg-[var(--canvas)] px-[var(--page-inset)] py-[clamp(5rem,10vw,7.5rem)]">
        <div className="site-frame relative min-h-[39rem] overflow-hidden rounded-xl bg-[var(--ink)] text-white">
          <Image
            src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=1800&q=86&auto=format&fit=crop"
            alt="Doctor attentively listening to a patient during a consultation"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,30,33,.97)_0%,rgba(12,30,33,.82)_45%,rgba(12,30,33,.24)_100%)]" />
          <div className="relative flex min-h-[39rem] max-w-3xl flex-col justify-center p-7 sm:p-12 lg:p-16">
            <p className="eyebrow text-[var(--accent-pale)]">Your next step</p>
            <h2 className="section-title mt-5 text-pretty text-white">
              A good consultation should leave you better informed.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">
              Share what you are exploring, organise your records, and prepare the
              questions that help you compare options without pressure.
            </p>
            <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <ArrowLink href="/consultation/">Prepare a consultation</ArrowLink>
              <Link
                href="/stem-cell-education/"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/30 px-6 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/8"
              >
                <Search aria-hidden="true" className="size-4" />
                Keep learning
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
