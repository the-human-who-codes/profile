import "../../styles/Projects.css";
import { useState, useEffect } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state
  const token = import.meta.env.VITE_GITHUB_TOKEN;

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/muano-thee-last/repos",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "X-GitHub-Api-Version": "2022-11-28",
            },
          }
        );
        if (!response.ok) throw new Error("Failed to fetch repositories.");
        const data = await response.json();
        // Map the fetched data to your desired format
        const mappedProjects = data.map((repo) => ({
          title: repo.name,
          description: repo.description || "No description provided.",
          languages: [], // Placeholder for language data, we'll populate it below
          url: repo.html_url, // Add the repo URL
        }));

        // Fetch language data for each repo
        const projectsWithLanguages = await Promise.all(
          mappedProjects.map(async (project) => {
            try {
              const langResponse = await fetch(
                `https://api.github.com/repos/muano-thee-last/${project.title}/languages`,
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                    "X-GitHub-Api-Version": "2022-11-28",
                  },
                }
              );
              if (!langResponse.ok)
                throw new Error("Failed to fetch languages.");
              const langData = await langResponse.json();
              const total = Object.values(langData).reduce(
                (acc, val) => acc + val,
                0
              );
              const languages = Object.entries(langData).map(
                ([key, value]) => ({
                  name: key,
                  percentage: Math.round((value / total) * 100),
                })
              );
              return { ...project, languages };
            } catch {
              return { ...project, languages: [] };
            }
          })
        );

        setProjects(projectsWithLanguages);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error(error);
        setLoading(false); // Set loading to false if there is an error
      }
    };

    fetchRepos();
  }, [token]);

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
