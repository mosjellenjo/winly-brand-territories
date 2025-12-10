import { CalmContainer, Section } from '@/components/common'

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

export function UnifiedDataModelT2CalmV1() {
  return (
    <Section className="bg-calm-surface">
      <CalmContainer>
        <div className="space-y-12">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-calm-text sm:text-3xl">
              Ett univers – alt koblet sammen
            </h2>
            <p className="text-lg text-calm-text-muted leading-relaxed">
              Se hvordan organisasjoner, roller, eierskap og anbud henger sammen i én modell – med strukturert og tilgjengelig informasjon.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 hidden lg:block">
              <svg className="w-full h-full" viewBox="0 0 800 200" fill="none" preserveAspectRatio="xMidYMid meet">
                <path d="M200 100 L400 100" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M400 100 L600 100" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="4 4" />
                <circle cx="400" cy="100" r="8" fill="#4B8063" fillOpacity="0.2" />
              </svg>
            </div>

            <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {dataPoints.map((point, index) => (
                <div
                  key={point.title}
                  className="group relative rounded-2xl border border-calm-border bg-calm-bg/50 p-6 text-center transition-all hover:border-calm-accent-soft/30 hover:shadow-lg hover:shadow-calm-accent-soft/10"
                >
                  <div className="mb-4 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-calm-accent-soft/10 text-calm-accent-soft font-semibold">
                    {index + 1}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-calm-text">
                    {point.title}
                  </h3>
                  <p className="text-sm text-calm-text-muted leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-calm-text-muted">
              Verdien ligger i relasjonene mellom datapunktene – ikke bare enkeltfeltene.
            </p>
          </div>
        </div>
      </CalmContainer>
    </Section>
  )
}
