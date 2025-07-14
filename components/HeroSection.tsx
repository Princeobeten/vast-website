"use client"

import React from 'react';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';


const HeroSection = () => {
  return (
    <section className="w-full relative pt-20 px-4 xl:px-8 h-max overflow-hidden" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
      {/* Radial gradient background */}
      <div className="absolute inset-0 z-0" style={{
        background: 'radial-gradient(circle, #fff 0%, #f3f4f8 70%, #d1d3db 100%)',
      }} />
      <motion.div
        className="max-w-7xl w-full mx-auto flex flex-col xl:items-start items-center justify-center relative z-30"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left Content */}
        <motion.div
          className="flex-1 flex flex-col items-center xl:items-start text-center xl:text-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold leading-tight mb-4 relative z-20">
            Unlock a World of  <span style={{ color: '#4060FE' }}>Convenience</span> and<br />
            <span style={{ color: '#0060FE' }}>Opportunities</span> with Us
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mb-4" style={{ color: '#0A2A66' }}>
            Your one-stop platform connecting service providers, riders, and customers
          </h2>
          <p className="text-[#0A2A66] text-lg md:text-xl max-w-[645px] mb-10 opacity-80">
            We help you find the right service or provider for you. Connect with verified professionals, book rides, make secure payments, and shop - all in one app.
          </p>
          <div className="flex gap-4 flex-wrap justify-center xl:justify-start relative z-10">
            <button className="flex items-center gap-3 border border-[#0060FE] text-[#0060FE] px-8 py-3 rounded-lg font-semibold text-lg hover:bg-[#0060FE] hover:text-white transition-all duration-200">
              Get Started
              <svg width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 11h12M13 7l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </motion.div>
        {/* Right Content - Phone Mockups */}
        <motion.div
          className="flex-1 w-full flex justify-center xl:justify-between items-end gap-[40px] relative min-h-[420px] -mt-24"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src="/mockup-1.png" alt="Phone 1" className="w-[230px] md:w-[260px] xl:w-[397px] h-auto object-contain z-0  left-0" />
          <img src="/mockup-2.png" alt="Phone 2" className="w-[230px] md:w-[260px] xl:w-[397px] h-auto object-contain z-0 " />
          <img src="/mockup-3.png" alt="Phone 3" className="w-[230px] md:w-[260px] xl:w-[397px] h-auto object-c8ntain z-0  right-0" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;