import { useState } from "react";
import { techStack } from "../../data/skills.js";
import "../../styles/Skills.css";

const technicalSkills = {
  "Software Engineering": [
    "Object-Oriented Programming (OOP)",
    "Software Development Life Cycle (SDLC)",
    "Full-Stack Development",
    "Agile Development",
    "Scrum",
    "Git & Version Control",
    "Problem Solving",
    "System Design",
    "Software Architecture",
  ],
  "Web Development": [
    "Front-End Development",
    "Back-End Development",
    "Responsive Web Design",
    "REST APIs",
    "HTML, CSS, JavaScript",
    "React.js & Next.js",
    "Node.js & Express.js",
    "Database Management (SQL & NoSQL)",
    "Microservices Architecture",
  ],
  "Data Science & AI": [
    "Machine Learning",
    "Deep Learning",
    "Data Structures & Algorithms",
    "Data Analysis & Visualization",
    "Python & Pandas",
    "Parallel Computing",
    "Statistics & Probability",
    "Reinforcement Learning",
  ],
  "DevOps & Cloud": [
    "CI/CD Pipelines",
    "Docker",
    "Cloud Platforms (AWS, Azure, Firebase)",
    "Serverless Computing",
    "Monitoring & Logging",
  ],
  "Mobile Development": [
    "Android Development",
    "Mobile UI/UX Design",
    "Cross-Platform Development",
    "Mobile Web Applications",
  ],
};

const Skills = () => {
  const [expandedSkill, setExpandedSkill] = useState(null);

  const toggleSkill = (skill) => {
    setExpandedSkill(expandedSkill === skill ? null : skill);
  };

  return (
    <section className="techstack-section">
      <h2 className="techstack-title">Technical Expertise</h2>
      <div className="technical-skills-container">
        {Object.entries(technicalSkills).map(([coreSkill, subSkills]) => (
          <div
            className={`core-skill-container ${
              expandedSkill === coreSkill ? "expanded" : ""
            }`}
            key={coreSkill}
            onClick={() => toggleSkill(coreSkill)}
          >
            <span
              className={`technical-skill-bubble core-skill ${
                expandedSkill === coreSkill ? "expanded" : ""
              }`}
            >
              {coreSkill}
            </span>
            <div className="subskills-container">
              {expandedSkill === coreSkill &&
                subSkills.map((subSkill, index) => (
                  <span className="technical-skill-bubble subskill" key={index}>
                    {subSkill}
                  </span>
                ))}
            </div>
          </div>
        ))}
      </div>

      <h2 className="techstack-title">Tech Stack</h2>
      <div className="techstack-container">
        {techStack.map((tech, index) => (
          <div className="tech-item" key={index}>
            <div className="tech-icon">{tech.icon}</div>
            <span className="tech-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
