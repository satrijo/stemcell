import Link from 'next/link';
import { ArrowRight, FileText, Activity, ShieldCheck, TestTube } from 'lucide-react';

const EXPLORE_ITEMS = [
  {
    title: "Understanding Treatment Costs",
    description: "Review the factors that influence stem cell therapy pricing in Malaysia, from facility fees to cell sourcing.",
    icon: FileText,
    href: "/stem-cell-therapy-cost-malaysia/",
    tag: "Cost Factors"
  },
  {
    title: "Transplant Protocols",
    description: "Learn about the established protocols for hematopoietic stem cell transplants and who may be eligible.",
    icon: Activity,
    href: "/stem-cell-transplant/",
    tag: "Clinical Focus"
  },
  {
    title: "Stem Cell Banking",
    description: "Explore the process of cord blood and tissue banking, and how facilities preserve samples for the future.",
    icon: ShieldCheck,
    href: "/stem-cell-banking-malaysia/",
    tag: "Preservation"
  },
  {
    title: "Current Research",
    description: "Read about ongoing clinical trials and the evidence requirements for emerging stem cell applications.",
    icon: TestTube,
    href: "/stem-cell-research-malaysia/",
    tag: "Evidence"
  }
];

export default function ExploreMoreSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6 text-balance">
              Explore Topics <span className="text-teal-700 italic font-serif font-normal">in detail</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 text-pretty leading-relaxed">
              Stem cell medicine is complex. We provide structured overviews on costs, banking, and current research to help you navigate available information and understand what is supported by clinical evidence.
            </p>
            <div className="hidden lg:block w-16 h-1 bg-teal-600/20 rounded-full"></div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {EXPLORE_ITEMS.map((item, index) => (
                <Link 
                  key={index} 
                  href={item.href}
                  className="group relative bg-[#F6FAF9] border border-[#D7E4E1] rounded-2xl p-8 hover:bg-white hover:border-teal-200 transition-all duration-300 hover:shadow-lg hover:shadow-teal-900/5 flex flex-col h-full"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-700 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                      <item.icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full group-hover:bg-teal-50/50">
                      {item.tag}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-800 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="mt-auto flex items-center text-teal-700 font-medium text-sm">
                    <span>Read overview</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-slate-50 border border-slate-100 rounded-xl text-sm text-slate-500 leading-relaxed">
              <span className="font-semibold text-slate-700">Please note:</span> Information provided in these sections is for educational purposes. Eligibility, outcomes, and costs vary significantly based on individual medical history and provider protocols. We do not endorse specific clinics or guarantee treatment availability.
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
