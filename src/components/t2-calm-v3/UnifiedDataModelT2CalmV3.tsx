function Calm3Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
}

const dataPoints = [
  {
    title: 'Organisasjoner',
    description: 'Nøkkeltall, bransje, størrelse og historikk for norske B2B-selskaper.',
  },
  {
    title: 'Roller og personer',
    description: 'Styremedlemmer, ledelse og nøkkelroller knyttet til hver organisasjon.',
  },
  {
    title: 'Eierskap og konsern',
    description: 'Se hvordan organisasjoner henger sammen gjennom eierstrukturer.',
  },
  {
    title: 'Anbud',
    description: 'Offentlige anbud koblet til organisasjoner som har deltatt eller vunnet.',
  },
]

export function UnifiedDataModelT2CalmV3() {
  return (
    <section className="relative bg-gradient-to-b from-calm3-green-soft/40 to-calm3-green-soft/20 py-20 lg:py-24">
      <Calm3Container>
        <div className="space-y-12">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-calm3-text sm:text-3xl">
              Ett univers – alt koblet sammen
            </h2>
            <p className="text-lg text-calm3-muted leading-relaxed">
              Se hvordan organisasjoner, roller, eierskap og anbud henger sammen i én modell – med strukturert og tilgjengelig informasjon.
            </p>
          </div>

          <div className="relative">
            {/* Connection lines */}
            <div className="absolute inset-0 hidden lg:block">
              <svg className="w-full h-full" viewBox="0 0 800 200" fill="none" preserveAspectRatio="xMidYMid meet">
                <path d="M200 100 L400 100" stroke="#5C7A66" strokeWidth="2" strokeDasharray="6 4" strokeOpacity="0.3" />
                <path d="M400 100 L600 100" stroke="#5C7A66" strokeWidth="2" strokeDasharray="6 4" strokeOpacity="0.3" />
                <circle cx="300" cy="100" r="4" fill="#5C7A66" fillOpacity="0.4" />
                <circle cx="500" cy="100" r="4" fill="#5C7A66" fillOpacity="0.4" />
              </svg>
            </div>

            <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {dataPoints.map((point, index) => (
                <div
                  key={point.title}
                  className="group relative rounded-2xl border border-calm3-border bg-calm3-bone p-6 text-center shadow-[var(--shadow-calm3-card)] transition-all hover:translate-y-[2px] hover:shadow-[var(--shadow-calm3-card-hover)] hover:ring-1 hover:ring-calm3-green-soft/60"
                >
                  <div className="mb-4 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-calm3-green-soft">
                    <span className="text-lg font-semibold text-calm3-green-deep">{index + 1}</span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-calm3-text">
                    {point.title}
                  </h3>
                  <p className="text-sm text-calm3-muted leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-calm3-muted">
              Verdien ligger i relasjonene mellom datapunktene – ikke bare enkeltfeltene.
            </p>
          </div>
        </div>
      </Calm3Container>
    </section>
  )
}
