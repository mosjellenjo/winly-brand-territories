export function FinalCtaModernTech() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#4DF3FF]/10 blur-[100px]" />
        <div className="absolute right-1/3 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#B875FF]/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        {/* H1 */}
        <h2 className="text-3xl font-bold leading-tight text-[#F5F7FA] md:text-4xl lg:text-5xl">
          Klar for en moderne måte å jobbe med norske B2B-data på?
        </h2>

        {/* H2 */}
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#94A3B8] md:text-xl">
          Start en gratis prøveperiode og opplev forskjellen.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg bg-[#4DF3FF] px-8 py-4 text-base font-semibold text-[#05070A] transition-all hover:bg-[#4DF3FF]/90 hover:shadow-xl hover:shadow-[#4DF3FF]/30"
          >
            Start 14 dagers gratis prøveperiode
          </a>
        </div>

        {/* Decorative bottom element */}
        <div className="mx-auto mt-16 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#4DF3FF]/30" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#4DF3FF]/50" />
          <div className="h-2 w-2 rounded-full bg-[#B875FF]/70" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#4DF3FF]/50" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#B875FF]/30" />
        </div>
      </div>
    </section>
  );
}
