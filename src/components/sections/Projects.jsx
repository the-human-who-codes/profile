import "../../styles/Projects.css";
import { projects } from "../../data/projects";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi"; // Icons for GitHub and live site links

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            {/* Project Image */}
            {project.image && (
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={`${project.name} thumbnail`}
                  className="project-image"
                />

                {/* Overlay Content */}
                <div className="project-overlay">
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-links">
                    {project["link-to-git-hub"] && (
                      <FaGithub
                        className="project-link-icon"
                        onClick={() =>
                          window.open(project["link-to-git-hub"], "_blank")
                        }
                        title="View on GitHub"
                      />
                    )}
                    {project["link-to-live-site"] && (
                      <FiExternalLink
                        className="project-link-icon"
                        onClick={() =>
                          window.open(project["link-to-live-site"], "_blank")
                        }
                        title="Visit Live Site"
                      />
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
