"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Lynrask søk",
    description: "Søk på tvers av millioner av datapunkter på millisekunder.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Kraftige filtre",
    description: "Kombiner hundrevis av filtre – bransje, geografi, vekst og mer.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
      </svg>
    ),
  },
  {
    title: "Smarte varsler",
    description: "Bli varslet om nye anbud, rollebytter og vekstsignaler.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ),
  },
  {
    title: "Sømløs eksport",
    description: "Eksporter til Excel, CRM eller andre systemer med ett klikk.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
      </svg>
    ),
  },
];

export function FeaturesModernTechV7() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#0A0D12] py-32">
      {/* Background elements */}
      <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4DF3FF]/3 blur-[200px]" />

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
            Verktøyene du trenger
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#A0AEC0]">
            Alt du trenger for å jobbe effektivt med norsk B2B-data.
          </p>
        </motion.div>

        {/* Features grid - 4 features, 2x2 */}
        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-[#050709] p-6 transition-all duration-300 hover:border-[#4DF3FF]/20">
                {/* Top accent */}
                <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#4DF3FF]/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Icon */}
                <div className="mb-4 inline-flex rounded-lg bg-[#4DF3FF]/10 p-3 text-[#4DF3FF]">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-[#A0AEC0]">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
