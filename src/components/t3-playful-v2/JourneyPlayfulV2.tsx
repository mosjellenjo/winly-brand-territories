"use client";

import { motion } from "framer-motion";
import type { PlayfulJourneyContentV2 } from "@/lib/content/t3-playful-v2";

interface JourneyPlayfulV2Props {
  content: PlayfulJourneyContentV2;
}

// v2: Abstract icons representing the journey, not letter icons
const journeyIcons = [
  // Search/Discover icon - represents "Finn"
  <svg key="discover" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>,
  // Network/Connections icon - represents "Forstå"
  <svg key="connect" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
  </svg>,
  // Target/Win icon - represents "Vinn"
  <svg key="target" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
  </svg>,
];

// Connecting line between steps
function ConnectingLine() {
  return (
    <div className="absolute left-1/2 top-[60px] hidden h-[calc(100%-120px)] w-px -translate-x-1/2 bg-gradient-to-b from-playful-purple/30 via-playful-pink/30 to-playful-blue/30 lg:block" />
  );
}

export function JourneyPlayfulV2({ content }: JourneyPlayfulV2Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-playful-bg to-playful-surface py-24 lg:py-32">
      {/* Decorative background elements - enhanced for visual highlight */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/4 h-[500px] w-[500px] rounded-full bg-playful-purple-soft/40 blur-[100px]" />
        <div className="absolute right-0 bottom-1/4 h-[400px] w-[400px] rounded-full bg-playful-pink-soft/30 blur-[80px]" />
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-playful-blue-soft/20 blur-[60px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-playful-text sm:text-5xl">
            {content.title}
          </h2>
          <p className="mt-4 text-lg text-playful-text-muted">
            {content.subtitle}
          </p>
        </motion.div>

        {/* Journey Steps - Horizontal strip on desktop, vertical on mobile */}
        <div className="relative mt-20">
          {/* Desktop: Horizontal connecting line */}
          <div className="absolute left-[16.67%] right-[16.67%] top-12 hidden h-0.5 bg-gradient-to-r from-playful-purple/20 via-playful-pink/30 to-playful-blue/20 lg:block" />

          <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
            {content.steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative"
              >
                {/* Card with enhanced styling */}
                <div className="relative h-full rounded-3xl border border-playful-border/60 bg-playful-surface/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-playful-card-hover lg:p-10">
                  {/* Gradient glow on hover */}
                  <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-playful-purple/20 via-playful-pink/10 to-playful-blue/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative">
                    {/* Step number and icon */}
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-playful-purple to-playful-pink text-white shadow-lg shadow-playful-purple/25 transition-transform duration-300 group-hover:scale-110">
                        {journeyIcons[index]}
                      </div>
                      <span className="text-sm font-medium uppercase tracking-wider text-playful-text-muted">
                        Steg {step.step}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-6 text-2xl font-bold text-playful-text">
                      {step.title}
                    </h3>

                    {/* Outcome - what the user achieves */}
                    <p className="mt-4 leading-relaxed text-playful-text-muted">
                      {step.outcome}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
