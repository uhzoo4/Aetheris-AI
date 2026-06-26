import type { HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  name: string;
}

export function Icon({ name, className, ...props }: IconProps) {
  return (
    <span className={cn("material-symbols-outlined", className)} {...props}>
      {name}
    </span>
  );
}
