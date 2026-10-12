import React, { useEffect, useRef } from 'react';

export function GeometricMatrixDemo() {
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

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(canvas);

    let angleX = 0;
    let angleY = 0;
    let targetAngleX = 0;
    let targetAngleY = 0;

    // Define 3D Cube Vertices
    const size = 100;
    const vertices = [
      [-size, -size, -size],
      [size, -size, -size],
      [size, size, -size],
      [-size, size, -size],
      [-size, -size, size],
      [size, -size, size],
      [size, size, size],
      [-size, size, size],
    ];

    const edges = [
      [0, 1], [1, 2], [2, 3], [3, 0],
      [4, 5], [5, 6], [6, 7], [7, 4],
      [0, 4], [1, 5], [2, 6], [3, 7],
    ];

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetAngleX = y * Math.PI;
      targetAngleY = x * Math.PI;
    };

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 420;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    const render = () => {
      if (isVisible) {
        ctx.fillStyle = '#0a0a0a';
        ctx.fillRect(0, 0, width, height);

        // Subtle ambient rotation + mouse lerp
        angleX += (targetAngleX - angleX) * 0.05 + 0.003;
        angleY += (targetAngleY - angleY) * 0.05 + 0.005;

        const cosX = Math.cos(angleX);
        const sinX = Math.sin(angleX);
        const cosY = Math.cos(angleY);
        const sinY = Math.sin(angleY);

        const projected = vertices.map(([x, y, z]) => {
          // Rotate Y
          const x1 = x * cosY - z * sinY;
          const z1 = z * cosY + x * sinY;

          // Rotate X
          const y2 = y * cosX - z1 * sinX;
          const z2 = z1 * cosX + y * sinX;

          // Perspective projection
          const fov = 350;
          const scale = fov / (fov + z2 + 250);
          return {
            x: width / 2 + x1 * scale,
            y: height / 2 + y2 * scale,
            z: z2,
            scale,
          };
        });

        // Draw coordinate grid lines behind
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.lineWidth = 1;
        const gridStep = 40;
        for (let x = 0; x < width; x += gridStep) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
          ctx.stroke();
        }
        for (let y = 0; y < height; y += gridStep) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }

        // Draw Cube Edges
        ctx.lineWidth = 1.5;
        edges.forEach(([i, j]) => {
          const p1 = projected[i];
          const p2 = projected[j];

          const avgZ = (p1.z + p2.z) / 2;
          const alpha = Math.max(0.15, Math.min(1, 0.6 - avgZ / 300));

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.stroke();
        });

        // Draw Vertices
        projected.forEach((p) => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, 3 * p.scale, 0, Math.PI * 2);
          ctx.fillStyle = '#ffffff';
          ctx.fill();
        });
      }

      rafId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative w-full rounded-xl overflow-hidden border border-white/10 bg-[#0a0a0a]">
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 text-xs font-mono text-neutral-400">
        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
        <span>EXP_03 // Isometric Orthogonal Matrix</span>
      </div>
      <div className="absolute top-4 right-4 z-10 text-[11px] font-mono text-neutral-500">
        Interact: Tilt Vector Orbit
      </div>
      <canvas ref={canvasRef} className="block w-full cursor-crosshair" />
    </div>
  );
}
