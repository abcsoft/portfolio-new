import React, { useState, useMemo } from 'react';
import { PROJECTS } from '../data/projects';
import { ProjectCategory } from '../types';
import { ProjectCard } from '../components/ui/ProjectCard';
import { Reveal } from '../components/ui/AnimatedReveal';

export function Work() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');

  const categories: ProjectCategory[] = ['All', 'Branding', 'Web', 'Motion', 'Experiments'];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return PROJECTS;
    return PROJECTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-[#080808] text-white pt-32 pb-32 px-5 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-4">
            Archive // 2024 — 2026
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-normal tracking-tight text-white mb-6">
            Selected Work.
          </h1>
          <p className="text-neutral-400 text-base sm:text-lg font-light leading-relaxed">
            A curated archive of digital flagships, monolithic brand systems, and creative
            technology experiments built for clients shaping global culture.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 pb-8 mb-12 border-b border-white/10" role="tablist">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-mono tracking-wider cursor-pointer transition-all duration-200 ${
                  isActive
                    ? 'bg-white text-black font-medium'
                    : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {cat}
                <span className="ml-2 text-[10px] opacity-60">
                  ({cat === 'All' ? PROJECTS.length : PROJECTS.filter((p) => p.category === cat).length})
                </span>
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
          {filteredProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 60}>
              <ProjectCard project={project} layout={index % 3 === 0 ? 'wide' : 'standard'} index={index} />
            </Reveal>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-24 text-center text-neutral-500 font-mono text-sm">
            No projects found in this discipline.
          </div>
        )}
      </div>
    </div>
  );
}
