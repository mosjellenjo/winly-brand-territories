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

export function UseCasesModernTech() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold text-[#F5F7FA] md:text-4xl">
          Hvordan norske team bruker Winly
        </h2>

        {/* Use case cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              className="group relative overflow-hidden rounded-xl border border-slate-800 bg-[#0B0F14] p-8 transition-all hover:border-slate-700"
            >
              {/* Top gradient accent */}
              <div
                className={`absolute inset-x-0 top-0 h-px ${
                  index === 0
                    ? "bg-gradient-to-r from-transparent via-[#4DF3FF] to-transparent"
                    : index === 1
                      ? "bg-gradient-to-r from-transparent via-[#B875FF] to-transparent"
                      : "bg-gradient-to-r from-transparent via-[#4DF3FF] to-transparent"
                }`}
              />

              {/* Icon placeholder */}
              <div
                className={`mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-slate-800 ${
                  index === 0
                    ? "bg-[#4DF3FF]/10"
                    : index === 1
                      ? "bg-[#B875FF]/10"
                      : "bg-[#4DF3FF]/10"
                }`}
              >
                <div
                  className={`h-3 w-3 rounded-full ${
                    index === 0
                      ? "bg-[#4DF3FF]"
                      : index === 1
                        ? "bg-[#B875FF]"
                        : "bg-[#4DF3FF]"
                  }`}
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-[#F5F7FA]">
                {useCase.title}
              </h3>
              <p className="mt-4 leading-relaxed text-[#94A3B8]">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
