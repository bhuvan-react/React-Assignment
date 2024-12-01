import React from 'react';
import './WorkFlow.css';

const WorkflowPanel = () => {
  return (
    <div className="workflow-panel">
      <h3>Workflow Actions</h3>
      <div className="workflow-action">NEW</div>
      <div className="workflow-action">AGGREGATE</div>
      <div className="workflow-action">CLEAN</div>
      <div className="workflow-action">DEDUPE</div>
      <div className="workflow-action">JOIN</div>
    </div>
  );
};

export default WorkflowPanel;
