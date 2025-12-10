"use client";

import { motion } from "framer-motion";

const stats = [
  { value: ">1M", label: "Bedrifter" },
  { value: ">1.3M", label: "Personer" },
  { value: ">2.8M", label: "Roller" },
  { value: ">700K", label: "Kontakter" },
  { value: "300+", label: "Nye anbud/uke" },
];

const logos = [
  "DNB",
  "Telenor",
  "Aker",
  "Schibsted",
  "Visma",
  "Kongsberg",
];

export function SocialProofModernTechV7() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#050709] py-20">
      {/* Subtle background glow */}
      <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4DF3FF]/5 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Stats grid - v5 style with gradient text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-5 gap-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative text-center"
            >
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-b from-[#4DF3FF]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                  <span className="bg-gradient-to-r from-[#4DF3FF] to-[#B875FF] bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                </div>
                <div className="mt-2 text-xs text-[#A0AEC0] sm:text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Logo strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <p className="mb-8 text-center text-sm uppercase tracking-widest text-[#4DF3FF]/60">
            Brukes av ledende norske virksomheter
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {logos.map((logo, index) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="group relative"
              >
                <div className="text-lg font-semibold text-[#A0AEC0]/40 transition-colors duration-300 group-hover:text-[#4DF3FF]/60">
                  {logo}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
