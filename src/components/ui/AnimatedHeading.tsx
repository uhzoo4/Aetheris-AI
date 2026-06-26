import type { HTMLAttributes } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { cn } from '../../utils/cn';

export function AnimatedHeading({ className, children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  const { ref, isIntersecting } = useIntersectionObserver();
  return (
    <h2
      ref={ref}
      className={cn(
        "transition-all duration-1000",
        isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}
