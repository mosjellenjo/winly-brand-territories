export function UnifiedDataModelSectionV2() {
  return (
    <section className="border-t border-slate-800/50 bg-[#0A0E17] py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 lg:gap-16">
          {/* Text Column */}
          <div className="md:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
              Samlet datamodell
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#F1F5F9] md:text-3xl">
              Struktur på tvers av alle kilder
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-slate-400">
              Winly bygger en samlet datamodell som kobler sammen organisasjonsdata, rolle- og personinformasjon, eierskap, økonomi, anbud og historikk.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Resultatet er et datagrunnlag der alle brikker henger sammen – og der innsikt kan følges tilbake til kildene.
            </p>
          </div>

          {/* Relationship Diagram */}
          <div className="md:col-span-7">
            <div className="border border-slate-800/70 bg-[#0B0F1A] p-6 transition-all hover:border-cyan-400/20">
              {/* Header */}
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-800/50">
                <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-slate-500">
                  Datakomponenter
                </p>
              </div>

              {/* Three Column Relationship Diagram */}
              <div className="grid grid-cols-3 gap-4">
                {/* Column 1: Selskaper */}
                <div className="space-y-3">
                  <div className="text-[9px] font-medium uppercase tracking-[0.15em] text-slate-600 text-center mb-2">
                    Selskaper
                  </div>
                  <DataBlock label="Organisasjoner" sub="Nøkkeltall, bransje, størrelse" active />
                  <DataBlock label="Økonomi" sub="Finansiell utvikling" />
                  <DataBlock label="Historikk" sub="Endringer over tid" />
                </div>

                {/* Column 2: Personer & roller */}
                <div className="space-y-3 relative">
                  <div className="text-[9px] font-medium uppercase tracking-[0.15em] text-slate-600 text-center mb-2">
                    Personer & roller
                  </div>
                  <DataBlock label="Roller" sub="Nøkkelposisjoner" />
                  <DataBlock label="Styre" sub="Styremedlemmer" />
                  <DataBlock label="Relasjoner" sub="Personkoblinger" />

                  {/* Connection lines to other columns */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" style={{ zIndex: 0 }}>
                    <line x1="0" y1="50%" x2="-20" y2="50%" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />
                    <line x1="100%" y1="50%" x2="120%" y2="50%" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />
                  </svg>
                </div>

                {/* Column 3: Eierskap & anbud */}
                <div className="space-y-3">
                  <div className="text-[9px] font-medium uppercase tracking-[0.15em] text-slate-600 text-center mb-2">
                    Eierskap & anbud
                  </div>
                  <DataBlock label="Eierskap" sub="Eierskapsstrukturer" />
                  <DataBlock label="Konsern" sub="Konsernkoblinger" />
                  <DataBlock label="Anbud" sub="Offentlige anskaffelser" active />
                </div>
              </div>

              {/* Footer indicator */}
              <div className="mt-6 pt-4 border-t border-slate-800/50 flex items-center gap-2">
                <div className="flex gap-0.5">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="h-1.5 w-1.5 bg-cyan-400/50" />
                  ))}
                </div>
                <span className="text-[10px] text-slate-500">
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

function DataBlock({ label, sub, active = false }: { label: string; sub: string; active?: boolean }) {
  return (
    <div
      className={`relative z-10 border p-3 transition-all ${
        active
          ? 'border-cyan-400/50 bg-cyan-400/5'
          : 'border-slate-700/50 bg-[#060A12] hover:border-cyan-400/30'
      }`}
    >
      <p className={`text-xs font-medium ${active ? 'text-cyan-400' : 'text-slate-300'}`}>
        {label}
      </p>
      <p className="text-[10px] text-slate-500 mt-0.5">{sub}</p>
    </div>
  )
}
