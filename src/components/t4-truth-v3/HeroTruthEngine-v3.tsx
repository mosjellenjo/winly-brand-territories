export function HeroTruthEngineV3() {
  return (
    <section className="relative bg-[#08090D] pt-20 pb-16 lg:pt-28 lg:pb-24 overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/[0.02] via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Hero Header - Centered */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-orange-400 mb-4">
            Norsk B2B-dataunivers
          </p>
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Alt du trenger for å finne, forstå og vinne norske B2B-kunder.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[#8B8B9E]">
            Det mest komplette og sammenkoblede universet av bedrifts-, person- og anbudsdata i Norge.
          </p>

          <div className="mt-10">
            <a
              href="#"
              className="inline-flex items-center justify-center bg-orange-500 px-7 py-3.5 text-sm font-medium text-white rounded-full transition-all hover:bg-orange-400 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]"
            >
              Start 14 dagers gratis prøve
            </a>
          </div>
        </div>

        {/* Bento Grid - Data Visualization */}
        <div className="grid grid-cols-12 gap-3 lg:gap-4">
          {/* Large card - Data connections */}
          <div className="col-span-12 lg:col-span-7 group">
            <div className="h-full rounded-2xl border border-white/[0.06] bg-[#12141A] p-6 transition-all duration-300 hover:border-orange-500/30 hover:bg-[#16181F]">
              <div className="flex items-center gap-2 mb-5">
                <div className="h-2 w-2 rounded-full bg-orange-500" />
                <span className="text-[11px] font-medium uppercase tracking-wider text-[#8B8B9E]">
                  Sammenkoblet data
                </span>
              </div>

              {/* Data flow visualization */}
              <div className="relative h-[200px] flex items-center justify-center">
                <div className="flex items-center gap-4">
                  <WorkflowStep num="1" label="Selskaper" active />
                  <WorkflowArrow />
                  <WorkflowStep num="2" label="Roller" />
                  <WorkflowArrow />
                  <WorkflowStep num="3" label="Eierskap" />
                  <WorkflowArrow />
                  <WorkflowStep num="4" label="Anbud" />
                </div>
              </div>
            </div>
          </div>

          {/* Right column - stacked cards */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-3 lg:gap-4">
            {/* Top right card */}
            <div className="group flex-1 rounded-2xl border border-white/[0.06] bg-[#12141A] p-5 transition-all duration-300 hover:border-orange-500/30 hover:bg-[#16181F]">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-wider text-[#8B8B9E] mb-2">
                    Finn raskt
                  </p>
                  <p className="text-sm text-white/90">
                    Finn riktige selskaper og segmenter raskt
                  </p>
                </div>
                <div className="h-10 w-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <SearchIcon />
                </div>
              </div>
            </div>

            {/* Bottom right card */}
            <div className="group flex-1 rounded-2xl border border-white/[0.06] bg-[#12141A] p-5 transition-all duration-300 hover:border-orange-500/30 hover:bg-[#16181F]">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-wider text-[#8B8B9E] mb-2">
                    Se sammenhenger
                  </p>
                  <p className="text-sm text-white/90">
                    Se sammenhenger mellom roller, eiere og anbud
                  </p>
                </div>
                <div className="h-10 w-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <LinkIcon />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom row - two equal cards */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 group">
            <div className="h-full rounded-2xl border border-white/[0.06] bg-[#12141A] p-5 transition-all duration-300 hover:border-orange-500/30 hover:bg-[#16181F]">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-wider text-[#8B8B9E] mb-2">
                    Bygg målgrupper
                  </p>
                  <p className="text-sm text-white/90">
                    Bygg målgrupper og prioriter innsatsen smartere
                  </p>
                </div>
                <div className="h-10 w-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <TargetIcon />
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 sm:col-span-6 lg:col-span-4 group">
            <div className="h-full rounded-2xl border border-white/[0.06] bg-[#12141A] p-5 transition-all duration-300 hover:border-orange-500/30 hover:bg-[#16181F]">
              <p className="text-[11px] font-medium uppercase tracking-wider text-[#8B8B9E] mb-3">
                Datakilder
              </p>
              <div className="flex flex-wrap gap-2">
                <SourceBadge label="Brønnøysund" />
                <SourceBadge label="Enhetsregisteret" />
                <SourceBadge label="Doffin" />
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 group">
            <div className="h-full rounded-2xl border border-white/[0.06] bg-[#12141A] p-5 transition-all duration-300 hover:border-orange-500/30 hover:bg-[#16181F]">
              <p className="text-[11px] font-medium uppercase tracking-wider text-[#8B8B9E] mb-3">
                For hele teamet
              </p>
              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full bg-orange-500/20 border-2 border-[#12141A] flex items-center justify-center text-[10px] text-orange-400">S</div>
                <div className="h-8 w-8 rounded-full bg-orange-500/20 border-2 border-[#12141A] flex items-center justify-center text-[10px] text-orange-400">M</div>
                <div className="h-8 w-8 rounded-full bg-orange-500/20 border-2 border-[#12141A] flex items-center justify-center text-[10px] text-orange-400">A</div>
                <div className="h-8 w-8 rounded-full bg-[#1A1D26] border-2 border-[#12141A] flex items-center justify-center text-[10px] text-[#8B8B9E]">+</div>
              </div>
              <p className="mt-3 text-xs text-[#8B8B9E]">Salg, marked og analyse</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WorkflowStep({ num, label, active = false }: { num: string; label: string; active?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`h-12 w-12 rounded-xl flex items-center justify-center text-sm font-semibold transition-all ${
        active
          ? 'bg-orange-500 text-white shadow-[0_0_20px_rgba(249,115,22,0.4)]'
          : 'bg-[#1A1D26] text-[#8B8B9E] border border-white/[0.06]'
      }`}>
        {num}
      </div>
      <span className={`text-xs ${active ? 'text-orange-400' : 'text-[#8B8B9E]'}`}>{label}</span>
    </div>
  )
}

function WorkflowArrow() {
  return (
    <div className="flex items-center">
      <div className="w-8 h-px bg-gradient-to-r from-orange-500/40 to-white/10" />
      <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-white/20" />
    </div>
  )
}

function SourceBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#1A1D26] text-[10px] text-[#8B8B9E] border border-white/[0.06]">
      {label}
    </span>
  )
}

function SearchIcon() {
  return (
    <svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  )
}

function LinkIcon() {
  return (
    <svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
    </svg>
  )
}

function TargetIcon() {
  return (
    <svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}
