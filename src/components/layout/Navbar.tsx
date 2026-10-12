import React, { useState, useEffect, useCallback } from 'react';
import { Link, useRouter } from '../../lib/routing';
import { SITE_CONFIG } from '../../data/site';

export function Navbar() {
  const { path } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [path]);

  // Handle Escape key to close mobile menu
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    },
    [mobileMenuOpen]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Prevent background body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Fixed Navbar (z-index: 10) */}
      <header className="fixed top-0 left-0 right-0 z-10 w-full px-5 sm:px-8 py-4 sm:py-5 flex flex-row justify-between items-center transition-colors duration-300">
        {/* Logo (left) */}
        <Link
          href="/"
          className="flex flex-row items-center gap-3 text-white select-none hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
          ariaLabel="Mainframe Homepage"
        >
          <span
            className="text-[21px] sm:text-[26px] tracking-tight leading-none"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {SITE_CONFIG.brandName}
          </span>
          <span
            className="text-[25px] sm:text-[30px] leading-none inline-block origin-center hover:rotate-90 transition-transform duration-500"
            style={{ letterSpacing: '-0.02em' }}
            aria-hidden="true"
          >
            {SITE_CONFIG.symbol}
          </span>
        </Link>

        {/* Desktop Nav Links (center, hidden below md) */}
        <nav
          className="hidden md:flex flex-row items-center text-[23px] text-white"
          aria-label="Main Navigation"
        >
          <Link
            href="/labs"
            className={`hover:opacity-60 transition-opacity ${
              path === '/labs' ? 'opacity-100 font-medium' : 'opacity-90'
            }`}
          >
            Labs
          </Link>
          <span className="select-none">,&nbsp;</span>

          <Link
            href="/studio"
            className={`hover:opacity-60 transition-opacity ${
              path === '/studio' ? 'opacity-100 font-medium' : 'opacity-90'
            }`}
          >
            Studio
          </Link>
          <span className="select-none">,&nbsp;</span>

          <Link
            href="/openings"
            className={`hover:opacity-60 transition-opacity ${
              path === '/openings' ? 'opacity-100 font-medium' : 'opacity-90'
            }`}
          >
            Openings
          </Link>
          <span className="select-none">,&nbsp;</span>

          <Link
            href="/shop"
            className={`hover:opacity-60 transition-opacity ${
              path === '/shop' ? 'opacity-100 font-medium' : 'opacity-90'
            }`}
          >
            Shop
          </Link>
        </nav>

        {/* Desktop CTA (right, hidden below md) */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="text-[23px] text-white underline underline-offset-2 hover:opacity-60 transition-opacity focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
          >
            Get in touch
          </Link>
        </div>

        {/* Mobile Hamburger (visible below md) */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] z-20 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
        >
          <span
            className={`w-6 h-[2px] bg-white transition-all duration-300 origin-center ${
              mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-white transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-white transition-all duration-300 origin-center ${
              mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </header>

      {/* Mobile Overlay Menu (z-index: 9) */}
      <div
        className={`fixed inset-0 z-[9] bg-black/90 backdrop-blur-md flex flex-col justify-center px-8 gap-8 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        <nav className="flex flex-col gap-6 text-left" aria-label="Mobile Navigation Links">
          <Link
            href="/work"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[32px] font-medium text-white hover:opacity-60 transition-opacity"
          >
            Work
          </Link>

          <Link
            href="/labs"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[32px] font-medium text-white hover:opacity-60 transition-opacity"
          >
            Labs
          </Link>

          <Link
            href="/studio"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[32px] font-medium text-white hover:opacity-60 transition-opacity"
          >
            Studio
          </Link>

          <Link
            href="/openings"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[32px] font-medium text-white hover:opacity-60 transition-opacity"
          >
            Openings
          </Link>

          <Link
            href="/shop"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[32px] font-medium text-white hover:opacity-60 transition-opacity"
          >
            Shop
          </Link>

          <div className="pt-6 border-t border-white/20">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[32px] font-medium text-white underline underline-offset-4 hover:opacity-60 transition-opacity"
            >
              Get in touch
            </Link>
          </div>
        </nav>

        {/* Ambient mobile coordinates */}
        <div className="text-xs uppercase tracking-widest text-neutral-400 font-mono">
          Mainframe® A.R.I.A Engine // 2026
        </div>
      </div>
    </>
  );
}
