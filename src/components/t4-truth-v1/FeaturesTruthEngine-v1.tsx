export function FeaturesTruthEngineV1() {
  const features = [
    {
      title: 'Søk & segmentering',
      description:
        'Filtrer norske organisasjoner basert på bransje, størrelse, geografi, eierskap, anbud og signaler. Bygg lister du kan jobbe videre med.',
    },
    {
      title: 'Organisasjonsprofiler',
      description:
        'Se nøkkeltall, bransje, historikk, eierskap og anbud samlet i én visning. Sporbare felter med dokumenterte kilder.',
    },
    {
      title: 'Rolle- og kontaktinformasjon',
      description:
        'Oversikt over nøkkelroller, styre og relasjoner mellom organisasjoner der data finnes.',
    },
    {
      title: 'Lister & eksport',
      description:
        'Bygg segmenter basert på kriterier og eksporter til CSV når innsikten skal brukes videre.',
    },
  ]

  return (
    <section className="border-t border-truth2-border bg-truth2-bg-alt py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-truth2-accent">
            Funksjonalitet
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-truth2-text md:text-3xl">
            Det Winly gjør
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-md border border-truth2-border bg-truth2-panel p-6 transition-all hover:border-truth2-accent/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.1)]"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded border border-truth2-border bg-truth2-bg text-xs font-semibold text-truth2-accent transition-colors group-hover:border-truth2-accent/50">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-truth2-text">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-truth2-muted">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
