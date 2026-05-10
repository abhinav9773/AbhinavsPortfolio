import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0b0f19] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-8 py-10 text-center">
        <p className="text-slate-500 text-sm flex items-center justify-center gap-1">
          Made with
          <Heart size={18} className="text-red-400 fill-red-400" />
          by <span className="font-medium text-slate-400">Abhinav sharma</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
