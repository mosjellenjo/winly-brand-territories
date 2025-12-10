import { Calm4Container, WarmLayeredCard } from './base'

const transparencyPoints = [
  'Dokumenterte datakilder og strukturer',
  'Løpende oppdatering av nøkkelfelt',
  'Klare beskrivelser av usikkerhet og antagelser der det er relevant',
  'Personvern og norske krav ivaretatt',
]

export function DataTransparencyT2CalmV4() {
  return (
    <section className="relative bg-calm4-bone py-20 lg:py-24 -mt-8 overflow-hidden">
      {/* Warm editorial grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(184, 169, 154, 0.15) 1px, transparent 0)
          `,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Gradient fade at top for overlap effect */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-calm4-sand to-transparent" />

      <Calm4Container>
        <div className="relative mx-auto max-w-4xl pt-8">
          <WarmLayeredCard className="p-8 lg:p-12" elevated>
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 items-start">
              {/* Left content */}
              <div className="space-y-5">
                <h2 className="text-2xl font-semibold tracking-tight text-calm4-text sm:text-3xl">
                  Datagrunnlag
                </h2>
                <p className="text-calm4-muted leading-relaxed">
                  Winly er bygget for norske B2B-organisasjoner som trenger et tydelig og ansvarlig forhold til data. Derfor er vi åpne om kilder, oppdateringsfrekvens og begrensninger.
                </p>
              </div>

              {/* Right - trust points as warm cards */}
              <div className="grid gap-3 sm:grid-cols-2">
                {transparencyPoints.map((point, index) => (
                  <div
                    key={index}
                    className="relative flex items-start gap-3 rounded-2xl bg-white p-4 shadow-[var(--shadow-calm4-sm)] border border-calm4-border/30"
                  >
                    {/* Checkmark icon container */}
                    <div
                      className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-calm4-green-soft to-calm4-green-soft/60"
                      style={{
                        boxShadow: `
                          inset 0 1px 2px rgba(255, 255, 255, 0.4),
                          inset 0 -1px 2px rgba(92, 122, 102, 0.1)
                        `
                      }}
                    >
                      <svg
                        className="h-3.5 w-3.5 text-calm4-green-deep"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-calm4-text leading-snug pt-0.5">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </WarmLayeredCard>
        </div>
      </Calm4Container>
    </section>
  )
}
