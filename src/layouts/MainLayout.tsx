import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { CinematicCursor } from '../components/ui/CinematicCursor';

interface ModalData {
  isOpen: boolean;
  title: string;
  message: string;
}

export function MainLayout({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [modal, setModal] = useState<ModalData>({ isOpen: false, title: '', message: '' });

  useEffect(() => {
    // Check prefers-reduced-motion: skip preloader or render immediately
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setLoading(false);
      return;
    }

    const duration = 2400; // Total loading time in ms
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

  useEffect(() => {
    const handleOpenModal = (e: Event) => {
      const customEvent = e as CustomEvent<{ title: string; message: string }>;
      setModal({
        isOpen: true,
        title: customEvent.detail.title || 'Platform Notification',
        message: customEvent.detail.message || 'Action executed successfully.'
      });
    };

    window.addEventListener('open-aetheris-modal', handleOpenModal);
    return () => window.removeEventListener('open-aetheris-modal', handleOpenModal);
  }, []);

  return (
    <>
      <CinematicCursor />

      {/* Editorial Matrix Preloader */}
      <div 
        className={`fixed inset-0 w-screen h-screen bg-[#0a0e1a] z-99998 flex flex-col justify-between p-10 md:p-16 select-none transition-all duration-[1500ms] ease-[cubic-bezier(0.9,0,0.1,1)] will-change-[clip-path] ${
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

      {/* Global Interactive Alert Modal */}
      {modal.isOpen && (
        <div 
          className="fixed inset-0 w-screen h-screen z-[99999] flex items-center justify-center p-6 bg-oceanic-noir/75 backdrop-blur-md"
          onClick={() => setModal({ isOpen: false, title: '', message: '' })}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div 
            className="glass max-w-md w-full p-8 rounded-2xl border border-mystic-mint/20 flex flex-col items-center text-center shadow-elevation-high relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-12 rounded-full bg-nocturnal-expedition flex items-center justify-center mb-6 precision-border shadow-glow-primary">
              <span className="text-deep-saffron text-2xl">✓</span>
            </div>
            <h3 id="modal-title" className="font-display-lg text-xl font-bold text-arctic-powder mb-3 tracking-tight">
              {modal.title}
            </h3>
            <p className="font-body-md text-mystic-mint/80 leading-relaxed text-sm">
              {modal.message}
            </p>
            <button
              onClick={() => setModal({ isOpen: false, title: '', message: '' })}
              className="bg-deep-saffron text-oceanic-noir font-bold px-6 py-2.5 rounded-xl mt-6 cursor-pointer hover:scale-105 active:scale-95 duration-fast focus-visible:ring-2 focus-visible:ring-deep-saffron outline-none text-sm shadow-elevation-mid hover:shadow-glow-primary"
            >
              Acknowledge
            </button>
          </div>
        </div>
      )}

      {children}
    </>
  );
}
