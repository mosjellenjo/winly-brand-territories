export function HeroTruthEngineV1() {
  return (
    <section className="bg-truth2-bg py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-center lg:gap-16">
          {/* Text Column */}
          <div className="md:col-span-6 lg:col-span-5">
            <p className="text-xs font-medium uppercase tracking-widest text-truth2-accent">
              Norsk B2B-data
            </p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-truth2-text sm:text-4xl lg:text-5xl">
              Winly – Alt du trenger for å finne, forstå og vinne norske B2B-kunder.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-truth2-muted">
              Det mest komplette og sammenkoblede universet av bedrifts-, person- og anbudsdata i Norge.
            </p>

            <ul className="mt-8 space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-truth2-accent" />
                <span className="text-truth2-text">
                  Finn riktige selskaper og segmenter raskere
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-truth2-accent" />
                <span className="text-truth2-text">
                  Se sammenhenger mellom roller, eiere og anbud
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-truth2-accent" />
                <span className="text-truth2-text">
                  Bygg målgrupper og prioriter innsatsen bedre
                </span>
              </li>
            </ul>

            <div className="mt-10">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-truth2-accent px-6 py-3 text-sm font-medium text-slate-900 transition-colors hover:bg-truth2-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-truth2-accent focus-visible:ring-offset-2 focus-visible:ring-offset-truth2-bg"
              >
                Start 14 dagers gratis prøve
              </a>
            </div>
          </div>

          {/* Visual Column - Data Map */}
          <div className="md:col-span-6 lg:col-span-7">
            <div className="rounded-md border border-truth2-border bg-truth2-panel p-6">
              <p className="mb-4 text-xs font-medium uppercase tracking-wide text-truth2-muted">
                Sammenkoblet datamodell
              </p>

              {/* Data Map Visualization */}
              <div className="relative min-h-[320px] rounded border border-truth2-border bg-truth2-bg p-4">
                {/* Grid Lines */}
                <div className="absolute inset-4 grid grid-cols-4 gap-px opacity-20">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="border-l border-truth2-border" />
                  ))}
                </div>
                <div className="absolute inset-4 grid grid-rows-4 gap-px opacity-20">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="border-t border-truth2-border" />
                  ))}
                </div>

                {/* Data Nodes */}
                <div className="relative z-10 flex h-full flex-col justify-between py-4">
                  {/* Row 1 */}
                  <div className="flex items-center justify-around">
                    <DataNode label="Organisasjon" active />
                    <ConnectionLine />
                    <DataNode label="Eierskap" />
                    <ConnectionLine />
                    <DataNode label="Konsern" />
                  </div>

                  {/* Vertical Connectors */}
                  <div className="flex justify-around px-8">
                    <div className="h-8 w-px bg-truth2-accent/40" />
                    <div className="h-8 w-px bg-truth2-border" />
                    <div className="h-8 w-px bg-truth2-border" />
                  </div>

                  {/* Row 2 */}
                  <div className="flex items-center justify-around">
                    <DataNode label="Roller" />
                    <ConnectionLine active />
                    <DataNode label="Økonomi" />
                    <ConnectionLine />
                    <DataNode label="Anbud" active />
                  </div>

                  {/* Vertical Connectors */}
                  <div className="flex justify-around px-8">
                    <div className="h-8 w-px bg-truth2-border" />
                    <div className="h-8 w-px bg-truth2-border" />
                    <div className="h-8 w-px bg-truth2-accent/40" />
                  </div>

                  {/* Row 3 */}
                  <div className="flex items-center justify-around">
                    <DataNode label="Bransje" />
                    <ConnectionLine />
                    <DataNode label="Historikk" />
                    <ConnectionLine />
                    <DataNode label="Signaler" />
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
      className={`flex h-12 w-20 items-center justify-center rounded border text-xs font-medium transition-all ${
        active
          ? 'border-truth2-accent bg-truth2-accent/10 text-truth2-accent shadow-[0_0_20px_rgba(56,189,248,0.2)]'
          : 'border-truth2-border bg-truth2-panel text-truth2-muted hover:border-truth2-accent/50'
      }`}
    >
      {label}
    </div>
  )
}

function ConnectionLine({ active = false }: { active?: boolean }) {
  return (
    <div
      className={`h-px w-6 ${active ? 'bg-truth2-accent/60' : 'bg-truth2-border'}`}
    />
  )
}
