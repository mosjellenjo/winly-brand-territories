export function DataTransparencySectionV4() {
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
    <section className="relative bg-[#0B1120] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text Column */}
          <div>
            <p className="text-sm font-medium uppercase tracking-wider bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-3">
              Data & transparens
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Bygget for ansvarlig bruk av data
            </h2>
            <p className="mt-6 text-gray-400 leading-relaxed">
              Winly er bygget med fokus på kvalitet og åpenhet. Datapunkter har dokumenterte kilder og definisjoner, slik at det er enkelt å forklare hva tallene betyr og hvor de kommer fra.
            </p>
          </div>

          {/* Points Grid */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {points.map((point, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 rounded-xl border border-white/[0.06] bg-[#0F172A]/50 p-5 transition-all duration-300 hover:border-cyan-500/30 hover:bg-[#0F172A]"
              >
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400/20 to-blue-500/20">
                  <CheckIcon />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">
                    {point.title}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}
