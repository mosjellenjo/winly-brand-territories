export function SocialProofTruthEngineV3() {
  const audiences = [
    {
      icon: '🎯',
      title: 'Ledelse',
      description: 'Oversikt over markedet og strategiske muligheter. Ett felles faktagrunnlag for beslutninger.',
    },
    {
      icon: '📊',
      title: 'Analytikere & konsulenter',
      description: 'Strukturert datamodell som grunnlag for analyser. Tydelige kilder og dokumentasjon.',
    },
    {
      icon: '🚀',
      title: 'Kommersielle team',
      description: 'Prioriter innsats basert på faktiske forhold. Felles plattform for salg og marked.',
    },
  ]

  return (
    <section className="bg-[#0C0D12] py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Bygget for team som jobber datadrevet
          </h2>
          <p className="mt-4 text-[#8B8B9E] max-w-2xl mx-auto">
            Winly brukes av B2B-selskaper, konsulenter og voksende kommersielle team som trenger ett samlet bilde av norske organisasjoner.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-white/[0.06] bg-[#12141A] p-6 transition-all duration-300 hover:border-orange-500/30 hover:bg-[#16181F]"
            >
              <div className="text-2xl mb-4">{audience.icon}</div>
              <h3 className="text-base font-semibold text-white mb-2">
                {audience.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#8B8B9E]">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
