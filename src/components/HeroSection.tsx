import { ArrowRight, Video, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <header className="md:pt-48 md:pb-32 overflow-hidden z-10 max-w-7xl mr-auto ml-auto pt-32 pr-6 pb-20 pl-6 relative">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="max-w-2xl">
          <div className="inline-flex animate-reveal text-xs font-medium text-red-600 tracking-wide bg-accent/5 border-accent/30 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 gap-x-2 items-center">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-brand-red"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
            </span>
            MILITARY-GRADE PRIVACY SHIELD
          </div>
          
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1] animate-reveal delay-100">
            Scan. Detect. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-brand-red to-black/5">Neutralize.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 font-light mb-10 max-w-lg leading-relaxed animate-reveal delay-200">
            The SafeSense™ T66 empowers travelers to instantly detect hidden cameras, GPS trackers, and bugs. Elite tactical protection in a pocket-sized design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-reveal delay-300">
            <a 
              href="#pricing" 
              className="flex items-center justify-center gap-2 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-[#ff5670] transition-colors shadow-[0_0_20px_rgba(255,112,133,0.3)] bg-brand-red"
            >
              Get Protected - 53% OFF
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#how-it-works" 
              className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-white/10 transition-colors"
            >
              See How It Works
            </a>
          </div>
          
          <div className="mt-8 flex items-center gap-4 text-sm text-white/40 font-light animate-reveal delay-300">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-zinc-800 border border-black flex items-center justify-center text-xs">A</div>
              <div className="w-8 h-8 rounded-full bg-zinc-700 border border-black flex items-center justify-center text-xs">M</div>
              <div className="w-8 h-8 rounded-full bg-zinc-600 border border-black flex items-center justify-center text-xs">J</div>
            </div>
            <p>Trusted by 10,000+ travelers worldwide</p>
          </div>
        </div>

        {/* Visual Representation */}
        <div className="relative flex items-center justify-center animate-reveal delay-200 min-h-[500px]">
          {/* Radar Background Grid */}
          <div className="radar-grid opacity-30 absolute inset-0"></div>
          
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-accent/10 to-brand-red/20 rounded-full blur-[80px] -z-10 animate-pulse"></div>

          {/* Active Scan Radar Ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] border border-white/5 rounded-full z-0">
            <div className="absolute inset-0 rounded-full radar-sweep opacity-30 blur-md"></div>
          </div>
          
          {/* Device Image */}
          <div className="relative z-10 animate-float">
            <img 
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2b8b8d1e-e136-46bc-a00d-90c9bd194c0e_3840w.png" 
              alt="SafeSense T66 Detector" 
              className="transform transition-transform duration-500 hover:scale-105 w-auto h-[480px] object-cover relative drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            />
            
            {/* Glint Effect */}
            <div className="absolute top-[10%] right-[20%] w-[1px] h-[100px] bg-gradient-to-b from-transparent via-white/20 to-transparent rotate-12 blur-[1px]"></div>
          </div>

          {/* Floating Alert Cards */}
          <div className="absolute top-20 right-0 glass-panel p-4 rounded-xl flex items-center gap-3 animate-bounce shadow-lg z-20 backdrop-blur-xl bg-black/40 border-white/10" style={{ animationDuration: '3s' }}>
            <div className="bg-red-500/20 p-2 rounded-lg text-red-400">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] tracking-wider text-white/50 uppercase font-semibold">Alert</div>
              <div className="text-sm font-medium text-white">Camera Detected</div>
            </div>
          </div>

          <div className="absolute bottom-10 left-0 glass-panel p-4 rounded-xl flex items-center gap-3 animate-bounce shadow-lg z-20 backdrop-blur-xl bg-black/40 border-white/10" style={{ animationDuration: '4s' }}>
            <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] tracking-wider text-white/50 uppercase font-semibold">Scan</div>
              <div className="text-sm font-medium text-white">GPS Tracker Found</div>
            </div>
          </div>
          
          {/* Connection Lines SVG */}
          <svg className="absolute inset-0 pointer-events-none z-10 opacity-30" width="100%" height="100%">
            <line x1="70%" y1="20%" x2="50%" y2="40%" stroke="url(#grad1)" strokeWidth="1" strokeDasharray="4 4"></line>
            <line x1="30%" y1="80%" x2="45%" y2="60%" stroke="url(#grad1)" strokeWidth="1" strokeDasharray="4 4"></line>
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: 'rgba(255,255,255,0)', stopOpacity: 0 }}></stop>
                <stop offset="50%" style={{ stopColor: 'rgba(255,112,133,0.5)', stopOpacity: 1 }}></stop>
                <stop offset="100%" style={{ stopColor: 'rgba(255,255,255,0)', stopOpacity: 0 }}></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
