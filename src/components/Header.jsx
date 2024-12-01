import React, { useState } from "react";
import "./Header.css";
import { PrimeIcons } from "primereact/api";
import { Button } from "primereact/button";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Data");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="header">
      <div className="tabs-container">
        <span
          className={`tab ${activeTab === "Data" ? "active" : ""}`}
          onClick={() => handleTabClick("Data")}
        >
          <i className={`${PrimeIcons.COG} icon`} style={{ marginRight: "5px" }} />
          Data
        </span>
        <div className="divider"></div>

        <span
          className={`tab ${activeTab === "Summary" ? "active" : ""}`}
          onClick={() => handleTabClick("Summary")}
        >
          <i className={`${PrimeIcons.CHART_LINE} icon`} style={{ marginRight: "5px" }} />
          Summary
        </span>
        <div className="divider"></div>

        <span
          className={`tab ${activeTab === "Logs" ? "active" : ""}`}
          onClick={() => handleTabClick("Logs")}
        >
          <i className={`${PrimeIcons.BOOK} icon`} style={{ marginRight: "5px" }} />
          Logs
        </span>
      </div>

      <div className="logs-download">
        <Button label="Download" icon="pi pi-download" className="p-button-rounded p-button-primary download-button" />
      </div>
    </div>
  );
};

export default Header;
