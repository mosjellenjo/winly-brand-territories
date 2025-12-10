import { Calm4Container, SoftIconContainer, WarmLayeredCard } from './base'

const valueProps = [
  {
    title: 'Oversikt',
    description: 'Se organisasjoner, roller, eierskap, anbud og historikk samlet i én struktur, i stedet for spredt på mange kilder.',
    variant: 'green' as const,
  },
  {
    title: 'Trygghet',
    description: 'Vit hvor data kommer fra, hvordan den oppdateres, og hvilke begrensninger som finnes – uten skjulte antagelser.',
    variant: 'orange' as const,
  },
  {
    title: 'Samarbeid',
    description: 'Gi salg, marked, ledelse og rådgivere samme faktagrunnlag – så diskusjonene kan handle om hva dere skal gjøre, ikke hvilke tall som stemmer.',
    variant: 'green' as const,
  },
]

export function ValuePropsT2CalmV4() {
  return (
    <section className="relative bg-calm4-sand-deep py-20 lg:py-24 overflow-hidden">
      {/* Subtle editorial grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #2A2622 1px, transparent 1px),
            linear-gradient(to bottom, #2A2622 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-calm4-sand-deep/80 via-transparent to-calm4-sand-deep/80" />

      <Calm4Container>
        <div className="relative space-y-12">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-calm4-text sm:text-3xl">
            Verdier
          </h2>

          {/* Asymmetric masonry-style layout */}
          <div className="grid gap-6 md:grid-cols-12 lg:gap-8">
            {/* First card - spans 7 columns */}
            <div className="md:col-span-7">
              <WarmLayeredCard className="h-full p-8" elevated>
                <div className="flex flex-col h-full">
                  <SoftIconContainer variant={valueProps[0].variant} size="lg" className="mb-5" />
                  <h3 className="mb-3 text-xl font-semibold text-calm4-text">
                    {valueProps[0].title}
                  </h3>
                  <p className="text-calm4-muted leading-relaxed">
                    {valueProps[0].description}
                  </p>
                </div>
              </WarmLayeredCard>
            </div>

            {/* Second card - spans 5 columns */}
            <div className="md:col-span-5">
              <WarmLayeredCard className="h-full p-7" rotation={1}>
                <div className="flex flex-col h-full">
                  <SoftIconContainer variant={valueProps[1].variant} size="md" className="mb-4" />
                  <h3 className="mb-2 text-lg font-semibold text-calm4-text">
                    {valueProps[1].title}
                  </h3>
                  <p className="text-sm text-calm4-muted leading-relaxed">
                    {valueProps[1].description}
                  </p>
                </div>
              </WarmLayeredCard>
            </div>

            {/* Third card - spans full width but narrower */}
            <div className="md:col-span-8 md:col-start-3">
              <WarmLayeredCard className="p-8" rotation={-0.5}>
                <div className="flex gap-5 items-start">
                  <SoftIconContainer variant={valueProps[2].variant} size="lg" className="flex-shrink-0" />
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-calm4-text">
                      {valueProps[2].title}
                    </h3>
                    <p className="text-calm4-muted leading-relaxed">
                      {valueProps[2].description}
                    </p>
                  </div>
                </div>
              </WarmLayeredCard>
            </div>
          </div>
        </div>
      </Calm4Container>
    </section>
  )
}
