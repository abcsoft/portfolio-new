import React, { useState } from 'react';
import { SHOP_ITEMS } from '../data/shop';
import { ShopItem } from '../types';
import { SITE_CONFIG } from '../data/site';
import { Reveal } from '../components/ui/AnimatedReveal';

export function Shop() {
  const [selectedProduct, setSelectedProduct] = useState<ShopItem | null>(null);

  return (
    <div className="min-h-screen bg-[#080808] text-white pt-32 pb-32 px-5 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
              Studio Editions // Physical Artifacts
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-neutral-300 text-[11px] font-mono">
              Demo Storefront
            </span>
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-normal tracking-tight text-white mb-6">
            Studio Shop.
          </h1>
          <p className="text-neutral-400 text-base sm:text-lg font-light leading-relaxed">
            Numbered monographs, tactile aluminum objects, silkscreen editions, and heavyweight
            apparel produced in strictly limited editions by Mainframe.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
          {SHOP_ITEMS.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 60}>
              <div
                className="group flex flex-col justify-between text-left cursor-pointer"
                onClick={() => setSelectedProduct(item)}
              >
                {/* Product Image */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-900 border border-white/10 mb-6 group-hover:border-white/30 transition-colors">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale contrast-110 brightness-90 transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[11px] font-mono text-white">
                      {item.edition}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-white text-black text-[11px] font-mono font-medium">
                      {item.price}
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                    <span className="px-6 py-2.5 rounded-full bg-white text-black text-xs uppercase tracking-widest font-medium shadow-xl">
                      Inspect Edition Specs
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="flex justify-between items-baseline border-b border-white/10 pb-4">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-normal text-white group-hover:text-neutral-200 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-neutral-400">{item.status}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Archival Inquiry Note */}
        <div className="mt-20 p-8 sm:p-12 rounded-2xl bg-[#111111] border border-white/10 text-center max-w-3xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-2">
            Archival Distribution
          </span>
          <h3 className="text-2xl font-normal text-white mb-3">Looking for past monograph volumes?</h3>
          <p className="text-sm text-neutral-400 font-light leading-relaxed mb-6">
            We maintain an archival vault for academic institutions, libraries, and design museums.
            Contact our editorial desk for catalog reproduction permissions.
          </p>
          <a
            href={`mailto:${SITE_CONFIG.email}?subject=Archival%20Catalog%20Request`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-xs uppercase tracking-widest font-medium hover:bg-neutral-200 transition-colors"
          >
            <span>Inquire Archival Vault</span>
            <span>→</span>
          </a>
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-[#111111] border border-white/20 rounded-2xl p-6 sm:p-10 max-w-2xl w-full max-h-[85vh] overflow-y-auto text-left shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-6 right-6 text-neutral-400 hover:text-white text-lg p-2 cursor-pointer"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 text-xs font-mono text-neutral-400 mb-2">
              <span>{selectedProduct.category}</span>
              <span>//</span>
              <span>{selectedProduct.edition}</span>
            </div>

            <h3 className="text-3xl font-normal text-white mb-2">{selectedProduct.title}</h3>
            <span className="text-xl font-mono text-white block mb-6">{selectedProduct.price}</span>

            <div className="aspect-[16/9] rounded-lg overflow-hidden bg-neutral-900 border border-white/10 mb-6">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed mb-6">
              {selectedProduct.description}
            </p>

            <div className="mb-8 p-4 rounded-lg bg-white/5 border border-white/10">
              <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-400 mb-3">
                Material Specifications
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-neutral-300 font-mono">
                {selectedProduct.specs.map((spec, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-white">•</span>
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <span className="text-xs font-mono text-neutral-400">
                Demo item // Direct inquiry reservation
              </span>
              <a
                href={`mailto:${SITE_CONFIG.email}?subject=Reservation%20Inquiry%3A%20${encodeURIComponent(
                  selectedProduct.title
                )}&body=Hello%20Mainframe%2C%0A%0AI%20would%20like%20to%20reserve%20an%20edition%20of%20${encodeURIComponent(
                  selectedProduct.title
                )}%20(${selectedProduct.price}).%0A%0AShipping%20Country%3A%20%0AName%3A%20`}
                className="px-8 py-3.5 rounded-full bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-colors cursor-pointer w-full sm:w-auto text-center"
              >
                Inquire & Reserve Edition →
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
