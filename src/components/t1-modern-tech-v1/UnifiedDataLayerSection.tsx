const bullets = [
  "Over 1 million organisasjoner",
  "Rolle- og kontaktdata der det finnes",
  "Sammenkoblet eierskap og konsern",
  "Anbud koblet til reelle organisasjoner",
  "Historikk og endringer over tid",
];

export function UnifiedDataLayerSection() {
  return (
    <section className="border-y border-slate-800/50 bg-[#0B0F14] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Visual placeholder */}
          <div className="order-2 lg:order-1">
            <div className="relative h-[280px] rounded-2xl border border-slate-800 bg-[#05070A] p-6 md:h-[360px]">
              {/* Background glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#4DF3FF]/5 via-transparent to-[#B875FF]/5" />

              {/* Decorative data structure */}
              <div className="relative flex h-full flex-col items-center justify-center gap-6">
                {/* Nodes visualization */}
                <div className="flex items-center gap-6">
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-[#4DF3FF] shadow-lg shadow-[#4DF3FF]/40" />
                    <div className="h-8 w-px bg-[#4DF3FF]/30" />
                    <div className="h-3 w-3 rounded-full bg-[#4DF3FF]/60" />
                  </div>
                  <div className="h-px w-12 bg-gradient-to-r from-[#4DF3FF]/50 to-[#B875FF]/50" />
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-[#B875FF] shadow-lg shadow-[#B875FF]/40" />
                    <div className="h-10 w-px bg-[#B875FF]/30" />
                    <div className="h-3 w-3 rounded-full bg-[#B875FF]/60" />
                  </div>
                  <div className="h-px w-12 bg-gradient-to-r from-[#B875FF]/50 to-[#4DF3FF]/50" />
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-[#4DF3FF] shadow-lg shadow-[#4DF3FF]/40" />
                    <div className="h-8 w-px bg-[#4DF3FF]/30" />
                    <div className="h-3 w-3 rounded-full bg-[#4DF3FF]/60" />
                  </div>
                </div>

                <p className="text-sm text-[#94A3B8]">
                  Data layer visualization placeholder
                </p>
                <p className="max-w-xs text-center text-xs text-slate-600">
                  Koblet univers av organisasjoner, roller og anbud
                </p>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="order-1 flex flex-col gap-6 lg:order-2">
            <h2 className="text-3xl font-bold text-[#F5F7FA] md:text-4xl">
              Én samlet datamodell for norske B2B-organisasjoner
            </h2>

            <p className="text-lg leading-relaxed text-[#94A3B8]">
              Winly samler data fra sentrale norske kilder – organisasjoner,
              roller, eiere, historikk, nøkkeltall og anbud – og strukturerer
              alt i ett samlet faktagrunnlag.
            </p>

            <ul className="mt-2 flex flex-col gap-4">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4DF3FF]" />
                  <span className="text-[#94A3B8]">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
