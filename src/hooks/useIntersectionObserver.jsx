import { useState, useEffect } from "react";

export const useIntersectionObserver = (refElement) => {
  const [isVisible, setIsVisible] = useState(false);

  const options = {
    root: null,
    rootMargin: "100px",
    threshold: 1.0,
  };

  const observer = new IntersectionObserver((entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  }, options);

  useEffect(() => {
    if (refElement.current) {
      observer.observe(refElement);
    }
    return () => observer.disconnect(refElement);
  }, [refElement]);

  return isVisible;
};
