export function PricingTeaserModernTechV3() {
  return (
    <section className="relative border-y border-slate-800/50 bg-[#080A0E] py-24 md:py-28">
      {/* Subtle gradient dividers */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4DF3FF]/15 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#B875FF]/15 to-transparent" />

      <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
        {/* Decorative neon dots – more presence than v2 */}
        <div className="mb-10 flex items-center justify-center gap-3">
          <div className="h-1.5 w-1.5 rounded-full bg-[#4DF3FF]/50" />
          <div className="h-2 w-2 rounded-full bg-[#4DF3FF] shadow-md shadow-[#4DF3FF]/40" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#4DF3FF]/50" />
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-[#F5F7FA] md:text-4xl">
          Kom i gang uten friksjon
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-slate-400">
          Test Winly gratis i 14 dager. Ingen binding. Oppgrader når du vil.
        </p>

        {/* No CTA here – only in Final CTA */}
      </div>
    </section>
  );
}
