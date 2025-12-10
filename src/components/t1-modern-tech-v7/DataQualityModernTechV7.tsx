"use client";

import { motion } from "framer-motion";

const qualityPoints = [
  {
    title: "Offisielle kilder",
    description: "Data fra Brønnøysundregistrene, Doffin og andre autoritative kilder.",
  },
  {
    title: "Daglige oppdateringer",
    description: "Nøkkelfelt oppdateres daglig – alltid fersk informasjon.",
  },
  {
    title: "Transparent metodikk",
    description: "Vi er åpne om hvordan data samles inn og prosesseres.",
  },
];

export function DataQualityModernTechV7() {
  return (
    <section className="relative overflow-hidden bg-[#050709] py-32">
      {/* Background glows */}
      <div className="absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#B875FF]/8 blur-[150px]" />
      <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#4DF3FF]/8 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: Content - stripped down */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block rounded-full border border-[#4DF3FF]/20 bg-[#4DF3FF]/5 px-4 py-1.5 text-sm text-[#4DF3FF]">
              Datakvalitet
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Pålitelig datagrunnlag
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#A0AEC0]">
              Winly er bygget for norske B2B-team som trenger et tydelig forhold til data. De fleste tror de tar datadrevne beslutninger – vi erstatter gjetning og utdaterte lister med fakta.
            </p>

            {/* 3 bullets only */}
            <div className="mt-10 space-y-6">
              {qualityPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#4DF3FF]/10">
                    <svg
                      className="h-4 w-4 text-[#4DF3FF]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{point.title}</h3>
                    <p className="mt-1 text-sm text-[#A0AEC0]">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Visual - progress bars kept */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-[#0A0D12] p-8">
              {/* Top accent */}
              <div className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-[#4DF3FF] to-[#B875FF]" />

              {/* Quality metrics */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#A0AEC0]">Datadekning</span>
                    <span className="font-semibold text-white">99.8%</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "99.8%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full rounded-full bg-gradient-to-r from-[#4DF3FF] to-[#B875FF]"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#A0AEC0]">Oppdateringsfrekvens</span>
                    <span className="font-semibold text-white">Daglig</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.6 }}
                      className="h-full rounded-full bg-gradient-to-r from-[#4DF3FF] to-[#B875FF]"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#A0AEC0]">Kildeverifisering</span>
                    <span className="font-semibold text-white">100%</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.7 }}
                      className="h-full rounded-full bg-gradient-to-r from-[#4DF3FF] to-[#B875FF]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
