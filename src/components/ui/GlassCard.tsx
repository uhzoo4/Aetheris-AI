import { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export const GlassCard = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const { ref: observerRef, isIntersecting } = useIntersectionObserver();

    const setRefs = (node: HTMLDivElement) => {
      // Set internal observer ref
      (observerRef as any).current = node;
      // Set forwarded ref
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        (ref as any).current = node;
      }
    };

    return (
      <div 
        ref={setRefs}
        className={cn(
          "glass rounded-xl transition-all duration-1000",
          isIntersecting ? "opacity-100 translate-y-0 is-in-view" : "opacity-0 translate-y-10",
          className
        )} 
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassCard.displayName = 'GlassCard';

