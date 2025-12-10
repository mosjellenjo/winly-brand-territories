export function SocialProofModernTechV2() {
  return (
    <section className="border-t border-slate-800/40">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        {/* Title */}
        <p className="text-center text-sm font-medium uppercase tracking-[0.15em] text-slate-500">
          Bygget for moderne norske B2B-selskaper
        </p>

        {/* Logo placeholder row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 md:gap-x-16">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex h-8 w-24 items-center justify-center text-xs text-slate-700 md:w-28"
            >
              <span className="rounded border border-slate-800/60 bg-slate-900/30 px-4 py-2">
                Logo {i}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
