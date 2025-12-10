const qualityPoints = [
  "Tydelige kilder",
  "Sporbarhet på endringer",
  "Løpende oppdateringer",
  "Transparente datamerknader",
];

export function DataQualitySection() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text content */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-[#F5F7FA] md:text-4xl">
              Kvalitet og åpenhet først
            </h2>

            <p className="text-lg leading-relaxed text-[#94A3B8]">
              Winly håndterer norsk B2B-data med fokus på kvalitet, oppdateringer
              og tydelig kildeoversikt. Målet er at du skal kunne stole på
              dataene – og forklare dem enkelt videre.
            </p>

            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
              {qualityPoints.map((point, index) => (
                <li
                  key={point}
                  className="flex items-center gap-3 rounded-lg border border-slate-800 bg-[#0B0F14] px-4 py-3"
                >
                  <div
                    className={`h-2 w-2 rounded-full ${
                      index % 2 === 0 ? "bg-[#4DF3FF]" : "bg-[#B875FF]"
                    }`}
                  />
                  <span className="text-[#F5F7FA]">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual placeholder */}
          <div className="relative">
            <div className="relative h-[280px] rounded-2xl border border-slate-800 bg-[#0B0F14] p-6 md:h-[320px]">
              {/* Background glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tl from-[#4DF3FF]/5 via-transparent to-[#B875FF]/5" />

              {/* Decorative quality indicators */}
              <div className="relative flex h-full flex-col items-center justify-center gap-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#4DF3FF]/30 bg-[#4DF3FF]/10">
                    <div className="h-4 w-4 rounded-full bg-[#4DF3FF] shadow-lg shadow-[#4DF3FF]/50" />
                  </div>
                  <div className="h-px w-8 bg-gradient-to-r from-[#4DF3FF]/50 to-transparent" />
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#B875FF]/30 bg-[#B875FF]/10">
                    <div className="h-3 w-3 rounded-full bg-[#B875FF] shadow-lg shadow-[#B875FF]/50" />
                  </div>
                </div>

                <p className="text-sm text-[#94A3B8]">
                  Data quality visualization placeholder
                </p>
                <p className="max-w-xs text-center text-xs text-slate-600">
                  Sporbarhet, kilder og kvalitetsindikatorer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
