export type ProjectCategory = 'All' | 'Branding' | 'Web' | 'Motion' | 'Experiments';

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  year: string;
  client: string;
  overview: string;
  challenge: string;
  approach: string;
  outcome: string;
  heroImage: string;
  galleryImages: {
    url: string;
    caption: string;
    aspect?: string;
  }[];
  disciplines: string[];
  deliverables: string[];
  awards?: string[];
  featured?: boolean;
  accentColor?: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  previewImage: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  isDemo?: boolean;
}

export interface ShopItem {
  id: string;
  title: string;
  edition: string;
  price: string;
  category: string;
  description: string;
  specs: string[];
  image: string;
  status: 'Available' | 'Pre-order' | 'Archive';
}

export interface ProcessStep {
  number: string;
  title: string;
  headline: string;
  description: string;
  methods: string[];
}
