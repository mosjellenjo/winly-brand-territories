function Calm3Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
}

const useCases = [
  {
    role: 'Salg',
    description: 'Finn riktige selskaper, forstå hvem som tar beslutninger, og prioriter innsatsen der sjansen for å vinne er størst.',
    size: 'large' as const,
  },
  {
    role: 'Marked',
    description: 'Bygg målgrupper basert på bransje, størrelse og geografi. Del segmenter med salg uten å eksportere til nye ark.',
    size: 'normal' as const,
  },
  {
    role: 'Konsulenter og rådgivere',
    description: 'Få et ryddig faktagrunnlag du trygt kan presentere for kunder – med tydelige kilder og strukturert informasjon.',
    size: 'normal' as const,
  },
]

export function UseCasesT2CalmV3() {
  return (
    <section className="bg-calm3-bone py-20 lg:py-24">
      <Calm3Container>
        <div className="space-y-12">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-calm3-text sm:text-3xl">
              Bruksområder
            </h2>
          </div>

          {/* Asymmetric grid layout */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Large card - Salg */}
            <div className="relative overflow-hidden rounded-2xl border border-calm3-border bg-white p-8 shadow-[var(--shadow-calm3-card)] transition-all hover:translate-y-[2px] hover:shadow-[var(--shadow-calm3-card-hover)] hover:ring-1 hover:ring-calm3-green-soft/60 lg:row-span-2">
              {/* Orange accent strip */}
              <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-calm3-orange-deep to-calm3-orange-soft" />

              <div className="pl-4">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-calm3-orange-soft">
                  <div className="h-2.5 w-2.5 rounded-full bg-calm3-orange-deep" />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-calm3-text">
                  {useCases[0].role}
                </h3>
                <p className="text-calm3-muted leading-relaxed">
                  {useCases[0].description}
                </p>
              </div>
            </div>

            {/* Smaller cards - Marked og Konsulenter */}
            {useCases.slice(1).map((useCase, index) => (
              <div
                key={useCase.role}
                className="relative overflow-hidden rounded-2xl border border-calm3-border bg-white p-6 shadow-[var(--shadow-calm3-card)] transition-all hover:translate-y-[2px] hover:shadow-[var(--shadow-calm3-card-hover)] hover:ring-1 hover:ring-calm3-green-soft/60"
              >
                {/* Orange accent strip on top */}
                <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-calm3-orange-soft to-calm3-orange-deep/50" />

                <div className="pt-2">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-calm3-orange-soft/70">
                    <div className="h-2 w-2 rounded-full bg-calm3-orange-deep" />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-calm3-text">
                    {useCase.role}
                  </h3>
                  <p className="text-sm text-calm3-muted leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Calm3Container>
    </section>
  )
}
