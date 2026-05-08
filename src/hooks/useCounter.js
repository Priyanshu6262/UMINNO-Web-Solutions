import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

/**
 * Custom animated counter hook – replaces react-countup
 * to avoid version-dependent import issues.
 */
export function useCounter(end, duration = 2000, start = 0) {
  const [count, setCount] = useState(start);
  const { ref, inView } = useInView({ triggerOnce: true });
  const frameRef = useRef(null);

  useEffect(() => {
    if (!inView) return;

    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * (end - start) + start));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      }
    };
    frameRef.current = requestAnimationFrame(step);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [inView, end, start, duration]);

  return { count, ref };
}
