export function UseCasesTruthEngineV2() {
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
    <section className="border-t border-slate-800/50 bg-[#020617] py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-[#F1F5F9] md:text-3xl">
          Bygget for roller som trenger innsikt
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group border border-slate-800/70 bg-[#0B0F1A] transition-all hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]"
            >
              {/* Dashboard-like header */}
              <div className="px-5 py-3 border-b border-slate-800/50 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-[#F1F5F9]">
                  {useCase.title}
                </h3>
                <div className="flex gap-1">
                  <span className="h-1.5 w-1.5 bg-slate-700" />
                  <span className="h-1.5 w-1.5 bg-slate-700" />
                  <span className="h-1.5 w-1.5 bg-slate-700" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <ul className="space-y-3">
                  {useCase.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 bg-cyan-400/60" />
                      <span className="text-xs leading-relaxed text-slate-400">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
