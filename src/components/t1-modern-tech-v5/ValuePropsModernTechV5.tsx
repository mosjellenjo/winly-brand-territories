"use client";

import { motion } from "framer-motion";

const valueProps = [
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    title: "Alt samlet på ett sted",
    description:
      "Bedriftsdata, persondata og anbudsdata – koblet sammen og tilgjengelig i én plattform. Ingen flere separate verktøy eller manuelle koblinger.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    title: "Finn eksakt det du leter etter",
    description:
      "Kraftig søk og filtrering på tvers av alle datakilder. Fra bransje og geografi til rolle og beslutningsmyndighet – på sekunder.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
    title: "Prioriter basert på fakta",
    description:
      "Bygg målrettede lister og segmenter med ekte signaler. Se hvem som vokser, hvem som ansetter, og hvem som har aktive behov.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    title: "Sammenkoblet intelligens",
    description:
      "Se relasjonene mellom selskaper, personer og muligheter. Forstå nettverk, eierstrukturer og beslutningsveier.",
  },
];

export function ValuePropsModernTechV5() {
  return (
    <section className="relative overflow-hidden bg-[#050709] py-32">
      {/* Background glows */}
      <div className="absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#B875FF]/10 blur-[150px]" />
      <div className="absolute -right-40 top-1/3 h-[400px] w-[400px] rounded-full bg-[#4DF3FF]/10 blur-[120px]" />

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
            Kraft og helhet i én plattform
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#A0AEC0]">
            Alt du trenger for å identifisere, kvalifisere og nå ut til dine beste kunder – uten å bytte mellom verktøy.
          </p>
        </motion.div>

        {/* Value props grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card with neon top stripe */}
              <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-[#0A0D12] p-8 transition-all duration-300 hover:border-[#4DF3FF]/20">
                {/* Neon top stripe */}
                <div className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-[#4DF3FF] via-[#B875FF] to-[#4DF3FF] opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Glow effect on hover */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-[#4DF3FF]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative">
                  {/* Icon */}
                  <div className="mb-6 inline-flex rounded-xl bg-[#4DF3FF]/10 p-3 text-[#4DF3FF]">
                    {prop.icon}
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-xl font-semibold text-white">
                    {prop.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#A0AEC0] leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
