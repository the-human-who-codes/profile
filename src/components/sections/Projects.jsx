import "../../styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Events and Activities App",
      description: "A full-stack app for managing and discovering events.",
      languages: [
        { name: "React", percentage: 40 },
        { name: "Firebase", percentage: 40 },
        { name: "Material-UI", percentage: 20 },
      ],
    },
    {
      title: "RoboCup Team Formation",
      description:
        "Optimized player roles and formations for a RoboCup strategy project.",
      languages: [
        { name: "Python", percentage: 70 },
        { name: "Algorithms", percentage: 30 },
      ],
    },
    {
      title: "3D Game Using Three.js",
      description: "A 3D game featuring realistic physics and animations.",
      languages: [
        { name: "Three.js", percentage: 50 },
        { name: "Cannon.js", percentage: 30 },
        { name: "JavaScript", percentage: 20 },
      ],
    },
    {
      title: "3D Cage in OpenGL",
      description:
        "Created a 3D cage structure with cylinders and spheres using OpenGL.",
      languages: [
        { name: "C++", percentage: 80 },
        { name: "OpenGL", percentage: 20 },
      ],
    },
    {
      title: "Portfolio Website",
      description: "A dynamic portfolio inspired by GitHub and Ubuntu themes.",
      languages: [
        { name: "React", percentage: 50 },
        { name: "CSS", percentage: 30 },
        { name: "JavaScript", percentage: 20 },
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
            <p className="project-description">{project.description}</p>
            <ul className="languages-list">
              {project.languages.map((lang, idx) => (
                <li key={idx} className="language-item">
                  <span className="language-name">{lang.name}</span>
                  <span
                    className="language-bar"
                    style={{
                      width: `${lang.percentage}%`,
                      backgroundColor: "#4caf50",
                    }}
                  ></span>
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
