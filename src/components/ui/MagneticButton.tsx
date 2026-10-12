import React from 'react';
import { useMagnetic } from '../../hooks/useMagnetic';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

export function MagneticButton({
  children,
  strength = 0.25,
  className = '',
  ...props
}: MagneticButtonProps) {
  const ref = useMagnetic<HTMLButtonElement>(strength);

  return (
    <button
      ref={ref}
      className={`relative inline-flex items-center justify-center transition-transform duration-100 ease-out will-change-transform ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
