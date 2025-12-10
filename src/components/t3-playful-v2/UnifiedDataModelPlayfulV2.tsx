"use client";

import { motion } from "framer-motion";
import type { PlayfulUnifiedDataModelContentV2 } from "@/lib/content/t3-playful-v2";

interface UnifiedDataModelPlayfulV2Props {
  content: PlayfulUnifiedDataModelContentV2;
}

export function UnifiedDataModelPlayfulV2({ content }: UnifiedDataModelPlayfulV2Props) {
  return (
    <section className="relative overflow-hidden bg-playful-surface py-20 lg:py-28">
      {/* Subtle decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-playful-purple-soft opacity-30 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-playful-pink-soft opacity-20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tight text-playful-text sm:text-4xl">
              {content.title}
            </h2>
            <p className="text-lg font-medium text-playful-purple">
              {content.subtitle}
            </p>
            <p className="leading-relaxed text-playful-text-muted">
              {content.description}
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {content.dataPoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-playful-purple to-playful-pink text-white">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-playful-text">
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 lg:mt-0"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-playful-purple/10 to-playful-pink/10 blur-xl" />
              <div className="relative rounded-3xl border border-playful-border bg-playful-bg/50 p-8 shadow-playful">
                <div className="flex min-h-[300px] items-center justify-center">
                  <p className="text-sm text-playful-text-muted">Data model diagram placeholder</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
