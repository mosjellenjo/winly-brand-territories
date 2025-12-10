export function PricingTeaserModernTechV2() {
  return (
    <section className="border-y border-slate-800/40 bg-[#0A0D11] py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
        {/* Decorative dots */}
        <div className="mb-8 flex items-center justify-center gap-2">
          <div className="h-1 w-1 rounded-full bg-[#4DF3FF]/40" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#4DF3FF]/60" />
          <div className="h-1 w-1 rounded-full bg-[#4DF3FF]/40" />
        </div>

        {/* Title */}
        <h2 className="text-3xl font-semibold text-[#F5F7FA]">
          Kom i gang uten friksjon
        </h2>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-md leading-relaxed text-slate-400">
          Test Winly gratis i 14 dager. Ingen binding. Oppgrader når du vil.
        </p>

        {/* No CTA here – removed per instructions */}
      </div>
    </section>
  );
}
