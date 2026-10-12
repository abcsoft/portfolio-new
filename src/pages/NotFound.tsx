import React from 'react';
import { Link } from '../lib/routing';

export function NotFound() {
  return (
    <div className="min-h-screen bg-[#080808] text-white flex flex-col justify-center items-center px-6 text-center">
      <div className="max-w-md">
        <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-4">
          Error 404 // Coordinate Not Found
        </span>
        <h1 className="text-6xl sm:text-8xl font-normal tracking-tight text-white mb-6">
          Void.
        </h1>
        <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed mb-8">
          The requested coordinate does not exist in the Mainframe index or has moved to an
          alternative sector.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-colors"
        >
          <span>Return to Mainframe Root</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
