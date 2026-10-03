import { useEffect } from 'react';

const BASE = 'Odile Masengesho';

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — ${BASE}` : `${BASE} — Full-Stack Developer`;
  }, [title]);
}
