export function PricingTeaserModernTech() {
  return (
    <section className="border-y border-slate-800/50 bg-[#0B0F14] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        {/* Decorative accent */}
        <div className="mx-auto mb-8 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#4DF3FF]/50" />
          <div className="h-2 w-2 rounded-full bg-[#4DF3FF]" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#4DF3FF]/50" />
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-[#F5F7FA] md:text-4xl">
          Kom i gang uten friksjon
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#94A3B8]">
          Test Winly gratis i 14 dager. Ingen binding. Oppgrader når du vil.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg bg-[#4DF3FF] px-8 py-4 text-base font-semibold text-[#05070A] transition-all hover:bg-[#4DF3FF]/90 hover:shadow-lg hover:shadow-[#4DF3FF]/25"
          >
            Start 14 dagers gratis prøveperiode
          </a>
        </div>
      </div>
    </section>
  );
}
