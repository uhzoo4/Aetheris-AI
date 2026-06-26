import { useEffect, useRef } from 'react';

export function CinematicCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Check prefers-reduced-motion: if true, hide the custom cursor completely
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      cursor.style.display = 'none';
      return;
    }

    // Hide default cursor in CSS (we do this globally)
    document.documentElement.classList.add('custom-cursor-active');

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let isHovering = false;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.opacity = '1';
    };

    const onMouseLeaveWindow = () => {
      cursor.style.opacity = '0';
    };

    const onMouseEnterWindow = () => {
      cursor.style.opacity = '1';
    };

    // Listen to mouseover to detect interactive elements for scale-up
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('[role="button"]') ||
        target.classList.contains('interactive-hover') ||
        target.closest('.interactive-hover');

      if (isInteractive) {
        if (!isHovering) {
          isHovering = true;
          cursor.classList.add('cursor-hover');
        }
      } else {
        if (isHovering) {
          isHovering = false;
          cursor.classList.remove('cursor-hover');
        }
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseleave', onMouseLeaveWindow);
    document.addEventListener('mouseenter', onMouseEnterWindow);

    // Dynamic easing follow-loop using requestAnimationFrame (smooth custom inertia)
    const tick = () => {
      const ease = 0.15; // Smooth interpolation speed factor
      cursorX += (mouseX - cursorX) * ease;
      cursorY += (mouseY - cursorY) * ease;

      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate3d(-50%, -50%, 0)`;

      requestAnimationFrame(tick);
    };

    const rAFId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeaveWindow);
      document.removeEventListener('mouseenter', onMouseEnterWindow);
      cancelAnimationFrame(rAFId);
      document.documentElement.classList.remove('custom-cursor-active');
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 rounded-full bg-mystic-mint pointer-events-none mix-blend-difference opacity-0 transition-opacity duration-300 will-change-transform cursor-pointer-dot"
      style={{ zIndex: 99999 }}
    />
  );
}
