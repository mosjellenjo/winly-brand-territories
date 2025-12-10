export function FeaturesTruthEngineV4() {
  const features = [
    {
      title: 'Søk & segmentering',
      description: 'Filtrer norske organisasjoner basert på bransje, størrelse, geografi, eierskap, anbud og signaler. Bygg lister du kan jobbe videre med.',
      icon: SearchIcon,
    },
    {
      title: 'Organisasjonsprofiler',
      description: 'Se nøkkeltall, bransje, historikk, eierskap og anbud samlet i én visning. Sporbare felter med dokumenterte kilder.',
      icon: ProfileIcon,
    },
    {
      title: 'Rolle- og kontaktinformasjon',
      description: 'Oversikt over nøkkelroller, styre og relasjoner mellom organisasjoner der data finnes.',
      icon: UsersIcon,
    },
    {
      title: 'Lister & eksport',
      description: 'Bygg segmenter basert på kriterier og eksporter til CSV når innsikten skal brukes videre.',
      icon: ExportIcon,
    },
  ]

  return (
    <section className="relative bg-[#0B1120] py-20 border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-medium uppercase tracking-wider bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-3">
            Funksjonalitet
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Det Winly gjør
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-xl border border-white/[0.06] bg-[#0F172A]/50 p-6 transition-all duration-300 hover:border-cyan-500/30 hover:bg-[#0F172A]"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border border-cyan-500/20 group-hover:border-cyan-500/40 transition-colors">
                  <feature.icon />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
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

function SearchIcon() {
  return (
    <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  )
}

function ProfileIcon() {
  return (
    <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
    </svg>
  )
}

function UsersIcon() {
  return (
    <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  )
}

function ExportIcon() {
  return (
    <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
    </svg>
  )
}
