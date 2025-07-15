import AboutSection from "@/components/AboutSection";
import CtaSection from "@/components/CtaSection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      
      <div id="features">
      <FeaturesSection/>
      </div>
      <AboutSection/>

      <div id="how-it-works">
        <HowItWorksSection/>
      </div>

      <CtaSection/>
    </div>
  );
}
