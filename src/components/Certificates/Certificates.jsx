import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { certificates, sectionMeta } from '../../data/portfolio';
import { FiX, FiChevronLeft, FiChevronRight, FiAward } from 'react-icons/fi';

// Register plugin di top-level
gsap.registerPlugin(ScrollTrigger);

/**
 * Certificates Section
 * Menampilkan grid sertifikat dengan gambar landscape, judul, dan deskripsi singkat.
 * Klik sertifikat untuk melihat gambar penuh di lightbox modal.
 * Semua data diambil dari portfolio.js — tidak ada konten hardcoded.
 */
export default function Certificates() {
  const sectionRef = useRef(null);
  const { label, title, subtitle } = sectionMeta.certificates;
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });

  // GSAP scroll animation
  useGSAP(
    () => {
      gsap.set('.certificate-card', { autoAlpha: 0, y: 50 });

      gsap.to('.certificate-card', {
        y: 0,
        autoAlpha: 1,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'transform',
        scrollTrigger: {
          trigger: '.certificates-grid',
          start: 'top 85%',
        },
      });
    },
    { scope: sectionRef }
  );

  // Lightbox controls
  const openLightbox = (index) => setLightbox({ open: true, index });
  const closeLightbox = () => setLightbox({ open: false, index: 0 });

  const goTo = useCallback(
    (direction) => {
      setLightbox((prev) => ({
        open: true,
        index:
          direction === 'next'
            ? (prev.index + 1) % certificates.length
            : (prev.index - 1 + certificates.length) % certificates.length,
      }));
    },
    []
  );

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightbox.open) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goTo('next');
      if (e.key === 'ArrowLeft') goTo('prev');
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightbox.open, goTo]);

  const currentCert = certificates[lightbox.index];

  return (
    <section
      className="certificates section"
      id="certificates"
      ref={sectionRef}
    >
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          <div className="section-label">
            <span
              className="dot"
              style={{ background: 'var(--color-accent)' }}
            />
            {label}
          </div>
          <h2
            className="section-title"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {title}
          </h2>
          <p className="section-subtitle">{subtitle}</p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className="certificate-card"
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(index)}
              aria-label={`View certificate: ${cert.title}`}
            >
              {/* Certificate Image */}
              <div className="certificate-card-image">
                {cert.image && cert.image.includes('.pdf') ? (
                  <iframe
                    src={`${cert.image}#toolbar=0&navpanes=0&scrollbar=0`}
                    title={cert.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      border: 'none',
                      pointerEvents: 'none',
                      objectFit: 'cover'
                    }}
                  />
                ) : (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                )}
                {/* Fallback placeholder when image fails */}
                <div className="certificate-card-placeholder" style={{ display: 'none' }}>
                  <FiAward size={32} />
                  <span>Certificate</span>
                </div>
                {/* Hover overlay */}
                <div className="certificate-card-overlay">
                  <span className="certificate-view-label">View Certificate</span>
                </div>
              </div>

              {/* Certificate Info */}
              <div className="certificate-card-body">
                <div className="certificate-card-meta">
                  <span className="certificate-issuer">{cert.issuer}</span>
                  <span className="certificate-date">{cert.date}</span>
                </div>
                <h3 className="certificate-card-title">{cert.title}</h3>
                <p className="certificate-card-desc">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightbox.open && (
          <motion.div
            className="certificate-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              className="certificate-lightbox-close"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <FiX size={24} />
            </button>

            {/* Navigation arrows */}
            {certificates.length > 1 && (
              <>
                <button
                  className="certificate-lightbox-nav certificate-lightbox-prev"
                  onClick={(e) => {
                    e.stopPropagation();
                    goTo('prev');
                  }}
                  aria-label="Previous certificate"
                >
                  <FiChevronLeft size={28} />
                </button>
                <button
                  className="certificate-lightbox-nav certificate-lightbox-next"
                  onClick={(e) => {
                    e.stopPropagation();
                    goTo('next');
                  }}
                  aria-label="Next certificate"
                >
                  <FiChevronRight size={28} />
                </button>
              </>
            )}

            {/* Lightbox content */}
            <motion.div
              className="certificate-lightbox-content"
              key={lightbox.index}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {currentCert.image && currentCert.image.includes('.pdf') ? (
                <iframe
                  src={currentCert.image}
                  title={currentCert.title}
                  className="certificate-lightbox-image"
                  style={{ border: 'none', backgroundColor: '#fff', width: '100%', minHeight: '60vh' }}
                />
              ) : (
                <img
                  src={currentCert.image}
                  alt={currentCert.title}
                  className="certificate-lightbox-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              )}
              <div className="certificate-lightbox-info">
                <h3 className="certificate-lightbox-title">
                  {currentCert.title}
                </h3>
                <p className="certificate-lightbox-meta">
                  {currentCert.issuer} · {currentCert.date}
                </p>
                <p className="certificate-lightbox-desc">
                  {currentCert.description}
                </p>
                {/* Pagination indicator */}
                <div className="certificate-lightbox-pagination">
                  {certificates.map((_, i) => (
                    <span
                      key={i}
                      className={`certificate-lightbox-dot${
                        i === lightbox.index ? ' active' : ''
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightbox({ open: true, index: i });
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
