import type { HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export function Container({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("max-w-7xl mx-auto px-container-padding", className)} {...props}>
      {children}
    </div>
  );
}
