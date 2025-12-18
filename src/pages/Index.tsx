import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TechSpecsSection from "@/components/TechSpecsSection";
import ReviewsSection from "@/components/ReviewsSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-brand-dark">
      {/* Ambient Background Glow */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[180px] opacity-10 bg-brand-red"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-900 rounded-full blur-[150px] opacity-10"></div>
      </div>

      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <TechSpecsSection />
      <ReviewsSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;