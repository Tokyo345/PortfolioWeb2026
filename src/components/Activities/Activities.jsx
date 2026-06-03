import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { activities, sectionMeta } from '../../data/portfolio';

// Register plugin di top-level
gsap.registerPlugin(ScrollTrigger);

// ─── ACTIVITIES SECTION ─────────────────────────
// Menampilkan kegiatan non-akademik & soft skill
// Card layout dengan filter kategori dan animasi GSAP
// ─────────────────────────────────────────────────

export default function Activities() {
  const sectionRef = useRef(null);
  const { label, title, subtitle } = sectionMeta.activities;
  const [activeFilter, setActiveFilter] = useState('All');

  // Extract unique categories
  const categories = ['All', ...new Set(activities.map((a) => a.category))];

  const filteredActivities =
    activeFilter === 'All'
      ? activities
      : activities.filter((a) => a.category === activeFilter);

  useGSAP(
    () => {
      // Set initial state for activity cards
      gsap.set('.activity-card', { autoAlpha: 0, y: 50 });

      gsap.to('.activity-card', {
        y: 0,
        autoAlpha: 1,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'transform',
        scrollTrigger: {
          trigger: '.activities-grid',
          start: 'top 85%',
        },
      });
    },
    { scope: sectionRef, dependencies: [activeFilter], revertOnUpdate: true }
  );

  return (
    <section
      className="activities section"
      id="activities"
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

        {/* Category Filter Pills */}
        <motion.div
          className="activities-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`activities-filter-pill${activeFilter === cat ? ' active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Activities Grid */}
        <div className="activities-grid">
          <AnimatePresence mode="popLayout">
            {filteredActivities.map((activity) => (
              <motion.div
                key={activity.id}
                className="activity-card"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                {/* Card Header */}
                <div className="activity-card-header">
                  {activity.imageIcon ? (
                    <img 
                      src={activity.imageIcon} 
                      alt={`${activity.title} icon`}
                      className="activity-image-icon"
                      style={{ width: activity.iconWidth || '48px', height: 'auto', borderRadius: '8px', objectFit: 'contain' }}
                    />
                  ) : (
                    <span className="activity-icon">{activity.icon}</span>
                  )}
                  <span className="activity-category">{activity.category}</span>
                </div>

                {/* Card Body */}
                <h3 className="activity-card-title">{activity.title}</h3>
                <h4 className="activity-card-org">{activity.organization}</h4>
                <span className="activity-card-period">{activity.period}</span>
                <p className="activity-card-desc">{activity.description}</p>

                {/* Skill Tags */}
                <div className="activity-card-skills">
                  {activity.skills.map((skill) => (
                    <span key={skill} className="activity-skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
