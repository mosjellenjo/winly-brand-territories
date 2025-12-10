"use client";

import { motion } from "framer-motion";

const layers = [
  {
    title: "Bedriftsdata",
    items: ["Regnskap", "Bransje", "Eierstruktur", "Vekstsignaler"],
    color: "#4DF3FF",
  },
  {
    title: "Persondata",
    items: ["Roller", "Kontakt", "Ansvar", "Historikk"],
    color: "#B875FF",
  },
  {
    title: "Anbudsdata",
    items: ["Utlysninger", "Tildelinger", "Frister", "Historikk"],
    color: "#4DF3FF",
  },
];

export function DataUniverseV6() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#0A0D12] py-32">
      {/* Background nodes visual */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="h-full w-full">
          <defs>
            <pattern id="nodes" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1" fill="#4DF3FF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#nodes)" />
        </svg>
      </div>

      {/* Glows */}
      <div className="absolute -left-40 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#4DF3FF]/8 blur-[150px]" />
      <div className="absolute -right-40 top-1/3 h-[300px] w-[300px] rounded-full bg-[#B875FF]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[#4DF3FF]">
            Det sammenkoblede datauniverset
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Alt koblet sammen i én struktur – uten siloer.
          </h2>
        </motion.div>

        {/* Three columns */}
        <div className="grid gap-6 md:grid-cols-3">
          {layers.map((layer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-[#050709] p-6 transition-all duration-300 hover:border-white/10">
                {/* Top accent */}
                <div
                  className="absolute inset-x-0 top-0 h-[2px]"
                  style={{ backgroundColor: layer.color, opacity: 0.6 }}
                />

                <div
                  className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `${layer.color}15` }}
                >
                  <div className="h-4 w-4 rounded" style={{ backgroundColor: layer.color }} />
                </div>

                <h3 className="mb-4 text-lg font-semibold text-white">{layer.title}</h3>

                <ul className="space-y-2">
                  {layer.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-[#A0AEC0]">
                      <span className="h-1 w-1 rounded-full" style={{ backgroundColor: layer.color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Connection note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center text-sm text-[#A0AEC0]"
        >
          Se sammenhenger ingen andre viser.
        </motion.p>
      </div>
    </section>
  );
}
