import { useState, useEffect, useRef } from 'react';

/**
 * Throttled, performant 3D mouse tilt tracking.
 * Calculates normalized coordinates (-1 to 1) relative to element center.
 */
export function useMouseTilt(ref, { maxTilt = 10, enabled = true } = {}) {
  const [coords, setCoords] = useState({
    rotateX: 0,
    rotateY: 0,
    shineX: 50,
    shineY: 50,
  });

  const frameRef = useRef(null);
  const targetCoords = useRef({ x: 0, y: 0, rawX: 50, rawY: 50 });

  useEffect(() => {
    if (!enabled || !ref.current) return;

    // Accessibility check: disable tilt on touch devices or reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = window.matchMedia('(hover: none)').matches;
    if (prefersReducedMotion || isTouch) return;

    const element = ref.current;

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      // Normalize center to (0, 0), range: -1 to 1
      const normX = (x - 0.5) * 2;
      const normY = (y - 0.5) * 2;

      targetCoords.current = {
        x: normX,
        y: normY,
        rawX: x * 100,
        rawY: y * 100,
      };

      if (!frameRef.current) {
        frameRef.current = requestAnimationFrame(updateTilt);
      }
    };

    const handleMouseLeave = () => {
      targetCoords.current = { x: 0, y: 0, rawX: 50, rawY: 50 };
      if (!frameRef.current) {
        frameRef.current = requestAnimationFrame(updateTilt);
      }
    };

    const updateTilt = () => {
      setCoords({
        rotateX: -targetCoords.current.y * maxTilt,
        rotateY: targetCoords.current.x * maxTilt,
        shineX: targetCoords.current.rawX,
        shineY: targetCoords.current.rawY,
      });
      frameRef.current = null;
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [ref, maxTilt, enabled]);

  return coords;
}