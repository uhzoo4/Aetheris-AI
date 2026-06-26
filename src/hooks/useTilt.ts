import { useRef, useEffect } from 'react';

interface TiltOptions {
  maxRotation?: number; // Maximum rotation in degrees
}

export function useTilt<T extends HTMLElement>({ maxRotation = 6 }: TiltOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);

      const localX = e.clientX - rect.left;
      const localY = e.clientY - rect.top;
      const percentX = (localX / rect.width) * 100;
      const percentY = (localY / rect.height) * 100;

      // Update CSS variables for reflection highlighting
      element.style.setProperty('--mouse-x', `${percentX}%`);
      element.style.setProperty('--mouse-y', `${percentY}%`);

      // Apply 3D perspective and rotation directly
      element.style.transition = 'none';
      element.style.transform = `perspective(1200px) rotateY(${dx * maxRotation}deg) rotateX(${-dy * maxRotation}deg) translateZ(8px)`;
    };

    const handleMouseLeave = () => {
      element.style.transition = 'transform 500ms cubic-bezier(0.25, 0.1, 0.25, 1)';
      element.style.transform = `perspective(1200px) rotateY(0deg) rotateX(0deg) translateZ(0)`;
      element.style.setProperty('--mouse-x', '50%');
      element.style.setProperty('--mouse-y', '50%');
    };

    element.addEventListener('mousemove', handleMouseMove, { passive: true });
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [maxRotation]);

  return ref;
}
