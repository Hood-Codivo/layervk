import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PersonasSection from "@/components/PersonasSection";
import TechSection from "@/components/TechSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <PersonasSection />
        <TechSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
