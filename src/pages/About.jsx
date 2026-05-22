import FadeIn from "../components/FadeIn";

const principles = [
  {
    number: "01",
    title: "Structure before styling",
    description:
      "I define data flow, component boundaries, and responsibilities before visual polish. A well-structured system communicates intent without decoration.",
  },
  {
    number: "02",
    title: "Explainability over cleverness",
    description:
      "If a system cannot explain itself visually or logically, it's incomplete. Elegance is achieved when the structure speaks for itself.",
  },
  {
    number: "03",
    title: "Interaction as feedback",
    description:
      "UI is a tool to understand system behavior, not just a visual layer. Every interaction should teach the user something about the underlying model.",
  },
  {
    number: "04",
    title: "Fundamentals first",
    description:
      "Strong foundations in algorithms and logic guide every design decision. Complex behavior emerges from well-understood primitives.",
  },
];

const About = () => {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #0b0f19 0%, #080c15 100%)",
        minHeight: "100vh",
      }}
      className="py-32"
    >
      <div className="max-w-5xl mx-auto px-8">
        {/* HEADER */}
        <FadeIn>
          <h2
            className="font-bold mb-6 leading-tight"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontFamily: "'Georgia', serif",
              color: "#f1f5f9",
            }}
          >
            How I build systems
          </h2>
          <p
            className="text-lg leading-relaxed max-w-2xl"
            style={{ color: "rgba(148,163,184,0.8)" }}
          >
            Software as a system — structured, explainable, and designed to
            evolve. These are the principles that guide every technical
            decision.
          </p>
        </FadeIn>

        {/* PRINCIPLES */}
        <div className="relative mt-20">
          <div
            className="absolute top-0 bottom-0 w-px"
            style={{
              left: "28px",
              background:
                "linear-gradient(180deg, transparent, rgba(96,165,250,0.15) 10%, rgba(96,165,250,0.15) 90%, transparent)",
            }}
          />

          <div className="space-y-0">
            {principles.map((item, index) => (
              <FadeIn key={item.title} delay={index * 100}>
                <div
                  className="group relative flex gap-10 py-10"
                  style={{
                    borderBottom:
                      index < principles.length - 1
                        ? "1px solid rgba(255,255,255,0.05)"
                        : "none",
                  }}
                >
                  {/* NODE */}
                  <div
                    className="relative flex-shrink-0 flex flex-col items-center"
                    style={{ width: "56px" }}
                  >
                    <div
                      className="transition-all duration-300 flex items-center justify-center rounded-full"
                      style={{
                        width: "20px",
                        height: "20px",
                        background: "rgba(96,165,250,0.08)",
                        border: "1px solid rgba(96,165,250,0.2)",
                        marginTop: "2px",
                      }}
                    >
                      <div
                        className="rounded-full transition-all duration-300 group-hover:scale-125"
                        style={{
                          width: "6px",
                          height: "6px",
                          background: "rgba(96,165,250,0.7)",
                        }}
                      />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3
                        className="font-semibold transition-colors duration-200 group-hover:text-white"
                        style={{ color: "#cbd5e1", fontSize: "1.1rem" }}
                      >
                        {item.title}
                      </h3>
                      <span
                        className="font-mono text-xs mt-1 ml-4 flex-shrink-0"
                        style={{ color: "rgba(96,165,250,0.3)" }}
                      >
                        {item.number}
                      </span>
                    </div>
                    <p
                      className="leading-relaxed"
                      style={{
                        color: "rgba(148,163,184,0.65)",
                        fontSize: "0.95rem",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* FOOTER NOTE */}
        <FadeIn delay={200}>
          <div
            className="mt-20 pt-10 flex items-center gap-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div
              className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold font-mono"
              style={{
                background: "rgba(96,165,250,0.1)",
                border: "1px solid rgba(96,165,250,0.2)",
                color: "#60a5fa",
              }}
            >
              AS
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(100,116,139,0.8)" }}
            >
              CS undergraduate at VIT. Currently open to frontend, full-stack,
              and engineering-focused roles. Remote-friendly.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default About;
