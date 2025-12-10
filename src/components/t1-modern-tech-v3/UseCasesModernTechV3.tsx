interface UseCase {
  title: string;
  description: string;
  accent: "cyan" | "purple" | "mixed";
}

const useCases: UseCase[] = [
  {
    title: "Salgsteam",
    description:
      "Identifiser organisasjoner som matcher ICP-en deres. Prioriter innsats basert på reell innsikt.",
    accent: "cyan",
  },
  {
    title: "Markedsteam",
    description:
      "Bygg målgrupper basert på virkelige data, ikke hypotetiske personaer.",
    accent: "purple",
  },
  {
    title: "Konsulenter & byråer",
    description:
      "Analyser markeder, kartlegg muligheter og lag anbefalinger basert på fakta.",
    accent: "mixed",
  },
];

export function UseCasesModernTechV3() {
  return (
    <section className="py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Title – larger like v1 */}
        <h2 className="text-center text-3xl font-bold text-[#F5F7FA] md:text-4xl">
          Hvordan norske team bruker Winly
        </h2>

        {/* Use case cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              className="group relative overflow-hidden rounded-xl border border-slate-800 bg-[#0B0F14] p-8 transition-all hover:border-slate-700"
            >
              {/* Top neon stripe – v1 inspired */}
              <div
                className={`absolute inset-x-0 top-0 h-[3px] ${
                  useCase.accent === "cyan"
                    ? "bg-gradient-to-r from-transparent via-[#4DF3FF] to-transparent"
                    : useCase.accent === "purple"
                      ? "bg-gradient-to-r from-transparent via-[#B875FF] to-transparent"
                      : "bg-gradient-to-r from-[#4DF3FF]/60 via-[#8B94FF] to-[#B875FF]/60"
                }`}
              />

              {/* Subtle outer glow on hover */}
              <div
                className={`pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity group-hover:opacity-100 ${
                  useCase.accent === "cyan"
                    ? "shadow-[0_0_25px_rgba(77,243,255,0.08)]"
                    : useCase.accent === "purple"
                      ? "shadow-[0_0_25px_rgba(184,117,255,0.08)]"
                      : "shadow-[0_0_25px_rgba(139,148,255,0.08)]"
                }`}
              />

              {/* Content */}
              <div className="relative">
                {/* Number badge with glow */}
                <div
                  className={`mb-6 inline-flex h-9 w-9 items-center justify-center rounded-lg border font-mono text-sm ${
                    useCase.accent === "cyan"
                      ? "border-[#4DF3FF]/30 bg-[#4DF3FF]/10 text-[#4DF3FF]"
                      : useCase.accent === "purple"
                        ? "border-[#B875FF]/30 bg-[#B875FF]/10 text-[#B875FF]"
                        : "border-slate-700 bg-slate-800/50 text-slate-400"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[#F5F7FA]">
                  {useCase.title}
                </h3>

                {/* Description */}
                <p className="mt-4 leading-relaxed text-slate-400">
                  {useCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
