import { CalmContainer, Section } from '@/components/common'

const features = [
  {
    title: 'Søk & segmentering',
    description: 'Velg bransjer, størrelser, regioner og andre filtre for å definere markedet ditt.',
  },
  {
    title: 'Organisasjonsprofiler',
    description: 'Nøkkeltall, bransje, størrelse, eierskap, styre, historikk og anbudsaktivitet – presentert i et ryddig format.',
  },
  {
    title: 'Rolle- og kontaktinformasjon',
    description: 'Der data finnes: se styremedlemmer, ledelse og andre nøkkelroller knyttet til hver organisasjon.',
  },
  {
    title: 'Lister & eksport',
    description: 'Bygg segmenter og lister, del dem med teamet, og eksporter til CSV når det trengs.',
  },
]

export function FeaturesT2CalmV1() {
  return (
    <Section className="bg-gradient-to-b from-calm-surface to-calm-bg">
      <CalmContainer>
        <div className="space-y-12">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-calm-text sm:text-3xl">
              Alt samlet, uten å føles overveldende
            </h2>
            <p className="text-lg text-calm-text-muted">
              Winly gir deg et komplett bilde av norske B2B-organisasjoner – men er bevisst designet for å oppleves lett å bruke.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group flex gap-4 rounded-2xl border border-calm-border bg-calm-surface p-6 shadow-sm transition-all hover:shadow-md hover:shadow-calm-accent-soft/10"
              >
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-calm-accent-soft/10">
                    <div className="h-2 w-2 rounded-full bg-calm-accent-soft" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-calm-text">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-calm-text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CalmContainer>
    </Section>
  )
}
