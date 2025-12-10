import { CalmContainer, Section } from '@/components/common'

const transparencyPoints = [
  'Dokumenterte kilder',
  'Oppdateringslogikk',
  'Når data mangler vises det tydelig',
  'Personvern og rutiner',
]

export function DataTransparencyT2CalmV1() {
  return (
    <Section className="bg-calm-surface">
      <CalmContainer>
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-calm-border bg-calm-bg/50 p-8 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold tracking-tight text-calm-text sm:text-3xl">
                  Et datagrunnlag du trygt kan stå inne for
                </h2>
                <p className="text-calm-text-muted leading-relaxed">
                  Winly er bygget for norske B2B-organisasjoner som trenger et tydelig og ansvarlig forhold til data.
                </p>
              </div>

              <div className="space-y-4">
                {transparencyPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 rounded-xl bg-calm-surface p-4 shadow-sm"
                  >
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-calm-accent-soft/10">
                      <svg
                        className="h-4 w-4 text-calm-accent-soft"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-calm-text font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CalmContainer>
    </Section>
  )
}
