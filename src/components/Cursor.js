import { useEffect, useRef, useState } from 'react';

// A soft gold ring that trails the pointer and grows over links.
// Only used on devices with a precise pointer (mouse / trackpad).
function Cursor() {
  const ring = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setEnabled(fine.matches && !calm.matches);
    update();
    fine.addEventListener('change', update);
    calm.addEventListener('change', update);
    return () => {
      fine.removeEventListener('change', update);
      calm.removeEventListener('change', update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return undefined;
    const el = ring.current;
    let x = -100;
    let y = -100;
    let cx = x;
    let cy = y;
    let frame;

    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
      const target = e.target.closest('a, button, input, textarea, label, [data-cursor]');
      el.classList.toggle('cursor--hover', Boolean(target));
      el.dataset.label = target?.dataset.cursor || '';
    };
    const leave = () => el.classList.add('cursor--hidden');
    const enter = () => el.classList.remove('cursor--hidden');
    const tick = () => {
      cx += (x - cx) * 0.2;
      cy += (y - cy) * 0.2;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('mouseleave', leave);
    document.addEventListener('mouseenter', enter);
    document.documentElement.classList.add('has-cursor');
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', move);
      document.removeEventListener('mouseleave', leave);
      document.removeEventListener('mouseenter', enter);
      document.documentElement.classList.remove('has-cursor');
    };
  }, [enabled]);

  if (!enabled) return null;
  return <div className="cursor" ref={ring} aria-hidden="true" />;
}

export default Cursor;
