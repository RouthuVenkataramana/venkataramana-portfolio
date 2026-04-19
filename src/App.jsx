import React from 'react';
import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * App — Root component.
 * Manages global dark/light theme and renders all sections in order.
 *
 * Section order:
 *   Hero → About → Skills → Projects → Experience → Contact → Footer
 */
export default function App() {
  const [isDark, toggleTheme] = useTheme();

  return (
    <div
      className="font-display antialiased"
      style={{
        minHeight: '100vh',
        backgroundColor: isDark ? '#06090f' : '#eef5ff',
        color: isDark ? '#e2e8f0' : '#0f172a',
        transition: 'background-color 0.35s ease, color 0.35s ease',
      }}
    >
      {/* ── Navigation ── */}
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      {/* ── Main Content ── */}
      <main>
        <Hero        isDark={isDark} />
        <About       isDark={isDark} />
        <Skills      isDark={isDark} />
        <Projects    isDark={isDark} />
        <Experience  isDark={isDark} />
        <Contact     isDark={isDark} />
      </main>

      {/* ── Footer ── */}
      <Footer isDark={isDark} />
    </div>
  );
}
