function Calm2Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
}

function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <section className={`py-20 lg:py-24 ${className}`}>{children}</section>
}

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

export function UseCasesT2CalmV2() {
  return (
    <Section className="bg-calm2-sand-dark">
      <Calm2Container>
        <div className="space-y-12">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-calm2-text sm:text-3xl">
              Hvem bruker Winly?
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {useCases.map((useCase) => (
              <div
                key={useCase.role}
                className="relative overflow-hidden rounded-3xl border border-calm2-border bg-calm2-bone p-8 shadow-[var(--shadow-calm2-card)] transition-all hover:shadow-[var(--shadow-calm2-card-hover)]"
              >
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-calm2-accent to-calm2-accent-dark" />
                <h3 className="mb-4 text-xl font-semibold text-calm2-text">
                  {useCase.role}
                </h3>
                <p className="text-calm2-text-muted leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Calm2Container>
    </Section>
  )
}
