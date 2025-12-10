export function UnifiedDataModelSectionV3() {
  const dataComponents = [
    { label: 'Organisasjoner', sub: 'Nøkkeltall, bransje, størrelse' },
    { label: 'Roller & personer', sub: 'Nøkkelroller, styre, relasjoner' },
    { label: 'Eierskap & konsern', sub: 'Eierskapsstrukturer' },
    { label: 'Økonomi & historikk', sub: 'Finansiell utvikling' },
    { label: 'Anbud', sub: 'Offentlige anskaffelser' },
    { label: 'Signaler', sub: 'Hendelser og endringsdata' },
  ]

  return (
    <section className="bg-[#0C0D12] py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Text Column */}
          <div className="lg:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-orange-400 mb-3">
              Samlet datamodell
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Struktur på tvers av alle kilder
            </h2>
            <p className="mt-6 text-[#8B8B9E] leading-relaxed">
              Winly bygger en samlet datamodell som kobler sammen organisasjonsdata, rolle- og personinformasjon, eierskap, økonomi, anbud og historikk.
            </p>
            <p className="mt-4 text-[#8B8B9E] leading-relaxed">
              Resultatet er et datagrunnlag der alle brikker henger sammen – og der innsikt kan følges tilbake til kildene.
            </p>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/[0.06] bg-[#12141A] p-6 transition-all hover:border-orange-500/20">
              <div className="grid grid-cols-2 gap-3">
                {dataComponents.map((component, index) => (
                  <div
                    key={index}
                    className="group rounded-xl border border-white/[0.06] bg-[#0C0D12] p-4 transition-all hover:border-orange-500/30 hover:bg-[#0E1015]"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-[10px] font-semibold text-orange-400">
                        {index + 1}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">
                          {component.label}
                        </p>
                        <p className="mt-0.5 text-xs text-[#6B6B7E]">
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
                      className="h-1.5 w-1.5 rounded-full bg-orange-500"
                      style={{ opacity: 1 - i * 0.12 }}
                    />
                  ))}
                </div>
                <span className="text-xs text-[#6B6B7E]">
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
