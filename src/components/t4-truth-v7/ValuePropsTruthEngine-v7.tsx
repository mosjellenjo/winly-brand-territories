'use client'

export function ValuePropsTruthEngineV7() {
  const valueProps = [
    {
      title: 'Ett univers',
      description:
        'Hele det norske B2B-markedet samlet på ett sted. Organisasjoner, roller, eierskap, anbud og historikk – koblet i én struktur.',
      icon: <UniverseIcon />,
    },
    {
      title: 'Tydelige koblinger',
      description:
        'Se sammenhenger mellom selskaper, personer, konsernstrukturer og offentlige anbud. Slipper leting i mange systemer.',
      icon: <ConnectionsIcon />,
    },
    {
      title: 'Bedre prioritering',
      description:
        'Bygg målgrupper basert på faktiske data. Prioriter innsatsen mot riktige selskaper og riktige personer.',
      icon: <PriorityIcon />,
    },
  ]

  return (
    <section className="relative bg-[#10131C] py-24">
      <div style={{ padding: '0 70px' }}>
        <div className="mx-auto" style={{ maxWidth: 'calc(100% - 140px)' }}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-normal text-[#F2F5FA] tracking-tight">
              Hvorfor selskaper velger Winly
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {valueProps.map((prop, index) => (
              <div
                key={index}
                className="group relative rounded-xl border border-white/[0.06] bg-[#0F1219]/50 p-8 transition-all duration-300 hover:border-[#4BB6D3]/30 hover:bg-[#0F1219]"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-[#4BB6D3]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#446DCD]/20 via-[#4BB6D3]/20 to-[#6EF2CC]/20 border border-[#4BB6D3]/20">
                    <div className="text-[#4BB6D3]">{prop.icon}</div>
                  </div>

                  <h3 className="text-xl font-medium text-[#F2F5FA] mb-3">{prop.title}</h3>
                  <p className="text-base text-[#BAD7F5]/60 leading-relaxed">{prop.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function UniverseIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  )
}

function ConnectionsIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
    </svg>
  )
}

function PriorityIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" />
    </svg>
  )
}
