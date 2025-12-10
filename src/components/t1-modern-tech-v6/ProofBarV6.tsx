"use client";

import { motion } from "framer-motion";

const metrics = [
  { value: "1M+", label: "norske virksomheter" },
  { value: "2.5M+", label: "roller og stillinger" },
  { value: "15K+", label: "aktive anbud og kontrakter" },
];

export function ProofBarV6() {
  return (
    <section className="relative border-y border-white/5 bg-[#050709] py-10">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-x-16 gap-y-6"
        >
          {metrics.map((metric, i) => (
            <div key={i} className="flex items-baseline gap-2 text-center">
              <span className="text-2xl font-bold text-[#4DF3FF] sm:text-3xl">
                {metric.value}
              </span>
              <span className="text-sm text-[#A0AEC0]">{metric.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
