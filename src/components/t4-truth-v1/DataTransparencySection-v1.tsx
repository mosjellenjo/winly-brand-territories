export function DataTransparencySectionV1() {
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
    <section className="border-t border-truth2-border bg-truth2-bg py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 lg:gap-16">
          {/* Text Column */}
          <div className="md:col-span-5">
            <p className="text-xs font-medium uppercase tracking-widest text-truth2-accent">
              Data & transparens
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-truth2-text md:text-3xl">
              Bygget for ansvarlig bruk av data
            </h2>
            <p className="mt-6 text-base leading-relaxed text-truth2-muted">
              Winly er bygget med fokus på kvalitet og åpenhet. Datapunkter har dokumenterte kilder og definisjoner, slik at det er enkelt å forklare hva tallene betyr og hvor de kommer fra.
            </p>
          </div>

          {/* Points Grid */}
          <div className="md:col-span-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {points.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-md border border-truth2-border bg-truth2-panel p-4 transition-all hover:border-truth2-accent/50"
                >
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded border border-truth2-accent/30 bg-truth2-accent/10">
                    <CheckIcon />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-truth2-text">
                      {point.title}
                    </p>
                    <p className="mt-1 text-xs text-truth2-muted">
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
      className="h-3 w-3 text-truth2-accent"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}
