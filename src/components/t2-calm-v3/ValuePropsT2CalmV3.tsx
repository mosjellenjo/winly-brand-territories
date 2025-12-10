function Calm3Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
}

const valueProps = [
  {
    title: 'Oversikt',
    description: 'Se organisasjoner, roller, eierskap, anbud og historikk samlet i én struktur, i stedet for spredt på mange kilder.',
    color: 'green' as const,
  },
  {
    title: 'Trygghet',
    description: 'Vit hvor data kommer fra, hvordan den oppdateres, og hvilke begrensninger som finnes – uten skjulte antagelser.',
    color: 'orange' as const,
  },
  {
    title: 'Samarbeid',
    description: 'Gi salg, marked, ledelse og rådgivere samme faktagrunnlag – så diskusjonene kan handle om hva dere skal gjøre, ikke hvilke tall som stemmer.',
    color: 'green' as const,
  },
]

function getIconColors(color: 'green' | 'orange') {
  if (color === 'green') {
    return {
      bg: 'bg-calm3-green-soft',
      icon: 'bg-calm3-green-deep',
    }
  }
  return {
    bg: 'bg-calm3-orange-soft',
    icon: 'bg-calm3-orange-deep',
  }
}

export function ValuePropsT2CalmV3() {
  return (
    <section className="relative bg-calm3-sand-deep py-20 lg:py-24">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-calm3-sand-deep/50 to-calm3-sand-deep" />

      <Calm3Container>
        <div className="relative space-y-12">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-calm3-text sm:text-3xl">
            Verdien av et samlet datagrunnlag
          </h2>

          <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
            {valueProps.map((prop) => {
              const colors = getIconColors(prop.color)
              return (
                <div
                  key={prop.title}
                  className="group relative rounded-2xl border border-calm3-border bg-calm3-bone p-6 shadow-[var(--shadow-calm3-card)] transition-all hover:translate-y-[2px] hover:shadow-[var(--shadow-calm3-card-hover)] hover:ring-1 hover:ring-calm3-green-soft/60 lg:p-8"
                >
                  <div className="relative">
                    <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${colors.bg}`}>
                      <div className={`h-3 w-3 rounded-full ${colors.icon}`} />
                    </div>
                    <h3 className="mb-4 text-lg font-semibold text-calm3-text">
                      {prop.title}
                    </h3>
                    <p className="text-calm3-muted leading-relaxed">
                      {prop.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Calm3Container>
    </section>
  )
}
