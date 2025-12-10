export function SocialProofTruthEngineV2() {
  const audiences = [
    {
      tag: 'Ledelse',
      title: 'Ledelse',
      bullets: [
        'Oversikt over markedet og strategiske muligheter',
        'Ett felles faktagrunnlag for beslutninger',
      ],
    },
    {
      tag: 'Analyse',
      title: 'Analytikere & konsulenter',
      bullets: [
        'Strukturert datamodell som grunnlag for analyser',
        'Tydelige kilder og dokumentasjon',
      ],
    },
    {
      tag: 'Kommersielt',
      title: 'Kommersielle team',
      bullets: [
        'Prioriter innsats basert på faktiske forhold',
        'Felles plattform for salg og marked',
      ],
    },
  ]

  return (
    <section className="border-t border-slate-800/50 bg-[#0A0E17] py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold tracking-tight text-[#F1F5F9] md:text-3xl">
            Bygget for team som jobber datadrevet
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-400">
            Winly brukes av B2B-selskaper, konsulenter og voksende kommersielle team som trenger ett samlet bilde av norske organisasjoner.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="group border border-slate-800/70 bg-[#0B0F1A] p-5 transition-all hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]"
            >
              {/* Role tag */}
              <div className="inline-flex items-center border border-slate-700 bg-[#060A12] px-2.5 py-1 mb-4">
                <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-slate-500 group-hover:text-cyan-400/70 transition-colors">
                  {audience.tag}
                </span>
              </div>

              <h3 className="text-base font-semibold text-[#F1F5F9]">
                {audience.title}
              </h3>

              <ul className="mt-4 space-y-2.5">
                {audience.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 bg-cyan-400/60" />
                    <span className="text-xs leading-relaxed text-slate-400">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
