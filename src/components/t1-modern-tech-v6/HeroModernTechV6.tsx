"use client";

import { motion } from "framer-motion";

const heroPoints = [
  "Se hele markedet og alle sammenhenger på ett sted",
  "Finn riktige kunder på minutter, ikke timer",
  "Prioriter innsats basert på ekte signaler",
];

export function HeroModernTechV6() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#050709]" />

      {/* Primary glow */}
      <div className="absolute -top-32 left-1/4 h-[600px] w-[600px] rounded-full bg-[#4DF3FF]/15 blur-[180px]" />
      <div className="absolute -right-20 top-1/3 h-[500px] w-[500px] rounded-full bg-[#B875FF]/12 blur-[150px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(to right, #4DF3FF 1px, transparent 1px), linear-gradient(to bottom, #4DF3FF 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050709_75%)]" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-12 px-6 py-32 lg:grid-cols-2">
        {/* Left: Content */}
        <div className="max-w-2xl">
          {/* Overline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-[#4DF3FF]"
          >
            B2B Data · Norge
          </motion.p>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Se hele det norske B2B-markedet i én struktur.
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-[#A0AEC0] sm:text-xl"
          >
            Winly – Alt du trenger for å finne, forstå og vinne norske B2B-kunder.
          </motion.p>

          {/* Bullets */}
          <motion.ul
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 space-y-3"
          >
            {heroPoints.map((point, i) => (
              <li key={i} className="flex items-center gap-3 text-[#A0AEC0]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#4DF3FF]" />
                {point}
              </li>
            ))}
          </motion.ul>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10"
          >
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-full bg-[#4DF3FF] px-7 py-3.5 text-base font-semibold text-[#050709] transition-all duration-300 hover:shadow-[0_0_40px_rgba(77,243,255,0.4)]"
            >
              Start 14 dagers gratis prøve
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Right: Hero Graphic Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="relative aspect-square w-full max-w-lg">
            {/* Glow behind */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#4DF3FF]/20 via-[#B875FF]/10 to-transparent blur-2xl" />

            {/* Placeholder graphic area */}
            <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-[#0A0D12]/80 backdrop-blur-sm">
              {/* Abstract nodes visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-64 w-64">
                  {/* Center node */}
                  <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#4DF3FF] bg-[#4DF3FF]/10" />

                  {/* Orbiting nodes */}
                  {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                    <motion.div
                      key={i}
                      className="absolute left-1/2 top-1/2 h-8 w-8 rounded-full border border-[#B875FF]/60 bg-[#B875FF]/10"
                      style={{
                        transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(100px) rotate(-${angle}deg)`,
                      }}
                      animate={{ rotate: [angle, angle + 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                  ))}

                  {/* Connection lines */}
                  <svg className="absolute inset-0 h-full w-full opacity-30">
                    {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                      const x = 128 + Math.cos((angle * Math.PI) / 180) * 100;
                      const y = 128 + Math.sin((angle * Math.PI) / 180) * 100;
                      return (
                        <line
                          key={i}
                          x1="128"
                          y1="128"
                          x2={x}
                          y2={y}
                          stroke="#4DF3FF"
                          strokeWidth="1"
                        />
                      );
                    })}
                  </svg>
                </div>
              </div>

              {/* Label */}
              <div className="absolute bottom-4 left-4 rounded-full bg-white/5 px-3 py-1 text-xs text-[#A0AEC0]">
                Hero-grafikk placeholder
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
