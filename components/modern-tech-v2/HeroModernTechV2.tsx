export function HeroModernTechV2() {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-[#4DF3FF]/[0.07] blur-[120px]" />
        <div className="absolute right-1/4 top-1/2 h-[400px] w-[400px] rounded-full bg-[#B875FF]/[0.05] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-24 md:px-6 md:pb-28 md:pt-32 lg:pb-32 lg:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Text content */}
          <div className="flex flex-col gap-6">
            {/* Overline */}
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#4DF3FF]">
              B2B-DATA · NORGE
            </span>

            {/* H1 */}
            <h1 className="max-w-xl text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl lg:text-[3.5rem]">
              Datakraft for moderne norske B2B-team
            </h1>

            {/* H2 / Subheadline */}
            <p className="max-w-lg text-lg leading-relaxed text-slate-300">
              Winly samler og kobler norsk bedrifts-, person- og anbudsdata i én
              strukturert datamodell – slik at teamene dine jobber raskere,
              tryggere og mer samkjørt.
            </p>

            {/* Bullet points */}
            <ul className="mt-2 flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4DF3FF]" />
                <span className="text-slate-400">
                  Universet av selskaper, personer, eierskap og anbud – samlet i
                  én modell
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4DF3FF]" />
                <span className="text-slate-400">
                  Bygg segmenter på sekunder, ikke timer
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4DF3FF]" />
                <span className="text-slate-400">
                  Del innsikt sømløst med salg, marked og ledelse
                </span>
              </li>
            </ul>

            {/* CTA */}
            <div className="mt-6">
              <a
                href="#start"
                className="group inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#4DF3FF] to-[#3DD8E8] px-6 py-3.5 text-sm font-semibold text-[#05070A] transition-all hover:shadow-lg hover:shadow-[#4DF3FF]/20"
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
          </div>

          {/* Hero visual placeholder */}
          <div className="relative lg:pl-8">
            <div className="relative overflow-hidden rounded-3xl border border-slate-800/60 bg-gradient-to-br from-[#0B0F14] to-[#080B0F] p-8 md:p-10">
              {/* Inner glow */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-[#4DF3FF]/[0.03] via-transparent to-[#B875FF]/[0.03]" />

              {/* Abstract data visualization */}
              <div className="relative flex h-[280px] flex-col items-center justify-center gap-8 md:h-[340px]">
                {/* Node cluster */}
                <div className="flex items-end gap-6">
                  {/* Left branch */}
                  <div className="flex flex-col items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-[#4DF3FF]/60 shadow-lg shadow-[#4DF3FF]/30" />
                    <div className="h-12 w-px bg-gradient-to-b from-[#4DF3FF]/40 to-transparent" />
                  </div>

                  {/* Center node */}
                  <div className="relative flex flex-col items-center">
                    <div className="absolute -inset-4 rounded-full bg-[#4DF3FF]/10 blur-xl" />
                    <div className="relative h-5 w-5 rounded-full bg-[#4DF3FF] shadow-lg shadow-[#4DF3FF]/50" />
                    <div className="mt-3 h-16 w-px bg-gradient-to-b from-[#4DF3FF]/50 to-[#B875FF]/30" />
                    <div className="h-4 w-4 rounded-full bg-[#B875FF] shadow-lg shadow-[#B875FF]/50" />
                  </div>

                  {/* Right branch */}
                  <div className="flex flex-col items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-[#B875FF]/60 shadow-lg shadow-[#B875FF]/30" />
                    <div className="h-12 w-px bg-gradient-to-b from-[#B875FF]/40 to-transparent" />
                  </div>
                </div>

                {/* Horizontal connectors */}
                <div className="flex items-center gap-4">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#4DF3FF]/30 to-transparent" />
                  <div className="h-2 w-2 rounded-full bg-[#4DF3FF]/40" />
                  <div className="h-px w-20 bg-gradient-to-r from-[#4DF3FF]/20 via-[#B875FF]/20 to-transparent" />
                  <div className="h-2 w-2 rounded-full bg-[#B875FF]/40" />
                  <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#B875FF]/30 to-transparent" />
                </div>

                {/* Placeholder text */}
                <div className="text-center">
                  <p className="text-sm text-slate-500">Hero visual placeholder</p>
                  <p className="mt-1 text-xs text-slate-600">
                    Koblet dataunivers · nodes · glow
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
