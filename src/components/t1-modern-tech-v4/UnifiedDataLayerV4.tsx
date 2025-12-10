const dataPoints = [
  "Over 1 million organisasjoner",
  "Sammenkoblet eierskap og roller",
  "Dokumenterte kilder og definisjoner",
  "Faktisk kobling mellom anbud og selskaper",
];

export function UnifiedDataLayerV4() {
  return (
    <section className="relative border-y border-slate-800/60 py-28 md:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4DF3FF]/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#B875FF]/25 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="order-2 flex items-center justify-center lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 -m-16 rounded-full bg-[#4DF3FF]/[0.08] blur-3xl" />

              <div className="relative flex flex-col items-center gap-8">
                <div className="flex items-center gap-12">
                  <div className="flex flex-col items-center">
                    <div className="relative">
                      <div className="absolute -inset-4 rounded-full bg-[#4DF3FF]/20 blur-xl" />
                      <div className="relative h-6 w-6 rounded-full bg-[#4DF3FF] shadow-xl shadow-[#4DF3FF]/50" />
                    </div>
                    <div className="mt-4 h-14 w-px bg-gradient-to-b from-[#4DF3FF]/60 to-transparent" />
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative">
                      <div className="absolute -inset-5 rounded-full bg-[#B875FF]/20 blur-xl" />
                      <div className="relative h-8 w-8 rounded-full bg-[#B875FF] shadow-xl shadow-[#B875FF]/50" />
                    </div>
                    <div className="mt-4 h-16 w-px bg-gradient-to-b from-[#B875FF]/70 to-transparent" />
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative">
                      <div className="absolute -inset-4 rounded-full bg-[#4DF3FF]/20 blur-xl" />
                      <div className="relative h-6 w-6 rounded-full bg-[#4DF3FF] shadow-xl shadow-[#4DF3FF]/50" />
                    </div>
                    <div className="mt-4 h-14 w-px bg-gradient-to-b from-[#4DF3FF]/60 to-transparent" />
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-[#4DF3FF]/15 to-[#B875FF]/15 blur-2xl" />
                  <div className="relative h-10 w-10 rounded-full bg-gradient-to-br from-[#4DF3FF] to-[#B875FF] shadow-2xl shadow-[#4DF3FF]/40" />
                </div>

                <div className="flex items-center gap-8">
                  <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#4DF3FF]/50" />
                  <div className="h-4 w-4 rounded-full bg-slate-800" />
                  <div className="h-px w-24 bg-gradient-to-r from-[#4DF3FF]/40 to-[#B875FF]/40" />
                  <div className="h-4 w-4 rounded-full bg-slate-800" />
                  <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#B875FF]/50" />
                </div>

                <p className="mt-4 text-xs text-slate-600">
                  Sammenkoblet datamodell
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 flex flex-col gap-6 lg:order-2">
            <h2 className="text-3xl font-bold text-[#F5F7FA] md:text-4xl lg:text-[2.75rem]">
              Én samlet datamodell for norske B2B-organisasjoner
            </h2>

            <p className="max-w-lg text-lg leading-relaxed text-slate-300">
              Winly samler hele det norske B2B-markedet i én konsistent modell –
              organisasjoner, roller, eiere, økonomi, historikk og anbud koblet
              i et felles univers.
            </p>

            <ul className="mt-6 flex flex-col gap-4">
              {dataPoints.map((point) => (
                <li key={point} className="flex items-center gap-4">
                  <span className="h-2 w-2 rounded-full bg-[#4DF3FF] shadow-lg shadow-[#4DF3FF]/50" />
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
