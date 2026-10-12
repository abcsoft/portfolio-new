import React, { useState } from 'react';
import { SITE_CONFIG } from '../../data/site';

interface CopyEmailButtonProps {
  className?: string;
}

export function CopyEmailButton({ className = '' }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(SITE_CONFIG.email);
      } else {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = SITE_CONFIG.email;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Graceful fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      title="Click to copy email address"
      aria-label={`Copy email address ${SITE_CONFIG.email}`}
      className={`group relative inline-flex items-center justify-center text-white bg-transparent border border-white rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap cursor-pointer gap-2 sm:gap-3 hover:bg-white hover:text-black transition-colors duration-200 ${className}`}
    >
      <span>
        Reach us:{' '}
        <span className="underline underline-offset-1">{SITE_CONFIG.email}</span>
      </span>

      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="shrink-0 transition-colors"
        aria-hidden="true"
      >
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
      </svg>

      {/* Accessible feedback toast */}
      {copied && (
        <span
          role="status"
          aria-live="polite"
          className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[11px] font-medium px-2.5 py-0.5 rounded shadow-lg pointer-events-none transition-opacity duration-200 select-none animate-fadeIn"
        >
          Copied!
        </span>
      )}
    </button>
  );
}
