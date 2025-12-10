import Link from 'next/link'

function Calm3Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
}

function EarthyCtaButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-calm3-cta-from to-calm3-cta-to px-7 py-3 text-sm font-medium text-calm3-bone shadow-md shadow-[rgba(0,0,0,0.12)] transition-all hover:translate-y-[1px] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-calm3-green-soft/70"
    >
      {children}
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </Link>
  )
}

function HeroVisual() {
  return (
    <div className="relative">
      {/* Background glow blobs */}
      <div className="absolute -left-8 -top-8 h-48 w-48 rounded-full bg-calm3-green-soft/30 blur-3xl" />
      <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-calm3-orange-soft/20 blur-3xl" />

      {/* Main container with gradient border effect */}
      <div className="relative overflow-hidden rounded-3xl border border-calm3-border bg-calm3-bone p-1 shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-calm3-green-soft/20 via-transparent to-calm3-orange-soft/10" />

        <div className="relative rounded-2xl bg-calm3-bone p-6 lg:p-8">
          {/* Mini-cards illustrating the product */}
          <div className="space-y-4">
            {/* Segment chips */}
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-calm3-green-soft px-3 py-1 text-xs font-medium text-calm3-green-deep">IT-konsulenter</span>
              <span className="rounded-full bg-calm3-orange-soft px-3 py-1 text-xs font-medium text-calm3-orange-deep">50-200 ansatte</span>
              <span className="rounded-full bg-calm3-sand-deep px-3 py-1 text-xs font-medium text-calm3-text">Oslo</span>
            </div>

            {/* Organization list preview */}
            <div className="space-y-2">
              {[
                { name: 'Norsk Tech AS', bransje: 'IT-konsulenter', ansatte: '124' },
                { name: 'Digital Solutions', bransje: 'Programvare', ansatte: '87' },
                { name: 'CloudNordic Group', bransje: 'Cloud-tjenester', ansatte: '156' },
              ].map((org, i) => (
                <div key={i} className="flex items-center justify-between rounded-xl border border-calm3-border bg-white p-3 shadow-sm transition-all hover:shadow-md">
                  <div>
                    <p className="text-sm font-medium text-calm3-text">{org.name}</p>
                    <p className="text-xs text-calm3-muted">{org.bransje}</p>
                  </div>
                  <span className="rounded-lg bg-calm3-sand px-2 py-1 text-xs text-calm3-muted">{org.ansatte} ansatte</span>
                </div>
              ))}
            </div>

            {/* Field labels */}
            <div className="flex gap-2 pt-2">
              <span className="flex items-center gap-1 text-xs text-calm3-muted">
                <span className="h-2 w-2 rounded-full bg-calm3-green-deep" />
                Organisasjon
              </span>
              <span className="flex items-center gap-1 text-xs text-calm3-muted">
                <span className="h-2 w-2 rounded-full bg-calm3-orange-deep" />
                Rolle
              </span>
              <span className="flex items-center gap-1 text-xs text-calm3-muted">
                <span className="h-2 w-2 rounded-full bg-calm3-clay" />
                Anbud
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function HeroT2CalmV3() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-calm3-sand-light to-calm3-sand py-24 lg:py-32">
      {/* Background radial gradient */}
      <div className="absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/4 rounded-full bg-gradient-radial from-calm3-sand/80 to-transparent blur-3xl" />

      <Calm3Container>
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-calm3-text sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
                Alt du trenger for å finne, forstå og vinne norske B2B-kunder.
              </h1>
              <p className="text-xl leading-relaxed text-calm3-muted">
                Det mest komplette og sammenkoblede universet av bedrifts-, person- og anbudsdata i Norge.
              </p>
            </div>

            <div>
              <EarthyCtaButton href="/signup">
                Start 14 dagers gratis prøve
              </EarthyCtaButton>
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <HeroVisual />
          </div>
        </div>
      </Calm3Container>
    </section>
  )
}
