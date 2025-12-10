export function HeroModernTechV3() {
  return (
    <section className="relative overflow-hidden">
      {/* Background glow – stronger than v2, inspired by v1 */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-[#4DF3FF]/[0.08] blur-[140px]" />
        <div className="absolute right-1/4 bottom-1/3 h-[500px] w-[500px] rounded-full bg-[#B875FF]/[0.06] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-28 md:px-6 md:pb-32 md:pt-36 lg:pb-40 lg:pt-44">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Text content */}
          <div className="flex flex-col gap-8">
            {/* Overline */}
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#4DF3FF]">
              B2B-DATA · NORGE
            </span>

            {/* H1 – larger, more presence like v1 */}
            <h1 className="max-w-xl text-4xl font-bold leading-[1.08] tracking-tight md:text-5xl lg:text-6xl">
              Datakraft for moderne norske B2B-team
            </h1>

            {/* H2 / Subheadline */}
            <p className="max-w-lg text-lg leading-relaxed text-slate-300 md:text-xl">
              Winly samler og kobler norsk bedrifts-, person- og anbudsdata i én
              strukturert datamodell – slik at teamene dine jobber raskere,
              tryggere og mer samkjørt.
            </p>

            {/* Bullet points */}
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#4DF3FF] shadow-sm shadow-[#4DF3FF]/50" />
                <span className="text-slate-300">
                  Universet av selskaper, personer, eierskap og anbud – samlet i
                  én modell
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#4DF3FF] shadow-sm shadow-[#4DF3FF]/50" />
                <span className="text-slate-300">
                  Bygg segmenter på sekunder, ikke timer
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#4DF3FF] shadow-sm shadow-[#4DF3FF]/50" />
                <span className="text-slate-300">
                  Del innsikt sømløst med salg, marked og ledelse
                </span>
              </li>
            </ul>

            {/* CTA */}
            <div className="mt-2">
              <a
                href="#start"
                className="group inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#4DF3FF] to-[#3DD8E8] px-7 py-4 text-base font-semibold text-[#05070A] shadow-lg shadow-[#4DF3FF]/20 transition-all hover:shadow-xl hover:shadow-[#4DF3FF]/30"
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

          {/* Hero visual – larger, more presence, stronger neon */}
          <div className="relative lg:pl-4">
            <div className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-br from-[#0B0F14] via-[#0A0E12] to-[#080B0F] p-10 shadow-2xl shadow-[#4DF3FF]/[0.05] md:p-12">
              {/* Inner glow – stronger than v2 */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-[#4DF3FF]/[0.06] via-transparent to-[#B875FF]/[0.04]" />

              {/* Neon border accent at top */}
              <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-3xl bg-gradient-to-r from-transparent via-[#4DF3FF]/60 to-transparent" />

              {/* Abstract data visualization */}
              <div className="relative flex h-[300px] flex-col items-center justify-center gap-10 md:h-[380px]">
                {/* Node cluster – larger, more prominent */}
                <div className="flex items-end gap-8">
                  {/* Left branch */}
                  <div className="flex flex-col items-center gap-3">
                    <div className="h-4 w-4 rounded-full bg-[#4DF3FF]/70 shadow-lg shadow-[#4DF3FF]/40" />
                    <div className="h-14 w-px bg-gradient-to-b from-[#4DF3FF]/50 to-transparent" />
                  </div>

                  {/* Center node – larger with stronger glow */}
                  <div className="relative flex flex-col items-center">
                    <div className="absolute -inset-6 rounded-full bg-[#4DF3FF]/15 blur-xl" />
                    <div className="relative h-7 w-7 rounded-full bg-[#4DF3FF] shadow-xl shadow-[#4DF3FF]/50" />
                    <div className="mt-4 h-20 w-px bg-gradient-to-b from-[#4DF3FF]/60 to-[#B875FF]/40" />
                    <div className="relative">
                      <div className="absolute -inset-4 rounded-full bg-[#B875FF]/10 blur-lg" />
                      <div className="relative h-5 w-5 rounded-full bg-[#B875FF] shadow-lg shadow-[#B875FF]/50" />
                    </div>
                  </div>

                  {/* Right branch */}
                  <div className="flex flex-col items-center gap-3">
                    <div className="h-4 w-4 rounded-full bg-[#B875FF]/70 shadow-lg shadow-[#B875FF]/40" />
                    <div className="h-14 w-px bg-gradient-to-b from-[#B875FF]/50 to-transparent" />
                  </div>
                </div>

                {/* Horizontal connectors */}
                <div className="flex items-center gap-5">
                  <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#4DF3FF]/40 to-transparent" />
                  <div className="h-3 w-3 rounded-full bg-[#4DF3FF]/50 shadow-md shadow-[#4DF3FF]/30" />
                  <div className="h-px w-24 bg-gradient-to-r from-[#4DF3FF]/30 via-[#B875FF]/30 to-transparent" />
                  <div className="h-3 w-3 rounded-full bg-[#B875FF]/50 shadow-md shadow-[#B875FF]/30" />
                  <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#B875FF]/40 to-transparent" />
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
