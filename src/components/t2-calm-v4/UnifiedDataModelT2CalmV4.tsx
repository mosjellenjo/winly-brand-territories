import { Calm4Container, MeshBackground, SoftIconContainer, WarmLayeredCard, NanoPlaceholder } from './base'

const dataPoints = [
  {
    title: 'Organisasjoner',
    description: 'Nøkkeltall, bransje, størrelse og historikk for norske B2B-selskaper.',
    num: '01',
  },
  {
    title: 'Roller og personer',
    description: 'Styremedlemmer, ledelse og nøkkelroller knyttet til hver organisasjon.',
    num: '02',
  },
  {
    title: 'Eierskap og konsern',
    description: 'Se hvordan organisasjoner henger sammen gjennom eierstrukturer.',
    num: '03',
  },
  {
    title: 'Anbud',
    description: 'Offentlige anbud koblet til organisasjoner som har deltatt eller vunnet.',
    num: '04',
  },
]

export function UnifiedDataModelT2CalmV4() {
  return (
    <section className="relative bg-calm4-bone py-20 lg:py-24 overflow-hidden">
      <MeshBackground variant="data" />

      <Calm4Container>
        <div className="relative space-y-12">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-calm4-text sm:text-3xl">
              Ett univers – alt koblet sammen
            </h2>
            <p className="text-lg text-calm4-muted leading-relaxed">
              Se hvordan organisasjoner, roller, eierskap og anbud henger sammen i én modell – med strukturert og tilgjengelig informasjon.
            </p>
          </div>

          {/* NanoBanana illustration placeholder */}
          <NanoPlaceholder name="T2DataUniverseIllustration" height="120px" className="mx-auto max-w-2xl" />

          {/* Layered cards with connections */}
          <div className="relative">
            {/* Connection lines SVG */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
              viewBox="0 0 1000 300"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#5C7A66" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#5C7A66" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#5C7A66" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <path
                d="M125 150 Q 312 100, 375 150 T 625 150 T 875 150"
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                strokeDasharray="8 4"
              />
              {/* Connection dots */}
              <circle cx="250" cy="130" r="4" fill="#C9D7C5" />
              <circle cx="500" cy="150" r="5" fill="#5C7A66" />
              <circle cx="750" cy="130" r="4" fill="#C9D7C5" />
            </svg>

            {/* Cards grid - staggered positions */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {dataPoints.map((point, index) => (
                <WarmLayeredCard
                  key={point.title}
                  className={`p-6 ${index % 2 === 1 ? 'lg:translate-y-4' : ''}`}
                  rotation={index % 2 === 0 ? -0.5 : 0.5}
                >
                  <div className="text-center">
                    {/* Number badge */}
                    <div className="mb-4 mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-calm4-green-soft to-calm4-green-soft/60 shadow-[var(--shadow-calm4-sm)]">
                      <span className="text-lg font-bold text-calm4-green-deep">{point.num}</span>
                    </div>

                    <h3 className="mb-2 text-lg font-semibold text-calm4-text">
                      {point.title}
                    </h3>
                    <p className="text-sm text-calm4-muted leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </WarmLayeredCard>
              ))}
            </div>
          </div>

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-calm4-muted italic">
              Verdien ligger i relasjonene mellom datapunktene – ikke bare enkeltfeltene.
            </p>
          </div>
        </div>
      </Calm4Container>
    </section>
  )
}
