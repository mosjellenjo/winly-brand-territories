'use client'

export function GetStartedSectionV1() {
  return (
    <section id="demo" className="py-20 md:py-28 bg-gradient-to-br from-[var(--cloud-blue)] via-[var(--cloud-blue-deep)] to-[var(--cloud-blue)]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: CTA content */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              Se hvordan værkartet ditt ser ut
            </h2>
            <p className="mt-4 text-lg text-blue-100 opacity-90">
              Få en personlig demo av Winly og se hvordan du kan forutse neste mulighet i din bransje.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--cloud-blue-deep)] text-lg font-medium rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
              >
                Start gratis prøveperiode
                <ArrowRightIcon className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white text-lg font-medium rounded-xl border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all"
              >
                Snakk med oss
              </a>
            </div>

            {/* Trust elements */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-blue-100">
                <CheckIcon className="w-5 h-5" />
                <span className="text-sm">Ingen kredittkort</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100">
                <CheckIcon className="w-5 h-5" />
                <span className="text-sm">14 dagers prøveperiode</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100">
                <CheckIcon className="w-5 h-5" />
                <span className="text-sm">Full tilgang til alle funksjoner</span>
              </div>
            </div>
          </div>

          {/* Right: Device mockup placeholder */}
          <div className="relative">
            <div className="relative">
              {/* Desktop mockup */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Browser chrome */}
                <div className="bg-slate-100 px-4 py-3 flex items-center gap-2 border-b border-slate-200">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="bg-white rounded-md px-4 py-1 text-sm text-slate-500 border border-slate-200">
                      app.winly.no/varkart
                    </div>
                  </div>
                </div>

                {/* Screen content placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-slate-50 to-blue-50 p-6 flex items-center justify-center">
                  <div className="text-center">
                    <WeatherMapPreview />
                    <p className="mt-4 text-sm text-[var(--cloud-text-muted)]">
                      Værkart-dashboard preview
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile mockup overlay */}
              <div className="absolute -bottom-8 -right-8 w-32 md:w-40 bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-white">
                <div className="bg-slate-900 px-2 py-1 flex justify-center">
                  <div className="w-12 h-1 rounded-full bg-slate-700" />
                </div>
                <div className="aspect-[9/16] bg-gradient-to-br from-slate-50 to-blue-50 p-2 flex items-center justify-center">
                  <MobileMapIcon className="w-12 h-12 text-[var(--cloud-blue)]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-10 border-t border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white">
              <span className="text-2xl font-semibold">Winly</span>
              <p className="mt-2 text-blue-100 text-sm">Norges første værkart for B2B-muligheter</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">
                Produkter
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">
                Priser
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">
                Om oss
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">
                Kontakt
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">
                Personvern
              </a>
            </div>
          </div>
          <p className="mt-8 text-center text-blue-200 text-sm">&copy; 2024 Winly. Alle rettigheter reservert.</p>
        </footer>
      </div>
    </section>
  )
}

function WeatherMapPreview() {
  return (
    <div className="relative w-48 h-36">
      {/* Simplified Norway with data indicators */}
      <svg viewBox="0 0 200 150" className="w-full h-full">
        {/* Norway outline */}
        <path
          d="M100,10 L115,25 L120,50 L125,80 L120,110 L115,130 L100,145 L85,130 L80,110 L75,80 L80,50 L85,25 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-[var(--cloud-blue)]/30"
        />

        {/* Data intensity circles */}
        <circle cx="100" cy="60" r="15" fill="currentColor" className="text-[var(--cloud-orange)]/30" />
        <circle cx="85" cy="90" r="10" fill="currentColor" className="text-[var(--cloud-blue)]/30" />
        <circle cx="110" cy="100" r="8" fill="currentColor" className="text-[var(--cloud-orange)]/20" />

        {/* Data points */}
        <circle cx="100" cy="60" r="4" fill="currentColor" className="text-[var(--cloud-orange)]" />
        <circle cx="85" cy="90" r="3" fill="currentColor" className="text-[var(--cloud-blue)]" />
        <circle cx="110" cy="100" r="3" fill="currentColor" className="text-[var(--cloud-orange)]" />
      </svg>

      {/* Cloud decorations */}
      <div className="absolute top-2 left-4">
        <CloudIcon className="w-8 h-8 text-slate-300" />
      </div>
      <div className="absolute top-6 right-6">
        <CloudIcon className="w-6 h-6 text-slate-200" />
      </div>
    </div>
  )
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function CloudIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
    </svg>
  )
}

function MobileMapIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
    </svg>
  )
}
