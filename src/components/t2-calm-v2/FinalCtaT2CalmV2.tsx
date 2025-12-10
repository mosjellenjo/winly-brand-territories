import Link from 'next/link'

function Calm2Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
}

function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <section className={`py-20 lg:py-24 ${className}`}>{children}</section>
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

export function FinalCtaT2CalmV2() {
  return (
    <Section className="bg-gradient-to-b from-calm2-sand to-calm2-sand-dark">
      <Calm2Container>
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute inset-0 -z-10 mx-auto h-64 w-64 rounded-full bg-calm2-taupe/10 blur-3xl" />

          <div className="space-y-8 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-calm2-text sm:text-4xl">
              Klar for ett samlet bilde av det norske B2B-markedet?
            </h2>

            <p className="text-lg leading-relaxed text-calm2-text-muted">
              Start en gratis prøveperiode og se hvordan Winly kan forenkle arbeidet med innsikt, prioritering og vekst.
            </p>

            <div>
              <EarthyCtaButton href="/signup">
                Start 14 dagers gratis prøve
              </EarthyCtaButton>
            </div>
          </div>
        </div>
      </Calm2Container>
    </Section>
  )
}
