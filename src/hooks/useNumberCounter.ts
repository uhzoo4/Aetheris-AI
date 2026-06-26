import { useEffect, useState, useRef } from 'react';

interface CounterOptions {
  duration?: number; // Duration of animation in ms
}

export function useNumberCounter(target: number, { duration = 800 }: CounterOptions = {}) {
  const [count, setCount] = useState(target);
  const elementRef = useRef<HTMLElement>(null);
  const isVisible = useRef(false);
  const prevTargetRef = useRef(target);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCount(target);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          isVisible.current = true;
          startCountAnimation(prevTargetRef.current, target);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    const startCountAnimation = (from: number, to: number) => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      let startTime: number | null = null;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        // Easing standard: cubic-bezier(0.25, 0.1, 0.25, 1)
        const easeVal = progress === 1 ? 1 : 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.floor(from + (to - from) * easeVal);

        setCount(currentCount);

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        } else {
          setCount(to);
          prevTargetRef.current = to;
        }
      };

      animationRef.current = requestAnimationFrame(animate);
    };

    // If already visible and target changes, run count transition
    if (isVisible.current && target !== prevTargetRef.current) {
      startCountAnimation(prevTargetRef.current, target);
    } else if (!isVisible.current) {
      // If not visible, just keep count in sync with target
      setCount(target);
      prevTargetRef.current = target;
    }

    return () => {
      observer.disconnect();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [target, duration]);

  return { count, ref: elementRef };
}
