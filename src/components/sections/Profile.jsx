import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import "../../styles/Profile.css";
import macG from "../../assets/images/macG.jpg";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-section">
        <img src={macG} alt="Profile" className="profile-image" />
        <h2 className="profile-name">Muano Masiagwala</h2>
        <p className="profile-role">Aspiring Software Engineer</p>
        <div className="social-links">
          <a
            href="mailto:muanomasiagwala2021@gmail.com"
            className="social-link"
          >
            <FaEnvelope size={20} />
          </a>
          <a href="tel:+27684298585" className="social-link">
            <FaPhone size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/muano-masiagwala-5b554a255/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/muano-thee-last"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
      <div className="about-section">
        <h3>About Me</h3>
        <p className="about-me">
          I am a passionate computer science graduate with a deep interest in
          building efficient, scalable applications. I enjoy tackling complex
          challenges and contributing to meaningful projects that make a
          difference.
        </p>
      </div>
    </div>
  );
};

export default Profile;
