"use client";

import { useState, useEffect } from "react";

export function useSectionProps(options = {}) {
  const { threshold = 0.1, rootMargin = "0px" } = options;
  const [ref, setRef] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isFullyVisible, setIsFullyVisible] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    if (!ref) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update visibility state
        setIsVisible(entry.isIntersecting);
        
        // Track if element is fully visible
        setIsFullyVisible(entry.intersectionRatio >= 0.9);
        
        // Set hasEntered to true once the element has been visible
        if (entry.isIntersecting && !hasEntered) {
          setHasEntered(true);
        }
      },
      {
        root: null,
        rootMargin,
        threshold: [threshold, 0.5, 0.9],
      }
    );

    observer.observe(ref);
    
    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, threshold, rootMargin, hasEntered]);

  return {
    ref: setRef,
    isVisible,
    isFullyVisible,
    hasEntered,
    // Props to spread on a component for animations
    props: {
      ref: setRef,
      "data-visible": isVisible,
      "data-fully-visible": isFullyVisible,
      "data-has-entered": hasEntered,
    },
  };
}

export default useSectionProps;