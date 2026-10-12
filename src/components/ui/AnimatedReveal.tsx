import React from 'react';
import { useInView } from '../../hooks/useInView';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 24,
}: RevealProps) {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  let transformInitial = 'translateY(0)';
  if (direction === 'up') transformInitial = `translateY(${distance}px)`;
  if (direction === 'down') transformInitial = `translateY(-${distance}px)`;
  if (direction === 'left') transformInitial = `translateX(${distance}px)`;
  if (direction === 'right') transformInitial = `translateX(-${distance}px)`;

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${className}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translate(0, 0)' : transformInitial,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

interface TextRevealWordsProps {
  text: string;
  className?: string;
  staggerMs?: number;
  baseDelayMs?: number;
}

export function TextRevealWords({
  text,
  className = '',
  staggerMs = 50,
  baseDelayMs = 0,
}: TextRevealWordsProps) {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const reducedMotion = useReducedMotion();
  const words = text.split(' ');

  if (reducedMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em] align-top">
          <span
            className="inline-block transition-transform duration-600 ease-out will-change-transform"
            style={{
              transform: inView ? 'translateY(0)' : 'translateY(110%)',
              opacity: inView ? 1 : 0,
              transitionDelay: `${baseDelayMs + i * staggerMs}ms`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </span>
  );
}

interface LetterRevealProps {
  text: string;
  className?: string;
  staggerMs?: number;
}

export function LetterReveal({ text, className = '', staggerMs = 25 }: LetterRevealProps) {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <span className={className}>{text}</span>;
  }

  const chars = text.split('');

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {chars.map((char, index) => (
        <span
          key={index}
          className="inline-block transition-all duration-500 ease-out"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0) scale(1)' : 'translateY(18px) scale(0.96)',
            transitionDelay: `${index * staggerMs}ms`,
            whiteSpace: char === ' ' ? 'pre' : 'normal',
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}
