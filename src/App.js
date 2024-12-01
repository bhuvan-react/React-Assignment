import React from 'react';
import DataTableComponent from './components/TableData';
import WorkflowPanel from './components/FlowPanel';
import Header from './components/Header';
import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';  
import 'primereact/resources/primereact.min.css';        
import 'primeicons/primeicons.css'; 

const App = () => {
  return (
    <div className="app-container">
      <div className="main-content">
        <div className="content-left">
          <div className="header-container">
            <Header />
          </div>
          <div className="data-table-container">
            <DataTableComponent />
          </div>
        </div>

        <div className="content-right">
          <WorkflowPanel />
        </div>
      </div>
    </div>
  );
};

export default App;
