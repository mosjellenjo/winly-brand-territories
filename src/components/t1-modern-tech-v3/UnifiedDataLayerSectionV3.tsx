const dataPoints = [
  "Over 1 million organisasjoner",
  "Rolle- og kontaktdata der det finnes",
  "Sammenkoblet eierskap og konsern",
  "Anbud koblet til reelle organisasjoner",
  "Historikk og endringer over tid",
];

export function UnifiedDataLayerSectionV3() {
  return (
    <section className="relative border-y border-slate-800/50 py-24 md:py-28">
      {/* Subtle gradient dividers */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4DF3FF]/15 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#B875FF]/15 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Visual – flat layout with enhanced neon */}
          <div className="order-2 flex items-center justify-center lg:order-1">
            <div className="relative">
              {/* Soft glow behind */}
              <div className="absolute inset-0 -m-12 rounded-full bg-[#4DF3FF]/[0.06] blur-3xl" />

              {/* Node structure – larger and more prominent */}
              <div className="relative flex flex-col items-center gap-6">
                {/* Top nodes */}
                <div className="flex items-center gap-10">
                  <div className="flex flex-col items-center">
                    <div className="h-4 w-4 rounded-full bg-[#4DF3FF]/80 shadow-lg shadow-[#4DF3FF]/40" />
                    <div className="mt-3 h-12 w-px bg-gradient-to-b from-[#4DF3FF]/50 to-transparent" />
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative">
                      <div className="absolute -inset-3 rounded-full bg-[#B875FF]/15 blur-lg" />
                      <div className="relative h-6 w-6 rounded-full bg-[#B875FF] shadow-xl shadow-[#B875FF]/50" />
                    </div>
                    <div className="mt-3 h-14 w-px bg-gradient-to-b from-[#B875FF]/60 to-transparent" />
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="h-4 w-4 rounded-full bg-[#4DF3FF]/80 shadow-lg shadow-[#4DF3FF]/40" />
                    <div className="mt-3 h-12 w-px bg-gradient-to-b from-[#4DF3FF]/50 to-transparent" />
                  </div>
                </div>

                {/* Center node */}
                <div className="relative">
                  <div className="absolute -inset-5 rounded-full bg-[#4DF3FF]/10 blur-xl" />
                  <div className="relative h-8 w-8 rounded-full bg-gradient-to-br from-[#4DF3FF] to-[#B875FF] shadow-xl shadow-[#4DF3FF]/40" />
                </div>

                {/* Bottom connectors */}
                <div className="flex items-center gap-8">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#4DF3FF]/40" />
                  <div className="h-3 w-3 rounded-full bg-slate-700" />
                  <div className="h-px w-20 bg-gradient-to-r from-[#4DF3FF]/30 to-[#B875FF]/30" />
                  <div className="h-3 w-3 rounded-full bg-slate-700" />
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#B875FF]/40" />
                </div>

                {/* Placeholder label */}
                <p className="mt-4 text-xs text-slate-600">
                  Data layer visualization
                </p>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="order-1 flex flex-col gap-6 lg:order-2">
            <h2 className="text-3xl font-bold text-[#F5F7FA] md:text-4xl">
              Én samlet datamodell for norske B2B-organisasjoner
            </h2>

            <p className="max-w-lg text-lg leading-relaxed text-slate-300">
              Winly samler data fra sentrale norske kilder – organisasjoner,
              roller, eiere, historikk, nøkkeltall og anbud – og strukturerer
              alt i ett samlet faktagrunnlag.
            </p>

            <ul className="mt-4 flex flex-col gap-4">
              {dataPoints.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#4DF3FF] shadow-sm shadow-[#4DF3FF]/50" />
                  <span className="text-slate-300">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
