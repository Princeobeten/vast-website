"use client"

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { toast } from 'sonner';

const images = [
  '/hero-section-image.svg',
  '/hero-section-image-1.svg',
];

const HeroSection = () => {
  const phoneRef = useRef<HTMLImageElement>(null);
  const [imgIdx, setImgIdx] = useState(0);

  // Floating animation
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

  // Bounce in/out image switch
  useEffect(() => {
    const interval = setInterval(() => {
      if (!phoneRef.current) return;
      const tl = gsap.timeline();
      tl.to(phoneRef.current, {
        scale: 0.85,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
        clearProps: 'scale,opacity',
      })
        .add(() => {
          setImgIdx((prev) => (prev + 1) % images.length);
        })
        .to(phoneRef.current, {
          scale: 1,
          opacity: 1,
          duration: 0.7,
          ease: 'power2.inOut',
        });
    }, 3000);
    return () => clearInterval(interval);
  }, []);


  const handleStoreClick = (store: string) => {
    toast.info(`${store} coming soon!`);
  };

  return (
    <section className="bg-white py-16 px-4 xl:px-8 w-full max-w-[120rem] mx-auto">
      <div className="">
        <div className="flex justify-between md:justify-center xl:justify-between text-center xl:text-left flex-wrap gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-[20px]">
            <h1 
              className="text-4xl lg:text-5xl xl:text-6xl leading-tight"
              style={{ 
                fontFamily: 'Product Sans, sans-serif',
                fontWeight: 700,
                color: '#0060FE'
              }}
            >
              Unlock a World of Convenience <br /> & Opportunities
            </h1>
            
            <p 
              className="text-lg lg:text-[32px] text-[#6B6B6B] leading-relaxed"
              style={{ 
                fontFamily: 'Product Sans, sans-serif',
                fontWeight: 400
              }}
            >
              Your one-stop platform for services, rides, <br /> payments, and shopping.
            </p>
            
            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-[10px]">
              <button 
               onClick={() => handleStoreClick("Google Play")}
                className="flex items-center justify-center gap-3 bg-[#0060FE] text-white px-6 py-3 rounded-lg hover:bg-blue-700  transition-all duration-300 transform hover:scale-105"
                style={{ 
                  fontFamily: 'Product Sans, sans-serif',
                  fontWeight: 400,
                  fontSize: '20px'
                }}
              >
                <img src="/icons/mage_playstore.svg" alt="mage_playstore" />
                Download on Google Store
              </button>
              
              <button 
                onClick={() => handleStoreClick("App Store")}
                className="flex items-center justify-center gap-3 bg-[#0060FE] text-white px-6 py-3 rounded-lg hover:bg-blue-700  transition-all duration-300 transform hover:scale-105"
                style={{ 
                  fontFamily: 'Product Sans, sans-serif',
                  fontWeight: 400,
                  fontSize: '20px'
                }}
              >
                <img src="/icons/ic_outline-apple.svg" alt="ic_outline" />
                Download on App Store
              </button>
            </div>
          </div>
          
          {/* Right Content - Phone Image */}
          <div className="flex justify-center lg:justify-end">
            <img 
              ref={phoneRef}
              src={images[imgIdx]}
              alt="Veet mobile app interface showing convenience services"
              className="w-[504px] max-w-full h-auto max-h-[500px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;