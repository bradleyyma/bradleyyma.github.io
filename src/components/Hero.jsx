import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowDown } from 'react-icons/fi';
import profileImage from '../img/Ma.Bradley.jpg';
import './Hero.css';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
      </div>
      
      <div className="container hero-content">
        <div className="hero-text">
          <div className="hero-greeting">
            <span className="hero-greeting-text">Hello, I'm</span>
          </div>
          
          <h1 className="hero-name">
            <span className="hero-name-highlight">Bradley Ma</span>
          </h1>
          
          <div className="hero-title">
            <h2>Software Engineer</h2>
          </div>
          
          <p className="hero-description">
            Computer Science graduate from the University of Colorado Boulder with experience 
            in software development and programming. Passionate about learning new technologies 
            and building applications to solve interesting problems. Looking for opportunities 
            to grow and contribute to meaningful projects.
          </p>
          
          <div className="hero-buttons">
            <a 
              href="#contact" 
              className="btn btn-primary"
            >
              <FiMail />
              Get In Touch
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <FiDownload />
              Resume
            </a>
          </div>
          
          <div className="hero-social">
            <a 
              href="https://github.com/bradleyyma" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub Profile"
            >
              <FiGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/bradleyyma/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn Profile"
            >
              <FiLinkedin />
            </a>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="hero-image-container">
            <img 
              src={profileImage} 
              alt="Bradley Ma - Software Engineer" 
              className="hero-profile-img"
            />
            <div className="hero-image-backdrop"></div>
          </div>
        </div>
      </div>
      
      <button 
        className="hero-scroll" 
        onClick={scrollToProjects}
        aria-label="Scroll to projects section"
      >
        <FiArrowDown />
      </button>
    </section>
  );
};

export default Hero;
