import React from 'react';
import { ArrowRight, Mail, Github, Linkedin, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTyping } from '../hooks/useTyping';
import { PERSONAL, STATS } from '../data/portfolio';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1], delay },
});

/**
 * Hero — Full-height landing section with typed role animation,
 *        gradient headline, stats, and CTA buttons.
 */
export default function Hero({ isDark }) {
  const typedRole = useTyping(PERSONAL.roles);

  const a1 = isDark ? '#22d3ee' : '#0891b2';
  const a2 = isDark ? '#818cf8' : '#6366f1';
  const bg = isDark ? '#06090f' : '#eef5ff';
  const surf = isDark ? '#0d1526' : '#ffffff';
  const bdr = isDark ? '#1a2d42' : '#dde8f5';
  const muted = isDark ? '#8fa3bb' : '#64748b';
  const faint = isDark ? '#3d5068' : '#aab8cc';
  const txt = isDark ? '#e2e8f0' : '#0f172a';

  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-50"
      style={{ backgroundColor: bg  }}
    >
      {/* Dot Grid Pattern */}
      <div
        className={`absolute inset-0 ${isDark ? 'dot-pattern' : 'dot-pattern-light'}`}
        style={{ opacity: isDark ? 1 : 0.7 }}
      />

      {/* Ambient Glow Orbs */}
      <div
        className="absolute top-[8%] right-[4%] w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${isDark ? 'rgba(34,211,238,0.07)' : 'rgba(8,145,178,0.06)'} 0%, transparent 70%)`,
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute bottom-[12%] left-[0%] w-[360px] h-[360px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${isDark ? 'rgba(129,140,248,0.07)' : 'rgba(99,102,241,0.06)'} 0%, transparent 70%)`,
          filter: 'blur(55px)',
        }}
      />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="max-w-3xl">

          {/* Status Badge */}
          <motion.div {...fadeUp(0)} className="mb-7">
            <div
              className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5"
              style={{
                backgroundColor: `${a1}14`,
                border: `1px solid ${a1}30`,
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse-glow"
                style={{ backgroundColor: a1 }}
              />
              <span
                className="font-mono text-[0.72rem] font-bold tracking-[0.05em]"
                style={{ color: a1 }}
              >
                Open to Full-Time Opportunities · Hyderabad, India
              </span>
            </div>
          </motion.div>

          {/* Name Headline */}
          <motion.h1
            {...fadeUp(0.1)}
            className={`font-display font-black leading-[1.04] tracking-[-0.04em] mb-5
              text-[2.8rem] sm:text-[3.6rem] md:text-[4.2rem]
              ${isDark ? 'gradient-text' : 'gradient-text-light'}`}
          >
            Venkataramana Routhu
          </motion.h1>

          {/* Typing Role */}
          <motion.div
            {...fadeUp(0.18)}
            className="flex items-center gap-3 mb-6"
            style={{ fontSize: '1.25rem', fontWeight: 600, color: muted }}
          >
            <span className="font-mono" style={{ color: a1, fontSize: '1.1rem' }}>{'>'}</span>
            <span className="cursor-blink font-display">{typedRole}</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            {...fadeUp(0.26)}
            className="text-[1rem] leading-[1.85] mb-10 max-w-[600px]"
            style={{ color: muted }}
          >
            Full Stack Developer with{' '}
            <strong style={{ color: txt }}>1.5+ years building production-grade applications</strong>
            {' '}using React.js, Node.js, PHP & MySQL. From secure client portals to live company
            websites — I ship{' '}
            <strong style={{ color: txt }}>real products for real businesses</strong>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div {...fadeUp(0.34)} className="flex flex-wrap gap-3.5 mb-14">
            <button
              onClick={() => scrollTo('projects')}
              className="gradient-bg flex items-center gap-2 px-7 py-3.5 rounded-xl
                         font-display font-bold text-[0.92rem] text-white border-none
                         transition-all duration-300 hover:translate-y-[-2px]
                         hover:shadow-[0_14px_36px_rgba(34,211,238,0.28)] cursor-pointer"
            >
              View Projects <ArrowRight size={16} />
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-display
                         font-bold text-[0.92rem] transition-all duration-300 cursor-pointer
                         hover:border-[#22d3ee] hover:text-[#22d3ee]"
              style={{
                backgroundColor: 'transparent',
                border: `1.5px solid ${bdr}`,
                color: txt,
              }}
            >
              Contact Me
            </button>

            <a
              href={`mailto:${PERSONAL.email}`}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-display
                         font-bold text-[0.92rem] no-underline transition-all duration-300
                         hover:border-[#818cf8] hover:text-[#818cf8]"
              style={{ border: `1.5px solid ${bdr}`, color: muted }}
            >
              <Mail size={15} /> Email
            </a>
          </motion.div>

          {/* Stats Row */}
          <motion.div {...fadeUp(0.42)} className="flex flex-wrap gap-10">
            {STATS.map(({ value, label }) => (
              <div key={label}>
                <div
                  className="font-display font-black text-[2rem] leading-none mb-1.5"
                  style={{ color: a1 }}
                >
                  {value}
                </div>
                <div
                  className="font-mono text-[0.63rem] uppercase tracking-[0.08em]"
                  style={{ color: faint }}
                >
                  {label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div {...fadeUp(0.50)} className="flex gap-4 mt-10">
            {[
              { icon: Github, href: PERSONAL.github, label: 'GitHub' },
              { icon: Linkedin, href: PERSONAL.linkedin, label: 'LinkedIn' },
              { icon: Mail, href: `mailto:${PERSONAL.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full flex items-center justify-center
                           transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
                style={{
                  backgroundColor: isDark ? '#0d1526' : '#fff',
                  border: `1px solid ${bdr}`,
                  color: muted,
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = a1; e.currentTarget.style.color = a1; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = bdr; e.currentTarget.style.color = muted; }}
              >
                <Icon size={16} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
