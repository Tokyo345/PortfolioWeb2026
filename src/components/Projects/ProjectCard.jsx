import React from 'react';
import { FiExternalLink } from 'react-icons/fi';

/**
 * ProjectCard
 * Kartu project individual — murni presentational.
 * Animasi ditangani oleh GSAP di parent (Projects.jsx),
 * jadi komponen ini tidak perlu motion wrapper.
 */
const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        {/* Card Image */}
        <div className="project-card-image">
          <img
            src={project.thumbnail}
            alt={project.title}
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <span className="project-number">
            #{String(project.id).padStart(2, '0')}
          </span>
        </div>

        {/* Card Body */}
        <div className="project-card-body">
          <h3 className="project-card-title">{project.title}</h3>
          <p className="project-card-description">{project.description}</p>

          {/* Tags */}
          <div className="project-card-tags">
            {project.tags.map((tag, i) => (
              <span className="project-tag" key={i}>
                {tag}
              </span>
            ))}
          </div>

          {/* Link Indicator */}
          <span className="project-card-link">
            View Project <FiExternalLink />
          </span>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
