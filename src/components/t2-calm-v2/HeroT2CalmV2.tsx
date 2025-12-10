import Link from 'next/link'

function Calm2Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
}

function EarthyCtaButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-calm2-accent to-calm2-accent-dark px-8 py-4 text-base font-medium text-calm2-bone shadow-lg shadow-calm2-clay/20 transition-all hover:shadow-xl hover:shadow-calm2-clay/30 hover:-translate-y-0.5"
    >
      {children}
    </Link>
  )
}

export function HeroT2CalmV2() {
  return (
    <section className="bg-calm2-sand py-24 lg:py-32">
      <Calm2Container>
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-calm2-text sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
                Alt du trenger for å finne, forstå og vinne norske B2B-kunder.
              </h1>
              <p className="text-xl leading-relaxed text-calm2-text-muted">
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
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-calm2-taupe/20 to-calm2-clay/10 rounded-3xl blur-2xl" />
              <div className="relative flex h-full min-h-[400px] items-center justify-center rounded-3xl border border-calm2-border bg-calm2-bone p-8 shadow-[var(--shadow-calm2)]">
                <p className="text-sm text-calm2-text-muted">Hero-visual placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </Calm2Container>
    </section>
  )
}
