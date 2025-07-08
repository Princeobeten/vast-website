"use client"

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ChevronLeft, ChevronLeftCircle, ChevronRight } from 'lucide-react';

const FeaturesSection = () => {
  const phoneRefs = useRef<(HTMLImageElement | null)[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    if (phoneRefs.current) {
      phoneRefs.current.forEach((img) => {
        if (img) {
          gsap.to(img, {
            y: 24,
            duration: 2.5,
            ease: 'power1.inOut',
            yoyo: true,
            repeat: -1,
          });
        }
      });
    }
  }, []);

  const features = [
    {
      icon: "/icons/heroicons_wrench-screwdriver.svg",
      title: "Hire Skilled Pros",
      description:
        "Find verified artisans and service providers near you plumbers, electricians, tailors, and more rated and ready to work.",
      image: "/features/iMockup - iPhone 15 Pro Max.svg",
    },
    {
      icon: "/icons/car.svg",
      title: "Book Reliable Rides",
      description:
        "Get around town safely and affordably with our ride hailing feature. Realtime tracking, secure payments, and trusted drivers.",
      image: "/features/iMockup - iPhone 15 Pro Max-1.svg",
    },
    {
      icon: "/icons/solar_shop-linear.svg",
      title: "Marketplace",
      description:
        "Buy or sell products securely on our built-in marketplace. Discover trusted local stores or list your own with full control.",
      image: "/features/iMockup - iPhone 15 Pro Max-2.svg",
    },
    {
      icon: "/icons/empty-wallet.svg",
      title: "VAST Wallet",
      subtitle: "(Escrow-Powered)",
      description:
        "Every payment is protected in our one-way escrow wallet system funds are only released when the job is done right.",
      image: "/features/iMockup - iPhone 15 Pro Max-3.svg",
    },
  ];

  // Responsive helpers
  // Carousel is active from mobile up to lg (max-width: 1279px), grid on xl and above
  const [isCarousel, setIsCarousel] = useState(false);
  useEffect(() => {
    const checkScreen = () => {
      setIsCarousel(window.matchMedia('(max-width: 1279px)').matches);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const handlePrev = () => setCurrentIdx((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  const handleNext = () => setCurrentIdx((prev) => (prev === features.length - 1 ? 0 : prev + 1));

  return (
    <section className="bg-white py-16 px-4 xl:px-8">
      <div className="max-w-[120rem] mx-auto">
        {/* Header */}
        <div className="text-center mb-[300px] md:mb-[350px]">
          <h2
            className="text-4xl lg:text-5xl mb-[20px]"
            style={{
              fontFamily: 'Product Sans, sans-serif',
              fontWeight: 700,
              color: '#0060FE',
            }}
          >
            Features
          </h2>

          <h3
            className="text-lg lg:text-2xl mb-[20px] text-black font-bold"
            style={{
              fontFamily: 'Product Sans, sans-serif',
              fontWeight: 700,
            }}
          >
            Everything You Need, All in One App.
          </h3>

          <p
            className="text-lg lg:text-[22px] text-gray-600 max-w-4xl mx-auto leading-relaxed"
            style={{
              fontFamily: 'Product Sans, sans-serif',
              fontWeight: 400,
            }}
          >
            VAST brings together the most essential everyday services into one
            seamless platform built for convenience, trust, and productivity.
          </p>
        </div>

        {/* Features Grid or Carousel */}
        <div className="w-full flex flex-col items-center">
          {/* xl and up: grid */}
          <div className="hidden xl:grid grid-cols-4 gap-8 w-full">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center relative group">
                <div className="w-full flex justify-center">
                  <img
                    src={feature.image}
                    alt={`${feature.title} mobile interface`}
                    className="max-w-[120px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[118.7px] w-full h-auto object-contain drop-shadow-xl absolute -top-48 right-1/2 translate-x-1/2 lg:right-10 lg:translate-x-0 z-10 transition-transform duration-700 group-hover:animate-pulse"
                  />
                </div>
                <div className="bg-[#F6F9FF] group-hover:bg-[#0060FE] rounded-2xl px-4 sm:px-6 pt-20 pb-8 flex flex-col w-full max-w-[340px] h-[300px] max-h-[300px] mx-auto transition-colors duration-300" style={{ marginTop: '-60px', zIndex: 1 }}>
                  <div className="flex flex-col space-y-4 items-start gap-3 mb-3">
                    <img src={feature.icon} alt="feature icon" className="w-8 h-8 group-hover:filter rounded-md group-hover:bg-white transition duration-300" />
                    <h4
                      className="text-base sm:text-lg lg:text-xl text-[#0060FE] group-hover:text-white transition-colors duration-300"
                      style={{
                        fontFamily: 'Product Sans, sans-serif',
                        fontWeight: 700,
                      }}
                    >
                      {feature.title}
                      {feature.subtitle && (
                        <span className="inline-flex ml-2 text-xs mt-1 text-[#0060FE] font-normal group-hover:text-white transition-colors duration-300">
                          {feature.subtitle}
                        </span>
                      )}
                    </h4>
                  </div>
                  <p
                    className="text-gray-700 text-xs sm:text-sm lg:text-base leading-relaxed text-left group-hover:text-white transition-colors duration-300"
                    style={{
                      fontFamily: 'Product Sans, sans-serif',
                      fontWeight: 400,
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* carousel: mobile to lg (max-xl) */}
          <div className="flex flex-col items-center w-full xl:hidden">
            <div className="flex flex-col items-center relative w-full group">
              <div className="w-full flex justify-center">
                <img
                  
                  src={features[currentIdx].image}
                  alt={`${features[currentIdx].title} mobile interface`}
                  className="max-w-[120px] sm:max-w-[140px] md:max-w-[160px] w-full h-auto object-contain drop-shadow-xl absolute -top-48 md:-top-[290px] md:right-[38%] right-1/2 translate-x-1/2 z-10 transition-transform duration-700 group-hover:animate-pulse"
                />
              </div>
              <div className="bg-[#F6F9FF] group-hover:bg-[#0060FE] rounded-2xl px-4 sm:px-6 pt-20 pb-8 flex flex-col w-full max-w-[340px] h-[300px] max-h-[300px] mx-auto transition-colors duration-300" style={{ marginTop: '-60px', zIndex: 1 }}>
                <div className="flex flex-col space-y-4 items-start gap-3 mb-3">
                  <img src={features[currentIdx].icon} alt="feature icon" className="w-8 h-8 group-hover:filter group-hover:bg-white transition duration-300 rounded-md" />
                  <h4
                    className="text-base sm:text-lg lg:text-xl text-[#0060FE] group-hover:text-white transition-colors duration-300"
                    style={{
                      fontFamily: 'Product Sans, sans-serif',
                      fontWeight: 700,
                    }}
                  >
                    {features[currentIdx].title}
                    {features[currentIdx].subtitle && (
                      <span className="inline-flex ml-2 text-xs mt-1 text-[#0060FE] font-normal group-hover:text-white transition-colors duration-300">
                        {features[currentIdx].subtitle}
                      </span>
                    )}
                  </h4>
                </div>
                <p
                  className="text-gray-700 text-xs sm:text-sm lg:text-base leading-relaxed text-left group-hover:text-white transition-colors duration-300"
                  style={{
                    fontFamily: 'Product Sans, sans-serif',
                    fontWeight: 400,
                  }}
                >
                  {features[currentIdx].description}
                </p>
              </div>
            </div>
            {/* Carousel Buttons */}
            <div className="flex justify-center gap-6 mt-8">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-[#E3EFFF] flex items-center justify-center text-[#0060FE] text-2xl font-bold shadow hover:bg-[#d0e3ff] transition"
                aria-label="Previous Feature"
              >
               <ChevronLeft/>
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-[#E3EFFF] flex items-center justify-center text-[#0060FE] text-2xl font-bold shadow hover:bg-[#d0e3ff] transition"
                aria-label="Next Feature"
              >
                <ChevronRight/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default FeaturesSection;