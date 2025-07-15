"use client"

import Link from 'next/link';
import React, { useRef, useState, useEffect } from 'react';
import { toast } from 'sonner';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About us', href: '/about' },
  { name: 'Features', href: '/#features' },
  { name: 'How It Works', href: '/#how-it-works' },
  { name: 'Contact us', href: '/contact' },
];

const storeOptions = [
  { name: 'Google Play' },
  { name: 'Apple Store' },
];

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const lastScrollY = useRef(0);

  // Scroll shadow and glass effect only after passing nav height
  // BUT disable when mobile menu is open to prevent layout shifts
  useEffect(() => {
    const handleScroll = () => {
      // Don't update scroll state when mobile menu is open
      if (mobileMenuOpen || mobileDropdown) return;
      
      if (navRef.current) {
        setScrolled(window.scrollY > navRef.current.offsetHeight);
      }
    };
    
    // Don't apply scroll effects immediately when mobile menu opens
    if (!mobileMenuOpen && !mobileDropdown) {
      window.addEventListener('scroll', handleScroll);
      handleScroll();
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen, mobileDropdown]); // Add dependencies

  // Reset scroll state when mobile menu opens to prevent initial scattered appearance
  useEffect(() => {
    if (mobileMenuOpen || mobileDropdown) {
      setScrolled(false);
    }
  }, [mobileMenuOpen, mobileDropdown]);

  // Prevent background scroll when mobile dropdown is open
  useEffect(() => {
    if (mobileMenuOpen || mobileDropdown) {
      // Simply prevent scrolling without changing position
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen, mobileDropdown]);

  // Close dropdown on outside click (desktop)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  const handleStoreClick = (store: string) => {
    toast.info(`${store} coming soon!`);
    setDropdownOpen(false);
    setMobileDropdown(false);
    setMobileMenuOpen(false);
  };

  // Helper to check if a link is active
  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/#')) return pathname === '/' && typeof window !== 'undefined' && window.location.hash === href.replace('/', '');
    return pathname === href;
  };

  return (
    <nav 
      ref={navRef} 
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled && !mobileMenuOpen && !mobileDropdown 
          ? 'backdrop-blur-xl bg-white/70 shadow-md' 
          : 'bg-white'
      }`}
    >
      <div className="flex items-center justify-between py-4 px-4 xl:px-8 max-w-[90rem] mx-auto relative">
        {/* Logo */}
        <Link href="/" className="h-auto w-[90px] z-40">
          <img src="/vast-logo.png" alt="vast logo" />
        </Link>
        {/* Desktop Nav Links and Download App Button grouped right */}
        <div className="hidden xl:flex items-center ml-auto gap-6">
          <div
            className="flex gap-6"
            style={{
              fontFamily: 'Product Sans, sans-serif',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '20px',
              lineHeight: '100%',
              letterSpacing: '0.21px',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={
                  isActive(link.href)
                    ? 'text-[#0060FE] font-medium'
                    : 'text-[#020202] hover:text-[#0060FE] transition-colors'
                }
              >
                {link.name}
              </a>
            ))}
          </div>
          {/* Desktop Download App Button + Dropdown */}
          <div className="relative ml-6" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((open) => !open)}
              className="flex items-center gap-2 bg-[#0060FE] text-white px-6 h-[50px] rounded-[10px] hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none"
              style={{
                fontFamily: 'Product Sans, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '20px',
                lineHeight: '100%',
                letterSpacing: '0.21px',
              }}
            >
              Download App
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9" cy="9" r="8.5" stroke="white" />
                <path d="M6.75 8.25L9 10.5L11.25 8.25" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-4 z-50 flex flex-col gap-[9px] w-full bg-white rounded-b-lg px-3 pb-4">
                {storeOptions.map((option) => (
                  <button
                    key={option.name}
                    onClick={() => handleStoreClick(option.name)}
                    className=" flex items-center justify-center h-[50px] w-auto rounded-[10px] bg-[#0060FE]/10 text-[#0060FE] text-[20px] border-none outline-none transition hover:brightness-110"
                    style={{
                      fontFamily: 'Product Sans, sans-serif',
                      fontWeight: 400,
                      fontStyle: 'normal',
                    }}
                  >
                    {option.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* Hamburger Icon for Mobile */}
        <button
          className="xl:hidden flex flex-col justify-center items-center w-10 h-10 z-[100] transition-all duration-300 transform hover:scale-105"
          onClick={() => {
            if (mobileMenuOpen) {
              setMobileMenuOpen(false);
              setMobileDropdown(false);
            } else {
              // Reset scroll state immediately before opening menu
              setScrolled(false);
              setMobileMenuOpen(true);
            }
          }}
          aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
        >
          <span className={`block w-7 h-1 rounded-full bg-[#0060FE] transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-7 h-1 rounded-full bg-[#0060FE] my-1 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-7 h-1 rounded-full bg-[#0060FE] transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        {/* Mobile Fullscreen Menu */}
        {mobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="fixed w-full top-0 left-0 h-screen bg-white bg-opacity-95 flex flex-col items-center justify-center z-40 transition-all duration-300"
            style={{ fontFamily: 'Product Sans, sans-serif' }}
          >
            <div className="flex flex-col gap-8 w-full items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={
                    isActive(link.href)
                      ? 'text-[#0060FE] font-medium text-[2rem]'
                      : 'text-[#020202] hover:text-[#0060FE] transition-colors text-[2rem]'
                  }
                >
                  {link.name}
                </a>
              ))}
              {/* Mobile Download App Button triggers modal dropdown */}
              <button
                onClick={() => {
                  setScrolled(false); // Reset scroll state before opening dropdown
                  setMobileDropdown(true);
                }}
                className="flex items-center transition-all duration-300 transform hover:scale-105 justify-center gap-2 bg-[#0060FE] text-white w-full h-[50px] rounded-[10px] hover:bg-blue-700 focus:outline-none text-[20px] mt-4"
                style={{
                  fontFamily: 'Product Sans, sans-serif',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  lineHeight: '100%',
                  letterSpacing: '0.21px',
                  maxWidth: 340,
                }}
              >
                Download App
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="9" cy="9" r="8.5" stroke="white" />
                  <path d="M6.75 8.25L9 10.5L11.25 8.25" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            {/* Mobile Dropdown Modal */}
            {mobileDropdown && (
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-white/95">
                <div className="relative w-[90vw] max-w-[400px] flex flex-col gap-6 p-8 rounded-3xl bg-white shadow-2xl items-center backdrop-blur-md">
                  <button
                    onClick={() => setMobileDropdown(false)}
                    className="absolute top-4 right-4 text-[#0060FE] text-2xl font-bold focus:outline-none"
                    aria-label="Close dropdown"
                  >
                    ×
                  </button>
                  {storeOptions.map((option) => (
                    <button
                      key={option.name}
                      onClick={() => handleStoreClick(option.name)}
                      className="w-full flex items-center justify-center h-[60px] rounded-[10px] bg-[#0060FE]/10 text-[#0060FE] text-[1.7rem] border-none outline-none transition-all duration-300 transform hover:scale-105 hover:brightness-110"
                      style={{
                        fontFamily: 'Product Sans, sans-serif',
                        fontWeight: 400,
                        fontStyle: 'normal',
                      }}
                    >
                      {option.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;