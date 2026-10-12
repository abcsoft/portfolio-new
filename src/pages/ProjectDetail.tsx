import React from 'react';
import { PROJECTS } from '../data/projects';
import { Link, useRouter } from '../lib/routing';
import { Reveal } from '../components/ui/AnimatedReveal';

interface ProjectDetailProps {
  slug: string;
}

export function ProjectDetail({ slug }: ProjectDetailProps) {
  const { navigate } = useRouter();

  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const project = PROJECTS[projectIndex] || PROJECTS[0];

  const nextIndex = (projectIndex + 1) % PROJECTS.length;
  const nextProject = PROJECTS[nextIndex];

  return (
    <article className="min-h-screen bg-[#080808] text-white">
      {/* Fullscreen Project Hero */}
      <div className="relative w-full h-[75vh] md:h-[85vh] overflow-hidden flex flex-col justify-end p-6 sm:p-10 md:p-16">
        <img
          src={project.heroImage}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-110 brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/40 to-black/30 pointer-events-none" />

        <div className="relative z-10 max-w-5xl">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors mb-6"
          >
            <span>← Back to Archive</span>
          </Link>

          <div className="flex flex-wrap items-baseline gap-4 mb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
              {project.category} // {project.year}
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
              Client: {project.client}
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-tight text-white mb-4">
            {project.title}
          </h1>

          <p className="text-xl sm:text-2xl text-neutral-300 font-light max-w-2xl">
            {project.subtitle}
          </p>
        </div>
      </div>

      {/* Meta Bar */}
      <div className="border-t border-b border-white/10 bg-[#111111] px-6 sm:px-10 md:px-16 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-xs font-mono">
          <div>
            <span className="text-neutral-400 uppercase tracking-widest block mb-1">Disciplines</span>
            <span className="text-white font-sans text-sm">{project.disciplines.join(', ')}</span>
          </div>
          <div>
            <span className="text-neutral-400 uppercase tracking-widest block mb-1">Year</span>
            <span className="text-white font-sans text-sm">{project.year}</span>
          </div>
          <div>
            <span className="text-neutral-400 uppercase tracking-widest block mb-1">Client</span>
            <span className="text-white font-sans text-sm">{project.client}</span>
          </div>
          <div>
            <span className="text-neutral-400 uppercase tracking-widest block mb-1">Deliverables</span>
            <span className="text-white font-sans text-sm">{project.deliverables.slice(0, 2).join(', ')}</span>
          </div>
        </div>
      </div>

      {/* Narrative Section: Overview, Challenge, Approach, Outcome */}
      <div className="px-6 sm:px-10 md:px-16 py-24 md:py-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Big Lead Overview */}
          <div className="lg:col-span-5">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-4">
              01 // Project Summary
            </span>
            <p className="text-2xl sm:text-3xl font-light leading-relaxed text-white">
              {project.overview}
            </p>

            {project.awards && (
              <div className="mt-12 p-6 rounded-xl bg-white/5 border border-white/10">
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-3">
                  Recognitions & Honors
                </span>
                <ul className="space-y-2 text-sm text-neutral-300">
                  {project.awards.map((award, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-white">✳︎</span>
                      <span>{award}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column: In-depth Breakdown */}
          <div className="lg:col-span-7 space-y-12 text-neutral-300 text-base sm:text-lg font-light leading-relaxed">
            <div>
              <h2 className="text-sm font-mono uppercase tracking-widest text-neutral-400 mb-3">
                02 // The Challenge
              </h2>
              <p>{project.challenge}</p>
            </div>

            <div>
              <h2 className="text-sm font-mono uppercase tracking-widest text-neutral-400 mb-3">
                03 // Strategic & Technical Approach
              </h2>
              <p>{project.approach}</p>
            </div>

            <div>
              <h2 className="text-sm font-mono uppercase tracking-widest text-neutral-400 mb-3">
                04 // Result & Cultural Impact
              </h2>
              <p>{project.outcome}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Gallery */}
      <section className="px-6 sm:px-10 md:px-16 pb-28 max-w-7xl mx-auto">
        <div className="border-t border-white/10 pt-16 mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-2">
            Visual Documentation // High Resolution
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal text-white">Artifact Gallery</h2>
        </div>

        <div className="space-y-16">
          {project.galleryImages.map((img, idx) => (
            <Reveal key={idx} distance={30}>
              <figure className="group overflow-hidden rounded-xl bg-neutral-900 border border-white/10">
                <img
                  src={img.url}
                  alt={img.caption}
                  loading="lazy"
                  className="w-full max-h-[750px] object-cover transition-transform duration-700 group-hover:scale-102"
                />
                <figcaption className="p-4 sm:p-6 bg-[#111111] flex justify-between items-center text-xs font-mono text-neutral-400">
                  <span>FIG 0{idx + 1} — {img.caption}</span>
                  <span>{project.slug.toUpperCase()}_ASSET</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Next Project Bottom Navigation */}
      <div className="border-t border-white/10 bg-[#111111] px-6 sm:px-10 md:px-16 py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-2">
              Next Case Study
            </span>
            <Link
              href={`/work/${nextProject.slug}`}
              className="text-4xl sm:text-6xl font-normal tracking-tight text-white hover:text-neutral-300 transition-colors inline-flex items-center gap-4 group"
            >
              <span>{nextProject.title}</span>
              <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
            </Link>
            <p className="text-sm text-neutral-400 font-light mt-1">{nextProject.subtitle}</p>
          </div>

          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-colors"
          >
            Start your project with Mainframe →
          </Link>
        </div>
      </div>
    </article>
  );
}
