// ============================================
// Hero Section — Editorial layout dengan animasi GSAP
// Data diambil dari portfolio.js, tidak di-hardcode
// ============================================

import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FiArrowRight } from 'react-icons/fi';
import { personalInfo } from '../../data/portfolio';
import HeroScene from './HeroScene';

export default function Hero() {
  const heroRef = useRef(null);

  // ─── Smooth scroll ke section contact ───
  const scrollToContact = (e) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // ─── Parallax on scroll ───
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 800], [0, -100]);
  const photoX = useTransform(scrollY, [0, 800], [0, 150]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  // ─── GSAP text reveal animation on mount ───
  useGSAP(() => {
    gsap.from(
      [
        '.hero-editorial-intro',
        '.hero-editorial-title',
        '.hero-editorial-desc',
        '.btn-pill',
      ],
      {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
      }
    );
  }, { scope: heroRef });

  return (
    <section
      ref={heroRef}
      className="hero editorial-section"
      id="hero"
      style={{ overflow: 'hidden' }}
    >
      <div className="container">
        <div className="hero-editorial-grid">
          {/* ── Sisi Kiri: Teks & CTA ── */}
          <motion.div
            className="hero-editorial-left"
            style={{ y: textY, opacity }}
          >
            <p className="hero-editorial-intro">
              {personalInfo.heroIntro}
            </p>

            <h1 className="hero-editorial-title">
              {personalInfo.heroTitle.line1} <br />
              <span className="serif-italic">{personalInfo.heroTitle.line2}</span> <br />
              {personalInfo.heroTitle.line3}
            </h1>

            <p className="hero-editorial-desc">
              {personalInfo.heroDescription}
            </p>

            <button className="btn-pill" onClick={scrollToContact}>
              CONTACT ME
              <span className="btn-icon-circle">
                <FiArrowRight size={14} color="#000" />
              </span>
            </button>
          </motion.div>

          {/* ── Sisi Kanan: Portrait + 3D Scene ── */}
          <div className="hero-editorial-right">
            <motion.div
              className="hero-editorial-image-container"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              style={{ x: photoX, opacity }}
            >
              <div className="hero-editorial-circle"></div>
              <img
                src={personalInfo.profileImage}
                alt="Portrait"
                className="hero-editorial-portrait"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── 3D Wireframe Scene (dekoratif, di belakang konten) ── */}
      <div className="hero-canvas-container">
        <HeroScene />
      </div>
    </section>
  );
}
