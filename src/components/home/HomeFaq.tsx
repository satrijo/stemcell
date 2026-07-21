"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { faqItems } from "./home-content";

export function HomeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
      {faqItems.map((item, index) => {
        const isOpen = openIndex === index;
        const answerId = `home-faq-answer-${index}`;

        return (
          <div key={item.question}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={answerId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="group grid min-h-20 w-full grid-cols-[2.5rem_1fr_auto] items-center gap-3 py-5 text-left text-[var(--ink)]"
            >
              <span className="font-mono text-xs text-[var(--accent-dark)]">0{index + 1}</span>
              <span className="text-lg font-medium tracking-[-0.02em] sm:text-xl">{item.question}</span>
              <span className="flex size-10 items-center justify-center rounded-full border border-[var(--border)] transition-colors group-hover:border-[var(--accent)] group-hover:bg-[var(--accent-pale)]">
                {isOpen ? (
                  <Minus aria-hidden="true" className="size-4" />
                ) : (
                  <Plus aria-hidden="true" className="size-4" />
                )}
              </span>
            </button>
            {isOpen ? (
              <div
                id={answerId}
                role="region"
                className="animate-[reveal-in_280ms_ease-out_both] pb-7 pl-[3.25rem] pr-12"
              >
                <p className="max-w-3xl leading-7 text-[var(--muted)]">{item.answer}</p>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
