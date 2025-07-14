import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white pt-10 pb-6 px-4" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
     

        {/* Option 3: Split Bar */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Top row: Logo left, social icons right */}
            <div className="flex items-center gap-2">
              <img src="/vast-logo.svg" alt="KerjaRodi logo" className="h-8 w-auto" />
            </div>
            <div className="flex gap-4">
              <a href="#" aria-label="LinkedIn" className="hover:text-[#0060FE] transition-colors">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v5.25a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1-.75-.75V14a2 2 0 0 0-4 0v5.25a.75.75 0 0 1-.75.75h-3.5A.75.75 0 0 1 8 19.25V14a6 6 0 0 1 6-6Z" stroke="currentColor" strokeWidth="1.5"/><rect x="2.75" y="9" width="4.5" height="10.25" rx=".75" stroke="currentColor" strokeWidth="1.5"/><circle cx="5" cy="5" r="2.25" stroke="currentColor" strokeWidth="1.5"/></svg>
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-[#0060FE] transition-colors">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M22 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 12.07 9.5c0 .352.04.695.116 1.022C8.728 10.37 5.7 8.77 3.671 6.3a4.48 4.48 0 0 0-.606 2.257c0 1.557.793 2.933 2.002 3.74a4.48 4.48 0 0 1-2.03-.56v.057a4.48 4.48 0 0 0 3.6 4.393c-.193.052-.397.08-.607.08-.148 0-.292-.014-.432-.04a4.48 4.48 0 0 0 4.18 3.11A8.98 8.98 0 0 1 2 19.54a12.68 12.68 0 0 0 6.88 2.02c8.26 0 12.78-6.84 12.78-12.78 0-.195-.004-.39-.013-.583A9.18 9.18 0 0 0 24 4.59a8.93 8.93 0 0 1-2.57.704A4.48 4.48 0 0 0 22 5.924Z" stroke="currentColor" strokeWidth="1.5"/></svg>
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-[#0060FE] transition-colors">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M17.5 2.75h-3A4.75 4.75 0 0 0 9.75 7.5v2.25H7.25a.75.75 0 0 0-.75.75v3a.75.75 0 0 0 .75.75h2.5V21.25a.75.75 0 0 0 .75.75h3a.75.75 0 0 0 .75-.75v-7.25h2.25a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-.75-.75H15.25V7.5a2.25 2.25 0 0 1 2.25-2.25h3a.75.75 0 0 0 0-1.5h-3Z" stroke="currentColor" strokeWidth="1.5"/></svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-2">
            {/* Bottom row: Store badges left, copyright right */}
            <div className="flex gap-3">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/play store.svg" alt="Get it on Google Play" className="h-[32px] w-auto" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/app store.svg" alt="Download on the App Store" className="h-[32px] w-auto" />
              </a>
            </div>
            <div className="text-gray-500 text-sm text-center">
              &copy; {new Date().getFullYear()} Nkiri Synergies LTD (RC-7834201). All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 