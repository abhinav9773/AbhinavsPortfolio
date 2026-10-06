import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        style={{
          background: "rgba(11, 15, 25, 0.75)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.04), 0 20px 40px rgba(0,0,0,0.5)",
        }}
        className="flex items-center gap-1 px-2 py-2 rounded-2xl max-w-fit"
      >
        {/* LOGO */}
        <Link
          to="/"
          className="px-3 py-1.5 rounded-xl text-slate-300 font-bold text-sm tracking-widest hover:text-white transition-colors mr-2"
          style={{
            fontFamily: "'Courier New', monospace",
            letterSpacing: "0.15em",
          }}
        >
          AS
        </Link>

        {/* DIVIDER */}
        <div className="w-px h-4 bg-white/10 mr-2" />

        {/* LINKS */}
        {links.map(({ to, label, badge }) => {
          const active = location.pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className="relative flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-sm transition-all duration-200"
              style={{
                color: active ? "#fff" : "rgb(148,163,184)",
                background: active ? "rgba(255,255,255,0.08)" : "transparent",
              }}
            >
              {active && (
                <span
                  className="absolute inset-x-3 bottom-1 h-px rounded-full"
                  style={{ background: "rgba(96,165,250,0.6)" }}
                />
              )}
              {label}
              {badge && (
                <span
                  className="text-xs font-mono rounded-full px-1.5 py-0.5 leading-none"
                  style={{
                    background: "rgba(96,165,250,0.1)",
                    border: "1px solid rgba(96,165,250,0.18)",
                    color: "rgba(96,165,250,0.7)",
                    fontSize: "0.6rem",
                  }}
                >
                  {badge}
                </span>
              )}
            </Link>
          );
        })}

        {/* DIVIDER */}
        <div className="w-px h-4 bg-white/10 mx-2" />

        {/* CV BUTTON */}
        <a
          href="/Resume_Abhinav.pdf"
          download="Resume_Abhinav.pdf"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200"
          style={{
            color: "rgba(147,197,253,0.8)",
            border: "1px solid rgba(96,165,250,0.18)",
            background: "rgba(96,165,250,0.06)",
            letterSpacing: "0.04em",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(96,165,250,0.12)";
            e.currentTarget.style.borderColor = "rgba(96,165,250,0.35)";
            e.currentTarget.style.color = "#bfdbfe";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(96,165,250,0.06)";
            e.currentTarget.style.borderColor = "rgba(96,165,250,0.18)";
            e.currentTarget.style.color = "rgba(147,197,253,0.8)";
          }}
        >
          ↓ Resume
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
