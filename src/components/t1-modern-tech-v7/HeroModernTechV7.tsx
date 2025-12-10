"use client";

import { motion } from "framer-motion";

const heroFeatures = [
  "Identifiser kunder og partnere i Norges største B2B-dataplattform",
  "Overvåk konkurrenter og markedsendringer med sanntidssignaler",
  "Ta beslutninger basert på dyp innsikt - ikke magefølelse",
];

export function HeroModernTechV7() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Deep background with multiple glow layers */}
      <div className="absolute inset-0 bg-[#050709]" />

      {/* Primary cyan glow - center */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4DF3FF]/12 blur-[180px]" />

      {/* Secondary purple glow - left side */}
      <div className="absolute left-1/4 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#B875FF]/18 blur-[150px]" />

      {/* Tertiary cyan glow - right side */}
      <div className="absolute right-1/4 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-[#4DF3FF]/10 blur-[140px]" />

      {/* Top glow accent */}
      <div className="absolute -top-20 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-[#4DF3FF]/8 blur-[120px]" />

      {/* Animated grid overlay - enhanced visibility */}
      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #4DF3FF 1px, transparent 1px),
            linear-gradient(to bottom, #4DF3FF 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial vignette - softer */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050709_75%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-32 text-center">
        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#4DF3FF]/20 bg-[#4DF3FF]/5 px-4 py-2 text-sm text-[#4DF3FF] backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#4DF3FF]" />
            Norges ledende B2B-dataplattform
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-5xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
            Winly – Alt du trenger for å finne, forstå og vinne norske B2B-kunder.
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 max-w-3xl text-xl leading-relaxed text-[#A0AEC0] sm:text-2xl"
        >
          Det mest komplette og sammenkoblede universet av bedrifts-, person- og anbudsdata i Norge.
        </motion.p>

        {/* Feature bullets */}
        <motion.ul
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4 text-left sm:items-start"
        >
          {heroFeatures.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-3 text-base text-[#A0AEC0] sm:text-lg"
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
            </li>
          ))}
        </motion.ul>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12"
        >
          <a
            href="#"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#4DF3FF] px-8 py-4 text-base font-semibold text-[#050709] transition-all duration-300 hover:shadow-[0_0_40px_rgba(77,243,255,0.4)]"
          >
            <span className="relative z-10">Start 14 dagers gratis prøveperiode</span>
            <svg
              className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-[#4DF3FF] via-[#7DF9FF] to-[#4DF3FF] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-[#4DF3FF]/40">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
