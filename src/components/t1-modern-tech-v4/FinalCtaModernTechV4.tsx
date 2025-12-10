export function FinalCtaModernTechV4() {
  return (
    <section id="start" className="relative overflow-hidden py-32 md:py-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4DF3FF]/[0.1] blur-[140px]" />
        <div className="absolute left-1/3 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#B875FF]/[0.06] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center md:px-6">
        <h2 className="text-3xl font-bold leading-tight text-[#F5F7FA] md:text-4xl lg:text-5xl">
          Klar for ett samlet bilde av det norske B2B-markedet?
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-400 md:text-xl">
          Start en gratis prøveperiode og bygg et faktagrunnlag teamet ditt kan
          jobbe etter.
        </p>

        <div className="mt-12">
          <a
            href="#"
            className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#4DF3FF] to-[#3DD8E8] px-10 py-5 text-lg font-semibold text-[#050709] shadow-2xl shadow-[#4DF3FF]/30 transition-all hover:shadow-[0_0_60px_rgba(77,243,255,0.4)]"
          >
            Start 14 dagers gratis prøve
            <svg
              className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>

        <p className="mt-6 text-sm text-slate-600">
          Ingen kredittkort. Ingen binding.
        </p>

        <div className="mx-auto mt-20 flex items-center justify-center gap-5">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#4DF3FF]/40" />
          <div className="h-2 w-2 rounded-full bg-[#4DF3FF]/60 shadow-lg shadow-[#4DF3FF]/40" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#B875FF]/70 shadow-lg shadow-[#B875FF]/40" />
          <div className="h-2 w-2 rounded-full bg-[#4DF3FF]/60 shadow-lg shadow-[#4DF3FF]/40" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#B875FF]/40" />
        </div>
      </div>
    </section>
  );
}
