interface ValueProp {
  title: string;
  description: string;
  accent: "cyan" | "purple" | "gradient";
}

const valueProps: ValueProp[] = [
  {
    title: "Hastighet",
    description:
      "Bygg og filtrer segmenter raskt på tvers av bransje, størrelse, geografi, eierskap og historikk.",
    accent: "cyan",
  },
  {
    title: "Dybde",
    description:
      "Se organisasjoner, roller, eiere, nøkkeltall, historikk og anbud koblet i ett system.",
    accent: "purple",
  },
  {
    title: "Sammenheng",
    description:
      "Forstå hvordan selskaper henger sammen på tvers av roller, konsern og eierskap.",
    accent: "gradient",
  },
];

export function ValuePropsModernTechV4() {
  return (
    <section className="py-28 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-center text-3xl font-bold text-[#F5F7FA] md:text-4xl lg:text-[2.75rem]">
          Hvorfor norske B2B-team velger Winly
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
          {valueProps.map((prop) => (
            <div
              key={prop.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-[#0A0D12] p-8 transition-all hover:border-slate-700 md:p-10"
            >
              <div
                className={`absolute inset-x-0 top-0 h-[4px] ${
                  prop.accent === "cyan"
                    ? "bg-gradient-to-r from-[#4DF3FF]/90 via-[#4DF3FF] to-[#4DF3FF]/90"
                    : prop.accent === "purple"
                      ? "bg-gradient-to-r from-[#B875FF]/90 via-[#B875FF] to-[#B875FF]/90"
                      : "bg-gradient-to-r from-[#4DF3FF] via-[#8B94FF] to-[#B875FF]"
                }`}
              />

              <div
                className={`pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100 ${
                  prop.accent === "cyan"
                    ? "bg-[#4DF3FF]/[0.02]"
                    : prop.accent === "purple"
                      ? "bg-[#B875FF]/[0.02]"
                      : "bg-gradient-to-br from-[#4DF3FF]/[0.02] to-[#B875FF]/[0.02]"
                }`}
              />

              <div className="relative">
                <div className="mb-6 flex items-center gap-3">
                  <div
                    className={`h-3 w-3 rounded-full shadow-lg ${
                      prop.accent === "cyan"
                        ? "bg-[#4DF3FF] shadow-[#4DF3FF]/60"
                        : prop.accent === "purple"
                          ? "bg-[#B875FF] shadow-[#B875FF]/60"
                          : "bg-gradient-to-r from-[#4DF3FF] to-[#B875FF]"
                    }`}
                  />
                  <h3 className="text-xl font-semibold text-[#F5F7FA]">
                    {prop.title}
                  </h3>
                </div>

                <p className="text-base leading-relaxed text-slate-400">
                  {prop.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
