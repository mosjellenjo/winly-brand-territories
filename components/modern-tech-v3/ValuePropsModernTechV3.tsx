interface ValueProp {
  title: string;
  description: string;
  accent: "cyan" | "purple" | "gradient";
}

const valueProps: ValueProp[] = [
  {
    title: "Hastighet",
    description:
      "Bygg og filtrer segmenter raskt – på tvers av bransje, størrelse, geografi, eierskap og historikk.",
    accent: "cyan",
  },
  {
    title: "Dybde",
    description:
      "Ett samlet bilde av organisasjoner: roller, eiere, nøkkeltall, historikk og anbudsaktivitet.",
    accent: "purple",
  },
  {
    title: "Sammenheng",
    description:
      "Winly kobler datapunkter på tvers av kilder til én konsistent modell. Alt henger sammen.",
    accent: "gradient",
  },
];

export function ValuePropsModernTechV3() {
  return (
    <section className="py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Title – larger like v1 */}
        <h2 className="text-center text-3xl font-bold text-[#F5F7FA] md:text-4xl">
          Hvorfor moderne team velger Winly
        </h2>

        {/* Value props grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
          {valueProps.map((prop) => (
            <div
              key={prop.title}
              className="group relative overflow-hidden rounded-xl border border-slate-800 bg-[#0B0F14] p-8 transition-all hover:border-slate-700"
            >
              {/* Top neon stripe – v1 inspired */}
              <div
                className={`absolute inset-x-0 top-0 h-[3px] ${
                  prop.accent === "cyan"
                    ? "bg-gradient-to-r from-[#4DF3FF]/80 via-[#4DF3FF] to-[#4DF3FF]/80"
                    : prop.accent === "purple"
                      ? "bg-gradient-to-r from-[#B875FF]/80 via-[#B875FF] to-[#B875FF]/80"
                      : "bg-gradient-to-r from-[#4DF3FF] via-[#8B94FF] to-[#B875FF]"
                }`}
              />

              {/* Subtle outer glow on card */}
              <div
                className={`pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity group-hover:opacity-100 ${
                  prop.accent === "cyan"
                    ? "shadow-[0_0_20px_rgba(77,243,255,0.1)]"
                    : prop.accent === "purple"
                      ? "shadow-[0_0_20px_rgba(184,117,255,0.1)]"
                      : "shadow-[0_0_20px_rgba(139,148,255,0.1)]"
                }`}
              />

              {/* Content */}
              <div className="relative">
                {/* Accent dot + title */}
                <div className="mb-5 flex items-center gap-3">
                  <div
                    className={`h-2.5 w-2.5 rounded-full shadow-lg ${
                      prop.accent === "cyan"
                        ? "bg-[#4DF3FF] shadow-[#4DF3FF]/50"
                        : prop.accent === "purple"
                          ? "bg-[#B875FF] shadow-[#B875FF]/50"
                          : "bg-gradient-to-r from-[#4DF3FF] to-[#B875FF]"
                    }`}
                  />
                  <h3 className="text-xl font-semibold text-[#F5F7FA]">
                    {prop.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="leading-relaxed text-slate-400">
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
