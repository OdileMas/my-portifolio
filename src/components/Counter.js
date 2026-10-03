import { useEffect, useRef, useState } from 'react';

// Counts up to `value` the first time it scrolls into view.
function Counter({ value, suffix = '', plain = false }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(plain ? value : 0);

  useEffect(() => {
    if (plain) return undefined;
    const el = ref.current;
    const calm = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (!el || calm || !('IntersectionObserver' in window)) {
      setShown(value);
      return undefined;
    }
    let frame;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min((now - start) / 1400, 1);
        setShown(Math.round(value * (1 - Math.pow(1 - t, 3))));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    });
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, plain]);

  return (
    <span ref={ref}>
      {shown}
      {suffix}
    </span>
  );
}

export default Counter;
