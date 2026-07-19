"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Dna, Menu, X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/components/ui/utils";

const exploreGroups = [
  {
    title: "Learn the basics",
    links: [
      ["What are stem cells?", "/what-are-stem-cells/"],
      ["How the therapy works", "/what-is-stem-cell-therapy/"],
      ["Types of stem cells", "/types-of-stem-cells/"],
    ],
  },
  {
    title: "Make a safer choice",
    links: [
      ["Verify a clinic", "/verify-stem-cell-clinic-malaysia/"],
      ["Understand the costs", "/stem-cell-therapy-cost-malaysia/"],
      ["Is it legal in Malaysia?", "/is-stem-cell-therapy-legal-malaysia/"],
    ],
  },
];

interface NavbarProps {
  overlay?: boolean;
}

export default function Navbar({ overlay = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    const onPointerDown = (event: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) setExploreOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setExploreOpen(false); setMenuOpen(false); }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => { window.removeEventListener("scroll", onScroll); document.removeEventListener("pointerdown", onPointerDown); document.removeEventListener("keydown", onKeyDown); };
  }, []);

  const closeMenus = () => { setMenuOpen(false); setExploreOpen(false); };
  const overlayAtTop = overlay && !scrolled && !menuOpen;

  return (
    <header ref={navRef} className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled || menuOpen ? "bg-white/95 shadow-[0_8px_30px_-20px_rgba(15,118,110,0.5)] backdrop-blur-xl" : "bg-transparent")}>
      <nav aria-label="Main navigation" className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link href="/" onClick={closeMenus} className="group flex items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-500">
          <span className={cn("flex h-9 w-9 items-center justify-center rounded-xl transition", overlayAtTop ? "border border-white/30 bg-white/12 group-hover:bg-white/20" : "bg-teal-700 group-hover:bg-teal-800")}><Dna className="h-5 w-5 text-white" strokeWidth={1.8} /></span>
          <span className={cn("text-[1.05rem] font-semibold tracking-[-0.03em] transition-colors", overlayAtTop ? "text-white" : "text-slate-900")}>StemCell<span className={overlayAtTop ? "text-teal-200" : "text-teal-700"}>.my</span></span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          <Link href="/stem-cell-education/" className={cn("rounded-md text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-teal-500", overlayAtTop ? "text-white/80 hover:text-white" : "text-slate-600 hover:text-teal-700")}>Education hub</Link>
          <div className="relative">
            <button type="button" onClick={() => setExploreOpen((open) => !open)} aria-expanded={exploreOpen} aria-controls="explore-menu" className={cn("flex items-center gap-1 rounded-md text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-teal-500", overlayAtTop ? "text-white/80 hover:text-white" : "text-slate-600 hover:text-teal-700")}>Explore <ChevronDown className={cn("h-4 w-4 transition-transform", exploreOpen && "rotate-180")} /></button>
            <AnimatePresence>
              {exploreOpen && <motion.div id="explore-menu" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.16 }} className="absolute right-0 top-9 grid w-[29rem] grid-cols-2 gap-7 rounded-2xl border border-[#d7e4e1] bg-white p-6 shadow-[0_18px_50px_-24px_rgba(15,118,110,0.45)]">{exploreGroups.map((group) => <div key={group.title}><p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">{group.title}</p><div className="space-y-1">{group.links.map(([label, href]) => <Link key={href} href={href} onClick={closeMenus} className="block rounded-lg px-2 py-2 text-sm text-slate-600 transition hover:bg-[#f6faf9] hover:text-teal-700 focus-visible:outline-2 focus-visible:outline-teal-700">{label}</Link>)}</div></div>)}</motion.div>}
            </AnimatePresence>
          </div>
          <Link href="/stem-cell-research-malaysia/" className={cn("rounded-md text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-teal-500", overlayAtTop ? "text-white/80 hover:text-white" : "text-slate-600 hover:text-teal-700")}>Research</Link>
          <Link href="/consultation/" className={cn("inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-500", overlayAtTop ? "border border-white/30 bg-white text-teal-800 hover:bg-teal-50" : "bg-teal-700 text-white hover:bg-teal-800")}>Talk to a provider <ArrowUpRight className="h-4 w-4" /></Link>
        </div>

        <button type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-menu" className={cn("rounded-lg p-2 transition focus-visible:outline-2 focus-visible:outline-teal-500 lg:hidden", overlayAtTop ? "text-white hover:bg-white/10" : "text-slate-800 hover:bg-[#e8f4f1]")}>{menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
      </nav>
      <AnimatePresence>
        {menuOpen && <motion.div id="mobile-menu" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-t border-[#d7e4e1] bg-white lg:hidden"><div className="mx-auto max-w-7xl space-y-1 px-5 pb-6 pt-3 sm:px-8"><Link href="/stem-cell-education/" onClick={closeMenus} className="block rounded-lg px-3 py-3 text-base font-medium text-slate-800 hover:bg-[#f6faf9]">Education hub</Link><Link href="/stem-cell-research-malaysia/" onClick={closeMenus} className="block rounded-lg px-3 py-3 text-base font-medium text-slate-800 hover:bg-[#f6faf9]">Research in Malaysia</Link><Link href="/verify-stem-cell-clinic-malaysia/" onClick={closeMenus} className="block rounded-lg px-3 py-3 text-base font-medium text-slate-800 hover:bg-[#f6faf9]">Verify a clinic</Link><Link href="/consultation/" onClick={closeMenus} className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-teal-700 px-4 py-3 text-sm font-semibold text-white hover:bg-teal-800">Talk to a provider <ArrowUpRight className="h-4 w-4" /></Link></div></motion.div>}
      </AnimatePresence>
    </header>
  );
}
