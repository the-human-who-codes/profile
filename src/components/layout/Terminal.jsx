import { useState } from "react";
import PropTypes from "prop-types";
import "../../styles/Terminal.css";

const Terminal = ({ changeActiveTab, onCommandSubmit }) => {
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);
  const [isOpen, setIsOpen] = useState(true); // State to control terminal visibility

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (onCommandSubmit) {
        onCommandSubmit(input); // Send the command to App.jsx
        changeActiveTab(input);
      }

      setCommandHistory((prev) => [
        ...prev,
        `muano@portfolio-desktop:~$ ${input}`,
      ]); // Add to history
      setInput(""); // Clear the input field
    }
  };

  const toggleTerminal = () => {
    setIsOpen((prev) => !prev); // Toggle terminal visibility
  };

  return isOpen ? (
    <div className="terminal">
      {/* Terminal Header */}
      <header className="terminal-header">
        <div className="macos-buttons">
          <span className="button red" onClick={() => setIsOpen(false)}></span>
          <span className="button green" onClick={() => setIsOpen(true)}></span>
        </div>
        <h3 className="terminal-header-text">muano@portfolio-desktop:~</h3>
      </header>

      {/* Terminal Content */}
      <div className="terminal-content">
        {commandHistory.map((command, index) => (
          <p key={index} className="terminal-history">
            {command}
          </p>
        ))}
        <div className="terminal-input-wrapper">
          <p className="terminal-prompt">muano@portfolio-desktop:~$</p>
          <input
            className="terminal-input"
            type="text"
            placeholder="enter the tab you want to view..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            autoFocus
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="terminal-header minimized">
      <div className="macos-buttons">
        <span className="button red"></span>
        <span className="button green" onClick={toggleTerminal}></span>
      </div>
      <h3 className="terminal-header-text">
        muano@portfolio-desktop:~ (minimized)
      </h3>
    </div>
  );
};

Terminal.propTypes = {
  onCommandSubmit: PropTypes.func,
  changeActiveTab: PropTypes.func,
};

export default Terminal;
