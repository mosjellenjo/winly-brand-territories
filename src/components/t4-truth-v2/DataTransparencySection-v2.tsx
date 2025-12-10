export function DataTransparencySectionV2() {
  const points = [
    {
      title: 'Dokumenterte kilder',
      description: 'Datapunkter har tydelige kilder og metodikk.',
    },
    {
      title: 'Oppdateringslogikk',
      description: 'Oversikt over oppdateringsfrekvens per kategori.',
    },
    {
      title: 'Synlige mangler',
      description: 'Der data mangler vises det tydelig i grensesnittet.',
    },
    {
      title: 'Personvern & sikkerhet',
      description: 'Rutiner for ansvarlig databruk er ivaretatt.',
    },
  ]

  return (
    <section className="border-t border-slate-800/50 bg-[#060A12] py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 lg:gap-16">
          {/* Text Column */}
          <div className="md:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
              Data & transparens
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#F1F5F9] md:text-3xl">
              Bygget for ansvarlig bruk av data
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-slate-400">
              Winly er bygget med fokus på kvalitet og åpenhet. Datapunkter har dokumenterte kilder og definisjoner, slik at det er enkelt å forklare hva tallene betyr og hvor de kommer fra.
            </p>
          </div>

          {/* Points Grid */}
          <div className="md:col-span-7">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {points.map((point, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-3 border border-slate-800/70 bg-[#0A0E17] p-4 transition-all hover:border-cyan-400/30"
                >
                  <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center border border-cyan-400/30 bg-cyan-400/5">
                    <CheckIcon />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#F1F5F9]">
                      {point.title}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CheckIcon() {
  return (
    <svg
      className="h-2.5 w-2.5 text-cyan-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <path strokeLinecap="square" strokeLinejoin="miter" d="M5 13l4 4L19 7" />
    </svg>
  )
}
