export function UnifiedDataModelSectionV4() {
  const dataComponents = [
    { label: 'Organisasjoner', sub: 'Nøkkeltall, bransje, størrelse' },
    { label: 'Roller & personer', sub: 'Nøkkelroller, styre, relasjoner' },
    { label: 'Eierskap & konsern', sub: 'Eierskapsstrukturer' },
    { label: 'Økonomi & historikk', sub: 'Finansiell utvikling' },
    { label: 'Anbud', sub: 'Offentlige anskaffelser' },
    { label: 'Signaler', sub: 'Hendelser og endringsdata' },
  ]

  return (
    <section className="relative bg-[#0B1120] py-20 border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text Column */}
          <div>
            <p className="text-sm font-medium uppercase tracking-wider bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-3">
              Samlet datamodell
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Struktur på tvers av alle kilder
            </h2>
            <p className="mt-6 text-gray-400 leading-relaxed">
              Winly bygger en samlet datamodell som kobler sammen organisasjonsdata, rolle- og personinformasjon, eierskap, økonomi, anbud og historikk.
            </p>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Resultatet er et datagrunnlag der alle brikker henger sammen – og der innsikt kan følges tilbake til kildene.
            </p>
          </div>

          {/* Visual Column */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 via-sky-500/10 to-blue-500/10 rounded-2xl blur-xl opacity-50" />

            <div className="relative rounded-xl border border-white/[0.06] bg-[#0F172A] p-6">
              <div className="grid grid-cols-2 gap-3">
                {dataComponents.map((component, index) => (
                  <div
                    key={index}
                    className="group rounded-lg border border-white/[0.06] bg-[#0B1120] p-4 transition-all hover:border-cyan-500/30 hover:bg-[#0D1526]"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-cyan-400/20 to-blue-500/20 text-[10px] font-semibold text-cyan-400">
                        {index + 1}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">
                          {component.label}
                        </p>
                        <p className="mt-0.5 text-xs text-gray-500">
                          {component.sub}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Connection indicator */}
              <div className="mt-5 pt-5 border-t border-white/[0.06] flex items-center gap-3">
                <div className="flex gap-1">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                      style={{ opacity: 1 - i * 0.15 }}
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-500">
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
