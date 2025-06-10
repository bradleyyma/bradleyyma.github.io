import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowDown } from 'react-icons/fi';
import profileImage from '../img/Ma.Bradley.jpg';
import './Hero.css';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
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
            <h2>Aspiring Software Engineer</h2>
          </div>
          
          <p className="hero-description">
            Computer Science student at the University of Colorado Boulder, passionate about 
            creating innovative solutions through code. I love building projects that solve 
            real-world problems and continuously learning new technologies.
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
              href="https://docs.google.com/document/d/1QOEAiRLSEbMEwohLhvCo5oO6pB2tsH_aj5HqOF6SlG4/edit?usp=sharing" 
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
        onClick={scrollToAbout}
        aria-label="Scroll to about section"
      >
        <FiArrowDown />
      </button>
    </section>
  );
};

export default Hero;
