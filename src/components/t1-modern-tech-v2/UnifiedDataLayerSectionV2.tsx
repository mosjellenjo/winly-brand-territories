const dataPoints = [
  "Over 1 million organisasjoner",
  "Rolle- og kontaktdata der det finnes",
  "Sammenkoblet eierskap og konsern",
  "Anbud koblet til reelle organisasjoner",
  "Historikk og endringer over tid",
];

export function UnifiedDataLayerSectionV2() {
  return (
    <section className="border-y border-slate-800/40 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Visual – flat, no card wrapper */}
          <div className="order-2 flex items-center justify-center lg:order-1">
            <div className="relative">
              {/* Soft glow behind */}
              <div className="absolute inset-0 -m-8 rounded-full bg-[#4DF3FF]/[0.04] blur-3xl" />

              {/* Node structure */}
              <div className="relative flex flex-col items-center gap-4">
                {/* Top nodes */}
                <div className="flex items-center gap-8">
                  <div className="flex flex-col items-center">
                    <div className="h-3 w-3 rounded-full bg-[#4DF3FF]/70 shadow-lg shadow-[#4DF3FF]/30" />
                    <div className="mt-2 h-8 w-px bg-gradient-to-b from-[#4DF3FF]/40 to-transparent" />
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="h-4 w-4 rounded-full bg-[#B875FF] shadow-lg shadow-[#B875FF]/40" />
                    <div className="mt-2 h-10 w-px bg-gradient-to-b from-[#B875FF]/50 to-transparent" />
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="h-3 w-3 rounded-full bg-[#4DF3FF]/70 shadow-lg shadow-[#4DF3FF]/30" />
                    <div className="mt-2 h-8 w-px bg-gradient-to-b from-[#4DF3FF]/40 to-transparent" />
                  </div>
                </div>

                {/* Center node */}
                <div className="relative">
                  <div className="absolute -inset-3 rounded-full bg-[#4DF3FF]/10 blur-lg" />
                  <div className="relative h-6 w-6 rounded-full bg-gradient-to-br from-[#4DF3FF] to-[#B875FF] shadow-lg shadow-[#4DF3FF]/30" />
                </div>

                {/* Bottom connectors */}
                <div className="flex items-center gap-6">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#4DF3FF]/30" />
                  <div className="h-2 w-2 rounded-full bg-slate-700" />
                  <div className="h-px w-16 bg-gradient-to-r from-[#4DF3FF]/20 to-[#B875FF]/20" />
                  <div className="h-2 w-2 rounded-full bg-slate-700" />
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#B875FF]/30" />
                </div>

                {/* Placeholder label */}
                <p className="mt-6 text-xs text-slate-600">
                  Data layer visualization
                </p>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="order-1 flex flex-col gap-5 lg:order-2">
            <h2 className="text-3xl font-semibold text-[#F5F7FA]">
              Én samlet datamodell for norske B2B-organisasjoner
            </h2>

            <p className="max-w-lg leading-relaxed text-slate-300">
              Winly samler data fra sentrale norske kilder – organisasjoner,
              roller, eiere, historikk, nøkkeltall og anbud – og strukturerer
              alt i ett samlet faktagrunnlag.
            </p>

            <ul className="mt-4 flex flex-col gap-3">
              {dataPoints.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <span className="h-1 w-1 rounded-full bg-[#4DF3FF]" />
                  <span className="text-slate-400">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
