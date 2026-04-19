import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, CheckCircle } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { PROJECTS } from '../data/portfolio';

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.08 },
  transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1], delay },
});

/**
 * Projects — Full project cards with features, tech stack, and links.
 */
export default function Projects({ isDark }) {
  const surf = isDark ? '#0d1526' : '#ffffff';
  const bg = isDark ? '#06090f' : '#eef5ff';
  const bdr = isDark ? '#1a2d42' : '#dde8f5';
  const muted = isDark ? '#8fa3bb' : '#64748b';
  const txt = isDark ? '#e2e8f0' : '#0f172a';
  const faint = isDark ? '#3d5068' : '#aab8cc';

  return (
    <section id="projects" style={{ backgroundColor: surf, padding: '50px 0' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...inView(0)}>
          <SectionHeader tag="Projects" title="Work That Ships to Production" isDark={isDark} />
        </motion.div>

        <div className="flex flex-col gap-5 mt-2">
          {PROJECTS.map((project, i) => {
            const ac = isDark ? project.accent : project.accentLight;

            return (
              <motion.div
                key={project.id}
                {...inView(0.1 + i * 0.1)}
                whileHover={{ y: -5 }}
                className="rounded-[18px] overflow-hidden transition-all duration-300 cursor-default"
                style={{ backgroundColor: bg, border: `1px solid ${bdr}` }}
              >
                {/* Accent Top Bar */}
                <div
                  className="h-[3px]"
                  style={{ background: `linear-gradient(90deg, ${ac}, ${ac}30)` }}
                />

                <div className="p-7 md:p-8">
                  {/* Header Row */}
                  <div className="flex flex-wrap items-start justify-between gap-5 mb-5">
                    <div>
                      {/* ID + Badge */}
                      <div className="flex items-center gap-2.5 mb-2">
                        <span
                          className="font-mono text-[0.72rem] font-bold"
                          style={{ color: `${ac}66` }}
                        >
                          {project.id}
                        </span>
                      </div>
                      {/* Title */}
                      <h3
                        className="font-display font-black text-[1.25rem] tracking-[-0.02em] mb-1"
                        style={{ color: txt }}
                      >
                        {project.title}
                      </h3>
                      <span className="text-[0.82rem] font-medium" style={{ color: muted }}>
                        {project.subtitle}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2.5 flex-shrink-0">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 rounded-[10px]
                                   text-[0.79rem] font-bold no-underline
                                   transition-all duration-250"
                        style={{
                          backgroundColor: surf,
                          border: `1px solid ${bdr}`,
                          color: muted,
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.borderColor = ac;
                          e.currentTarget.style.color = ac;
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.borderColor = bdr;
                          e.currentTarget.style.color = muted;
                        }}
                      >
                        <Github size={13} /> Code
                      </a>

                      {project.isLive ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="gradient-bg flex items-center gap-1.5 px-4 py-2 rounded-[10px]
                                     text-[0.79rem] font-bold no-underline text-white
                                     transition-all duration-300 hover:shadow-[0_8px_20px_rgba(34,211,238,0.3)]
                                     hover:-translate-y-0.5"
                        >
                          <ExternalLink size={13} /> Live
                        </a>
                      ) : (
                        <span
                          className="flex items-center gap-1.5 px-4 py-2 rounded-[10px]
                                     text-[0.79rem] font-bold"
                          style={{
                            backgroundColor: isDark ? '#111827' : '#f5f8ff',
                            border: `1px solid ${bdr}`,
                            color: faint,
                          }}
                        >
                          Private
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className="text-[0.9rem] leading-[1.78] mb-6"
                    style={{ color: muted }}
                  >
                    {project.description}
                  </p>

                  {/* Feature Bullets — 2-column grid */}
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-6 list-none">
                    {project.features.map(feature => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-[0.82rem]"
                        style={{ color: muted }}
                      >
                        <CheckCircle
                          size={13}
                          style={{ color: ac, flexShrink: 0, marginTop: 3 }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span
                        key={t}
                        className="font-mono text-[0.72rem] font-bold px-3 py-1 rounded-[7px]"
                        style={{
                          backgroundColor: surf,
                          border: `1px solid ${bdr}`,
                          color: muted,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
