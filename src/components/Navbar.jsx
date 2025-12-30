import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center overflow-x-hidden">
      <nav
        className="
          flex items-center gap-10
          px-8 py-3
          rounded-full

          bg-gradient-to-b from-white/10 to-white/5
          backdrop-blur-2xl
          border border-white/20
          shadow-[0_8px_30px_rgba(0,0,0,0.4)]

          relative overflow-hidden
          max-w-fit

          sm:px-8 sm:gap-10
          px-4 gap-6
        "
      >
        {/* LOGO */}
        <Link
          to="/"
          className="text-slate-500 font-bold tracking-tight text-sm sm:text-sm text-xs"
        >
          AS
        </Link>

        {/* LINKS */}
        <div className="flex items-center gap-6 sm:gap-6 gap-4">
          <Link
            to="/"
            className="text-slate-200 hover:text-white transition-colors text-sm sm:text-sm text-xs"
          >
            Home
          </Link>

          <Link
            to="/projects"
            className="text-slate-200 hover:text-white transition-colors text-sm sm:text-sm text-xs"
          >
            Projects
          </Link>

          <Link
            to="/about"
            className="text-slate-200 hover:text-white transition-colors text-sm sm:text-sm text-xs"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="text-slate-200 hover:text-white transition-colors text-sm sm:text-sm text-xs"
          >
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
