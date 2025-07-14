"use client"

import React, { useState, useEffect, useRef } from 'react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

const steps = [
  {
    number: 1,
    title: 'Download the App',
    description: 'Get VAST on your mobile device from the Play Store or App Store. Sign up as a user or a service provider.',
  },
  {
    number: 2,
    title: 'Explore & Choose',
    description: 'Search for rides, services, products, or post your own job. Use filters to find exactly what you need.',
  },
  {
    number: 3,
    title: 'Book or Hire',
    description: 'Send a request to a driver or service provider. Describe your job, set your budget, and schedule the time.',
  },
  {
    number: 4,
    title: 'Pay Securely',
    description: 'Make your payment using the built-in VAST Wallet. Your funds are held in escrow until the job is done right.',
  },
];

const handleStoreClick = (store: string) => {
  toast.info(`${store} coming soon!`);
};

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(1);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Check if we're in the section
      if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
        const relativeScroll = scrollPosition - sectionTop;
        const progress = relativeScroll / sectionHeight;

        // Calculate which step should be active based on scroll progress
        const stepIndex = Math.min(Math.floor(progress * steps.length) + 1, steps.length);
        setActiveStep(stepIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-16 px-4 xl:px-8 w-full max-w-[120rem] mx-auto flex flex-col justify-center"
      id="how-it-works"
    >
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-4xl xl:text-5xl mb-4 font-bold text-[#0060FE]"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          How It Works
        </motion.h2>
        <motion.h3
          className="text-xl xl:text-2xl mb-4 font-bold text-gray-800"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Use VAST in Just a Few Easy Steps.
        </motion.h3>
        <motion.p
          className="text-gray-600 text-base xl:text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Whether you want to move, hire, earn, or sell VAST makes it simple and secure for everyone.
        </motion.p>
      </motion.div>
      {/* Stepper */}
      <motion.div
        className="relative flex flex-col xl:flex-row items-center justify-between px-4 xl:px-8 mb-16"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1, y: 0,
            transition: { staggerChildren: 0.15, duration: 0.7, ease: 'easeOut' }
          }
        }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Progress line for desktop (z-0) */}
        <div className="hidden xl:block absolute top-8 left-0 right-0 h-1 mx-4 xl:mx-8 z-0 bg-[#0060FE1A]/10 rounded-full">
          <div
            className="h-full bg-[#0060FE] rounded-full transition-all duration-500 ease-out"
            style={{ width: `${((activeStep - 1) / (steps.length - 1)) * 100}%` }}
          />
        </div>
        {/* Steps (z-10) */}
        {steps.map((step, idx) => (
          <motion.div
            key={step.number}
            ref={el => { stepRefs.current[idx] = el; }}
            className={`flex flex-col relative items-center xl:items-start flex-1 mb-12 lg:mb-0 transition-all duration-500 z-20 ${
              activeStep >= step.number ? 'opacity-100 transform translate-y-0' : 'opacity-50 transform translate-y-4'
            }`}
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Step circle (z-20) */}
            <div
              className={`flex items-center bg-[#0060FE] justify-center w-16 h-16 rounded-full border-4 text-[28px] font-bold mb-[40px] transition-all duration-500 relative z-40 ${
                activeStep >= step.number
                  ? 'border-[#0060FE] text-white scale-110'
                  : 'border-none text-gray-400'
              }`}
            >
              {step.number}
            </div>
            {/* Step content */}
            <div className="text-center xl:text-left max-w-xs xl:mr-4">
              <h4
                className={`text-[24px] font-bold mb-[16px] transition-colors duration-300 ${
                  activeStep >= step.number ? 'text-[#0060FE]' : 'text-gray-400'
                }`}
              >
                {step.title}
              </h4>
              <p
                className={`text-sm lg:text-base transition-colors duration-300 ${
                  activeStep >= step.number ? 'text-gray-700' : 'text-gray-400'
                }`}
              >
                {step.description}
              </p>
            </div>
            {/* Vertical line for mobile */}
            {idx < steps.length - 1 && (
              <div className="xl:hidden w-1 h-16 bg-gray-200 mt-6 rounded-full overflow-hidden">
                <div
                  className={`w-full bg-[#0060FE] transition-all duration-500 ${
                    activeStep > step.number ? 'h-full' : 'h-0'
                  }`}
                />
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
      {/* Download Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button  onClick={() => handleStoreClick("Google Play")} className="flex items-center justify-center gap-3 bg-[#0060FE] text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 text-lg font-medium transform hover:scale-105">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
          </svg>
          Download on Google Play
        </button>
        <button onClick={() => handleStoreClick("App Store")} className="flex items-center justify-center gap-3 bg-[#0060FE] text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 text-lg font-medium transform hover:scale-105">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
          </svg>
          Download on App Store
        </button>
      </div>
    </section>
  );
};

export default HowItWorksSection;