import { useEffect, useState } from 'react';

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let rAFId: number;

    const handleMouseMove = (e: MouseEvent) => {
      // Throttle mousemove events to requestAnimationFrame for 60 FPS performance
      cancelAnimationFrame(rAFId);
      rAFId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rAFId);
    };
  }, []);

  return mousePosition;
}
