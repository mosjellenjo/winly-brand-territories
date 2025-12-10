"use client";

import { motion } from "framer-motion";

const points = [
  "Offisielle kilder",
  "Daglige oppdateringer",
  "Transparent metodikk",
];

export function TrustV6() {
  return (
    <section className="relative overflow-hidden bg-[#050709] py-24">
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-6 text-sm font-medium uppercase tracking-widest text-[#4DF3FF]">
            Kvalitet & tillit
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {points.map((point, i) => (
              <div key={i} className="flex items-center gap-2 text-[#A0AEC0]">
                <svg className="h-4 w-4 text-[#4DF3FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {point}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
