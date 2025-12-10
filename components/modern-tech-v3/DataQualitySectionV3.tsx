const qualityPoints = [
  { label: "Tydelige kilder", accent: "cyan" as const },
  { label: "Sporbarhet på endringer", accent: "purple" as const },
  { label: "Løpende oppdateringer", accent: "cyan" as const },
  { label: "Transparente datamerknader", accent: "purple" as const },
];

export function DataQualitySectionV3() {
  return (
    <section className="py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Text content */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-[#F5F7FA] md:text-4xl">
              Kvalitet og åpenhet først
            </h2>

            <p className="max-w-lg text-lg leading-relaxed text-slate-300">
              Winly håndterer norsk B2B-data med fokus på kvalitet, oppdateringer
              og tydelig kildeoversikt. Målet er at du skal kunne stole på
              dataene – og forklare dem enkelt videre.
            </p>

            {/* Quality points – flat layout with stronger neon */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {qualityPoints.map((point) => (
                <div key={point.label} className="flex items-center gap-3">
                  <div
                    className={`h-2 w-2 rounded-full shadow-lg ${
                      point.accent === "cyan"
                        ? "bg-[#4DF3FF] shadow-[#4DF3FF]/50"
                        : "bg-[#B875FF] shadow-[#B875FF]/50"
                    }`}
                  />
                  <span className="text-slate-300">{point.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual – flat with enhanced neon */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative">
              {/* Soft glow */}
              <div className="absolute inset-0 -m-16 rounded-full bg-[#B875FF]/[0.05] blur-3xl" />

              {/* Quality indicators – larger and more prominent */}
              <div className="relative flex flex-col items-center gap-8">
                <div className="flex items-center gap-8">
                  <div className="relative">
                    <div className="absolute -inset-4 rounded-full bg-[#4DF3FF]/10 blur-xl" />
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-[#4DF3FF]/30 bg-[#4DF3FF]/[0.08]">
                      <div className="h-4 w-4 rounded-full bg-[#4DF3FF] shadow-lg shadow-[#4DF3FF]/50" />
                    </div>
                  </div>
                  <div className="h-px w-12 bg-gradient-to-r from-[#4DF3FF]/40 to-transparent" />
                  <div className="relative">
                    <div className="absolute -inset-3 rounded-full bg-[#B875FF]/10 blur-lg" />
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-[#B875FF]/30 bg-[#B875FF]/[0.08]">
                      <div className="h-3 w-3 rounded-full bg-[#B875FF] shadow-lg shadow-[#B875FF]/50" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="h-3 w-3 rounded-full bg-slate-800" />
                  <div className="h-px w-24 bg-gradient-to-r from-slate-700 via-[#4DF3FF]/20 to-slate-700" />
                  <div className="h-3 w-3 rounded-full bg-slate-800" />
                </div>

                <p className="text-xs text-slate-600">
                  Quality & trust visualization
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
