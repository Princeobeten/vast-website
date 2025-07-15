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
    <section className="bg-[#F6F9FF] py-[80px] px-4 xl:px-8">
      <div className="max-w-[85rem] mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <div
            className="text-lg mb-4"
            style={{
              fontFamily: 'Product Sans, sans-serif',
              color: '#0060FE',
              fontWeight: 500,
            }}
          >
            Our App Features
          </div>
          <h3
            className="text-3xl md:text-4xl lg:text-5xl mb-0 text-black font-bold"
            style={{
              fontFamily: 'Product Sans, sans-serif',
              fontWeight: 700,
            }}
          >
            Everything You Need, All in One App.
          </h3>
        </div>

        {/* Features Grid */}
        <div className="w-full flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 w-full">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center relative">
                {/* Blue background behind card */}
                <div className="absolute inset-0 h-[60%] bg-[#E8F1FF] rounded-2xl z-0" style={{ top: 16, left: 0, right: 0, bottom: 0 }} />
                <div className="relative bg-white rounded-2xl mt-20 px-6 pt-8 pb-8 flex flex-col w-full max-w-[250px] h-[250px] mx-auto z-10 shadow-none">
                  <img src={feature.icon} alt="feature icon" className="w-10 h-10 mb-4 mx-auto" />
                  <h4
                    className="text-xl text-black font-bold text-center mb-2"
                    style={{
                      fontFamily: 'Product Sans, sans-serif',
                      fontWeight: 700,
                    }}
                  >
                    {feature.title}
                  </h4>
                  <p
                    className="text-gray-600 text-sm text-center"
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
        </div>
      </div>
    </section>
  );
};


export default FeaturesSection;