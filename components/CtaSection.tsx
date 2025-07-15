"use client"

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CtaSection = () => {
  const phoneRef = useRef<HTMLImageElement>(null);

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

  return (
    <section className="w-full bg-[#0060FE] xl:pt-32 px-6 md:px-12 xl:px-16 relative xl:mb-[300px]">
      {/* Decorative curved lines */}
      <svg className="absolute left-0 top-1/4 w-32 h-32 opacity-20" viewBox="0 0 100 100" fill="none">
        <path d="M20 80 Q50 20 80 80" stroke="white" strokeWidth="2" fill="none"/>
        <path d="M10 60 Q40 10 70 60" stroke="white" strokeWidth="1.5" fill="none"/>
      </svg>
      {/* <svg className="absolute right-0 bottom-1/4 w-40 h-40 opacity-15" viewBox="0 0 100 100" fill="none">
        <path d="M20 20 Q50 80 80 20" stroke="white" strokeWidth="2" fill="none"/>
        <path d="M30 40 Q60 90 90 40" stroke="white" strokeWidth="1.5" fill="none"/>
      </svg> */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-end h-max gap-16 relative py-20">
        {/* Left: Phone Images */}
        <div  ref={phoneRef} className="flex-1 flex items-center justify-center min-w-[400px] max-w-[600px] xl:absolute left-0">
          <img
          //  ref={phoneRef}
            src="/cta/phone-1.png"
            alt="Vast app phone 1"
            className="w-[240px] md:w-[280px] xl:w-[320px] h-auto object-contain drop-shadow-2xl z-20  mt-[156px]"
          />
          <img
          //  ref={phoneRef}
            src="/cta/phone-2.png"
            alt="Vast app phone 2"
            className="w-[240px] md:w-[280px] xl:w-[320px] h-auto object-contain drop-shadow-2xl -ml-[90px]"
          />
        </div>
        {/* Right: Text and Buttons */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-2xl text-white">
          <div className="text-lg md:text-xl mb-4 text-[#FFF0C2] font-medium">
            Download Our App
          </div>
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            Join the Vast App<br />Community Today
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-blue-100 leading-relaxed">
            Discover a smarter way to live, work,<br />and transact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#" className="block">
              <img src="/app.svg" alt="Download on the App Store" className="h-[82px] w-auto hover:opacity-80 transition-opacity" />
            </a>
            <a href="#" className="block">
              <img src="/play.svg" alt="Get it on Google Play" className="h-[82px] w-auto hover:opacity-80 transition-opacity" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;