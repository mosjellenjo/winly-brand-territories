interface UseCase {
  title: string;
  description: string;
  accent: "cyan" | "purple" | "gradient";
}

const useCases: UseCase[] = [
  {
    title: "Salgsteam",
    description:
      "Identifiser selskaper som matcher ICP-en deres. Prioriter innsats basert på fakta.",
    accent: "cyan",
  },
  {
    title: "Markedsteam",
    description:
      "Bygg målgrupper basert på virkelige organisasjoner – ikke hypotetiske personaer.",
    accent: "purple",
  },
  {
    title: "Konsulenter & byråer",
    description:
      "Analyser markeder, kartlegg muligheter og bygg anbefalinger basert på faktagrunnlag.",
    accent: "gradient",
  },
];

export function UseCasesModernTechV4() {
  return (
    <section className="py-28 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-center text-3xl font-bold text-[#F5F7FA] md:text-4xl lg:text-[2.75rem]">
          Hvordan norske team bruker Winly
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-[#0A0D12] p-8 transition-all hover:border-slate-700 md:p-10"
            >
              <div
                className={`absolute inset-x-0 top-0 h-[4px] ${
                  useCase.accent === "cyan"
                    ? "bg-gradient-to-r from-transparent via-[#4DF3FF] to-transparent"
                    : useCase.accent === "purple"
                      ? "bg-gradient-to-r from-transparent via-[#B875FF] to-transparent"
                      : "bg-gradient-to-r from-[#4DF3FF]/70 via-[#8B94FF] to-[#B875FF]/70"
                }`}
              />

              <div
                className={`pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100 ${
                  useCase.accent === "cyan"
                    ? "bg-[#4DF3FF]/[0.02]"
                    : useCase.accent === "purple"
                      ? "bg-[#B875FF]/[0.02]"
                      : "bg-gradient-to-br from-[#4DF3FF]/[0.02] to-[#B875FF]/[0.02]"
                }`}
              />

              <div className="relative">
                <div
                  className={`mb-6 inline-flex h-10 w-10 items-center justify-center rounded-xl border font-mono text-sm font-semibold ${
                    useCase.accent === "cyan"
                      ? "border-[#4DF3FF]/40 bg-[#4DF3FF]/10 text-[#4DF3FF]"
                      : useCase.accent === "purple"
                        ? "border-[#B875FF]/40 bg-[#B875FF]/10 text-[#B875FF]"
                        : "border-slate-700 bg-slate-800/60 text-slate-400"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-xl font-semibold text-[#F5F7FA]">
                  {useCase.title}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-slate-400">
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
