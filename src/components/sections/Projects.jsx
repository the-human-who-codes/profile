import "../../styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      languages: [
        { name: "JavaScript", percentage: 60 },
        { name: "HTML", percentage: 30 },
        { name: "CSS", percentage: 10 },
      ],
    },
    {
      title: "Project 2",
      languages: [
        { name: "Python", percentage: 80 },
        { name: "SQL", percentage: 20 },
      ],
    },
    {
      title: "Project 3",
      languages: [
        { name: "React", percentage: 50 },
        { name: "Node.js", percentage: 30 },
        { name: "Express.js", percentage: 20 },
      ],
    },
  ];

  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-name">{project.title}</h3>
            <ul className="languages-list">
              {project.languages.map((lang, idx) => (
                <li key={idx} className="language-item">
                  <span className="language-name">{lang.name}</span>
                  <span className="language-percentage">
                    {lang.percentage}%
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
