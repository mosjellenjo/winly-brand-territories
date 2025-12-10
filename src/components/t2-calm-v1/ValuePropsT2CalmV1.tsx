import { CalmContainer, Section } from '@/components/common'

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

export function ValuePropsT2CalmV1() {
  return (
    <Section className="bg-gradient-to-b from-calm-bg to-calm-surface">
      <CalmContainer>
        <div className="space-y-12">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-calm-text sm:text-3xl">
            Det viktigste – gjort enkelt
          </h2>

          <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
            {valueProps.map((prop) => (
              <div
                key={prop.title}
                className="group relative rounded-2xl border border-calm-border bg-calm-surface p-6 shadow-md shadow-calm-text/5 transition-shadow hover:shadow-lg hover:shadow-calm-accent-soft/10 lg:p-8"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-calm-accent-soft/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <h3 className="mb-4 text-lg font-semibold text-calm-text">
                    {prop.title}
                  </h3>
                  <p className="text-calm-text-muted leading-relaxed">
                    {prop.description}
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
