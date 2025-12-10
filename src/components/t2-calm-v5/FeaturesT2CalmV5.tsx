import { SearchIcon, OrganizationIcon, ContactIcon, ExportIcon } from './icons'

function Calm5Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
}

const features = [
  {
    title: 'Søk & segmentering',
    description: 'Velg bransjer, størrelser, regioner og andre filtre for å definere markedet ditt.',
    Icon: SearchIcon,
    bgColor: 'bg-calm3-green-soft',
    iconColor: 'text-calm3-green-deep',
  },
  {
    title: 'Organisasjonsprofiler',
    description: 'Nøkkeltall, bransje, størrelse, eierskap, styre, historikk og anbudsaktivitet – presentert i et ryddig format.',
    Icon: OrganizationIcon,
    bgColor: 'bg-calm3-orange-soft/70',
    iconColor: 'text-calm3-orange-deep',
  },
  {
    title: 'Rolle- og kontaktinformasjon',
    description: 'Der data finnes: se styremedlemmer, ledelse og andre nøkkelroller knyttet til hver organisasjon.',
    Icon: ContactIcon,
    bgColor: 'bg-calm3-green-soft',
    iconColor: 'text-calm3-green-deep',
  },
  {
    title: 'Lister & eksport',
    description: 'Bygg segmenter og lister, del dem med teamet, og eksporter til CSV når det trengs.',
    Icon: ExportIcon,
    bgColor: 'bg-calm3-orange-soft/70',
    iconColor: 'text-calm3-orange-deep',
  },
]

export function FeaturesT2CalmV5() {
  return (
    <section className="bg-calm3-sand py-20 lg:py-24">
      <Calm5Container>
        <div className="space-y-12">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-calm3-text sm:text-3xl">
              Funksjoner
            </h2>
            <p className="text-lg text-calm3-muted">
              Winly gir deg et komplett bilde av norske B2B-organisasjoner – men er bevisst designet for å oppleves lett å bruke.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group flex gap-5 rounded-2xl border border-calm3-border bg-calm3-bone p-6 shadow-[var(--shadow-calm3-card)] transition-all hover:translate-y-[2px] hover:shadow-[var(--shadow-calm3-card-hover)] hover:ring-1 hover:ring-calm3-green-soft/60"
              >
                <div className="flex-shrink-0">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${feature.bgColor}`}>
                    <feature.Icon size={28} className={feature.iconColor} />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-calm3-text text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-calm3-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Calm5Container>
    </section>
  )
}
