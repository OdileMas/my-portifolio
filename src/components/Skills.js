import React from "react";
import "./Skills.css";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaJava,
  FaPython,
  FaDatabase,
} from "react-icons/fa";

const Skills = () => {
  const skills = [
    { name: "React", icon: <FaReact className="icon react" /> },
    { name: "JavaScript", icon: <FaJsSquare className="icon js" /> },
    { name: "HTML5", icon: <FaHtml5 className="icon html" /> },
    { name: "CSS3", icon: <FaCss3Alt className="icon css" /> },
    { name: "Node.js", icon: <FaNodeJs className="icon node" /> },
    { name: "Java", icon: <FaJava className="icon java" /> },
    { name: "Python", icon: <FaPython className="icon python" /> },
    { name: "Databases", icon: <FaDatabase className="icon db" /> },
  ];

  return (
    <section id="skills" className="skills-section">
      

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill.icon}
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
