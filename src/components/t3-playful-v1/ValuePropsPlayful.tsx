"use client";

import { motion } from "framer-motion";
import type { PlayfulValuePropsContent } from "@/lib/content/t3-playful-v1";

interface ValuePropsPlayfulProps {
  content: PlayfulValuePropsContent;
}

const gradients = [
  "from-playful-purple to-playful-purple-deep",
  "from-playful-pink to-playful-purple",
  "from-playful-blue to-playful-purple",
];

export function ValuePropsPlayful({ content }: ValuePropsPlayfulProps) {
  return (
    <section className="bg-gradient-to-b from-playful-surface to-playful-bg py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-playful-text sm:text-4xl">
            {content.title}
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {content.items.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-playful-purple/20 to-playful-pink/20 opacity-0 blur transition-opacity group-hover:opacity-100" />
              <div className="relative rounded-2xl border border-playful-border bg-playful-surface p-8 shadow-lg transition-shadow hover:shadow-playful-card-hover">
                <span className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${gradients[index]} text-lg font-bold text-white shadow-md`}>
                  {item.label.charAt(0)}
                </span>
                <h3 className="mt-6 text-xl font-semibold text-playful-text">
                  {item.label}
                </h3>
                <p className="mt-3 leading-relaxed text-playful-text-muted">
                  {item.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
