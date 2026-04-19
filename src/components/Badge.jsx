import React from 'react';

/**
 * Badge — Reusable colored pill / badge component.
 * Props: color (hex), isDark, children
 */
export default function Badge({ color, isDark, children, small = false }) {
  const alpha = isDark ? '22' : '18';
  const borderAlpha = isDark ? '40' : '35';

  return (
    <span
      className={`inline-flex items-center font-bold uppercase tracking-wider font-mono ${
        small ? 'text-[0.6rem] px-2.5 py-0.5' : 'text-[0.65rem] px-3 py-1'
      } rounded-full`}
      style={{
        backgroundColor: `${color}${alpha}`,
        border: `1px solid ${color}${borderAlpha}`,
        color,
      }}
    >
      {children}
    </span>
  );
}
