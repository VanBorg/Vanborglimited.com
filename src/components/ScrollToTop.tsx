import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Always scroll to top when pathname changes (without hash)
    if (!hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }, [pathname, hash]);

  useEffect(() => {
    if (!hash) {
      return;
    }

    const targetId = hash.replace('#', '');

    const scrollToHash = () => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    // Attempt immediately, then again on next frame to ensure content is rendered
    scrollToHash();
    const timeout = window.setTimeout(scrollToHash, 100);

    return () => window.clearTimeout(timeout);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
