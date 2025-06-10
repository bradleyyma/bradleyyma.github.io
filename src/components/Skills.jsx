import React from 'react';
import { 
  FiCode, 
  FiDatabase, 
  FiGlobe, 
  FiTool,
  FiGitBranch,
  FiLayers
} from 'react-icons/fi';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <FiCode />,
      skills: ["JavaScript", "Python", "Java", "HTML/CSS", "SQL"]
    },
    {
      title: "Frontend",
      icon: <FiGlobe />,
      skills: ["React", "HTML5", "CSS3", "Responsive Design", "Bootstrap"]
    },
    {
      title: "Backend",
      icon: <FiDatabase />,
      skills: ["Node.js", "Django", "REST APIs", "Database Design"]
    },
    {
      title: "Tools & Technologies",
      icon: <FiTool />,
      skills: ["Git", "GitHub", "VS Code", "npm", "Webpack"]
    },
    {
      title: "Concepts",
      icon: <FiLayers />,
      skills: ["OOP", "Data Structures", "Algorithms", "Problem Solving"]
    },
    {
      title: "Version Control",
      icon: <FiGitBranch />,
      skills: ["Git", "GitHub", "Pull Requests", "Branch Management"]
    }
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="skills-header text-center">
          <h2 className="heading-lg">Skills & Technologies</h2>
          <p className="skills-subtitle">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="skill-category-header">
                <div className="skill-category-icon">
                  {category.icon}
                </div>
                <h3 className="skill-category-title">{category.title}</h3>
              </div>
              
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
