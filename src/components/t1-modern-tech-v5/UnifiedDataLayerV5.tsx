"use client";

import { motion } from "framer-motion";

const dataLayers = [
  {
    title: "Bedriftsdata",
    items: ["Regnskap og nøkkeltall", "Bransje og geografi", "Eierstruktur og konsern", "Vekst- og risikosignaler"],
    color: "#4DF3FF",
  },
  {
    title: "Persondata",
    items: ["Roller og stillinger", "Kontaktinformasjon", "Beslutningsansvar", "Karrierehistorikk"],
    color: "#B875FF",
  },
  {
    title: "Anbudsdata",
    items: ["Offentlige utlysninger", "Kontrakter og tildelinger", "Frister og status", "Historiske resultater"],
    color: "#4DF3FF",
  },
];

export function UnifiedDataLayerV5() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#0A0D12] py-32">
      {/* Background elements */}
      <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4DF3FF]/5 blur-[150px]" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-[#B875FF]/8 blur-[120px]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(#4DF3FF 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-[#4DF3FF]/20 bg-[#4DF3FF]/5 px-4 py-1.5 text-sm text-[#4DF3FF]">
            Tre datalag – én plattform
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Det sammenkoblede datauniverset
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#A0AEC0]">
            Bedrifter, mennesker og muligheter – alt koblet sammen slik at du ser hele bildet og kan handle raskere.
          </p>
        </motion.div>

        {/* Data layers visualization */}
        <div className="grid gap-6 md:grid-cols-3">
          {dataLayers.map((layer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative"
            >
              <div
                className="relative overflow-hidden rounded-2xl border border-white/5 bg-[#050709] p-8 transition-all duration-300 hover:border-white/10"
              >
                {/* Top accent line */}
                <div
                  className="absolute left-0 right-0 top-0 h-[3px] opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ backgroundColor: layer.color }}
                />

                {/* Glow on hover */}
                <div
                  className="absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: `linear-gradient(to bottom, ${layer.color}15, transparent)` }}
                />

                <div className="relative">
                  {/* Layer icon */}
                  <div
                    className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${layer.color}15` }}
                  >
                    <div
                      className="h-6 w-6 rounded-md"
                      style={{ backgroundColor: layer.color }}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mb-6 text-xl font-semibold text-white">
                    {layer.title}
                  </h3>

                  {/* Items list */}
                  <ul className="space-y-3">
                    {layer.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-center gap-3 text-[#A0AEC0]"
                      >
                        <span
                          className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
                          style={{ backgroundColor: layer.color }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Connection visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <div className="relative rounded-2xl border border-white/5 bg-[#050709] px-8 py-4">
            <div className="flex items-center gap-4 text-sm text-[#A0AEC0]">
              <span className="h-2 w-2 rounded-full bg-[#4DF3FF]" />
              <span>Alt er koblet sammen</span>
              <span className="text-[#4DF3FF]">→</span>
              <span>Se relasjoner og sammenhenger på tvers</span>
              <span className="h-2 w-2 rounded-full bg-[#B875FF]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
