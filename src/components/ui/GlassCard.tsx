import type { HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export function GlassCard({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  const { ref, isIntersecting } = useIntersectionObserver();
  
  return (
    <div 
      ref={ref}
      className={cn(
        "glass rounded-xl transition-all duration-1000",
        isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
}
