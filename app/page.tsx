import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <AboutSection/>
      
      <div id="features">

      <FeaturesSection/>
      </div>

      <div id="how-it-works">
        <HowItWorksSection/>
      </div>

      <div id="benefits">
        <BenefitsSection/>
      </div>
    </div>
  );
}
