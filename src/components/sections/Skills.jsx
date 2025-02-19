import { techStack } from "../../data/skills.js";
import "../../styles/Skills.css";

const allSkills = [
  ...Object.values({
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
  }).flat(), // Flatten all grouped skills into a single array
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">Technical Skills</h2>
      <div className="skills-container">
        {allSkills.map((skill, index) => (
          <span className="skill-bubble" key={index}>
            {skill}
          </span>
        ))}
      </div>

      <h2 className="skills-title">Tech Stack</h2>
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
