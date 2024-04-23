import { useEffect, useState } from 'react';

export default function useNav() {
  const [scroll, setScroll] = useState(0);

  const scrollHandler = (e: Event) => {
    console.log(e);
  };

  useEffect(() => {
    setScroll(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return {
    scroll,
  };
}
