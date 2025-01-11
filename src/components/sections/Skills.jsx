import javascriptIcon from "../../assets/icons/javascript.svg";
import reactIcon from "../../assets/icons/react.svg";
import nodejsIcon from "../../assets/icons/node-js.svg";
import pythonIcon from "../../assets/icons/python.svg";
import cssIcon from "../../assets/icons/css.svg";
import htmlIcon from "../../assets/icons/html.svg";
import MySQLIcon from "../../assets/icons/mysql.svg";
import dockerIcon from "../../assets/icons/docker.svg";
import cppIcon from "../../assets/icons/cpp.svg";
import javaIcon from "../../assets/icons/java.svg";
import teamworkIcon from "../../assets/icons/teamwork.svg";
import problemSolvingIcon from "../../assets/icons/problem-solving.svg";
import gitIcon from "../../assets/icons/git.svg";
import cicdIcon from "../../assets/icons/cicd.svg";
import firebaseIcon from "../../assets/icons/firebase.svg";
import "../../styles/Skills.css";

import { useState, useEffect } from "react";
import "../../styles/Skills.css";

const Skills = () => {
  const skills = [
    { name: "JavaScript", level: 90, logo: javascriptIcon },
    { name: "React", level: 85, logo: reactIcon },
    { name: "Node.js", level: 80, logo: nodejsIcon },
    { name: "Python", level: 70, logo: pythonIcon },
    { name: "CSS", level: 75, logo: cssIcon },
    { name: "HTML", level: 80, logo: htmlIcon },
    { name: "SQL", level: 70, logo: MySQLIcon },
    { name: "Docker", level: 50, logo: dockerIcon },
    { name: "C++", level: 80, logo: cppIcon },
    { name: "Java", level: 70, logo: javaIcon },
    { name: "Teamwork", level: 85, logo: teamworkIcon },
    { name: "Problem Solving", level: 90, logo: problemSolvingIcon },
    { name: "Git", level: 80, logo: gitIcon },
    { name: "CI/CD", level: 90, logo: cicdIcon },
    { name: "Firebase", level: 80, logo: firebaseIcon },
  ];

  const radius = 12; // Radius of the circle
  const circumference = 2 * Math.PI * radius;

  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <SkillItem
            key={index}
            skill={skill}
            radius={radius}
            circumference={circumference}
          />
        ))}
      </div>
    </section>
  );
};

const SkillItem = ({ skill, radius, circumference }) => {
  const [progressOffset, setProgressOffset] = useState(circumference);

  // Dynamically calculate and animate the stroke offset
  useEffect(() => {
    setTimeout(() => {
      setProgressOffset(circumference - (skill.level / 100) * circumference);
    }, 100);
  }, [skill.level, circumference]);

  return (
    <div className="skill">
      <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
      <span className="skill-name">{skill.name}</span>
      <div className="circle-container">
        <svg
          className="progress-circle"
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="circle-bg"
            cx="18"
            cy="18"
            r={radius}
            fill="none"
            stroke="#e6e6e6"
            strokeWidth="4"
          />
          <circle
            className="circle-progress"
            cx="18"
            cy="18"
            r={radius}
            fill="none"
            stroke="#4caf50"
            strokeWidth="4"
            strokeDasharray={circumference}
            strokeDashoffset={progressOffset}
            transform="rotate(-90 18 18)" /* Starts progress at the top */
          />
        </svg>
        <span className="circle-text">{`${skill.level}%`}</span>
      </div>
    </div>
  );
};

import PropTypes from "prop-types";

SkillItem.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
    logo: PropTypes.string.isRequired,
  }).isRequired,
  radius: PropTypes.number.isRequired,
  circumference: PropTypes.number.isRequired,
};

export default Skills;
