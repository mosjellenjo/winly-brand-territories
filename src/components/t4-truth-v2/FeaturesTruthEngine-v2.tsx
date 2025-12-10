export function FeaturesTruthEngineV2() {
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
    <section className="border-t border-slate-800/50 bg-[#0A0E17] py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
            Funksjonalitet
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#F1F5F9] md:text-3xl">
            Det Winly gjør
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group border border-slate-800/70 bg-[#0B0F1A] transition-all hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]"
            >
              {/* UI-like top bar */}
              <div className="px-5 py-2.5 border-b border-slate-800/50 flex items-center gap-2">
                <div className="flex gap-1">
                  <span className="h-1.5 w-1.5 bg-slate-700 group-hover:bg-cyan-400/40 transition-colors" />
                  <span className="h-1.5 w-1.5 bg-slate-700" />
                  <span className="h-1.5 w-1.5 bg-slate-700" />
                </div>
                <div className="flex-1 h-1 bg-slate-800/50 ml-2">
                  <div
                    className="h-full bg-cyan-400/20 group-hover:bg-cyan-400/40 transition-colors"
                    style={{ width: `${40 + index * 15}%` }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center border border-slate-700 bg-[#060A12] text-[10px] font-semibold text-cyan-400 group-hover:border-cyan-400/40 transition-colors">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#F1F5F9]">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
