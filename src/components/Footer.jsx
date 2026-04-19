import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { PERSONAL } from '../data/portfolio';

/**
 * Footer — Minimal footer with social links and copyright.
 */
export default function Footer({ isDark }) {
  const bg = isDark ? '#06090f' : '#eef5ff';
  const bdr = isDark ? '#1a2d42' : '#dde8f5';
  const muted = isDark ? '#8fa3bb' : '#64748b';
  const faint = isDark ? '#3d5068' : '#aab8cc';
  const txt = isDark ? '#e2e8f0' : '#0f172a';
  const a1 = isDark ? '#22d3ee' : '#0891b2';

  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const SOCIAL = [
    { icon: Github,   href: PERSONAL.github,               label: 'GitHub' },
    { icon: Linkedin, href: PERSONAL.linkedin,             label: 'LinkedIn' },
    { icon: Mail,     href: `mailto:${PERSONAL.email}`,   label: 'Email' },
  ];

  const QUICK = ['about', 'skills', 'projects', 'experience', 'contact'];

  return (
    <footer style={{ backgroundColor: bg, borderTop: `1px solid ${bdr}` }}>
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 pt-10 pb-4">
        <div className="grid sm:grid-cols-3 gap-10 mb-6">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span
                className="gradient-bg w-9 h-9 rounded-[10px] flex items-center justify-center
                           text-white font-black text-sm"
              >
                VR
              </span>
              <span className="font-display font-extrabold text-[0.95rem] tracking-[-0.02em]"
                style={{ color: txt }}>
                Venkataramana<span style={{ color: a1 }}>.</span>
              </span>
            </div>
            <p className="text-[0.82rem] leading-[1.72]" style={{ color: faint }}>
              Full Stack Developer building production-grade web applications with React.js, Node.js, PHP & MySQL.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] mb-4 font-bold"
              style={{ color: faint }}>Quick Links</p>
            <ul className="list-none space-y-2">
              {QUICK.map(id => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="text-[0.84rem] font-medium capitalize transition-colors duration-200
                               bg-none border-none cursor-pointer font-display"
                    style={{ color: muted }}
                    onMouseEnter={e => e.currentTarget.style.color = a1}
                    onMouseLeave={e => e.currentTarget.style.color = muted}
                  >
                    {id}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] mb-4 font-bold"
              style={{ color: faint }}>Get in Touch</p>
            <div className="space-y-2.5">
              <a href={`mailto:${PERSONAL.email}`}
                className="block text-[0.82rem] font-medium no-underline transition-colors duration-200"
                style={{ color: muted }}
                onMouseEnter={e => e.currentTarget.style.color = a1}
                onMouseLeave={e => e.currentTarget.style.color = muted}>
                {PERSONAL.email}
              </a>
              <a href={`tel:${PERSONAL.phone}`}
                className="block text-[0.82rem] font-medium no-underline transition-colors duration-200"
                style={{ color: muted }}
                onMouseEnter={e => e.currentTarget.style.color = a1}
                onMouseLeave={e => e.currentTarget.style.color = muted}>
                {PERSONAL.phone}
              </a>
              <p className="text-[0.82rem]" style={{ color: faint }}>{PERSONAL.location}</p>
            </div>
            
          </div>
           {/* Social Icons */}
          <div className="flex items-center gap-3">
            {SOCIAL.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full flex items-center justify-center
                           transition-all duration-250 hover:scale-110 hover:-translate-y-0.5"
                style={{
                  backgroundColor: isDark ? '#0d1526' : '#fff',
                  border: `1px solid ${bdr}`,
                  color: faint,
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = a1; e.currentTarget.style.color = a1; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = bdr; e.currentTarget.style.color = faint; }}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: `1px solid ${bdr}`, paddingTop: 14 }}
          className="flex flex-wrap items-center justify-center gap-4">
         <p className="text-[0.8rem]" style={{ color: faint }}>
  © {new Date().getFullYear()} 
  <strong style={{ color: muted }}> Venkataramana Routhu</strong>. Built using modern web technologies.
</p>
         
        </div>
      </div>
    </footer>
  );
}
