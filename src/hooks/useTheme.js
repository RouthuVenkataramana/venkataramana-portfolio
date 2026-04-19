import { useState, useEffect } from 'react';

/**
 * useTheme — Manages dark/light mode with localStorage persistence.
 * Returns [isDark, toggleTheme]
 */
export function useTheme() {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem('vr-theme');
    if (stored) return stored === 'dark';
    // Default to dark mode; respect system preference otherwise
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    if (isDark) {
      root.classList.add('dark');
      body.classList.remove('light');
    } else {
      root.classList.remove('dark');
      body.classList.add('light');
    }

    localStorage.setItem('vr-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  return [isDark, toggleTheme];
}
