"use client";

import { Check } from "lucide-react";

const trustBadges = [
  "Clinical Research Focus",
  "Patient Education",
  "Treatment Pathways",
  "Cost Transparency",
  "Safety First",
  "Independent Navigation",
];

export default function TrustLogosSection() {
  return (
    <section className="bg-white border-y border-slate-100 py-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8">
        
        {/* Left Label */}
        <div className="shrink-0 md:border-r md:border-slate-200 md:pr-8">
          <p className="text-sm font-bold tracking-widest text-teal-600 uppercase text-center md:text-left">
            Core Principles
          </p>
        </div>

        {/* Right Scrolling Ticker */}
        <div className="relative flex overflow-hidden w-full mask-edges">
          {/* 
            Mask to fade out edges 
            Added via Tailwind arbitrary values in CSS below
          */}
          <style dangerouslySetInnerHTML={{ __html: `
            .mask-edges {
              mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
              -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            }
            @keyframes scrollLeft {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-scroll-infinite {
              animation: scrollLeft 35s linear infinite;
            }
            .animate-scroll-infinite:hover {
              animation-play-state: paused;
            }
          `}} />
          
          <div className="flex shrink-0 animate-scroll-infinite gap-4 pl-4 items-center w-max">
            {/* Double the array for seamless looping */}
            {[...trustBadges, ...trustBadges, ...trustBadges].map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-white shadow-sm shrink-0 whitespace-nowrap"
              >
                <div className="bg-teal-50 rounded-full p-0.5">
                  <Check className="w-3.5 h-3.5 text-teal-600" />
                </div>
                <span className="text-sm font-medium text-slate-600">{badge}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
