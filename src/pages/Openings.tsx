import React, { useState } from 'react';
import { OPENINGS } from '../data/openings';
import { SITE_CONFIG } from '../data/site';
import { JobOpening } from '../types';
import { Reveal } from '../components/ui/AnimatedReveal';

export function Openings() {
  const [selectedRole, setSelectedRole] = useState<JobOpening | null>(null);

  return (
    <div className="min-h-screen bg-[#080808] text-white pt-32 pb-32 px-5 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
              Open Positions // Join Mainframe
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-neutral-300 text-[11px] font-mono">
              Demo Opportunities
            </span>
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-normal tracking-tight text-white mb-6">
            Openings.
          </h1>
          <p className="text-neutral-400 text-base sm:text-lg font-light leading-relaxed">
            We are looking for kindred visionaries who view software as sculpture, typography as
            architecture, and creative code as a high art form.
          </p>
        </div>

        {/* Roles List */}
        <div className="divide-y divide-white/15 border-t border-b border-white/15">
          {OPENINGS.map((role, idx) => (
            <Reveal key={role.id} delay={idx * 60}>
              <div className="group py-8 md:py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:bg-white/[0.02] transition-colors">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 text-xs font-mono text-neutral-400 mb-2">
                    <span>{role.department}</span>
                    <span>•</span>
                    <span>{role.location}</span>
                    <span>•</span>
                    <span>{role.type}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-white group-hover:text-neutral-200 transition-colors">
                    {role.title}
                  </h2>
                  <p className="text-sm text-neutral-400 font-light mt-2 line-clamp-2">
                    {role.description}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setSelectedRole(role)}
                    className="px-6 py-2.5 rounded-full border border-white/20 text-xs sm:text-sm text-white font-medium hover:bg-white hover:text-black transition-colors cursor-pointer"
                  >
                    View Details
                  </button>
                  <a
                    href={`mailto:${SITE_CONFIG.email}?subject=Application%20for%20${encodeURIComponent(
                      role.title
                    )}&body=Hello%20Mainframe%2C%0A%0AI%20am%20applying%20for%20the%20${encodeURIComponent(
                      role.title
                    )}%20role.%0A%0APortfolio%3A%20%0AGitHub%2FLink%3A%20%0ABrief%20Note%3A%20`}
                    className="px-6 py-2.5 rounded-full bg-white text-black text-xs sm:text-sm font-medium hover:bg-neutral-200 transition-colors cursor-pointer"
                  >
                    Apply Now →
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Speculative Application Note */}
        <div className="mt-20 p-8 sm:p-12 rounded-2xl bg-neutral-900 border border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h3 className="text-2xl font-normal text-white mb-2">Don't see your specific discipline?</h3>
            <p className="text-sm text-neutral-400 font-light max-w-xl">
              We always welcome spontaneous introductions from exceptional researchers, sound designers,
              type designers, and computational artists.
            </p>
          </div>
          <a
            href={`mailto:${SITE_CONFIG.email}?subject=Spontaneous%20Introduction`}
            className="px-8 py-3.5 rounded-full border border-white text-white text-sm font-medium hover:bg-white hover:text-black transition-colors whitespace-nowrap"
          >
            Send Spontaneous Portfolio
          </a>
        </div>
      </div>

      {/* Role Detail Modal */}
      {selectedRole && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedRole(null)}
        >
          <div
            className="bg-[#111111] border border-white/20 rounded-2xl p-6 sm:p-10 max-w-2xl w-full max-h-[85vh] overflow-y-auto text-left shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedRole(null)}
              className="absolute top-6 right-6 text-neutral-400 hover:text-white text-lg p-2 cursor-pointer"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-2">
              <span>{selectedRole.department}</span>
              <span>//</span>
              <span>{selectedRole.location}</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-normal text-white mb-4">
              {selectedRole.title}
            </h3>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-8">
              {selectedRole.description}
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-400 mb-3">
                  Key Responsibilities
                </h4>
                <ul className="space-y-2 text-sm text-neutral-300 font-light">
                  {selectedRole.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-white mt-0.5">•</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-400 mb-3">
                  Qualifications & Profile
                </h4>
                <ul className="space-y-2 text-sm text-neutral-300 font-light">
                  {selectedRole.qualifications.map((q, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-white mt-0.5">•</span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex justify-between items-center">
              <span className="text-xs font-mono text-neutral-400">
                Sample Role // Editable Demonstration
              </span>
              <a
                href={`mailto:${SITE_CONFIG.email}?subject=Application%20for%20${encodeURIComponent(
                  selectedRole.title
                )}`}
                className="px-6 py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-colors"
              >
                Apply via Email →
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
