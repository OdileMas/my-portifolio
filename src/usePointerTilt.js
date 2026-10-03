import { useCallback } from 'react';

const canHover = () =>
  window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Writes the pointer position (-1 … 1 on each axis) into --px / --py
// on the element, so CSS can drive tilt and parallax from it.
function usePointerTilt() {
  const onPointerMove = useCallback((e) => {
    if (!canHover()) return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--px', (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3));
    el.style.setProperty('--py', (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3));
  }, []);

  const onPointerLeave = useCallback((e) => {
    e.currentTarget.style.setProperty('--px', 0);
    e.currentTarget.style.setProperty('--py', 0);
  }, []);

  return { onPointerMove, onPointerLeave };
}

export default usePointerTilt;
