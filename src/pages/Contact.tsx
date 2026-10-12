import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../data/site';
import { CopyEmailButton } from '../components/ui/CopyEmailButton';
import { Reveal } from '../components/ui/AnimatedReveal';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Brand & Digital Flagship',
    budget: '$50k — $100k',
    description: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  // Pre-populate topic if query param is set
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const topic = params.get('topic');
    if (topic) {
      if (topic === 'pitch') {
        setFormData((prev) => ({
          ...prev,
          description: 'Pitching an idea: ',
          projectType: 'Emerging Tech & AI',
        }));
      } else if (topic === 'hello') {
        setFormData((prev) => ({
          ...prev,
          description: 'Saying hello: ',
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          projectType: topic,
        }));
      }
    }
  }, []);

  const projectTypes = [
    'Brand & Digital Flagship',
    'Spatial Web & WebGL',
    'Brand Identity System',
    'Motion & Film Manifesto',
    'Interactive Installation',
    'Emerging Tech & AI',
    'Other Exploration',
  ];

  const budgetRanges = [
    '$25k — $50k',
    '$50k — $100k',
    '$100k — $250k',
    '$250k+',
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format.';
    }
    if (!formData.description.trim()) {
      errs.description = 'Please include a brief overview of what you want to build.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Build mailto URI adapter
    const subject = encodeURIComponent(
      `New Project Inquiry: ${formData.company ? `${formData.company} / ` : ''}${formData.name} [${formData.projectType}]`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'N/A'}\nProject Type: ${formData.projectType}\nEstimated Budget: ${formData.budget}\n\nProject Brief:\n${formData.description}\n\n—\nSent via Mainframe Contact Form`
    );

    // Trigger mailto link
    window.location.href = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white pt-32 pb-32 px-5 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-4xl mb-16 md:mb-24">
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-4">
            Initiate Commission // Direct Line
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-[1.1] mb-8">
            Let's make something impossible to ignore.
          </h1>
          <p className="text-xl sm:text-2xl text-neutral-300 font-light max-w-2xl">
            We partner with four new clients per quarter. Tell us about your vision, timeline, and
            ambitions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Form Column */}
          <div className="lg:col-span-8">
            <form onSubmit={handleSubmit} className="space-y-8 text-left" noValidate>
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    placeholder="e.g. Elena Rostova"
                    className={`w-full bg-[#111111] border rounded-lg px-4 py-3.5 text-white placeholder-neutral-600 focus:outline-none transition-colors ${
                      errors.name ? 'border-red-500' : 'border-white/15 focus:border-white'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs font-mono mt-1.5">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder="elena@studio.com"
                    className={`w-full bg-[#111111] border rounded-lg px-4 py-3.5 text-white placeholder-neutral-600 focus:outline-none transition-colors ${
                      errors.email ? 'border-red-500' : 'border-white/15 focus:border-white'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs font-mono mt-1.5">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                  Company / Organization (Optional)
                </label>
                <input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="e.g. Hyperion Research"
                  className="w-full bg-[#111111] border border-white/15 rounded-lg px-4 py-3.5 text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              {/* Project Type */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">
                  Project Discipline
                </label>
                <div className="flex flex-wrap gap-2">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({ ...formData, projectType: type })}
                      className={`px-4 py-2 rounded-full text-xs font-mono cursor-pointer transition-all ${
                        formData.projectType === type
                          ? 'bg-white text-black font-medium'
                          : 'bg-[#111111] text-neutral-400 hover:text-white border border-white/10'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">
                  Estimated Budget
                </label>
                <div className="flex flex-wrap gap-2">
                  {budgetRanges.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setFormData({ ...formData, budget: b })}
                      className={`px-4 py-2 rounded-full text-xs font-mono cursor-pointer transition-all ${
                        formData.budget === b
                          ? 'bg-white text-black font-medium'
                          : 'bg-[#111111] text-neutral-400 hover:text-white border border-white/10'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                  What are we building together? *
                </label>
                <textarea
                  id="description"
                  rows={5}
                  value={formData.description}
                  onChange={(e) => {
                    setFormData({ ...formData, description: e.target.value });
                    if (errors.description) setErrors({ ...errors, description: '' });
                  }}
                  placeholder="Tell us about the scope, timeline, core tension, and what success looks like."
                  className={`w-full bg-[#111111] border rounded-lg p-4 text-white placeholder-neutral-600 focus:outline-none transition-colors ${
                    errors.description ? 'border-red-500' : 'border-white/15 focus:border-white'
                  }`}
                />
                {errors.description && (
                  <p className="text-red-400 text-xs font-mono mt-1.5">{errors.description}</p>
                )}
              </div>

              {/* Submit CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <button
                  type="submit"
                  className="px-10 py-4 rounded-full bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-colors cursor-pointer"
                >
                  Transmit Inquiry via Email Client →
                </button>
                <span className="text-xs font-mono text-neutral-500">
                  Prepares an email directly addressed to hello@mainframe.co
                </span>
              </div>

              {submitted && (
                <div className="p-4 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-200 text-xs font-mono">
                  ✓ Form encoded! Your default email client was initiated. If it didn't open automatically, please reach us directly at {SITE_CONFIG.email}.
                </div>
              )}
            </form>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-4 space-y-12">
            <div className="p-8 rounded-2xl bg-[#111111] border border-white/10">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-3">
                Direct Electronic Mail
              </span>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-2xl font-normal text-white underline underline-offset-4 hover:opacity-70 transition-opacity block mb-4"
              >
                {SITE_CONFIG.email}
              </a>
              <CopyEmailButton />
            </div>

            <div className="p-8 rounded-2xl bg-[#111111] border border-white/10">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-3">
                Studio Hubs
              </span>
              <div className="space-y-4 text-sm font-light text-neutral-300">
                <div>
                  <strong className="font-mono text-xs text-white uppercase block">Berlin</strong>
                  <span>Köpenicker Chaussee 34, 10317</span>
                </div>
                <div>
                  <strong className="font-mono text-xs text-white uppercase block">New York</strong>
                  <span>Franklin Street, Tribeca, NY 10013</span>
                </div>
                <div>
                  <strong className="font-mono text-xs text-white uppercase block">Tokyo</strong>
                  <span>Daikanyama, Shibuya-ku, Tokyo 150-0034</span>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#111111] border border-white/10">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-3">
                Social Networks
              </span>
              <ul className="space-y-2 text-sm">
                {SITE_CONFIG.socials.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-300 hover:text-white transition-colors flex items-center justify-between"
                    >
                      <span>{s.name}</span>
                      <span className="font-mono text-xs text-neutral-500">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
