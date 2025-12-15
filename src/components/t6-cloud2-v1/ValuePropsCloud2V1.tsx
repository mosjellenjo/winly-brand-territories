'use client'

export function ValuePropsCloud2V1() {
  return (
    <section className="relative bg-white py-24 border-t border-slate-100">
      <div style={{ padding: '0 70px' }}>
        <div className="mx-auto" style={{ maxWidth: 'calc(100% - 140px)' }}>
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-sm text-slate-400 mb-4 tracking-widest uppercase">Problemet med anbudsmarkedet</p>
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-normal text-slate-800 tracking-tight leading-tight mx-auto">
              800 milliarder i spill – men ingen vet når neste mulighet dukker opp.
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(90deg, rgb(59, 130, 246), rgb(14, 165, 233), rgb(6, 182, 212))',
                }}
              >
                Derfor går de fleste glipp av dem.
              </span>
            </h2>
          </div>

          {/* Story cards - matching site branding */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-16">
            {/* Card 1: The opportunity */}
            <div className="relative group rounded-2xl border border-[#3B82F6]/30 bg-gradient-to-b from-[#3B82F6]/10 to-white p-8 transition-all duration-300 hover:border-[#3B82F6]/50 hover:shadow-lg hover:shadow-[#3B82F6]/15">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#3B82F6]/12 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p
                      className="text-5xl font-light bg-clip-text text-transparent"
                      style={{
                        backgroundImage: 'linear-gradient(90deg, rgb(59, 130, 246), rgb(14, 165, 233), rgb(6, 182, 212))',
                      }}
                    >
                      17.000+
                    </p>
                    <span className="text-xs text-slate-400 uppercase tracking-wider">anbud årlig</span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3B82F6]/10 to-[#06B6D4]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#0EA5E9]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-medium text-slate-800 mb-2">Markedet er enormt</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Offentlige og B2B-kontrakter i Norge utgjør over 800 milliarder kroner årlig. En gullgruve for de som finner dem.
                </p>
              </div>
            </div>

            {/* Card 2: The problem */}
            <div className="relative group rounded-2xl border border-[#3B82F6]/30 bg-gradient-to-b from-[#3B82F6]/10 to-white p-8 transition-all duration-300 hover:border-[#3B82F6]/50 hover:shadow-lg hover:shadow-[#3B82F6]/15">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#3B82F6]/12 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p
                      className="text-5xl font-light bg-clip-text text-transparent"
                      style={{
                        backgroundImage: 'linear-gradient(90deg, rgb(59, 130, 246), rgb(14, 165, 233), rgb(6, 182, 212))',
                      }}
                    >
                      4,3
                    </p>
                    <span className="text-xs text-slate-400 uppercase tracking-wider">tilbydere i snitt</span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3B82F6]/10 to-[#06B6D4]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#0EA5E9]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-medium text-slate-800 mb-2">Nesten ingen konkurrerer</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Kun 4,3 tilbydere per anbud i snitt. Ikke fordi det mangler interesse – men fordi muligheten dukker opp for brått.
                </p>
              </div>
            </div>

            {/* Card 3: The pain */}
            <div className="relative group rounded-2xl border border-[#3B82F6]/30 bg-gradient-to-b from-[#3B82F6]/10 to-white p-8 transition-all duration-300 hover:border-[#3B82F6]/50 hover:shadow-lg hover:shadow-[#3B82F6]/15">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#3B82F6]/12 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <svg
                      className="w-14 h-14 -mt-1"
                      viewBox="0 0 64 72"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient id="stormGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="rgb(59, 130, 246)" />
                          <stop offset="50%" stopColor="rgb(14, 165, 233)" />
                          <stop offset="100%" stopColor="rgb(6, 182, 212)" />
                        </linearGradient>
                      </defs>
                      {/* Cloud - moved up */}
                      <path
                        d="M52 20c0-1.1-.1-2.2-.4-3.2C50.3 10.6 44.7 6 38 6c-5.5 0-10.3 3.1-12.7 7.7C24.2 13.3 23.1 13 22 13c-5.5 0-10 4.5-10 10 0 .3 0 .7.1 1C7.5 25.1 4 29.3 4 34c0 5.5 4.5 10 10 10h36c5.5 0 10-4.5 10-10 0-4.3-2.7-7.9-6.5-9.3.3-1.2.5-2.5.5-3.7-.5-1 0-1 -2-1z"
                        fill="url(#stormGradient)"
                      />
                      {/* 4 objects evenly spaced: rain, rain, lightning, rain */}
                      {/* Position 1: rain at x=16 */}
                      <path d="M16 48l-2 7" stroke="url(#stormGradient)" strokeWidth="2.5" strokeLinecap="round" />
                      {/* Position 2: rain at x=28 */}
                      <path d="M28 48l-2 7" stroke="url(#stormGradient)" strokeWidth="2.5" strokeLinecap="round" />
                      {/* Position 3: lightning at x=40 */}
                      <path
                        d="M40 42l-5 10h6l-8 16 4-12h-6l9-14z"
                        fill="#FBBF24"
                        stroke="#F59E0B"
                        strokeWidth="1"
                      />
                      {/* Position 4: rain at x=52 */}
                      <path d="M52 48l-2 7" stroke="url(#stormGradient)" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    <span className="text-xs text-slate-400 uppercase tracking-wider">uforutsigbar etterspørsel</span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3B82F6]/10 to-[#06B6D4]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#0EA5E9]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-medium text-slate-800 mb-2">Blind navigering</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Ingen vet når neste store mulighet kommer og rekker sjeldent å delta. Selgere jakter i blinde. Strategier bygges på magefølelse.
                </p>
              </div>
            </div>
          </div>

          {/* Weather metaphor transition - matching site's dark sections */}
          <div className="relative rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-10 overflow-hidden">
            {/* Subtle gradient overlay matching site branding */}
            <div className="absolute inset-0 opacity-20">
              <div
                className="absolute top-0 left-1/4 w-48 h-48 rounded-full blur-3xl"
                style={{ background: 'linear-gradient(135deg, rgb(59, 130, 246), rgb(6, 182, 212))' }}
              />
              <div
                className="absolute bottom-0 right-1/4 w-56 h-56 rounded-full blur-3xl"
                style={{ background: 'linear-gradient(135deg, rgb(14, 165, 233), rgb(59, 130, 246))' }}
              />
            </div>

            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center lg:text-left">
                <p
                  className="text-sm uppercase tracking-widest mb-3 bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, rgb(59, 130, 246), rgb(14, 165, 233), rgb(6, 182, 212))',
                  }}
                >
                  Løsningen
                </p>
                <h3 className="text-2xl md:text-3xl font-medium text-white mb-4">
                  Hva om du kunne se hvor det skal{' '}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage: 'linear-gradient(90deg, rgb(59, 130, 246), rgb(14, 165, 233), rgb(6, 182, 212))',
                    }}
                  >
                    regne penger
                  </span>{' '}
                  neste kvartal?
                </h3>
                <p className="text-slate-400 text-lg max-w-xl">
                  Winly gir deg værvarsel for omsetning. Se kommende muligheter på kartet før de dukker opp – slik at du kan posisjonere deg i tide.
                </p>
              </div>

              <div className="flex-shrink-0">
                <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-white/5 backdrop-blur border border-white/10">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, rgb(59, 130, 246), rgb(6, 182, 212))' }}
                  >
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Winly varsler først</p>
                    <p className="text-slate-400 text-sm">Kvartaler før utlysning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
