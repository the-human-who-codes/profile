import PropTypes from "prop-types";
import "../../styles/OutPut.css";
import Profile from "./Profile";
import Projects from "./Projects";
import Skills from "./Skills";

// Map to associate tabs with their respective components
const sections = {
  about: <Profile />,
  projects: <Projects />,
  skills: <Skills />,
};

const OutPut = ({ activeTab }) => {
  // Ensure the activeTab exists in the sections map to prevent potential rendering issues
  const ActiveSection = sections[activeTab] || null;

  return (
    <div className="output-section">
      <div className="output-contents">
        {ActiveSection ? (
          ActiveSection
        ) : (
          <div className="error-message">Section not found</div>
        )}
      </div>
    </div>
  );
};

OutPut.propTypes = {
  activeTab: PropTypes.oneOf(["about", "projects", "skills"]).isRequired, // Restrict values for better validation
};

export default OutPut;
