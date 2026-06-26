import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { CinematicCursor } from '../components/ui/CinematicCursor';

export function MainLayout({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check prefers-reduced-motion: skip preloader or render immediately
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setLoading(false);
      return;
    }

    const duration = 1800; // Total loading time in ms
    const startTime = performance.now();

    const updateCounter = (now: number) => {
      const elapsed = now - startTime;
      const pct = Math.min(elapsed / duration, 1);
      
      // Easing for technical look: start fast, slow down, then finish
      const easeProgress = pct === 1 ? 1 : 1 - Math.pow(1 - pct, 3);
      const currentVal = Math.floor(easeProgress * 100);
      
      setProgress(currentVal);

      if (pct < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setTimeout(() => {
          setLoading(false);
        }, 300); // Hold at 100% briefly for visual closure
      }
    };

    requestAnimationFrame(updateCounter);
  }, []);

  return (
    <>
      <CinematicCursor />

      {/* Editorial Matrix Preloader */}
      <div 
        className={`fixed inset-0 w-screen h-screen bg-[#0a0e1a] z-99998 flex flex-col justify-between p-10 md:p-16 select-none transition-all duration-[1200ms] ease-[cubic-bezier(0.9,0,0.1,1)] will-change-[clip-path] ${
          loading 
            ? '[clip-path:polygon(0_0,_100%_0,_100%_100%,_0_100%)]' 
            : '[clip-path:polygon(0_0,_100%_0,_100%_0,_0_0)] pointer-events-none'
        }`}
      >
        {/* Top meta tags */}
        <div className="flex justify-between items-start w-full font-code-md text-[10px] tracking-[0.2em] text-mystic-mint/40 uppercase">
          <div>SYS.INIT // AETHERIS SYSTEMS</div>
          <div className="text-right">STAGE_01 // ATMOSPHERE</div>
        </div>

        {/* Center manifesto statement */}
        <div className="max-w-2xl md:max-w-4xl self-start my-auto">
          <h2 className="font-display-lg font-light text-2xl md:text-4xl text-arctic-powder leading-relaxed tracking-tight overflow-hidden">
            <span className="block translate-y-0 transition-transform duration-slow">
              Orchestrating complex enterprise workflows
            </span>
            <span className="block text-deep-saffron italic translate-y-0 transition-transform duration-slow delay-150">
              with absolute mathematical integrity.
            </span>
          </h2>
        </div>

        {/* Bottom indicator count */}
        <div className="flex justify-between items-end w-full">
          <div className="font-code-md text-[10px] tracking-widest text-mystic-mint/30">
            LOAD_PERCENT // INITIALIZING
          </div>
          <div className="font-code-md text-5xl md:text-7xl font-light tracking-tighter text-arctic-powder opacity-60">
            {progress.toString().padStart(3, '0')}
          </div>
        </div>
      </div>

      {children}
    </>
  );
}
