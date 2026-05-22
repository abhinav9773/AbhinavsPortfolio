import ProjectCard from "../components/ProjectCard";
import FadeIn from "../components/FadeIn";
import UrbanImg from "../assets/projects/UrbanWatch.png";
import algoImg from "../assets/projects/algorithms.png";
import weatherImg from "../assets/projects/weather.png";
import vitImg from "../assets/projects/vit.png";
import vionyxImg from "../assets/projects/vionyx.png";
import pigDiceImg from "../assets/projects/pigdice.png";

const projects = [
  {
    title: "UrbanWatch",
    description:
      "A platform connecting engineers to local people for reporting and resolving locality issues.",
    tags: ["React", "Node.js", "MongoDB"],
    image: UrbanImg,
    demo: "https://urban-watch-frontend.vercel.app",
    github: "https://github.com/abhinav9773/UrbanWatch-frontend",
    featured: true,
  },
  {
    title: "Algorithm Visualizer",
    description:
      "Interactive visualizations for divide-and-conquer and graph algorithms to make learning intuitive.",
    tags: ["Algorithms", "Visualization", "JavaScript"],
    image: algoImg,
    demo: "https://algorithm-visualizer-kndma.vercel.app",
    github: "https://github.com/abhinav9773/algorithm-visualizer",
    featured: true,
  },
  {
    title: "Weather Dashboard",
    description:
      "Minimal weather dashboard with real-time data, forecasts, and clean UI design, responsive.",
    tags: ["API", "Frontend", "UX"],
    image: weatherImg,
    demo: "https://weather--dashboard.vercel.app",
    github: "https://github.com/abhinav9773/Weather-Dashboard",
  },
  {
    title: "VIT Co-Creation Platform",
    description:
      "A centralized platform at VIT connecting alumni and corporate relations to improve communication.",
    tags: ["React", "Web Platform", "UI"],
    image: vitImg,
    demo: "https://co-creation-platform-vit.vercel.app",
    github: "https://github.com/abhinav9773/Co-Relation-Platform-VIT",
  },
  {
    title: "Vionyx",
    description:
      "A JavaScript-based banking app for managing accounts, transferring funds, and tracking transactions.",
    tags: ["Frontend", "Design", "React"],
    image: vionyxImg,
    demo: "https://vionyx.vercel.app",
    github: "https://github.com/abhinav9773/VIONYX",
  },
  {
    title: "Pig Dice Game",
    description:
      "A browser-based dice game featuring simple logic, turn-based gameplay, and a clean interactive UI.",
    tags: ["JavaScript", "Game Logic", "Frontend"],
    image: pigDiceImg,
    demo: "https://pig-dice-game-opal.vercel.app",
    github: "https://github.com/abhinav9773/Pig-Dice-Game",
  },
];

const Projects = () => {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #0b0f19 0%, #080c15 100%)",
        minHeight: "100vh",
      }}
      className="py-32"
    >
      <div className="max-w-6xl mx-auto px-8">
        {/* HEADER */}
        <FadeIn>
          <h2
            className="font-bold mb-5 leading-tight"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontFamily: "'Georgia', serif",
              color: "#f1f5f9",
            }}
          >
            Projects
          </h2>
          <p
            className="max-w-xl text-base leading-relaxed"
            style={{ color: "rgba(148,163,184,0.75)" }}
          >
            A selection of projects focused on interactive systems, clean
            architecture, and thoughtful user experience.
          </p>
        </FadeIn>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 60}>
              <ProjectCard {...project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
