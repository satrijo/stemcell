"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight, Dna } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const benefits = [
  "100% free, no-obligation consultation",
  "Speak directly with a medical specialist",
  "Personalised treatment assessment",
  "Transparent cost breakdown",
  "Available in English, Bahasa & Mandarin",
];

const contactInfo = [
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+60 12-345 6789",
    href: "tel:+60123456789",
  },
  {
    icon: Mail,
    label: "Email",
    value: "consult@stemcell.my",
    href: "mailto:consult@stemcell.my",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kuala Lumpur, Malaysia",
    href: "#",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: "#",
  },
];

const conditions = [
  "Knee & Joint Pain",
  "Hair Loss",
  "Anti-Aging",
  "Facial Rejuvenation",
  "Neurological Disorders",
  "Autoimmune Disease",
  "Other / Not Sure",
];

export default function ConsultationPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    condition: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    setServerError("");

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = (await res.json()) as { error?: string };
        setServerError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch {
      setServerError("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Navbar overlay />

      {/* Hero */}
      <section className="relative min-h-[36rem] overflow-hidden bg-[#123c3a] text-white lg:min-h-[42rem]">
        <Image
          src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=2000&q=88&auto=format&fit=crop"
          alt="Doctor speaking with a patient during a medical consultation"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071f1e]/95 via-[#0d3532]/78 to-[#071f1e]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071f1e]/85 via-transparent to-[#071f1e]/25" />
        <div className="relative z-10 mx-auto flex min-h-[36rem] max-w-7xl items-end px-5 pb-12 pt-32 sm:px-8 sm:pb-16 lg:min-h-[42rem] lg:px-10">
          <div className="max-w-3xl">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md">
              <Dna className="h-4 w-4" /> Free Medical Consultation
            </span>
            <h1 className="mt-7 text-[clamp(3rem,7vw,6.4rem)] font-semibold leading-[0.94] tracking-[-0.065em] text-white">
              Start your <em className="font-serif font-normal text-teal-200">care journey.</em>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
              Speak with our specialised medical team — completely free and with
              zero obligation. We&apos;ll assess your condition and explain exactly
              what regenerative therapy can do for you.
            </p>
          </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-[380px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1400&q=82&auto=format&fit=crop"
              alt="Healthcare professional reviewing a patient's care plan"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-950/80 via-teal-900/15 to-transparent" />
            <div className="absolute bottom-6 left-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-wider text-teal-300">A clearer next step</p>
              <p className="text-2xl font-bold">Bring your questions. Leave with a plan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left — form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                    <div className="bg-green-50 rounded-full p-4">
                      <CheckCircle className="h-12 w-12 text-green-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Request Received!
                    </h2>
                    <p className="text-gray-600 max-w-sm">
                      Thank you, {form.name}. Our medical team will reach out
                      within 24 hours to schedule your consultation.
                    </p>
                    <Link
                      href="/"
                      className="mt-4 inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-full font-medium hover:bg-teal-700 transition-colors"
                    >
                      Back to Home <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Book Your Free Consultation
                    </h2>
                    <p className="text-gray-500 mb-8">
                      Fill in the form and we&apos;ll contact you within 24 hours.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="e.g. Ahmad bin Hassan"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                        />
                      </div>

                      {/* Email + Phone */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@email.com"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Phone / WhatsApp <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+60 12-345 6789"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                          />
                        </div>
                      </div>

                      {/* Condition */}
                      <div>
                        <label
                          htmlFor="condition"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Condition / Area of Interest
                        </label>
                        <select
                          id="condition"
                          name="condition"
                          value={form.condition}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition bg-white"
                        >
                          <option value="">Select a condition...</option>
                          {conditions.map((c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Tell us about your situation
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Describe your symptoms, how long you've had them, and any treatments you've tried..."
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition resize-none"
                        />
                      </div>

                      {serverError && (
                        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                          {serverError}
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-teal-600 text-white py-4 rounded-full font-bold text-lg hover:bg-teal-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors shadow-[0_0_20px_rgba(37,99,235,0.3)] flex items-center justify-center gap-2"
                      >
                        {isLoading ? "Sending…" : "Request Free Consultation"}
                        {!isLoading && <ArrowRight className="h-5 w-5" />}
                      </button>

                      <p className="text-xs text-gray-400 text-center">
                        By submitting, you agree to our{" "}
                        <Link href="#" className="underline hover:text-gray-600">
                          privacy policy
                        </Link>
                        . We never share your data.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </motion.div>

            {/* Right — info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-2 flex flex-col gap-8"
            >
              {/* Benefits */}
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-5">
                  What to expect
                </h3>
                <ul className="space-y-3">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact details */}
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-5">
                  Contact us directly
                </h3>
                <ul className="space-y-4">
                  {contactInfo.map(({ icon: Icon, label, value, href }) => (
                    <li key={label} className="flex items-start gap-3">
                      <div className="bg-teal-50 p-2 rounded-lg flex-shrink-0">
                        <Icon className="h-4 w-4 text-teal-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-medium">
                          {label}
                        </p>
                        {href !== "#" ? (
                          <a
                            href={href}
                            className="text-sm font-medium text-gray-900 hover:text-teal-600 transition-colors"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-gray-900">
                            {value}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Teal CTA card */}
              <div className="bg-teal-700 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/30 rounded-full blur-[60px] pointer-events-none" />
                <h3 className="text-lg font-bold mb-2 relative z-10">
                  Prefer WhatsApp?
                </h3>
                <p className="text-teal-100 text-sm mb-5 relative z-10">
                  Chat instantly with our medical coordinator — no waiting, no
                  forms.
                </p>
                <a
                  href="https://wa.me/60123456789?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-medium hover:bg-green-600 transition-colors text-sm relative z-10"
                >
                  Open WhatsApp <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
