import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navigation.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#hero" onClick={handleLinkClick}>
            Bradley Ma
          </a>
        </div>
        
        <div className={`nav-menu ${isOpen ? 'nav-menu-active' : ''}`}>
          <a href="#about" className="nav-link" onClick={handleLinkClick}>
            About
          </a>
          <a href="#skills" className="nav-link" onClick={handleLinkClick}>
            Skills
          </a>
          <a href="#projects" className="nav-link" onClick={handleLinkClick}>
            Projects
          </a>
          <a href="#contact" className="nav-link" onClick={handleLinkClick}>
            Contact
          </a>
        </div>
        
        <button 
          className="nav-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
