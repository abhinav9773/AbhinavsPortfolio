const Contact = () => {
  return (
    <section className="bg-[#0b0f19] py-28">
      <div className="max-w-5xl mx-auto px-8">
        {/* HEADER */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Get in touch</h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            I’m always open to discussing engineering roles, collaborations, or
            interesting problems worth solving.
          </p>
        </div>

        {/* CONTACT GRID */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* EMAIL */}
          <div className="relative group">
            {/* Border shine */}
            <div
              className="
                pointer-events-none
                absolute inset-0 rounded-[18px]
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300
                z-20
              "
              style={{
                padding: "1px",
                background:
                  "linear-gradient(120deg, transparent 20%, rgba(96,165,250,0.9), transparent 80%)",
                backgroundSize: "200% 200%",
                animation: "borderShine 1.6s linear infinite",
                WebkitMask:
                  "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />

            <div className="relative z-10 rounded-[18px] bg-[#0f172a] p-6 border border-white/10">
              <h3 className="text-slate-200 font-semibold mb-2">Email</h3>
              <p className="text-slate-400 text-sm mb-4">
                Best way to reach me for opportunities or conversations.
              </p>
              <a
                href="mailto:abhinavsharma9773@gmail.com"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Send an email →
              </a>
            </div>
          </div>

          {/* GITHUB */}
          <div className="relative group">
            {/* Border shine */}
            <div
              className="
                pointer-events-none
                absolute inset-0 rounded-[18px]
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300
                z-20
              "
              style={{
                padding: "1px",
                background:
                  "linear-gradient(120deg, transparent 20%, rgba(96,165,250,0.9), transparent 80%)",
                backgroundSize: "200% 200%",
                animation: "borderShine 1.6s linear infinite",
                WebkitMask:
                  "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />

            <div className="relative z-10 rounded-[18px] bg-[#0f172a] p-6 border border-white/10">
              <h3 className="text-slate-200 font-semibold mb-2">GitHub</h3>
              <p className="text-slate-400 text-sm mb-4">
                Explore my projects, experiments, and code structure.
              </p>
              <a
                href="https://github.com/abhinav9773"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                View GitHub profile →
              </a>
            </div>
          </div>

          {/* LINKEDIN */}
          <div className="relative group">
            {/* Border shine */}
            <div
              className="
                pointer-events-none
                absolute inset-0 rounded-[18px]
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300
                z-20
              "
              style={{
                padding: "1px",
                background:
                  "linear-gradient(120deg, transparent 20%, rgba(96,165,250,0.9), transparent 80%)",
                backgroundSize: "200% 200%",
                animation: "borderShine 1.6s linear infinite",
                WebkitMask:
                  "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />

            <div className="relative z-10 rounded-[18px] bg-[#0f172a] p-6 border border-white/10">
              <h3 className="text-slate-200 font-semibold mb-2">LinkedIn</h3>
              <p className="text-slate-400 text-sm mb-4">
                Professional background and experience.
              </p>
              <a
                href="https://www.linkedin.com/in/abhinav-sharma-3a7b96316"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Connect on LinkedIn →
              </a>
            </div>
          </div>
        </div>

        {/* FOOT NOTE */}
        <div className="mt-20 text-slate-500 text-sm max-w-2xl">
          Currently open to frontend, full-stack, and engineering-focused
          opportunities. Remote-friendly.
        </div>
      </div>
    </section>
  );
};

export default Contact;
