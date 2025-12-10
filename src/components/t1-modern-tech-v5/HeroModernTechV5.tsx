"use client";

import { motion } from "framer-motion";

const heroFeatures = [
  "Se hele markedet og alle sammenhenger på ett sted",
  "Finn riktige selskaper, roller og muligheter raskt",
  "Bygg segmenter og prioriteringslister basert på ekte data",
];

export function HeroModernTechV5() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Deep background with multiple glow layers */}
      <div className="absolute inset-0 bg-[#050709]" />

      {/* Primary cyan glow - top center */}
      <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#4DF3FF]/20 blur-[150px]" />

      {/* Secondary purple glow - right side */}
      <div className="absolute -right-20 top-1/4 h-[500px] w-[500px] rounded-full bg-[#B875FF]/15 blur-[120px]" />

      {/* Tertiary cyan glow - left bottom */}
      <div className="absolute -left-20 bottom-1/4 h-[400px] w-[400px] rounded-full bg-[#4DF3FF]/10 blur-[100px]" />

      {/* Animated grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #4DF3FF 1px, transparent 1px),
            linear-gradient(to bottom, #4DF3FF 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050709_70%)]" />

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

        {/* Main headline - tagline */}
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

        {/* Sub-headline */}
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
            <span className="relative z-10">Start 14 dagers gratis prøve</span>
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
