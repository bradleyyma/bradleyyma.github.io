import React from "react";
import { FiGithub, FiExternalLink, FiCalendar } from 'react-icons/fi';
import project_info from "./project_info.js";
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="projects-header text-center">
          <h2 className="heading-lg">Featured Projects</h2>
          <p className="projects-subtitle">
            A showcase of my recent work and personal projects
          </p>
        </div>
        
        <div className="projects-grid">
          {project_info.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-card-header">
                <h3 className="project-title">{project.name}</h3>
                <div className="project-date">
                  <FiCalendar />
                  <span>{project.date}</span>
                </div>
              </div>
              
              <p className="project-description">
                {project.details}
              </p>
              
              <div className="project-links">
                {project.git && (
                  <a 
                    href={project.git} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`View ${project.name} source code`}
                  >
                    <FiGithub />
                    <span>Code</span>
                  </a>
                )}
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link project-link-primary"
                    aria-label={`View ${project.name} live demo`}
                  >
                    <FiExternalLink />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
