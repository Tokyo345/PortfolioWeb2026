import React, { useRef } from 'react';
import { contactInfo, sectionMeta } from '../../data/portfolio';
import { HiOutlineMail } from 'react-icons/hi';
import { FiLinkedin } from 'react-icons/fi';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin sekali di top-level
gsap.registerPlugin(ScrollTrigger);

/**
 * Contact Section
 * Dua kartu kontak — Email & LinkedIn — dengan animasi stagger.
 * Data diambil dari portfolio.js via contactInfo & sectionMeta.
 */
const Contact = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Set initial state untuk contact cards
    gsap.set('.contact-card', { autoAlpha: 0, y: 40 });

    gsap.to('.contact-card', {
      y: 0,
      autoAlpha: 1,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out',
      clearProps: 'transform',
      scrollTrigger: {
        trigger: '#contact',
        start: 'top 75%',
      },
    });
  }, { scope: sectionRef });

  return (
    <section className="contact section" id="contact" ref={sectionRef}>
      <div className="contact-wrapper">
        {/* Section Header */}
        <div className="section-header">
          <p className="section-label">
            <span className="dot" />
            {sectionMeta.contact.label}
          </p>
          <h2 className="section-title">{sectionMeta.contact.title}</h2>
          <p className="section-subtitle">{sectionMeta.contact.subtitle}</p>
        </div>

        {/* Contact Cards */}
        <div className="contact-cards">
          {/* Email Card */}
          <a
            className="contact-card"
            href={`mailto:${contactInfo.email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-card-icon">
              <HiOutlineMail />
            </span>
            <span className="contact-card-label">Email</span>
            <span className="contact-card-value">{contactInfo.email}</span>
          </a>

          {/* LinkedIn Card */}
          <a
            className="contact-card"
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-card-icon">
              <FiLinkedin />
            </span>
            <span className="contact-card-label">LinkedIn</span>
            <span className="contact-card-value">Connect with me</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
