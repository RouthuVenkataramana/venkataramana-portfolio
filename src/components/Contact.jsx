import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowRight, CheckCircle } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { PERSONAL, OPEN_ROLES } from '../data/portfolio';

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1], delay },
});

const CONTACT_LINKS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'routhuvenkey0007@gmail.com',
    href: 'mailto:routhuvenkey0007@gmail.com',
    accent: '#22d3ee',
    accentLight: '#0891b2',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/venkataramana-routhu',
    href: 'https://linkedin.com/in/venkataramana-routhu-555966322',
    accent: '#818cf8',
    accentLight: '#6366f1',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/RouthuVenkataramana',
    href: 'https://github.com/RouthuVenkataramana',
    accent: '#e2e8f0',
    accentLight: '#334155',
  },
];

export default function Contact({ isDark }) {
  const surf = isDark ? '#0d1526' : '#ffffff';
  const bg = isDark ? '#06090f' : '#eef5ff';
  const bdr = isDark ? '#1a2d42' : '#dde8f5';
  const muted = isDark ? '#8fa3bb' : '#64748b';
  const txt = isDark ? '#e2e8f0' : '#0f172a';
  const a1 = isDark ? '#22d3ee' : '#0891b2';

  return (
    <section id="contact" style={{ backgroundColor: surf, padding: '50px 0' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...inView(0)}>
          <SectionHeader tag='contact' title="Let's Build Something Together" isDark={isDark} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start mt-2">

          {/* Left — Intro + Contact Links */}
          <motion.div {...inView(0.1)}>
            <p
              className="text-[0.97rem] leading-[1.85] mb-10"
              style={{ color: muted }}
            >
              I'm actively seeking{' '}
              <strong style={{ color: txt }}>
                Full Stack, MERN Stack, React.js, or Node.js roles
              </strong>
              . If you have an exciting opportunity or just want to connect, I'd love to hear from you.
            </p>

            <div className="flex flex-col gap-3">
              {CONTACT_LINKS.map(({ icon: Icon, label, value, href, accent, accentLight }) => {
                const ac = isDark ? accent : accentLight;
                return (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    whileHover={{ y: -3 }}
                    className="flex items-center gap-4 p-4 rounded-[14px] no-underline
                               transition-all duration-300 group"
                    style={{ backgroundColor: bg, border: `1px solid ${bdr}` }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = ac;
                      e.currentTarget.style.backgroundColor = `${ac}07`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = bdr;
                      e.currentTarget.style.backgroundColor = bg;
                    }}
                  >
                    <div
                      className="w-11 h-11 rounded-[12px] flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${ac}14`, color: ac }}
                    >
                      <Icon size={19} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className="font-mono text-[0.64rem] font-bold uppercase tracking-[0.1em] mb-0.5"
                        style={{ color: isDark ? '#3d5068' : '#aab8cc' }}
                      >
                        {label}
                      </p>
                      <p
                        className="font-semibold text-[0.87rem] truncate"
                        style={{ color: txt }}
                      >
                        {value}
                      </p>
                    </div>
                    <ArrowRight
                      size={15}
                      style={{ color: isDark ? '#3d5068' : '#aab8cc', flexShrink: 0 }}
                    />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right — Availability Card */}
          <motion.div
            {...inView(0.2)}
            className="rounded-[20px] p-8"
            style={{
              background: `linear-gradient(135deg, ${a1}14, ${isDark ? 'rgba(129,140,248,0.07)' : 'rgba(99,102,241,0.05)'})`,
              border: `1px solid ${a1}28`,
            }}
          >
            {/* Status */}
            <div className="flex items-center gap-2.5 mb-5">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{
                  backgroundColor: '#22c55e',
                  boxShadow: '0 0 0 3px rgba(34,197,94,0.2)',
                }}
              />
              <span className="font-bold text-[0.8rem]" style={{ color: '#22c55e' }}>
                Available for Opportunities
              </span>
            </div>

            <h3
              className="font-display font-black text-[1.4rem] tracking-[-0.025em] mb-3"
              style={{ color: txt }}
            >
              Seeking Full-Time Roles
            </h3>

            <p className="text-[0.9rem] leading-[1.78] mb-6" style={{ color: muted }}>
              Open to Full Stack, MERN Stack, React.js, or Node.js positions.
              Available for onsite roles in Hyderabad or remote opportunities across India.
            </p>

            {/* Role List */}
            <ul className="list-none space-y-2.5 mb-7">
              {OPEN_ROLES.map(role => (
                <li
                  key={role}
                  className="flex items-center gap-2.5 text-[0.86rem]"
                  style={{ color: muted }}
                >
                  <CheckCircle size={13} style={{ color: a1, flexShrink: 0 }} />
                  {role}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <a
              href={`mailto:${PERSONAL.email}`}
              className="gradient-bg flex items-center justify-center gap-2.5
                         px-6 py-4 rounded-[13px] font-display font-extrabold text-[0.9rem]
                         text-white no-underline transition-all duration-300
                         hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(34,211,238,0.28)]"
            >
              <Mail size={16} />
              Send Me an Email
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
