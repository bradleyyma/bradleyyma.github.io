import React from 'react';
import { FiMail, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-text">
            <h2 className="heading-lg">Let's Connect</h2>
            <p className="contact-description">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology. Feel free to reach out!
            </p>
            
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <FiMapPin />
                </div>
                <div className="contact-details">
                  <h3>Location</h3>
                  <p>Boulder, Colorado</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <FiMail />
                </div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <a href="mailto:bradley.y.ma@gmail.com">bradley.y.ma@gmail.com</a>
                </div>
              </div>
            </div>
            
            <div className="contact-social">
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
          
          <div className="contact-cta">
            <div className="contact-card">
              <h3>Want to reach out?</h3>
              <p>
                Whether you have a project in mind, want to discuss opportunities, 
                or just want to say hello, I'd love to hear from you.
              </p>
              <a 
                href="mailto:bradley.y.ma@gmail.com" 
                className="btn btn-primary"
              >
                <FiMail />
                Send a Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
