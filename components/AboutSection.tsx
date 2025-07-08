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
    <section className="relative">
      {/* White background for "About us" title */}
      <div className="bg-white py-16 text-center">
        <h2 
          className="text-4xl lg:text-5xl"
          style={{ 
            fontFamily: 'Product Sans, sans-serif',
            fontWeight: 700,
            color: '#0060FE'
          }}
        >
          About us
        </h2>
      </div>
      
      {/* Blue background section */}
      <div className="bg-[#0060FE] object-center" style={{
        backgroundImage: "url(/geometiric-bg.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}>
       <div className='bg-[#0060FE]/80  py-16 px-4 xl:px-8'>
       <div className="max-w-[120rem] mx-auto">
          <div className="flex justify-between md:justify-center xl:justify-between flex-wrap gap-12 items-center">
            {/* Left Content - Phone Image */}
            <div className="flex justify-center lg:justify-start">
              <img 
               ref={phoneRef}
                src="/about-section-image.png" 
                alt="Vast mobile app showing 'You're All Set To Go' success message"
                className="max-w-full h-auto max-h-[600px] object-contain"
              />
            </div>
            
            {/* Right Content - Text */}
            <div className="space-y-[40px] text-white md:text-center xl:text-left">
              <h3 
                className="text-[24px] lg:text-[28px] leading-tight"
                style={{ 
                  fontFamily: 'Product Sans, sans-serif',
                  fontWeight: 700
                }}
              >
                Powering Everyday Solutions with Smart Technology.
              </h3>
              
              <p 
                className="text-lg lg:text-xl leading-relaxed opacity-90 max-w-[662px]"
                style={{ 
                  fontFamily: 'Product Sans, sans-serif',
                  fontWeight: 400
                }}
              >
                Welcome to Vast App, a product of Nkiri Synergies LTD. We are a 
                dynamic company that leverages technology to drive innovation in 
                various sectors. Our mission is to provide efficient, reliable, and 
                sustainable solutions that meet the evolving needs of our customers.
              </p>
              
              {/* Learn More Button */}
              <button 
                className="bg-white text-[#0060FE] px-8 h-[50px] rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                style={{ 
                  fontFamily: 'Product Sans, sans-serif',
                  fontWeight: 400,
                  fontSize: '20px'
                }}
              >
               <Link href='/about'> Learn more</Link>
              </button>
            </div>
          </div>
        </div>
       </div>
      </div>
    </section>
  );
};

export default AboutSection;