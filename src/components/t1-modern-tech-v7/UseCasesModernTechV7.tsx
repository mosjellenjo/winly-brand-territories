"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const useCases = [
  {
    id: "prospecting",
    title: "Prospektering",
    subtitle: "Finn dine beste kunder",
    description:
      "Bygg målrettede lister basert på bransje, størrelse og vekstsignaler. Se hvem du skal kontakte først.",
    features: [
      "Avansert søk og filtrering",
      "Lagre og del segmenter",
      "Eksporter til CRM",
    ],
  },
  {
    id: "enrichment",
    title: "Berikelse",
    subtitle: "Komplett bilde av hver kunde",
    description:
      "Berik eksisterende data med oppdatert informasjon. Hold CRM-et rent uten manuelt arbeid.",
    features: [
      "Automatisk oppdatering",
      "Dubletthåndtering",
      "Kvalitetsscoring",
    ],
  },
  {
    id: "monitoring",
    title: "Monitorering",
    subtitle: "Forutsigbar vekst starter her",
    description:
      "Vekst er ikke tilfeldig – det er synlig. Følg ansettelser, investeringer og signaler som viser hvor markedet er på vei, og ta beslutninger før konkurrentene.",
    features: [
      "Tilpassede varsler",
      "E-post og Slack",
      "Ukentlige oppsummeringer",
    ],
  },
  {
    id: "tenders",
    title: "Anbud",
    subtitle: "Vinn offentlige kontrakter",
    description:
      "Finn relevante anbud før konkurrentene. Se historikk og øk vinnersannsynligheten.",
    features: [
      "Daglige oppdateringer",
      "Bransjespesifikke filtre",
      "Fristpåminnelser",
    ],
  },
];

export function UseCasesModernTechV7() {
  const [activeCase, setActiveCase] = useState(useCases[0].id);
  const activeUseCase = useCases.find((uc) => uc.id === activeCase)!;

  return (
    <section className="relative overflow-hidden bg-[#050709] py-32">
      {/* Background glows */}
      <div className="absolute -right-60 top-1/4 h-[600px] w-[600px] rounded-full bg-[#4DF3FF]/8 blur-[150px]" />
      <div className="absolute -left-40 bottom-1/4 h-[500px] w-[500px] rounded-full bg-[#B875FF]/10 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Én plattform, mange bruksområder
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#A0AEC0]">
            Fra prospektering til anbudsovervåking – Winly støtter hele kundereisen.
          </p>
        </motion.div>

        {/* Use case tabs and content */}
        <div className="grid gap-8 lg:grid-cols-[280px,1fr]">
          {/* Tab navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-row gap-2 overflow-x-auto lg:flex-col lg:gap-3"
          >
            {useCases.map((useCase) => (
              <button
                key={useCase.id}
                onClick={() => setActiveCase(useCase.id)}
                className={`relative flex-shrink-0 rounded-xl px-5 py-4 text-left transition-all duration-300 ${
                  activeCase === useCase.id
                    ? "bg-[#0A0D12] text-white"
                    : "text-[#A0AEC0] hover:bg-[#0A0D12]/50 hover:text-white"
                }`}
              >
                {activeCase === useCase.id && (
                  <motion.div
                    layoutId="activeTabV7"
                    className="absolute left-0 top-0 h-full w-1 rounded-full bg-[#4DF3FF]"
                    transition={{ type: "spring", duration: 0.4 }}
                  />
                )}
                <div className="font-semibold">{useCase.title}</div>
                <div className="mt-1 text-sm opacity-60">{useCase.subtitle}</div>
              </button>
            ))}
          </motion.div>

          {/* Content panel */}
          <motion.div
            key={activeCase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="relative overflow-hidden rounded-2xl border border-white/5 bg-[#0A0D12] p-8 lg:p-10"
          >
            {/* Neon accent */}
            <div className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-[#4DF3FF] via-[#B875FF] to-[#4DF3FF]" />

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Left: Description */}
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {activeUseCase.title}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-[#A0AEC0]">
                  {activeUseCase.description}
                </p>
              </div>

              {/* Right: Features - 3 bullets max */}
              <div>
                <ul className="space-y-4">
                  {activeUseCase.features.map((feature, index) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 text-white"
                    >
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#4DF3FF]/10">
                        <svg
                          className="h-4 w-4 text-[#4DF3FF]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
