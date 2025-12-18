import { Check, Battery, Shield, Vibrate, Eye, Volume2 } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="overflow-hidden bg-brand-dark border-white/5 border-t pt-24 pb-24 relative" id="how-it-works">
      <div className="max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Military-Grade Defense</h2>
          <p className="text-xl text-white/60 font-light leading-relaxed">
            Comprehensive surveillance detection technology engineered for personal security.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Feature 1: Advanced Threat Detection */}
          <div className="group relative bg-brand-card border border-white/10 rounded-3xl p-8 hover:bg-white/[0.02] transition-colors overflow-hidden flex flex-col">
            <div className="mb-8">
              <h3 className="text-2xl font-medium text-white tracking-tight mb-4">Advanced Threat Detection</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-white/60 font-light text-lg">
                  <Check className="w-5 h-5 mt-1 text-brand-red" />
                  Detects cameras, GPS, & wireless bugs
                </li>
                <li className="flex items-start gap-3 text-white/60 font-light text-lg">
                  <Check className="w-5 h-5 mt-1 text-brand-red" />
                  98% accuracy up to 30ft range
                </li>
                <li className="flex items-start gap-3 text-white/60 font-light text-lg">
                  <Check className="w-5 h-5 mt-1 text-brand-red" />
                  Wide-band 1MHz–8GHz scanning
                </li>
              </ul>
            </div>
            
            {/* RF Spectrum Visual */}
            <div className="mt-auto bg-black rounded-xl border border-white/10 p-6 relative overflow-hidden h-64 flex flex-col justify-between group-hover:border-white/20 transition-colors">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></div>
                  <span className="text-xs font-mono text-white/40 uppercase tracking-widest">RF Spectrum</span>
                </div>
                <span className="text-xs font-mono text-brand-red">ACTIVE</span>
              </div>
              
              <div className="flex gap-1 h-32 mb-2 items-end justify-between">
                <div className="eq-bar bg-brand-red/20 w-full rounded-t-sm" style={{ animationDuration: '0.8s', animationDelay: '0.1s' }}></div>
                <div className="w-full bg-brand-red/40 rounded-t-sm eq-bar" style={{ animationDuration: '1.2s', animationDelay: '0.2s' }}></div>
                <div className="w-full bg-brand-red/60 rounded-t-sm eq-bar" style={{ animationDuration: '0.9s', animationDelay: '0.05s' }}></div>
                <div className="w-full bg-brand-red rounded-t-sm eq-bar" style={{ animationDuration: '0.6s', animationDelay: '0.3s' }}></div>
                <div className="w-full bg-brand-red/70 rounded-t-sm eq-bar" style={{ animationDuration: '1.1s', animationDelay: '0.15s' }}></div>
                <div className="w-full bg-brand-red/30 rounded-t-sm eq-bar" style={{ animationDuration: '1.3s', animationDelay: '0.4s' }}></div>
                <div className="w-full bg-brand-red/50 rounded-t-sm eq-bar" style={{ animationDuration: '0.7s', animationDelay: '0.2s' }}></div>
                <div className="w-full bg-brand-red/20 rounded-t-sm eq-bar" style={{ animationDuration: '1.0s', animationDelay: '0.1s' }}></div>
              </div>
              
              <div className="flex justify-between text-[10px] font-mono text-white/30 pt-4 border-t border-white/5">
                <span>1MHz</span>
                <span>2.4GHz</span>
                <span>5.8GHz</span>
                <span>8GHz</span>
              </div>
            </div>
          </div>

          {/* Feature 2: Fast Scanning */}
          <div className="group relative bg-brand-card border border-white/10 rounded-3xl p-8 hover:bg-white/[0.02] transition-colors overflow-hidden flex flex-col">
            <div className="mb-8">
              <h3 className="text-2xl font-medium text-white tracking-tight mb-4">Fast, Full-Space Scanning</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-white/60 font-light text-lg">
                  <Check className="w-5 h-5 mt-1 text-brand-red" />
                  Complete 360° room coverage
                </li>
                <li className="flex items-start gap-3 text-white/60 font-light text-lg">
                  <Check className="w-5 h-5 mt-1 text-brand-red" />
                  Scans spaces in under 60 seconds
                </li>
                <li className="flex items-start gap-3 text-white/60 font-light text-lg">
                  <Check className="w-5 h-5 mt-1 text-brand-red" />
                  Ideal for Airbnbs & hotels
                </li>
              </ul>
            </div>

            {/* Radar Visual */}
            <div className="mt-auto bg-black rounded-xl border border-white/10 p-6 relative overflow-hidden h-64 flex items-center justify-center group-hover:border-white/20 transition-colors">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
              
              <div className="relative w-40 h-40">
                <div className="absolute inset-0 border border-brand-red/20 rounded-full"></div>
                <div className="absolute inset-8 border border-brand-red/20 rounded-full"></div>
                <div className="absolute inset-16 border border-brand-red/40 rounded-full"></div>
                
                <div className="absolute inset-0 rounded-full radar-sweep origin-center"></div>
                
                <div className="absolute top-8 right-10 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_white] animate-blink"></div>
                <div className="absolute bottom-12 left-10 w-1.5 h-1.5 bg-brand-red rounded-full shadow-[0_0_8px_#E42910] animate-blink" style={{ animationDuration: '3s' }}></div>
              </div>
              
              <div className="absolute bottom-4 left-6 text-xs font-mono text-white/40">
                RANGE: 10M<br />
                STATUS: SCANNING
              </div>
            </div>
          </div>

          {/* Feature 3: Zero Setup */}
          <div className="group relative bg-brand-card border border-white/10 rounded-3xl p-8 hover:bg-white/[0.02] transition-colors overflow-hidden flex flex-col">
            <div className="mb-8">
              <h3 className="text-2xl font-medium text-white tracking-tight mb-4">Zero Setup, One-Button Use</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-white/60 font-light text-lg">
                  <Check className="w-5 h-5 mt-1 text-brand-red" />
                  Instant one-button operation
                </li>
                <li className="flex items-start gap-3 text-white/60 font-light text-lg">
                  <Check className="w-5 h-5 mt-1 text-brand-red" />
                  Vibration, Beep & LED alerts
                </li>
                <li className="flex items-start gap-3 text-white/60 font-light text-lg">
                  <Check className="w-5 h-5 mt-1 text-brand-red" />
                  Silent mode for discreet use
                </li>
              </ul>
            </div>

            {/* Interface Visual */}
            <div className="mt-auto bg-black rounded-xl border border-white/10 p-6 relative overflow-hidden h-64 flex flex-col justify-center items-center group-hover:border-white/20 transition-colors">
              <div className="relative w-full max-w-[200px]">
                {/* Mode Slider */}
                <div className="flex items-center justify-between mb-8 px-4">
                  <div className="flex flex-col items-center gap-2 text-brand-red">
                    <Vibrate className="w-5 h-5" />
                    <span className="text-[10px] font-mono tracking-wider opacity-100 font-bold">VIBE</span>
                  </div>
                  <div className="w-px h-8 bg-white/10"></div>
                  <div className="flex flex-col items-center gap-2 text-white/40">
                    <Eye className="w-5 h-5" />
                    <span className="text-[10px] font-mono tracking-wider">VISUAL</span>
                  </div>
                  <div className="w-px h-8 bg-white/10"></div>
                  <div className="flex flex-col items-center gap-2 text-white/40">
                    <Volume2 className="w-5 h-5" />
                    <span className="text-[10px] font-mono tracking-wider">AUDIO</span>
                  </div>
                </div>
                
                {/* Toggle Button */}
                <div className="w-full bg-white/5 h-14 rounded-full p-1 relative border border-white/10 cursor-pointer">
                  <div className="absolute top-1 left-1 bottom-1 w-[45%] bg-brand-red rounded-full shadow-[0_0_15px_rgba(228,41,16,0.4)] flex items-center justify-center">
                    <div className="w-1.5 h-6 bg-white/20 rounded-full"></div>
                  </div>
                  <div className="w-full h-full flex items-center justify-end px-6">
                    <span className="text-[10px] font-mono font-bold text-white/30">MODE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 4: Portable Build */}
          <div className="group relative bg-brand-card border border-white/10 rounded-3xl p-8 hover:bg-white/[0.02] transition-colors overflow-hidden flex flex-col">
            <div className="mb-8">
              <h3 className="text-2xl font-medium text-white tracking-tight mb-4">Portable, Tactical Build</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-white/60 font-light text-lg">
                  <Check className="w-5 h-5 mt-1 text-brand-red" />
                  Pocket-sized tactical shell
                </li>
                <li className="flex items-start gap-3 text-white/60 font-light text-lg">
                  <Check className="w-5 h-5 mt-1 text-brand-red" />
                  Up to 8-hour battery life
                </li>
                <li className="flex items-start gap-3 text-white/60 font-light text-lg">
                  <Check className="w-5 h-5 mt-1 text-brand-red" />
                  TSA-approved for travel
                </li>
              </ul>
            </div>

            {/* Tech Specs Visual */}
            <div className="mt-auto bg-black rounded-xl border border-white/10 p-6 relative overflow-hidden h-64 flex flex-col justify-center gap-6 group-hover:border-white/20 transition-colors">
              {/* Battery Status */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2 text-white/70">
                    <Battery className="w-4 h-4" />
                    <span className="text-xs font-mono font-medium">BATTERY</span>
                  </div>
                  <span className="text-xs font-mono text-brand-red">8 HRS</span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-red w-[85%] shadow-[0_0_10px_#E42910]"></div>
                </div>
              </div>

              {/* Port Info */}
              <div className="flex items-center justify-between p-3 rounded-lg border border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/60">
                    <Check className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-white font-medium">Rechargeable</span>
                    <span className="text-[10px] text-white/40 font-mono">USB-C FAST CHARGE</span>
                  </div>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
              </div>
              
              {/* Cert badge */}
              <div className="flex items-center gap-2 text-white/30 text-[10px] font-mono justify-end">
                <Shield className="w-3 h-3" />
                TSA APPROVED
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
