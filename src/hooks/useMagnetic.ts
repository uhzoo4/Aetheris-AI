import { useRef, useEffect } from 'react';

interface MagneticOptions {
  strength?: number; // 0 to 1, percentage of mouse distance to pull
  snapsBack?: boolean;
}

export function useMagnetic<T extends HTMLElement>({ strength = 0.12, snapsBack = true }: MagneticOptions = {}) {
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
      
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;

      // Direct DOM mutation for 60fps performance with smooth lag tracking
      element.style.transition = 'transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1)';
      element.style.transform = `translate3d(${dx * strength}px, ${dy * strength}px, 0)`;
    };

    const handleMouseLeave = () => {
      if (snapsBack) {
        // Smooth snap back utilizing official brand easing
        element.style.transition = 'transform 450ms cubic-bezier(0.25, 1, 0.5, 1)';
        element.style.transform = 'translate3d(0px, 0px, 0)';
      }
    };

    element.addEventListener('mousemove', handleMouseMove, { passive: true });
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength, snapsBack]);

  return ref;
}
