"use client";

import { motion } from "framer-motion";

export function FinalCtaModernTechV7() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#050709] py-32">
      {/* Intense background glows */}
      <div className="absolute left-1/2 top-1/2 h-[800px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4DF3FF]/10 blur-[200px]" />
      <div className="absolute left-1/4 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#B875FF]/15 blur-[150px]" />
      <div className="absolute right-1/4 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#4DF3FF]/8 blur-[150px]" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #4DF3FF 1px, transparent 1px),
            linear-gradient(to bottom, #4DF3FF 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#4DF3FF]/20 bg-[#4DF3FF]/5 px-4 py-2 text-sm text-[#4DF3FF]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#4DF3FF]" />
            Ingen binding, ingen risiko
          </span>

          {/* Headline */}
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Det du ikke vet, koster mest
          </h2>

          {/* Subtext */}
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#A0AEC0] sm:text-xl">
            Uvitenhet er dyrere enn Winly. Få tilgang til din digitale tvilling av norsk næringsliv.
          </p>

          {/* CTA - only one */}
          <div className="mt-10">
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#4DF3FF] px-8 py-4 text-base font-semibold text-[#050709] transition-all duration-300 hover:shadow-[0_0_50px_rgba(77,243,255,0.5)]"
            >
              <span className="relative z-10">Start 14 dagers gratis prøveperiode</span>
              <svg
                className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-[#4DF3FF] via-[#7DF9FF] to-[#4DF3FF] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.a>
          </div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-[#A0AEC0]"
          >
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-[#4DF3FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Ingen kredittkort</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-[#4DF3FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Fullt funksjonell</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-[#4DF3FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Avslutt når som helst</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
