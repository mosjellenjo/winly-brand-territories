"use client";

import { motion } from "framer-motion";

const props = [
  {
    title: "Finn riktige kunder raskere",
    description: "Filtrer på bransje, størrelse, geografi, vekst og signaler – på sekunder.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    title: "Forstå hele markedet",
    description: "Se selskaper, roller, eiere og anbud koblet i én modell.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Handle smartere",
    description: "Prioriter innsats basert på reelle behov, aktivitet og utvikling.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

export function ValuePropsV6() {
  return (
    <section className="relative overflow-hidden bg-[#050709] py-32">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4DF3FF]/5 blur-[200px]" />

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ett samlet bilde av norske selskaper, personer og anbud.
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {props.map((prop, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="relative rounded-2xl border border-white/5 bg-[#0A0D12] p-8 transition-all duration-300 hover:border-[#4DF3FF]/30">
                {/* Top neon line */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4DF3FF]/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="mb-5 inline-flex rounded-xl bg-[#4DF3FF]/10 p-3 text-[#4DF3FF]">
                  {prop.icon}
                </div>

                <h3 className="mb-3 text-lg font-semibold text-white">{prop.title}</h3>
                <p className="text-sm leading-relaxed text-[#A0AEC0]">{prop.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
