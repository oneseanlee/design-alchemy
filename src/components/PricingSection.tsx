import { Check } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="pricing" className="pt-24 pb-24 border-t border-white/5 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">Ready to Stay Protected?</h2>
          <p className="text-white/50 text-lg">Free 5-7 Day Worldwide Shipping Included.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start max-w-5xl mx-auto">
          {/* Single Pack */}
          <div className="glass-panel p-8 rounded-2xl border border-white/10 flex flex-col hover:border-white/20 transition-all">
            <div className="mb-4">
              <h3 className="text-xl font-medium text-white">Starter</h3>
              <p className="text-white/50 text-sm mt-1">For personal travel safety.</p>
            </div>
            <div className="mb-8 flex items-baseline gap-2">
              <span className="text-4xl font-semibold text-white">$69.99</span>
              <span className="text-white/40 line-through text-lg">$149.99</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Check className="w-4 h-4 text-red-600" /> 1x SafeSense™ T66
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Check className="w-4 h-4 text-red-600" /> Charging Cable
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Check className="w-4 h-4 text-red-600" /> User Manual
              </li>
            </ul>
            <button className="w-full py-3 rounded-lg border border-white/20 text-white font-medium hover:bg-white hover:text-black transition-colors">
              Buy Now
            </button>
            <div className="mt-4 text-center text-xs font-medium text-red-600">Save 53%</div>
          </div>

          {/* 2-Pack (Featured) */}
          <div className="flex flex-col z-10 bg-[#121212] border-brand-red border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-[0_0_30px_rgba(255,112,133,0.1)] scale-105">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-lg bg-brand-red">
              Most Popular
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-medium text-white">Partner Bundle</h3>
              <p className="text-white/50 text-sm mt-1">Keep one, gift one.</p>
            </div>
            <div className="mb-8 flex items-baseline gap-2">
              <span className="text-4xl font-semibold text-white">$119</span>
              <span className="text-white/40 text-lg">/ bundle</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-sm text-white">
                <Check className="w-4 h-4 text-red-600" /> 2x SafeSense™ T66 Devices
              </li>
              <li className="flex items-center gap-3 text-sm text-white">
                <Check className="w-4 h-4 text-red-600" /> Free Priority Shipping
              </li>
              <li className="flex items-center gap-3 text-sm text-white">
                <Check className="w-4 h-4 text-red-600" /> 24/7 Support
              </li>
            </ul>
            <button className="w-full py-3 rounded-lg text-white font-medium hover:bg-[#ff5670] transition-colors shadow-lg shadow-red-900/20 bg-brand-red">
              Add to Cart
            </button>
            <div className="mt-4 text-center text-xs text-white/50">Save additional 20%</div>
          </div>

          {/* 3-Pack */}
          <div className="glass-panel p-8 rounded-2xl border border-white/10 flex flex-col hover:border-white/20 transition-all">
            <div className="mb-4">
              <h3 className="text-xl font-medium text-white">Family Pack</h3>
              <p className="text-white/50 text-sm mt-1">Total home & car coverage.</p>
            </div>
            <div className="mb-8 flex items-baseline gap-2">
              <span className="text-4xl font-semibold text-white">$159</span>
              <span className="text-white/40 text-lg">/ bundle</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Check className="w-4 h-4 text-red-600" /> 3x SafeSense™ T66 Devices
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Check className="w-4 h-4 text-red-600" /> Express 2-3 Day Shipping
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Check className="w-4 h-4 text-red-600" /> Best Value
              </li>
            </ul>
            <button className="w-full py-3 rounded-lg border border-white/20 text-white font-medium hover:bg-white hover:text-black transition-colors">
              Buy Now
            </button>
            <div className="mt-4 text-center text-xs font-medium text-red-600">Save 30%</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
