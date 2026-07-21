import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ArrowLinkProps = {
  readonly href: string;
  readonly children: ReactNode;
  readonly variant?: "accent" | "dark" | "outline";
};

const variants = {
  accent: "bg-[var(--accent)] text-white hover:bg-[var(--accent-dark)]",
  dark: "bg-[var(--ink)] text-[var(--on-dark)] hover:bg-[var(--text)]",
  outline:
    "border border-[var(--border)] bg-transparent text-[var(--ink)] hover:border-[var(--accent)] hover:text-[var(--accent-dark)]",
} as const;

export function ArrowLink({ href, children, variant = "accent" }: ArrowLinkProps) {
  return (
    <Link
      href={href}
      className={`home-link-arrow inline-flex min-h-12 items-center gap-4 rounded-full px-2 pl-6 text-sm font-semibold transition-colors ${variants[variant]}`}
    >
      {children}
      <span className="flex size-9 items-center justify-center rounded-full bg-[var(--surface)] text-[var(--ink)]">
        <ArrowUpRight aria-hidden="true" className="size-4" />
      </span>
    </Link>
  );
}

type SectionHeadingProps = {
  readonly eyebrow: string;
  readonly title: ReactNode;
  readonly copy?: string;
  readonly light?: boolean;
};

export function SectionHeading({ eyebrow, title, copy, light = false }: SectionHeadingProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
      <div className="lg:col-span-8">
        <p className={`eyebrow ${light ? "text-[var(--accent-pale)]" : "text-[var(--accent-dark)]"}`}>
          {eyebrow}
        </p>
        <h2 className={`section-title mt-5 text-pretty ${light ? "text-[var(--on-dark)]" : "text-[var(--ink)]"}`}>
          {title}
        </h2>
      </div>
      {copy ? (
        <p className={`text-base leading-7 lg:col-span-4 ${light ? "text-white/65" : "text-[var(--muted)]"}`}>
          {copy}
        </p>
      ) : null}
    </div>
  );
}
