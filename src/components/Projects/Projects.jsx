import React, { useRef } from 'react';
import { projects, sectionMeta } from '../../data/portfolio';
import ProjectCard from './ProjectCard';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin sekali di top-level
gsap.registerPlugin(ScrollTrigger);

/**
 * Projects Section
 * Menampilkan grid project dengan animasi stagger menggunakan GSAP ScrollTrigger.
 * Semua data diambil dari portfolio.js — tidak ada konten hardcoded.
 */
const Projects = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Set initial state untuk project cards
    gsap.set('.project-card', { autoAlpha: 0, y: 60 });

    gsap.to('.project-card', {
      y: 0,
      autoAlpha: 1,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power3.out',
      clearProps: 'transform',
      scrollTrigger: {
        trigger: '.projects-grid',
        start: 'top 85%',
      },
    });
  }, { scope: sectionRef });

  return (
    <section className="projects section" id="projects" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <p className="section-label">
            <span className="dot" />
            {sectionMeta.projects.label}
          </p>
          <h2 className="section-title">{sectionMeta.projects.title}</h2>
          <p className="section-subtitle">{sectionMeta.projects.subtitle}</p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
