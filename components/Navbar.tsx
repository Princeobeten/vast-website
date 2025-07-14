"use client"

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { opendir } from 'fs';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About us', href: '#' },
  { name: 'Featured', href: '#' },
  { name: 'Testimonial', href: '#' },
];

const storeOptions = [
  { name: 'Google Play', color: '#0060FE', icon: '/icons/mage_playstore.svg' },
  { name: 'Apple Store', color: '#0060FE', icon: '/icons/ic_outline-apple.svg' },
];

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (href: string) => href === '/' ? pathname === '/' : false;

  return (
    <nav className="w-full  px-4 py-6" style={{
      background: 'radial-gradient(circle, #fff 0%, #f3f4f8 70%, #d1d3db 100%)',
    }} >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className='flex items-center'>
          {/* Logo */}
        <Link href="/" className="h-auto w-[90px] md:w-[108px] z-40 flex items-center mt-1">
          <img src="/vast-logo.svg" alt="vast-logo" className="h-8 md:h-10 w-auto" />
        </Link>
        {/* Nav Links */}
        <div className="flex gap-10 ml-16">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[18px] font-medium transition-colors duration-200 hover:text-[#4060FE] ${
                isActive(link.href)
                  ? 'text-primary font-bold underline underline-offset-8'
                  : 'text-gray-600 hover:text-primary'
              }`}
              style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
            >
              {link.name}
            </Link>
          ))}
        </div>
        </div>
        {/* Store Buttons */}
        <div className="flex items-center gap-4 ml-16">
          {storeOptions.map((option) => (
            <button
              key={option.name}
              className="rounded-[8px] px-7 py-3 text-[16px] font-semibold transition-all hover:brightness-110 bg-gradient-to-tr from-[#0060FE] to-[#4060FE] text-white flex items-center gap-2"
              style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
            >
              <img src={`${option.icon}`} alt="logo" width={22} height={22} />
              {option.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;