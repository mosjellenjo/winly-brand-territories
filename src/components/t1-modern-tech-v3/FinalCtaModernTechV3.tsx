export function FinalCtaModernTechV3() {
  return (
    <section id="start" className="relative overflow-hidden py-28 md:py-36">
      {/* Background glow – stronger, more presence */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4DF3FF]/[0.08] blur-[120px]" />
        <div className="absolute left-1/3 top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-[#B875FF]/[0.05] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center md:px-6">
        {/* H1 – larger */}
        <h2 className="text-3xl font-bold leading-tight text-[#F5F7FA] md:text-4xl lg:text-5xl">
          Klar for en moderne måte å jobbe med norske B2B-data på?
        </h2>

        {/* H2 */}
        <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-slate-400 md:text-xl">
          Start en gratis prøveperiode og opplev forskjellen.
        </p>

        {/* Primary CTA – larger, more presence */}
        <div className="mt-12">
          <a
            href="#"
            className="group inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#4DF3FF] to-[#3DD8E8] px-10 py-5 text-lg font-semibold text-[#05070A] shadow-xl shadow-[#4DF3FF]/25 transition-all hover:shadow-2xl hover:shadow-[#4DF3FF]/30"
          >
            Start 14 dagers gratis prøveperiode
            <svg
              className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5"
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

        {/* Subtle secondary text */}
        <p className="mt-6 text-sm text-slate-600">
          Ingen kredittkort. Ingen binding.
        </p>

        {/* Decorative bottom element – more prominent neon */}
        <div className="mx-auto mt-20 flex items-center justify-center gap-4">
          <div className="h-px w-14 bg-gradient-to-r from-transparent to-[#4DF3FF]/30" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#4DF3FF]/50 shadow-sm shadow-[#4DF3FF]/30" />
          <div className="h-2 w-2 rounded-full bg-[#B875FF]/60 shadow-md shadow-[#B875FF]/30" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#4DF3FF]/50 shadow-sm shadow-[#4DF3FF]/30" />
          <div className="h-px w-14 bg-gradient-to-l from-transparent to-[#B875FF]/30" />
        </div>
      </div>
    </section>
  );
}
