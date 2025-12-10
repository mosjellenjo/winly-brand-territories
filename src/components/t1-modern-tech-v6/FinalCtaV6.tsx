"use client";

import { motion } from "framer-motion";

export function FinalCtaV6() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#050709] py-32">
      {/* Glows */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4DF3FF]/8 blur-[200px]" />
      <div className="absolute left-1/3 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#B875FF]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Klar for ett samlet bilde av det norske B2B-markedet?
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg text-[#A0AEC0]">
            Det mest komplette og sammenkoblede universet av bedrifts-, person- og anbudsdata i Norge.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10"
          >
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-full bg-[#4DF3FF] px-8 py-4 text-base font-semibold text-[#050709] transition-all duration-300 hover:shadow-[0_0_50px_rgba(77,243,255,0.5)]"
            >
              Start 14 dagers gratis prøve
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </motion.div>

          <p className="mt-6 text-sm text-[#A0AEC0]/60">
            Ingen kredittkort. Fullt funksjonell prøveperiode.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
