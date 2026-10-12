import React, { useState, useEffect } from 'react';
import { useVideoScrub } from '../../hooks/useVideoScrub';
import { useTypewriter } from '../../hooks/useTypewriter';
import { CopyEmailButton } from '../ui/CopyEmailButton';
import { SITE_CONFIG } from '../../data/site';
import { useRouter } from '../../lib/routing';

interface HeroProps {
  onScrollToProcess?: () => void;
}

export function Hero({ onScrollToProcess }: HeroProps) {
  const { navigate } = useRouter();
  const [pillsVisible, setPillsVisible] = useState(false);

  const {
    videoRef,
    handleSeeked,
    handleLoadedMetadata,
    handleError,
    videoError,
  } = useVideoScrub({ sensitivity: 0.8 });

  const typewriterText = "Glad you stopped in. Good taste tends to find us. Now, what are we building?";
  const { displayed, done } = useTypewriter(typewriterText, 38, 600);

  // Show action pills 400ms after load independently of typewriter
  useEffect(() => {
    const timer = setTimeout(() => {
      setPillsVisible(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-[100vh] h-[100dvh] flex flex-col justify-end pb-12 md:justify-center md:pb-0 px-5 sm:px-8 md:px-10 overflow-hidden select-none">
      {/* Background Video (mouse-scrub controlled) */}
      <video
        ref={videoRef}
        src={SITE_CONFIG.heroVideoUrl}
        poster={SITE_CONFIG.heroPosterUrl}
        muted
        playsInline
        preload="auto"
        onSeeked={handleSeeked}
        onLoadedMetadata={handleLoadedMetadata}
        onError={handleError}
        className="fixed inset-0 z-0 w-full h-full object-cover pointer-events-none"
        style={{
          objectPosition: '70% center',
        }}
        aria-hidden="true"
      />

      {/* Fallback poster background if video fails */}
      {videoError && (
        <div
          className="fixed inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${SITE_CONFIG.heroPosterUrl})` }}
        />
      )}

      {/* Subtle vignette gradient for legibility */}
      <div className="fixed inset-0 z-0 bg-gradient-to-t from-black/80 via-black/25 to-black/40 pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-xl text-left">
        {/* 1. Blurred intro label */}
        <div
          className="pointer-events-none select-none mb-5 sm:mb-6"
          style={{
            fontSize: 'clamp(18px, 4vw, 26px)',
            lineHeight: 1.3,
            fontWeight: 400,
            color: '#fff',
            filter: 'blur(4px)',
          }}
        >
          Hey there, meet A.R.I.A,
          <br />
          Mainframe's Adaptive Response Interface Agent
        </div>

        {/* 2. Typewriter text */}
        <p
          className="text-white mb-5 sm:mb-6"
          style={{
            fontSize: 'clamp(18px, 4vw, 26px)',
            lineHeight: 1.35,
            fontWeight: 400,
            minHeight: '54px',
          }}
        >
          {displayed}
          {!done && (
            <span
              className="inline-block w-[2px] h-[1.1em] bg-white align-middle ml-[2px] animate-blink"
              aria-hidden="true"
            />
          )}
        </p>

        {/* 3. Action pill buttons */}
        <div
          className="flex flex-wrap gap-y-1 transition-all duration-400 ease-out"
          style={{
            opacity: pillsVisible ? 1 : 0,
            transform: pillsVisible ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}
        >
          {/* Solid Pill 1 */}
          <button
            type="button"
            onClick={() => navigate('/contact?topic=pitch')}
            className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap cursor-pointer hover:bg-black hover:text-white transition-colors duration-200"
          >
            Pitch us an idea
          </button>

          {/* Solid Pill 2 */}
          <button
            type="button"
            onClick={() => navigate('/openings')}
            className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap cursor-pointer hover:bg-black hover:text-white transition-colors duration-200"
          >
            Come work here
          </button>

          {/* Solid Pill 3 */}
          <button
            type="button"
            onClick={() => navigate('/contact?topic=hello')}
            className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap cursor-pointer hover:bg-black hover:text-white transition-colors duration-200"
          >
            Send a brief hello
          </button>

          {/* Solid Pill 4 */}
          <button
            type="button"
            onClick={() => {
              if (onScrollToProcess) {
                onScrollToProcess();
              } else {
                navigate('/studio');
              }
            }}
            className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap cursor-pointer hover:bg-black hover:text-white transition-colors duration-200"
          >
            See how we operate
          </button>

          {/* 5. Outlined Pill with Copy Icon */}
          <CopyEmailButton />
        </div>
      </div>

      {/* Mouse Scrub Instruction Hint */}
      <div className="absolute bottom-4 right-5 sm:right-8 z-10 hidden sm:flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-neutral-400">
        <span>Scrub video: Move mouse horizontally</span>
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
      </div>
    </section>
  );
}
