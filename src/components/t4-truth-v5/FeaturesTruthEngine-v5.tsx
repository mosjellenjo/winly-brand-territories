'use client'

export function FeaturesTruthEngineV5() {
  const features = [
    {
      title: 'Strukturert søk & filtrering',
      description:
        'Filtrer organisasjoner basert på bransje, størrelse, vekst, eierskap, roller, økonomi og historikk.',
      icon: <SearchFilterIcon />,
    },
    {
      title: 'Organisasjonsprofiler med sporbarhet',
      description:
        'Se datapunkter om organisasjoner samlet i én visning – med klare felt, beskrivelser og kilder.',
      icon: <ProfileIcon />,
    },
    {
      title: 'Rolle- og personinformasjon',
      description:
        'Få oversikt over nøkkelroller, styre og relasjoner mellom organisasjoner der data finnes.',
      icon: <PeopleIcon />,
    },
    {
      title: 'Lister & eksport',
      description:
        'Bygg datadrevne segmenter og eksporter dem til CSV når innsikten skal brukes videre i organisasjonen.',
      icon: <ExportIcon />,
    },
  ]

  return (
    <section className="relative bg-[#10131C] py-24 border-t border-white/[0.06]">
      <div className="px-5">
        <div className="mx-auto max-w-[1800px]">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-normal text-[#BAD7F5] tracking-tight">
              Funksjonalitet bygget for{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(90deg, rgb(68, 109, 205), rgb(75, 182, 211), rgb(110, 242, 204))',
                }}
              >
                beslutningsstøtte
              </span>
            </h2>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative rounded-xl border border-white/[0.06] bg-[#0F1219]/50 p-6 transition-all duration-300 hover:border-[#4BB6D3]/30 hover:bg-[#0F1219]"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-[#4BB6D3]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  {/* Icon */}
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#446DCD]/20 via-[#4BB6D3]/20 to-[#6EF2CC]/20 border border-[#4BB6D3]/20">
                    <div className="text-[#4BB6D3]">{feature.icon}</div>
                  </div>

                  <h3 className="text-lg font-medium text-[#BAD7F5] mb-2">{feature.title}</h3>
                  <p className="text-sm text-[#BAD7F5]/60 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SearchFilterIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  )
}

function ProfileIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    </svg>
  )
}

function PeopleIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
      />
    </svg>
  )
}

function ExportIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
      />
    </svg>
  )
}
