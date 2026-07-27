import { useEffect, useRef, useState } from 'react';
import { getPerformanceProfile } from '../utils/performance';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  text: string;
  alpha: number;
  size: number;
  decay: number;
  color: string;
}

export function CustomCursor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const mouse = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const particles = useRef<Particle[]>([]);
  const lastSpawnTime = useRef(0);

  const [hoverState, setHoverState] = useState<'none' | 'cyan' | 'purple' | 'green'>('none');
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const hoverStateRef = useRef(hoverState);
  useEffect(() => {
    hoverStateRef.current = hoverState;
  }, [hoverState]);

  useEffect(() => {
    const profile = getPerformanceProfile();
    if (profile.isTouch) return;

    const resizeCanvas = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });

    const spawnParticle = (x: number, y: number) => {
      if (!profile.enableCursorParticles) return;
      if (particles.current.length > 25) return; // Cap maximum active particles

      const angle = Math.random() * Math.PI * 2;
      const speed = 0.3 + Math.random() * 0.8;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed - 0.4;

      let color = '#00f0ff';
      if (hoverStateRef.current === 'purple') {
        color = '#bd00ff';
      } else if (hoverStateRef.current === 'green') {
        color = '#39ff14';
      }

      particles.current.push({
        x,
        y,
        vx,
        vy,
        text: Math.random() > 0.5 ? '1' : '0',
        alpha: 1.0,
        size: 10 + Math.random() * 5,
        decay: 0.025 + Math.random() * 0.015,
        color,
      });
    };

    const spawnClickBurst = (x: number, y: number) => {
      if (!profile.enableCursorParticles) return;
      const count = 6; // Reduced burst count from 12 to 6
      let burstColor = '#00f0ff';
      if (hoverStateRef.current === 'purple') burstColor = '#bd00ff';
      else if (hoverStateRef.current === 'green') burstColor = '#39ff14';

      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2;
        const speed = 1.2 + Math.random() * 2.0;
        const vx = Math.cos(angle) * speed;
        const vy = Math.sin(angle) * speed;

        particles.current.push({
          x,
          y,
          vx,
          vy,
          text: Math.random() > 0.5 ? '1' : '0',
          alpha: 1.0,
          size: 11 + Math.random() * 4,
          decay: 0.03 + Math.random() * 0.02,
          color: burstColor,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (!isVisible) {
        setIsVisible(true);
      }

      const now = Date.now();
      if (now - lastSpawnTime.current > 70) {
        spawnParticle(e.clientX, e.clientY);
        lastSpawnTime.current = now;
      }
    };

    // Optimized hover detection using target matching without redundant DOM queries
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, [role="button"], .cyber-card, .btn-primary, .btn-secondary, input, textarea, select');
      if (interactive) {
        if (
          interactive.classList.contains('btn-secondary') ||
          interactive.classList.contains('cyber-badge-purple') ||
          interactive.closest('.CertsAchievements') ||
          interactive.closest('.experience-item')
        ) {
          setHoverState('purple');
        } else if (
          interactive.classList.contains('cyber-badge-green') ||
          interactive.closest('.contact-section') ||
          interactive.closest('form')
        ) {
          setHoverState('green');
        } else {
          setHoverState('cyan');
        }
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, [role="button"], .cyber-card, .btn-primary, .btn-secondary, input, textarea, select');
      if (interactive) {
        const relatedTarget = e.relatedTarget as HTMLElement | null;
        if (!relatedTarget || !relatedTarget.closest('a, button, [role="button"], .cyber-card, .btn-primary, .btn-secondary, input, textarea, select')) {
          setHoverState('none');
        }
      }
    };

    const handleMouseDown = () => {
      setIsClicked(true);
      spawnClickBurst(mouse.current.x, mouse.current.y);
    };

    const handleMouseUp = () => {
      setIsClicked(false);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    window.addEventListener('mouseout', handleMouseOut, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter, { passive: true });

    let animationFrameId: number;

    const render = () => {
      // Smooth lerp
      const lerpFactor = 0.2;
      ring.current.x += (mouse.current.x - ring.current.x) * lerpFactor;
      ring.current.y += (mouse.current.y - ring.current.y) * lerpFactor;

      // Position DOM elements with hardware accelerated translate3d
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0)`;
      }

      // Render canvas particles without expensive shadowBlur
      if (profile.enableCursorParticles && canvasRef.current) {
        const ctx = canvasRef.current.getContext('2d');
        if (ctx) {
          ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

          const activeParticles = particles.current;
          if (activeParticles.length > 0) {
            ctx.font = '12px "JetBrains Mono", monospace';
            for (let i = activeParticles.length - 1; i >= 0; i--) {
              const p = activeParticles[i];
              p.x += p.vx;
              p.y += p.vy;
              p.alpha -= p.decay;

              if (p.alpha <= 0) {
                activeParticles.splice(i, 1);
                continue;
              }

              ctx.globalAlpha = p.alpha;
              ctx.fillStyle = p.color;
              ctx.fillText(p.text, p.x, p.y);
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`custom-cursor-container hover-${hoverState} ${isClicked ? 'clicked' : ''} ${isVisible ? 'visible' : ''}`}
    >
      <canvas ref={canvasRef} className="custom-cursor-trail-canvas" />
      <div ref={dotRef} className="custom-cursor-dot" />
      <div ref={ringRef} className="custom-cursor-ring">
        <div className="custom-cursor-ring-inner">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="2" strokeDasharray="8 6" />
            <path d="M 50 2 L 50 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 50 98 L 50 88" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 2 50 L 12 50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 98 50 L 88 50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
