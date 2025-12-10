import Link from 'next/link'

function Calm5Container({ children }: { children: React.ReactNode }) {
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

export function FinalCtaT2CalmV5() {
  return (
    <section className="bg-gradient-to-b from-calm3-sand-deep to-calm3-sand-light py-24 lg:py-32">
      <Calm5Container>
        <div className="relative mx-auto max-w-3xl">
          {/* Background glow */}
          <div className="absolute inset-0 -z-10 mx-auto h-64 w-64 rounded-full bg-calm3-green-soft/20 blur-3xl" />

          {/* CTA Card */}
          <div className="rounded-3xl border border-calm3-border bg-white/80 p-8 shadow-[var(--shadow-calm3)] backdrop-blur-sm lg:p-12">
            <div className="space-y-8 text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-calm3-text sm:text-4xl">
                Klar for ett samlet bilde av det norske B2B-markedet?
              </h2>

              <p className="text-lg leading-relaxed text-calm3-muted">
                Prøv Winly gratis og opplev hvordan et samlet datagrunnlag kan gjøre jobben din enklere.
              </p>

              <div>
                <EarthyCtaButton href="/signup">
                  Start 14 dagers gratis prøve
                </EarthyCtaButton>
              </div>
            </div>
          </div>
        </div>
      </Calm5Container>
    </section>
  )
}
