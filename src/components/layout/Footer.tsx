import React from 'react';
import { Link } from '../../lib/routing';
import { SITE_CONFIG } from '../../data/site';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#080808] text-white pt-24 pb-12 px-5 sm:px-8 md:px-12 border-t border-white/10 overflow-hidden z-10">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col justify-between min-h-[500px]">
        {/* Oversized Statement */}
        <div className="mb-16 md:mb-24">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4">
            Next Steps // Partner with us
          </p>
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-tighter text-white">
              Good ideas don't wait.
            </h2>
            <span
              className="text-4xl sm:text-6xl md:text-7xl text-white inline-block animate-spin"
              style={{ animationDuration: '24s' }}
              aria-hidden="true"
            >
              ✳︎
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-medium text-base hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              <span>Initiate Project</span>
              <span className="text-lg">→</span>
            </Link>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-normal text-base hover:bg-white hover:text-black transition-colors"
            >
              <span>hello@mainframe.co</span>
            </a>
          </div>
        </div>

        {/* Navigation & Directory Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-white/10 text-sm">
          {/* Col 1: Studio */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
              Directory
            </span>
            <Link href="/work" className="text-neutral-300 hover:text-white transition-colors">
              Selected Work
            </Link>
            <Link href="/labs" className="text-neutral-300 hover:text-white transition-colors">
              Mainframe Labs
            </Link>
            <Link href="/studio" className="text-neutral-300 hover:text-white transition-colors">
              Studio Philosophy
            </Link>
            <Link href="/openings" className="text-neutral-300 hover:text-white transition-colors">
              Openings (Careers)
            </Link>
            <Link href="/shop" className="text-neutral-300 hover:text-white transition-colors">
              Studio Shop
            </Link>
          </div>

          {/* Col 2: Inquiries */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
              Inquiries
            </span>
            <a
              href={`mailto:${SITE_CONFIG.email}?subject=Project%20Inquiry`}
              className="text-neutral-300 hover:text-white transition-colors"
            >
              New Commissions
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}?subject=Press%20Inquiry`}
              className="text-neutral-300 hover:text-white transition-colors"
            >
              Press & Publications
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}?subject=Careers%20Inquiry`}
              className="text-neutral-300 hover:text-white transition-colors"
            >
              Talent & Collaborators
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}?subject=General%20Hello`}
              className="text-neutral-300 hover:text-white transition-colors"
            >
              Say Hello
            </a>
          </div>

          {/* Col 3: Network & Socials */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
              Broadcasts
            </span>
            {SITE_CONFIG.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white transition-colors inline-flex items-center gap-1 group"
              >
                <span>{social.name}</span>
                <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
                  ↗
                </span>
              </a>
            ))}
          </div>

          {/* Col 4: Studio Presence */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
              Coordinates
            </span>
            <p className="text-neutral-400 font-light leading-relaxed">
              Mainframe Spatial Studio
              <br />
              Distributed across Berlin, New York & Tokyo.
              <br />
              Adaptive Interface A.R.I.A v2.4
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono text-neutral-400">
          <div className="flex items-center gap-3">
            <span
              className="text-sm font-medium text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {SITE_CONFIG.brandName}
            </span>
            <span>© {new Date().getFullYear()} All rights reserved.</span>
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-white hover:text-neutral-300 transition-colors cursor-pointer select-none"
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-1">
              ↑
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
