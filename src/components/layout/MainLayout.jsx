import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Terminal from "./Terminal";
import OutPut from "../sections/OutPut";
import "../../styles/MainLayout.css";

import { useState } from "react";

const MainLayout = ({ onCommandSubmit }) => {
  const [activeTab, setActiveTab] = useState("about"); // State for the active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab); // Set the clicked tab as active
    console.log(`clicked on tab ${tab}`);
  };
  return (
    <>
      {/* Navbar */}
      <Navbar activeTab={activeTab} onTabChange={handleTabClick} />

      {/* Output Section */}
      <OutPut activeTab={activeTab} />

      {/* Terminal */}
      <Terminal
        changeActiveTab={handleTabClick}
        onCommandSubmit={onCommandSubmit}
      />
    </>
  );
};

MainLayout.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onCommandSubmit: PropTypes.func.isRequired,
};

export default MainLayout;
