function Calm2Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
}

function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <section className={`py-20 lg:py-24 ${className}`}>{children}</section>
}

const transparencyPoints = [
  'Dokumenterte kilder',
  'Oppdateringslogikk',
  'Når data mangler vises det tydelig',
  'Personvern og rutiner',
]

export function DataTransparencyT2CalmV2() {
  return (
    <Section className="bg-calm2-bone">
      <Calm2Container>
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-calm2-border bg-calm2-sand p-8 shadow-[var(--shadow-calm2)] lg:p-12">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold tracking-tight text-calm2-text sm:text-3xl">
                  Et datagrunnlag du trygt kan stå inne for
                </h2>
                <p className="text-calm2-text-muted leading-relaxed">
                  Winly er bygget for norske B2B-organisasjoner som trenger et tydelig og ansvarlig forhold til data.
                </p>
              </div>

              <div className="space-y-4">
                {transparencyPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 rounded-2xl bg-calm2-bone p-4 shadow-[var(--shadow-calm2-soft)]"
                  >
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-calm2-taupe/20 to-calm2-clay/10">
                      <svg
                        className="h-4 w-4 text-calm2-accent-dark"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-calm2-text font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Calm2Container>
    </Section>
  )
}
