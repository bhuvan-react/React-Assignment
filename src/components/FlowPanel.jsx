import React, { useState } from 'react';
import './WorkFlow.css';
import { PrimeIcons } from "primereact/api";

const WorkflowPanel = () => {
  const actions = ['NEW', 'AGGREGATE', 'CLEAN', 'DEDUPE', 'JOIN'];
  const actionData = {
    NEW: {
      type: "Initialize",
      extras: "Creates a new dataset.",
      dataset_name: "New Dataset"
    },
    AGGREGATE: {
      type: "Summary",
      extras: [
        "Calculating totals",
        "Averages or counts for reports"
      ],
      dataset_name: "Aggregation Report"
    },
    CLEAN: {
      type: "Sanitization",
      extras: "Fixing errors and inconsistencies",
      dataset_name: "Cleaned Data"
    },
    DEDUPE: {
      type: "Deduplication",
      extras: "Removing duplicate entries",
      dataset_name: "Unique Records"
    },
    JOIN: {
      type: "Inner Join",
      extras: [
        { left_columns: "Territory" },
        { right_columns: "Territory" }
      ],
      dataset2_name: "ETL N_D2_FRK1"
    }
  };

  const [expanded, setExpanded] = useState({});

  const toggleExpand = (action) => {
    setExpanded((prevState) => ({
      ...prevState,
      [action]: !prevState[action],
    }));
  };

  return (
    <div className="workflow-panel">
      <div className="workflow-header">
        <h3>Workflow</h3>
        <div className="workflow-icons">
          {actions.map((action) => (
            <i key={action} className={`pi ${action === 'NEW' ? PrimeIcons.TIMES : 
                                       action === 'AGGREGATE' ? PrimeIcons.DOWNLOAD : 
                                       action === 'CLEAN' ? PrimeIcons.REFRESH : 
                                       action === 'DEDUPE' ? PrimeIcons.CHECK_CIRCLE : 
                                       PrimeIcons.CONNECT}`}></i>
          ))}
        </div>
      </div>
      <hr className="divider" />
      {actions.map((action) => (
        <div key={action} className="bg-workflow-action">
          <div className="bg-work-flow-header">
            <button className="toggle-button-plus" onClick={() => toggleExpand(action)}>
              <i className={`pi ${expanded[action] ? PrimeIcons.MINUS : PrimeIcons.PLUS}`} />
            </button>
            <div className={`workflow-action-header ${expanded[action] ? "" : "workflow-action-header-rounded"}`}>
              <span>{action}</span>
            </div>
          </div>
          <div className="workflow-action-item">
            {expanded[action] && (
              <div className="bg-body-workflow">
                <div className="workflow-action-details">
                  {typeof actionData[action] === "object" ? (
                    Object.entries(actionData[action]).map(([key, value], index) => (
                      <div key={index}>
                        <strong>{key.replace(/_/g, " ")}:</strong>{" "}
                        {Array.isArray(value)
                          ? value.map((item, idx) => (
                              <div key={idx}>{typeof item === "object" ? JSON.stringify(item) : item}</div>
                            ))
                          : value}
                      </div>
                    ))
                  ) : (
                    <div>{actionData[action]}</div>
                  )}
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
