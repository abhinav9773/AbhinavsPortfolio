import TiltedCard from "./TiltedCard";

const ProjectCard = ({
  title,
  description,
  tags,
  image,
  demo,
  github,
  featured,
}) => {
  return (
    <div className="relative group">
      {/* Glow on hover */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(96,165,250,0.06), transparent 60%)",
        }}
      />

      {/* Border shine */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
        style={{
          padding: "1px",
          background:
            "linear-gradient(120deg, transparent 20%, rgba(96,165,250,0.7), transparent 80%)",
          backgroundSize: "200% 200%",
          animation: "borderShine 1.8s linear infinite",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      <TiltedCard>
        <div
          className="relative rounded-[20px] overflow-hidden z-10 flex flex-col"
          style={{
            background: "linear-gradient(160deg, #111827 0%, #0f172a 100%)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {/* IMAGE */}
          <div className="p-3 pb-0">
            <div
              className="relative h-[155px] rounded-[14px] overflow-hidden"
              style={{ background: "#0a0f1e" }}
            >
              {image ? (
                <>
                  <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 50%, rgba(10,15,30,0.5) 100%)",
                    }}
                  />
                </>
              ) : (
                <div
                  className="h-full w-full flex items-center justify-center text-sm font-mono"
                  style={{ color: "rgba(100,116,139,0.5)" }}
                >
                  preview soon
                </div>
              )}

              {featured && (
                <div
                  className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-xs font-mono"
                  style={{
                    background: "rgba(96,165,250,0.15)",
                    border: "1px solid rgba(96,165,250,0.25)",
                    color: "#93c5fd",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  featured
                </div>
              )}
            </div>
          </div>

          {/* BODY */}
          <div className="p-5 flex flex-col gap-3 flex-1">
            <div>
              <h3
                className="font-semibold mb-1.5 transition-colors duration-200 group-hover:text-white"
                style={{ color: "#e2e8f0", fontSize: "1rem" }}
              >
                {title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(148,163,184,0.65)" }}
              >
                {description}
              </p>
            </div>

            {/* TAGS */}
            <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full font-mono"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(148,163,184,0.7)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* LINKS */}
            <div
              className="flex gap-4 text-sm pt-2"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 font-medium"
                  style={{ color: "#60a5fa" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#93c5fd")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#60a5fa")
                  }
                >
                  Live →
                </a>
              )}
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200"
                  style={{ color: "rgba(148,163,184,0.5)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#94a3b8")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(148,163,184,0.5)")
                  }
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
