import { useEffect, useState } from "react";
import Scene from "../three/Scene";
import TypingText from "../components/TypingText";
import { Link } from "react-router-dom";

const Home = () => {
  const [opacity, setOpacity] = useState(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const fadePoint = window.innerHeight * 0.6;
      setOpacity(Math.max(0, 1 - window.scrollY / fadePoint));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContent = () => {
    const el = document.getElementById("focus-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* HERO */}
      <section className="relative h-[160vh] pt-24 sm:pt-0">
        {/* Background grid */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        <div
          className="sticky top-0 h-screen grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-16 transition-opacity duration-300"
          style={{ opacity }}
        >
          {/* LEFT */}
          <div
            className="max-w-xl"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            <h1
              className="font-bold leading-[1.05] tracking-tight mb-6"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                fontFamily: "'Georgia', serif",
                color: "#f8fafc",
              }}
            >
              Hi, I'm{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #93c5fd 0%, #818cf8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Abhinav
              </span>
            </h1>

            <p
              className="text-base md:text-lg mb-6 font-mono"
              style={{ color: "#93c5fd", letterSpacing: "0.02em" }}
            >
              <TypingText />
            </p>

            <p
              className="leading-relaxed max-w-md"
              style={{ color: "rgba(148,163,184,0.85)", fontSize: "1rem" }}
            >
              CS undergraduate building frontend systems, visual tools, and
              algorithm-driven interfaces — with a strong focus on clarity,
              structure, and thoughtful interaction.
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-4 mt-10">
              <Link
                to="/projects"
                className="px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-[1.02]"
                style={{
                  background: "rgba(96,165,250,0.12)",
                  border: "1px solid rgba(96,165,250,0.25)",
                  color: "#93c5fd",
                }}
              >
                View projects →
              </Link>
              <Link
                to="/contact"
                className="px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
                style={{
                  color: "rgba(148,163,184,0.7)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                Get in touch
              </Link>
            </div>

            {/* Scroll button */}
            <div className="mt-12">
              <button onClick={scrollToContent} className="scroll-btn">
                Scroll to explore
                <em className="scroll-arrow not-italic">↓</em>
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="h-[320px] md:h-screen w-full mt-10 md:mt-0">
            <Scene />
          </div>
        </div>
      </section>

      {/* NEXT CONTENT */}
      <section
        id="focus-section"
        style={{
          background: "linear-gradient(180deg, #0b0f19 0%, #080c15 100%)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 md:px-8 pt-16 pb-28">
          <p
            className="text-xs tracking-widest uppercase font-mono mb-4"
            style={{ color: "rgba(96,165,250,0.5)" }}
          >
            Focus areas
          </p>
          <h2
            className="font-bold mb-12 tracking-tight"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontFamily: "'Georgia', serif",
              color: "#f1f5f9",
            }}
          >
            What I work on
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "⬡",
                label: "Systems",
                body: "Designing systems that explain themselves through structure and behavior",
              },
              {
                icon: "◈",
                label: "Visual tools",
                body: "Building interactive interfaces for learning, exploration, and insight",
              },
              {
                icon: "◻",
                label: "Foundations",
                body: "Refining structure and logic before adding visual complexity",
              },
            ].map((item, i) => (
              <div
                key={item.label}
                className="group p-6 rounded-2xl transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.borderColor = "rgba(96,165,250,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                }}
              >
                <div
                  className="text-2xl mb-4"
                  style={{
                    color: "rgba(96,165,250,0.6)",
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
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(148,163,184,0.7)" }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex items-center gap-6">
            <Link
              to="/projects"
              className="glow-link inline-flex items-center gap-2 text-sm"
              style={{ color: "#60a5fa" }}
            >
              Explore all projects →
            </Link>
            <div
              className="h-px flex-1 max-w-xs"
              style={{ background: "rgba(255,255,255,0.06)" }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
