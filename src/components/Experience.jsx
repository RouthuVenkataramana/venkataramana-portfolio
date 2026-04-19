import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award } from 'lucide-react';
import SectionHeader from './SectionHeader';
import Badge from './Badge';
import { EXPERIENCE, EDUCATION, CERTIFICATIONS } from '../data/portfolio';

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.08 },
  transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1], delay },
});

/**
 * Experience — Vertical timeline with job cards, education, and certifications.
 */
export default function Experience({ isDark }) {
  const bg = isDark ? '#06090f' : '#eef5ff';
  const surf = isDark ? '#0d1526' : '#ffffff';
  const bdr = isDark ? '#1a2d42' : '#dde8f5';
  const muted = isDark ? '#8fa3bb' : '#64748b';
  const txt = isDark ? '#e2e8f0' : '#0f172a';
  const faint = isDark ? '#3d5068' : '#aab8cc';
  const a1 = isDark ? '#22d3ee' : '#0891b2';
  const a2 = isDark ? '#818cf8' : '#6366f1';

  return (
    <section id="experience" style={{ backgroundColor: bg, padding: '50px 0' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...inView(0)}>
          <SectionHeader tag="Experience" title="Professional Journey" isDark={isDark} />
        </motion.div>

        <div className="max-w-[840px] mt-2">
          {/* ── Timeline Items ── */}
          {EXPERIENCE.map((exp, i) => {
            const ac = isDark ? exp.accent : exp.accentLight;
            const isLast = i === EXPERIENCE.length - 1;

            return (
              <motion.div
                key={exp.company}
                {...inView(0.1 + i * 0.12)}
                className="flex gap-6"
                style={{ marginBottom: isLast ? 0 : 52 }}
              >
                {/* Timeline Column */}
                <div className="flex flex-col items-center flex-shrink-0">
                  {/* Dot */}
                  <div
                    className="w-3.5 h-3.5 rounded-full mt-1.5 flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${ac}, ${ac}80)`,
                      boxShadow: `0 0 0 4px ${ac}18`,
                    }}
                  />
                  {/* Connector Line */}
                  {!isLast && (
                    <div
                      className="w-0.5 flex-1 mt-2 rounded-sm"
                      style={{
                        background: `linear-gradient(to bottom, ${ac}40, ${bdr})`,
                        minHeight: 48,
                      }}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-1">
                  {/* Role + Type Badge */}
                  <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                    <h3
                      className="font-display font-black text-[1.12rem] tracking-[-0.02em]"
                      style={{ color: txt }}
                    >
                      {exp.role}
                    </h3>
                    <Badge color={ac} isDark={isDark} small>
                      {exp.type}
                    </Badge>
                  </div>

                  {/* Company + Period */}
                  <div className="flex flex-wrap items-center gap-2.5 mb-5">
                    <span className="font-bold text-[0.88rem]" style={{ color: ac }}>
                      {exp.company}
                    </span>
                    <span style={{ color: faint }}>·</span>
                    <span
                      className="font-mono text-[0.75rem]"
                      style={{ color: muted }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  {/* Achievement Bullets */}
                  <ul className="list-none space-y-2.5">
                    {exp.achievements.map(achievement => (
                      <li
                        key={achievement}
                        className="flex items-start gap-2.5 text-[0.87rem] leading-[1.68]"
                        style={{ color: muted }}
                      >
                        <CheckCircle
                          size={13}
                          style={{ color: ac, flexShrink: 0, marginTop: 3 }}
                        />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}

          {/* ── Education Card ── */}
          <motion.div {...inView(0.35)} className="mt-14">
            <div
              className="flex items-start gap-4 p-6 rounded-[16px]"
              style={{ backgroundColor: surf, border: `1px solid ${bdr}` }}
            >
              <div
                className="w-12 h-12 rounded-[13px] flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${a1}14`, color: a1 }}
              >
                <Award size={20} />
              </div>
              <div>
                <p
                  className="font-bold text-[0.97rem] mb-1.5"
                  style={{ color: txt }}
                >
                  {EDUCATION.degree}
                </p>
                <p className="text-[0.83rem] mb-2" style={{ color: muted }}>
                  {EDUCATION.institution} · {EDUCATION.university}
                </p>
                <div className="flex flex-wrap gap-4">
                  <span
                    className="font-mono text-[0.74rem]"
                    style={{ color: faint }}
                  >
                    Graduated {EDUCATION.graduated}
                  </span>
                  <span
                    className="font-bold text-[0.74rem]"
                    style={{ color: a1 }}
                  >
                    GPA: {EDUCATION.gpa}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Certifications ── */}
          <motion.div {...inView(0.42)} className="mt-7">
            <p
              className="font-bold text-[0.93rem] mb-4"
              style={{ color: txt }}
            >
              Certifications
            </p>
            <div className="flex flex-col gap-2.5">
              {CERTIFICATIONS.map(cert => (
                <div
                  key={cert.name}
                  className="flex items-center gap-3 px-4 py-3 rounded-[11px]"
                  style={{ backgroundColor: surf, border: `1px solid ${bdr}` }}
                >
                  <CheckCircle size={13} style={{ color: a2, flexShrink: 0 }} />
                  <span
                    className="font-semibold text-[0.83rem] flex-1"
                    style={{ color: txt }}
                  >
                    {cert.name}
                  </span>
                  <span
                    className="font-mono text-[0.7rem] flex-shrink-0"
                    style={{ color: faint }}
                  >
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
