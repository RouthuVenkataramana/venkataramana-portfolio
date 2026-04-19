import { useState, useEffect } from 'react';

/**
 * useTyping — Cycles through an array of strings with a typewriter effect.
 * @param {string[]} strings  — list of strings to cycle through
 * @param {number}   typeSpeed  — ms per character typed
 * @param {number}   deleteSpeed — ms per character deleted
 * @param {number}   pauseMs  — ms to pause when string is fully typed
 * @returns {string}  current displayed text
 */
export function useTyping(strings, typeSpeed = 90, deleteSpeed = 44, pauseMs = 2400) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = strings[index];
    let timeout;

    if (!isDeleting && text.length < current.length) {
      // Typing forward
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typeSpeed);
    } else if (!isDeleting && text.length === current.length) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), pauseMs);
    } else if (isDeleting && text.length > 0) {
      // Deleting
      timeout = setTimeout(() => setText(text.slice(0, -1)), deleteSpeed);
    } else {
      // Move to next string
      setIsDeleting(false);
      setIndex(i => (i + 1) % strings.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, strings, typeSpeed, deleteSpeed, pauseMs]);

  return text;
}
