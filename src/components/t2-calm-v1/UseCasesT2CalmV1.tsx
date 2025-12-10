import { CalmContainer, Section } from '@/components/common'

const useCases = [
  {
    role: 'Salg',
    description: 'Finn riktige selskaper, forstå hvem som tar beslutninger, og prioriter innsatsen der sjansen for å vinne er størst.',
  },
  {
    role: 'Marked',
    description: 'Bygg målgrupper basert på bransje, størrelse og geografi. Del segmenter med salg uten å eksportere til nye ark.',
  },
  {
    role: 'Konsulenter og rådgivere',
    description: 'Få et ryddig faktagrunnlag du trygt kan presentere for kunder – med tydelige kilder og strukturert informasjon.',
  },
]

export function UseCasesT2CalmV1() {
  return (
    <Section className="bg-calm-bg">
      <CalmContainer>
        <div className="space-y-12">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-calm-text sm:text-3xl">
              Hvem bruker Winly?
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {useCases.map((useCase) => (
              <div
                key={useCase.role}
                className="relative overflow-hidden rounded-2xl border border-calm-border bg-calm-surface p-8 shadow-md shadow-calm-text/5"
              >
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-calm-accent-soft to-calm-accent-soft/30" />
                <h3 className="mb-4 text-xl font-semibold text-calm-text">
                  {useCase.role}
                </h3>
                <p className="text-calm-text-muted leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </CalmContainer>
    </Section>
  )
}
