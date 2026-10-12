import React from 'react';
import { ParticleFieldDemo } from '../components/labs/ParticleFieldDemo';
import { KineticTypeDemo } from '../components/labs/KineticTypeDemo';
import { GeometricMatrixDemo } from '../components/labs/GeometricMatrixDemo';
import { Reveal } from '../components/ui/AnimatedReveal';

export function Labs() {
  return (
    <div className="min-h-screen bg-[#080808] text-white pt-32 pb-32 px-5 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
              Active Research Playground // R&D
            </span>
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-normal tracking-tight text-white mb-6">
            Mainframe Labs.
          </h1>
          <p className="text-neutral-400 text-base sm:text-lg font-light leading-relaxed">
            Where we investigate computational aesthetics, raw web APIs, and responsive interface
            physics without client briefs. Every production tool we build originates in these sandbox
            sketches.
          </p>
        </div>

        {/* Labs Grid */}
        <div className="space-y-24">
          {/* Experiment 1 */}
          <Reveal distance={20}>
            <section className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-normal text-white">
                    01 // Kinetic Particle Topology
                  </h2>
                  <p className="text-sm text-neutral-400 font-light mt-1">
                    Fluid spatial density, proximity spring dampening & collision repulsion.
                  </p>
                </div>
                <span className="font-mono text-xs text-neutral-400">
                  Tech: Canvas 2D + Custom Vector Physics
                </span>
              </div>
              <ParticleFieldDemo />
            </section>
          </Reveal>

          {/* Experiment 2 */}
          <Reveal distance={20}>
            <section className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-normal text-white">
                    02 // Typographic Elasticity & Kinetic Weight
                  </h2>
                  <p className="text-sm text-neutral-400 font-light mt-1">
                    Optical axis modulation responsive to horizontal cursor acceleration and gravity.
                  </p>
                </div>
                <span className="font-mono text-xs text-neutral-400">
                  Tech: CSS Variable Transform Matrix + Inline Interpolation
                </span>
              </div>
              <KineticTypeDemo />
            </section>
          </Reveal>

          {/* Experiment 3 */}
          <Reveal distance={20}>
            <section className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-normal text-white">
                    03 // Isometric Orthogonal Matrix
                  </h2>
                  <p className="text-sm text-neutral-400 font-light mt-1">
                    Perspective geometric wireframes projected via zero-dependency trigonometric matrices.
                  </p>
                </div>
                <span className="font-mono text-xs text-neutral-400">
                  Tech: Native Trigonometric Projection Engine
                </span>
              </div>
              <GeometricMatrixDemo />
            </section>
          </Reveal>
        </div>

        {/* Labs Manifesto Callout */}
        <div className="mt-28 p-8 sm:p-12 rounded-2xl bg-white/5 border border-white/10 max-w-4xl">
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-3">
            Open Exploration Thesis
          </span>
          <h3 className="text-2xl sm:text-3xl font-normal text-white mb-4">
            "Tools shape the thoughts we are capable of having."
          </h3>
          <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
            By rejecting third-party template bloat and authoring our own motion models and interface
            loops from first principles, Mainframe maintains complete sovereignty over the emotional
            texture of our work.
          </p>
        </div>
      </div>
    </div>
  );
}
