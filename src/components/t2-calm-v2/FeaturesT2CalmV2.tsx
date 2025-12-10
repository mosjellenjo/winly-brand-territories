function Calm2Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
}

function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <section className={`py-20 lg:py-24 ${className}`}>{children}</section>
}

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

export function FeaturesT2CalmV2() {
  return (
    <Section className="bg-gradient-to-b from-calm2-bone to-calm2-sand">
      <Calm2Container>
        <div className="space-y-12">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-calm2-text sm:text-3xl">
              Alt samlet, uten å føles overveldende
            </h2>
            <p className="text-lg text-calm2-text-muted">
              Winly gir deg et komplett bilde av norske B2B-organisasjoner – men er bevisst designet for å oppleves lett å bruke.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group flex gap-4 rounded-3xl border border-calm2-border bg-calm2-bone p-6 shadow-[var(--shadow-calm2-soft)] transition-all hover:shadow-[var(--shadow-calm2-card-hover)]"
              >
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-calm2-taupe/20 to-calm2-clay/10">
                    <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-calm2-accent to-calm2-accent-dark" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-calm2-text">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-calm2-text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Calm2Container>
    </Section>
  )
}
