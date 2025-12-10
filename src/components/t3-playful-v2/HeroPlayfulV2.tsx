"use client";

import { motion } from "framer-motion";
import type { PlayfulHeroContentV2 } from "@/lib/content/t3-playful-v2";

interface HeroPlayfulV2Props {
  content: PlayfulHeroContentV2;
}

export function HeroPlayfulV2({ content }: HeroPlayfulV2Props) {
  return (
    <section className="relative overflow-hidden bg-playful-bg py-20 lg:py-28">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-playful-purple-soft opacity-60 blur-3xl" />
        <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-playful-pink-soft opacity-50 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-playful-blue-soft opacity-40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="inline-block rounded-full bg-playful-purple-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-playful-purple">
                {content.overline}
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-playful-text sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
                {content.title}
              </h1>
              <p className="text-xl leading-relaxed text-playful-text-muted">
                {content.subtitle}
              </p>
            </div>

            <ul className="space-y-3">
              {content.bullets.map((bullet, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-playful-purple to-playful-pink text-white">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-playful-text-muted">{bullet}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <a
                href="/signup"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-playful-purple to-playful-pink px-8 py-4 text-base font-semibold text-white shadow-lg shadow-playful-purple/25 transition-all hover:shadow-xl hover:shadow-playful-purple/30 hover:scale-[1.02]"
              >
                {content.primaryCta}
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 lg:mt-0"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-playful-purple/20 to-playful-pink/20 blur-2xl" />
              <div className="relative flex h-full min-h-[400px] items-center justify-center rounded-3xl border border-playful-border bg-playful-surface p-8 shadow-playful">
                <p className="text-sm text-playful-text-muted">Hero visual placeholder</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
