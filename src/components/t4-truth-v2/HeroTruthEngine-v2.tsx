export function HeroTruthEngineV2() {
  return (
    <section className="relative bg-[#020617] py-20 lg:py-28 overflow-hidden">
      {/* Subtle grid lines */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, #06B6D4 1px, transparent 1px),
              linear-gradient(to bottom, #06B6D4 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-center lg:gap-16">
          {/* Text Column */}
          <div className="md:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
              Norsk B2B-dataunivers
            </p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#F1F5F9] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Winly – Alt du trenger for å finne, forstå og vinne norske B2B-kunder.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-slate-400">
              Det mest komplette og sammenkoblede universet av bedrifts-, person- og anbudsdata i Norge.
            </p>

            <ul className="mt-8 space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 flex-shrink-0 bg-cyan-400" />
                <span className="text-sm text-slate-300">
                  Finn riktige selskaper og segmenter raskt
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 flex-shrink-0 bg-cyan-400" />
                <span className="text-sm text-slate-300">
                  Se sammenhenger mellom roller, eiere og anbud
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 flex-shrink-0 bg-cyan-400" />
                <span className="text-sm text-slate-300">
                  Bygg målgrupper og prioriter innsatsen smartere
                </span>
              </li>
            </ul>

            <div className="mt-10">
              <a
                href="#"
                className="inline-flex items-center justify-center bg-cyan-400 px-6 py-3 text-sm font-medium text-slate-900 transition-all hover:bg-cyan-300"
              >
                Start 14 dagers gratis prøve
              </a>
            </div>
          </div>

          {/* Visual Column - Data Canvas */}
          <div className="md:col-span-7">
            <div className="relative">
              {/* Subtle cyan glow behind panel */}
              <div className="absolute -inset-1 bg-cyan-400/5 blur-xl" />

              <div className="relative border border-slate-800/70 bg-[#0B0F1A] p-6 transition-all hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]">
                {/* Panel header */}
                <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-800/50">
                  <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-slate-500">
                    Sammenkoblet datamodell
                  </p>
                  <div className="flex gap-1">
                    <span className="h-1.5 w-1.5 bg-slate-700" />
                    <span className="h-1.5 w-1.5 bg-slate-700" />
                    <span className="h-1.5 w-1.5 bg-cyan-400/60" />
                  </div>
                </div>

                {/* Noise overlay */}
                <div
                  className="absolute inset-0 opacity-[0.015] pointer-events-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                  }}
                />

                {/* Data Nodes Visualization */}
                <div className="relative min-h-[300px] border border-slate-800/50 bg-[#060A12] p-4">
                  {/* Scanline effect */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-[0.02]"
                    style={{
                      backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(6, 182, 212, 0.5) 3px, rgba(6, 182, 212, 0.5) 4px)',
                    }}
                  />

                  {/* Data Nodes Grid */}
                  <div className="relative z-10 flex h-full flex-col justify-between py-4">
                    {/* Row 1 */}
                    <div className="flex items-center justify-around">
                      <DataNode label="Selskaper" active />
                      <ConnectionLine />
                      <DataNode label="Eierskap" />
                      <ConnectionLine />
                      <DataNode label="Konsern" />
                    </div>

                    {/* Vertical Connectors */}
                    <div className="flex justify-around px-10 py-2">
                      <div className="h-8 w-px bg-gradient-to-b from-cyan-400/40 to-slate-800/30" />
                      <div className="h-8 w-px bg-slate-800/30" />
                      <div className="h-8 w-px bg-slate-800/30" />
                    </div>

                    {/* Row 2 */}
                    <div className="flex items-center justify-around">
                      <DataNode label="Roller" />
                      <ConnectionLine active />
                      <DataNode label="Hendelser" />
                      <ConnectionLine />
                      <DataNode label="Anbud" active />
                    </div>

                    {/* Vertical Connectors */}
                    <div className="flex justify-around px-10 py-2">
                      <div className="h-8 w-px bg-slate-800/30" />
                      <div className="h-8 w-px bg-slate-800/30" />
                      <div className="h-8 w-px bg-gradient-to-b from-slate-800/30 to-cyan-400/40" />
                    </div>

                    {/* Row 3 */}
                    <div className="flex items-center justify-around">
                      <DataNode label="Bransje" />
                      <ConnectionLine />
                      <DataNode label="Historikk" />
                      <ConnectionLine />
                      <DataNode label="Sektorer" />
                    </div>
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

function DataNode({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <div
      className={`flex h-10 w-[76px] items-center justify-center border text-[10px] font-medium tracking-wide transition-all ${
        active
          ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400'
          : 'border-slate-700 bg-[#0B0F1A] text-slate-500 hover:border-cyan-400/40 hover:text-slate-400'
      }`}
    >
      {label}
    </div>
  )
}

function ConnectionLine({ active = false }: { active?: boolean }) {
  return (
    <div className={`h-px w-5 ${active ? 'bg-cyan-400/50' : 'bg-slate-700/50'}`} />
  )
}
