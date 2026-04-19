import { useEffect, useRef } from 'react';

/**
 * useScrollReveal — Adds a CSS class when the element enters the viewport.
 * Requires the 'section-reveal' and 'visible' classes in index.css.
 * @param {number} threshold  — percentage of element visible before triggering
 * @param {number} delay      — stagger delay for child elements (ms)
 */
export function useScrollReveal(threshold = 0.12) {
  useEffect(() => {
    const targets = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Trigger once only
          }
        });
      },
      { threshold }
    );

    targets.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [threshold]);
}

/**
 * useSectionReveal — Returns a ref; when the element enters view, adds 'visible'.
 */
export function useSectionReveal(threshold = 0.12) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
