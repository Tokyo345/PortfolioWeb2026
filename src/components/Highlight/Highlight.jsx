import { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { highlights } from '../../data/portfolio';

// Register plugin di top-level agar tersedia secara global
gsap.registerPlugin(ScrollTrigger);

// ─── HIGHLIGHT SECTION ──────────────────────────
// Menampilkan keunggulan utama dalam grid editorial
// Animasi reveal menggunakan GSAP ScrollTrigger
// ─────────────────────────────────────────────────

export default function Highlight() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Set initial state secara eksplisit
    gsap.set('.editorial-feature-item', { autoAlpha: 0, y: 40 });

    // Animasi stagger: setiap item muncul berurutan saat scroll
    gsap.to('.editorial-feature-item', {
      y: 0,
      autoAlpha: 1,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out',
      clearProps: 'transform',
      scrollTrigger: {
        trigger: '#highlight',
        start: 'top 80%',
      },
    });
  }, { scope: sectionRef });

  return (
    <section id="highlight" className="editorial-section" ref={sectionRef}>
      <div className="container">
        <div className="editorial-features-grid">
          {highlights.map((item) => (
            <div key={item.id} className="editorial-feature-item">
              <h3 className="editorial-feature-title">
                {item.title.toUpperCase()}
              </h3>
              <p className="editorial-feature-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
