function Calm3Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
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

export function SocialProofT2CalmV3() {
  return (
    <section className="bg-calm3-bone py-20 lg:py-24">
      <Calm3Container>
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative rounded-2xl border border-calm3-border bg-white p-8 shadow-[var(--shadow-calm3-card)] transition-all hover:translate-y-[2px] hover:shadow-[var(--shadow-calm3-card-hover)] hover:ring-1 hover:ring-calm3-green-soft/60"
              >
                {/* Green accent line */}
                <div className="absolute left-0 top-8 h-12 w-1 rounded-r-full bg-gradient-to-b from-calm3-green-deep to-calm3-green-soft" />

                <div className="absolute -top-3 left-8 text-5xl text-calm3-clay/40">"</div>
                <blockquote className="relative space-y-4 pl-4">
                  <p className="text-lg leading-relaxed text-calm3-text">
                    {testimonial.quote}
                  </p>
                  <footer className="text-sm text-calm3-muted">
                    <span className="font-medium text-calm3-text">{testimonial.author}</span>
                    <span className="mx-2 text-calm3-clay">·</span>
                    <span>{testimonial.company}</span>
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </Calm3Container>
    </section>
  )
}
