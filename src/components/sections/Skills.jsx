import { techStack } from "../../data/skills.js";
import "../../styles/Skills.css";

const Skills = () => {
  return (
    <section className="techstack-section">
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
