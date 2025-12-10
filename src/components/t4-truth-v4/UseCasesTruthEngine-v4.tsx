export function UseCasesTruthEngineV4() {
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
    <section className="relative bg-[#0B1120] py-20">
      {/* Large gradient bento box background */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Use cases
            </span>
          </h2>
        </div>

        <p className="text-center text-gray-400 mb-14 max-w-2xl mx-auto">
          Fra prospektering til markedsanalyse – Winly hjelper teamet ditt med å jobbe smartere basert på faktiske data.
        </p>

        {/* Large bento container with gradient */}
        <div className="relative rounded-2xl overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-sky-500/10 to-blue-600/20" />
          <div className="absolute inset-0 bg-[#0F172A]/80" />

          <div className="relative p-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="group rounded-xl border border-white/[0.08] bg-[#0B1120]/60 backdrop-blur-sm p-5 transition-all duration-300 hover:border-cyan-500/30 hover:bg-[#0B1120]/80"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500">
                      <UseCaseIcon type={useCase.title} />
                    </div>
                    <h3 className="text-base font-semibold text-white">
                      {useCase.title}
                    </h3>
                  </div>

                  <ul className="space-y-2.5">
                    {useCase.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
                        <span className="text-sm text-gray-400 leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Pagination dots like Devin */}
            <div className="mt-8 flex justify-center gap-2">
              <div className="h-1 w-6 rounded-full bg-white" />
              <div className="h-1 w-1 rounded-full bg-white/30" />
              <div className="h-1 w-6 rounded-full bg-white/30" />
              <div className="h-1 w-1 rounded-full bg-white/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function UseCaseIcon({ type }: { type: string }) {
  if (type === 'Salg') {
    return (
      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  }
  if (type === 'Marked') {
    return (
      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    )
  }
  return (
    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  )
}
