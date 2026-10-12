import React, { useState, useRef } from 'react';
import { Hero } from '../components/hero/Hero';
import { PROJECTS } from '../data/projects';
import { SERVICES } from '../data/services';
import { PROCESS_STEPS } from '../data/process';
import { SITE_CONFIG } from '../data/site';
import { ProjectCard } from '../components/ui/ProjectCard';
import { Reveal, TextRevealWords, LetterReveal } from '../components/ui/AnimatedReveal';
import { Link } from '../lib/routing';

export function Home() {
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(SERVICES[0].id);
  const [hoveredServiceImage, setHoveredServiceImage] = useState<string | null>(null);
  const processRef = useRef<HTMLDivElement>(null);

  const handleScrollToProcess = () => {
    processRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-[#080808] text-white">
      {/* SECTION ONE — HERO */}
      <Hero onScrollToProcess={handleScrollToProcess} />

      {/* SECTION TWO — FEATURED WORK */}
      <section
        id="work"
        className="relative z-10 bg-[#080808] pt-28 pb-32 px-5 sm:px-8 md:px-12 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-3">
                01 // Portfolio Selection
              </span>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white max-w-2xl">
                <LetterReveal text="Selected work." />
                <br />
                <span className="text-neutral-400">
                  <LetterReveal text="Made to move people." />
                </span>
              </h2>
            </div>

            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-sm uppercase tracking-widest text-neutral-300 hover:text-white transition-colors"
            >
              <span>View Complete Archive (06)</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* Asymmetric Editorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-16 lg:gap-y-24">
            {/* Card 1: Wide */}
            <div className="md:col-span-12 lg:col-span-8">
              <Reveal distance={30}>
                <ProjectCard project={PROJECTS[0]} layout="wide" index={0} />
              </Reveal>
            </div>

            {/* Card 2: Tall */}
            <div className="md:col-span-12 lg:col-span-4 lg:mt-16">
              <Reveal distance={30} delay={100}>
                <ProjectCard project={PROJECTS[1]} layout="tall" index={1} />
              </Reveal>
            </div>

            {/* Card 3: Standard */}
            <div className="md:col-span-12 lg:col-span-5">
              <Reveal distance={30}>
                <ProjectCard project={PROJECTS[2]} layout="tall" index={2} />
              </Reveal>
            </div>

            {/* Card 4: Wide */}
            <div className="md:col-span-12 lg:col-span-7 lg:mt-12">
              <Reveal distance={30} delay={100}>
                <ProjectCard project={PROJECTS[3]} layout="wide" index={3} />
              </Reveal>
            </div>

            {/* Card 5: Standard */}
            <div className="md:col-span-12 lg:col-span-6">
              <Reveal distance={30}>
                <ProjectCard project={PROJECTS[4]} layout="standard" index={4} />
              </Reveal>
            </div>

            {/* Card 6: Standard */}
            <div className="md:col-span-12 lg:col-span-6 lg:mt-12">
              <Reveal distance={30} delay={100}>
                <ProjectCard project={PROJECTS[5]} layout="standard" index={5} />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION THREE — ABOUT MAINFRAME */}
      <section className="relative z-10 bg-[#111111] py-28 md:py-36 px-5 sm:px-8 md:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-6">
              02 // Studio Ethos
            </span>

            {/* Sequentially revealed headline */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.15] mb-12">
              <TextRevealWords
                text="We turn unconventional thinking into unforgettable experiences."
                staggerMs={40}
              />
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-neutral-300 text-base sm:text-lg font-light leading-relaxed mb-16">
              <p>
                Mainframe operates at the collision point of artistic discipline and advanced creative
                engineering. We partner with ambitious founders, visionary cultural institutions, and
                unapologetic brands to author distinct digital identities.
              </p>
              <p>
                We eschew ephemeral trends in favor of structural weight, intentional typography, and
                tactile interaction. Every project is conceived as an enduring cultural artifact.
              </p>
            </div>

            {/* Animated Metrics (clearly noted as editable demonstration placeholders) */}
            <div className="pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
              {SITE_CONFIG.metrics.map((metric, i) => (
                <Reveal key={metric.label} delay={i * 80}>
                  <div className="flex flex-col">
                    <span className="text-3xl sm:text-4xl md:text-5xl font-mono text-white mb-1">
                      {metric.value}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-neutral-400">
                      {metric.label}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <Link
                href="/studio"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-colors"
              >
                <span>Inside the studio</span>
                <span>→</span>
              </Link>
              <span className="text-xs font-mono text-neutral-400">
                // Research & Methodology
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION FOUR — WHAT WE DO (SERVICES) */}
      <section className="relative z-10 bg-[#080808] py-28 md:py-36 px-5 sm:px-8 md:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-3">
                03 // Disciplines & Capabilities
              </span>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white">
                What we do.
              </h2>
            </div>
            <p className="text-neutral-400 max-w-md text-sm sm:text-base font-light">
              End-to-end creative direction, spatial web engineering, and brand systems authored with
              uncompromising craft.
            </p>
          </div>

          {/* Interactive Service Rows */}
          <div className="divide-y divide-white/15 border-t border-b border-white/15">
            {SERVICES.map((service) => {
              const isExpanded = expandedServiceId === service.id;

              return (
                <div
                  key={service.id}
                  className="group transition-colors duration-300 hover:bg-white/[0.02]"
                  onMouseEnter={() => setHoveredServiceImage(service.previewImage)}
                >
                  {/* Row Header Button */}
                  <button
                    type="button"
                    onClick={() => setExpandedServiceId(isExpanded ? null : service.id)}
                    aria-expanded={isExpanded}
                    className="w-full py-8 md:py-10 flex flex-col md:flex-row md:items-center justify-between text-left cursor-pointer transition-all duration-300 focus:outline-none"
                  >
                    <div className="flex items-baseline gap-6 md:gap-12 transition-transform duration-300 group-hover:translate-x-2">
                      <span className="font-mono text-xs sm:text-sm text-neutral-400">
                        {service.number}
                      </span>
                      <h3 className="text-2xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white group-hover:text-white">
                        {service.title}
                      </h3>
                    </div>

                    <div className="flex items-center justify-between md:justify-end gap-6 mt-4 md:mt-0 pl-12 md:pl-0">
                      <span className="text-xs sm:text-sm text-neutral-400 font-light hidden lg:inline-block">
                        {service.tagline}
                      </span>
                      <span
                        className={`text-2xl font-light text-neutral-400 transition-transform duration-300 ${
                          isExpanded ? 'rotate-45 text-white' : 'rotate-0'
                        }`}
                      >
                        +
                      </span>
                    </div>
                  </button>

                  {/* Expandable Accordion Body */}
                  {isExpanded && (
                    <div className="pb-8 md:pb-12 pl-12 md:pl-20 pr-4 grid grid-cols-1 md:grid-cols-12 gap-8 animate-fadeIn">
                      <div className="md:col-span-7">
                        <p className="text-neutral-300 text-base sm:text-lg font-light leading-relaxed mb-6">
                          {service.description}
                        </p>
                        <Link
                          href={`/contact?topic=${encodeURIComponent(service.title)}`}
                          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white underline underline-offset-4 hover:opacity-70 transition-opacity"
                        >
                          <span>Commission {service.title}</span>
                          <span>→</span>
                        </Link>
                      </div>

                      <div className="md:col-span-5 bg-neutral-900/50 p-6 rounded-lg border border-white/10">
                        <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block mb-4">
                          Sample Deliverables
                        </span>
                        <ul className="space-y-2 text-sm text-neutral-300 font-light">
                          {service.deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span className="w-1 h-1 bg-white rounded-full" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION FIVE — OUR PROCESS */}
      <section
        ref={processRef}
        id="process"
        className="relative z-10 bg-[#111111] py-28 md:py-36 px-5 sm:px-8 md:px-12 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16 md:mb-24">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-3">
              04 // Methodology
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white mb-6">
              Our Process.
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg font-light leading-relaxed">
              We replace opaque agency handoffs with rapid prototype feedback loops. Five disciplined
              stages designed to eliminate friction and elevate creative impact.
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="relative border-l border-white/15 pl-6 sm:pl-10 md:pl-16 space-y-16 md:space-y-24">
            {PROCESS_STEPS.map((step, idx) => (
              <Reveal key={step.number} distance={20} delay={idx * 50}>
                <div className="relative group">
                  {/* Timeline Node Dot */}
                  <div className="absolute -left-[31px] sm:-left-[47px] md:-left-[71px] top-2 w-3 h-3 rounded-full bg-white ring-4 ring-[#111111] group-hover:scale-125 transition-transform duration-300" />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-4">
                      <span className="font-mono text-sm text-neutral-400 block mb-1">
                        STAGE {step.number}
                      </span>
                      <h3 className="text-3xl sm:text-4xl font-normal text-white tracking-tight">
                        {step.title}
                      </h3>
                    </div>

                    <div className="lg:col-span-8">
                      <p className="text-xl sm:text-2xl text-neutral-200 font-light mb-4">
                        {step.headline}
                      </p>
                      <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed mb-6">
                        {step.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {step.methods.map((method) => (
                          <span
                            key={method}
                            className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-300"
                          >
                            {method}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION SIX — EXPERIMENTAL LABS CALLOUT */}
      <section className="relative z-10 bg-[#080808] py-24 px-5 sm:px-8 md:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-neutral-900 to-black p-8 sm:p-12 md:p-16 rounded-2xl border border-white/15 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 block mb-2">
              Mainframe Labs // Experimental Sandbox
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight mb-4">
              Explore our creative code experiments.
            </h3>
            <p className="text-neutral-400 text-sm sm:text-base font-light">
              Interactive particle topologies, elastic typographic physics, and real-time geometric
              projections crafted with native browser APIs.
            </p>
          </div>

          <Link
            href="/labs"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-colors whitespace-nowrap cursor-pointer"
          >
            <span>Enter Mainframe Labs</span>
            <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
