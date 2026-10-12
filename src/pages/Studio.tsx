import React from 'react';
import { SITE_CONFIG } from '../data/site';
import { Reveal, TextRevealWords } from '../components/ui/AnimatedReveal';
import { Link } from '../lib/routing';

export function Studio() {
  const principles = [
    {
      num: '01',
      title: 'Structural Honesty',
      desc: 'We discard ornamental fluff. If an element does not clarify meaning, command emotion, or accelerate comprehension, it does not belong on screen.',
    },
    {
      num: '02',
      title: 'Extreme Typographic Restraint',
      desc: 'Typography is not just copy—it is spatial geometry and vocal timbre. We treat typographic hierarchy with the rigor of classical architecture.',
    },
    {
      num: '03',
      title: 'Code as Pure Craftsmanship',
      desc: 'We do not paste bloated third-party libraries. Every animation curve, canvas loop, and DOM node is written purposefully for responsiveness and speed.',
    },
    {
      num: '04',
      title: 'Human-Centered Gravitas',
      desc: 'Behind every cold monolithic pixel is a warm human instinct. We design for deep memory, not brief dopamine spikes.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#080808] text-white pt-32 pb-32 px-5 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Intro Header */}
        <div className="max-w-4xl mb-24 md:mb-32">
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-4">
            Studio Philosophy // About Us
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-[1.1] mb-8">
            <TextRevealWords text="An interdisciplinary atelier built for the future of digital culture." />
          </h1>
          <p className="text-xl sm:text-2xl text-neutral-300 font-light leading-relaxed max-w-3xl">
            Founded on the conviction that digital experiences should feel as tactile and permanent as
            printed monographs or monumental architecture.
          </p>
        </div>

        {/* Large Editorial Image Feature */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden mb-24 border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop"
            alt="Mainframe Studio Archive"
            className="w-full h-full object-cover grayscale contrast-110 brightness-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-xs font-mono text-neutral-400">
            <span>STUDIO MONOGRAPH ARCHIVE // BERLIN & TOKYO</span>
            <span>EST. 2016</span>
          </div>
        </div>

        {/* Studio Principles */}
        <section className="mb-32">
          <div className="border-t border-white/10 pt-16 mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-2">
              Foundational Tenets
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal text-white">How We Think</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {principles.map((item, idx) => (
              <Reveal key={item.num} delay={idx * 80}>
                <div className="p-8 rounded-xl bg-[#111111] border border-white/10 flex flex-col justify-between min-h-[220px]">
                  <div>
                    <span className="font-mono text-xs text-neutral-400 block mb-3">
                      TENET {item.num}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-normal text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Working Methodology */}
        <section className="p-8 sm:p-16 rounded-2xl bg-gradient-to-b from-[#111111] to-black border border-white/15 mb-32">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-4">
              Collaboration Rhythm
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-white mb-6">
              Small teams. Direct access. No layers of account managers.
            </h2>
            <div className="space-y-6 text-neutral-300 text-base sm:text-lg font-light leading-relaxed">
              <p>
                When you partner with Mainframe, you speak directly with the creative directors and
                engineers doing the work. We limit our active commissions to four simultaneous projects
                per quarter. This intentional scarcity ensures our total creative obsession.
              </p>
              <p>
                From initial brand strategy to final edge CDN configuration, every pixel is tested,
                refined, and defended with conviction.
              </p>
            </div>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                <span>Initiate collaboration</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
