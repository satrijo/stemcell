"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/components/ui/utils";

const faqs = [
  {
    question: "Is stem cell therapy legal in Malaysia?",
    answer: "The regulatory landscape in Malaysia is developing. The Ministry of Health (MOH) has issued guidelines for stem cell research and therapy, emphasizing that treatments must be evidence-based and conducted in approved facilities. Always verify the current legal status and clinic credentials before proceeding.",
  },
  {
    question: "How much does stem cell therapy cost in Malaysia?",
    answer: "Costs vary significantly based on the type of treatment, the source of the stem cells, and the specific clinic. While medical tourism in Malaysia is generally known for competitive pricing, regenerative medicine requires specialized processing, making it a significant investment. Prices are determined directly by the providing facilities.",
  },
  {
    question: "How do I find a reputable stem cell clinic?",
    answer: "We recommend looking for clinics that employ credentialed specialists and operate transparently regarding their lab protocols and clinical evidence. Ask providers about their licensing, cell sourcing, and the scientific basis for their proposed treatments.",
  },
  {
    question: "How long does the treatment take?",
    answer: "The administration of the stem cells usually takes a few hours and is often done on an outpatient basis. However, the entire process—including initial consultation, medical evaluation, cell preparation, and post-treatment monitoring—may span several weeks depending on the protocol.",
  },
  {
    question: "What conditions can be treated with stem cells?",
    answer: "Clinical research explores treatments for orthopedic issues (like knee osteoarthritis), autoimmune disorders, and certain neurological conditions. It is important to note that many applications are still considered experimental. Each condition requires a specific protocol and careful medical evaluation.",
  },
  {
    question: "Is stem cell therapy safe?",
    answer: "Safety depends heavily on the specific procedure, the cell source (e.g., autologous vs. allogeneic), and the facility's processing standards. While many patients undergo treatments without severe adverse effects, all medical procedures carry risks. Discuss potential side effects and safety protocols thoroughly with a qualified medical professional.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4"
          >
            Common Questions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Navigating stem cell therapy requires careful consideration. Here are some starting points.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus-visible:outline-2 focus-visible:outline-teal-600"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-slate-900 pr-8">{faq.question}</span>
                  <ChevronDown 
                    className={cn(
                      "h-5 w-5 text-slate-400 shrink-0 transition-transform duration-300",
                      isOpen && "rotate-180 text-teal-600"
                    )} 
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
