import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  CircleCheck,
  FlaskConical,
  Search,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

const treatments = [
  {
    title: "Knee & joint",
    label: "Orthopaedic pathway",
    text: "Explore evidence, assessment considerations, and recovery questions for knee osteoarthritis and joint concerns.",
    href: "/stem-cell-therapy-knee-malaysia/",
    image: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=900&q=82&auto=format&fit=crop",
  },
  {
    title: "Stem cell transplant",
    label: "Established care pathway",
    text: "Understand transplant types, donor matching, eligibility, risks, and the recovery journey.",
    href: "/stem-cell-transplant/",
    image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=900&q=82&auto=format&fit=crop",
  },
  {
    title: "Hair & aesthetics",
    label: "Aesthetic pathway",
    text: "Review the advertised applications, realistic limitations, and questions to ask before treatment.",
    href: "/stem-cell-hair-treatment-malaysia/",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=900&q=82&auto=format&fit=crop",
  },
  {
    title: "Neurological & autoimmune",
    label: "Emerging applications",
    text: "See where research stands and why specialist assessment matters for complex conditions.",
    href: "/stem-cell-therapy-neurological-disorders-malaysia/",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=900&q=82&auto=format&fit=crop",
  },
];

const journey = [
  ["01", "Tell us what brings you here", "Share your diagnosis, symptoms, previous care, and what you hope to understand."],
  ["02", "Review your clinical context", "A qualified provider should assess your history, evidence, alternatives, and suitability."],
  ["03", "Discuss a responsible plan", "Ask about the cell source, procedure, risks, costs, and realistic expectations."],
  ["04", "Plan follow-up before treatment", "Know how progress, side effects, rehabilitation, and next reviews will be managed."],
];

const guides = [
  { label: "Stem cell basics", title: "What are stem cells?", href: "/what-are-stem-cells/", image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=82&auto=format&fit=crop" },
  { label: "Treatment process", title: "How does therapy work?", href: "/what-is-stem-cell-therapy/", image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=800&q=82&auto=format&fit=crop" },
  { label: "Planning care", title: "What influences the cost?", href: "/stem-cell-therapy-cost-malaysia/", image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800&q=82&auto=format&fit=crop" },
];

const faqs = [
  ["Is stem cell therapy suitable for everyone?", "No. Suitability depends on the condition, medical history, available evidence, alternatives, and a qualified clinical assessment."],
  ["How should I compare clinics or providers?", "Check the facility licence, physician registration, cell-product documentation, informed-consent process, follow-up plan, and whether claims match the evidence."],
  ["What should I prepare for a consultation?", "Bring your diagnosis, recent imaging or reports, medication list, previous treatment history, and a written list of questions about risks, alternatives, costs, and follow-up."],
];

export default function ClinicHomepage() {
  return (
    <main id="main-content">
      <section className="relative min-h-[48rem] overflow-hidden bg-[#123c3a] text-white lg:min-h-[52rem]">
        <Image src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=2000&q=88&auto=format&fit=crop" alt="Doctor speaking with a patient during a medical consultation" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071f1e]/95 via-[#0d3532]/75 to-[#071f1e]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071f1e]/80 via-transparent to-[#071f1e]/25" />
        <div className="relative z-10 mx-auto flex min-h-[48rem] max-w-7xl flex-col justify-end px-5 pb-10 pt-32 sm:px-8 sm:pb-14 lg:min-h-[52rem] lg:px-10 lg:pb-16">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] backdrop-blur-md"><span className="h-1.5 w-1.5 rounded-full bg-teal-300" />Stem cell care · Malaysia</p>
            <h1 className="mt-7 text-[clamp(3.25rem,7.2vw,6.8rem)] font-semibold leading-[0.92] tracking-[-0.065em] [text-wrap:balance]">Care that begins with <em className="font-serif font-normal text-teal-200">clarity.</em></h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">Explore stem cell treatment pathways with a safety-first approach, clear expectations, and education that helps you take the next step with confidence.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link href="/consultation/" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-semibold text-teal-900 transition hover:-translate-y-0.5 hover:bg-teal-50">Request a consultation <ArrowUpRight className="h-4 w-4" /></Link><Link href="/treatments-conditions/" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/35 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/18">Explore treatments <ChevronRight className="h-4 w-4" /></Link></div>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/15 backdrop-blur-md sm:grid-cols-3 lg:max-w-3xl">
            {["Personal assessment", "Clear treatment information", "Safety-first questions"].map((item) => <div key={item} className="flex items-center gap-3 bg-[#0b2c2a]/65 px-4 py-3 text-sm text-white/85"><Check className="h-4 w-4 text-teal-300" />{item}</div>)}
          </div>
        </div>
      </section>

      <section id="treatments" className="scroll-mt-20 bg-[#f8faf9] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">Treatment pathways</p><h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">Start with the care you are exploring.</h2><p className="mt-5 max-w-md leading-7 text-slate-600">Not every application carries the same evidence. Choose a pathway, then discuss eligibility and alternatives with a qualified provider.</p><Link href="/treatments-conditions/" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-700">See all treatment guides <ArrowRight className="h-4 w-4" /></Link></div>
            <div className="overflow-hidden rounded-[1.5rem] border border-[#d7e4e1] bg-white">
              {treatments.map((item, index) => <Link key={item.title} href={item.href} className="group grid gap-5 border-b border-[#e8f0ee] p-5 transition last:border-b-0 hover:bg-[#eaf5f2] focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-teal-700 sm:grid-cols-[7rem_1fr_auto] sm:items-center sm:gap-6 sm:p-6"><div className="relative aspect-[1.45] overflow-hidden rounded-xl sm:aspect-square"><Image src={item.image} alt="" fill sizes="(max-width: 640px) 100vw, 112px" className="object-cover transition duration-500 group-hover:scale-105" /></div><div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">0{index + 1} · {item.label}</p><h3 className="mt-2 text-xl font-semibold tracking-[-0.025em] text-slate-900">{item.title}</h3><p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">{item.text}</p></div><span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c9ddd8] text-teal-700 transition group-hover:translate-x-1 group-hover:bg-white" aria-hidden="true"><ArrowUpRight className="h-4 w-4" /></span></Link>)}
            </div>
          </div>
        </div>
      </section>

      <section id="approach" className="scroll-mt-20 bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
          <div className="relative min-h-[32rem] overflow-hidden rounded-[2rem]"><Image src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=1200&q=85&auto=format&fit=crop" alt="Medical professionals discussing a care plan" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#123c3a]/55 to-transparent" /><div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/92 p-5 backdrop-blur-md"><p className="text-sm font-semibold text-slate-900">A responsible plan starts before the procedure.</p><p className="mt-1 text-sm leading-6 text-slate-600">Assessment, alternatives, risks, consent, and follow-up all belong in the same conversation.</p></div></div>
          <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">Our approach</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">Your story comes before a treatment plan.</h2><p className="mt-6 max-w-xl leading-7 text-slate-600">Good care does not begin with a promise. It begins by understanding your diagnosis, previous treatments, goals, and the evidence relevant to your situation.</p><div className="mt-8 space-y-4">{["A consultation built around your clinical context", "Transparent discussion of evidence and alternatives", "Clear explanation of cell source, procedure, risks, and cost", "Follow-up expectations agreed before treatment"].map((item) => <div key={item} className="flex items-start gap-3 border-b border-[#e3ece9] pb-4 text-sm font-medium text-slate-700"><CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" />{item}</div>)}</div><Link href="/consultation/" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-teal-700 px-5 py-3.5 text-sm font-semibold text-white hover:bg-teal-800">Prepare for a consultation <ArrowUpRight className="h-4 w-4" /></Link></div>
        </div>
      </section>

      <section id="journey" className="scroll-mt-20 bg-[#f2f6f5] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">Your care journey</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">From first question to considered next step.</h2></div><ol className="mt-12 grid border-y border-[#cdded9] md:grid-cols-4">{journey.map(([number, title, text]) => <li key={number} className="border-b border-[#cdded9] py-7 md:border-b-0 md:border-r md:px-6 md:last:border-r-0"><span className="font-mono text-xs text-teal-700">{number}</span><h3 className="mt-12 text-lg font-semibold text-slate-900">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{text}</p></li>)}</ol></div>
      </section>

      <section id="safety" className="scroll-mt-20 overflow-hidden bg-[#123c3a] text-white">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-200">Safety before commitment</p><h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">A trustworthy clinic should welcome your questions.</h2><p className="mt-6 max-w-xl leading-7 text-teal-50/75">Before agreeing to treatment, ask for information you can verify independently. Pressure, guarantees, and vague product details are reasons to pause.</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{["Facility licence", "Physician registration", "Cell-product documentation", "Written informed consent", "Risks and alternatives", "Structured follow-up"].map((item) => <div key={item} className="flex items-center gap-3 rounded-xl border border-white/12 bg-white/6 px-4 py-3 text-sm"><ShieldCheck className="h-4 w-4 text-teal-200" />{item}</div>)}</div><Link href="/verify-stem-cell-clinic-malaysia/" className="mt-9 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-teal-900 hover:bg-teal-50">Open the clinic checklist <ArrowUpRight className="h-4 w-4" /></Link></div>
          <div className="relative min-h-[32rem] lg:min-h-full"><Image src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=85&auto=format&fit=crop" alt="Modern healthcare facility interior" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-[#123c3a]/35 to-transparent" /></div>
        </div>
      </section>

      <section id="education" className="scroll-mt-20 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">Education centre</p><h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">Learn before you decide.</h2></div><p className="max-w-md leading-7 text-slate-600">Understand the science, process, risks, and planning questions behind stem cell care.</p></div><div className="mt-12 grid gap-5 md:grid-cols-3">{guides.map((guide) => <Link key={guide.title} href={guide.href} className="group"><div className="relative aspect-[4/3] overflow-hidden rounded-2xl"><Image src={guide.image} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" /></div><p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-teal-700">{guide.label}</p><h3 className="mt-2 text-xl font-semibold text-slate-900">{guide.title}</h3><span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-teal-700">Read guide <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" /></span></Link>)}</div></div>
      </section>

      <section id="faq" className="scroll-mt-20 bg-[#f6faf9] py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8"><div className="text-center"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">Common questions</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">Clarity before consultation.</h2></div><div className="mt-10 divide-y divide-[#cdded9] border-y border-[#cdded9]">{faqs.map(([question, answer], index) => <details key={question} className="group"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 text-lg font-semibold text-slate-900"><span><span className="mr-4 font-mono text-xs font-normal text-teal-700">0{index + 1}</span>{question}</span><ChevronRight className="h-5 w-5 shrink-0 text-teal-700 transition group-open:rotate-90" /></summary><p className="max-w-2xl pb-6 pl-10 text-sm leading-7 text-slate-600">{answer}</p></details>)}</div></div>
      </section>

      <section className="relative overflow-hidden py-24 text-white sm:py-32">
        <Image src="https://images.unsplash.com/photo-1516841273335-e39b37888115?w=1800&q=85&auto=format&fit=crop" alt="Modern medical consultation room" fill sizes="100vw" className="object-cover" /><div className="absolute inset-0 bg-[#071f1e]/82" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><div className="max-w-3xl"><Stethoscope className="h-8 w-8 text-teal-200" /><h2 className="mt-6 text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">Your next step can begin with a conversation.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">Share what you are exploring and prepare your questions. A consultation should help you understand your options, not pressure you into a decision.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link href="/consultation/" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-semibold text-teal-900 hover:bg-teal-50">Request consultation <ArrowUpRight className="h-4 w-4" /></Link><Link href="/stem-cell-education/" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/8 px-6 py-4 text-sm font-semibold text-white backdrop-blur-md hover:bg-white/15"><Search className="h-4 w-4" />Explore education centre</Link></div></div></div>
      </section>

      <section className="bg-white py-10"><div className="mx-auto flex max-w-7xl items-start gap-4 px-5 text-sm leading-6 text-slate-500 sm:px-8 lg:px-10"><FlaskConical className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" /><p>StemCell.my provides treatment information and consultation navigation. Individual suitability, availability, outcomes, and risks require assessment by a qualified healthcare professional. No treatment outcome is guaranteed.</p></div></section>
    </main>
  );
}
