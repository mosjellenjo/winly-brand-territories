export function SocialProofTruthEngineV1() {
  const audiences = [
    {
      title: 'Ledelse',
      description: 'CEO, COO og CCO som trenger oversikt over markedet og strategiske muligheter.',
    },
    {
      title: 'Analytikere & konsulenter',
      description: 'Datadrevne rådgivere som bygger analyser og anbefalinger på et strukturert grunnlag.',
    },
    {
      title: 'Kommersielle team',
      description: 'Salg og marked som prioriterer innsats basert på faktiske forhold i markedet.',
    },
  ]

  return (
    <section className="border-t border-truth2-border bg-truth2-bg-alt py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-truth2-text md:text-3xl">
            Bygget for team som jobber datadrevet
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-truth2-muted">
            Winly brukes av B2B-selskaper, konsulenter og voksende kommersielle team som trenger ett samlet bilde av norske organisasjoner.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="rounded-md border border-truth2-border bg-truth2-panel p-6 transition-all hover:border-truth2-accent/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.1)]"
            >
              <h3 className="text-base font-semibold text-truth2-text">
                {audience.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-truth2-muted">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
