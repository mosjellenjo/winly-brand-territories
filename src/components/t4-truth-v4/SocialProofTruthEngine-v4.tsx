export function SocialProofTruthEngineV4() {
  const audiences = [
    {
      title: 'Ledelse',
      description: 'Oversikt over markedet og strategiske muligheter. Ett felles faktagrunnlag for beslutninger.',
    },
    {
      title: 'Analytikere & konsulenter',
      description: 'Strukturert datamodell som grunnlag for analyser. Tydelige kilder og dokumentasjon.',
    },
    {
      title: 'Kommersielle team',
      description: 'Prioriter innsats basert på faktiske forhold. Felles plattform for salg og marked.',
    },
  ]

  return (
    <section className="relative bg-[#0B1120] py-20 border-t border-white/[0.06]">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(56, 189, 248, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56, 189, 248, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Bygget for team som jobber datadrevet
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Winly brukes av B2B-selskaper, konsulenter og voksende kommersielle team som trenger ett samlet bilde av norske organisasjoner.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="group relative rounded-xl border border-white/[0.06] bg-[#0F172A]/50 p-6 transition-all duration-300 hover:border-cyan-500/30 hover:bg-[#0F172A]"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {audience.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {audience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
