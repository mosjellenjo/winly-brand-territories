export function ValuePropsTruthEngineV4() {
  const valueProps = [
    {
      title: 'Ett univers',
      description: 'Hele det norske B2B-markedet samlet på ett sted. Organisasjoner, roller, eierskap, anbud og historikk – koblet i én struktur.',
    },
    {
      title: 'Tydelige koblinger',
      description: 'Se sammenhenger mellom selskaper, personer, konsernstrukturer og offentlige anbud. Slipper leting i mange systemer.',
    },
    {
      title: 'Bedre prioritering',
      description: 'Bygg målgrupper basert på faktiske data. Prioriter innsatsen mot riktige selskaper og riktige personer.',
    },
  ]

  return (
    <section className="relative bg-[#0B1120] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Hvorfor selskaper velger Winly
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {valueProps.map((prop, index) => (
            <div
              key={index}
              className="group relative rounded-xl border border-white/[0.06] bg-[#0F172A]/50 p-6 transition-all duration-300 hover:border-cyan-500/30 hover:bg-[#0F172A]"
            >
              {/* Number badge */}
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border border-cyan-500/20">
                <span className="text-sm font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {index + 1}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">
                {prop.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
