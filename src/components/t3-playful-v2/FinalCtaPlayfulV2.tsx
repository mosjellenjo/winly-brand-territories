"use client";

import { motion } from "framer-motion";
import type { PlayfulFinalCtaContentV2 } from "@/lib/content/t3-playful-v2";

interface FinalCtaPlayfulV2Props {
  content: PlayfulFinalCtaContentV2;
}

export function FinalCtaPlayfulV2({ content }: FinalCtaPlayfulV2Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-playful-bg to-playful-bg-alt py-24 lg:py-32">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-playful-purple-soft opacity-50 blur-3xl" />
        <div className="absolute -right-20 top-1/3 h-96 w-96 rounded-full bg-playful-pink-soft opacity-40 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-playful-blue-soft opacity-30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-playful-text sm:text-4xl lg:text-5xl">
            {content.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-playful-text-muted">
            {content.subtitle}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10"
          >
            <a
              href="/signup"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-playful-purple to-playful-pink px-10 py-5 text-lg font-semibold text-white shadow-xl shadow-playful-purple/30 transition-all hover:shadow-2xl hover:shadow-playful-purple/40 hover:scale-[1.02]"
            >
              {content.primaryCta}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
