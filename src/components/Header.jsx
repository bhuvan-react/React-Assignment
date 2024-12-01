
import React, { useState } from 'react'; 
import './Header.css';
import { PrimeIcons } from 'primereact/api'; 

const Header = () => {
  const [activeTab, setActiveTab] = useState('Data'); 

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="header">
      <div className="tabs-container">
        <span
          className={`tab ${activeTab === 'Data' ? 'active' : ''}`}
          onClick={() => handleTabClick('Data')}
        >
          <i className={`${PrimeIcons.COG} icon`} style={{ marginRight: '2px' }} />
          Data
        </span>
        <div className="divider"></div>

        <span
          className={`tab ${activeTab === 'Summary' ? 'active' : ''}`}
          onClick={() => handleTabClick('Summary')}
        >
          <i className={`${PrimeIcons.CHART_LINE} icon`} style={{ marginRight: '2px' }} />
          Summary
        </span>
        <div className="divider"></div>

        <span
          className={`tab ${activeTab === 'Logs' ? 'active' : ''}`}
          onClick={() => handleTabClick('Logs')}
        >
          <i className={`${PrimeIcons.BOOK} icon`} style={{ marginRight: '2px' }} />
          Logs
        </span>
      </div>
    </div>
  );
};

export default Header;

