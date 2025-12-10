"use client";

import { motion } from "framer-motion";
import type { PlayfulUseCasesContent } from "@/lib/content/t3-playful-v1";

interface UseCasesPlayfulProps {
  content: PlayfulUseCasesContent;
}

const icons = [
  // Sales icon
  <svg key="sales" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>,
  // Marketing icon
  <svg key="marketing" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
  </svg>,
  // Consulting icon
  <svg key="consulting" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>,
];

export function UseCasesPlayful({ content }: UseCasesPlayfulProps) {
  return (
    <section className="bg-playful-surface py-20 lg:py-28">
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
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative h-full rounded-2xl border border-playful-border bg-gradient-to-b from-playful-bg to-playful-surface p-8 shadow-md transition-all hover:shadow-playful-card-hover">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-playful-purple to-playful-pink text-white shadow-lg shadow-playful-purple/20">
                  {icons[index]}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-playful-text">
                  {item.title}
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
