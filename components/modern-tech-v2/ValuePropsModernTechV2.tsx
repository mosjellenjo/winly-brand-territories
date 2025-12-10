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

export function ValuePropsModernTechV2() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Title */}
        <h2 className="text-center text-3xl font-semibold text-[#F5F7FA]">
          Hvorfor moderne team velger Winly
        </h2>

        {/* Value props grid */}
        <div className="mt-14 grid gap-5 md:grid-cols-3 md:gap-6">
          {valueProps.map((prop) => (
            <div
              key={prop.title}
              className="group relative rounded-lg border border-slate-800 bg-[#0B0F14]/80 p-6 transition-colors hover:border-slate-700"
            >
              {/* Top accent dot */}
              <div className="mb-5 flex items-center gap-3">
                <div
                  className={`h-2 w-2 rounded-full ${
                    prop.accent === "cyan"
                      ? "bg-[#4DF3FF]"
                      : prop.accent === "purple"
                        ? "bg-[#B875FF]"
                        : "bg-gradient-to-r from-[#4DF3FF] to-[#B875FF]"
                  }`}
                />
                <h3 className="text-lg font-semibold text-[#F5F7FA]">
                  {prop.title}
                </h3>
              </div>

              {/* Description */}
              <p className="leading-relaxed text-slate-400">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
