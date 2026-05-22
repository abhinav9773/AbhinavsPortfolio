import { Link } from "react-router-dom";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/abhinav9773",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abhinav-sharma-3a7b96316",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:abhinavsharma9773@gmail.com",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
  },
];

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Footer = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #080c15 0%, #060910 100%)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Top section */}
      <div className="max-w-6xl mx-auto px-8 pt-16 pb-10">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Brand col */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold"
                style={{
                  background: "rgba(96,165,250,0.1)",
                  border: "1px solid rgba(96,165,250,0.2)",
                  color: "#60a5fa",
                  fontFamily: "'Courier New', monospace",
                  letterSpacing: "0.05em",
                }}
              >
                AS
              </div>
              <span
                style={{
                  color: "#e2e8f0",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  fontFamily: "'Georgia', serif",
                }}
              >
                Abhinav Sharma
              </span>
            </div>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "rgba(100,116,139,0.8)" }}
            >
              CS undergraduate building systems that are structured,
              explainable, and built to last.
            </p>
          </div>

          {/* Nav col */}
          <div>
            <p
              className="text-xs tracking-widest uppercase font-mono mb-5"
              style={{ color: "rgba(96,165,250,0.4)" }}
            >
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="glow-link text-sm"
                    style={{ color: "rgba(148,163,184,0.65)" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect col */}
          <div>
            <p
              className="text-xs tracking-widest uppercase font-mono mb-5"
              style={{ color: "rgba(96,165,250,0.4)" }}
            >
              Connect
            </p>
            <ul className="space-y-3">
              {socialLinks.map(({ label, href, icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="glow-link inline-flex items-center gap-2.5 text-sm"
                    style={{ color: "rgba(148,163,184,0.65)" }}
                  >
                    <span style={{ color: "rgba(96,165,250,0.5)" }}>
                      {icon}
                    </span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
