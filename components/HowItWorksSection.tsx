"use client"

import React, { useRef, useEffect, useState } from 'react';

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

const stepIcons = [
  <img src="/icons/how-it-works-section/tabler_download.svg" alt="Download App" className="w-7 h-7" />,
  <img src="/icons/how-it-works-section/material-symbols-light_explore-outline.svg" alt="Explore & Choose" className="w-7 h-7" />,
  <img src="/icons/how-it-works-section/material-symbols_schedule-outline.svg" alt="Book or Hire" className="w-7 h-7" />,
  <img src="/icons/how-it-works-section/security-safe.svg" alt="Pay Securely" className="w-7 h-7" />,
];

const handleStoreClick = (store: string) => {
  console.log(`${store} coming soon!`);
};

const HowItWorksSection = () => {
  const stepsContainerRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const firstStepRef = useRef<HTMLDivElement | null>(null);
  const [scrollX, setScrollX] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  // Update maxScroll on resize
  useEffect(() => {
    const updateMaxScroll = () => {
      if (!stepsContainerRef.current || !sectionRef.current) return;
      const container = stepsContainerRef.current;
      const visibleWidth = sectionRef.current.offsetWidth;
      setMaxScroll(Math.max(container.scrollWidth - visibleWidth, 0));
    };
    updateMaxScroll();
    window.addEventListener('resize', updateMaxScroll);
    return () => window.removeEventListener('resize', updateMaxScroll);
  }, []);

  // Scroll buttons handler
  const scrollByStep = (direction: 'left' | 'right') => {
    if (!stepsContainerRef.current || !sectionRef.current) return;
    const container = stepsContainerRef.current;
    const visibleWidth = sectionRef.current.offsetWidth;
    let newScrollX = scrollX;
    if (direction === 'left') {
      newScrollX = Math.max(scrollX - visibleWidth, 0);
    } else {
      newScrollX = Math.min(scrollX + visibleWidth, maxScroll);
    }
    setScrollX(newScrollX);
    container.style.transform = `translateX(-${newScrollX}px)`;
    container.style.transition = 'transform 0.3s cubic-bezier(0.4,0,0.2,1)';
  };

  // Keep transform in sync with scrollX (e.g., on resize)
  useEffect(() => {
    if (!stepsContainerRef.current) return;
    stepsContainerRef.current.style.transform = `translateX(-${scrollX}px)`;
    stepsContainerRef.current.style.transition = 'transform 0.3s cubic-bezier(0.4,0,0.2,1)';
  }, [scrollX]);

  useEffect(() => {
    let sectionTop = 0;
    let sectionHeight = 0;
    let stepWidth = 0;
    let windowHeight = 0;

    function updateMetrics() {
      if (!sectionRef.current || !stepsContainerRef.current) return;
      sectionTop = sectionRef.current.offsetTop;
      sectionHeight = sectionRef.current.offsetHeight;
      // Calculate step width based on container width divided by number of steps
      stepWidth = sectionRef.current.offsetWidth / steps.length;
      windowHeight = window.innerHeight;
    }

    function onScroll() {
      if (!sectionRef.current || !stepsContainerRef.current) return;
      updateMetrics();
      const scrollY = window.scrollY;
      const scrollHeight = stepWidth * (steps.length - 1); // Total scroll distance needed
      const start = sectionTop;
      const end = sectionTop + scrollHeight;

      if (scrollY >= start && scrollY <= end) {
        // Pin the section
        sectionRef.current.style.position = 'sticky';
        sectionRef.current.style.top = '0px';
        sectionRef.current.style.overflow = 'hidden';
        // Calculate which step we should be on
        const progress = Math.min(Math.max(scrollY - start, 0), scrollHeight);
        const currentStep = Math.floor(progress / (scrollHeight / (steps.length - 1)));
        const stepProgress = (progress % (scrollHeight / (steps.length - 1))) / (scrollHeight / (steps.length - 1));
        // Create pause effect: only move when we're in the transition zone
        const pauseZone = 0.7; // 70% of each step is pause, 30% is transition
        let translateX = 0;
        if (stepProgress > pauseZone) {
          // We're in transition zone
          const transitionProgress = (stepProgress - pauseZone) / (1 - pauseZone);
          translateX = currentStep * stepWidth + (transitionProgress * stepWidth);
        } else {
          // We're in pause zone
          translateX = currentStep * stepWidth;
        }
        stepsContainerRef.current.style.transform = `translateX(-${translateX}px)`;
        stepsContainerRef.current.style.transition = 'transform 0.1s ease-out';
      } else {
        // Unpin and reset
        sectionRef.current.style.position = '';
        sectionRef.current.style.top = '';
        sectionRef.current.style.overflow = '';
        stepsContainerRef.current.style.transform = '';
        stepsContainerRef.current.style.transition = '';
      }
    }

    function onResize() {
      updateMetrics();
      onScroll();
    }

    updateMetrics();
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-white w-full py-16 md:py-20 mb-20 px-4 xl:px-8 max-w-[85rem] mx-auto relative" id="how-it-works" style={{ overflow: 'hidden' }}>
      <div className="text-center mb-8 md:mb-12">
        <div className="text-base md:text-lg mb-2" style={{ fontFamily: 'Product Sans, sans-serif', color: '#0060FE', fontWeight: 500 }}>
          How it Works
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-black mb-0" style={{ fontFamily: 'Product Sans, sans-serif', fontWeight: 700 }}>
          Use VAST in Just a Few Easy Steps.
        </h2>
      </div>
      <div className="w-full md:overflow-hidden overflow-x-auto">
        <div
          ref={stepsContainerRef}
          className="relative flex flex-row items-center justify-between w-max max-w-full mx-auto py-10 md:py-20 gap-0 transition-transform duration-200"
          style={{ willChange: 'transform' }}
        >
          {steps.map((step, idx) => (
            <React.Fragment key={step.number}>
              <div ref={idx === 0 ? firstStepRef : undefined} className="flex flex-col items-center flex-1 min-w-[180px] max-w-[300px] mx-0">
                <div className='flex flex-col items-center'>
                  <div className='flex'>
                    {/* Step number */}
                    <div className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full text-base md:text-lg font-bold mb-2 z-10 bg-[#0060FE] text-white">
                      {step.number}
                    </div>
                    {/* Step icon in white circle with blue bg */}
                    <div className='bg-[#F5F6FA] rounded-full p-6 my-6'>
                      <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full shadow-lg relative z-10 bg-[#0060FE] scale-110">
                        <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center rounded-full brightness-0 invert">
                          {stepIcons[idx]}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='ml-10'>
                  {/* Step title */}
                  <div className="text-base md:text-xl font-bold text-center mb-2 text-black" style={{ fontFamily: 'Product Sans, sans-serif' }}>
                    {step.title.replace('the App', 'App')}
                  </div>
                  {/* Step description */}
                  <div className="text-xs md:text-sm text-center max-w-[220px] text-gray-500" style={{ fontFamily: 'Product Sans, sans-serif' }}>
                    {step.description}
                  </div>
                </div>
              </div>
              {/* Connector SVGs between steps (all screens) */}
              {idx < steps.length - 1 && (
                <img
                  src={idx === 0 ? '/arrow/active.svg' : '/arrow/un-active.svg'}
                  alt="step connector"
                  className="mx-2 md:mx-4"
                  style={{
                    width: '230px',
                    height: '59px',
                    zIndex: 1,
                    pointerEvents: 'none',
                    opacity: 1,
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
        {/* Chevron scroll buttons */}
        <div className="absolute right-4 bottom-4 flex gap-2 z-50">
          <button
            onClick={() => scrollByStep('left')}
            className="w-12 h-12 rounded-full bg-[#F5F6FA] flex items-center justify-center shadow hover:bg-[#e0eaff] transition disabled:opacity-40"
            aria-label="Scroll left"
            disabled={scrollX === 0}
          >
            {/* Left chevron SVG */}
            <svg width="28" height="28" fill="none" stroke="#0060FE" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
          </button>
          <button
            onClick={() => scrollByStep('right')}
            className="w-12 h-12 rounded-full bg-[#F5F6FA] flex items-center justify-center shadow hover:bg-[#e0eaff] transition disabled:opacity-40"
            aria-label="Scroll right"
            disabled={scrollX >= maxScroll}
          >
            {/* Right chevron SVG */}
            <svg width="28" height="28" fill="none" stroke="#0060FE" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;