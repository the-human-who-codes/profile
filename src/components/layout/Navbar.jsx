import "../../styles/Navbar.css"; // Import CSS for styling

const Navbar = () => {
  // Function to scroll smoothly to a section
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
              onClick={() => handleScroll(tab)}
              className="navbar-link"
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)} {/* Capitalize */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
