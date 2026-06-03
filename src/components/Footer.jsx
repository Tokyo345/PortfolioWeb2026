import { personalInfo, contactInfo, socialLinks } from '../data/portfolio';
import { FiGithub, FiLinkedin, FiDribbble } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';

// ─── FOOTER ─────────────────────────────────────
// Footer minimalis — copyright, social icons, back-to-top
// Semua data dari data/portfolio.js
// ─────────────────────────────────────────────────

export default function Footer() {
  const year = new Date().getFullYear();

  // Smooth scroll ke atas
  const scrollToTop = (e) => {
    e.preventDefault();
    const hero = document.querySelector('#hero');
    if (hero) hero.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* Kolom 1 — Copyright */}
        <p className="footer-text">
          © {year} <span>{personalInfo.name}</span>. All rights reserved.
        </p>

        {/* Kolom 2 — Social links (hanya render yang tidak null) */}
        <div className="footer-links">
          {socialLinks.email && (
            <a
              href={`mailto:${socialLinks.email}`}
              aria-label="Email"
              title="Email"
            >
              <HiOutlineMail size={18} />
            </a>
          )}
          {socialLinks.github && (
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <FiGithub size={18} />
            </a>
          )}
          {socialLinks.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FiLinkedin size={18} />
            </a>
          )}
          {socialLinks.dribbble && (
            <a
              href={socialLinks.dribbble}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dribbble"
              title="Dribbble"
            >
              <FiDribbble size={18} />
            </a>
          )}
        </div>

        {/* Kolom 3 — Back to top */}
        <button
          className="footer-back-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          ↑ Top
        </button>
      </div>
    </footer>
  );
}
