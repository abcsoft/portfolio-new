import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    slug: 'vanta',
    title: 'VANTA',
    subtitle: 'Digital Brand Experience & Spatial Flagship',
    category: 'Web',
    year: '2026',
    client: 'Vanta Architectural Research',
    overview:
      'VANTA is a sensory digital exploration of subterranean architectural forms. We engineered a real-time reactive interface that shifts geometry according to the viewer’s interaction dynamics.',
    challenge:
      'Traditional architectural portfolios flatten three-dimensional monoliths into static grids. The objective was to create an online spatial flagship that mirrors the tactile gravity and dark materiality of subterranean concrete structures.',
    approach:
      'We designed an interactive spatial navigation engine leveraging custom canvas shaders, dynamic viewport physics, and typography that morphs under user cursor acceleration.',
    outcome:
      'A digital flagship with an average session duration of 4.8 minutes, awarded Site of the Day, and featured across international digital design publications.',
    heroImage:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop',
        caption: 'Monolithic geometric surfaces interacting with virtual lighting models.',
      },
      {
        url: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1935&auto=format&fit=crop',
        caption: 'Procedural material distortion mapping applied across touch viewports.',
      },
      {
        url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1908&auto=format&fit=crop',
        caption: 'Dark monochrome editorial typography balancing structural weight.',
      },
    ],
    disciplines: ['Creative Direction', 'WebGL Architecture', 'Sound Design', 'Brand Identity'],
    deliverables: ['Web Flagship', 'Custom Typography', 'Interactive Sound Engine', 'Design System'],
    awards: ['AWAWDS Site of the Month', 'FWA of the Day', 'Type Directors Club 2026'],
    featured: true,
  },
  {
    id: 'p2',
    slug: 'form-01',
    title: 'FORM/01',
    subtitle: 'Experimental Product Design & Sound Engine',
    category: 'Experiments',
    year: '2025',
    client: 'Klangkörper Acoustics',
    overview:
      'A physical and digital hybrid audio console designed for intuitive frequency synthesis. FORM/01 explores tactile materiality in an era of touchscreens.',
    challenge:
      'Reinventing the studio synthesizer without defaulting to vintage nostalgia or sterile utilitarian software panels.',
    approach:
      'We combined milled black anodized aluminum with generative interface feedback. The companion web application pairs 1:1 with hardware telemetry over WebHID.',
    outcome:
      'Sold out limited production run of 200 serialized units within 14 minutes, establishing Klangkörper as a cult brand in electronic music hardware.',
    heroImage:
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop',
        caption: 'Precision knurled dials and laser-etched frequency typography.',
      },
      {
        url: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=2069&auto=format&fit=crop',
        caption: 'Companion digital software visualizing micro-harmonics in real-time.',
      },
      {
        url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop',
        caption: 'Acoustic testing inside anechoic research chambers in Berlin.',
      },
    ],
    disciplines: ['Industrial Design', 'Firmware UI', 'Packaging', 'Art Direction'],
    deliverables: ['Hardware Exterior', 'Micro-OLED Interface', 'Documentation Book', 'Launch Film'],
    featured: true,
  },
  {
    id: 'p3',
    slug: 'mono',
    title: 'MONO',
    subtitle: 'Identity, Spatial Typographics and Packaging',
    category: 'Branding',
    year: '2025',
    client: 'MONO Publishing & Press',
    overview:
      'A comprehensive brand system and editorial publication platform for an independent contemporary art publisher based in Zürich.',
    challenge:
      'Create a visual identity that speaks with maximum presence through extreme restraint, allowing diverse artist portfolios to lead.',
    approach:
      'We developed a custom variable typeface with extreme optical sizing, high-contrast monochrome layout rules, and blind debossed tactile packaging systems.',
    outcome:
      'A timeless global brand identity across physical monographs, bookstore environments, and an archival e-commerce reading interface.',
    heroImage:
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1998&auto=format&fit=crop',
        caption: 'Monograph cover designs featuring custom foil stamping.',
      },
      {
        url: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2012&auto=format&fit=crop',
        caption: 'Editorial grid architecture applied across multi-volume artist catalogs.',
      },
      {
        url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop',
        caption: 'Signage and spatial environmental branding for the Zürich flagship bookstore.',
      },
    ],
    disciplines: ['Brand Identity', 'Custom Type Design', 'Packaging', 'Editorial Direction'],
    deliverables: ['Custom Font Family', 'Brand Guidelines', 'Publishing Templates', 'Web Archive'],
    awards: ['Tokyo TDC Annual Book Selection', 'Swiss Design Awards Nominee'],
    featured: true,
  },
  {
    id: 'p4',
    slug: 'echo',
    title: 'ECHO',
    subtitle: 'Interactive Digital Platform & Creative Network',
    category: 'Web',
    year: '2025',
    client: 'Echo Generative Systems',
    overview:
      'An invite-only collaboration platform for generative artists, sound researchers, and creative technologists to co-compose audio-visual narratives.',
    challenge:
      'Building a multi-user collaborative workspace that feels as fluid as an instrument rather than a typical dashboard.',
    approach:
      'We architected an infinite non-linear canvas, spatial audio panning based on peer proximity, and an ultra-minimal dark UI that gets out of the creator’s way.',
    outcome:
      'Over 25,000 artists currently co-creating with near-zero latency, facilitating international live ensemble performances.',
    heroImage:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=2047&auto=format&fit=crop',
        caption: 'Real-time multi-cursor spatial composition canvas.',
      },
      {
        url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
        caption: 'Algorithmic audio patch bays mapped to vector coordinates.',
      },
    ],
    disciplines: ['Digital Platform UI', 'Interaction Design', 'Realtime Systems', 'Product Strategy'],
    deliverables: ['Web Application', 'Design System', 'Custom Audio Nodes', 'Onboarding Experience'],
    featured: true,
  },
  {
    id: 'p5',
    slug: 'aether',
    title: 'AETHER',
    subtitle: 'Motion Identity & Cinematic Brand Film',
    category: 'Motion',
    year: '2024',
    client: 'Aether Space Horizons',
    overview:
      'A cinematic brand manifesto film and dynamic motion identity system for a commercial orbital research laboratory.',
    challenge:
      'Translating complex orbital mechanics and deep-space vacuum science into visceral emotional wonder without sci-fi tropes.',
    approach:
      'Combining practical macro lens photography of magnetic ferrofluids with precision 3D planetary telemetry data to capture silent weightlessness.',
    outcome:
      'Broadcast during the global live launch broadcast, viewed by over 4.2M people, setting a new benchmark for aerospace design aesthetics.',
    heroImage:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072&auto=format&fit=crop',
        caption: 'Atmospheric light simulations calibrated to low Earth orbital passes.',
      },
      {
        url: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=2070&auto=format&fit=crop',
        caption: 'Dynamic broadcast telemetry overlays and generative typographic clock systems.',
      },
    ],
    disciplines: ['Cinematography', 'Motion Design', 'Original Score', 'Creative Direction'],
    deliverables: ['Manifesto Film', 'Broadcast Package', 'Motion Design Guidelines', 'Sonic Logo'],
    awards: ['Cannes Lions Silver (Craft)', 'D&AD Graphite Pencil'],
    featured: true,
  },
  {
    id: 'p6',
    slug: 'nexus',
    title: 'NEXUS',
    subtitle: 'Creative Technology & Neural Art Engine',
    category: 'Experiments',
    year: '2024',
    client: 'Nexus Biennale Pavilion',
    overview:
      'A permanent interactive museum installation reacting to collective human biometric presence using computer vision and generative soundscapes.',
    challenge:
      'Transforming high-density crowd presence into an emergent artistic mirror that fosters contemplation rather than spectacle.',
    approach:
      'We designed an 18-meter panoramic projection mapped interface processing crowd velocity, posture, and ambient acoustics via edge AI nodes.',
    outcome:
      'Engaged over 400,000 visitors across a 6-month pavilion run in Venice, named one of the pivotal exhibitions of the decade.',
    heroImage:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1507499739999-097706ad8914?q=80&w=2070&auto=format&fit=crop',
        caption: '18-meter seamless projection array driven by synchronized GPU clusters.',
      },
      {
        url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1968&auto=format&fit=crop',
        caption: 'Laser LiDAR sensors detecting ambient visitor density in real time.',
      },
    ],
    disciplines: ['Spatial Computing', 'Generative Code', 'Computer Vision', 'Audio Architecture'],
    deliverables: ['Installation Architecture', 'Custom Sensor Pipeline', 'Sound Spatialization', 'Archival Book'],
    featured: true,
  },
];
