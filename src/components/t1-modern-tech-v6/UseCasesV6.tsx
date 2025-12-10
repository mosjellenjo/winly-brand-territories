"use client";

import { motion } from "framer-motion";

const cases = [
  {
    title: "Salgsteam",
    description: "Finn og prioriter de beste prospektene basert på ekte signaler.",
  },
  {
    title: "Markedsteam",
    description: "Bygg målrettede segmenter og forstå markedet på dypet.",
  },
  {
    title: "Konsulenter & byråer",
    description: "Lever bedre innsikt og raskere analyser til kundene dine.",
  },
];

export function UseCasesV6() {
  return (
    <section className="relative overflow-hidden bg-[#050709] py-32">
      {/* Glow */}
      <div className="absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#B875FF]/8 blur-[150px]" />

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Bygget for team som vil vinne
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="relative rounded-2xl border border-white/5 bg-[#0A0D12] p-8 transition-all duration-300 hover:border-[#4DF3FF]/20 hover:bg-[#0A0D12]/80">
                {/* Accent line */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#4DF3FF] to-[#B875FF] opacity-50 transition-opacity group-hover:opacity-100" />

                <h3 className="mb-2 text-lg font-semibold text-white">{c.title}</h3>
                <p className="text-sm text-[#A0AEC0]">{c.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
