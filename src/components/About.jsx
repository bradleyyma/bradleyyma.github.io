import React from 'react';
import { FiCode, FiUsers, FiTrendingUp } from 'react-icons/fi';
import './About.css';

const About = () => {
  const highlights = [
    {
      icon: <FiCode />,
      title: "Clean Code",
      description: "I write clean, maintainable code following best practices and industry standards."
    },
    {
      icon: <FiUsers />,
      title: "Team Player",
      description: "Experience collaborating in teams using Git workflows and agile methodologies."
    },
    {
      icon: <FiTrendingUp />,
      title: "Growth Mindset",
      description: "Continuously learning new technologies and improving my skills through hands-on projects."
    }
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="heading-lg">About Me</h2>
            <div className="about-description">
              <p>
                I'm a passionate Computer Science student at the University of Colorado Boulder 
                with a strong foundation in software development and problem-solving. My journey 
                in programming started with curiosity and has evolved into a deep appreciation 
                for creating elegant solutions to complex problems.
              </p>
              <p>
                Through my coursework and personal projects, I've gained experience in various 
                programming languages and frameworks. I enjoy the challenge of learning new 
                technologies and applying them to build meaningful applications that can make 
                a positive impact.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open-source projects, or working on personal projects that push my boundaries 
                and help me grow as a developer.
              </p>
            </div>
          </div>
          
          <div className="about-highlights">
            <div className="highlights-grid">
              {highlights.map((highlight, index) => (
                <div key={index} className="highlight-card">
                  <div className="highlight-icon">
                    {highlight.icon}
                  </div>
                  <h3 className="highlight-title">{highlight.title}</h3>
                  <p className="highlight-description">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
