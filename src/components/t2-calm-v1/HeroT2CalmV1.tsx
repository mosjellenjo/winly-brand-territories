import { CalmContainer, PrimaryCtaButton } from '@/components/common'

export function HeroT2CalmV1() {
  return (
    <section className="bg-calm-bg py-20 lg:py-28">
      <CalmContainer>
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-calm-text sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
                Alt du trenger for å finne, forstå og vinne norske B2B-kunder.
              </h1>
              <p className="text-xl leading-relaxed text-calm-text-muted">
                Det mest komplette og sammenkoblede universet av bedrifts-, person- og anbudsdata i Norge.
              </p>
            </div>

            <div>
              <PrimaryCtaButton href="/signup">
                Start 14 dagers gratis prøve
              </PrimaryCtaButton>
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-calm-accent-soft/10 to-calm-accent/5 rounded-2xl blur-xl" />
              <div className="relative flex h-full min-h-[380px] items-center justify-center rounded-2xl border border-calm-border bg-calm-surface p-8 shadow-lg shadow-calm-text/5">
                <p className="text-sm text-calm-text-muted">Hero-visual placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </CalmContainer>
    </section>
  )
}
