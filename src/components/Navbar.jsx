import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { NAV_LINKS, PERSONAL } from '../data/portfolio';

/**
 * Navbar — Sticky nav with scroll-based active highlighting,
 *           mobile drawer, and dark/light toggle.
 */
export default function Navbar({ isDark, toggleTheme }) {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* ── Scroll Detection ── */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll spy — find which section is in view
      const sections = ['hero', ...NAV_LINKS.map(n => n.id)];
      let current = 'hero';

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const { top } = el.getBoundingClientRect();
          if (top <= 90) current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const a1 = isDark ? '#22d3ee' : '#0891b2';
  const navBg = isDark
    ? scrolled ? 'rgba(6,9,15,0.94)' : 'rgba(6,9,15,0.7)'
    : scrolled ? 'rgba(238,245,255,0.94)' : 'rgba(238,245,255,0.7)';
  const borderColor = isDark ? 'rgba(26,45,66,0.9)' : 'rgba(221,232,245,0.9)';
  const txtColor = isDark ? '#e2e8f0' : '#0f172a';
  const mutedColor = isDark ? '#8fa3bb' : '#64748b';

  return (
    <>
      <nav
        className="nav-blur fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{ backgroundColor: navBg, borderBottom: `1px solid ${borderColor}` }}
      >
        <div className="max-w-6xl mx-auto px-6 h-[66px] flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-2.5 group"
          >
            <span
              className="gradient-bg w-9 h-9 rounded-[10px] flex items-center justify-center
                         text-white font-black text-sm tracking-tight shadow-lg
                         transition-transform duration-300 group-hover:scale-105"
            >
              VR
            </span>
            <span className="font-display font-extrabold text-base tracking-[-0.025em]" style={{ color: txtColor }}>
              Venkataramana<span style={{ color: a1 }}>.</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="relative font-semibold text-[0.85rem] transition-colors duration-200 capitalize"
                style={{ color: activeSection === id ? a1 : mutedColor }}
              >
                {label}
                {activeSection === id && (
                  <span
                    className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full"
                    style={{ background: `linear-gradient(90deg, ${a1}, #818cf8)` }}
                  />
                )}
              </button>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{
                backgroundColor: isDark ? '#0d1526' : '#e0efff',
                border: `1px solid ${isDark ? '#1a2d42' : '#c0d8f0'}`,
                color: a1,
              }}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              style={{ color: a1 }}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={19} /> : <Moon size={19} />}
            </button>
            <button
              onClick={() => setMobileOpen(m => !m)}
              style={{ color: txtColor }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div
            className="md:hidden"
            style={{ backgroundColor: isDark ? '#0d1526' : '#fff', borderTop: `1px solid ${borderColor}` }}
          >
            {NAV_LINKS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="w-full text-left px-6 py-4 font-semibold text-[0.95rem] capitalize
                           transition-colors duration-200"
                style={{
                  color: activeSection === id ? a1 : mutedColor,
                  borderBottom: `1px solid ${borderColor}`,
                }}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
