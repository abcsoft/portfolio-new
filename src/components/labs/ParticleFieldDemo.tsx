import React, { useEffect, useRef } from 'react';

export function ParticleFieldDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = 420);
    let rafId: number;
    let isVisible = true;

    // Intersection observer to pause rendering when offscreen
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(canvas);

    const mouse = { x: -1000, y: -1000, active: false };

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      baseX: number;
      baseY: number;
      size: number;
      alpha: number;
    }

    const particleCount = Math.min(100, Math.floor((width * height) / 3200));
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      particles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.5 + 0.8,
        alpha: Math.random() * 0.6 + 0.2,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 420;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    const render = () => {
      if (isVisible) {
        ctx.fillStyle = '#0a0a0a';
        ctx.fillRect(0, 0, width, height);

        // Draw connections
        for (let i = 0; i < particles.length; i++) {
          const p1 = particles[i];

          // Update position
          p1.x += p1.vx;
          p1.y += p1.vy;

          if (p1.x < 0 || p1.x > width) p1.vx *= -1;
          if (p1.y < 0 || p1.y > height) p1.vy *= -1;

          // Mouse influence
          if (mouse.active) {
            const dx = mouse.x - p1.x;
            const dy = mouse.y - p1.y;
            const dist = Math.hypot(dx, dy);
            if (dist < 120) {
              const force = (120 - dist) / 120;
              p1.x -= (dx / dist) * force * 3;
              p1.y -= (dy / dist) * force * 3;
            }
          }

          // Render particle
          ctx.beginPath();
          ctx.arc(p1.x, p1.y, p1.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${p1.alpha})`;
          ctx.fill();

          // Check neighbors
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
            if (dist < 80) {
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(255, 255, 255, ${0.15 * (1 - dist / 80)})`;
              ctx.lineWidth = 0.6;
              ctx.stroke();
            }
          }
        }
      }

      rafId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative w-full rounded-xl overflow-hidden border border-white/10 bg-[#0a0a0a]">
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 text-xs font-mono text-neutral-400">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>EXP_01 // Kinetic Particle Topology</span>
      </div>
      <div className="absolute top-4 right-4 z-10 text-[11px] font-mono text-neutral-500">
        Interact: Hover & Displace
      </div>
      <canvas ref={canvasRef} className="block w-full cursor-crosshair" />
    </div>
  );
}
