import React, { useState } from 'react';
import { Project } from '../../types';
import { Link } from '../../lib/routing';

interface ProjectCardProps {
  project: Project;
  layout?: 'tall' | 'wide' | 'standard';
  index?: number;
}

export function ProjectCard({ project, layout = 'standard', index = 0 }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const aspectClass =
    layout === 'tall'
      ? 'aspect-[4/5] md:aspect-[3/4]'
      : layout === 'wide'
      ? 'aspect-[16/10] md:aspect-[16/9]'
      : 'aspect-[4/3] md:aspect-[16/11]';

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block relative w-full overflow-hidden text-left cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
      ariaLabel={`View project ${project.title} - ${project.subtitle}`}
    >
      <div
        className={`relative w-full overflow-hidden bg-neutral-900 ${aspectClass} border border-white/10 transition-colors duration-300 group-hover:border-white/30`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Project Image */}
        <img
          src={project.heroImage}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover grayscale contrast-110 brightness-90 transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100"
        />

        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />

        {/* Index & Year pill top */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10 text-[12px] uppercase tracking-widest text-neutral-300 font-mono">
          <span>0{index + 1} // {project.category}</span>
          <span>{project.year}</span>
        </div>

        {/* Hover "View Case Study" Floating Badge */}
        <div
          className={`absolute inset-0 flex items-center justify-center z-20 pointer-events-none transition-all duration-300 ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <div className="px-5 py-2.5 rounded-full bg-white text-black text-xs uppercase tracking-widest font-medium shadow-2xl flex items-center gap-2">
            <span>Explore Case</span>
            <span className="text-sm">→</span>
          </div>
        </div>

        {/* Bottom Metadata inside card on mobile */}
        <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col gap-1 md:hidden">
          <h3 className="text-2xl font-normal text-white tracking-tight">{project.title}</h3>
          <p className="text-xs text-neutral-400 font-light">{project.subtitle}</p>
        </div>
      </div>

      {/* Desktop Bottom Metadata with typography elegance */}
      <div className="hidden md:flex justify-between items-baseline pt-4 pb-2 border-b border-white/10 group-hover:border-white/30 transition-colors duration-300">
        <div>
          <h3 className="text-2xl lg:text-3xl font-normal text-white tracking-tight transition-transform duration-300 group-hover:translate-x-1">
            {project.title}
          </h3>
          <p className="text-xs text-neutral-400 font-light mt-0.5 tracking-wide">
            {project.subtitle}
          </p>
        </div>

        <div className="text-right">
          <span className="text-xs uppercase tracking-widest text-neutral-400 font-mono group-hover:text-white transition-colors">
            {project.disciplines[0]}
          </span>
        </div>
      </div>
    </Link>
  );
}
