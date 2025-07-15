import React from 'react';
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
   <footer className=' bg-[#E9F2FF]'>
     <div className="w-full bg-[#E9F2FF] max-w-[82rem] mx-auto border-t border-[#D6E4F7] pt-12 pb-4 px-4">
      <div className="flex flex-col lg:flex-row justify-between gap-12 md:gap-0">
        {/* Left: Logo, tagline, socials */}
        <div className="flex-1 flex flex-col items-start justify-start min-w-[220px] mb-8 lg:mb-0">
          <img src="/vast-logo.svg" alt="Vast Logo" className="h-12 mb-4" />
          <p className="text-[#6B6B6B] text-base mb-6 max-w-xs">Your everyday app for work, rides, and payments.</p>
          <div className="flex flex-row gap-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0060FE33]/20 hover:bg-white transition">
              {/* Facebook icon */}
              <Icon icon="ri:facebook-fill" width={22} height={22} color="#2B5CE6" />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0060FE33]/20 hover:bg-white transition">
              {/* Instagram icon */}
              <Icon icon="mdi:instagram" width={22} height={22} color="#2B5CE6" />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0060FE33]/20 hover:bg-white transition">
              {/* X (Twitter) icon */}
              <Icon icon="prime:twitter" width={22} height={22} color="#2B5CE6" />
            </a>
          </div>
        </div>
        {/* Right: Links */}
        <div className="flex-[2] flex flex-col md:flex-row justify-between gap-8">
          {/* About us */}
          <div>
            <h4 className="font-bold text-lg mb-3 text-black">About us</h4>
            <ul className="text-[#6B6B6B] space-y-2">
              <li><a href="/about#vision" className="hover:text-[#2B5CE6] transition">Our Vision</a></li>
              <li><a href="/about#mission" className="hover:text-[#2B5CE6] transition">Our Mission</a></li>
              <li><a href="/contact" className="hover:text-[#2B5CE6] transition">Contact Us</a></li>
            </ul>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-3 text-black">Quick Links</h4>
            <ul className="text-[#6B6B6B] space-y-2">
              <li><a href="#features" className="hover:text-[#2B5CE6] transition">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-[#2B5CE6] transition">How it works</a></li>
            </ul>
          </div>
          {/* Get in Touch */}
          <div>
            <h4 className="font-bold text-lg mb-3 text-black">Get in Touch</h4>
            <ul className="text-[#6B6B6B] space-y-2">
              <li className="flex items-center gap-2"><Icon icon="ri:phone-fill" width={18} height={18} color="#2B5CE6" /> <span>+234 911013200</span></li>
              <li className="flex items-center gap-2"><Icon icon="mage:email-fill" width={18} height={18} color="#2B5CE6" /> <span>supportvast@example.com</span></li>
              <li className="flex items-center gap-2"><Icon icon="mingcute:location-fill" width={18} height={18} color="#2B5CE6" /> <span>MAYNE AVENUE CALABAR<br/>CROSS, Calabar, Cross River</span></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="border-t border-[#D6E4F7] mt-8 pt-4 text-center text-[#6B6B6B] text-sm">
        © 2025 vast.com All rights reserved
      </div>
    </div>
   </footer>
  );
};

export default Footer; 