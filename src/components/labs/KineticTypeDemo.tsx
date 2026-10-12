import React, { useState, useRef, useEffect } from 'react';

export function KineticTypeDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [activePhrase, setActivePhrase] = useState('FORM FOLLOWS FRICTION');

  const phrases = [
    'FORM FOLLOWS FRICTION',
    'ADAPTIVE INTELLIGENCE',
    'MONOLITHIC WEIGHT',
    'ALGORITHMIC POETICS',
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  const letters = activePhrase.split('');

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-[420px] rounded-xl overflow-hidden border border-white/10 bg-[#0a0a0a] p-8 flex flex-col justify-between select-none"
    >
      <div className="flex justify-between items-center text-xs font-mono text-neutral-400 z-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>EXP_02 // Dynamic Typographic Elasticity</span>
        </div>
        <div className="flex gap-2">
          {phrases.map((p, i) => (
            <button
              key={p}
              type="button"
              onClick={() => setActivePhrase(p)}
              className={`px-2 py-0.5 rounded text-[10px] border cursor-pointer transition-colors ${
                activePhrase === p
                  ? 'bg-white text-black border-white'
                  : 'bg-transparent text-neutral-500 border-white/10 hover:text-white'
              }`}
            >
              0{i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Kinetic Display */}
      <div className="my-auto py-12 flex flex-wrap justify-center items-center gap-x-1 sm:gap-x-2">
        {letters.map((char, index) => {
          if (char === ' ') {
            return <span key={index} className="w-4 sm:w-6" />;
          }

          // Calculate offset based on letter index and mouse position
          const letterRatio = index / letters.length;
          const distToMouse = Math.abs(letterRatio - mousePos.x);
          const skewY = (mousePos.y - 0.5) * 45 * (1 - Math.min(1, distToMouse * 2));
          const scaleY = 1 + (1 - Math.min(1, distToMouse * 2.5)) * 0.7;
          const letterWeight = Math.round(300 + (1 - Math.min(1, distToMouse * 2)) * 500);

          return (
            <span
              key={index}
              className="inline-block text-3xl sm:text-5xl md:text-6xl text-white font-mono transition-transform duration-150 ease-out will-change-transform"
              style={{
                transform: `scaleY(${scaleY}) skewY(${skewY}deg)`,
                fontWeight: letterWeight,
              }}
            >
              {char}
            </span>
          );
        })}
      </div>

      <div className="flex justify-between items-end text-xs font-mono text-neutral-500 z-10">
        <span>X: {(mousePos.x * 100).toFixed(0)}% // Y: {(mousePos.y * 100).toFixed(0)}%</span>
        <span>Move cursor horizontally to stretch typographic gravity</span>
      </div>
    </div>
  );
}
