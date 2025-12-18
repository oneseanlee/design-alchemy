import { ShieldCheck, Menu } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-brand-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1 group">
          <div className="relative w-6 h-6 border border-white/80 rounded flex items-center justify-center group-hover:border-accent transition-colors duration-300">
            <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-brand-red"></div>
          </div>
          <div className="ml-2 text-xl tracking-tight">
            <span className="font-medium text-white">SAFE</span>
            <span className="font-light text-white/70">SENSE</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a>
          <a href="#reviews" className="hover:text-white transition-colors">Reviews</a>
        </div>

        {/* CTA */}
        <a 
          href="#pricing" 
          className="hidden md:flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-accent hover:text-white transition-all duration-300"
        >
          Secure Your Space
          <ShieldCheck className="w-4 h-4" />
        </a>
        
        {/* Mobile Menu Icon */}
        <button className="md:hidden text-white/80">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
