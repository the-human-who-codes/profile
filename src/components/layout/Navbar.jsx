import "../../styles/Navbar.css"; // Assuming you're using global CSS or CSS modules
import PropTypes from "prop-types";

const Navbar = ({ activeTab, onTabChange }) => {
  return (
    <div className="navbar">
      <div className="navbar-contents">
        {/* Brand Section */}
        <div className="navbar-brand">
          <span className="brand-name">MUANO.DEV</span>
        </div>

        {/* Navigation Links */}
        <ul className="navbar-links">
          {["about", "projects", "skills"].map((tab) => (
            <li
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`navbar-link ${activeTab === tab ? "active" : ""}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)} {/* Capitalize */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  onTabChange: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
};

export default Navbar;
