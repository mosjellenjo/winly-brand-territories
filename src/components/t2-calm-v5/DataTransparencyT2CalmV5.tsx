import { TransparencyIcon } from './icons'

function Calm5Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
}

const transparencyPoints = [
  'Dokumenterte datakilder og strukturer',
  'Løpende oppdatering av nøkkelfelt',
  'Klare beskrivelser av usikkerhet og antagelser der det er relevant',
  'Personvern og norske krav ivaretatt',
]

export function DataTransparencyT2CalmV5() {
  return (
    <section className="relative -mt-8 bg-calm3-bone py-20 lg:py-24">
      {/* Dotted pattern background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, #D8CFC5 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <Calm5Container>
        <div className="relative mx-auto max-w-4xl">
          <div className="rounded-3xl border border-calm3-border bg-gradient-to-br from-white to-calm3-bone p-8 shadow-[var(--shadow-calm3)] lg:p-12">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-calm3-green-soft mb-4">
                  <TransparencyIcon size={28} className="text-calm3-green-deep" />
                </div>
                <h2 className="text-2xl font-semibold tracking-tight text-calm3-text sm:text-3xl">
                  Datagrunnlag
                </h2>
                <p className="text-calm3-muted leading-relaxed">
                  Winly er bygget for norske B2B-organisasjoner som trenger et tydelig og ansvarlig forhold til data. Derfor er vi åpne om kilder, oppdateringsfrekvens og begrensninger.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {transparencyPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm border border-calm3-border/50"
                  >
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-calm3-green-soft">
                      <svg
                        className="h-3.5 w-3.5 text-calm3-green-deep"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-calm3-text leading-snug">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Calm5Container>
    </section>
  )
}
