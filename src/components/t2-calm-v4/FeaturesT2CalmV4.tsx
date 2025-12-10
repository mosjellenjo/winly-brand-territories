import { Calm4Container, SoftIconContainer, WarmLayeredCard, NanoPlaceholder } from './base'

const features = [
  {
    title: 'Søk & segmentering',
    description: 'Velg bransjer, størrelser, regioner og andre filtre for å definere markedet ditt.',
    variant: 'green' as const,
  },
  {
    title: 'Organisasjonsprofiler',
    description: 'Nøkkeltall, bransje, størrelse, eierskap, styre, historikk og anbudsaktivitet – presentert i et ryddig format.',
    variant: 'orange' as const,
  },
  {
    title: 'Rolle- og kontaktinformasjon',
    description: 'Der data finnes: se styremedlemmer, ledelse og andre nøkkelroller knyttet til hver organisasjon.',
    variant: 'green' as const,
  },
  {
    title: 'Lister & eksport',
    description: 'Bygg segmenter og lister, del dem med teamet, og eksporter til CSV når det trengs.',
    variant: 'orange' as const,
  },
]

export function FeaturesT2CalmV4() {
  return (
    <section className="bg-calm4-sand py-20 lg:py-24">
      <Calm4Container>
        <div className="space-y-12">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-calm4-text sm:text-3xl">
              Funksjoner
            </h2>
            <p className="text-lg text-calm4-muted">
              Winly gir deg et komplett bilde av norske B2B-organisasjoner – men er bevisst designet for å oppleves lett å bruke.
            </p>
          </div>

          {/* Icon set placeholder */}
          <NanoPlaceholder name="T2IconSet" height="60px" className="mx-auto max-w-md" />

          {/* Layered feature cards - 2x2 with overlapping effect */}
          <div className="relative">
            {/* Background decorative card */}
            <div className="absolute inset-4 rounded-3xl bg-calm4-sand-deep/30 -z-10" />

            <div className="grid gap-6 md:grid-cols-2">
              {features.map((feature, index) => (
                <WarmLayeredCard
                  key={feature.title}
                  className="p-7"
                  rotation={index % 2 === 0 ? -0.3 : 0.3}
                >
                  <div className="flex gap-5">
                    <SoftIconContainer
                      variant={feature.variant}
                      size="lg"
                      className="flex-shrink-0"
                    />
                    <div>
                      <h3 className="mb-2 font-semibold text-calm4-text text-lg">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-calm4-muted leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </WarmLayeredCard>
              ))}
            </div>
          </div>
        </div>
      </Calm4Container>
    </section>
  )
}
