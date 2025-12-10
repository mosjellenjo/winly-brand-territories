export function FinalCtaTruthEngineV3() {
  return (
    <section className="bg-[#0C0D12] py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Background glow effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />
          </div>

          {/* Content card */}
          <div className="relative rounded-3xl border border-white/[0.06] bg-[#12141A]/80 backdrop-blur-sm p-10 lg:p-14">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
                Klar for ett samlet bilde av det norske B2B-markedet?
              </h2>
              <p className="mt-6 text-[#8B8B9E] leading-relaxed">
                Start en gratis prøveperiode og se hvordan Winly kan forenkle arbeidet med innsikt, prioritering og vekst.
              </p>
              <div className="mt-10">
                <a
                  href="#"
                  className="inline-flex items-center justify-center bg-orange-500 px-8 py-4 text-sm font-medium text-white rounded-full transition-all hover:bg-orange-400 hover:shadow-[0_0_40px_rgba(249,115,22,0.5)]"
                >
                  Start 14 dagers gratis prøve
                </a>
              </div>

              {/* Trust indicators */}
              <div className="mt-10 pt-8 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-[#6B6B7E]">
                  <CheckCircle />
                  <span className="text-xs">Ingen kredittkort</span>
                </div>
                <div className="flex items-center gap-2 text-[#6B6B7E]">
                  <CheckCircle />
                  <span className="text-xs">Avbryt når som helst</span>
                </div>
                <div className="flex items-center gap-2 text-[#6B6B7E]">
                  <CheckCircle />
                  <span className="text-xs">Full tilgang i 14 dager</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CheckCircle() {
  return (
    <svg className="h-4 w-4 text-orange-500/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}
