"use client"

import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: '/icons/briefcase.svg', // You need to provide this icon
    title: 'Artisan Connect',
    description: 'Find and book expert artisans for all your service needs, from home repairs to creative projects.',
  },
  {
    icon: '/icons/search.svg', // You need to provide this icon
    title: 'Easy Ride',
    description: 'Get where you need to go with our convenient ride-hailing service, ensuring a safe and efficient journey',
  },
  {
    icon: '/icons/message.svg', // You need to provide this icon
    title: 'Vast Pay',
    description: 'Enjoy seamless and secure transactions with our wallet system, making payments easy and convenient.',
  },
  {
    icon: '/icons/moon.svg', // You need to provide this icon
    title: 'Marketplace',
    description: ' Discover and shop from a wide range of products and services, all in one place.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#f1f4ff] to-[#EAF3F8] py-[140px] px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-12 items-start">
        {/* Left: Heading */}
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-5xl font-semibold xl:text-[54px] mb-2" style={{ fontFamily: 'var(--font-manrope), sans-serif', color: '#222' }}>
            We provide <span className="text-[#4060FE]">excellent</span> <span className="text-[#0060FE]">features</span> from us
          </h2>
        </motion.div>
        {/* Right: Subtitle */}
        <motion.div
          className="flex flex-col gap-6 xl:items-end"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-[#8B8B8B] text-lg md:text-xl max-w-md xl:text-right" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
            We shall never deny a guest, even the most ridiculous request. We provide excellent features from us
          </p>
        </motion.div>
        {/* Features Grid */}
        <motion.div
          className="xl:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"
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
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-4 items-start"
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#4060FE] mb-2">
                <img src={feature.icon} alt="feature icon" className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-black" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>{feature.title}</h3>
              <p className="text-[#8B8B8B] text-base" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;