// src/hooks/useCountUp.js
import { useState, useEffect } from 'react';

export function useCountUp(target, duration = 1600, start = 0) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    // Respect user's motion preferences
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(target);
      return;
    }

    let startTime = null;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Smooth ease-out quad curve: 1 - (1 - x)^2
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      const current = Math.floor(start + easeOutQuad * (target - start));

      setCount(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [target, duration, start]);

  return count;
}