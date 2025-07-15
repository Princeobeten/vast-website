"use client"

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

const AboutSection = () => {
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
    <section className="bg-[#E9F2FF] py-[80px] w-full flex items-center justify-center min-h-[600px]">
      <div className="w-full max-w-[80rem] mx-auto flex flex-col xl:flex-row items-center justify-between gap-12 px-4 xl:px-8">
        {/* Left: Phone Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
           ref={phoneRef}
            src="/about-section-image.png" 
            alt="Vast app phone mockup"
            className="max-w-full h-auto max-h-[600px] object-contain"
          />
        </div>
        {/* Right: Text Content */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-2xl xl:pl-12">
          <div
            className="text-lg mb-4"
            style={{
              fontFamily: 'Product Sans, sans-serif',
              color: '#0060FE',
              fontWeight: 500,
            }}
          >
            About us
          </div>
          <h2
            className="text-4xl md:text-5xl xl:text-6xl font-bold text-black mb-6"
            style={{ fontFamily: 'Product Sans, sans-serif', fontWeight: 700 }}
          >
            Everyday Solutions<br className="hidden md:block" /> with Vast.
          </h2>
          <p
            className="text-lg md:text-xl text-black mb-8 max-w-xl"
            style={{ fontFamily: 'Product Sans, sans-serif', fontWeight: 400 }}
          >
            Vast app is a comprehensive platform that connects service providers, riders, and customers, enabling seamless transactions and interactions with verified professionals
          </p>
          <a
            href="/about"
            className="bg-[#0060FE] text-white px-8 h-[50px] rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 flex items-center justify-center text-lg"
            style={{ fontFamily: 'Product Sans, sans-serif', fontWeight: 400 }}
          >
            Discover More
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;