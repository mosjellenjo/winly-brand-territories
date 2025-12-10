export function ValuePropsTruthEngineV2() {
  const valueProps = [
    {
      title: 'Ett univers',
      description:
        'Hele det norske B2B-markedet samlet på ett sted. Organisasjoner, roller, eierskap, anbud og historikk – koblet i én struktur.',
    },
    {
      title: 'Tydelige koblinger',
      description:
        'Se sammenhenger mellom selskaper, personer, konsernstrukturer og offentlige anbud. Slipper leting i mange systemer.',
    },
    {
      title: 'Bedre prioritering',
      description:
        'Bygg målgrupper basert på faktiske data. Prioriter innsatsen mot riktige selskaper og riktige personer.',
    },
  ]

  return (
    <section className="border-t border-slate-800/50 bg-[#020617] py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-[#F1F5F9] md:text-3xl">
          Hvorfor selskaper velger Winly
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {valueProps.map((prop, index) => (
            <div
              key={index}
              className="group border border-slate-800/70 bg-[#0B0F1A] p-6 transition-all hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]"
            >
              {/* Data badge */}
              <div className="mb-4 flex h-8 w-8 items-center justify-center border border-cyan-400/30 bg-cyan-400/5">
                <span className="text-xs font-semibold text-cyan-400">
                  {index + 1}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-[#F1F5F9]">
                {prop.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {prop.description}
              </p>

              {/* Mini chart placeholder - subtle visual element */}
              <div className="mt-5 flex items-end gap-0.5 h-6 opacity-30 group-hover:opacity-50 transition-opacity">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-cyan-400/40"
                    style={{ height: `${30 + ((i * 17) % 70)}%` }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
