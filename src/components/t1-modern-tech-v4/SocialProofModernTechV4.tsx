export function SocialProofModernTechV4() {
  return (
    <section className="relative border-t border-slate-800/60">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4DF3FF]/30 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-24">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Brukes av norske B2B-selskaper som trenger ett felles faktagrunnlag
        </p>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-16 gap-y-8 md:gap-x-20">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex h-11 w-32 items-center justify-center text-xs text-slate-600 md:w-36"
            >
              <span className="rounded-md border border-slate-800/80 bg-slate-900/50 px-6 py-3">
                Logo {i}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
