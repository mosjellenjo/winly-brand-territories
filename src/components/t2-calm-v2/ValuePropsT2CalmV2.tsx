function Calm2Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
}

function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <section className={`py-20 lg:py-24 ${className}`}>{children}</section>
}

const valueProps = [
  {
    title: 'Oversikt',
    description: 'Se organisasjoner, roller, eierskap, anbud og historikk samlet i én struktur, i stedet for spredt på mange kilder.',
  },
  {
    title: 'Trygghet',
    description: 'Vit hvor data kommer fra, hvordan den oppdateres, og hvilke begrensninger som finnes – uten skjulte antagelser.',
  },
  {
    title: 'Samarbeid',
    description: 'Gi salg, marked, ledelse og rådgivere samme faktagrunnlag – så diskusjonene kan handle om hva dere skal gjøre, ikke hvilke tall som stemmer.',
  },
]

export function ValuePropsT2CalmV2() {
  return (
    <Section className="bg-gradient-to-b from-calm2-sand to-calm2-sand-dark">
      <Calm2Container>
        <div className="space-y-12">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-calm2-text sm:text-3xl">
            Det viktigste – gjort enkelt
          </h2>

          <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
            {valueProps.map((prop) => (
              <div
                key={prop.title}
                className="group relative rounded-3xl border border-calm2-border bg-calm2-bone p-6 shadow-[var(--shadow-calm2-card)] transition-all hover:shadow-[var(--shadow-calm2-card-hover)] lg:p-8"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-calm2-taupe/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <h3 className="mb-4 text-lg font-semibold text-calm2-text">
                    {prop.title}
                  </h3>
                  <p className="text-calm2-text-muted leading-relaxed">
                    {prop.description}
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
