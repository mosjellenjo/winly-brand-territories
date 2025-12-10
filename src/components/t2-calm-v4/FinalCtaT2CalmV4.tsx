import { Calm4Container, MeshBackground, PremiumCtaButton, WarmLayeredCard } from './base'

export function FinalCtaT2CalmV4() {
  return (
    <section className="relative bg-gradient-to-b from-calm4-sand-deep to-calm4-sand-light py-24 lg:py-32 overflow-hidden">
      <MeshBackground variant="cta" />

      {/* Spotlight effect */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 100% 100% at 50% 50%,
              rgba(201, 215, 197, 0.25) 0%,
              rgba(252, 250, 248, 0.1) 40%,
              transparent 70%
            )
          `
        }}
      />

      <Calm4Container>
        <div className="relative mx-auto max-w-3xl">
          <WarmLayeredCard className="p-10 lg:p-14 text-center" elevated>
            {/* Decorative top accent */}
            <div className="absolute inset-x-8 top-0 h-1.5 rounded-b-full bg-gradient-to-r from-calm4-green-soft via-calm4-green-deep to-calm4-green-soft" />

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold tracking-tight text-calm4-text sm:text-4xl">
                  Klar for ett samlet bilde av det norske B2B-markedet?
                </h2>

                <p className="text-lg leading-relaxed text-calm4-muted max-w-xl mx-auto">
                  Prøv Winly gratis og opplev hvordan et samlet datagrunnlag kan gjøre jobben din enklere.
                </p>
              </div>

              <PremiumCtaButton href="/signup">
                Start 14 dagers gratis prøve
              </PremiumCtaButton>

              {/* Trust indicators */}
              <div className="flex items-center justify-center gap-6 pt-4 text-sm text-calm4-muted">
                <span className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-calm4-green-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  14 dager gratis
                </span>
                <span className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-calm4-green-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Ingen binding
                </span>
              </div>
            </div>
          </WarmLayeredCard>
        </div>
      </Calm4Container>
    </section>
  )
}
