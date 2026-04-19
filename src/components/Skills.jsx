import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { SKILLS } from '../data/portfolio';

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1], delay },
});

/**
 * Skills — Categorized skill cards with animated badge chips.
 */
export default function Skills({ isDark }) {
  const bg = isDark ? '#06090f' : '#eef5ff';
  const surf = isDark ? '#0d1526' : '#ffffff';
  const bdr = isDark ? '#1a2d42' : '#dde8f5';
  const txt = isDark ? '#e2e8f0' : '#0f172a';

  return (
    <section id="skills" style={{ backgroundColor: bg, padding: '50px 0' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...inView(0)}>
          <SectionHeader tag="Tech Stack" title="Tools & Technologies" isDark={isDark} />
        </motion.div>

        <div className="flex flex-col gap-3.5 mt-2">
          {SKILLS.map(({ category, accent, accentLight, emoji, items }, idx) => {
            const ac = isDark ? accent : accentLight;

            return (
              <motion.div
                key={category}
                {...inView(0.08 + idx * 0.07)}
                whileHover={{ y: -4 }}
                className="rounded-[16px] p-6 transition-all duration-300 cursor-default"
                style={{
                  backgroundColor: surf,
                  border: `1px solid ${bdr}`,
                  boxShadow: '0 1px 0 rgba(0,0,0,0.1)',
                }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-[11px] flex items-center justify-center text-[15px]"
                    style={{ backgroundColor: `${ac}18` }}
                  >
                    {emoji}
                  </div>
                  <span className="font-bold text-[0.92rem]" style={{ color: txt }}>
                    {category}
                  </span>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.88 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.1 + si * 0.04 }}
                      whileHover={{ scale: 1.07, y: -2 }}
                      className="chip-hover px-3.5 py-1.5 rounded-[9px] font-bold text-[0.77rem] cursor-default"
                      style={{
                        backgroundColor: `${ac}10`,
                        border: `1px solid ${ac}28`,
                        color: ac,
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
