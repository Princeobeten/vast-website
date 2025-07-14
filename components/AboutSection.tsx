"use client"

import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#F8FAFC] to-[#EAF3F8] pt-[140px] px-4 h-max">
      <div className="flex flex-col items-center justify-center">
        <motion.div
          className='max-w-7xl mx-auto flex flex-col items-center justify-center'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Heading */}
          <motion.h2
            className="text-3xl md:text-5xl font-semibold xl:text-[60px] text-center mb-6"
            style={{ fontFamily: 'var(--font-manrope), sans-serif', color: '#222' }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            We shall <span className="text-[#4060FE]">never deny</span> a request, even the<br className="hidden md:block" />
            <span className="text-[#0060FE]">most comprehensive  service need</span>
          </motion.h2>
          {/* Subtitle */}
          <motion.p
            className="text-[#8B8B8B] text-lg md:text-xl text-center max-w-2xl mb-[48px]"
            style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Vast app is a comprehensive platform that connects service providers, riders, and customers, enabling seamless transactions and interactions with verified professionals
          </motion.p>
          {/* Store Badges */}
          <motion.div
            className="flex gap-[28px] mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/play store.svg" alt="Get it on Google Play" className="h-[60px] w-auto" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/app store.svg" alt="Download on the App Store" className="h-[60px] w-auto" />
            </a>
          </motion.div>
        </motion.div>
        {/* Phone Mockups */}
        <motion.div
          className="flex flex-col md:flex-row items-end justify-center gap-4 md:gap-8 mt-4 w-full"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src="/mockup-1.png" alt="Phone 1" className="w-[220px] md:w-[260px] xl:w-[459px] h-auto object-contain z-10" />
          <img src="/mockup-3.png" alt="Phone 2" className="w-[220px] md:w-[260px] xl:w-[459px] h-auto object-contain z-20" />
          <img src="/mockup-2.png" alt="Phone 3" className="w-[220px] md:w-[260px] xl:w-[459px] h-auto object-contain z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;