import ProjectCard from "../components/ProjectCard";

import algoImg from "../assets/projects/algorithms.png";
import weatherImg from "../assets/projects/weather.png";
import vitImg from "../assets/projects/vit.png";
import vionyxImg from "../assets/projects/vionyx.png";
import pigDiceImg from "../assets/projects/pigdice.png";

const projects = [
  {
    title: "Algorithm Visualizer",
    description:
      "Interactive visualizations for divide-and-conquer and graph algorithms to make learning intuitive.",
    tags: ["Algorithms", "Visualization", "JavaScript"],
    image: algoImg,
    demo: "https://algorithm-visualizer-kndma.vercel.app",
    github: "https://github.com/abhinav9773/algorithm-visualizer",
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
    title: "VIT Co-Relation Platform",
    description:
      "A centralized platform at VIT connecting alumni and corporate relations to improve communication and collaboration.",
    tags: ["React", "Web Platform", "UI"],
    image: vitImg,
    demo: "https://co-relation-platform-vit.vercel.app",
    github: "https://github.com/abhinav9773/Co-Relation-Platform-VIT",
  },
  {
    title: "Vionyx",
    description:
      "A modern JavaScript-based banking app that lets users manage accounts, transfer funds, and track transactions in real time.",
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
    <section className="bg-[#0b0f19] py-24">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <p className="text-slate-400 max-w-xl mb-12">
          A selection of projects focused on interactive systems, clean
          architecture, and thoughtful user experience.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
