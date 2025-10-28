import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Smart Agro Boost",
    description:
      "A mobile app connecting farmers to markets. Users can view harvests, place orders, and get AI-based crop recommendations.",
    tech: ["Flutter", "SQLite", "Firebase", "AI Integration"],
    github: "#",
    demo: "#",
    image: "https://via.placeholder.com/400x250?text=Smart+Agro+Boost",
  },
  {
    title: "DocuFlow",
    description:
      "A document management system that allows secure storage, retrieval, and messaging between users, built with Spring Boot and React.",
    tech: ["React", "Spring Boot", "PostgreSQL", "MongoDB", "Pulsar"],
    github: "#",
    demo: "#",
    image: "https://via.placeholder.com/400x250?text=DocuFlow",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio showcasing projects, skills, and contact information in a modern, responsive design.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "#",
    demo: "#",
    image: "https://via.placeholder.com/400x250?text=Portfolio",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-img" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
