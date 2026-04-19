import React from 'react';

/**
 * SectionHeader — Reusable gradient header used across all sections.
 * Props: tag (monospace label), title (gradient heading), isDark
 */
export default function SectionHeader({ tag, title, isDark }) {
  return (
    <div className="mb-12">
      <p className="font-mono text-xs font-bold tracking-[0.18em] uppercase mb-3"
        style={{ color: isDark ? '#22d3ee' : '#0891b2' }}>
         {tag}
      </p>
      <h2 className={`font-display font-black text-4xl md:text-5xl tracking-tight leading-tight ${
        isDark ? 'gradient-text' : 'gradient-text-light'
      }`}>
        {title}
      </h2>
    </div>
  );
}
