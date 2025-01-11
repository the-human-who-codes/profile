import { useState } from "react";
import PropTypes from "prop-types";
import "../../styles/Terminal.css";

const Terminal = ({ changeActiveTab, onCommandSubmit, availableTabs }) => {
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  // const [currentDirectory, setCurrentDirectory] = useState("home"); // Track current directory

  const hiddenCommand = "sudo give-me-coffee";
  const helpMessage = `
Available commands:
  cd [tab-name]  - Navigate to a specific tab.
  ls             - List current directory (.) and parent directory (..).
  help           - Show this help message.
  clear          - Clear the terminal screen.
`;

  const handleCommand = (command) => {
    const args = command.trim().split(" ");
    const cmd = args[0];
    const param = args[1];

    switch (cmd) {
      case "cd":
        if (param && availableTabs.includes(param)) {
          // setCurrentDirectory(param); // Change the current directory
          changeActiveTab(param);
          setCommandHistory((prev) => [...prev, `Navigated to ${param} tab.`]);
        } else {
          setCommandHistory((prev) => [
            ...prev,
            param
              ? `Error: Tab "${param}" does not exist.`
              : `Error: Please specify a tab to navigate.`,
          ]);
        }
        break;

      case "ls":
        setCommandHistory((prev) => [
          ...prev,
          ".\t..\t" + availableTabs.join("\t"), // Show current, parent directory and available tabs if in home
        ]);
        break;

      case "help":
        setCommandHistory((prev) => [
          ...prev,
          <pre key="help-message">{helpMessage}</pre>,
        ]);
        break;

      case "clear":
        setCommandHistory([]);
        break;

      case hiddenCommand:
        setCommandHistory((prev) => [
          ...prev,
          "☕ Here's your virtual coffee! Keep coding. ☕",
        ]);
        break;

      default:
        setCommandHistory((prev) => [
          ...prev,
          `Error: Command "${cmd}" not found. Type "help" for a list of commands.`,
        ]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const newCommand = `muano@portfolio-desktop:~$ ${input}`;
      setCommandHistory((prev) => [...prev, newCommand]);
      handleCommand(input); // Process the command
      if (onCommandSubmit) onCommandSubmit(input); // Optional callback
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
          <div key={index} className="terminal-history">
            {command}
          </div>
        ))}
        <div className="terminal-input-wrapper">
          <p className="terminal-prompt">muano@portfolio-desktop:~$</p>
          <input
            className="terminal-input"
            type="text"
            placeholder="type help"
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
  availableTabs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Terminal;
