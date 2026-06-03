import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  stats,
  processSteps,
  processImage,
  sectionMeta,
  personalInfo,
} from '../../data/portfolio';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// ─── Animated Counter ────────────────────────
// Komponen counter yang menghitung naik saat terlihat di viewport
function AnimatedCounter({ from, to }) {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: '-50px' });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration: 2, ease: 'easeOut' });
      return controls.stop;
    }
  }, [count, isInView, to]);

  return <motion.span ref={nodeRef}>{rounded}</motion.span>;
}

// ─── Process Section ─────────────────────────
export default function Process() {
  const sectionRef = useRef(null);

  // ── GSAP ScrollTrigger Animations ──
  useGSAP(
    () => {
      // Stat items — set initial state
      gsap.set('.stat-item', { autoAlpha: 0, y: 30 });
      gsap.to('.stat-item', {
        y: 0,
        autoAlpha: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'transform',
        scrollTrigger: {
          trigger: '.process-stats-grid',
          start: 'top 80%',
        },
      });

      // Process list items — set initial state
      gsap.set('.process-list-item', { autoAlpha: 0, x: -20 });
      gsap.to('.process-list-item', {
        x: 0,
        autoAlpha: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'transform',
        scrollTrigger: {
          trigger: '.process-list',
          start: 'top 80%',
        },
      });

      // Process image — clip-path reveal dari bawah ke atas
      gsap.fromTo('.process-image-wrapper', 
        { clipPath: 'inset(100% 0 0 0)' },
        {
          clipPath: 'inset(0% 0 0 0)',
          duration: 1.2,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: '.process-image-wrapper',
            start: 'top 80%',
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section className="editorial-section" id="process" ref={sectionRef}>
      <div className="container">

        {/* ── Section 1: Impact Stats ── */}
        <div className="process-impact-grid">
          <div className="process-impact-left">
            <h2 className="editorial-section-title">
              {sectionMeta.process.impactTitle.split('\n').map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </h2>
            <p
              className="editorial-feature-desc"
              style={{ marginTop: '1.5rem', marginBottom: '2rem', maxWidth: '400px' }}
            >
              {sectionMeta.process.impactDesc}
            </p>
            <button
              className="btn-pill"
              onClick={() =>
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              CONTACT ME
              <span className="btn-icon-circle">
                <FiArrowRight size={14} />
              </span>
            </button>
          </div>

          <div className="process-stats-grid">
            {stats.map((stat, i) => (
              <div className="stat-item" key={i}>
                <h3 className="stat-value">
                  <AnimatedCounter from={0} to={stat.value} />
                  {stat.suffix}
                </h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Section 2: Process Steps ── */}
        <div className="process-steps-container">
          <div className="process-steps-left">
            <h2 className="editorial-section-title">
              {sectionMeta.process.stepsTitle.split('\n').map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </h2>
            <p className="editorial-feature-desc">
              {sectionMeta.process.stepsDesc}
            </p>

            <div className="process-list">
              {processSteps.map((proc, i) => (
                <div className="process-list-item" key={i}>
                  <h4 className="process-list-title">{proc.title.toUpperCase()}</h4>
                  <p className="editorial-feature-desc">{proc.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="process-steps-right">
            {/* clipPath initial state — GSAP .from() animates FROM inset(100%) */}
            <div
              className="process-image-wrapper"
              style={{ clipPath: 'inset(0% 0 0 0)' }}
            >
              <img
                src={processImage.src}
                alt={processImage.alt}
                className="process-image"
              />
            </div>
          </div>
        </div>



      </div>
    </section>
  );
}
