import { useState, useEffect } from 'react';
import { navLinks, personalInfo } from '../data/portfolio';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

// ─── NAVBAR ─────────────────────────────────────
// Navigasi utama — scroll-aware + mobile menu
// Semua link diambil dari data/portfolio.js
// ─────────────────────────────────────────────────

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Deteksi scroll untuk efek background navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll ke section & tutup mobile menu
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* ── Desktop / Main Navbar ── */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="container">
          {/* Logo — nama depan + titik aksen */}
          <a
            href="#hero"
            className="navbar-logo"
            onClick={(e) => handleNavClick(e, '#hero')}
          >
            {personalInfo.name.split(' ')[0]}<span>.</span>
          </a>

          {/* Desktop navigation links */}
          <div className="navbar-links">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="navbar-cta"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Let's Talk
            </a>
          </div>

          {/* Tombol hamburger — hanya tampil di mobile */}
          <button
            className="navbar-mobile-toggle"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <HiMenuAlt3 size={24} />
          </button>
        </div>
      </nav>

      {/* ── Mobile Fullscreen Overlay Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="navbar-mobile-menu open"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            {/* Tombol tutup */}
            <button
              className="navbar-mobile-close"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <HiX size={28} />
            </button>

            {/* Link navigasi — stagger masuk satu per satu */}
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.05,
                  ease: 'easeOut',
                }}
              >
                {link.label}
              </motion.a>
            ))}

            {/* CTA di mobile menu */}
            <motion.a
              href="#contact"
              className="navbar-cta"
              onClick={(e) => handleNavClick(e, '#contact')}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{
                duration: 0.35,
                delay: navLinks.length * 0.05,
                ease: 'easeOut',
              }}
              style={{ marginTop: '1rem' }}
            >
              Let's Talk
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
