export function ValuePropsTruthEngineV1() {
  const valueProps = [
    {
      title: 'Ett univers',
      description:
        'Hele det norske B2B-markedet samlet på ett sted. Organisasjoner, roller, eierskap, anbud og historikk – koblet i én struktur.',
    },
    {
      title: 'Tydelige koblinger',
      description:
        'Se sammenhenger mellom selskaper, personer, konsernstrukturer og offentlige anbud. Slipper leting i mange systemer.',
    },
    {
      title: 'Bedre prioritering',
      description:
        'Bygg målgrupper basert på faktiske data. Prioriter innsatsen mot riktige selskaper og riktige personer.',
    },
  ]

  return (
    <section className="border-t border-truth2-border bg-truth2-bg py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-truth2-text md:text-3xl">
          Hvorfor selskaper velger Winly
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {valueProps.map((prop, index) => (
            <div
              key={index}
              className="group rounded-md border border-truth2-border bg-truth2-panel p-6 transition-all hover:border-truth2-accent/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.1)]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded border border-truth2-border bg-truth2-bg text-sm font-semibold text-truth2-accent transition-colors group-hover:border-truth2-accent/50">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-truth2-text">
                {prop.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-truth2-muted">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
