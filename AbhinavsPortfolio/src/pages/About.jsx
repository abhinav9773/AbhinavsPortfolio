const principles = [
  {
    title: "Structure before styling",
    description:
      "I define data flow, component boundaries, and responsibilities before visual polish.",
  },
  {
    title: "Explainability over cleverness",
    description:
      "If a system cannot explain itself visually or logically, it’s incomplete.",
  },
  {
    title: "Interaction as feedback",
    description:
      "UI is a tool to understand system behavior, not just a visual layer.",
  },
  {
    title: "Fundamentals first",
    description:
      "Strong foundations in algorithms and logic guide every design decision.",
  },
];

const About = () => {
  return (
    <section className="bg-[#0b0f19] py-28">
      <div className="max-w-6xl mx-auto px-8">
        {/* HEADER */}
        <div className="mb-20 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">How I Build Systems</h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            I approach development by treating software as a system —
            structured, explainable, and designed to evolve over time.
          </p>
        </div>

        {/* BLUEPRINT */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[18px] top-0 bottom-0 w-px bg-slate-700/40" />

          <div className="space-y-16">
            {principles.map((item, index) => (
              <div
                key={item.title}
                className="group relative grid grid-cols-[40px_1fr] gap-8"
              >
                {/* NODE */}
                <div className="relative flex justify-center">
                  <div
                    className="
                      w-3 h-3 rounded-full
                      bg-slate-500
                      group-hover:bg-blue-400
                      transition-colors
                      z-10
                    "
                  />
                  <div
                    className="
                      absolute w-6 h-6 rounded-full
                      opacity-0 group-hover:opacity-100
                      transition-opacity
                      blur-md
                      bg-blue-400/40
                    "
                  />
                </div>

                {/* CONTENT */}
                <div className="max-w-2xl">
                  <h3 className="text-slate-200 font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
