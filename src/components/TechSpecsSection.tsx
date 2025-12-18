import { Check } from "lucide-react";

const TechSpecsSection = () => {
  return (
    <section className="bg-brand-card pt-24 pb-24" id="features">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#121212] aspect-square flex items-center justify-center">
              {/* Carbon Fiber Pattern */}
              <div className="opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] absolute inset-0"></div>
              <div className="relative z-10 w-full px-12">
                {/* Graph representation */}
                <div className="flex items-end justify-between h-48 gap-2">
                  <div className="w-full h-[80%] rounded-t opacity-90 relative group bg-brand-red">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-red-600">98%</div>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-black font-bold rotate-90 whitespace-nowrap">SafeSense T66</div>
                  </div>
                  <div className="bg-white/10 w-full h-[40%] rounded-t relative">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-white/40">60%</div>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-white/40 font-bold rotate-90 whitespace-nowrap">Generic</div>
                  </div>
                  <div className="w-full bg-white/10 h-[20%] rounded-t relative">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-white/40">35%</div>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-white/40 font-bold rotate-90 whitespace-nowrap">Apps</div>
                  </div>
                </div>
                <div className="mt-6 border-t border-white/10 pt-4 flex justify-between text-xs text-white/40 uppercase tracking-widest">
                  <span>Detection Accuracy</span>
                  <span>Range Test</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Not all detectors are created equal.</h2>
            <p className="text-lg text-white/60 font-light mb-8">
              Stop relying on flimsy plastic knockoffs or unreliable phone apps. The T66 is engineered for elite tactical performance.
            </p>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 shrink-0">
                  <Check className="w-3.5 h-3.5 text-red-600" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg">Wideband RF Scanning</h4>
                  <p className="text-white/50 font-light text-sm mt-1">Detects frequencies from 1MHz to 8GHz, covering GSM, WIFI, BT, FM, VHF, UHF, and wireless audio/video transmission.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 shrink-0">
                  <Check className="w-3.5 h-3.5 text-red-600" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg">Magnetic Field Detection</h4>
                  <p className="text-white/50 font-light text-sm mt-1">High-sensitivity magnetic sensor specifically designed for standby GPS trackers that don't transmit signals constantly.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 shrink-0">
                  <Check className="w-3.5 h-3.5 text-red-600" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg">30ft Detection Range</h4>
                  <p className="text-white/50 font-light text-sm mt-1">Superior range compared to standard 10ft devices, allowing you to sweep entire rooms quickly.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSpecsSection;
