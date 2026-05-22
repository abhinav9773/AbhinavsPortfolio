import FadeIn from "../components/FadeIn";

const contactItems = [
  {
    label: "Email",
    description: "Best way to reach me for opportunities or conversations.",
    link: "mailto:abhinavsharma9773@gmail.com",
    linkText: "abhinavsharma9773@gmail.com",
    icon: "✉",
  },
  {
    label: "GitHub",
    description: "Explore my projects, experiments, and code structure.",
    link: "https://github.com/abhinav9773",
    linkText: "github.com/abhinav9773",
    icon: "⌥",
  },
  {
    label: "LinkedIn",
    description: "Professional background, experience, and network.",
    link: "https://www.linkedin.com/in/abhinav-sharma-3a7b96316",
    linkText: "linkedin.com/in/abhinav-sharma",
    icon: "◈",
  },
];

const Contact = () => {
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
            Get in touch
          </h2>
          <p
            className="text-lg leading-relaxed max-w-xl"
            style={{ color: "rgba(148,163,184,0.8)" }}
          >
            I'm always open to discussing engineering roles, collaborations, or
            interesting problems worth solving.
          </p>
        </FadeIn>

        {/* CONTACT GRID */}
        <div className="grid md:grid-cols-3 gap-5 mt-16">
          {contactItems.map((item, i) => (
            <FadeIn key={item.label} delay={i * 80}>
              <div
                className="group relative rounded-2xl p-6 h-full transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.borderColor = "rgba(96,165,250,0.18)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  className="mb-5 w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                  style={{
                    background: "rgba(96,165,250,0.08)",
                    border: "1px solid rgba(96,165,250,0.15)",
                    color: "rgba(147,197,253,0.7)",
                    fontFamily: "monospace",
                  }}
                >
                  {item.icon}
                </div>

                <h3
                  className="font-semibold mb-2"
                  style={{ color: "#e2e8f0", fontSize: "0.95rem" }}
                >
                  {item.label}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "rgba(148,163,184,0.6)" }}
                >
                  {item.description}
                </p>

                <a
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.link.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="glow-link text-sm font-mono block"
                  style={{ color: "#60a5fa" }}
                >
                  {item.linkText} →
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={200}>
          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {/* CV download */}
            <div
              className="flex items-start gap-4 p-6 rounded-2xl"
              style={{
                background: "rgba(96,165,250,0.04)",
                border: "1px solid rgba(96,165,250,0.1)",
              }}
            >
              <div
                className="mt-0.5 w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center text-lg"
                style={{
                  background: "rgba(96,165,250,0.08)",
                  border: "1px solid rgba(96,165,250,0.15)",
                  color: "rgba(147,197,253,0.7)",
                }}
              >
                ↓
              </div>
              <div>
                <p
                  className="text-sm font-medium mb-1"
                  style={{ color: "#bfdbfe" }}
                >
                  Resume
                </p>
                <p
                  className="text-sm mb-3"
                  style={{ color: "rgba(148,163,184,0.65)" }}
                >
                  Download my latest resume for a full overview.
                </p>
                <a
                  href="/Abhinav's_Resume.pdf"
                  download
                  className="glow-link text-sm font-mono"
                  style={{ color: "#60a5fa" }}
                >
                  Download Resume →
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;
