interface UseCase {
  title: string;
  description: string;
}

const useCases: UseCase[] = [
  {
    title: "Salgsteam",
    description:
      "Identifiser organisasjoner som matcher ICP-en deres. Prioriter innsats basert på reell innsikt.",
  },
  {
    title: "Markedsteam",
    description:
      "Bygg målgrupper basert på virkelige data, ikke hypotetiske personaer.",
  },
  {
    title: "Konsulenter & byråer",
    description:
      "Analyser markeder, kartlegg muligheter og lag anbefalinger basert på fakta.",
  },
];

export function UseCasesModernTechV2() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Title */}
        <h2 className="text-center text-3xl font-semibold text-[#F5F7FA]">
          Hvordan norske team bruker Winly
        </h2>

        {/* Use case cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-3 md:gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              className="group relative rounded-lg border border-slate-800 bg-[#0B0F14]/80 p-6 transition-colors hover:border-slate-700"
            >
              {/* Top line accent */}
              <div
                className={`absolute inset-x-6 top-0 h-px ${
                  index === 0
                    ? "bg-gradient-to-r from-[#4DF3FF]/60 via-[#4DF3FF]/20 to-transparent"
                    : index === 1
                      ? "bg-gradient-to-r from-transparent via-[#B875FF]/40 to-transparent"
                      : "bg-gradient-to-r from-transparent via-[#4DF3FF]/20 to-[#4DF3FF]/60"
                }`}
              />

              {/* Number badge */}
              <div className="mb-5 inline-flex h-7 w-7 items-center justify-center rounded border border-slate-800 bg-slate-900/60 font-mono text-xs text-slate-500">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-[#F5F7FA]">
                {useCase.title}
              </h3>
              <p className="mt-3 leading-relaxed text-slate-400">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
