import { useRef, useEffect } from 'react';

interface TiltOptions {
  maxRotation?: number; // Maximum rotation in degrees
}

export function useTilt<T extends HTMLElement>({ maxRotation = 2.5 }: TiltOptions = {}) {
  const ref = useRef<T>(null);
  
  const targetX = useRef(50);
  const targetY = useRef(50);
  const targetTiltX = useRef(0);
  const targetTiltY = useRef(0);

  const currentX = useRef(50);
  const currentY = useRef(50);
  const currentTiltX = useRef(0);
  const currentTiltY = useRef(0);
  
  const rAFId = useRef<number | null>(null);
  const isHovered = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const tick = () => {
      // Dynamic interpolation speeds: slower return to mimic heavy physical damping
      const lerpSpeed = isHovered.current ? 0.08 : 0.05;

      currentX.current += (targetX.current - currentX.current) * lerpSpeed;
      currentY.current += (targetY.current - currentY.current) * lerpSpeed;
      currentTiltX.current += (targetTiltX.current - currentTiltX.current) * lerpSpeed;
      currentTiltY.current += (targetTiltY.current - currentTiltY.current) * lerpSpeed;

      element.style.setProperty('--mouse-x', `${currentX.current}%`);
      element.style.setProperty('--mouse-y', `${currentY.current}%`);
      element.style.transform = `perspective(1200px) rotateY(${currentTiltX.current * maxRotation}deg) rotateX(${-currentTiltY.current * maxRotation}deg) translateZ(8px)`;

      const diff = 
        Math.abs(currentTiltX.current - targetTiltX.current) + 
        Math.abs(currentTiltY.current - targetTiltY.current);

      if (!isHovered.current && diff < 0.005) {
        // Rest state reached, clean up styles and stop tick
        element.style.setProperty('--mouse-x', '50%');
        element.style.setProperty('--mouse-y', '50%');
        element.style.transform = 'perspective(1200px) rotateY(0deg) rotateX(0deg) translateZ(0)';
        rAFId.current = null;
      } else {
        rAFId.current = requestAnimationFrame(tick);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      
      targetTiltX.current = (e.clientX - cx) / (rect.width / 2);
      targetTiltY.current = (e.clientY - cy) / (rect.height / 2);

      const localX = e.clientX - rect.left;
      const localY = e.clientY - rect.top;
      targetX.current = (localX / rect.width) * 100;
      targetY.current = (localY / rect.height) * 100;

      isHovered.current = true;

      // Start the animation loop if it is not already running
      if (rAFId.current === null) {
        rAFId.current = requestAnimationFrame(tick);
      }
    };

    const handleMouseLeave = () => {
      targetX.current = 50;
      targetY.current = 50;
      targetTiltX.current = 0;
      targetTiltY.current = 0;
      isHovered.current = false;
      
      if (rAFId.current === null) {
        rAFId.current = requestAnimationFrame(tick);
      }
    };

    element.addEventListener('mousemove', handleMouseMove, { passive: true });
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      if (rAFId.current !== null) {
        cancelAnimationFrame(rAFId.current);
      }
    };
  }, [maxRotation]);

  return ref;
}
