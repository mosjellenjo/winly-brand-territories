export function UnifiedDataModelSectionV1() {
  const dataComponents = [
    { label: 'Organisasjoner', description: 'Nøkkeltall, bransje, størrelse, geografi' },
    { label: 'Roller & personer', description: 'Nøkkelroller, styre og relasjoner' },
    { label: 'Eierskap & konsern', description: 'Eierskapsstrukturer og konsernkoblinger' },
    { label: 'Økonomi & historikk', description: 'Finansiell utvikling over tid' },
    { label: 'Anbud', description: 'Offentlige anbud koblet til organisasjoner' },
    { label: 'Signaler', description: 'Hendelser og endringsdata når tilgjengelig' },
  ]

  return (
    <section className="border-t border-truth2-border bg-truth2-bg-alt py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 lg:gap-16">
          {/* Text Column */}
          <div className="md:col-span-5">
            <p className="text-xs font-medium uppercase tracking-widest text-truth2-accent">
              Samlet datamodell
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-truth2-text md:text-3xl">
              Struktur på tvers av alle kilder
            </h2>
            <p className="mt-6 text-base leading-relaxed text-truth2-muted">
              Winly bygger en samlet datamodell som kobler sammen organisasjonsdata, rolle- og personinformasjon, eierskap, økonomi, anbud og historikk.
            </p>
            <p className="mt-4 text-base leading-relaxed text-truth2-muted">
              Resultatet er et datagrunnlag der alle brikker henger sammen – og der innsikt kan følges tilbake til kildene.
            </p>
          </div>

          {/* Data Model Visual */}
          <div className="md:col-span-7">
            <div className="rounded-md border border-truth2-border bg-truth2-panel p-6">
              <div className="grid grid-cols-2 gap-3">
                {dataComponents.map((component, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-3 rounded border border-truth2-border bg-truth2-bg p-4 transition-all hover:border-truth2-accent/50"
                  >
                    <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded border border-truth2-border bg-truth2-panel text-xs font-medium text-truth2-muted transition-colors group-hover:border-truth2-accent/50 group-hover:text-truth2-accent">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-truth2-text">
                        {component.label}
                      </p>
                      <p className="mt-1 text-xs text-truth2-muted">
                        {component.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Connection Indicator */}
              <div className="mt-6 flex items-center gap-3 border-t border-truth2-border pt-4">
                <div className="flex -space-x-1">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-2.5 w-2.5 rounded-full border border-truth2-panel bg-truth2-accent/60"
                    />
                  ))}
                </div>
                <span className="text-xs text-truth2-muted">
                  Alle datapunkter koblet i én modell
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
