import Link from "next/link";
import { Dna } from "lucide-react";

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-14">

          {/* Logo & tagline — spans 2 cols */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="bg-teal-600 p-2 rounded-lg group-hover:bg-teal-700 transition-colors">
                <Dna className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-lg tracking-tight text-white">
                StemCell<span className="text-teal-400">.my</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Malaysia&apos;s trusted guide to stem cell therapy. Evidence-based
              information, verified clinics, and expert guidance — all in one place.
            </p>
            <div className="flex items-center gap-3 pt-1">
              {[FacebookIcon, InstagramIcon, TwitterIcon, LinkedinIcon].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="text-slate-500 hover:text-teal-400 transition-colors p-1.5 rounded-md hover:bg-slate-800"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-5">Treatments</h3>
            <ul className="space-y-3">
              {[
                ["Knee & Osteoarthritis", "/stem-cell-therapy-knee-malaysia/"],
                ["Hair Loss Recovery", "/stem-cell-hair-treatment-malaysia/"],
                ["Facial Rejuvenation", "/stem-cell-facial-treatment-malaysia/"],
                ["Anti-Aging Therapy", "/stem-cell-anti-aging-therapy-malaysia/"],
                ["All Treatments", "/treatments-conditions/"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-slate-400 hover:text-teal-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-5">Education</h3>
            <ul className="space-y-3">
              {[
                ["What Are Stem Cells?", "/what-are-stem-cells/"],
                ["How Treatment Works", "/what-is-stem-cell-therapy/"],
                ["Treatment Cost Guide", "/stem-cell-therapy-cost-malaysia/"],
                ["Best Clinics Guide", "/best-stem-cell-clinics-malaysia/"],
                ["Therapy in Malaysia", "/stem-cell-therapy-malaysia/"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-slate-400 hover:text-teal-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-5">Company</h3>
            <ul className="space-y-3">
              {[
                ["About Us", "/about"],
                ["Contact", "/contact"],
                ["Privacy Policy", "/privacy-policy"],
                ["Terms of Use", "/terms"],
                ["Medical Disclaimer", "/medical-disclaimer"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-slate-400 hover:text-teal-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} StemCell.my. Content for educational purposes only.
          </p>
          <p className="text-xs text-slate-600 max-w-xl text-center md:text-right leading-relaxed">
            <strong className="text-slate-500">Medical Disclaimer:</strong> Information on StemCell.my is
            for educational purposes only and does not substitute professional medical advice. Consult a
            qualified healthcare provider regulated by Malaysia MOH before starting any treatment.
          </p>
        </div>
      </div>
    </footer>
  );
}
