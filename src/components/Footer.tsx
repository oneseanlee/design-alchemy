import { CreditCard, Lock, Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black pt-16 pb-8">
      <div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center gap-1 mb-4">
              <div className="w-5 h-5 border border-white/80 rounded flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-brand-red"></div>
              </div>
              <div className="ml-2 text-lg tracking-tight">
                <span className="font-medium text-white">SAFE</span>
                <span className="font-light text-white/70">SENSE</span>
              </div>
            </div>
            <p className="text-white/40 text-sm max-w-xs">
              Defining the future of personal privacy protection with military-grade technology.
            </p>
          </div>
          
          <div className="flex gap-16">
            <div>
              <h4 className="text-white font-medium mb-4 text-sm">Product</h4>
              <ul className="space-y-2 text-sm text-white/40">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">Technology</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4 text-sm">Company</h4>
              <ul className="space-y-2 text-sm text-white/40">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">© 2024 SafeSense Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <CreditCard className="w-5 h-5 text-white/30" />
            <Lock className="w-4 h-4 text-white/30" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
