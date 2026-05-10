import TiltedCard from "./TiltedCard";

const ProjectCard = ({ title, description, tags, image, demo, github }) => {
  return (
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

      <TiltedCard>
        <div className="relative rounded-[18px] overflow-hidden bg-[#0f172a] z-10">
          {/* IMAGE HEADER */}
          <div className="pt-4 px-4">
            <div className="relative h-[160px] rounded-[12px] overflow-hidden bg-[#111827]">
              {image ? (
                <>
                  <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/25" />
                </>
              ) : (
                <div className="h-full w-full flex items-center justify-center text-slate-500 text-sm">
                  Preview coming soon
                </div>
              )}
            </div>
          </div>

          {/* CONTENT BODY */}
          <div className="p-6 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-xl font-semibold mb-1 text-slate-200">
                {title}
              </h3>
              <p className="text-sm text-slate-400 mb-4">{description}</p>
            </div>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="
                    text-xs px-2 py-1
                    rounded-full
                    bg-white/10
                    border border-white/10
                    text-slate-300
                  "
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* LINKS */}
            <div className="flex gap-4 text-sm">
              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Live Demo →
                </a>
              )}
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-slate-200 transition-colors"
                >
                  GitHub →
                </a>
              )}
            </div>
          </div>
        </div>
      </TiltedCard>
    </div>
  );
};

export default ProjectCard;
