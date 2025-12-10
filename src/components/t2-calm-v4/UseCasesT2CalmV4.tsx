import { Calm4Container, SoftIconContainer, WarmLayeredCard, SoftDivider } from './base'

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

export function UseCasesT2CalmV4() {
  return (
    <section className="bg-calm4-sand-light py-20 lg:py-24">
      <Calm4Container>
        <div className="space-y-12">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-calm4-text sm:text-3xl">
            Bruksområder
          </h2>

          {/* Asymmetric layout: 1 large + 2 stacked */}
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
            {/* Large featured card */}
            <div className="lg:col-span-7 lg:row-span-2">
              <WarmLayeredCard className="h-full p-8 lg:p-10" elevated>
                {/* Orange accent strip */}
                <div className="absolute left-0 top-0 bottom-0 w-2 rounded-l-3xl bg-gradient-to-b from-calm4-orange-deep via-calm4-orange-soft to-calm4-orange-deep/40" />

                <div className="pl-4 h-full flex flex-col">
                  <SoftIconContainer variant="orange" size="lg" className="mb-6" />

                  <h3 className="mb-4 text-2xl font-semibold text-calm4-text">
                    {useCases[0].role}
                  </h3>

                  <p className="text-lg text-calm4-muted leading-relaxed mb-6">
                    {useCases[0].description}
                  </p>

                  {/* Visual element - mini data preview */}
                  <div className="mt-auto rounded-2xl bg-calm4-sand/50 p-4 border border-calm4-border/50">
                    <div className="flex items-center gap-3 text-sm text-calm4-muted">
                      <span className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-calm4-green-deep" />
                        142 organisasjoner
                      </span>
                      <span className="text-calm4-border">|</span>
                      <span className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-calm4-orange-deep" />
                        89 beslutningstagere
                      </span>
                    </div>
                  </div>
                </div>
              </WarmLayeredCard>
            </div>

            {/* Smaller stacked cards */}
            <div className="lg:col-span-5 space-y-6">
              {useCases.slice(1).map((useCase, index) => (
                <WarmLayeredCard
                  key={useCase.role}
                  className="p-6"
                  rotation={index === 0 ? 1 : -1}
                >
                  {/* Top accent strip */}
                  <div className="absolute left-4 right-4 top-0 h-1 rounded-b-full bg-gradient-to-r from-calm4-orange-soft via-calm4-orange-deep to-calm4-orange-soft/50" />

                  <div className="pt-3">
                    <div className="flex items-start gap-4">
                      <SoftIconContainer variant="orange" size="sm" className="flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="mb-2 text-lg font-semibold text-calm4-text">
                          {useCase.role}
                        </h3>
                        <p className="text-sm text-calm4-muted leading-relaxed">
                          {useCase.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </WarmLayeredCard>
              ))}
            </div>
          </div>
        </div>

        <SoftDivider className="mt-16" />
      </Calm4Container>
    </section>
  )
}
