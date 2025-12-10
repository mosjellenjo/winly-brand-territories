interface ValueProp {
  title: string;
  description: string;
}

const valueProps: ValueProp[] = [
  {
    title: "Hastighet",
    description:
      "Bygg og filtrer segmenter raskt på tvers av bransje, størrelse, geografi, eierskap og historikk.",
  },
  {
    title: "Dybde",
    description:
      "Få et samlet bilde av organisasjoner: roller, eiere, nøkkeltall, historikk og anbudsaktivitet.",
  },
  {
    title: "Sammenheng",
    description:
      "Winly kobler datapunkter på tvers av kilder til én konsistent modell. Alt henger sammen.",
  },
];

export function ValuePropsModernTech() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold text-[#F5F7FA] md:text-4xl">
          Hvorfor moderne team velger Winly
        </h2>

        {/* Value props grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {valueProps.map((prop, index) => (
            <div
              key={prop.title}
              className="group relative rounded-xl border border-slate-800 bg-[#0B0F14] p-8 transition-all hover:border-slate-700"
            >
              {/* Accent line */}
              <div
                className={`absolute left-0 top-0 h-1 w-16 rounded-tl-xl ${
                  index === 0
                    ? "bg-[#4DF3FF]"
                    : index === 1
                      ? "bg-[#B875FF]"
                      : "bg-gradient-to-r from-[#4DF3FF] to-[#B875FF]"
                }`}
              />

              {/* Content */}
              <h3 className="text-xl font-semibold text-[#F5F7FA]">
                {prop.title}
              </h3>
              <p className="mt-4 leading-relaxed text-[#94A3B8]">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
