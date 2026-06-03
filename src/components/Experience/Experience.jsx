import { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { experiences, sectionMeta } from '../../data/portfolio';

// Register plugin di top-level
gsap.registerPlugin(ScrollTrigger);

// ─── EXPERIENCE SECTION ─────────────────────────
// Timeline pengalaman kerja & pendidikan
// Line fill + stagger items menggunakan GSAP ScrollTrigger
// ─────────────────────────────────────────────────

export default function Experience() {
  const sectionRef = useRef(null);
  const { label, title, subtitle } = sectionMeta.experience;

  useGSAP(() => {
    // Animasi garis timeline yang terisi seiring scroll
    gsap.from('.experience-timeline-line-fill', {
      height: 0,
      scrollTrigger: {
        trigger: '.experience-timeline',
        start: 'top 70%',
        end: 'bottom 70%',
        scrub: 1,
      },
    });

    // Set initial state untuk experience items
    gsap.set('.experience-item', { autoAlpha: 0, y: 40 });

    // Animasi stagger: setiap experience item muncul berurutan
    gsap.to('.experience-item', {
      y: 0,
      autoAlpha: 1,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power3.out',
      clearProps: 'transform',
      scrollTrigger: {
        trigger: '.experience-timeline',
        start: 'top 75%',
      },
    });
  }, { scope: sectionRef });

  return (
    <section className="experience section" id="experience" ref={sectionRef}>
      <div className="container">
        {/* Section Header — menggunakan sectionMeta dari data */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          <div className="section-label">
            <span className="dot" style={{ background: 'var(--color-accent)' }} />
            {label}
          </div>
          <h2 className="section-title" style={{ fontFamily: 'var(--font-heading)' }}>
            {title}
          </h2>
          <p className="section-subtitle">{subtitle}</p>
        </motion.div>

        {/* Timeline Container */}
        <div className="experience-timeline" style={{ position: 'relative' }}>
          {/* Garis statis (background) */}
          <div className="experience-timeline-line" />

          {/* Garis animasi yang terisi seiring scroll */}
          <motion.div
            className="experience-timeline-line-fill"
            style={{ height: '100%' }}
          />

          {/* Experience Items */}
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-item">
              <div className="experience-dot" />
              <div className="experience-content">
                <span className="experience-period">{exp.period}</span>
                <h3 className="experience-role">{exp.role}</h3>
                <h4 className="experience-company">{exp.company}</h4>
                <p className="experience-desc">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
