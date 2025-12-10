"use client";

import { motion } from "framer-motion";
import type { PlayfulDataTrustContentV2 } from "@/lib/content/t3-playful-v2";

interface DataTrustPlayfulV2Props {
  content: PlayfulDataTrustContentV2;
}

// v2: Reduced to 2 key trust points - cleaner, less card-overload
const trustIcons = [
  // Document/source icon
  <svg key="source" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>,
  // Structure/consistency icon
  <svg key="structure" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
  </svg>,
];

export function DataTrustPlayfulV2({ content }: DataTrustPlayfulV2Props) {
  return (
    <section className="bg-playful-surface py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-playful-text sm:text-4xl">
            {content.title}
          </h2>
          <p className="mt-4 text-lg text-playful-text-muted">
            {content.subtitle}
          </p>
        </motion.div>

        {/* v2: Two-column layout instead of 4 small cards - cleaner, more premium */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            {content.points.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group"
              >
                <div className="h-full rounded-2xl border border-playful-border bg-playful-bg/50 p-8 transition-all duration-300 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-playful-purple to-playful-pink text-white shadow-md shadow-playful-purple/20 transition-transform duration-300 group-hover:scale-110">
                    {trustIcons[index]}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-playful-text">
                    {point.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-playful-text-muted">
                    {point.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
