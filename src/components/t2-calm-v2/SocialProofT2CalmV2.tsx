function Calm2Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
}

function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <section className={`py-20 lg:py-24 ${className}`}>{children}</section>
}

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

export function SocialProofT2CalmV2() {
  return (
    <Section className="bg-calm2-bone">
      <Calm2Container>
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative rounded-3xl border border-calm2-border bg-calm2-sand p-8 shadow-[var(--shadow-calm2-card)] transition-shadow hover:shadow-[var(--shadow-calm2-card-hover)]"
              >
                <div className="absolute -top-3 left-8 text-5xl text-calm2-taupe/40">"</div>
                <blockquote className="relative space-y-4">
                  <p className="text-lg leading-relaxed text-calm2-text">
                    {testimonial.quote}
                  </p>
                  <footer className="text-sm text-calm2-text-muted">
                    <span className="font-medium text-calm2-text">{testimonial.author}</span>
                    <span className="mx-2 text-calm2-taupe">·</span>
                    <span>{testimonial.company}</span>
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </Calm2Container>
    </Section>
  )
}
