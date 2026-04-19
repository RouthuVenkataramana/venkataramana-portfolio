import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { PERSONAL } from '../data/portfolio';
import { Zap, ShieldCheck, BarChart3, Rocket } from 'lucide-react';


const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1], delay },
});


/**
 * About — Professional summary + highlight cards.
 */
export default function About({ isDark }) {
  const a1 = isDark ? '#22d3ee' : '#0891b2';
  const bg = isDark ? '#06090f' : '#eef5ff';
  const surf = isDark ? '#0d1526' : '#ffffff';
  const surf2 = isDark ? '#111827' : '#f5f8ff';
  const bdr = isDark ? '#1a2d42' : '#dde8f5';
  const muted = isDark ? '#8fa3bb' : '#64748b';
  const txt = isDark ? '#e2e8f0' : '#0f172a';

 const HIGHLIGHTS = [
  {
    icon: Zap,
    title: 'Production Ready',
    desc: '3+ live B2B websites deployed and actively maintained'
  },
  {
    icon: ShieldCheck,
    title: 'Security-First',
    desc: 'JWT + RBAC — zero unauthorized access incidents on record'
  },
  {
    icon: BarChart3,
    title: 'Performance Driven',
    desc: '~30% query optimization, ~25% load time reduction achieved'
  },
  {
    icon: Rocket,
    title: 'DevOps Capable',
    desc: 'End-to-end cPanel deployment with 99%+ production uptime'
  },
];

  return (
    <section id="about" style={{ backgroundColor: surf, padding: '50px 0' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...inView(0)}>
          <SectionHeader tag="About Me" title="The Developer Behind the Code" isDark={isDark} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-start mt-2">
          {/* Left — Bio Text */}
          <motion.div {...inView(0.1)}>
            {PERSONAL.summary.map((para, i) => (
              <p
                key={i}
                className="text-[0.97rem] leading-[1.84] mb-5"
                style={{ color: muted }}
              >
                {i === 0 && (
                  <>Full Stack Developer with{' '}
                    <strong style={{ color: txt }}>1.5+ years of hands-on experience</strong>
                    {' '}building and deploying production-grade web applications using React.js,
                    Node.js, Express.js, PHP, and MySQL.
                  </>
                )}
                {i === 1 && (
                  <>Skilled in end-to-end development — architecting{' '}
                    <strong style={{ color: txt }}>secure backend systems with REST APIs,
                      JWT Authentication, and RBAC</strong>
                    {' '}from the ground up.
                  </>
                )}
                {i === 2 && para}
              </p>
            ))}

            {/* Contact Info Chips */}
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href={`mailto:${PERSONAL.email}`}
                className="flex items-center gap-2 px-4 py-2 rounded-[10px] text-[0.8rem]
                           font-bold no-underline transition-all duration-300
                           hover:-translate-y-0.5"
                style={{
                  backgroundColor: `${a1}12`,
                  border: `1px solid ${a1}28`,
                  color: a1,
                }}
              >
                <Mail size={13} /> {PERSONAL.email}
              </a>
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-[10px] text-[0.8rem] font-semibold"
                style={{ backgroundColor: surf2, border: `1px solid ${bdr}`, color: muted }}
              >
                <MapPin size={13} /> {PERSONAL.location}
              </div>
            </div>
          </motion.div>

          {/* Right — Highlight Cards Grid */}
       {HIGHLIGHTS.map(({ icon: Icon, title, desc }, i) => (
  <motion.div
    key={title}
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
    whileHover={{ y: -5 }}
    className="card-hover rounded-[14px] p-5 cursor-default"
    style={{ backgroundColor: bg, border: `1px solid ${bdr}` }}
  >
    {/* ✅ Correct icon usage */}
    <Icon className="w-6 h-6 mb-2 text-primary" />

    <p className="font-bold text-[0.83rem] mt-2.5 mb-1.5" style={{ color: txt }}>
      {title}
    </p>
    <p className="text-[0.75rem] leading-[1.6]" style={{ color: muted }}>
      {desc}
    </p>
  </motion.div>
))}
        </div>
      </div>
    </section>
  );
}
