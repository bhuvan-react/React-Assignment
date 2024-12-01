import React, { useRef, useState } from 'react';
import './WorkFlow.css';

const WorkflowPanel = () => {
  const actions = ['NEW', 'AGGREGATE', 'CLEAN', 'DEDUPE', 'JOIN'];
  const actionData = {
    NEW: "Create or initialize data.",
    AGGREGATE: "Summarize data, such as:\n- Calculating totals\n- Averages or counts for reports.Also good for data Analytics",
    CLEAN: "Sanitize data by fixing errors and inconsistencies.",
    DEDUPE: "Remove duplicate entries from datasets.",
    JOIN: "Combine multiple datasets using common fields."
  };
  
  
  const buttonRef=useRef()
  // State to track the expanded status of each action
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (action) => {
    setExpanded((prevState) => ({
      ...prevState,
      [action]: !prevState[action],
    }));
  };

  return (
    <div className="workflow-panel">
      <h3>Workflow Actions</h3>
      {actions.map((action) => (
        <div className='bg-workflow-action'>
          <div className='bg-work-flow-header'>

          
           <button className='toggle-button-plus' onClick={() => toggleExpand(action)}>
                {expanded[action] ? '-' : '+'}
            </button>
            <div className={`workflow-action-header ${expanded[action]?"":"workflow-action-header-rounded"}`}>
              <span>{action}</span>
            </div>
          </div>
          <div key={action} className="workflow-action-item">
           
            {expanded[action] && (
            <div className='bg-body-workflow'>
              
               
            <div className="workflow-action-details">
                {actionData[action] || ""}
              </div>
            </div>
              
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkflowPanel;
