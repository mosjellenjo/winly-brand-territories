export function UseCasesTruthEngineV3() {
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
    <section className="bg-[#08090D] py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Bygget for roller som trenger innsikt
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-white/[0.06] bg-[#12141A] overflow-hidden transition-all duration-300 hover:border-orange-500/30"
            >
              {/* Card header */}
              <div className="px-5 py-4 border-b border-white/[0.06] bg-[#0E1015] flex items-center justify-between">
                <h3 className="text-base font-semibold text-white">
                  {useCase.title}
                </h3>
                <div className="flex gap-1">
                  <span className="h-2 w-2 rounded-full bg-[#1A1D26]" />
                  <span className="h-2 w-2 rounded-full bg-[#1A1D26]" />
                  <span className="h-2 w-2 rounded-full bg-orange-500/50 group-hover:bg-orange-500 transition-colors" />
                </div>
              </div>

              {/* Card content */}
              <div className="p-5">
                <ul className="space-y-3">
                  {useCase.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-500/60" />
                      <span className="text-sm leading-relaxed text-[#8B8B9E]">
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
