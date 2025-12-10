export function SocialProofModernTechV3() {
  return (
    <section className="relative border-t border-slate-800/50">
      {/* Subtle gradient divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4DF3FF]/20 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-24">
        {/* Title */}
        <p className="text-center text-sm font-medium uppercase tracking-[0.15em] text-slate-500">
          Bygget for moderne norske B2B-selskaper
        </p>

        {/* Logo placeholder row */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-14 gap-y-8 md:gap-x-20">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex h-10 w-28 items-center justify-center text-xs text-slate-600 md:w-32"
            >
              <span className="rounded-md border border-slate-800/70 bg-slate-900/40 px-5 py-2.5">
                Logo {i}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
