import { useState } from "react";
import MainLayout from "./components/layout/MainLayout";

const App = () => {
  const [activeTab, setActiveTab] = useState("about");

  const handleCommand = (command) => {
    // Process commands like "about", "projects", etc.
    const availableTabs = ["about", "projects", "skills"];
    if (availableTabs.includes(command.toLowerCase())) {
      setActiveTab(command.toLowerCase());
    } else {
      console.log(`Command "${command}" not recognized.`);
    }
  };

  return (
    <MainLayout
      activeTab={activeTab}
      onCommandSubmit={handleCommand} // Pass the callback to Terminal
    />
  );
};

export default App;
