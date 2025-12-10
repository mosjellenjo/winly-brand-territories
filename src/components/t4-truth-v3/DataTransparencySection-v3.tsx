export function DataTransparencySectionV3() {
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
    <section className="bg-[#08090D] py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Text Column */}
          <div className="lg:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-orange-400 mb-3">
              Data & transparens
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Bygget for ansvarlig bruk av data
            </h2>
            <p className="mt-6 text-[#8B8B9E] leading-relaxed">
              Winly er bygget med fokus på kvalitet og åpenhet. Datapunkter har dokumenterte kilder og definisjoner, slik at det er enkelt å forklare hva tallene betyr og hvor de kommer fra.
            </p>
          </div>

          {/* Points Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {points.map((point, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 rounded-2xl border border-white/[0.06] bg-[#12141A] p-5 transition-all duration-300 hover:border-orange-500/30 hover:bg-[#16181F]"
                >
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-orange-500/10">
                    <CheckIcon />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">
                      {point.title}
                    </p>
                    <p className="mt-1 text-xs text-[#6B6B7E]">
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
      className="h-4 w-4 text-orange-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}
