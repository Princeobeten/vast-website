"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { toast } from "sonner";

const images = ["/hero-section-image.svg", "/hero-section-image-1.svg"];

const HeroSection = () => {
  const phoneRef = useRef<HTMLImageElement>(null);
  const refereeRef = useRef<HTMLImageElement>(null); // Add ref for referee
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    if (phoneRef.current) {
      gsap.to(phoneRef.current, {
        y: 24,
        duration: 2.5,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
      });
    }
  }, []);

  useEffect(() => {
    if (refereeRef.current) {
      const updateAnimation = () => {
        const screenWidth = window.innerWidth;
        // Get the width of the referee image (if loaded)
        const refereeWidth = refereeRef.current ? refereeRef.current.offsetWidth : 0;
        // Calculate the distance: from its current position to the opposite end
        // We'll move it from right:0 to left:0 (or vice versa)
        const startX = 0;
        const endX = -(screenWidth - refereeWidth);
        // Animate from startX to endX and back
        gsap.fromTo(
          refereeRef.current,
          { x: startX },
          {
            x: endX,
            duration: 4,
            ease: 'power1.inOut',
            yoyo: true,
            repeat: -1,
          }
        );
      };
      updateAnimation();
      // Re-run animation on resize for responsiveness
      window.addEventListener('resize', updateAnimation);
      return () => {
        window.removeEventListener('resize', updateAnimation);
        gsap.killTweensOf(refereeRef.current);
      };
    }
  }, []);

  const handleStoreClick = (store: string) => {
    toast.info(`${store} coming soon!`);
  };

  return (
    <section className="bg-[#0060FE] overflow-hidden h-max py-[100px] lg:py-[180px] flex justify-center items-center relative">
      {/* Overlay */}
      <div className="bg-black/30 w-full h-full absolute"/>
      {/* Decorative Lines */}
      {/* Top center line */}
      <img src="/lines/1.svg" alt="line-top" className="hidden md:block absolute left-10 xl:left-[40%] top-[15%] -translate-x-1/2 w-[148px] z-10 pointer-events-none" />
      {/* Middle right line */}
      <img src="/lines/2.svg" alt="line-right" className="hidden xl:block absolute right-20 top-1/3 w-[319px] z-0 pointer-events-none" />
      {/* Bottom left line */}
      <img src="/lines/3.svg" alt="line-bottom-left" className="hidden md:block absolute left-0 bottom-0 w-[180px] md:w-[262px] z-0 pointer-events-none" />
      {/* Bottom right line */}
      <img src="/lines/4.svg" alt="line-bottom-right" className="hidden md:block absolute right-20 bottom-0 w-[220px] md:w-[450px] z-0 pointer-events-none" />
      <div className="w-full max-w-[85rem] mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-12 relative">
          {/* Left Content */}
          <div className="flex-1 flex flex-col items-center xl:items-start text-center xl:text-left space-y-8 px-4 lg:px-0">
            <h1
              className="text-white text-5xl xl:text-[80px] font-bold leading-tight"
              style={{ fontFamily: "Product Sans, sans-serif" }}
            >
              Unlock a World of
              <br />
              Convenience &<br />
              Opportunities
            </h1>
            <p
              className="text-white text-lg lg:text-2xl font-normal max-w-xl"
              style={{ fontFamily: "Product Sans, sans-serif" }}
            >
              Your one-stop platform for services, rides,
              <br className="hidden md:block" /> payments, and shopping.
            </p>
            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <a
                href="#"
                className="bg-black rounded-xl flex items-center px-5 py-3 gap-3 hover:scale-105 transition shadow-lg"
                style={{ minWidth: 180 }}
              >
                <img
                  src="/icons/ic_outline-apple.svg"
                  alt="App Store"
                  className="w-7 h-7"
                />
                <div className="flex flex-col items-start">
                  <span className="text-xs text-white">Download on the</span>
                  <span className="text-lg text-white font-semibold">
                    App Store
                  </span>
                </div>
              </a>
              <a
                href="#"
                className="bg-white rounded-xl flex items-center px-5 py-3 gap-3 hover:scale-105 transition shadow-lg"
                style={{ minWidth: 180 }}
              >
                <img
                  src="/icons/2993672_brand_brands_google_logo_logos_icon 1.svg"
                  alt="Google Play"
                  className="w-7 h-7"
                />
                <div className="flex flex-col items-start">
                  <span className="text-xs text-[#6B6B6B]">GET IT ON</span>
                  <span className="text-lg text-[#020202] font-semibold">
                    Google Play
                  </span>
                </div>
              </a>
            </div>
          </div>
          {/* Right Content - Phone and Referee Images */}
          <div className="flex-1 flex flex-col items-center xl:items-end justify-center w-full h-full min-h-[427.33642578125px]">
            <img 
              // ref={phoneRef}
              src="/hero phone image.png"
              alt="Vast app phone mockup"
              className="w-[350px] md:w-[400px] xl:w-[479.2558898925781px] max-w-full h-auto drop-shadow-2xl z-10 relative xl:absolute xl:right-16 xl:top-10 animate-pulse"
              style={{ zIndex: 2 }}
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 xl:right-0 xl:bottom-0">
        <img
          ref={refereeRef} // Attach ref here
          src="/fun-3d-illustration-american-referee 2.svg"
          alt="3D Referee"
          className="w-[80px] md:w-[140px] xl:w-[260px]  max-w-full h-auto z-20"
          style={{ zIndex: 3 }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
