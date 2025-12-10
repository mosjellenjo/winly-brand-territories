import { Calm4Container, MeshBackground, PremiumCtaButton, NanoPlaceholder } from './base'

function HeroVisual() {
  return (
    <div className="relative lg:ml-8">
      {/* Mesh gradient behind visual */}
      <div
        className="absolute -inset-8 -z-10 opacity-80"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 70% 60% at 60% 40%, rgba(201, 215, 197, 0.25) 0%, transparent 60%),
            radial-gradient(ellipse 50% 50% at 30% 70%, rgba(228, 194, 164, 0.15) 0%, transparent 50%)
          `
        }}
      />

      {/* Layered cards container */}
      <div className="relative">
        {/* Back card - rotated */}
        <div
          className="absolute -right-4 top-8 w-full rounded-3xl border border-calm4-border bg-calm4-sand p-6 shadow-[var(--shadow-calm4)]"
          style={{ transform: 'rotate(3deg)' }}
        >
          <div className="h-64 opacity-40" />
        </div>

        {/* Middle card - slight rotation */}
        <div
          className="absolute -right-2 top-4 w-full rounded-3xl border border-calm4-border bg-calm4-sand-light p-6 shadow-[var(--shadow-calm4-card)]"
          style={{ transform: 'rotate(1.5deg)' }}
        >
          <div className="h-64 opacity-60" />
        </div>

        {/* Main front card */}
        <div className="relative overflow-hidden rounded-3xl border border-calm4-border bg-calm4-bone shadow-[var(--shadow-calm4-lg)]">
          {/* Top glare */}
          <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />

          <div className="relative p-6 lg:p-8">
            {/* Segment chips */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="rounded-full bg-calm4-green-soft px-3.5 py-1.5 text-xs font-medium text-calm4-green-deep shadow-sm">
                IT-konsulenter
              </span>
              <span className="rounded-full bg-calm4-orange-soft px-3.5 py-1.5 text-xs font-medium text-calm4-orange-deep shadow-sm">
                50-200 ansatte
              </span>
              <span className="rounded-full bg-calm4-sand-deep px-3.5 py-1.5 text-xs font-medium text-calm4-text shadow-sm">
                Oslo
              </span>
            </div>

            {/* Organization list preview */}
            <div className="space-y-3">
              {[
                { name: 'Norsk Tech AS', bransje: 'IT-konsulenter', ansatte: '124' },
                { name: 'Digital Solutions', bransje: 'Programvare', ansatte: '87' },
                { name: 'CloudNordic Group', bransje: 'Cloud-tjenester', ansatte: '156' },
              ].map((org, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-2xl border border-calm4-border bg-white p-4 shadow-[var(--shadow-calm4-sm)] transition-all hover:shadow-[var(--shadow-calm4)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-calm4-green-soft/50">
                      <div className="h-2 w-2 rounded-full bg-calm4-green-deep" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-calm4-text">{org.name}</p>
                      <p className="text-xs text-calm4-muted">{org.bransje}</p>
                    </div>
                  </div>
                  <span className="rounded-xl bg-calm4-sand px-3 py-1 text-xs text-calm4-muted">
                    {org.ansatte} ansatte
                  </span>
                </div>
              ))}
            </div>

            {/* Field labels */}
            <div className="mt-6 flex gap-4 border-t border-calm4-border/50 pt-4">
              <span className="flex items-center gap-2 text-xs text-calm4-muted">
                <span className="h-2.5 w-2.5 rounded-full bg-calm4-green-deep" />
                Organisasjon
              </span>
              <span className="flex items-center gap-2 text-xs text-calm4-muted">
                <span className="h-2.5 w-2.5 rounded-full bg-calm4-orange-deep" />
                Rolle
              </span>
              <span className="flex items-center gap-2 text-xs text-calm4-muted">
                <span className="h-2.5 w-2.5 rounded-full bg-calm4-clay" />
                Anbud
              </span>
            </div>

            {/* NanoBanana illustration placeholder */}
            <NanoPlaceholder name="T2HeroIllustration" height="80px" className="mt-4" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function HeroT2CalmV4() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-calm4-sand-light to-calm4-sand py-24 lg:py-32">
      <MeshBackground variant="hero" />

      <Calm4Container>
        <div className="grid gap-12 lg:grid-cols-[1.1fr,1fr] lg:gap-16 lg:items-center">
          {/* Left content - asymmetric, slightly larger */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-calm4-text sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
                Alt du trenger for å finne, forstå og vinne norske B2B-kunder.
              </h1>
              <p className="text-xl leading-relaxed text-calm4-muted">
                Det mest komplette og sammenkoblede universet av bedrifts-, person- og anbudsdata i Norge.
              </p>
            </div>

            <PremiumCtaButton href="/signup">
              Start 14 dagers gratis prøve
            </PremiumCtaButton>
          </div>

          {/* Right visual - layered cards */}
          <div className="relative mt-8 lg:mt-0">
            <HeroVisual />
          </div>
        </div>
      </Calm4Container>
    </section>
  )
}
