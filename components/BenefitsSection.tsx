"use client";

import React from 'react';
import { motion } from 'framer-motion';

const testimonial = {
  image: '/testimonial-user.png', // Replace with your actual image path
  name: 'Cameron Williamson',
  role: 'Founder Gojek Corp.',
  text: 'Kerjarodi.com is an application for job seekers and workers who prioritize user comfort and the quality of services provided by our team',
};

const BenefitsSection = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#F8FAFC] to-[#EAF3F8] py-[140px] px-4">
      <motion.div
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left: Testimonial Image */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-[360px] h-[573px] object-cover rounded-[32px] "
          />
        </motion.div>
        {/* Right: Testimonial Content */}
        <motion.div
          className="flex-1 flex flex-col items-start justify-center mt-8 md:mt-0"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-5xl font-semibold mb-6" style={{ fontFamily: 'var(--font-manrope), sans-serif', color: '#222' }}>
            What do they <span className="text-[#4060FE]">think about</span><br className="hidden md:block" /> <span className="text-[#0060FE]">our App?</span>
          </h2>
          <div className="mb-4">
            <div className="text-2xl font-bold text-black" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>{testimonial.name}</div>
            <div className="text-[#8B8B8B] text-base mt-1" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>{testimonial.role}</div>
          </div>
          <div className="bg-white rounded-2xl shadow p-8 mb-6 max-w-xl w-full">
            <p className="text-[#8B8B8B] text-lg" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>{testimonial.text}</p>
          </div>
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-lg border border-[#4060FE] flex items-center justify-center bg-white text-[#4060FE] text-xl transition hover:bg-[#FFF7F1]">
              <svg width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 7l-4 4 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button className="w-12 h-12 rounded-lg bg-[#4060FE] flex items-center justify-center text-white text-xl transition hover:brightness-110">
              <svg width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 7l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BenefitsSection; 