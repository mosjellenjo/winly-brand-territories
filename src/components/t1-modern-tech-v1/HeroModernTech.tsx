export function HeroModernTech() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32 lg:py-40">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#4DF3FF]/10 blur-[128px]" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-[#B875FF]/10 blur-[128px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text content */}
          <div className="flex flex-col gap-6">
            {/* Overline */}
            <span className="text-sm font-medium uppercase tracking-widest text-[#4DF3FF]">
              NORSK B2B-DATA
            </span>

            {/* H1 */}
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Datakraft for moderne norske B2B-team
            </h1>

            {/* H2 / Subheadline */}
            <p className="text-lg leading-relaxed text-[#94A3B8] md:text-xl">
              Winly samler og kobler organisasjons-, rolle- og anbudsdata i én
              strukturert datamodell – bygget for team som jobber raskt, presist
              og datadrevet.
            </p>

            {/* Bullet points */}
            <ul className="mt-2 flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#4DF3FF]" />
                <span className="text-[#94A3B8]">
                  Se hele bildet av norske organisasjoner på ett sted
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#4DF3FF]" />
                <span className="text-[#94A3B8]">
                  Bygg segmenter på sekunder – ikke timer
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#4DF3FF]" />
                <span className="text-[#94A3B8]">
                  Del innsikt og lister sømløst på tvers av team
                </span>
              </li>
            </ul>

            {/* CTA */}
            <div className="mt-4">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg bg-[#4DF3FF] px-6 py-3 text-base font-semibold text-[#05070A] transition-all hover:bg-[#4DF3FF]/90 hover:shadow-lg hover:shadow-[#4DF3FF]/25"
              >
                Start 14 dagers gratis prøveperiode
              </a>
            </div>
          </div>

          {/* Hero visual placeholder */}
          <div className="relative">
            <div className="relative h-[320px] rounded-2xl border border-slate-800 bg-[#0B0F14] p-6 md:h-[400px] lg:h-[480px]">
              {/* Glow effect behind placeholder */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#4DF3FF]/5 to-[#B875FF]/5" />

              {/* Abstract data visualization placeholder */}
              <div className="relative flex h-full flex-col items-center justify-center gap-4">
                {/* Decorative nodes */}
                <div className="flex items-center gap-8">
                  <div className="h-3 w-3 rounded-full bg-[#4DF3FF] shadow-lg shadow-[#4DF3FF]/50" />
                  <div className="h-16 w-px bg-gradient-to-b from-[#4DF3FF]/50 to-transparent" />
                  <div className="h-4 w-4 rounded-full bg-[#B875FF] shadow-lg shadow-[#B875FF]/50" />
                  <div className="h-16 w-px bg-gradient-to-b from-[#B875FF]/50 to-transparent" />
                  <div className="h-3 w-3 rounded-full bg-[#4DF3FF] shadow-lg shadow-[#4DF3FF]/50" />
                </div>

                <p className="text-sm text-[#94A3B8]">Hero visual placeholder</p>
                <p className="text-xs text-slate-600">
                  Mørk scene med abstrakt norsk datastruktur, nodes og linjer
                  med cyan/purple glow
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
