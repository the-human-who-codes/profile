import "../../styles/Projects.css";
import { useState, useEffect } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("https://api-vhfzqtwnzq-uc.a.run.app");
        if (!response.ok) {
          console.log(response);
          throw new Error("Failed to fetch repositories.");
        }
        const data = await response.json();

        setProjects(data); // Set the fetched data directly
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error(error);
        setLoading(false); // Set loading to false if there is an error
      }
    };

    fetchRepos();
  }, []);

  // Handle card click to redirect to the repo URL
  const handleCardClick = (url) => {
    window.location.href = url;
  };

  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>

      {/* Show loading animation */}
      {loading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading projects...</p>
        </div>
      ) : (
        <div className="projects-container">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              onClick={() => handleCardClick(project.url)} // Add the onClick listener
            >
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
      )}
    </section>
  );
};

export default Projects;
