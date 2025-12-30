import { useEffect, useState } from "react";
import Scene from "../three/Scene";
import TypingText from "../components/TypingText";

const Home = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const fadePoint = window.innerHeight * 0.6;
      setOpacity(Math.max(0, 1 - window.scrollY / fadePoint));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[160vh] pt-24 sm:pt-0">
        <div
          className="
            sticky top-0 h-screen
            grid grid-cols-1 md:grid-cols-2
            items-center
            px-6 md:px-12
            transition-opacity duration-300
          "
          style={{ opacity }}
        >
          {/* LEFT */}
          <div className="max-w-xl">
            <h1 className="text-[2.25rem] md:text-[3.25rem] font-semibold leading-[1.1] tracking-tight mb-6">
              Hi, I’m Abhinav
            </h1>

            <p className="text-base md:text-lg mb-6 text-slate-300">
              <TypingText />
            </p>

            <p className="text-slate-400 leading-relaxed">
              Computer Science undergraduate building frontend systems, visual
              tools, and algorithm-driven interfaces with a strong focus on
              clarity, structure, and thoughtful interaction.
            </p>

            <p className="mt-10 md:mt-12 text-xs text-slate-500 tracking-wide">
              Scroll to explore selected work
            </p>
          </div>

          {/* RIGHT */}
          <div className="h-[320px] md:h-screen w-full mt-10 md:mt-0">
            <Scene />
          </div>
        </div>
      </section>

      {/* NEXT CONTENT */}
      <section className="bg-[#0b0f19]">
        <div className="max-w-5xl mx-auto px-6 md:px-8 pt-8 pb-24">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 tracking-tight">
            What I focus on
          </h2>

          <ul className="space-y-4 text-slate-400 max-w-2xl leading-relaxed">
            <li>Designing systems that explain themselves</li>
            <li>Building visual tools for learning and exploration</li>
            <li>Refining structure before adding complexity</li>
          </ul>

          {/* CTA */}
          <div className="mt-12">
            <a
              href="projects"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm"
            >
              Explore projects
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
