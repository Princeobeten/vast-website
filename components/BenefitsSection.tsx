"use client";

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

const benefits = [
  {
    icon: (
      <Image src="/icons/verify.svg" alt="All-in-One Access" width={40} height={40} />
    ),
    title: "All-in-One Access",
    description: "No more switching apps — ride, hire, sell, and shop all in one place.",
  },
  {
    icon: (
      <Image src="/icons/lock.svg" alt="Escrow-Secured Payments" width={40} height={40} />
    ),
    title: "Escrow-Secured Payments",
    description: "Your money stays safe. Funds are only released when the job is done right.",
  },
  {
    icon: (
      <Image src="/icons/eye.svg" alt="More Visibility for Providers" width={40} height={40} />
    ),
    title: "More Visibility for Providers",
    description: "Artisans and sellers get discovered faster with profiles, ratings, and search filters.",
  },
  {
    icon: (
      <Image src="/icons/cuida_lamp-on-outline.svg" alt="Fast & User-Friendly" width={40} height={40} />
    ),
    title: "Fast & User-Friendly",
    description: "A lightweight mobile app that works smoothly, even on slower networks.",
  },
  {
    icon: (
      <Image src="/icons/game-icons_africa.svg" alt="Built for Africans" width={40} height={40} />
    ),
    title: "Built for Africans",
    description: "Tailored for everyday users, vendors, and professionals across Nigeria and beyond.",
  },
];

const BenefitsSection = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  // Remove scrollIndex and scrollToIndex logic

  useEffect(() => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const singleSetWidth = el.scrollWidth / 2; // since we duplicate the cards
    if (singleSetWidth <= 0) return;
    let ctx = gsap.context(() => {
      const loop = () => {
        gsap.fromTo(
          el,
          { scrollLeft: 0 },
          {
            scrollLeft: singleSetWidth,
            duration: 12,
            ease: 'none',
            onComplete: () => {
              el.scrollLeft = 0;
              loop();
            },
          }
        );
      };
      loop();
    }, el);
    return () => ctx.revert();
  }, []);

  // Removed handlePrev and handleNext functions

  return (
    <section className="relative bg-[#0060FE] bg-cover bg-center " style={{ backgroundImage: 'url(/geometiric-bg.png)' }}>
      <div className="max-w-[120rem] mx-auto py-20 px-4 xl:px-0 bg-[#0060FE]/80">
        <div className="text-center mb-12">
          <h2 className="text-4xl xl:text-5xl font-bold text-white mb-[30px]" style={{ fontFamily: 'Product Sans, sans-serif' }}>Benefits</h2>
          <h3 className="text-2xl xl:text-[28px] font-bold text-white mb-[10px]" style={{ fontFamily: 'Product Sans, sans-serif' }}>Built for Convenience. Designed for Growth.</h3>
          <p className="text-white/90 font-[400] text-lg xl:text-[22px] max-w-3xl mx-auto" style={{ fontFamily: 'Product Sans, sans-serif' }}>
            Whether you're booking a ride, hiring a service, or earning as a provider VAST makes everyday life smarter, safer, and more rewarding.
          </p>
        </div>
        <div className="relative">
          {/* Removed Scroll Buttons */}
          <div
            ref={scrollRef}
            className="flex justify-start gap-6 overflow-x-auto scrollbar-hide py-4 px-2 xl:px-0"
            style={{ scrollBehavior: 'auto' }}
          >
            {/* Duplicate the benefits array for seamless looping */}
            {benefits.concat(benefits).map((benefit, idx) => (
              <div
                key={idx}
                className="min-w-[320px] max-w-[343px] w-full bg-white rounded-[20px] flex flex-col items-start px-[30px] py-[30px] snap-center transition-all duration-300"
                style={{ fontFamily: 'Product Sans, sans-serif' }}
              >
                <div className="mb-6">
                  <div className="w-[77px] h-[77px] bg-[#E3EFFF] rounded-xl flex items-center justify-center">
                    {React.cloneElement(benefit.icon, { style: { background: 'none' } })}
                  </div>
                </div>
                <h4 className="text-[22px] font-bold text-[#0060FE] mb-[15px]">{benefit.title}</h4>
                <p className="text-gray-700 text-[14px]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection; 