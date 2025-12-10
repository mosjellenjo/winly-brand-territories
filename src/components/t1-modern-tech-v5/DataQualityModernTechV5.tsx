"use client";

import { motion } from "framer-motion";

const qualityPoints = [
  {
    title: "Offisielle kilder",
    description: "Data hentet direkte fra Brønnøysundregistrene, Doffin og andre autoritative kilder.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Kontinuerlig oppdatering",
    description: "Nøkkelfelt oppdateres daglig. Du har alltid tilgang til fersk og relevant informasjon.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Transparent metodikk",
    description: "Vi er åpne om hvordan data samles inn og prosesseres. Ingen svarte bokser.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "GDPR-compliant",
    description: "Personvern og norske lovkrav er ivaretatt. Trygg databehandling i alle ledd.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
];

export function DataQualityModernTechV5() {
  return (
    <section className="relative overflow-hidden bg-[#050709] py-32">
      {/* Background glows */}
      <div className="absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#B875FF]/8 blur-[150px]" />
      <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#4DF3FF]/8 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: Content */}
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
              Data du kan stole på
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#A0AEC0]">
              Winly er bygget for norske B2B-organisasjoner som trenger et tydelig og ansvarlig forhold til data. Vi er åpne om kilder, oppdateringsfrekvens og begrensninger.
            </p>

            <div className="mt-10 space-y-6">
              {qualityPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 rounded-lg bg-[#4DF3FF]/10 p-3 text-[#4DF3FF]">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{point.title}</h3>
                    <p className="mt-1 text-sm text-[#A0AEC0]">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Visual */}
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
                    <span className="text-[#A0AEC0]">Systemoppetid</span>
                    <span className="font-semibold text-white">99.2%</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "99.2%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.7 }}
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
                      transition={{ duration: 1, delay: 0.8 }}
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
