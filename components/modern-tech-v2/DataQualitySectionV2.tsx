const qualityPoints = [
  { label: "Tydelige kilder", accent: "cyan" as const },
  { label: "Sporbarhet på endringer", accent: "purple" as const },
  { label: "Løpende oppdateringer", accent: "cyan" as const },
  { label: "Transparente datamerknader", accent: "purple" as const },
];

export function DataQualitySectionV2() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Text content */}
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-semibold text-[#F5F7FA]">
              Kvalitet og åpenhet først
            </h2>

            <p className="max-w-lg leading-relaxed text-slate-300">
              Winly håndterer norsk B2B-data med fokus på kvalitet, oppdateringer
              og tydelig kildeoversikt. Målet er at du skal kunne stole på
              dataene – og forklare dem enkelt videre.
            </p>

            {/* Quality points – flat layout, 2 columns */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {qualityPoints.map((point) => (
                <div key={point.label} className="flex items-center gap-3">
                  <div
                    className={`h-1.5 w-1.5 rounded-full ${
                      point.accent === "cyan" ? "bg-[#4DF3FF]" : "bg-[#B875FF]"
                    }`}
                  />
                  <span className="text-slate-300">{point.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual – flat, no card wrapper */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative">
              {/* Soft glow */}
              <div className="absolute inset-0 -m-12 rounded-full bg-[#B875FF]/[0.04] blur-3xl" />

              {/* Quality indicators */}
              <div className="relative flex flex-col items-center gap-6">
                <div className="flex items-center gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#4DF3FF]/20 bg-[#4DF3FF]/[0.06]">
                    <div className="h-3 w-3 rounded-full bg-[#4DF3FF] shadow-lg shadow-[#4DF3FF]/40" />
                  </div>
                  <div className="h-px w-10 bg-gradient-to-r from-[#4DF3FF]/30 to-transparent" />
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B875FF]/20 bg-[#B875FF]/[0.06]">
                    <div className="h-2 w-2 rounded-full bg-[#B875FF] shadow-lg shadow-[#B875FF]/40" />
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-slate-700" />
                  <div className="h-px w-20 bg-gradient-to-r from-slate-700 via-[#4DF3FF]/20 to-slate-700" />
                  <div className="h-2 w-2 rounded-full bg-slate-700" />
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
