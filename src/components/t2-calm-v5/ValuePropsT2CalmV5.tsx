import { OverviewIcon, TransparencyIcon, CollaborationIcon } from './icons'

function Calm5Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
}

const valueProps = [
  {
    title: 'Oversikt',
    description: 'Se organisasjoner, roller, eierskap, anbud og historikk samlet i én struktur, i stedet for spredt på mange kilder.',
    Icon: OverviewIcon,
    bgColor: 'bg-calm3-green-soft',
    iconColor: 'text-calm3-green-deep',
  },
  {
    title: 'Trygghet',
    description: 'Vit hvor data kommer fra, hvordan den oppdateres, og hvilke begrensninger som finnes – uten skjulte antagelser.',
    Icon: TransparencyIcon,
    bgColor: 'bg-calm3-orange-soft',
    iconColor: 'text-calm3-orange-deep',
  },
  {
    title: 'Samarbeid',
    description: 'Gi salg, marked, ledelse og rådgivere samme faktagrunnlag – så diskusjonene kan handle om hva dere skal gjøre, ikke hvilke tall som stemmer.',
    Icon: CollaborationIcon,
    bgColor: 'bg-calm3-green-soft',
    iconColor: 'text-calm3-green-deep',
  },
]

export function ValuePropsT2CalmV5() {
  return (
    <section className="relative bg-calm3-sand-deep py-20 lg:py-24">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-calm3-sand-deep/50 to-calm3-sand-deep" />

      <Calm5Container>
        <div className="relative space-y-12">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-calm3-text sm:text-3xl">
            Verdien av et samlet datagrunnlag
          </h2>

          <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
            {valueProps.map((prop) => (
              <div
                key={prop.title}
                className="group relative rounded-2xl border border-calm3-border bg-calm3-bone p-6 shadow-[var(--shadow-calm3-card)] transition-all hover:translate-y-[2px] hover:shadow-[var(--shadow-calm3-card-hover)] hover:ring-1 hover:ring-calm3-green-soft/60 lg:p-8"
              >
                <div className="relative">
                  <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${prop.bgColor}`}>
                    <prop.Icon size={28} className={prop.iconColor} />
                  </div>
                  <h3 className="mb-4 text-lg font-semibold text-calm3-text">
                    {prop.title}
                  </h3>
                  <p className="text-calm3-muted leading-relaxed">
                    {prop.description}
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
