"use client";

import { motion } from "framer-motion";
import type { PlayfulFeaturesContent } from "@/lib/content/t3-playful-v1";

interface FeaturesPlayfulProps {
  content: PlayfulFeaturesContent;
}

const featureIcons = [
  // Search icon
  <svg key="search" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>,
  // Profile icon
  <svg key="profile" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>,
  // People icon
  <svg key="people" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>,
  // Export icon
  <svg key="export" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
  </svg>,
];

export function FeaturesPlayful({ content }: FeaturesPlayfulProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-playful-bg-alt to-playful-bg py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-playful-blue-soft opacity-40 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-playful-purple-soft opacity-30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {content.items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full rounded-xl border border-playful-border bg-playful-surface p-6 shadow-sm transition-all hover:shadow-playful-card-hover">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-playful-purple/10 to-playful-pink/10 text-playful-purple transition-colors group-hover:from-playful-purple group-hover:to-playful-pink group-hover:text-white">
                  {featureIcons[index]}
                </div>
                <h3 className="mt-4 text-base font-semibold text-playful-text">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-playful-text-muted">
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
