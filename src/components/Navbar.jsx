import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-center gap-8 py-4 font-medium text-slate-300">
      <Link to="/" className="hover:text-white transition">
        Home
      </Link>
      <Link to="/projects" className="hover:text-white transition">
        Projects
      </Link>
      <Link to="/about" className="hover:text-white transition">
        About
      </Link>
      <Link to="/contact" className="hover:text-white transition">
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
