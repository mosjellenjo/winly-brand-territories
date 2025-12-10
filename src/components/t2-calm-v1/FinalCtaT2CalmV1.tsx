import { CalmContainer, Section, PrimaryCtaButton } from '@/components/common'

export function FinalCtaT2CalmV1() {
  return (
    <Section className="bg-gradient-to-b from-calm-bg to-calm-surface">
      <CalmContainer>
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute inset-0 -z-10 mx-auto h-64 w-64 rounded-full bg-calm-accent-soft/10 blur-3xl" />

          <div className="space-y-8 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-calm-text sm:text-4xl">
              Klar for ett samlet bilde av det norske B2B-markedet?
            </h2>

            <p className="text-lg leading-relaxed text-calm-text-muted">
              Start en gratis prøveperiode og se hvordan Winly kan forenkle arbeidet med innsikt, prioritering og vekst.
            </p>

            <div>
              <PrimaryCtaButton href="/signup">
                Start 14 dagers gratis prøve
              </PrimaryCtaButton>
            </div>
          </div>
        </div>
      </CalmContainer>
    </Section>
  )
}
