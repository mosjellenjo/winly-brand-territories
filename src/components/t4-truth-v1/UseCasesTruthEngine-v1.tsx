export function UseCasesTruthEngineV1() {
  const useCases = [
    {
      title: 'Salg',
      bullets: [
        'Finn riktige selskaper basert på bransje, størrelse og eierskap',
        'Se hvem som sitter i nøkkelroller før du tar kontakt',
        'Prioriter basert på faktiske forhold, ikke magefølelse',
      ],
    },
    {
      title: 'Marked',
      bullets: [
        'Bygg segmenter og målgrupper på strukturerte data',
        'Forstå markedsstørrelse og potensial i ulike bransjer',
        'Del innsikt med salg i samme plattform',
      ],
    },
    {
      title: 'Konsulenter & analytikere',
      bullets: [
        'Bruk en strukturert datamodell som grunnlag for analyser',
        'Forstå eierstrukturer og konsernkoblinger',
        'Eksporter data til egne rapporter og presentasjoner',
      ],
    },
  ]

  return (
    <section className="border-t border-truth2-border bg-truth2-bg py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-truth2-text md:text-3xl">
          Bygget for roller som trenger innsikt
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group rounded-md border border-truth2-border bg-truth2-panel p-6 transition-all hover:border-truth2-accent/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.1)]"
            >
              <h3 className="text-lg font-semibold text-truth2-text">
                {useCase.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {useCase.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-truth2-accent" />
                    <span className="text-sm leading-relaxed text-truth2-muted">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
