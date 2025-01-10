import "../../styles/Skills.css";

const Skills = () => {
  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 70 },
    { name: "CSS", level: 75 },
    { name: "MongoDB", level: 60 },
    { name: "Docker", level: 50 },
  ];

  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <span className="skill-name">{skill.name}</span>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${skill.level}%` }}
                aria-label={`${skill.name} proficiency: ${skill.level}%`}
              />
            </div>
            <span className="skill-level">{skill.level}%</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
