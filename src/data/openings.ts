import { JobOpening } from '../types';

export const OPENINGS: JobOpening[] = [
  {
    id: 'op-1',
    title: 'Creative Developer',
    department: 'Technology & Experiments',
    location: 'Berlin / Hybrid or Remote',
    type: 'Full-time',
    experience: '4+ Years',
    isDemo: true,
    description:
      'We are looking for an inventive creative developer proficient with TypeScript, Canvas 2D/WebGL, shader programming, and responsive web performance to bring uncompromised digital designs to life.',
    responsibilities: [
      'Architect and build high-performance web applications and interactive spatial websites.',
      'Collaborate directly with designers to prototype bespoke motion behaviors and micro-interactions.',
      'Optimize asset pipelines, render loops, and accessibility across diverse hardware.',
      'Contribute experimental prototypes to Mainframe Labs.',
    ],
    qualifications: [
      'Strong portfolio demonstrating experimental web development and creative coding.',
      'Mastery of modern TypeScript, React, HTML5 Canvas, WebGL/GLSL, and browser rendering lifecycles.',
      'Obsessive attention to typographic rhythm, easing curves, and frame rate stability.',
      'Self-driven curiosity to explore new browser APIs and generative workflows.',
    ],
  },
  {
    id: 'op-2',
    title: 'Senior Designer (Brand & Spatial)',
    department: 'Design & Direction',
    location: 'New York / Hybrid',
    type: 'Full-time',
    experience: '5+ Years',
    isDemo: true,
    description:
      'Lead holistic brand identity systems from concept through tactile physical production and digital translation. You balance rigorous conceptual rigor with exceptional formal execution.',
    responsibilities: [
      'Originate brand systems, variable typography rules, and editorial publications.',
      'Oversee visual guidelines, production samples, and design systems.',
      'Work closely with clients to articulate artistic decisions and cultural strategy.',
      'Mentor mid-weight designers and design interns across the studio.',
    ],
    qualifications: [
      'World-class portfolio demonstrating typography-led brand systems and editorial work.',
      'Deep understanding of print finishes, paper stocks, and digital responsive design.',
      'Clear, articulate presentation and client communication skills.',
    ],
  },
  {
    id: 'op-3',
    title: 'Motion Designer & 3D Artist',
    department: 'Motion & Film',
    location: 'Tokyo / Hybrid or Remote',
    type: 'Full-time or Contract',
    experience: '3+ Years',
    isDemo: true,
    description:
      'Craft kinetic typographic narratives, abstract procedural 3D simulations, and brand manifesto films with rhythm and emotional gravitas.',
    responsibilities: [
      'Design kinetic identity packages, UI motion choreography, and film title sequences.',
      'Produce cinematic 3D renders, particle simulations, and lighting passes.',
      'Direct sound design pacing and musical cues in synchronization with visual motion.',
    ],
    qualifications: [
      'Showreel showcasing typography in motion, abstract 3D compositions, and seamless loop design.',
      'Proficiency in Blender/Cinema 4D, After Effects, and real-time motion paradigms.',
      'Refined sense of weight, pacing, anticipation, and negative space.',
    ],
  },
  {
    id: 'op-4',
    title: 'Creative Strategist',
    department: 'Strategy & Culture',
    location: 'London / Remote',
    type: 'Full-time',
    experience: '4+ Years',
    isDemo: true,
    description:
      'Uncover cultural trends, interrogate business models, and shape bold strategic foundations that empower creative teams to produce breakthrough work.',
    responsibilities: [
      'Author brand positioning, creative manifestos, and cultural intelligence reports.',
      'Conduct stakeholder workshops and deep qualitative qualitative research.',
      'Bridge business objectives with boundary-pushing artistic concepts.',
    ],
    qualifications: [
      'Track record of positioning culturally distinct brands and category leaders.',
      'Exceptional writing skills with an economy of language—no corporate jargon.',
      'Familiarity with art, technology, fashion, and contemporary subcultures.',
    ],
  },
];
