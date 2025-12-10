import { Calm4Container, SoftDivider, WarmLayeredCard } from './base'

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

export function SocialProofT2CalmV4() {
  return (
    <section className="bg-calm4-bone py-20 lg:py-24">
      <Calm4Container>
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <WarmLayeredCard key={index} className="p-8" rotation={index === 0 ? -0.5 : 0.5}>
                {/* Vertical accent bar */}
                <div className="absolute left-0 top-8 bottom-8 w-1 rounded-r-full bg-gradient-to-b from-calm4-green-deep via-calm4-green-soft to-calm4-green-deep/30" />

                <blockquote className="relative pl-5 space-y-5">
                  {/* Quote mark */}
                  <span
                    className="absolute -top-2 left-4 text-6xl font-serif text-calm4-clay/30 select-none"
                    style={{ lineHeight: 1 }}
                  >
                    "
                  </span>

                  <p className="relative text-lg leading-relaxed text-calm4-text pt-4">
                    {testimonial.quote}
                  </p>

                  <footer className="flex items-center gap-3">
                    {/* Avatar placeholder */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-calm4-green-soft to-calm4-sand">
                      <span className="text-xs font-medium text-calm4-green-deep">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium text-calm4-text">{testimonial.author}</span>
                      <span className="mx-2 text-calm4-clay">·</span>
                      <span className="text-calm4-muted">{testimonial.company}</span>
                    </div>
                  </footer>
                </blockquote>
              </WarmLayeredCard>
            ))}
          </div>
        </div>

        <SoftDivider className="mt-16" />
      </Calm4Container>
    </section>
  )
}
