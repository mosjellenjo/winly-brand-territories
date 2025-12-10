export function FinalCtaModernTechV2() {
  return (
    <section id="start" className="relative overflow-hidden py-24 md:py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4DF3FF]/[0.06] blur-[100px]" />
        <div className="absolute left-1/3 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-[#B875FF]/[0.04] blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center md:px-6">
        {/* H1 */}
        <h2 className="text-3xl font-semibold leading-tight text-[#F5F7FA] md:text-4xl">
          Klar for en moderne måte å jobbe med norske B2B-data på?
        </h2>

        {/* H2 */}
        <p className="mx-auto mt-5 max-w-lg leading-relaxed text-slate-400 md:text-lg">
          Start en gratis prøveperiode og opplev forskjellen.
        </p>

        {/* Primary CTA */}
        <div className="mt-10">
          <a
            href="#"
            className="group inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#4DF3FF] to-[#3DD8E8] px-8 py-4 text-base font-semibold text-[#05070A] transition-all hover:shadow-xl hover:shadow-[#4DF3FF]/20"
          >
            Start 14 dagers gratis prøveperiode
            <svg
              className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>

        {/* Subtle secondary text link */}
        <p className="mt-6 text-sm text-slate-600">
          Ingen kredittkort. Ingen binding.
        </p>

        {/* Decorative bottom element */}
        <div className="mx-auto mt-16 flex items-center justify-center gap-3">
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#4DF3FF]/20" />
          <div className="h-1 w-1 rounded-full bg-[#4DF3FF]/30" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#B875FF]/40" />
          <div className="h-1 w-1 rounded-full bg-[#4DF3FF]/30" />
          <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#B875FF]/20" />
        </div>
      </div>
    </section>
  );
}
