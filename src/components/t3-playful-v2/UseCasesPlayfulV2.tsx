"use client";

import { motion } from "framer-motion";
import type { PlayfulUseCasesContentV2 } from "@/lib/content/t3-playful-v2";

interface UseCasesPlayfulV2Props {
  content: PlayfulUseCasesContentV2;
}

// v2: Icons that represent the use cases without being too literal
const useCaseIcons = [
  // Sales - growth/priority icon
  <svg key="sales" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
  </svg>,
  // Marketing - target/segment icon
  <svg key="marketing" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
  </svg>,
  // Consulting - analysis/insight icon
  <svg key="consulting" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
  </svg>,
];

export function UseCasesPlayfulV2({ content }: UseCasesPlayfulV2Props) {
  return (
    <section className="bg-gradient-to-b from-playful-bg to-playful-bg-alt py-20 lg:py-28">
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

        {/* v2: Use cases in a horizontal strip, equal sizes */}
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
              <div className="relative h-full rounded-2xl border border-playful-border bg-playful-surface p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-playful-card-hover">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-playful-purple to-playful-pink text-white shadow-lg shadow-playful-purple/20 transition-transform duration-300 group-hover:scale-110">
                  {useCaseIcons[index]}
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
