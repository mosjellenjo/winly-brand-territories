const qualityPoints = [
  { label: "Dokumenterte kilder", accent: "cyan" as const },
  { label: "Oppdateringslogikk", accent: "purple" as const },
  { label: "Sporbarhet på endringer", accent: "cyan" as const },
];

export function DataQualityModernTechV4() {
  return (
    <section className="py-28 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-[#F5F7FA] md:text-4xl lg:text-[2.75rem]">
              Kvalitet og åpenhet først
            </h2>

            <p className="max-w-lg text-lg leading-relaxed text-slate-300">
              Winly er bygget for norske B2B-team som trenger et faktagrunnlag
              de kan forklare videre – internt eller eksternt.
            </p>

            <div className="mt-6 flex flex-col gap-4">
              {qualityPoints.map((point) => (
                <div key={point.label} className="flex items-center gap-4">
                  <div
                    className={`h-2.5 w-2.5 rounded-full shadow-lg ${
                      point.accent === "cyan"
                        ? "bg-[#4DF3FF] shadow-[#4DF3FF]/60"
                        : "bg-[#B875FF] shadow-[#B875FF]/60"
                    }`}
                  />
                  <span className="text-lg text-slate-300">{point.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 -m-20 rounded-full bg-[#B875FF]/[0.06] blur-3xl" />

              <div className="relative flex flex-col items-center gap-10">
                <div className="flex items-center gap-10">
                  <div className="relative">
                    <div className="absolute -inset-5 rounded-full bg-[#4DF3FF]/15 blur-xl" />
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-[#4DF3FF]/40 bg-[#4DF3FF]/[0.1]">
                      <div className="h-5 w-5 rounded-full bg-[#4DF3FF] shadow-xl shadow-[#4DF3FF]/60" />
                    </div>
                  </div>
                  <div className="h-px w-14 bg-gradient-to-r from-[#4DF3FF]/50 to-transparent" />
                  <div className="relative">
                    <div className="absolute -inset-4 rounded-full bg-[#B875FF]/15 blur-xl" />
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-[#B875FF]/40 bg-[#B875FF]/[0.1]">
                      <div className="h-4 w-4 rounded-full bg-[#B875FF] shadow-xl shadow-[#B875FF]/60" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="h-4 w-4 rounded-full bg-slate-800" />
                  <div className="h-px w-28 bg-gradient-to-r from-slate-700 via-[#4DF3FF]/30 to-slate-700" />
                  <div className="h-4 w-4 rounded-full bg-slate-800" />
                </div>

                <p className="text-xs text-slate-600">
                  Kvalitet og sporbarhet
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
