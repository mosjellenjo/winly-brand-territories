export function ValuePropsTruthEngineV3() {
  const valueProps = [
    {
      title: 'Ett univers',
      description:
        'Hele det norske B2B-markedet samlet på ett sted. Organisasjoner, roller, eierskap, anbud og historikk – koblet i én struktur.',
      visual: 'universe',
    },
    {
      title: 'Tydelige koblinger',
      description:
        'Se sammenhenger mellom selskaper, personer, konsernstrukturer og offentlige anbud. Slipper leting i mange systemer.',
      visual: 'connections',
    },
    {
      title: 'Bedre prioritering',
      description:
        'Bygg målgrupper basert på faktiske data. Prioriter innsatsen mot riktige selskaper og riktige personer.',
      visual: 'priority',
    },
  ]

  return (
    <section className="bg-[#08090D] py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Hvorfor selskaper velger Winly
          </h2>
        </div>

        {/* Bento-style asymmetric grid */}
        <div className="grid grid-cols-12 gap-4">
          {/* Large left card */}
          <div className="col-span-12 lg:col-span-7 group">
            <div className="h-full rounded-2xl border border-white/[0.06] bg-[#12141A] p-6 lg:p-8 transition-all duration-300 hover:border-orange-500/30 hover:bg-[#16181F]">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-8 w-8 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <span className="text-orange-400 text-lg">◉</span>
                </div>
                <h3 className="text-xl font-semibold text-white">{valueProps[0].title}</h3>
              </div>
              <p className="text-[#8B8B9E] leading-relaxed mb-6">
                {valueProps[0].description}
              </p>

              {/* Visual: Universe representation */}
              <div className="relative h-32 rounded-xl bg-[#0C0D12] border border-white/[0.04] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute -inset-8 rounded-full border border-orange-500/10 animate-pulse" />
                    <div className="absolute -inset-16 rounded-full border border-orange-500/5" />
                    <div className="h-4 w-4 rounded-full bg-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.6)]" />
                  </div>
                  {/* Orbiting dots */}
                  <div className="absolute top-1/4 left-1/4 h-2 w-2 rounded-full bg-white/30" />
                  <div className="absolute bottom-1/3 right-1/4 h-2 w-2 rounded-full bg-white/20" />
                  <div className="absolute top-1/2 right-1/3 h-1.5 w-1.5 rounded-full bg-white/25" />
                  <div className="absolute bottom-1/4 left-1/3 h-1.5 w-1.5 rounded-full bg-orange-400/40" />
                </div>
              </div>
            </div>
          </div>

          {/* Right column - two stacked cards */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-4">
            <div className="group flex-1 rounded-2xl border border-white/[0.06] bg-[#12141A] p-6 transition-all duration-300 hover:border-orange-500/30 hover:bg-[#16181F]">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-8 w-8 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <span className="text-orange-400">⟷</span>
                </div>
                <h3 className="text-lg font-semibold text-white">{valueProps[1].title}</h3>
              </div>
              <p className="text-sm text-[#8B8B9E] leading-relaxed">
                {valueProps[1].description}
              </p>

              {/* Mini connection visual */}
              <div className="mt-4 flex items-center gap-2">
                <div className="h-6 w-6 rounded-md bg-[#1A1D26] border border-white/[0.06]" />
                <div className="flex-1 h-px bg-gradient-to-r from-orange-500/40 via-orange-500/20 to-transparent" />
                <div className="h-6 w-6 rounded-md bg-[#1A1D26] border border-white/[0.06]" />
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-orange-500/40" />
                <div className="h-6 w-6 rounded-md bg-[#1A1D26] border border-white/[0.06]" />
              </div>
            </div>

            <div className="group flex-1 rounded-2xl border border-white/[0.06] bg-[#12141A] p-6 transition-all duration-300 hover:border-orange-500/30 hover:bg-[#16181F]">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-8 w-8 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <span className="text-orange-400">↑</span>
                </div>
                <h3 className="text-lg font-semibold text-white">{valueProps[2].title}</h3>
              </div>
              <p className="text-sm text-[#8B8B9E] leading-relaxed">
                {valueProps[2].description}
              </p>

              {/* Mini bar chart */}
              <div className="mt-4 flex items-end gap-1.5 h-8">
                <div className="flex-1 bg-[#1A1D26] rounded-sm h-[30%]" />
                <div className="flex-1 bg-[#1A1D26] rounded-sm h-[50%]" />
                <div className="flex-1 bg-orange-500/40 rounded-sm h-[80%]" />
                <div className="flex-1 bg-orange-500 rounded-sm h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
