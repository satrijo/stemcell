"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Dna, Menu, X } from "lucide-react";
import { cn } from "@/components/ui/utils";

const exploreGroups = [
  {
    title: "Understand the science",
    links: [
      ["What are stem cells?", "/what-are-stem-cells/"],
      ["How therapy works", "/what-is-stem-cell-therapy/"],
      ["Types of stem cells", "/types-of-stem-cells/"],
    ],
  },
  {
    title: "Plan with confidence",
    links: [
      ["Compare treatments", "/treatments-conditions/"],
      ["Verify a clinic", "/verify-stem-cell-clinic-malaysia/"],
      ["Understand the costs", "/stem-cell-therapy-cost-malaysia/"],
    ],
  },
] as const;

type NavbarProps = {
  readonly overlay?: boolean;
};

export default function Navbar({ overlay = false }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const onPointerDown = (event: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setExploreOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setExploreOpen(false);
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  const closeMenus = () => {
    setExploreOpen(false);
    setMenuOpen(false);
  };

  return (
    <header
      ref={navRef}
      data-overlay={overlay || undefined}
      className={cn(
        "fixed inset-x-[var(--page-inset)] top-5 z-50 mx-auto max-w-[90rem] rounded-xl border border-black/5 bg-white/80 transition-shadow duration-300",
        scrolled || menuOpen
          ? "shadow-[var(--shadow-floating)] backdrop-blur-xl"
          : "shadow-sm",
      )}
    >
      <nav
        aria-label="Main navigation"
        className="flex h-[4.5rem] items-center justify-between px-4 sm:px-6"
      >
        <Link
          href="/"
          onClick={closeMenus}
          className="group flex items-center gap-3 rounded-md"
        >
          <span className="flex size-9 items-center justify-center rounded-full bg-[var(--ink)] text-[var(--accent-pale)] transition-colors group-hover:bg-[var(--accent-dark)]">
            <Dna
              aria-hidden="true"
              className="size-[1.125rem]"
              strokeWidth={1.8}
            />
          </span>
          <span className="text-[1.05rem] font-semibold tracking-[-0.035em] text-[var(--ink)]">
            StemCell<span className="text-[var(--accent-dark)]">.my</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <Link
            href="/stem-cell-education/"
            className="text-sm font-medium text-[var(--text)] transition-colors hover:text-[var(--accent-dark)]"
          >
            Education
          </Link>
          <div className="relative">
            <button
              type="button"
              onClick={() => setExploreOpen((open) => !open)}
              aria-expanded={exploreOpen}
              aria-controls="explore-menu"
              className="flex min-h-11 items-center gap-1 text-sm font-medium text-[var(--text)] transition-colors hover:text-[var(--accent-dark)]"
            >
              Explore
              <ChevronDown
                aria-hidden="true"
                className={cn(
                  "size-4 transition-transform",
                  exploreOpen && "rotate-180",
                )}
              />
            </button>
            <AnimatePresence>
              {exploreOpen ? (
                <motion.div
                  id="explore-menu"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-14 grid w-[31rem] grid-cols-2 gap-7 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[var(--shadow-floating)]"
                >
                  {exploreGroups.map((group) => (
                    <div key={group.title}>
                      <p className="eyebrow mb-3 text-[var(--accent-dark)]">
                        {group.title}
                      </p>
                      {group.links.map(([label, href]) => (
                        <Link
                          key={href}
                          href={href}
                          onClick={closeMenus}
                          className="block rounded-lg px-3 py-2.5 text-sm text-[var(--text)] transition-colors hover:bg-[var(--surface-soft)] hover:text-[var(--ink)]"
                        >
                          {label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
          <Link
            href="/stem-cell-research-malaysia/"
            className="text-sm font-medium text-[var(--text)] transition-colors hover:text-[var(--accent-dark)]"
          >
            Research
          </Link>
          <Link
            href="/consultation/"
            className="inline-flex min-h-11 items-center gap-3 rounded-full bg-[var(--accent)] py-1 pl-5 pr-1 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-dark)]"
          >
            Prepare a consultation
            <span className="flex size-9 items-center justify-center rounded-full bg-white text-[var(--ink)]">
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </span>
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="flex size-11 items-center justify-center rounded-full border border-[var(--border)] text-[var(--ink)] lg:hidden"
        >
          {menuOpen ? (
            <X aria-hidden="true" className="size-5" />
          ) : (
            <Menu aria-hidden="true" className="size-5" />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-[var(--border)] px-4 pb-5 pt-3 lg:hidden"
          >
            {[
              ["Education hub", "/stem-cell-education/"],
              ["Treatment pathways", "/treatments-conditions/"],
              ["Research in Malaysia", "/stem-cell-research-malaysia/"],
              ["Verify a clinic", "/verify-stem-cell-clinic-malaysia/"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={closeMenus}
                className="block rounded-lg px-3 py-3 text-base font-medium text-[var(--ink)] hover:bg-[var(--surface-soft)]"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/consultation/"
              onClick={closeMenus}
              className="mt-3 flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 text-sm font-semibold text-white"
            >
              Prepare a consultation
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
