import { CalmContainer, Section } from '@/components/common'

const testimonials = [
  {
    quote: 'Vi fikk en helt annen ro rundt tallene våre. Det ble mye enklere å bli enige om hvilke kunder vi faktisk skal prioritere.',
    author: 'Daglig leder',
    company: 'Konsulentselskap',
  },
  {
    quote: 'Tidligere satt vi med flere versjoner av «sannheten». Nå har vi ett sted vi ser først, og det sparer oss for mye tid og diskusjon.',
    author: 'Kommersiell leder',
    company: 'B2B SaaS',
  },
]

export function SocialProofT2CalmV1() {
  return (
    <Section className="bg-calm-surface">
      <CalmContainer>
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative rounded-2xl border border-calm-border bg-calm-bg/50 p-8"
              >
                <div className="absolute -top-3 left-8 text-5xl text-calm-accent-soft/30">"</div>
                <blockquote className="relative space-y-4">
                  <p className="text-lg leading-relaxed text-calm-text">
                    {testimonial.quote}
                  </p>
                  <footer className="text-sm text-calm-text-muted">
                    <span className="font-medium text-calm-text">{testimonial.author}</span>
                    <span className="mx-2">·</span>
                    <span>{testimonial.company}</span>
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </CalmContainer>
    </Section>
  )
}
