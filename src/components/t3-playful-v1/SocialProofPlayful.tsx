"use client";

import { motion } from "framer-motion";
import type { PlayfulSocialProofContent } from "@/lib/content/t3-playful-v1";

interface SocialProofPlayfulProps {
  content: PlayfulSocialProofContent;
}

export function SocialProofPlayful({ content }: SocialProofPlayfulProps) {
  return (
    <section className="bg-playful-surface py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-lg font-semibold text-playful-text">
            {content.title}
          </h2>
          <p className="mt-2 text-playful-text-muted">
            {content.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-8 lg:gap-12"
        >
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex h-12 w-28 items-center justify-center rounded-lg bg-playful-bg-muted text-xs text-playful-text-muted"
            >
              Logo {i}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
