import { useRef, useEffect } from 'react';
import { useReducedMotion } from './useReducedMotion';

export function useMagnetic<T extends HTMLElement = HTMLButtonElement>(strength = 0.3) {
  const ref = useRef<T | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element || reducedMotion) return;

    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        element.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0)`;
      });
    };

    const handleMouseLeave = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        element.style.transform = 'translate3d(0px, 0px, 0)';
      });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(rafId);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      if (element) {
        element.style.transform = '';
      }
    };
  }, [strength, reducedMotion]);

  return ref;
}
