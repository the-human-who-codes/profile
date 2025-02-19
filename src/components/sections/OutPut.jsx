import "../../styles/OutPut.css";
import Profile from "./Profile";
import Projects from "./Projects";
import Skills from "./Skills";

const OutPut = () => {
  return (
    <div className="output-section">
      <section id="about">
        <Profile />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
    </div>
  );
};

export default OutPut;
